export const checkValidateData = (name, email, password, isSignInForm) => {

  // Sign Up me hi Name validate hoga
  if (!isSignInForm) {
    const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name);
    console.log(isNameValid);

    if (!isNameValid) return "Enter Full Name Please";
  }


  const isEmailValid =/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(email);

  const isPasswordValid =/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#$%&?]).{8,}$/.test(password);


  if (!isEmailValid) return "Email Id is not Valid";


  if (!isPasswordValid)return "Password must contain 8 characters";

  return null;
};