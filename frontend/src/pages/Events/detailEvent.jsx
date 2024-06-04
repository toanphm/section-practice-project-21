import { useParams } from "react-router-dom";
import EventItem from "../../components/EventItem";
import { useFetcher } from "../../hooks";
import { getEventById } from "../../services";

const DetailEvent = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useFetcher(() => getEventById(id), null);
  if (isLoading && !data) {
    return <h1>... loading</h1>;
  }

  if (!isLoading && error) {
    return <h1>Encounter Error: {error}</h1>;
  }

  return (
    <div>
      Detail page
      <div>{data ? <EventItem event={data} /> : <p>No events</p>}</div>;
    </div>
  );
};
export default DetailEvent;
