import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, mount } from "enzyme";
import Titles from './Titles';

Enzyme.configure({ adapter: new Adapter() });

// npm test -- -u   - для обновления снэпшота

describe("Titles", () => {
  test("match shallow snapshot", () => {
    const wrapper = shallow(<Titles />);    // не заходит "внутрь" дочерних компонент, т.е., например, <Home/> останется <Home/> в снэпшоте
    expect(wrapper).toMatchSnapshot();
  });
  test("match render snapshot", () => {     // заходит "внутрь" дочерних компонент и отрисовывает их
    const wrapper = render(<Titles />);
    expect(wrapper).toMatchSnapshot();
  });
  test("match mount snapshot", () => {     // как shallow, но есть все хуки жизненного цикла
    const wrapper = mount(<Titles />);
    expect(wrapper).toMatchSnapshot();
  });
})
