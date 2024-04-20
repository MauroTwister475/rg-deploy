import { create } from 'zustand';
import { RelatoryProps } from '../@types/Types';

interface RelatoryDataProps {
  Relatory: RelatoryProps,
  onSetData: (relatory: RelatoryProps) => void,
}

export const useRelatoryDataStore = create<RelatoryDataProps>((set) => ({
  Relatory: {
    id: 1,
    create_at: new Date(),
    theme: "",
  },
  onSetData(Relatory: RelatoryProps) {
    set((state) => ({ Relatory: Relatory })) 
  }
}))
