import { ChangeEvent, useContext } from "react";
import styles from "./Age.module.css";
import { ModalContext } from "../../context/ModalContext";

const Age = () => {
    const { age, setAge, setIsPageValid } = useContext(ModalContext);

  const updateAge = (event: ChangeEvent<HTMLInputElement>) => {
    const inputAge: string = event.target.value;
    setAge(parseInt(inputAge));
    setIsPageValid(inputAge.length > 0);
  };
  return (
    <div>
      <h2>Age</h2>
      <div className={styles.field}>
        <div>Age:</div>
        <input
          type="number"
          onChange={updateAge}
          value={age}
          className={styles.numberInput}
        />
      </div>
    </div>
  );
};

export default Age;
