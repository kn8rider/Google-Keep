import React, { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<Note>({
    id: 0,
    title: "",
    content: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAddNote = () => {
    if (newNote.title.trim() !== "" || newNote.content.trim() !== "") {
      setNotes((prevNotes) => [
        ...prevNotes,
        { ...newNote, id: prevNotes.length + 1 },
      ]);
      setNewNote({
        id: 0,
        title: "",
        content: "",
      });
    }
  };

  return (
    <div>
      <h1>Google Keep</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          defaultValue={newNote.content}
          onChange={handleInputChange}
        ></textarea>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
