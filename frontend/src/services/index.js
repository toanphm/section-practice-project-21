export const getEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  const data = await response.json();
  return data.events;
};

export const getEventById = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  const data = await response.json();
  return data.event;
};

export const postNewEvent = async ({ data: payload, method = "POST" }) => {
  const response = await fetch(`http://localhost:8080/events`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    method: method,
  });
  const result = await response.json();
  return result;
};

export const patchEventById = async ({ data: payload, id }) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    method: "PATCH",
  });
  const result = await response.json();
  return result;
};

export const deleteEventById = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};
