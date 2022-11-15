import { useState, useEffect } from 'react';
import PokemonErrorView from 'components/PokemonErrorView/PokemonErrorView';
import PokemonCardView from 'components/PokemonCardView/PokemonCardView';
import PokemonPendingView from 'components/PokemonPendingView/PokemonPendingView';
import { TextHint } from './PokemonInfo.styled';
import pokemonAPI from 'components/services/pokemonApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (pokemonName === '') {
      return;
    }
    setStatus(Status.PENDING);

    pokemonAPI
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <TextHint>Введіть ім'я покемона</TextHint>;
  }

  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonCardView pokemon={pokemon} />;
  }
}
