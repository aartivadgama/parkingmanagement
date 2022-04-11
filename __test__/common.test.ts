const {calculatePayment} = require("../src/Common");

test("calculate Payment", () => {
  const actual3 = calculatePayment(
    "Thu Apr 07 2022 18:00:00",
    "Thu Apr 07 2022 19:00:00"
  );
  const actual4 = calculatePayment(
    "Thu Apr 07 2022 18:00:00",
    "Thu Apr 07 2022 21:00:00"
  );

  const expect3 = 20;
  const expect4 = 30;

  expect(actual3).toBe(expect3);
  expect(actual4).toBe(expect4);
});
