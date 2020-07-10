import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from '../App';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test('renders App', () => {
    render(<App />);
});

test("form header renders", () => {
    render(<CheckoutForm />)

    const cfheader = screen.getByText(/checkout form/i);
});


test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const ckFname = screen.getByLabelText(/first Name/i);
    const ckLname = screen.getByLabelText(/last Name/i);
    const ckAdd = screen.getByLabelText(/address/i);
    const ckCity = screen.getByLabelText(/city/i);
    const ckState = screen.getByLabelText(/state/i);
    const ckZip = screen.getByLabelText(/zip/i);
    // events with rtl
    fireEvent.change(ckFname, { target: { value: 'Gar' } });
    fireEvent.change(ckLname, { target: { value: 'lev' } });
    fireEvent.change(ckAdd, { target: { value: '123stateave' } });
    fireEvent.change(ckCity, { target: { value: 'Sanjose' } });
    fireEvent.change(ckState, { target: { value: 'CA' } });
    fireEvent.change(ckZip, { target: { value: '95139' } });
    // click the submit button
    // 1.query for the button
    // 2.run the click event on the button
    const checkoutBtn = screen.getByRole(/button/i)
    fireEvent.click(checkoutBtn);
    const successMessage = await screen.findByTestId(/successmessage/i)
});
