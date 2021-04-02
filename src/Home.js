import React from "react";
import { useGlobalContext } from "./context";
import Login from "./components/Login";

const Home = () => {
  const {
    openSidebar,
    openModal,
    handleChange,
    handleSubmit,
  } = useGlobalContext();

  return (
    <main>
      <button onClick={openModal} className="btn">
        show modal
      </button>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  );
};

export default Home;
