import { AiOutlineArrowRight } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  justify-content: center;
  @media (max-width: 542px) {
    overflow-x: scroll;
    width: 100%;
    justify-content: left;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled(AiOutlineArrowRight)`
  font-size: 2.5rem;
  margin-top: 7rem;
  @media (max-width: 542px) {
    margin-top: 3rem;
  }
`;
