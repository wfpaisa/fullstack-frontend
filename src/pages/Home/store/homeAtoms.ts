import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
})

export const pageHomeUserState = atom({
  key: "pageHomeUserState",
  default: {
    name: "Pespito",
    id: 1,
  },
  effects_UNSTABLE: [persistAtom],
})
