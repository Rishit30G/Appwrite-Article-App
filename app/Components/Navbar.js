const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <a href="/" className="text-white hover:text-gray-300">Articles</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="https://www.linkedin.com/in/rishit-gupta-4b18841b1/" target="_blank" className="hover:text-gray-300">Rishit Gupta</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
