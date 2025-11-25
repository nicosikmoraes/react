import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Form from "../components/Login/Form";

jest.mock(
  "../components/Shared/NavigationButton.tsx",
  () => require("../__mocks__/NavigationButton.js").default
);

jest.mock("expo-router", () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from "expo-router";

describe("Form component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("desabilita o botão quando o username tem menos de 3 caracteres", () => {
    usePathname.mockReturnValue("/");

    const { getByPlaceholderText, getByTestId } = render(<Form />);

    const input = getByPlaceholderText("Username");
    const button = getByTestId("nav-button");

    fireEvent.changeText(input, "ab");

    const disabled =
      button.props.disabled ?? button.props.accessibilityState?.disabled;

    expect(disabled).toBe(true);
  });

  it("habilita o botão quando o username tem 3 ou mais caracteres", () => {
    usePathname.mockReturnValue("/");

    const { getByPlaceholderText, getByTestId } = render(<Form />);

    const input = getByPlaceholderText("Username");
    const button = getByTestId("nav-button");

    fireEvent.changeText(input, "abc");

    const disabled =
      button.props.disabled ?? button.props.accessibilityState?.disabled;

    expect(disabled).toBe(false);
  });
});
