// import logo from './logo.svg';
// import Apicall from './Apicall';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state =
    {
      users: null
    }
  }

  // Api :  https://jsonplaceholder.typicode.com/comments
  // Api 2 :  https://demo5110359.mockable.io/images
  //Api 3: https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    fetch('https://reqres.in/api/users').then((resp) => {
      resp.json().then((result) => {
        this.setState({ users: result.data })
  
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Fetch API</h1>
           <table>
             <tr>
               <th>id</th>
               <th>email</th>
               <th>firstName</th>
               <th>LastName</th>
               <th>avatar</th>
             </tr>
           </table>
        {
          this.state.users ?
            this.state.users.map((item) =>
              <div>
{/* //table of api data */}
                <table>                              
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td><a href={item.avatar}>{item.avatar}</a></td>
                  </tr>   
                  </table>
                    </div>
            ):null}

            {/* <Apicall/> */}
      </div>
    );
  }}

export default App;
