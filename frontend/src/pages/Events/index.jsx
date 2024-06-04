import { getEvents } from "../../services";
import EventsList from "../../components/EventsList";
import { json, useRouteLoaderData } from "react-router-dom";

const Events = () => {
  const { data } = useRouteLoaderData("events");
  console.log(data);

  return <div>{data ? <EventsList events={data} /> : <p>No events</p>}</div>;
};

export default Events;

// Loader
export const loader = async ({ request, params }) => {
  const res = await getEvents();

  return json({
    status: 200,
    data: res,
  });
};
