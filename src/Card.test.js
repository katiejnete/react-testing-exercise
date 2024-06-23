import { render, fireEvent } from "@testing-library/react";
import Card from "./Card.js";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", () => {
  const {caption, src} = TEST_IMAGES[0];
  render(<Card caption={caption} src={src} currNum={1} totalNum={3}/>);
});

// snapshot test
it("matches snapshot", () => {
  const {caption, src} = TEST_IMAGES[0];
  const {asFragment} = render(<Card caption={caption} src={src} currNum={1} totalNum={3}/>);
  expect(asFragment()).toMatchSnapshot();
});