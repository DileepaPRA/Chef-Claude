import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';
import express from 'express';

const envCandidates = ['.env.local', '.env'];

for (const fileName of envCandidates) {
  const envPath = path.resolve(process.cwd(), fileName);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: true });
  }
}

const app = express();
const port = process.env.PORT || 3001;
const model = process.env.GOOGLE_AI_MODEL || 'gemini-2.0-flash';

app.use(express.json());

app.post('/api/recipe', async (req, res) => {
  const apiKey = process.env.GOOGLE_AI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error:
        'Missing GOOGLE_AI_API_KEY on server. Create .env.local in project root with GOOGLE_AI_API_KEY=your_key',
    });
  }

  const ingredients = Array.isArray(req.body?.ingredients) ? req.body.ingredients : [];

  if (ingredients.length < 4) {
    return res.status(400).json({
      error: 'Please provide at least four ingredients.',
    });
  }

  const prompt = `You are a chef assistant. Create exactly one practical recipe using this list of ingredients when possible: ${ingredients.join(', ')}. Include sections titled Recipe Name, Ingredients, and Instructions.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      const details = data?.error?.message || 'Failed to call Google AI Studio API.';
      return res.status(response.status).json({
        error: `${details} (Current model: ${model})`,
      });
    }

    const recipeText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!recipeText) {
      return res.status(500).json({ error: 'Model returned an empty response.' });
    }

    return res.json({ recipe: recipeText });
  } catch (error) {
    return res.status(500).json({
      error: 'Server error while generating recipe.',
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
  console.log(`Using Gemini model: ${model}`);
});
