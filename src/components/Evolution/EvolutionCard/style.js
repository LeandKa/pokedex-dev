import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  width: 200px;
  margin: 1rem;
  border-radius: 10px;
  h1 {
    color: black;
    text-transform: capitalize;
    text-align: center;
    font-size: 1.2rem;
  }
  img {
    width: 200px;
    align-self: center;
    @media (max-width: 772px) {
      width: 120px;
    }
    @media (max-width: 542px) {
      width: 80px;
    }
    @media (max-width: 772px) {
      margin-left: 0.8rem;
    }
    @media (max-width: 542px) {
      margin-left: 0.4rem;
    }
  }
`;
