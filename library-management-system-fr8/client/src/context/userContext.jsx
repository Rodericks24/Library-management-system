import React, { createContext, useState, useEffect } from 'react';
import { fetchUserProfile } from '../components/api'; 
import { fetchAdmin } from '../components/adminapi';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin,setAdmin] = useState(null)
  useEffect(() => {
    fetchUserProfile(setUser);
    fetchAdmin(setAdmin)
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUserProfile: () => fetchUserProfile(setUser) ,admin,fetchAdmin: ()=> fetchAdmin(setAdmin)}}>
      {children}
    </UserContext.Provider>
  );
}
