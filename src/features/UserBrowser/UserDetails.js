import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from '../../components/Loader';
import ViewRepos from './ViewRepos';
import ViewUser from './ViewUser';

export const UserDetails = ({ data: { user, loading }, username }) => {
  if (loading) return <Loader />;
  if (!user) return 'User not found.';
  const { avatarUrl, createdAt, repositories } = user;
  return (
    <div className="row">
      <div className="col s12 m6">
        <ViewUser avatarUrl={avatarUrl} user={username} createdAt={createdAt} />
      </div>
      <div className="col s12 m6">
        <ViewRepos repositories={repositories} />
      </div>
    </div>
  );
};

export const UserDetailQuery = gql`
  query($username: String!) {
    user(login: $username) {
      avatarUrl
      createdAt
      repositories(last: 5) {
        edges {
          node {
            url
            name
            description
          }
        }
      }
    }
  }
`;

export const UserDetailsWrapper = graphql(UserDetailQuery, {
  options: ({ username }) => ({ variables: { username }, errorPolicy: 'all' })
});

const UserDetailsConnected = UserDetailsWrapper(UserDetails);

UserDetailsConnected.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserDetailsConnected;
