import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal/Modal";
import modalContext from "./store/modalContext";
function App() {
  const [modal, setModal] = useState(false);
  const openModalHandler = () => setModal((prevState) => !prevState);
  const closeModalHandler = () => setModal((prevState) => !prevState);

  return (
    <modalContext.Provider
      value={{ modal, openModalHandler, closeModalHandler }}
    >
      {modal && (
        <Modal>
          <Cart />
        </Modal>
      )}
      <Header />
      <Meals />
    </modalContext.Provider>
  );
}

export default App;
