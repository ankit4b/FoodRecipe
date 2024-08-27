import styles from "./foodItem.module.css";

export default function FoodItem({ item, setFoodId }) {
  const selectRecipe = () => {
    setFoodId(item.id);
    console.log("Food id : ", item.id);
  };
  return (
    <>
      <div className={styles.card} onClick={selectRecipe}>
        <img src={item.image} className={styles.cardImg} />
        <h5 className={styles.cardTitle}>{item.title}</h5>
      </div>
    </>
  );
}
