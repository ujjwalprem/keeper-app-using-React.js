import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const[isExpand,setIsExpand]=useState(false);

  const[note, setNote]=useState({
    title:"",
    content:""
  });

  

  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote => {
      return{
        ...prevNote,
        [name]:value
      };
    });
  }
  function submit(event){
    props.add(note);
    setNote({
      title:"",
    content:""
    });
    event.preventDefault();
   
  }

  function expand(){
    setIsExpand(true);
  }
  
  return (
    <div>
      <form className="create-note" >
        { isExpand && <input
         name="title"
          placeholder="Title"
           value={note.title}
            onChange={handleChange}
         />}
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpand ? "3" :1} 
         value={note.content} 
         onChange={handleChange}
         onClick={expand}  
         />
       <Zoom in={isExpand}>
        <Fab onClick={submit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div> 
  );
}

export default CreateArea;
