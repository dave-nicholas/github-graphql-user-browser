import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';
import toJson from 'enzyme-to-json';

describe('Loader', () => {
  it('should contain material circle', () => {
    expect(shallow(<Loader />).contains(<div className="circle" />)).toBe(true);
  });

  it('should match snapshot', () => {
    expect(toJson(shallow(<Loader />))).toMatchSnapshot();
  });
});
