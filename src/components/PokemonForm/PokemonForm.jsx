import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { Form, Input, Btn, BtnText } from './PokemonForm.styled';

export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    return setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (pokemonName.trim() === '') {
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
    onSubmit(pokemonName);
    setPokemonName('');
  };

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
