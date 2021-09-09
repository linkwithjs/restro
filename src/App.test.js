import { render, screen } from "@testing-library/react";
import App from "./App";
import Food from "./Food";

test("renders learn react link", () => {
  render(<Food />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
