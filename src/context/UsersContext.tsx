import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface IUserContext {
  users: string[];
  addUser: (user: string) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // LocalStorage for users
  const storedUsers = localStorage.getItem("users");
  const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];
  // State for users
  const [users, setUsers] = useState<string[]>(initialUsers);

  const addUser = (user: string) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};
