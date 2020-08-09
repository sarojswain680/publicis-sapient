import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom';
import renderer from "react-test-renderer";
import Button from '../src/components/Modules/button';

afterEach(cleanup)

it("renderers without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>,div);
})

it("renders button correctly", () => {
const {getByTestId} =   render(<Button value="2006"></Button>)
expect(getByTestId('button').textContent).toBe("2006")
})

it("matches snapshot" , ()=> {
  const tree =  renderer.create(<Button value="2006"></Button>).toJSON();

  expect(tree).toMatchSnapshot();
})