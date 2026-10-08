
import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // LocalStorage se authToken delete kar rahe hain.// Isse user logout ho jayega.
    localStorage.removeItem("authToken");
    // Login page par redirect kar rahe hain. // replace:true ka matlab browser history me current page replace ho jayega.
    // Isse Back button dabane par user Browse page par wapas nahi jayega.
    navigate("/login", { replace: true });
  };
  return (
    <header className="flex justify-between items-center bg-black text-white px-8 py-4 shadow-md">
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};
export default Header;
