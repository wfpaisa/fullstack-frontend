import create, { StateCreator } from "zustand"
import { persist, PersistOptions } from "zustand/middleware"

export interface ISettingsState {
  darkMode: boolean
  drawer: boolean
  setDarkMode: (newState: boolean) => void
  toogleDarkMode: () => void
  toogleDrawer: () => void

  // authenticate: (username: string, password: string) => Promise<void>
}

type TPersist = (
  config: StateCreator<ISettingsState>,
  options: PersistOptions<ISettingsState>
) => StateCreator<ISettingsState>

export const settingsStore = create<ISettingsState>(
  (persist as TPersist)(
    (set) => ({
      darkMode: false,
      drawer: false,
      setDarkMode: (newState) => set(() => ({ darkMode: newState })),
      toogleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      toogleDrawer: () => set((state) => ({ drawer: !state.drawer })),
    }),
    {
      name: "settings",
      getStorage: () => localStorage,
    }
  )
)
