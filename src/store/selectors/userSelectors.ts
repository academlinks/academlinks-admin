import { RootStateT } from "..";

export const selectUserLabelsState = ({ users }: RootStateT) =>
  users.labelsLoadingState;
export const selectUsersContentState = ({ users }: RootStateT) =>
  users.contentLoadingState;

export const selectUserLabels = ({ users }: RootStateT) => users.users;
export const selectUserDetails = ({ users }: RootStateT) => users.userDetails;

export const selectUserDBFilter = ({ users }: RootStateT) => users.filter;
export const selectUsersLocaleFilter = ({ users }: RootStateT) =>
  users.localeFilter;

export const selectTriigererGetNewUserDetails = ({ users }: RootStateT) =>
  users.triggerGetNewUserDetails;
