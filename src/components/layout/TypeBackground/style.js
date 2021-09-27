import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  border-radius: 10px;
  position: relative;
  top: 0;
  height: 250px;
  width: 200px;
  color: white;
  margin: 0.6rem;
  transition: all 0.3s ease-out;
  background: ${props => props.color};
  &:hover {
    top: -10px;
    cursor: pointer;
  }
`;
