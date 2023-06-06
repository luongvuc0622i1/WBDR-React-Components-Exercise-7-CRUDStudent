// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: {
        id: 0,
        name: "",
        phone: "",
        email: ""
      },
      isValid: false,
      indexSelected: -1
    }
  }

  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkInvalidForm())
  }

  handleSelect = (studentSelected) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: studentSelected.id
    })
  }

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }

  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = this.state.studentList
      const newListId = []
      newList.forEach(item => (
        newListId.push(item.id)
      ))
      if (this.state.indexSelected > -1) {
        console.log(this.state.indexSelected)
        console.log(newList)
        console.log(newListId)
        const index = newListId.indexOf(this.state.indexSelected)
        alert(index)
        newList[index] = this.state.form
      } else {
        if(this.state.form.id !== 0)
        this.state.form.id = newList[newList.length-1].id + 1
        newList.push(this.state.form)
      }
      this.setState({
        studentList: newList,
        form: {
          id: "",
          name: "",
          phone: "",
          email: ""
        },
        isValid: false,
        indexSelected: -1
      })
    }
  }

  handleDelete = (studentSelected) => {
    const newList = this.state.studentList.filter(item => item !== studentSelected)
    this.setState({
      studentList: newList
    })
  }

  render() {
    const { studentList, form } = this.state
    let count = 0;
    return (
      <div>
        <div className="form">
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" value={form.email} onChange={this.handleChange} />
          </div>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map(student => (
                <tr>
                  <td>{++count}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <button studentSelected={student} onClick={() => this.handleSelect(student)}>Edit</button>
                    <button studentSelected={student} onClick={() => this.handleDelete(student)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;