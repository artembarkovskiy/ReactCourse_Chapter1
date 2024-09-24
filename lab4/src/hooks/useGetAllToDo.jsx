import { useEffect, useState } from "react";


const useGetAllToDo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useGetAllToDo;
