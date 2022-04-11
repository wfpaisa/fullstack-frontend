import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

// Settings for persisting data
const { persistAtom } = recoilPersist({
  key: "user",
  storage: localStorage,
})

/**  ----- Main atoms -----  **/
export const userState = atom({
  key: "userState",
  default: {
    id: "0",
    username: "",
    email: "",
    confirmed: false,
    blocked: false,
  } as IUserState,
  effects_UNSTABLE: [persistAtom],
})

/** ------------------------ Types ----------------------*/

/**
 * Settings state
 */
export interface IUserState {
  token: string
  id: string
  username: string
  email: string
  confirmed: boolean
  blocked: boolean
}

/**
 * User partial state
 */
export type IUserStatePartial = Partial<IUserState>
