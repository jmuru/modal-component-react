import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('Homepage', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should match snapshot when modal closed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should matchsnapshot when modal open', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.modal-base-toggle').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

})


