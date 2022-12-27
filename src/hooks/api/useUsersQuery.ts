import { useAppDispatch } from "../../store/hooks";
import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
} from "../../interface/reducers/usersReducer.types";

import {
  getUserLabels,
  getUserDetails,
} from "../../store/reducers/userReducer";

export default function useUsersQuery() {
  const dispatch = useAppDispatch();

  function getUserLabelsQuery({ query }: GetUserLabelPropsT) {
    dispatch(getUserLabels({ query }));
  }

  function getUserDetailsQuery({ userId }: GetUserDetailsPropsT) {
    dispatch(getUserDetails({ userId }));
  }

  return { getUserLabelsQuery, getUserDetailsQuery };
}
