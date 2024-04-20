import { create } from 'zustand';

interface DeleteModalStore {
  isOpen: boolean,
  onSetIsOpen: () => void,
  onClose: () => void,
}

export const useDeleteModalStore = create<DeleteModalStore>((set) => ({
  isOpen: false,
  onSetIsOpen: () => {
    set(state => ({ isOpen: true }));
  }, 
  onClose: () => {
    set(state => ({ isOpen: false }));
  }
}))
