import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./login";
describe("Login page", () => {
  it("should render with required elements(headings, inputs, buttons, etc.)", () => {
    // Following the universal formula for testing React components
    // 1. Arrange 2. Act 3. Assert
    // Using RTL, we'll render the component
    render(<LoginPage />);
    // getBy --> Throws an error if the text isn't found
    // queryBy --> No errors, just returns 'null', is used to confirm that a particular element is not present in the dom
    // findBy --> used in async operations. If an element will get added after some time asynchronously
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Forgot password?" })
    ).toBeInTheDocument();
  });
});
