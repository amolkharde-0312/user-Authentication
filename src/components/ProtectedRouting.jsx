
import { Navigate } from "react-router-dom";

const ProtectedRouting = ({ children }) => {

  // Browser ke LocalStorage se authToken read kar rahe hain. // Agar token hai to user login hai. // Agar token nahi hai to user login nahi hai.
  const authToken = localStorage.getItem("authToken");
  // Agar token nahi mila to Login page par redirect kar do.
  // replace prop browser history ko replace karta hai,
  // jisse Back button dabane par protected page par wapas nahi ja sakte.
  if (!authToken) {
    return <Navigate to="/login" replace />;
  }
  // Agar token mil gaya to children component render karo.
  // Yaani protected page (Browse) user ko dikhao.
  return children;
};
export default ProtectedRouting;