"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getCurrentUser } from "@/services/api";

// ✅ تایپ پروفایل
interface UserProfile {
  first_name: string;
  last_name: string;
  phone_number: string;
  student_code: string;
  birth_day?: string;
  email_address?: string;
  status?: string;
  date_joined?: string;
  date_enroll?: string;
  address: string;
}

// ✅ تایپ کانتکست
interface UserContextType {
  profile: UserProfile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

// ساخت کانتکست
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  const fetchProfile = async () => {
    try {
      const user = await getCurrentUser();

      if (user.role !== "student") return;

      const res = await fetch("http://localhost:8000/api/dashboard/student/", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      }
    } catch (error) {
      console.error("خطا:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <UserContext.Provider value={{ profile, loading,error, refreshProfile: fetchProfile }}>
      {children}
    </UserContext.Provider>
  );
};

// hook سفارشی
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
};