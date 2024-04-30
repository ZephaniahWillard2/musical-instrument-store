// import React, {useState} from 'react';
import React from 'react';

//Added >

const InstrumentItem = ({item, addToCart, removeFromCart, toggleFavorite}) =>{
    return(
        <div className='instrument-item'>
            <h4>{item.category}</h4>
            <p>{item.name}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
            <button onClick={() => toggleFavorite(item)}>{item.isFavorite ? 'Unfavorite' : 'Add Favorite'}</button>
                 {/* for this to work, add isFavorite as a property to array of music items. */}

        </div>

    )
}

export default InstrumentItem;








// const InstrumentItem = ({instrumentItem, addToCart, removeFromCart, toggleFavorite}) =>{
//     const {category, name} = instrumentItem;

//     const handleAddToCart = () => {
//         addToCart(instrumentItem);
//     }

//     const handleRemoveFromCart = () => {
//         removeFromCart(instrumentItem);
//     }

//     const [favorite, setFavorite] = useState(false);

//     const handleToggleFavorite = () => {
//         toggleFavorite(instrumentItem);
//         setFavorite(!favorite);
//     }
    
      
        
//         return (
//           <div className="instrument-item">
//             <h4>{category}</h4>
//             <p>{name}</p>
//             {addToCart && <button onClick={handleAddToCart}>Add to Cart</button>}
//             {removeFromCart && <button onClick={handleRemoveFromCart}>Remove From Cart</button>}
//             <button onClick={handleToggleFavorite}>{favorite ? 'Unfavorite' : 'Add to Favorite'}</button>
//           </div>
//         );
//       };
    
    
//     export default InstrumentItem;

//original^
