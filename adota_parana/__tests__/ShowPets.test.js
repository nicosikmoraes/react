import React from "react";
import { render } from "@testing-library/react-native";
import ShowPets from "../components/Pets/ShowPets";
import MOCK from "../mocks/MOCK_DATA.json";

jest.mock("../components/Pets/Pets", () => {
  return ({ name, specie, url }) => (
    <div testID="mock-pet">
      {name} - {specie} - {url}
    </div>
  );
});

describe("ShowPets component", () => {
  it("renderiza todos os pets do MOCK_DATA", () => {
    const { getAllByTestId } = render(<ShowPets />);

    const petItems = getAllByTestId("mock-pet");

    expect(petItems.length).toBe(MOCK.length);
  });

  it("passa as props corretas para cada Pet", () => {
    const { getAllByTestId } = render(<ShowPets />);
    const petItems = getAllByTestId("mock-pet");

    petItems.forEach((item, index) => {
      expect(item.props.children).toContain(MOCK[index].name);
      expect(item.props.children).toContain(MOCK[index].specie);
      expect(item.props.children).toContain(MOCK[index].img);
    });
  });
});
