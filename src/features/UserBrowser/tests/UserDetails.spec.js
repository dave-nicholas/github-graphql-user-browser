import React from 'react';
import { shallow } from 'enzyme';
import UserDetailConnected, {
  UserDetails,
  UserDetailQuery
} from '../UserDetails';
import ViewRepos from '../ViewRepos';
import ViewUser from '../ViewUser';
import Loader from '../../../components/Loader';
import toJson from 'enzyme-to-json';

const mockData = {
  user: {
    avatarUrl: '//test.com/',
    createdAt: '2011-05-25T18:18:31Z',
    repositories: {}
  }
};

describe('UserDetails', () => {
  const wrapper = shallow(<UserDetails data={mockData} username="test" />);

  it('should render loader', () => {
    expect(
      shallow(
        <UserDetails
          data={{
            loading: true
          }}
          username="test"
        />
      ).contains(<Loader />)
    ).toBe(true);
  });

  it('should render ViewRepos', () => {
    expect(wrapper.contains(<ViewRepos repositories={{}} />)).toBe(true);
  });

  it('should render ViewUsers', () => {
    expect(
      wrapper.contains(
        <ViewUser
          avatarUrl="//test.com/"
          createdAt="2011-05-25T18:18:31Z"
          user="test"
        />
      )
    ).toBe(true);
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('UserDetailQuery', () => {
  it('should match snapshot', () => {
    expect(UserDetailQuery).toMatchSnapshot();
  });
});
