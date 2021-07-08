import {AppNavDropdownProps} from "./app-nav-dropdown/app-nav-dropdown.props";

export const AppNavRoutes: AppNavDropdownProps[] = [
    {
        label: "Accounts",
        routes: [
            {
                label: "Checking",
                route: "/accounts#checking"
            },
            {
                label: "Savings",
                route: "/accounts#savings"
            },
            {
                label: "Credit Card",
                route: "/accounts#credit-card"
            },
            {
                label: "Loan",
                route: "/accounts#loan"
            }
        ]
    },
    {
        label: "About Us",
        routes: [
            {
                label: "This Project",
                route: "/about#project"
            },
            {
                label: "Team Aline",
                route: "/about#team"
            },
            {
                label: "Github",
                route: "/about#github"
            }
        ]
    }
];