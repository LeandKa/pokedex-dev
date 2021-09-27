import React, { useEffect, useState } from 'react';

import Api from '~/services/api';
import {
  Container,
  ContentSearch,
  Content,
  Logo,
  Icon,
  Button,
  Img,
  CompleteContend,
} from './style';

export default function Header() {
  const [params, setParams] = useState('');
  const [complete, setComplete] = useState(false);
  const [pokemonComplete, setPokemonComplete] = useState({
    id: 0,
    name: '',
  });

  useEffect(() => {
    setComplete(false);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    async function getSugestion() {
      const response = await Api.get(`pokemon/${params.toLowerCase()}`);
      setComplete(true);
      setPokemonComplete({
        name: response.data.name,
        id: response.data.id,
      });
    }

    getSugestion();
  };

  const OnClick = () => {
    setComplete(false);
  };

  const onChange = e => {
    setParams(e.target.value);
    setComplete(false);
  };

  return (
    <Container>
      <Logo to="/">
        <Img
          src="https://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png"
          alt="Logo-png"
          width="185px"
          height="110px"
        />
      </Logo>
      <Content>
        <ContentSearch onSubmit={onSubmit}>
          <input onChange={onChange} placeholder="Digite nome completo" />
          <Button type="submit">
            <Icon />
          </Button>
        </ContentSearch>
        {complete && (
          <CompleteContend
            to={`pokemon/${pokemonComplete.id}`}
            OnClick={OnClick}
          >
            <img
              src={`${process.env.REACT_APP_POKE_ARTBOOK}${pokemonComplete.id}.png`}
              alt="poke-img-search"
            />
            <h1>{pokemonComplete.name}</h1>
          </CompleteContend>
        )}
      </Content>
    </Container>
  );
}
