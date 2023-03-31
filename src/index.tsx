import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Content } from './features/content/Content';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [
      {
        path: "country/:countryCode",
        element: <Content />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
        <App />
      </Provider>
  </React.StrictMode>
);
