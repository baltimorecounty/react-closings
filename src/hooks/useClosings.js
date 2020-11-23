import { useEffect, useState } from "react";

import { GetClosings } from "../services/ApiService";

const useClosings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [closings, setClosings] = useState([]);

  useEffect(() => {
    GetClosings()
      .then((response) => {
        setClosings(response);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [
    {
      closings,
      hasError,
      isLoading,
    },
  ];
};

export default useClosings;
