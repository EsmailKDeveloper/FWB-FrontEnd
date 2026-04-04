// "use client";
// import { createContext, useContext, useState, useEffect } from "react";
// import { getCurrentUser } from "@/services/api";

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchProfile = async () => {
//     try {
//       const user = await getCurrentUser();
//       const response = await fetch("http://localhost:8000/api/dashboard/student/", {
//         method: "GET",
//         credentials: "include"
//       });
//       if (response.ok) {
//         const data = await response.json();
//         setProfile(data);
//       }
//     } catch (err) {
//       console.error("خطا در دریافت پروفایل", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchProfile(); }, []);

//   return (
//     <UserContext.Provider value={{ profile, loading, refreshProfile: fetchProfile }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => useContext(UserContext);
