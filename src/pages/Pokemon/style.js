import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 2rem;
`;

export const Load = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
  border-radius: 10px;
  background: rgba(232, 236, 241, 1);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.24);
  @media (max-width: 1098px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  img {
    width: 250px;
    margin: 1rem;
    align-self: center;
  }
  @media (max-width: 1098px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: white;
  border-radius: 5%;
  width: 500px;
  margin-top: 2rem;
  h1 {
    text-transform: capitalize;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media (max-width: 1098px) {
    width: auto;
  }
`;

export const PokeFeatures = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0.3rem;
  justify-content: space-between;
  h1 {
    font-size: 1.4rem;
  }

  span {
    font-weight: 450;
    font-size: 1.2rem;
  }
`;
export const Span = styled.span`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

export const PokeStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  margin: 0.5rem;
  width: 80%;
  h1 {
    text-transform: capitalize;
    font-weight: 300;
    width: 200px;
    font-size: 1.2rem;
  }
  @media (max-width: 1098px) {
    width: 100%;
  }
`;

export const Icon = styled(AiOutlineArrowRight)`
  font-size: 2rem;
`;
