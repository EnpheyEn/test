import React, { useState } from "react";
import { Menu, X, LogOut, User, Phone, KeyRound, Home } from "lucide-react";
import { Link } from "react-router-dom"; // นำเข้า Link จาก react-router-dom

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#D5223A] text-white flex items-center justify-between p-4 fixed top-0 left-0 w-full z-50">
      {/* เมนูแฮมเบอร์เกอร์ (เฉพาะมือถือ) */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="swap swap-rotate md:hidden">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* โลโก้กลาง */}
      <Link to="/Home">
        <img src="./MK_Ci.png" className="h-10 w-24 m-1" alt="Mikko Coffee Roasters" />
      </Link>

      {/* เมนู (รวม Desktop + Mobile) */}
      <div
        className={`${menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto text-[#D5223A] bg-white md:bg-transparent  md:text-white shadow-md md:shadow-none p-4 md:p-0 gap-2 md:gap-4`}
      >
        {/* ใช้ Link สำหรับการนำทาง */}
        <Link to= "/Home" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 md:hover:bg-transparent">
          <Home size={18}/> Home
        </Link>
        <Link to="/EditProflie" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 md:hover:bg-transparent">
          <User size={18} /> Edit Profile
        </Link>
        <Link to="/ResetPassword" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 md:hover:bg-transparent ">
          <KeyRound size={18} /> Reset Password
        </Link>
        <Link to="/ChangeNumber" className="flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-200 md:hover:bg-transparent">
          <Phone size={18} /> Change Phone Number
        </Link>
      </div>

      {/* ปุ่มล็อกเอาต์ */}
      <Link to="/">
        <LogOut size={24} />
      </Link>
    </div>
  );
}

export default Header;
