import { Await, json, redirect, useRouteLoaderData } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";
import PageContent from "../../components/PageContent/PageContent";
import { Suspense } from "react";
import Loading from "../../components/Loading";
import { patchEventById } from "../../services";

const EditEvent = () => {
  const { data } = useRouteLoaderData("event-id");
  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={data}
        errorElement="fetching error has been failed"
        children={(resolvedEvent) => {
          return (
            <PageContent title={"edit event"}>
              <EventForm method="patch" event={resolvedEvent} />
            </PageContent>
          );
        }}
      />
    </Suspense>
  );
};

export default EditEvent;
export const action = async ({ params, request }) => {
  const data = await request.formData();
  const title = data.get("title");
  const image = data.get("image");
  const date = data.get("date");
  const description = data.get("description");

  const payload = { title, image, date, description };

  const response = await patchEventById({
    data: payload,
    id: params.id,
  });
  console.log(response);
  if (response.errors) {
    return json({ status: 400, message: response.message });
  }

  return redirect("/events");
};
