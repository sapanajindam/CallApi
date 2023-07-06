import React, { Component } from 'react'

export default class Apicall extends Component {
    constructor(){
        super()
        this.state={
            user : null
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users").then((res) => {res.json().
            then(result =>{this.setState({user : result.data})
                // 
        })
    })

    }
  render() {
    return (
      <div>
        <table>
            <tr>
                <th>Id</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>email</th>
                <th>avatar</th>
            </tr>          
          </table>
     {
        this.state.user?
        this.state.user.map((item )=>
            <div>
                <table>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td><a href={item.avatar}>{item.avatar}</a></td>

                    </tr>
                </table>
            </div>
        ):null
     }        
      </div>
    )
  }
}
