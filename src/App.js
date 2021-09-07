import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const App = () => {

  const [item, setItem] = useState(0);
  const incrementItem = () => setItem( item + 1 );
  const decrementItem = () => setItem( item - 1 );

  return <div>
    <h1 className="title">Hello World</h1>
    <h2>your select</h2>
    <p>{item}</p>
    <Button onClick={incrementItem}>+ 1</Button>  
    <Button onClick={decrementItem}>- 1</Button>
  </div>
}

export default App;
// import React  from 'react';

// class App extends React.Component {
//     state = {
//         item:1
//     }

//     incrementItem = () => {
//         this.setState({
//           item:this.state.item +1
//         }
//       )
//     }
//     decrementItem = () => {
//         this.setState({
//           item:this.state.item -1
//         }
//       )
//     }

//     render() { 
//         return (
//             <div>
//                 <p>{this.state.item}</p>
//                 <button onClick={this.incrementItem}>+ 1</button>
//                 <button onClick={this.decrementItem}>- 1</button>
//             </div>
//         );
//     }
// }
 
// export default App;