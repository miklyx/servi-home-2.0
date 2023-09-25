import { create } from 'zustand'

export const useAuth = create((set) => ({
  auth: null,
  setAuth: (auth) => set(() => ({ auth })),
  removeAuth: () => set({ auth: null }),
}))