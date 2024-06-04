import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layouts";
import Home from "./pages/home";
import Events, { loader as eventLoader } from "./pages/Events";
import DetailEvent from "./pages/Events/detailEvent";
import NewEvent from "./pages/Events/newEvent";
import EditEvent from "./pages/Events/editEvent";
import EventLayout from "./layouts/EventLayout";
import ErrorBoundary from "./pages/errors/ErrorBoundary";
import { getEvents } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,

    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            id:"events",
            element: <Events />,
            loader: eventLoader,
          },
          {
            path: ":id",
            element: <DetailEvent />,
          },
          {
            path: "new",
            element: <NewEvent />,
          },
          {
            path: ":id/edit",
            element: <EditEvent />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
