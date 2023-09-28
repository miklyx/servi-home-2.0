import { create } from 'zustand'

interface Auth {
  auth: string,
  setAuth: (auth: string) => string,
  removeAuth: () => string
}

export const useAuth = create((set) => ({
  auth: null,
  setAuth: (auth) => set(() => ({ auth })),
  removeAuth: () => set({ auth: null }),
}))