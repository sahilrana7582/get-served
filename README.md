# Get Served 🍲

Welcome to **Get Served**, a modern and aesthetic restaurant website designed for food lovers who want to browse, order, and experience delicious food at their fingertips. This website brings together smooth UI and comprehensive features to provide a delightful user experience.

## 🌐 Live Demo

[Link to your deployed website here]

---

## Features

### 🌟 Key Highlights

- **Data Source:** Leveraging the DummyJSON API for realistic and diverse food data.
- **Frameworks and Libraries:** Built with Next.js, styled with Tailwind CSS and Material UI, and enhanced with ShadcnUI for beautiful UI components.
- **State Management:** Efficiently managed using Redux and Redux Toolkit.

---

### 🛠️ Core Functionalities

#### User Authentication

- **Login / Logout:** Seamless login and logout experience for users.
- **User Session Handling:** Ensures secure handling of user data, allowing them to save their cart, orders, and preferences.

#### Shopping Cart

- **Add to Cart / Remove from Cart:** Users can add or remove items from their cart with ease.
- **Dynamic Cart Update:** As items are added or removed, the cart dynamically updates, showing item count, subtotal, and allowing users to modify quantities directly.

#### Order Management

- **Order Status Tracking:** Users can check their order status in real time to stay updated on their purchase.
- **Checkout & Payment:** Complete integration of a checkout process with payment handling, ensuring smooth transactions.
- **Clear Cart:** Once an order is successfully placed, users can choose to clear the cart or keep it for later.

---

### ⚙️ Tech Stack

- **Frontend Framework:** [Next.js](https://nextjs.org/) for server-rendered and static websites.
- **UI Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) for utility-first responsive styling.
  - [Material UI](https://mui.com/) for beautiful, pre-styled components.
  - [ShadcnUI](https://ui.shadcn.dev/) for enhanced component customization and aesthetic styling.
- **State Management:**
  - **Redux** and **Redux Toolkit** for effective and efficient state management, enabling a smooth user experience across components.

---

### 📂 Project Structure

- **`/components`** - Contains all reusable components like `Cart`, `OrderStatus`, `ProductCard`, etc.
- **`/pages`** - Next.js pages that include routes like `/home`, `/cart`, `/checkout`, and `/order-status`.
- **`/store`** - Contains Redux slices for managing application state (cart, order status, etc.).

---

## 💾 Installation and Setup

To run this project locally:

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd get-served

   ```

1. **Install Dependencies**

   ```bash
   npm install
   ```

🚀 Usage Guide

Sign up / Log in to start browsing your favorite dishes.
Add items to the Cart and proceed to Checkout when ready.
Track the Order Status post-checkout to stay updated.

🤝 Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request for review.
