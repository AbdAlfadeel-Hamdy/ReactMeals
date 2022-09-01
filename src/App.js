import React, { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal/Modal";
import modalContext from "./store/modalContext";
function App() {
  const [modal, setModal] = useState(false);
  const [orderedMeals, setOrderedMeals] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const openModalHandler = () => setModal((prevState) => !prevState);
  const closeModalHandler = () => setModal((prevState) => !prevState);

  useEffect(() => {
    setTotal(
      orderedMeals.reduce(
        (acc, curMeal) => acc + curMeal.amount * curMeal.price,
        0
      )
    );
    setTotalItems(
      orderedMeals.reduce((acc, curMeal) => acc + curMeal.amount, 0)
    );
  }, [orderedMeals]);
  const orderMealHandler = (meal) => {
    if (meal.amount <= 0) return;
    setOrderedMeals((prevOrders) => {
      const index = prevOrders.findIndex((order) => order.name === meal.name);
      if (index === -1) return [meal, ...prevOrders];
      else {
        const prevAmount = prevOrders[index].amount;
        prevOrders[index] = { ...meal, amount: meal.amount + prevAmount };
        return [...prevOrders];
      }
    });
  };

  const changeOrderedMealsHandler = (update, name) => {
    setOrderedMeals((prevOrders) => {
      const index = prevOrders.findIndex((order) => order.name === name);
      prevOrders[index].amount += update;
      return [...prevOrders.filter((order) => order.amount > 0)];
    });
  };

  return (
    <modalContext.Provider
      value={{ modal, openModalHandler, closeModalHandler }}
    >
      {modal && (
        <Modal>
          <Cart
            orderedMeals={orderedMeals}
            total={total}
            onOrderChange={changeOrderedMealsHandler}
          />
        </Modal>
      )}
      <Header totalItems={totalItems} />
      <Meals onOrderMeal={orderMealHandler} />
    </modalContext.Provider>
  );
}

export default App;
