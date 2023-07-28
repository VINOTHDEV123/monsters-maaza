import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'

import Searchbox from './components/search-box/search-box.component'

import './App.css';

// import { render } from '@testing-library/react';

const App = () => {
  const [searchField, setSearchField] = useState('');  //(value, setvalue)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>

      <h1 className="app-title">Monsters Rolodex</h1>

      <Searchbox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeHolder='Search Monsters'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};


// class App extends Component{

//   constructor(){
//     super();

//     this.state = {
//       monsters:[],
//       searchField: '',
//     };
//   }


//   render() {
//     // console.log('render from appjs');

//     const { monsters, searchField } = this.state;
//     const { onSearchChange} = this;



export default App;





{/* {filteredMonsters.map((monster) =>{
        return (
          <div key={monster.id}>
          <h1>{monster.name}</h1>
          </div>
        ); 
      })} */}