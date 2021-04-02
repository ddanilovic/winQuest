import React, { useState, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const emailVal = e.target.value;
    const passwordVal = e.target.value;
    if (e.target.type === "password") {
      setPassword({ passwordVal });
    } else {
      setEmail({ emailVal });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    //fetch data from api
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        const email = response.data.email.toLowerCase();
        const pass = response.data.address.zipcode
          .split("-")
          .slice(0, 1)
          .toString();
        console.log(pass, email);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
