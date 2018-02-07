import React from 'react';
import { shallow } from 'enzyme';
import ViewRepos from '../ViewRepos';
import toJson from 'enzyme-to-json';

describe('ViewRepos', () => {
  const wrapper = shallow(
    <ViewRepos
      repositories={{
        edges: [
          {
            node: {
              description: 'this is a test repo',
              name: 'test',
              url: 'http://test.com/test'
            }
          }
        ]
      }}
    />
  );

  it('should render link to a repo', () => {
    expect(wrapper.contains(<a href="http://test.com/test">test</a>)).toBe(
      true
    );
  });

  it('should render a repo description', () => {
    expect(wrapper.text().indexOf('this is a test repo')).toBeGreaterThan(-1);
  });

  it('Should handle no repos', () => {
    expect(
      shallow(
        <ViewRepos
          repositories={{
            edges: []
          }}
        />
      )
        .text()
        .indexOf('No repos...')
    ).toBeGreaterThan(-1);
  });

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
