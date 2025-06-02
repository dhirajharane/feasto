import React from "react";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from "../../assets/appStore";
import { BrowserRouter } from "react-router-dom";



it("should load header", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
   
});

it("should change login button to logout when clicked" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
})


