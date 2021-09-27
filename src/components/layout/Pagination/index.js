import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';

export default function Pagination({ handlePage, page, count }) {
  return (
    <Container
      defaultPage={1}
      onChange={handlePage}
      page={page}
      count={count}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
  count: PropTypes.string.isRequired,
};
