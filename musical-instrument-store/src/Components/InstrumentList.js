import React from "react";
import InstrumentItem from "./InstrumentItem";

//Added >

const InstrumentList = ({instrumentItems, addToCart, removeFromCart, toggleFavorite}) => {
    return(
        <>
        <h2>Instrument List</h2>
        <div className="instrument-list">
                {instrumentItems.map(item => (
                    <InstrumentItem key={item.id} item={item} 
                    addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>
                ))}
        </div>
        </>
    )
}

export default InstrumentList;




// const InstrumentList = ({instrumentItems, addToCart, removeFromCart, toggleFavorite}) => {
//     return(
//         <>
//         <h2>Instrument List</h2>
//         <div className='instrument-list'>
            
//             {instrumentItems.map((instrumentItem, index) => (
//             <InstrumentItem key = {index} instrumentItem = {instrumentItem} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>
//             ))}
//         </div>
//         </>
//     );
// };



//   export default InstrumentList;

//original^
