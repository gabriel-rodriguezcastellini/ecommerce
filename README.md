# ShopHub

[![CodeQL](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/github-code-scanning/codeql)
[![Dependency Review](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/dependency-review.yml)
[![Node.js CI](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/node.js.yml/badge.svg)](https://github.com/gabriel-rodriguezcastellini/ecommerce/actions/workflows/node.js.yml)

This repository contains a React JS e-commerce application developed as the final project for a React JS course. The project focuses on creating an interactive online shopping experience with various features for browsing, adding items to a cart, and making purchases.

## Project Overview

The project aims to achieve the following functionalities:

- **User Stories/Brief:** Allow users to navigate products, view details, add items to a cart, and complete purchases.
- **Components:** Utilize various components like `NavBar`, `CartWidget`, `ItemListContainer`, `ItemDetail`, `Checkout`, etc., to create a seamless user experience.
- **Firebase Integration:** Implement Firebase to manage product catalogs, orders, and potentially user authentication for checkout processes.
- **Dynamic Features:** Explore optional functionalities such as user authentication, wishlists, customizable items, stock validation, dynamic categories, and persistent carts.
- **Extra Requirements:** Implement optional functionalities like user authentication, wishlists, customizable items, stock validation, dynamic categories, persistent carts, among others.

## Getting Started

To run this application locally:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.

## Project Structure

- `src/components/`: Contains individual React components.
- `src/context/`: Manages global contexts such as cart, authentication, etc.
- `src/services/firebase/`: Handles Firebase configurations and interactions.
- `src/App.js`: Main application file.

## Dependencies

- `React`: JavaScript library for building user interfaces.
- `Firebase`: Backend-as-a-Service for managing databases, authentication, and more.
- Additional dependencies as per project requirements.

## Additional Notes

- The project follows React best practices and aims for a modular, scalable codebase.
- External libraries are used judiciously, with justifications provided in the codebase.
