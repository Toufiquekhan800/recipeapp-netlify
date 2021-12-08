import React, {useState} from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [ 
    ...new Set ( Menu.map((currElm)=> {
        return currElm.category;
    })
    ),"All"
]
console.log(uniqueList)
const Resturant = () => {  
    const [navData, setNavData] = useState(uniqueList);
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);

    const filterMenu = (category)=>{
        if (category !== "All") {
            const updatedList = Menu.filter((currElm) =>{
                return currElm.category === category ;
            });
            setMenuData(updatedList);
        }
        else{
            setMenuData(Menu)
        }
    };

    return (
        <>
        <Navbar navData={navData} filterMenu={filterMenu} />
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Resturant;
