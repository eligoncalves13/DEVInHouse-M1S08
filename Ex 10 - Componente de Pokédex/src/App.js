import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <>
    <h1 className="title">Pokedex</h1>

    <Pokemon
      name="Pikachu"
      photo="https://i.pinimg.com/564x/82/fb/73/82fb73757246d7acd19d99ba62a9ef94.jpg"
      types={['electric']}
    />
    <Pokemon
      name="Bulbasaur"
      photo="https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png"
      types={['grass', 'poison']}
    />
    <Pokemon
      name="Charmander"  
      photo="https://i.pinimg.com/564x/02/1a/e8/021ae815e1908d1414b8efdba839452e.jpg"
      types={['fire']}
    />
    </>
  );
}

export default App;
