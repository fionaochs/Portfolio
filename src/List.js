import React from 'react';
import PropTypes from 'prop-types';

const List = ({ arr, title }) => {
  const listElement = arr.map((str, i) => (
    <li key={i}>{str}</li>
  ));
  return (
    <ul>
      <h3>{title}</h3>
      {listElement}
    </ul>

  );
};

List.propTypes = {
  arr: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default List;