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
