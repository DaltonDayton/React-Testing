import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders 'Hello World' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... Nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... Nothing

    // Assert
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button WAS clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonELement = screen.getByRole("button");
    userEvent.click(buttonELement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonELement = screen.getByRole("button");
    userEvent.click(buttonELement);

    // Assert
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull();
  });
});
