import React, { useEffect, useState } from "react";
import { checkValidateData } from "../utils/Validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Browser ke LocalStorage se authToken read kar rahe hain.
  // Agar token hai to user pehle se login hai.
  const authToken = localStorage.getItem("authToken");
  // JSON.parse string ko object me convert karta hai.
  const tokenparsed = JSON.parse(authToken);
  // Agar token already hai to Login page na dikhao.
  // Direct Browse page par bhej do.
  //Already login hua user dobara Login page nahi dekhega
  useEffect(() => {
    // useEffect is used because navigate is side effect
    if (tokenparsed) {
      navigate("/browse");
    } ////Tum useEffect ke andar use kar rahe ho:tokenparsed,navigate,Isliye dependency array me dono aaye.
  }, [tokenparsed, navigate]);

  const [loginForm, setLoginForm] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [isSignInForm, setIsSignInForm] = useState(true);
  // Input field change hone par ye function call hota hai.
  const handleChange = (e) => {
    // Input ka name aur value destructure kiya.

    const { name, value } = e.target;
    console.log(e);
    // Sirf jis field me change hua usko update kiya.
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    // Form submit hone par browser refresh hone se rokta hai.
    e.preventDefault();

    const message = checkValidateData(
      loginForm.Name,
      loginForm.Email,
      loginForm.Password,
      isSignInForm,
    );
    // Agar validation fail hui.
    if (message) {
      // Error state me save karo.
      setErrorMessage(message);
      // Function yahi stop kar do.
      // Neeche wala code execute nahi hoga.
      return;
    }
    // Validation pass hone par purana error hata do.
    setErrorMessage("");

    // User ka data LocalStorage me save kar do.
    // JSON.stringify object ko string me convert karta hai.
    localStorage.setItem("authToken", JSON.stringify(loginForm));
    console.log(loginForm);
    // Login successful hone ke baad Browse page open karo.
    navigate("/browse");
  };

  const ToggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="https://img.freepik.com/premium-vector/black-theme-background-wallpaper_1252911-12852.jpg?w=2000"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        onSubmit={handleLogin}
        className="border p-6 rounded-lg shadow-lg w-96 flex flex-col gap-4 absolute z-10 bg-black/70"
      >
        <h1 className="text-2xl font-bold text-center text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="Name" //name property batati hai ki form ka kaunsa field update karna hai.
            placeholder="Full Name"
            value={loginForm.Name} //Input ko React State se control karne ke liye (Controlled Component)
            onChange={handleChange} //User input ko detect karke State update karne ke liye
            className="border-2 p-2 rounded bg-white text-black hover:border-red-600"
          />
        )}
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          value={loginForm.Email}
          onChange={handleChange}
          className="border-2 p-2 rounded bg-white text-black hover:border-red-600"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={loginForm.Password}
          onChange={handleChange}
          className="border-2 p-2 rounded bg-white text-black hover:border-red-600"
        />
        <p className="text-red-600 font-bold text-sm">{errorMessage}</p>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-600 text-white px-6 py-2 rounded-lg font-bold cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer font-bold text-white"
          onClick={ToggleSignInform}
        >
          {isSignInForm
            ? "New Here? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
