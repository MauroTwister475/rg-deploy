import { create } from "zustand";

interface usePrintProps {
  isPrinting: boolean;
  onSetPrinting: (isPrinting: boolean) => void;
}

export const usePrintStore = create<usePrintProps>((set) => ({
  isPrinting: false,
  onSetPrinting: (isPrinting: boolean) => {
    set(state => ({ isPrinting: isPrinting }));
  }
}))