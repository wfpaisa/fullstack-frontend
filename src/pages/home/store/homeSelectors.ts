import { selector } from "recoil"
import { pageHomeUserState } from "./homeAtoms"

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    console.log("get", get(pageHomeUserState))
    const text = get(pageHomeUserState)

    return text.name.length
  },
})
