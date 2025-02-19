import { render, screen } from "@testing-library/react";
import WelcomeBack from "../WelcomeBack";

describe("WelcomeBack", () => {
  test("renders the default value without a name prop", () => {
    render(<WelcomeBack />);
    const text = screen.getByText("Welcome back, valued customer!");
    expect(text).toBeInTheDocument();
  });

  test("renders the customer name passed as a prop", () => {
    render(<WelcomeBack name="John" />);
    const text = screen.getByText("Welcome back, John!");
    expect(text).toBeInTheDocument();
  });
});

describe("WelcomeBack component happy path", () => {
  test("renders without crashing", () => {
    render(<WelcomeBack />);
  });
});

describe("WelcomeBack component error handling", () => {
  test("handles being given an enexpected prop", () => {
    const badProp = null;
    render(<WelcomeBack name={badProp} />);
  });
});
