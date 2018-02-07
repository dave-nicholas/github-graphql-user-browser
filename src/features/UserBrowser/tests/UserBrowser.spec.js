import React from 'react';
import { shallow } from 'enzyme';
import UserBrowser from '../UserBrowser';
import toJson from 'enzyme-to-json';

describe('UserBrowser', () => {
  it('should call debouncedSetUsername', () => {
    const wrapper = shallow(<UserBrowser />);

    wrapper.instance().debouncedSetUsername = jest.fn();

    wrapper.instance().onUsernameChange('test');
    expect(wrapper.instance().debouncedSetUsername).toHaveBeenCalledWith(
      'test'
    );
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<UserBrowser />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
