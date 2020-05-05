import React,{useState} from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
  const now= new Date().toLocaleTimeString();
  const[time ,setTime]=useState(now);
    
    function updateTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    }
    
    setInterval(updateTime, 1000);
  return (
    <header>
      <h1><HighlightIcon />Keeper</h1>
      <h3>Make Your Note</h3>
      <p>{time}</p>
    </header>
  );
}

export default Header;
