import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ViewUser = ({ user, avatarUrl, createdAt }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={avatarUrl} alt={user} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          User since: {moment(createdAt).format('MMMM Do YYYY')}
        </div>
      </div>
    </div>
  );
};

ViewUser.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

export default ViewUser;
