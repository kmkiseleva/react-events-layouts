import styles from "./Store.module.css";
import sourceData from "../../data/sourceData";
import { useState } from "react";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import IconSwitch from "../IconSwitch/IconSwitch";

const Store = () => {
  const products = sourceData;
  const [isCardsView, setOtherView] = useState(true);

  return (
    <div className={styles.container}>
      <IconSwitch
        icon={isCardsView ? "view_module" : "view_list"}
        onSwitch={() => {
          setOtherView(!isCardsView);
        }}
      />
      {isCardsView ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

export default Store;
