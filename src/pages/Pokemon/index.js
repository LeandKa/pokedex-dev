import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '~/components/Footer';
import TypesColor from '~/components/layout/TypesColor';
import Api from '~/services/api';
import ProgressBar from '~/components/layout/ProgressBar';
import {
  Container,
  Content,
  Details,
  Load,
  PokeFeatures,
  PokeInfo,
  PokeStats,
  Span,
  Stats,
  Title,
} from './style';
import Evolution from '~/components/Evolution';
import Loading from '~/components/layout/Loading';
import Header from '~/components/Header';

export default function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    height: 0,
    weight: 0,
    stats: [],
    types: {},
  });
  const [loading, setLoading] = useState(true);
  const [stagePrimary, setStagePrimary] = useState([]);
  const [stageSecondary, setStageSecondary] = useState([]);
  const [stageThird, setStageThird] = useState([]);

  async function getEvolution() {
    const { evolution_chain } = await (await Api.get(`pokemon-species/${id}`))
      .data;

    const response = await Api.get(evolution_chain.url);
    const { chain } = response.data;
    const base = [];
    const stage1 = [];
    const stage2 = [];
    base.push(chain.species);
    if (chain.evolves_to.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const form of chain.evolves_to) {
        stage1.push(form.species);
      }
      if (chain.evolves_to[0].evolves_to.length > 0) {
        stage2.push(chain.evolves_to[0].evolves_to[0].species);
      }
    }
    setStagePrimary(base);
    setStageSecondary(stage1);
    setStageThird(stage2);
  }

  useEffect(() => {
    async function getPokemon() {
      const response = await Api.get(`/pokemon/${id}`);
      const types = [];
      response.data.types.forEach(tipo => {
        types.push(tipo.type.name);
      });
      const stats = [];
      response.data.stats.forEach(status => {
        stats.push({
          base: status.base_stat,
          name: status.stat.name,
        });
      });

      await setTimeout(() => {
        setPokemon({
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          stats,
          types,
        });
        setLoading(false);
      }, 2000);
    }
    getPokemon();
    getEvolution();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Load>
            <Loading />
          </Load>
        ) : (
          <Content>
            <Details>
              <img
                src={`${process.env.REACT_APP_POKE_ARTBOOK}${id}.png`}
                alt="pokemon-img"
              />
              <PokeInfo>
                <h1>{pokemon.name}</h1>
                <PokeFeatures>
                  <h1>Pokedex No.</h1>
                  <span>{id}</span>
                </PokeFeatures>
                <PokeFeatures>
                  <h1>Type:</h1>
                  <>
                    <Span style={{ textAlign: 'center' }}>
                      {pokemon.types.length > 1 ? (
                        <>
                          <TypesColor name={pokemon.types[0]} />
                          <TypesColor name={pokemon.types[1]} />
                        </>
                      ) : (
                        <TypesColor name={pokemon.types[0]} />
                      )}
                    </Span>
                  </>
                </PokeFeatures>
                <PokeFeatures>
                  <h1>Weight:</h1>
                  <span>{pokemon.weight / 10}kg</span>
                </PokeFeatures>
                <PokeFeatures>
                  <h1>Height:</h1>
                  <span>{pokemon.height / 10}m</span>
                </PokeFeatures>
              </PokeInfo>
            </Details>
            <Stats>
              <Title>Status</Title>
              {pokemon.stats.map(data => (
                <PokeStats>
                  <h1>{data.name}:</h1>
                  <ProgressBar percentage={data.base} />
                </PokeStats>
              ))}
            </Stats>
            <Title>Evoluções</Title>
            <Evolution
              stage1={stagePrimary}
              stage2={stageSecondary}
              stage3={stageThird}
            />
          </Content>
        )}
        <Footer />
      </Container>
    </>
  );
}
