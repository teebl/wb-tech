import React, { FC } from "react";
import { Box } from "../components/shared/composition";
import { EmailInput, PasswordInput } from "../components/shared/form/";
import { Button } from "../components/shared/action";

const Signup: FC = () => (
  <div>
    <Box>
      <h1>Get started with Wrapbook</h1>
      <p>
        Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
        easy to use platform for managing productions.
      </p>
      <EmailInput />
      <PasswordInput />
      <Button>Continue to Wrapbook</Button>
    </Box>
  </div>
);

export default Signup;
