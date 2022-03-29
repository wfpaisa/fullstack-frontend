import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
  key: "components-layout-main",
  storage: localStorage,
})

export const layoutMainState = atom({
  key: "layoutMainState",
  default: {
    drawerOpen: true,
    drawerSize: 100,
  },
  effects_UNSTABLE: [persistAtom],
})
