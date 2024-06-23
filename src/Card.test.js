import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
  const {caption, src} = TEST_IMAGES[0];
  render(<Card caption={caption} src={src} currNum={1} totalNum={3}/>);
});

it("matches snapshot", () => {
  const {caption, src} = TEST_IMAGES[0];
  const {asFragment} = render(<Card caption={caption} src={src} currNum={1} totalNum={3}/>);
  expect(asFragment()).toMatchSnapshot();
});