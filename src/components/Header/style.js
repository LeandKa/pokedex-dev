import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.header};
  justify-content: space-between;
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  @media (max-width: 540px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin-left: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 542px) {
    padding: 1rem;
  }
`;

export const ContentSearch = styled.form`
  position: relative;
  width: 300px;
  margin-top: 2.8rem;
  height: 30px;
  background: white;
  input {
    margin-left: 10px;
    height: 30px;
    width: 255px;
    font-size: 1.3rem;
    border: none;
    background: none;
  }
  @media (max-width: 542px) {
    width: 250px;
    margin-top: 1rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 7px;
  right: 12px;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
`;
export const Icon = styled(GoSearch)`
  font-size: 1.2rem;
`;

export const CompleteContend = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid black;
  height: 60px;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
  }

  h1 {
    font-size: 2rem;
    text-transform: capitalize;
    margin-left: 2rem;
    margin-top: 1rem;
    color: black;
  }

  &:hover {
    background: lightgreen;
  }
`;
