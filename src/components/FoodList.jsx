import FoodItem from "./FoodItem";
import styles from "./foodList.module.css";

export default function FoodList({ foodList, setFoodId }) {
  return (
    <>
      <div className={styles.title}>
        <h3>Suggestions : </h3>
        <hr />
      </div>
      <div className={styles.foodlistContainer}>
        {foodList &&
          foodList.map((item) => {
            return <FoodItem item={item} setFoodId={setFoodId} key={item.id} />;
          })}
      </div>
    </>
  );
}
