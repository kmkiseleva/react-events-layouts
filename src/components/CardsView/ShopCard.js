import styles from "./CardsView.module.css";

const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;
  const { title, image, footer } = styles;

  return (
    <div className={styles.card}>
      <h1 className={title}>{name}</h1>
      <h2 className={styles.color}>{color}</h2>
      <div className={styles["image-container"]}>
        <img className={image} src={img} alt={Math.random()} />
      </div>
      <div className={footer}>
        <div className={styles.price}>${price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
