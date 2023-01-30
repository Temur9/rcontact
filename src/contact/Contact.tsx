import Form from "../components/Form";
import { useAuth } from "../hooks/use-auth";
import Login from "../registration/Login";
import { removeUser } from "../redux/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import "./contact.css";

const Contact = () => {
  const dispatch = useAppDispatch();

  const {isAuth, email} = useAuth();

  return isAuth ? (
    <>
      <div className="contact p-4">
        <div className="container mx-auto w-9/12">
          <div className="contact__section">
            <Form />
            <button className="bg-red-500 text-white" onClick={()=>dispatch(removeUser())}>Выйти из {email}</button>
          </div>
        </div>
      </div>
    </>
  ):(
    <Login/>
  )
};

export default Contact;
