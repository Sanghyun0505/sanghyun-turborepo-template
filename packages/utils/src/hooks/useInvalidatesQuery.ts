import { useQueryClient } from "react-query";

export const useInvalidatesQuery = () => {
  const queryClient = useQueryClient();

  const queryInvalidates = (queryKeys: (string | (string | number)[])[]) => {
    return queryKeys.map((item) => queryClient.invalidateQueries(item));
  };

  return { queryInvalidates };
};
