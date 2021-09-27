import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function EvolutionCard({ name, specie }) {
  const [id, setId] = useState(0);

  useEffect(() => {
    const number = Number(
      specie
        .replace('https://pokeapi.co/api/v2/pokemon-species/', '')
        .replace('/', '')
    );
    setId(number);
  }, [name, specie]);

  const Photo = () => {
    return (
      <img
        src={`${process.env.REACT_APP_POKE_ARTBOOK}${id}.png`}
        alt="poke-foto"
      />
    );
  };

  return (
    <Container href={`${id}`}>
      <Photo />
      <h1>{name}</h1>
    </Container>
  );
}

EvolutionCard.propTypes = {
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};
