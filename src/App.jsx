import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"
import  React,{ useState } from "react";

const App = () => {
  const [category,setCategory] = useState("general")
  const[mode,setMode] = useState("light");
  // const[text,setText] = useState('');
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  const toggleMode = ()=>{
    if(mode == "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // showAlert("Dark mode has been enabled","success");
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode has been enabled","success");

    }
  };
  return (
    <div>
      <Navbar setCategory={setCategory} toggleMode={toggleMode} />
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;
