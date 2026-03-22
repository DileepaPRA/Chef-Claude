import chefLogo from "./assets/Chef-claude-icon.jpg";

const Header = () => {
  return (
    <header className="flex border-2 border-gray-300 gap-[11px] rounded-t-lg shadow-subtle justify-center items-center w-160 mt-4 py-6">
      <img src={chefLogo} alt="chef-claude-logo" className="w-17"/>
      <h1 className="text-xl font-medium">Chef Claude</h1>
    </header>
  );
};

export default Header;