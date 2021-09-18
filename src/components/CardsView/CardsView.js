import styles from "./CardsView.module.css";
import ShopCard from "./ShopCard";

const CardsView = ({ cards }) => {
  return (
    <div className={styles["card-container"]}>
      {cards.map((card) => (
        <ShopCard key={Math.random()} card={card} />
      ))}
    </div>
  );
};

export default CardsView;
