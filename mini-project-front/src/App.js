import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import store from './modules/dashboard/store';
import {Layout} from '../src/modules/dashboard/components/Layout'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </div>
  );
}

export default App;



// const Home =() => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   );
// }