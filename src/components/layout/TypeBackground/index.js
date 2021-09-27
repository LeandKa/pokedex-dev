import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function TypeBackground({ name, children, url }) {
  const TypeColor = () => {
    switch (name) {
      case 'bug':
        return (
          <Container to={url} color="rgba(0, 230, 64, 1)">
            {children}
          </Container>
        );
      case 'dark':
        return (
          <Container to={url} color="black">
            {children}
          </Container>
        );
      case 'dragon':
        return (
          <Container to={url} color="rgba(140, 20, 252, 1)">
            {children}
          </Container>
        );
      case 'electric':
        return (
          <Container to={url} color="rgba(238, 238, 0, 1)">
            {children}
          </Container>
        );
      case 'fairy':
        return (
          <Container to={url} color="RGBA(255, 192, 203, 1)">
            {children}
          </Container>
        );
      case 'fighting':
        return (
          <Container to={url} color="rgb(160,82,45)">
            {children}
          </Container>
        );
      case 'flying':
        return (
          <Container to={url} color="rgba(213, 184, 255, 1)">
            {children}
          </Container>
        );
      case 'ghost':
        return (
          <Container to={url} color="rgba(103, 65, 114, 1)">
            {children}
          </Container>
        );
      case 'grass':
        return (
          <Container to={url} color="rgba(0, 177, 106, 1)">
            {children}
          </Container>
        );
      case 'ground':
        return (
          <Container to={url} color="rgb(218,165,32)">
            {children}
          </Container>
        );
      case 'ice':
        return (
          <Container to={url} color="rgba(137, 196, 244, 1)">
            {children}
          </Container>
        );
      case 'poison':
        return (
          <Container to={url} color="rgba(154, 18, 179, 1)">
            {children}
          </Container>
        );
      case 'normal':
        return (
          <Container to={url} color="rgba(228, 233, 237, 1)">
            {children}
          </Container>
        );
      case 'psychic':
        return (
          <Container to={url} color="rgb(255,20,147)">
            {children}
          </Container>
        );
      case 'rock':
        return (
          <Container to={url} color="rgb(140,114,89)">
            {children}
          </Container>
        );
      case 'steel':
        return (
          <Container to={url} color="rgba(218, 223, 225, 1)">
            {children}
          </Container>
        );
      case 'water':
        return (
          <Container to={url} color="rgba(44, 130, 201, 1)">
            {children}
          </Container>
        );
      default:
        return (
          <Container to={url} color="rgba(240, 52, 52, 1)">
            {children}
          </Container>
        );
    }
  };

  return <TypeColor />;
}
TypeBackground.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
