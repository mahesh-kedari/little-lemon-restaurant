import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Reservation from "./components/pages/Reservation";

test("Renders the BookingForm", () => {
  render(
    <BrowserRouter>
      <Reservation />{" "}
    </BrowserRouter>
  );
  const submitBtn = screen.getByText("Book Table");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(
    <BrowserRouter>
      <Reservation />
    </BrowserRouter>
  );
  const dateSelector = screen.getByLabelText(/Select Date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Select Time/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  // @ts-ignore
  expect(timeDropDown?.value).toEqual("17:00");
});
