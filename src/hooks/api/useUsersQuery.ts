import { useAppDispatch } from "../../store/hooks";
import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  DeleteUserPropsT,
} from "../../interface/reducers/usersReducer.types";

import {
  getUserLabels,
  getUserDetails,
  deleteUser,
} from "../../store/reducers/userReducer";

export default function useUsersQuery() {
  const dispatch = useAppDispatch();

  function getUserLabelsQuery({ query }: GetUserLabelPropsT) {
    dispatch(getUserLabels({ query }));
  }

  function getUserDetailsQuery({ userId }: GetUserDetailsPropsT) {
    dispatch(getUserDetails({ userId }));
  }

  function deleteUserQuery({ userId }: DeleteUserPropsT) {
    dispatch(deleteUser({ userId }));
  }

  return { getUserLabelsQuery, getUserDetailsQuery, deleteUserQuery };
}
