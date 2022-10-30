import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { PokemonForm } from './PokemonForm/PokemonForm';
import { PokemonInfo } from './PokemonInfo/PokemonInfo';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    // pokemon: null,
    // loading: false,
    pokemonName: '',
  };
  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }, 55000);
  }

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    const { handleFormSubmit } = this;
    return (
      <Container>
        <PokemonForm onSubmit={handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>
    );
  }
}
