import React from 'react';
import PropTypes from 'prop-types';
import { Span } from './style';

export default function TypesColor({ name }) {
  const TypeColor = () => {
    switch (name) {
      case 'bug':
        return <Span background="rgba(0, 230, 64, 1)">{name}</Span>;
      case 'dark':
        return <Span background="black">{name}</Span>;
      case 'dragon':
        return <Span background="rgba(140, 20, 252, 1)">{name}</Span>;
      case 'electric':
        return <Span background="rgba(238, 238, 0, 1)">{name}</Span>;
      case 'fairy':
        return <Span background="RGBA(255, 192, 203, 1)">{name}</Span>;
      case 'fighting':
        return <Span background="rgb(160,82,45)">{name}</Span>;
      case 'flying':
        return <Span background="rgba(213, 184, 255, 1)">{name}</Span>;
      case 'ghost':
        return <Span background="rgba(103, 65, 114, 1)">{name}</Span>;
      case 'grass':
        return <Span background="rgba(0, 177, 106, 1)">{name}</Span>;
      case 'ground':
        return <Span background="rgb(218,165,32)">{name}</Span>;
      case 'ice':
        return <Span background="rgba(137, 196, 244, 1)">{name}</Span>;
      case 'poison':
        return <Span background="rgba(154, 18, 179, 1)">{name}</Span>;
      case 'normal':
        return <Span background="rgba(228, 233, 237, 1)">{name}</Span>;
      case 'psychic':
        return <Span background="rgb(255,20,147)">{name}</Span>;
      case 'rock':
        return <Span background="rgb(140,114,89)">{name}</Span>;
      case 'steel':
        return <Span background="rgba(218, 223, 225, 1)">{name}</Span>;
      case 'water':
        return <Span background="rgba(44, 130, 201, 1)">{name}</Span>;
      default:
        return <Span background="rgba(240, 52, 52, 1)">{name}</Span>;
    }
  };

  return (
    <div>
      <TypeColor />
    </div>
  );
}

TypesColor.propTypes = {
  name: PropTypes.string.isRequired,
};
