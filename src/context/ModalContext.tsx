import { createContext } from "react";

interface ModalContextType {
    firstName: string;
    lastName: string;
    age: number;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
    setAge: React.Dispatch<React.SetStateAction<number>>;
    isPageValid: boolean;
    setIsPageValid: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  // Create the context with initial values
  export const ModalContext = createContext<ModalContextType>({
    firstName: '',
    lastName: '',
    age: 0,
    setFirstName: () => {},
    setLastName: () => {},
    setAge: () => {},
    isPageValid: false,
    setIsPageValid: () => {}
  });
