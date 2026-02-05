import React from "react";
import { Link, useLocation } from "react-router-dom"; // Cần cài react-router-dom

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const location = useLocation(); // Lấy đường dẫn hiện tại để active menu

  const navLinks = [
    { name: "Homepage", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Solutions", path: "/solutions" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] z-[1000] transition-all duration-300 flex items-center 
      ${isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black font-bold">
        {/* Logo - Click để về home */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="h-10 object-contain" />
        </Link>

        {/* Navigation & Language Group */}
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div
                  key={link.name}
                  className="flex flex-col items-center relative group"
                >
                  <Link
                    to={link.path}
                    className={`text-[15px] font-bold transition-colors duration-300 
                      ${isActive ? "text-[#3c90fc]" : "text-black hover:text-[#3c90fc]"}`}
                  >
                    {link.name}
                  </Link>
                  {/* Gạch chân: hiện nếu active hoặc khi hover */}
                  <div
                    className={`absolute -bottom-2 h-[2.5px] bg-[#3c90fc] transition-all duration-300 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></div>
                </div>
              );
            })}
          </nav>

          {/* Language Select */}
          <div className="flex items-center gap-2 cursor-pointer border border-black/10 px-3 py-1.5 rounded-full text-black bg-white/50 backdrop-blur-sm">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="EN"
              className="w-[18px] rounded-sm"
            />
            <select className="bg-transparent border-none font-bold text-[13px] outline-none cursor-pointer appearance-none">
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            <span className="text-[10px] opacity-50">▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
