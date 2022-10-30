import errorImage from '../error.jpg';
import PropTypes from 'prop-types';
import { Text } from './PokemonErrorView.styled';

export function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} alt="crying fox" width="240" />
      <Text>{message}</Text>
    </div>
  );
}

PokemonErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
