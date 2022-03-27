import { selector } from "recoil"
import { saludarState } from "./saludar"

export const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    console.log("get", get(saludarState))
    const text = get(saludarState)

    return text.length
  },
})
