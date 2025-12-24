import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface User {
  fullname: string;
  email: string;
}

export interface SignupData {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  company: string;
  agency: string;
}

interface UserContextType {
  user: User | null;
  signup: (data: SignupData) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

const USER_KEY = "app_user"; // logged in user
const SIGNUP_KEY = "signup_data"; // stored signup data

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔹 Page refresh ke baad bhi user rahe
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = async (data: SignupData) => {
    try {
      await new Promise((res) => setTimeout(res, 500));

      // signup data save
      localStorage.setItem(SIGNUP_KEY, JSON.stringify(data));

      const loggedUser = { fullname: data.fullname, email: data.email };
      localStorage.setItem(USER_KEY, JSON.stringify(loggedUser));
      setUser(loggedUser);

      return true;
    } catch (err) {
      console.error("Signup failed:", err);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await new Promise((res) => setTimeout(res, 500));

      const storedSignup = localStorage.getItem(SIGNUP_KEY);
      if (!storedSignup) return false;

      const signupData: SignupData = JSON.parse(storedSignup);

      if (signupData.email === email && signupData.password === password) {
        const loggedUser = {
          fullname: signupData.fullname,
          email: signupData.email,
        };

        localStorage.setItem(USER_KEY, JSON.stringify(loggedUser));
        setUser(loggedUser);
        return true;
      }

      return false;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
