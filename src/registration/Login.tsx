import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthForm from "./AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Зарегистрируетесь!!!"));
  };
  return (
    <>
      <div className="login__section">
        <div className="login_container">
          <h1>Авторизация</h1>
          <AuthForm title="Войти" handleClick={handleLogin} />
          <p>
            Еще не зарегистрировали? <Link className="text-blue-800" to="/signup">Регистрация</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
