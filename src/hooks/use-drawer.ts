import { create } from "zustand";

export interface Page {
  label: string;
  path: string;
  active: boolean;
}

interface DrawerStore {
  open: boolean;
  openChange: () => void;
}

const useDrawer = create<DrawerStore>((set, get) => ({
  open: false,
  openChange: () => set((state) => ({ open: !state.open })),
}));

export default useDrawer;
