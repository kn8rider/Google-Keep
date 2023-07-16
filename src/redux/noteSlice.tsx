import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
  id: string;
  title?: string;
  content: string;
  pinned: boolean;
}

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    pinNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload ? { ...note, pinned: !note.pinned } : note
      );
    },
  },
});

export const { addNote, deleteNote, pinNote } = notesSlice.actions;

export default notesSlice.reducer;
