import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Icon } from './style';
import EvolutionCard from './EvolutionCard';

export default function Evolution({ stage1, stage2, stage3 }) {
  return (
    <Container>
      {stage1.length === 1 && (
        <Content>
          {stage1.map(data => (
            <EvolutionCard name={data.name} specie={data.url} />
          ))}
        </Content>
      )}
      {stage2.length === 1 && (
        <Content>
          <Icon />
          {stage2.map(data => (
            <EvolutionCard name={data.name} specie={data.url} />
          ))}
        </Content>
      )}
      {stage3.length === 1 && (
        <Content>
          <Icon />
          {stage3.map(data => (
            <EvolutionCard name={data.name} specie={data.url} />
          ))}
        </Content>
      )}
    </Container>
  );
}

Evolution.propTypes = {
  stage1: PropTypes.number.isRequired,
  stage2: PropTypes.number.isRequired,
  stage3: PropTypes.number.isRequired,
};
