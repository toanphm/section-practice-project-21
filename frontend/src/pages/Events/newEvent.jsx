import { json, redirect, useActionData } from "react-router-dom";
import EventForm from "../../components/EventForm/EventForm";
import { postNewEvent } from "../../services";
import { useEffect } from "react";

const NewEvent = () => {
  const res = useActionData();

  useEffect(() => {
    if (res && res.status !== 201) {
      window.alert(res?.message);
    }
  }, [res]);
  return (
    <div>
      <EventForm method={"post"} />
    </div>
  );
};

export default NewEvent;
export const action = async ({ params, request }) => {
  const data = await request.formData();
  const title = data.get("title");
  const image = data.get("image");
  const date = data.get("date");
  const description = data.get("description");

  const payload = { title, image, date, description };

  const response = await postNewEvent({
    data: payload,
    method: request.method,
  });
  console.log(response);
  if (response.errors) {
    return json({ status: 400, message: response.message });
  }

  return redirect("/events");
};
