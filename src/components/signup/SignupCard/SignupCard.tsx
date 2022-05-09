import React, { FC } from "react";

import { Button } from "../../shared/action";
import { Box } from "../../shared/composition";
import { EmailInput, PasswordInput } from "../../shared/form";

const SignupCard: FC = () => {
  return (
    <Box className="max-w-lg">
      <h1>Get started with Wrapbook</h1>
      <p>
        Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
        easy to use platform for managing productions.
      </p>
      <EmailInput />
      <PasswordInput />
      <Button>Continue to Wrapbook</Button>
    </Box>
  );
};

export { SignupCard };
