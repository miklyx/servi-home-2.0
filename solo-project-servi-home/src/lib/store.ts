import { create } from 'zustand'

interface Auth {
  auth: string,
  setAuth: (auth: string) => void,
  removeAuth: () => void
}

export const useAuth = create<Auth>((set) => ({
  auth: null,
  setAuth: (auth) => set(() => ({ auth })),
  removeAuth: () => set({ auth: null }),
}))