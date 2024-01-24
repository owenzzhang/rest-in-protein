import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const nav = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => nav(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
