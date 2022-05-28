import create, { StateCreator } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

export type TUser = {
  token: string
  id: string
  username: string
  email: string
  blocked: boolean
  confirmed: boolean
}

export interface IUserState extends TUser {
  setUser: (user: TUser) => void
  setLogout: () => void
}

export const userModel = {
  token: "",
  id: "0",
  username: "",
  email: "",
  confirmed: false,
  blocked: false,
} as TUser

type TPersist = (
  config: StateCreator<IUserState>,
  options: PersistOptions<IUserState>
) => StateCreator<IUserState>

export const userStore = create<IUserState>(
  (persist as TPersist)(
    (set) => ({
      ...userModel,
      setUser: (newUser) => set((state) => ({ ...state, ...newUser })),
      setLogout: () => set(() => ({ ...userModel })),
    }),
    {
      name: "user",
      getStorage: () => localStorage,
    }
  )
)
