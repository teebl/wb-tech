import React, {
  ChangeEventHandler,
  createRef,
  FC,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../shared/action";
import { Box } from "../../shared/composition";
import { Input } from "../../shared/form";

const VALID_EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const VALID_PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Steps = {
  email: "email",
  password: "password",
};

const SignupCard: FC = () => {
  const navigate = useNavigate();

  const ref = createRef<HTMLInputElement>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();
  const [step, setStep] = useState<keyof typeof Steps>("email");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emailValid = () => VALID_EMAIL_REGEX.test(email);
  const passwordValid = () => VALID_PASSWORD_REGEX.test(password);

  useEffect(() => {
    if (step === "password") {
      ref.current?.focus();
    }
  }, [step]);

  const emailErrorMessage = "The email entered is not valid.";
  const passwordErrorMessage =
    "The password must have a minimum eight characters, and at least one letter and one number.";

  const stepToPassword = () => {
    if (email === "") return;
    if (!emailValid()) setEmailError(emailErrorMessage);

    if (emailValid()) {
      setEmailError(undefined);
      setStep("password");
    }
  };

  const stepToSubmit = () => {
    if (!emailValid()) setEmailError(emailErrorMessage);
    if (!passwordValid()) setPasswordError(passwordErrorMessage);

    if (emailValid() && passwordValid()) {
      setEmailError(undefined);
      setPasswordError(undefined);

      navigate("/dashboard");
    }
  };

  const nextStep = () => {
    switch (step) {
      case "email":
        stepToPassword();
        return;
      case "password":
        stepToSubmit();
        return;
      default:
        return;
    }
  };

  const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box className="max-w-lg">
      <h1>Get started with Wrapbook</h1>
      <p>
        Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
        easy to use platform for managing productions.
      </p>
      <Input
        autoFocus
        type="email"
        placeholder="Enter your email address"
        onEnter={nextStep}
        onChange={handleEmailInput}
        error={emailError}
        valid={emailValid()}
        value={email}
      />
      <Input
        ref={ref}
        type="password"
        placeholder="Enter a password"
        onEnter={() => {
          nextStep();
        }}
        className={step !== "password" ? "hidden" : ""}
        error={step === "password" ? passwordError : undefined}
        valid={passwordValid()}
        onChange={handlePasswordInput}
        value={password}
      />
      <Button
        disabled={!emailValid() || !passwordValid()}
        role="submit"
        onClick={nextStep}
      >
        Continue to Wrapbook
      </Button>
    </Box>
  );
};

export { SignupCard };
