import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import styles from "./MainPage.module.css";
import pages from "../../util/pages";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <h1 id={styles.pageHeader}>MainPage</h1>
      <div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} pages={pages}></Modal>
      </div>
      <button className={styles.openModal} onClick={openModal}>
        Open Modal
      </button>
    </div>
  );
};

export default MainPage;
