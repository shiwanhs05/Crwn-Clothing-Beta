import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../from-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {  Container, ButtonsContainer, Heading} from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // EMAIL PASSWORD SIGN-IN
    try {
      signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFromFields();
    } catch (error) {
      switch(error.code) 
      {
        case "auth/wrong-password":alert("You've entered incorrect password for email");
        break;
        case "auth/user-not-found":alert("No user associated with this email");
        break;
        default: console.log(error);
      }
      if(error.code ===  "") ;
      else if(error.code === "")
      console.log(error);
    }
  };
  // GOOGLE POP-UP SIGN-IN
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <Container>
      <Heading>Already have an account</Heading>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="Submit">Sign In</Button>
          {/* By default type="Submit" , so to change this you have to explicitly change it. */}
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
};
export default SignInForm;
