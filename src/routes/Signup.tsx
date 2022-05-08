import React, { FC } from "react";
import { Box } from "../components/composition";

const Signup: FC = () => (
  <div>
    <Box>
      <h1>Get started with Wrapbook</h1>
      <p>
        Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
        easy to use platform for managing productions.
      </p>
      <input type="email" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter a password" />
      <button>Continue to Wrapbook</button>
    </Box>
  </div>
);

export default Signup;
