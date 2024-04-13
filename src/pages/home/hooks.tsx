import { AxiosResponse } from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePaginationQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  return [handlePageChange] as const;
};

export const useRequest = <T,>() => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  return {
    performRequest: (
      cb: (signal: AbortSignal) => Promise<AxiosResponse<T>>
    ) => {
      if (abortController) abortController.abort();
      const newAbortController = new AbortController();
      setAbortController(newAbortController);

      setStatus("loading");
      cb(newAbortController.signal)
        .then((res) => {
          setData(res.data);
          setStatus("success");
        })
        .catch((err) => {
          if (err.code === "ERR_CANCELED") return;
          setErrorMessage(err.response?.data?.message ?? "");
          setStatus("error");
        });
    },
    data,
    status,
    errorMessage,
  };
};
