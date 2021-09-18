import styles from "./ListView.module.css";
import ShopItem from "./ShopItem";

const ListView = ({ items }) => {
  return (
    <div className={styles["card-container"]}>
      {items.map((item) => (
        <ShopItem key={Math.random()} item={item} />
      ))}
    </div>
  );
};

export default ListView;
