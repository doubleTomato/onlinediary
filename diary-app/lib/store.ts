import { create } from "zustand";

interface DiaryState {
  entries: { id: string; title: string; content: string; date: string }[];
  addEntry: (entry: { id: string; title: string; content: string; date: string }) => void;
}

export const useDiaryStore = create<DiaryState>((set) => ({
  entries: [],
  addEntry: (entry) => set((state) => ({ entries: [...state.entries, entry] })),
}));
