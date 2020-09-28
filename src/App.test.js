import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App history={{push: jest.fn()}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('App should be a function', () => {
    expect(typeof App).toBe('function');
  });
});
