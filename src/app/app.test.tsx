import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

test("renders Tickets header", () => {
  const { getByText } = render(<App/>);
  const header = getByText(/Tickets/i);
  expect(header).toBeInTheDocument();
});
