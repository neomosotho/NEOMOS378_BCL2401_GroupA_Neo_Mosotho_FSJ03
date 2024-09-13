

# Next.js E-commerce Product Catalog

A simple e-commerce product catalog built with Next.js, Tailwind CSS. The application allows users to browse products, view details, and interact with features like product categories, ratings, reviews, and image galleries.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [License](#license)

## Features

- Browse a catalog of products fetched from the FakeStore API
- View detailed information for each product, including images, categories, price, and stock availability
- Image carousels for products with multiple images
- View user reviews with ratings, comments, and review dates
- Navigate back to the previous page using a back button
- Responsive design using Tailwind CSS


## Screenshots

![Product Grid](https://via.placeholder.com/600x400)
_Example of the product grid displaying multiple products._

![Product Details](https://via.placeholder.com/600x400)
_Example of the product detail page showing a gallery and detailed product information._

## Technologies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)


## Installation

1. Clone the repository:

   git clone 
   cd my-next-app

Install the required dependencies:

npm install
Start the development server:

npm run dev
Open your browser and go to http://localhost:3000 to view the app.

Usage
Browsing Products
Each product card shows an image, title, price, and category.
Click on a product to view its detailed page.
Product Details
On the product detail page, you can view:
A carousel for previewing multiple images
The category and price of the product
Stock availability and tags associated with the product
User reviews including name, rating, and comments

Project Structure
.
├── components
│   ├── BackButton.js       # Component for navigating back to the previous page
│   ├── Gallery.js          # Image carousel for product images
│   └── ProductCard.js      # Displays product information in a card format
│
├── lib
│   └── product
│       └── api.js          # API functions to fetch product data from FakeStore API
│
├── pages
│   └── products
│       └── [id].js         # Dynamic page for rendering individual product details
│
├── public
│   └── favicon.ico         # Favicon for the app
│
├── styles
│   └── globals.css         # Global styles for the app
│
└── README.md               # Project documentation
