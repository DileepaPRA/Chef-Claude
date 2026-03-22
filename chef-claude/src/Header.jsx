import chefLogo from "./assets/Chef-claude-icon.jpg";

const Header = () => {
  return (
    <header className="mt-4 flex w-[640px] items-center justify-center gap-[11px] rounded-t-lg border-2 border-gray-300 py-6 shadow-subtle">
      <img src={chefLogo} alt="chef-claude-logo" className="w-[68px]"/>
      <h1 className="text-xl font-medium">Chef Claude</h1>
    </header>
  );
};

export default Header;