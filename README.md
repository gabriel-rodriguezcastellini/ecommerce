# ShopHub

[![CodeQL](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/github-code-scanning/codeql)
[![Dependency Review](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/dependency-review.yml)
[![Node.js CI](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/node.js.yml/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/node.js.yml)

# ShopHub React Components

This repository contains a set of React components developed for ShopHub, an e-commerce platform.

## Components Included

- **NavBar**: A navigation bar component for easy navigation across categories and user authentication.
- **Checkout**: Handles the checkout process, including item quantities, stock management, and order creation.
- **ItemListContainer**: Manages the display of products in a list format, fetching data dynamically based on categories.
- **ItemDetailContainer**: Displays detailed information about a specific product, fetched from a database.
- **ItemDetail**: Renders detailed information about a single item, including its name, image, price, description, and availability.
- **ItemList**: Renders a list of items in a grid layout, utilizing the ItemDetail component.
- **Item**: Displays a single item in a card format, showing essential details and a link for more information.
- **Cart**: Manages the shopping cart functionality, displaying added items, expected delivery dates, and total amounts.

## Technologies Used

- React
- Firebase Firestore for database management
- MDB React UI Kit for UI components

## Setup

To use these components:

1. Clone the repository.
2. Ensure you have Node.js and npm installed.
3. Install dependencies using `npm install`.
4. Integrate these components into your React application as needed.

## Usage

Each component serves a specific purpose within an e-commerce application:

- **NavBar**: Implement a navigation bar with user authentication and category links.
- **Checkout**: Manage the checkout process, including stock management and order creation.
- **ItemListContainer**: Display a list of products based on categories.
- **ItemDetailContainer**: Show detailed information about a specific product.
- **Cart**: Manage the shopping cart functionality, displaying added items and total amounts.

Refer to individual component files for detailed usage and integration instructions.
