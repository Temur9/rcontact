import React, { useEffect, useState } from "react";
import { IContact } from "../models";
import { firestore } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  query,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";

import "./table.css";
import "./form.css";

interface IEditArr {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  tags: string;
}

const Form = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [name, setName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [tags, setTags] = useState<any>("");

  ///////////////////////////////////Create contacts
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name === "") {
      alert("Дополните поля");
      return;
    }
    await addDoc(collection(firestore, "contacts"), {
      name: name,
      phoneNumber: phone,
      email: email,
      tags: tags,
    });

    setName("");
    setEmail("");
    setPhone("");
    setTags("");
  };

  ///////////////////////////////// Read contacts from firebase
  useEffect(() => {
    const q = query(collection(firestore, "contacts"));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot: QuerySnapshot<DocumentData>) => {
        setContacts(
          querySnapshot.docs.map((doc: any) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    );
  }, []);

  ///////////////////////////////////// Update contacts in firebase
  const values = (contact: any) => {
    const findContact: any = contacts.find((c) => c === contact);
    setName(findContact.name);
    setPhone(findContact.phoneNumber);
    setEmail(findContact.email);
    setTags(findContact.tags);
  };

  const updateHandler = async (contact: any) => {
    await updateDoc(doc(firestore, "contacts", contact.id), {
      name: name,
      phoneNumber: phone,
      email: email,
      tags: tags,
    });
  };

  // const editHandler = (contact: any) => {
  //   const findContact: any = contacts.find((c) => c === contact);
  //   setValue(findContact);
  // };
  // console.log(editContact);

  // const changeHandler = (contact: React.ChangeEvent<HTMLInputElement>) => {
  //   let edited: any = contact.target.value;
  //   setValue(edited);
  // };g

  ////////////////////////////////////////// Delete contacts
  const deleteContact = async (contact: any) => {
    await deleteDoc(doc(firestore, "contacts", contact.id));
  };

  return (
    <>
      <div className="form__section">
        <form
          onSubmit={submitHandler}
          className="forms flex justify-between mb-6">
          <input
            value={name}
            onChange={(name) => setName(name.target.value)}
            type="text"
            placeholder="Ф.И.О."
          />
          <input
            value={phone}
            onChange={(phone) => setPhone(phone.target.value)}
            type="text"
            placeholder="Номер телефона"
          />
          <input
            value={email}
            onChange={(email) => setEmail(email.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={tags}
            onChange={(tags) => setTags(tags.target.value)}
            type="text"
            placeholder="Теги"
          />
          <button className="contact_add-btn">Добавить</button>
          {/* <button onClick={updateHandler} className="contact_add-btn">Изменить</button> */}
        </form>

        <div className="table">
          <table>
            <tr>
              <th>Ф.И.О.</th>
              <th>Номер телефона</th>
              <th>Электронная почта</th>
              <th>Теги</th>
              <th></th>
            </tr>
            {contacts.map((contact) => (
              <tr>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>{contact.tags}</td>
                <td className="actions text-center">
                  <span
                    onClick={() => values(contact)}
                    className="text-2xl text-blue-600	">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </span>
                  <span
                    onClick={() => deleteContact(contact)}
                    className="text-2xl ml-3 text-red-600">
                    <i className="fa-solid fa-trash-can"></i>
                  </span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Form;
