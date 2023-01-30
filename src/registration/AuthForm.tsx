import React, { FC, useState } from "react";
import "./forms.css";
interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const AuthForm: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div className="auth-form__section">
        <input
          className="auth-form"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          className="auth-form"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => handleClick(email, pass)}>{title}</button>
      </div>
    </>
  );
};

export default AuthForm;
