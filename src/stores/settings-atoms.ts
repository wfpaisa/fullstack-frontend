import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

// Settings for persisting data
const { persistAtom } = recoilPersist({
  key: "settings",
  storage: localStorage,
})

/**  ----- Main atoms -----  **/
export const darkModeState = atom({
  key: "darkModeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
})

/**  ----- Main atoms -----  **/
export const settingsState = atom({
  key: "settingsState",
  default: {
    token: null,
    darkMode: false,
  } as ISettingsState,
  effects_UNSTABLE: [persistAtom],
})

/** ------------------------ Types ----------------------*/

/**
 * Settings state
 */
export interface ISettingsState {
  token: string | null
  darkMode: boolean
}

/**
 * Settings partial state
 */
export type ISettingsStatePartial = Partial<ISettingsState>
