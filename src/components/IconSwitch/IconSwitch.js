import styles from "./IconSwitch.module.css";

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className={styles.container}>
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
};

export default IconSwitch;
