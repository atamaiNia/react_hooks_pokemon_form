import PokemonCardView from 'components/PokemonCardView/PokemonCardView';
import { StyledImSpinner } from './PokemonPendingView.styled';
import pendingImage from '../pending.jpg';
import PropTypes from 'prop-types';
import { PendingWrapper } from './PokemonPendingView.styled';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <PendingWrapper>
        <StyledImSpinner size="32" />
        Загружаємо...
      </PendingWrapper>
      <PokemonCardView pokemon={pokemon} />
    </div>
  );
}

PokemonPendingView.propTypes = {
  pokemonName: PropTypes.string.isRequired,
};
