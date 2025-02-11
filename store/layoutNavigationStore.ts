import { create } from "zustand";

interface LayoutNavigationState {
    isOpen: boolean;
    shouldClose: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setShouldClose: (shouldClose: boolean) => void;
}

export const useLayoutNavigationStore = create<LayoutNavigationState>((set) => ({
    isOpen: false,
    shouldClose: false,
    setIsOpen: (isOpen) => set({ isOpen }),
    setShouldClose: (shouldClose) => set({ shouldClose }),
}));
