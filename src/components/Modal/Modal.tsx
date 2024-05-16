import { useState } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../../context/ModalContext";
import { UserData } from "../../types/types";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pages: JSX.Element[];
}
const Modal = ({ isOpen, setIsOpen, pages }: ModalProps) => {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isPageValid, setIsPageValid] = useState<boolean>(false);

  const backPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPage = () => {
    if (pageNumber < pages.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const finish = () => {
    const userData: UserData = {
      firstName,
      lastName,
      age,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    resetModal();
  };
  
  const resetModal = () => {
    setIsOpen(false);
    setPageNumber(0);
    setFirstName("");
    setLastName("");
    setAge(0);
    setIsPageValid(false);
  }

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <ModalContext.Provider
        value={{
          firstName,
          lastName,
          age,
          isPageValid,
          setFirstName,
          setLastName,
          setAge,
          setIsPageValid,
        }}
      >
        {pages[pageNumber]}
      </ModalContext.Provider>

      <div className={styles.navigation}>
        <button onClick={backPage} disabled={pageNumber === 0}>
          Back
        </button>
        {pageNumber < pages.length - 1 ? (
          <button onClick={nextPage} disabled={!isPageValid}>
            Next
          </button>
        ) : (
          <button onClick={finish}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
