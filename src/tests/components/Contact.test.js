import React from "react";
import Contact from "../../pages/Contact"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

test("should load contact page",()=>{
    render(<Contact />)
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    })

test("should load input boxes",()=>{
    render(<Contact/>)

    const InputBoxes=screen.getAllByRole("textbox");
    expect(InputBoxes.length).toBe(3);
})