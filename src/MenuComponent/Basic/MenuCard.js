import React from 'react'

const MenuCard = ({menuData}) => {
    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((currelm)=>{
                        console.log(currelm)
                        return (
                        <div className="card-container" key={currelm.id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{currelm.id}</span>
                                <h2 className="card-title"> {currelm.name}</h2>
                                <span className="card-description subtle">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, adipisci maxime. Dolorum?
                                </span>
                                <div className="card-read">{currelm.category}</div>
                            </div>
                            <img src={currelm.image} alt="img" className="card-media" />

                            <span className="card-tag  subtle">Order Now</span>
                        </div>
                    </div>
                        )
                    })
                }
            </section> 
        </>
    )
}

export default MenuCard;
