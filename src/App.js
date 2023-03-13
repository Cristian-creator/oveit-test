import { ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import EventDetails from "./pages/event-details";
import Home from "./pages/home";
import TicketSaleForCostumers from "./pages/ticket-sale-for-costumers";
import { theme } from "./utils/theme";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'events/:eventId',
        element: <EventDetails />
      },
      {
        path: 'events/:eventId/buy-tickets',
        element: <TicketSaleForCostumers />
      },
    ]
  }
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
