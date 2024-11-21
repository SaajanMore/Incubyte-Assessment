import React from "react";

const { fireEvent, screen, render } = require("@testing-library/react");
import AddNumbers from "./AddNumbers";

test.only("Add the Number String", () => {
  render(<AddNumbers />);
  const calcStringTotal = screen.getByTestId("calcTotalBtn");
  expect(totalValue).toHaveTextContent("Total = 6");

  fireEvent.click(calcStringTotal);

  expect(totalValue.toHaveContent(6));
});
