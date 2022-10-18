// import React, { useState } from 'react'
// import Menu from "./menuApi";
// //import Menucarf from "./";



// const Resturant = () => {
// //Hook state==Redux
// const[menuData,setMenuData]=useState(Menu);//initialdata
// console.log(menuData);





//   return (
//     <>
//     // <div>Resturant</div>
//     // <div>akanksha</div>
//   <div className="card-container">
//   <div className="card">
//   <div className="card-body">
//   <span className="card-number card-circle subtle">1 </span>
//   <span className="card-author card-circle subtle">Breakfast </span>
//   <h2 className="card-title">Maggiee </h2>
//   <span className="card-author card-circle subtle">jiiiiiiiiiiiiiiiiii
//    </span>
//    <div className="card-read"> Read </div>
   
//    <span className="card-tag"> Order Now </span>
//   </div>
//   </div>
//   </div>
//     </>
//   )
// }
// export default Resturant;
import React from 'react'
import Menu from './MenuApi'
import  { useState } from "react";
import './style.css';
//import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from "./Navbar";



const uniqueList =[
  ...new Set(
  Menu.map((curElem)=>{
return curElem.category;

})
),
"All",
];
console.log(uniqueList);


const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
 /*  //console.log(menuData); */
 const [menuList, setMenuList] = useState(uniqueList);

 const filterItem = (category) => {
  if (category === "All") {
    setMenuData(Menu);
    return;
  }
 


const updatedList =Menu.filter((curElem)=>{ 
 {/*   yha hum category ke base pr data ko choose krke le rhe hai through filter use krke ,filter me curElem me data a rha hai
   return me jb match hoga to return kr dege 
updatedsetmenu: - new data bhrj dega or print kr dega curr data ko update kr dega.... */}

  return curElem.category===category;

  

});
setMenuData(updatedList);
};




  return (
    <>
   <nav className="navbar">
   <div className="btn-group">
   
   <button className="btn-group_item"
    onClick={()=>
      filterItem("breakfast")}>
      Welcome to Akanksha Food Corner</button>
  
   
   </div></nav>
    

    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant;