const { render, fireEvent, screen } = require("@testing-library/react");
import AddNumbers from "./AddNumbers";

test.only("Add the Number String", () => {
  render(<AddNumbers />);
  const calcStringTotal = screen.getByTestId("calcTotalbtn");
  const totalValue = screen.getByTestId("totalValue");

  fireEvent.click(calcStringTotal);

  expect(totalValue.toHaveContent(6));
});
