//import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
  
//     <div>
//     <MyName/>
//     <h1>Hello World {3+3}</h1>
//     <img src="" alt=" "/>
//     </div>
//   );
// }
// const MyName=()=>{
//   return (
// <h1>Nested Component hai ye esko App Component ke andr call kiya hai.</h1>
//   );
// }
// export default App;
// 
import React from 'react'
import Resturant from './Components/Basics/Resturant'
import UseState from './Components/Basics/Hooks/UseState';
import UseEffect from './Components/Basics/Hooks/UseEffect';
import UseReducer from './Components/Basics/Hooks/UseReducer';

const App = () => {
  return (
    <div>
   {/**  <UseState />
    <UseEffect />
  <UseReducer/>**/}
    <Resturant></Resturant>
    </div>
  )
}

export default App