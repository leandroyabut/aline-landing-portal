import React from "react";
import {AppNavDropdown} from "./AppNavDropdown";
import {renderWithRouter} from "@test-utils";
import {Interfaces} from "@interfaces/interfaces";

it("should create anchor element with href of '/'", () => {
    const {getByText} = renderWithRouter(<AppNavDropdown label={"Label"} routes={[]}/>);

    const dropdown = getByText(/Label/i);
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.getAttribute("href")).toBe("/");
});

it("should create anchor element with data-bs-toggle of 'dropdown'", () => {
    const {getByText} = renderWithRouter(<AppNavDropdown label={"Label"} routes={[]}/>);

    const dropdown = getByText(/Label/i);
    expect(dropdown).toBeInTheDocument();
    expect(dropdown.getAttribute("data-bs-toggle")).toBe("dropdown");
});

it("dropdown should generate a ul with x amount of list items", () => {
    const randomNum = Math.floor(Math.random() * 20);
    const routes: Interfaces[] = Array.from(Array(randomNum).keys())
        .map(i => ({
            route: `/r${i}`,
            label: `R${i}`
        }));
    renderWithRouter(<AppNavDropdown label={"Label"} routes={routes}/>);

    const items = document.querySelectorAll("li.nav-item.dropdown>ul.dropdown-menu>li");
    expect(items.length).toBe(routes.length);
});
