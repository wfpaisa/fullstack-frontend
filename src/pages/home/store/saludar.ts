import { atom } from "recoil"

export const saludarState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "Invitado", // default value (aka initial value)
})
