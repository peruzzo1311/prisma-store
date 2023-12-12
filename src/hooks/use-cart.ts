import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Object[];
  open: boolean;
  openChange: () => void;
  addItem: (data: Object) => void;
  removeItem: (data: Object) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      open: false,
      openChange: () => set((state) => ({ open: !state.open })),
      addItem: (data: Object) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item === data);

        if (existingItem) {
          return null;
        }

        set({ items: [...currentItems, data] });
      },
      removeItem: (data: Object) => {
        set({
          items: get().items.filter((item) => item !== data),
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => Object.fromEntries([["items", state.items]]),
    },
  ),
);

export default useCart;
