# Paradise Nursery

Paradise Nursery is a responsive online plant shop built with React, Redux Toolkit, and React Router. The project includes a landing page, an About Us section, a plant catalog with category filters, and a shopping cart with quantity control and automatic total updates.

## Project Overview

This application allows users to browse greenery for indoor, outdoor, and succulent collections. Customers can add products to the cart, update their quantities, remove items, and view a real-time order total.

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Redux
- React Router DOM
- CSS

## Project Structure

```text
Paradise Nursery/
├── index.html
├── package.json
├── README.md
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── plants.js
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── node_modules/
```

## Installation

1. Open the project folder.
2. Install dependencies:

```bash
npm install
```

## Run the App

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Production Build

```bash
npm run build
```

## Features Included

- Home page hero section with Get Started navigation
- About Us page with mission, vision, and services
- Product listing with 18 plants across 3 categories
- Add to cart with duplicate prevention
- Quantity increase and decrease controls
- Remove item option
- Automatic total calculations
- Responsive design for desktop, tablet, and mobile

## Note

The product catalog uses remote Unsplash image URLs, so the application runs immediately without needing to add local image files.
