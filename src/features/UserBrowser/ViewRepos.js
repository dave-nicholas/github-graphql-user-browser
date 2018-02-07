import React from 'react';
import PropTypes from 'prop-types';

const ViewRepos = ({ repositories: { edges } }) =>
  !!edges.length ? (
    <ul className="collection">
      {edges.map(({ node: { url, name, description } }, i) => (
        <li className="collection-item" key={i}>
          <span className="title">
            <a href={url}>{name}</a>
          </span>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  ) : (
    'No repos...'
  );

ViewRepos.propTypes = {
  repositories: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string
      })
    )
  }).isRequired
};

export default ViewRepos;
