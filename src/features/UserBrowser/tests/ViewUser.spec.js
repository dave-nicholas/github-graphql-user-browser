import React from 'react';
import { shallow } from 'enzyme';
import ViewUser from '../ViewUser';
import toJson from 'enzyme-to-json';

describe('ViewUser', () => {
  const wrapper = shallow(
    <ViewUser
      avatarUrl="http://test.com/gif"
      user="test"
      createdAt="2011-05-25T18:18:31Z"
    />
  );

  it('should render image', () => {
    expect(wrapper.contains(<img src="http://test.com/gif" alt="test" />)).toBe(
      true
    );
  });

  it('should render formatted date', () => {
    expect(wrapper.text().indexOf('May 25th 2011')).toBeGreaterThan(-1);
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
