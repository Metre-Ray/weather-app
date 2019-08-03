import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import storageService from './services/storageService';

Enzyme.configure({ adapter: new Adapter() });

it('app renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("match shallow snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("match render snapshot", () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("match mount snapshot", () => {
  const wrapper = mount(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("setState should be called in componentDidMount one time", () => {
  const inst = shallow(<App />).instance();
  jest.spyOn(inst, 'setState').mockImplementation();
  inst.componentDidMount();
  expect(inst.setState).toHaveBeenCalled();
  expect(inst.setState).toHaveBeenCalledTimes(1);
  //inst.setState.mock.calls[0][0]
});

it("mock storage service", () => {
  const inst = shallow(<App />).instance();
  // TODO
});
