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
