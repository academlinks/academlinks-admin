import { axiosQuery } from "../../axiosConfig";

import {
  GetNotificationT,
  DeleteNotificationT,
  MarkNotificationAsReadT,
} from "../../../interface/reducers/notificationReducer.types";

export async function getNotificationsQuery() {
  return await axiosQuery("/administration/notifications");
}

export async function getNotificationQuery(params: GetNotificationT) {
  return await axiosQuery(`/administration/notifications/${params.notifyId}`);
}

export async function deleteAllNotificationsQuery() {
  return await axiosQuery.delete("/administration/notifications");
}

export async function deleteNotificationQuery(params: DeleteNotificationT) {
  return await axiosQuery.delete(
    `/administration/notifications/${params.notifyId}`
  );
}

export async function markNotificationsAsSeenQuery() {
  return await axiosQuery.patch("/administration/notifications");
}

export async function markNotificationAsReadQuery(
  params: MarkNotificationAsReadT
) {
  return await axiosQuery.patch(
    `/administration/notifications/${params.notifyId}`
  );
}
