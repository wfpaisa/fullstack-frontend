import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

// Settings for persisting data
const { persistAtom } = recoilPersist({
  key: "settings",
  storage: localStorage,
})

/**  ----- Main atoms -----  **/
export const drawerState = atom({
  key: "drawerState",
  default: true,
  effects_UNSTABLE: [persistAtom],
})
