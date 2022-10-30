import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Form, Input, Btn, BtnText } from './PokemonForm.styled';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    return this.setState({
      pokemonName: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      toast.error("Введіть ім'я покемона", {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;
    const { handleNameChange, handleSubmit } = this;
    return (
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="pokemonName"
          value={pokemonName}
          onChange={handleNameChange}
        />
        <Btn type="submit">
          <ImSearch />
          <BtnText>Знайти</BtnText>
        </Btn>
      </Form>
    );
  }
}
