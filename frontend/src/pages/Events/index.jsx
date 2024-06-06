import { getEvents } from "../../services";
import EventsList from "../../components/EventList/EventsList";
import { Await, defer, useRouteLoaderData } from "react-router-dom";
import React from "react";
import Loading from "../../components/Loading";

const Events = () => {
  const { data } = useRouteLoaderData("events");
  console.log(data);

  return (
    <React.Suspense fallback={<Loading />}>
      <Await
        resolve={data}
        errorElement={<div>Could not load reviews 😬</div>}
        children={(resolvedEvents) => <EventsList events={resolvedEvents} />}
      />
    </React.Suspense>
  );
};

export default Events;

// Loader
export const loader = async ({ request, params }) => {
  const res = getEvents();
  return defer({
    status: 200,
    data: res,
  });
};
