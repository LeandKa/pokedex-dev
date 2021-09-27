import React, { useEffect, useState } from 'react';
import Card from '~/components/Card';
import TypeInfo from '../../services/types.json';
import Api from '~/services/api';
import { Container, Content } from './style';
import Footer from '~/components/Footer';
import Loading from '~/components/layout/Loading';
import Pagination from '~/components/layout/Pagination';
import Header from '~/components/Header';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getAll() {
      const response = await Api.get('pokemon', {
        params: {
          limit: 60,
          offset: 0,
        },
      });
      const auxArray = [];
      response.data.results.forEach(element => {
        let name = '';
        if (
          element.name.includes('minior') ||
          element.name.includes('mimikyu')
        ) {
          // eslint-disable-next-line prefer-destructuring
          name = element.name.split('-')[0];
        } else {
          name = element.name;
        }
        const poke = {
          name,
          info: element.url,
          id: Number(
            element.url
              .replace('https://pokeapi.co/api/v2/pokemon/', '')
              .replace('/', '')
          ),
          img: `${process.env.REACT_APP_POKE_IMG}${element.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '')}.png`,
        };
        auxArray.push(poke);
      });

      await setTimeout(() => {
        setPokemons(auxArray);
        setCount(13);
        setLoading(false);
      }, 2000);
    }
    getAll();
  }, []);

  const ChangePage = (event, value) => {
    async function ChangeContent() {
      setPage(value);
      setLoading(true);
      setPokemons([]);

      const response = await Api.get('pokemon', {
        params: {
          limit: 60,
          offset: 60 * value - 60,
        },
      });
      const nvArray = [];
      response.data.results.forEach(element => {
        let name = '';
        if (
          element.name.includes('minior') ||
          element.name.includes('mimikyu')
        ) {
          // eslint-disable-next-line prefer-destructuring
          name = element.name.split('-')[0];
        } else {
          name = element.name;
        }
        const poke = {
          name,
          info: element.url,
          id: Number(
            element.url
              .replace('https://pokeapi.co/api/v2/pokemon/', '')
              .replace('/', '')
          ),
          img: `${process.env.REACT_APP_POKE_ARTBOOK}${element.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '')}.png`,
        };
        nvArray.push(poke);
      });

      await setTimeout(() => {
        setPokemons(nvArray);
        setLoading(false);
      }, 2000);
    }
    ChangeContent();
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          {loading ? (
            <Loading />
          ) : (
            <>
              {pokemons.map(data => (
                <Card
                  key={data.id}
                  id={data.id}
                  img={data.img}
                  name={data.name}
                  info={TypeInfo[data.id - 1]}
                />
              ))}
              <Pagination count={count} page={page} handlePage={ChangePage} />
            </>
          )}
        </Content>
        <Footer />
      </Container>
    </>
  );
}
