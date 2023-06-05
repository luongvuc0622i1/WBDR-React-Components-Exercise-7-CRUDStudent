// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";
import StudentList from "./components/StudentList";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const list = [
  {
    name: 'abc',
    phone: '23',
    email: 'a@gmail.com'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list
    }
  }

  add = () => {
    let student = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value
    };
    list.push(student);
    this.setState({
      list: list
    });
  }

  render() {
    return (
      <div>
        <div className="form">
          <input type="text" id="name" />
          <input type="number" id="phone" />
          <input type="email" id="email" />
          <button onClick={this.add}>Add</button>
        </div>
        <StudentList students={this.state.list} />
      </div>
    );
  }
}

export default App;