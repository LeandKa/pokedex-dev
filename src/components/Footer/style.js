import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const Span = styled.span`
  font-size: 1rem;
  text-align: center;
  margin: 0.2rem;
`;

export const Anchor = styled.a`
  &:hover {
    text-decoration: underline;
    opacity: 0.7;
    transition: all 0.5s ease-out;
  }
`;
