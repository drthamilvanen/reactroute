import React from "react";
import About from "./MyApp/About"
import Shop from "./MyApp/Shop";
import Nav from "./MyApp/Nav";
import Home from "./MyApp/Home";
import ItemDetail from './MyApp/ItemDetail'
import './App.css'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'


const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </div>
    </Router>
  );
}

export default App;
