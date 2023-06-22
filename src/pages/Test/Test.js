import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    // si j'apparais
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
            console.log(response)
          return response.json();
        } else {
          throw new Error('Erreur de chargement des utilisateurs');
        }
      })
      .then(users => this.setState({ users, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

//   componentDidUpdate(){
// // si on me met a jour
//     console.log(this.state)
//   }

componentWillUnmount(){
    // si je meurs
    console.log("si je meur")
}

  render() {
    // partie rendu conditionnel

    const { users, isLoading, error } = this.state; // ici on destructure, c'est tres courant, parce qu'on a qu'un seul State

    if (error) {
      return <div>Erreur : {error.message}</div>;
    }

    if (isLoading) {
      return <div>Chargement des utilisateurs...</div>;
    }

    return (
      <div>
        <h1>Liste des utilisateurs</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;