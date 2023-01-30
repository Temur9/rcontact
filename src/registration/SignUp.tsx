import AuthForm from "./AuthForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

const SignUp = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        })
      );
      navigate("/");
    });
  };
  return (
    <>
      <div className="signup__section">
        <div className="signup_container">
          <h1>Регистрация</h1>
          <AuthForm title="Регистрация" handleClick={handleRegister} />
          <p>
            Уже есть аккаунт? <Link className="text-blue-800" to="/login">Авторизация</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
