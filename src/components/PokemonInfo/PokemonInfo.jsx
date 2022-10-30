import { Component } from 'react';
import { PokemonErrorView } from 'components/PokemonErrorView/PokemonErrorView';
import { PokemonCardView } from 'components/PokemonCardView/PokemonCardView';
import { PokemonPendingView } from 'components/PokemonPendingView/PokemonPendingView';
import { TextHint } from './PokemonInfo.styled';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, _) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(`Покемона з іменем ${this.props.pokemonName} нема`)
            );
          })
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <TextHint>Введіть ім'я покемона</TextHint>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonCardView pokemon={pokemon} />;
    }
  }
}
