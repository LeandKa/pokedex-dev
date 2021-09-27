import React from 'react';
import { Anchor, Container, Span } from './style';

export default function Footer() {
  return (
    <Container>
      <Span>
        Feito por{' '}
        <Anchor
          href="https://github.com/LeandKa?tab=repositories"
          target="_blank"
        >
          Leandro Cavalcanti
        </Anchor>
      </Span>
      <Span>
        Auxilio da{' '}
        <Anchor href="https://pokeapi.co/?ref=hackernoon.com" target="_blank">
          PokeApi
        </Anchor>
      </Span>
    </Container>
  );
}
