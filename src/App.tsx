import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { MonsterType } from './components/card/card.component'
import './App.css';

// type MyProps = {
//   // using `interface` is also ok
//   message: string;
// };
type MyState = {
  monsters: MonsterType[]; // like this
  searchField: string;
};


class App extends Component<{}, MyState> {
    state: MyState = {
      monsters: [],
      searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // on click - React.MouseEvent
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
