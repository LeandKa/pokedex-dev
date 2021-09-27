import React from 'react';
import PropTypes from 'prop-types';
import { CardId, CardImg, CardName, Content, Span } from './style';
import TypesColor from '../layout/TypesColor';
import TypeBackground from '../layout/TypeBackground';

export default function Card({ name, id, img, info }) {
  return (
    <TypeBackground name={info[0]} url={`pokemon/${id}`}>
      <CardId>#{id}</CardId>
      <Content>
        <CardImg src={img} alt="poke_img" />
        <CardName>{name}</CardName>
        <>
          <Span style={{ textAlign: 'center' }}>
            {info.length > 1 ? (
              <>
                <TypesColor name={info[0]} />
                <TypesColor name={info[1]} />
              </>
            ) : (
              <TypesColor name={info[0]} />
            )}
          </Span>
        </>
      </Content>
    </TypeBackground>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
