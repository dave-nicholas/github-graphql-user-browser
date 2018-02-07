import React from 'react';
import { debounce } from 'lodash';
import UserDetailsConnected from './UserDetails';

export default class UserBrowser extends React.Component {
  state = { username: 'gaearon', inputValue: 'gaearon' };

  onUsernameChange = inputValue => {
    this.setState({ inputValue });
    this.debouncedSetUsername(inputValue);
  };

  debouncedSetUsername = debounce(username => this.setState({ username }), 500);

  render() {
    return (
      <React.Fragment>
        <h1>Github User Browser</h1>
        <div className="input-field col s6">
          <input
            id="github_username"
            type="text"
            value={this.state.inputValue}
            onChange={e => this.onUsernameChange(e.target.value)}
          />
          <label htmlFor="github_username">Github Username</label>
        </div>
        <UserDetailsConnected username={this.state.username} />
      </React.Fragment>
    );
  }
}
