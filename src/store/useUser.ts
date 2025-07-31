import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserType } from '../Types/UserType';

type UserState = {
  user: UserType | null;
  isAuthenticated: boolean;
  setUser: (user: UserType | null) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          
        }),
        
    }),

    {
      name: 'user-storage', 
    }
  )
  
);
