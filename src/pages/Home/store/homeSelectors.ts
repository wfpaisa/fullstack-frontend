import { selector } from "recoil"
import { pageHomeUserState } from "./homeAtoms"

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(pageHomeUserState)

    return text.name.length
  },
})
