import { ChangeEvent, useContext } from "react";
import styles from "./UserName.module.css";
import { ModalContext } from "../../context/ModalContext";

const UserName = () => {
  const {firstName, lastName, setFirstName, setLastName, setIsPageValid} = useContext(ModalContext);

  const updateFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    const isPageValid = event.target.value.length > 0 && lastName.length > 0;
    setIsPageValid(isPageValid);
  };

  const updateLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    const isPageValid = event.target.value.length > 0 && firstName.length > 0;
    setIsPageValid(isPageValid);
  };

  return (
    <div className="container">
      <h2>UserName</h2>
      <div className={styles.field}>
        <div>FirstName:</div>
        <input onChange={updateFirstName} value={firstName} />
      </div>
      <div className={styles.field}>
        <div>LastName:</div>
        <input onChange={updateLastName} value={lastName} />
      </div>
    </div>
  );
};

export default UserName;
