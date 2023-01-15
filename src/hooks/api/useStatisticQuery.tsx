import { useAppDispatch } from "../../store/hooks";

import { getUsersForStatistic } from "../../store/reducers/statisticReducer";

export default function useGetUsersForStatistic() {
  const dispatch = useAppDispatch();

  function getUsersForStatisticQuery() {
    dispatch(getUsersForStatistic());
  }

  return { getUsersForStatisticQuery };
}
