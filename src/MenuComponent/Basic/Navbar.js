import React from 'react'

const Navbar = ({navData, filterMenu}) => {
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    {
                    navData.map((currElm) =>{
                        return(
                           <button className="btn-group__item" onClick= { ()=> filterMenu(currElm)} key={currElm}> {currElm} </button>
                        )
                        })
                    }
                   {/*
                   <button className="btn-group__item" onClick= { ()=> filterMenu("breakfast")}> Breakfast </button>
                   <button className="btn-group__item" onClick= { ()=> filterMenu("evening")}> Evening </button>
                   <button className="btn-group__item" onClick= { ()=> filterMenu("dinner")}> Diner </button>
                   <button className="btn-group__item" onClick= { ()=> filterMenu()}> All </button>
                   {/*<button className="btn-group__item" onClick= { ()=> setMenuData(Menu)}> All </button>*/}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
