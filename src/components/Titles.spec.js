import React from "react";
import { create } from "react-test-renderer";
import Titles from './Titles';

describe("Titles component", () => {
  test("Titles matches the snapshot", () => {
    const titles = create(<Titles />);
    expect(titles.toJSON()).toMatchSnapshot();
  });
});
