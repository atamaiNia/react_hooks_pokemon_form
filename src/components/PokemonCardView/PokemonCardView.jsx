import PropTypes from 'prop-types';
import { CardWrapper, PokemonName, List } from './PokemonCardView.styled';

export default function PokemonCardView({ pokemon: { sprites, name, stats } }) {
  return (
    <CardWrapper>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        width="240"
      />
      <PokemonName>{name}</PokemonName>
      <List>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </List>
    </CardWrapper>
  );
}

PokemonCardView.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
