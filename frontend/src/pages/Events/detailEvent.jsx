import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../../components/EventList/Item/EventItem";
import PageContent from "../../components/PageContent/PageContent";
import { deleteEventById, getEventById } from "../../services";
import { Suspense } from "react";
import Loading from "../../components/Loading";

const DetailEvent = () => {
  const data = useRouteLoaderData("event-id");
  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={data.data}
        children={(resolvedEvent) => (
          <PageContent title={"Detail Page"}>
            <EventItem event={resolvedEvent} />
          </PageContent>
        )}
      />
    </Suspense>
  );
};
export default DetailEvent;

// Loader
export const loader = async ({ request, params }) => {
  const { id } = params;
  const res = getEventById(id);
  return defer({
    status: 200,
    data: res,
  });
};

export const action = async ({ params, request }) => {
  const response = await deleteEventById(params.id);
  console.log("-----detail action", response);
  if (response.errors) {
    return json({ status: 400, message: response.message });
  }

  return redirect("/events");
};
