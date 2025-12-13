# Fake Store - A React Web App

Build a small, high-performance React application that displays product data fetched from the
Fake Store API. The goal is to assess your ability to work with APIs, efficient state/data
management, UI optimization, and handling live data updates/mutations.

## ✨ What's Inside? (Features)

This project is packed with cool features, making it a great example of a modern web application.

*   **View Products**: See a beautiful list of all available products.
*   **Search and Filter**: Easily find products by searching for their names or filtering them by category.
*   **Product Details**: Click on any product to see more information about it, like a full description and price.
*   **User Login**: A secure login system to make sure only authorized users can access certain pages. Your login stays active even if you refresh the page!
*   **Protected Pages**: The product pages are protected, so you must be logged in to see them.
*   **Manage Products**: Once logged in, you can update product details or delete products from the store.
*   **Responsive Design**: The website looks great on all devices, from large desktop screens to small mobile phones.
*   **Notifications**: Get friendly pop-up messages for actions like logging in or deleting a product.
*   **User Authentication**: A simple static login page is implemented for UI/UX simulation.
*   **Data Fetching and List Display**: Products are fetched from the API and displayed in a list with key details.
*   **Product Detail View**: A detailed view shows complete product description and ratings on click.
*   **Product Update Task**: An edit feature allows modification of product details with efficient cache updates.
*   **Product Deletion Task**: A delete button with confirmation instantly removes products from the list.
*   **UI/UX and Usability**: Graceful loading and error states are handled throughout the application.
*   **State Management & Caching**: Utilizes Redux Toolkit for efficient state management and data caching.
*   **Data Revalidation**: Data automatically refreshes when the window regains focus.
*   **Performance Optimization**: Implemented pagination for efficient data loading and display.

## 📂 File Structure

The project is organized with a clear and scalable structure to make it easy to find and manage files.

```
/
├── public/
│   └── ... # Static assets
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── assets/               # Images, fonts, etc.
│   ├── components/           # Reusable React components
│   │   ├── DeleteModal.jsx
│   │   ├── EditProductModal.jsx
│   │   ├── Loader.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── features/             # Redux slices for different app features
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── products/
│   │       └── productsSlice.js
│   ├── page/                 # Top-level page components
│   │   ├── Home.jsx
│   │   ├── login.jsx
│   │   ├── Product.jsx
│   │   └── ViewProduct.jsx
│   ├── services/
│   │   └── api.js            # API-related functions
│   ├── utils/
│   │   └── currency.js       # Utility functions
│   ├── App.jsx               # Main app component with routing
│   ├── index.css             # Global CSS styles
│   └── main.jsx              # Entry point of the application
├── .eslintrc.cjs
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🛠️ Tech Stack (What I Used)

This project was built using a set of modern and popular web technologies:

*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/)**: A super-fast tool for building and running the project.
*   **[Redux Toolkit](https://redux-toolkit.js.org/)**: For managing the application's data and state.
*   **[React Router](https://reactrouter.com/)**: To handle navigation between different pages.
*   **[Axios](https://axios-http.com/)**: For making API requests to fetch data.
*   **[Tailwind CSS](https://tailwindcss.com/)**: For styling the application and making it look good quickly.
*   **[React Hot Toast](https://react-hot-toast.com/)**: To show simple and beautiful notifications.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: For the icons used throughout the app.

## 🚀 How to Run This Project

Getting this project up and running on your computer is easy. Just follow these steps:

1.  **Install the necessary packages:**
    Open your terminal and run this command. This will download all the tools the project needs.
    ```bash
    npm install
    ```

2.  **Start the project:**
    After the installation is complete, run this command to start the local development server.
    ```bash
    npm run dev
    ```

3.  **See the magic!**
    Open your web browser and go to the address shown in the terminal (usually `http://localhost:5173`). You should see the website live!

## 🔑 Login Credentials

To test the login features, you can use the following demo accounts.

**Emails:**
*   `psiborgtech@gmail.com`
*   `danishzayan6@gmail.com`

**Password (for both accounts):**
*   `test@123`

---

Thank you for checking out this project! I hope you like it.