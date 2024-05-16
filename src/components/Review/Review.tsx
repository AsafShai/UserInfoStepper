import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const Review = () => {
  const { firstName, lastName, age } = useContext(ModalContext);
  return (
    <div>
      <h2>Review Page</h2>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Age Name: {age}</div>
    </div>
  );
};

export default Review;
