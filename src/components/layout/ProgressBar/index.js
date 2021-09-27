import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './style';

export default function ProgressBar({ percentage }) {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (percentage >= 80) {
      setColor('rgba(240, 52, 52, 1)');
    } else if (percentage >= 40) {
      setColor('rgba(248, 148, 6, 1)');
    } else {
      setColor('rgba(245, 229, 27, 1)');
    }
  }, [percentage]);

  return (
    <Container>
      <Content color={color} percentage={percentage}>
        <h1>{percentage}</h1>
      </Content>
    </Container>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
