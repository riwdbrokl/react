import React, { useState } from "react";
import classes from "../../Styles/Dish/Dish.module.scss";
import "../../styles.css";
import DishItem from "./DishItem";

const Dish = () => {
  const [dishName, setDishName] = useState("");
  const [dishComposition, setDishComposition] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishList, setDishList] = useState([]);
  const createHandler = () => {
    setDishList([
      ...dishList,
      { id: dishList.length + 1, dishName, dishComposition, dishPrice }
    ]);
  };
  console.log(dishList);
  return (
    <div className={classes["Dish"]}>
      <div className={classes["Dish__Container"]}>
        <div className={classes["Dish__Container-title"]}>Создание блюда</div>
        <div className={classes["Dish__Container-inputs"]}>
          <input
            value={dishName}
            onChange={(e) => setDishName(e.currentTarget.value)}
            placeholder="Название блюда"
            className=""
          ></input>
          <input
            value={dishComposition}
            onChange={(e) => setDishComposition(e.currentTarget.value)}
            placeholder="Состав блюда"
            className=""
          ></input>

          <input
            value={dishPrice}
            onChange={(e) => setDishPrice(e.currentTarget.value)}
            placeholder={"Стоимость блюда"}
            className=""
          ></input>

          <div className={classes["Dish__Container-buttons"]}>
            <button onClick={() => createHandler()}>Создать</button>
          </div>
        </div>
      </div>
      <DishItem setDishList={setDishList} dishList={dishList} />
    </div>
  );
};
export default Dish;
