"use client";

const errorPage = ({ error, reset }) => {

  useEffect(() => {
    console.log(error);
  }, [error])


  return (
    <div>
      <h1>ERROR</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default errorPage;
