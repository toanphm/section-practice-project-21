import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/root/layouts";
import Home from "./pages/home";
import Events, { loader as eventLoader } from "./pages/Events";
import DetailEvent, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/Events/detailEvent";
import NewEvent, { action as newEventAction } from "./pages/Events/newEvent";
import EditEvent, { action as editEventAction } from "./pages/Events/editEvent";
import EventLayout from "./layouts/event/EventLayout";
import ErrorBoundary from "./pages/errors/ErrorBoundary";
import { createContext, useState } from "react";
import { action as newsletterSignUpAction } from "./components/Newsletter";

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
            id: "events",
            element: <Events />,
            loader: eventLoader,
          },
          {
            id: "event-id",
            path: ":id",
            loader: eventDetailLoader,
            action: eventDetailAction,
            children: [
              {
                index: true,
                element: <DetailEvent />,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: editEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
          },
        ],
      },
      {
        path: "NewsletterSignup",
        action: newsletterSignUpAction,
      },
    ],
  },
]);

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
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
