import { RootStateT } from "..";

/////SECTION: Loading States /////

export const selectUsersSideBarLoadingState = ({ users }: RootStateT) =>
  users.sideBarLoadingState;

export const selectUsersContentLoadingState = ({ users }: RootStateT) =>
  users.contentLoadingState;

export const selectUsersOperationLoadingState = ({ users }: RootStateT) =>
  users.operationLoadingState;

/////SECTION: Users

export const selectUserLabels = ({ users }: RootStateT) => users.users;
export const selectUserDetails = ({ users }: RootStateT) => users.userDetails;

/////SECTION: Filter

export const selectUserDBFilter = ({ users }: RootStateT) => users.filter;
export const selectUsersLocaleFilter = ({ users }: RootStateT) =>
  users.localeFilter;

export const selectTriigererGetNewUserDetails = ({ users }: RootStateT) =>
  users.triggerGetNewUserDetails;
