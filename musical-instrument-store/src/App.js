// import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import InstrumentList from './Components/InstrumentList';

//New >

const App = () => {

  const [instrumentItems, setInstrumentItems] = useState([
    { id: 1, category: 'Guitar', name: "Fender Stratocaster", isFavorite: false },
    { id: 2, category: 'Keyboard', name: "Yamaha P-125", isFavorite: false },
    { id: 3, category: 'Drum', name: "DW Collector's Series", isFavorite: false }
  ]);

  const [cart, setCart] = useState([]);

  const [message, setMessage] = useState('');

  const addToCart = (item) =>{
    setCart([...cart, item]);
    setMessage(`Added ${item.title} to the cart.`);
  }

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
    setMessage(`Removed ${item.title} from the cart.`);
  };

  const toggleFavorite = (item) => {
    const updatedItems = instrumentItems.map( instrumentItem =>
      instrumentItem.id === item.id ? {...instrumentItem, isFavorite: !instrumentItem.isFavorite} : instrumentItem
    );
    setInstrumentItems(updatedItems);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/guitar'>Guitar</Link>
          <Link to='/keyboard'>Keyboard</Link>
          <Link to='/drum'>Drum</Link>
        </nav>
        {message && <div>{message}</div>}
        <h1>Welcome to our Music Store!</h1>
        <Routes>
          <Route path='/' element= {<InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} exact/>
          <Route path='/guitar' element= {<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === 'Guitar')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>} />
          <Route path='/keyboard' element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === 'Keyboard')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} />
          <Route path='/drum' element={<InstrumentList instrumentItems={instrumentItems.filter(item => item.category === 'Drum')} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// const App = () =>{
//   const [instrumentItems] = useState([
//     { id: 1, category: "Guitar", name: "Fender Stratocaster" }, 
//     { id: 2, category: "Keyboard", name: "Yamaha P-125" }, 
//     { id: 3, category: "Drum", name: "DW Collector's Series" }
//   ]);

//   const [cart, setCart] = useState([]);

//   const addToCart = (instrumentItem) =>{
//     setCart([...cart, instrumentItem]);
//     console.log(`Added ${instrumentItem.name} to Cart`);
//   };

//   const removeFromCart = (instrumentItem) =>{
//     setCart(cart.filter(cartInstrumentItem => cartInstrumentItem.id !== instrumentItem.id));
//     console.log(`Removed ${instrumentItem.name} from Cart`);
//   };


//   const [favorite, setFavorite] = useState([]);

//   const toggleFavorite = (instrumentItem) => {
//     if(favorite.includes(instrumentItem)) {
//       setFavorite(favorite.filter(item => item !== instrumentItem))
//     }
//    else{
//     setFavorite([...favorite, instrumentItem])
//    }

//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Instrument Store</h1>
//       </header>
//       <InstrumentList instrumentItems={instrumentItems} addToCart={addToCart} removeFromCart={removeFromCart} toggleFavorite={toggleFavorite}/>
//     </div>
//   );
// }

// export default App;

//original^
