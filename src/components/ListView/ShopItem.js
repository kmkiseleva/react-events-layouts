import styles from "./ListView.module.css";

const ShopItem = ({ item }) => {
  const { name, price, color, img } = item;
  const { card, image, title } = styles;

  return (
    <div className={card}>
      <div className={styles["image-container"]}>
        <img className={image} src={img} alt={Math.random()} />
      </div>
      <h1 className={title}>{name}</h1>
      <h2 className={styles.color}>{color}</h2>
      <div className={styles.price}>${price}</div>
      <button>Add to cart</button>
    </div>
  );
};

export default ShopItem;
