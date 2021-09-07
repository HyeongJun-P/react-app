import React, { useState } from "react";
import "./App.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {

    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof validator === "function") {          // vali의 타입이 펑션인가?
      willUpdate = validator(value);                // 펑션이라면  willUpdate의 타입을 vali가 가진 boolean 값으로 변경
      console.log(willUpdate, validator);           // maxLen === validator
    }

    if (willUpdate) {
      setValue(value); // willUpdate가 True라면 value를 업데이트
    }
  };

  return { value, onChange }; // value 값을 리턴
}

const App = () => {
  const maxLen = (value) => value.length <= 10; // 길이 제한 함수

  const name = useInput("Mr.", maxLen); /* useInput의 value는 Mr. 가 되고, name은 value 값을 갖게 됨
                                           maxLen으로 길이 제한 */
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />{" "}
      {/* == value={name.value} onChange={name.onChange}*/}
    </div>
  );
}

export default App;

// import React, {useState} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';

// const useInput = () => {

// }

// const App = () => {

//   const [item, setItem] = useState(0);               <<< useState 함수형 컴포넌트
//   const incrementItem = () => setItem( item + 1 );
//   const decrementItem = () => setItem( item - 1 );

//   return <div>
//     <h1 className="title">Hello World</h1>
//     <h2>your select</h2>
//     <p>{item}</p>
//     <Button onClick={incrementItem}>+ 1</Button>
//     <Button onClick={decrementItem}>- 1</Button>
//   </div>
// }

// export default App;

/* ================================================== */

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
//           item:this.state.item -1                                          <<< 클래스형 컴포넌트
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
