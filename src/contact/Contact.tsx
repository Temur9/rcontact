import Form from "../components/Form";
// import { contacts } from "../data/contacts";

import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact p-4">
        <div className="container mx-auto w-9/12">
          <div className="contact__section">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
