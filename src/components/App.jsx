import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [myNotes, setMyNotes]=useState([]);

function addNote(note){
  setMyNotes(prevNotes => {
    return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    setMyNotes(prevNote=>{
      return prevNote.filter((items,index) =>
      {
        return index !=id;
      });
    });
  
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />

      { myNotes.map((noteItem , index)=> {
      return( <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />);
      })}
       
     
      
      <Footer />
    </div>
  );
}

export default App;
