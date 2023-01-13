import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import AuthValidate from "./pages/AuthValidate";
import AuthenticationPage from "./pages/AuthenticationPage";
import Page from "./pages/Page";

const RegistrationRequestsPage = lazy(
  () => import("./pages/RegistrationRequests/RegistrationRequestsPage")
);
const RegistrationDetailedPage = lazy(
  () => import("./pages/RegistrationRequests/RegistrationDetailedPage")
);
const UsersPage = lazy(() => import("./pages/Users/UsersPage"));
const UserDetailsPage = lazy(() => import("./pages/Users/UserDetailsPage"));
const CommercialsPage = lazy(
  () => import("./pages/Commercials/CommercialsPage")
);
const ActiveCommercialPage = lazy(
  () => import("./pages/Commercials/ActiveCommercialPage")
);
const CreateCommercialPage = lazy(
  () => import("./pages/Commercials/CreateCommercialPage")
);
const StatisticsPage = lazy(() => import("./pages/Statistics/StatisticsPage"));
const UserRegDatesPage = lazy(
  () => import("./pages/Statistics/UserRegDatesPage")
);
const UsersByGenderPage = lazy(
  () => import("./pages/Statistics/UsersByGenderPage")
);
const UsersAgeRangePage = lazy(
  () => import("./pages/Statistics/UsersAgeRangePage")
);
const UsersByPositionPage = lazy(
  () => import("./pages/Statistics/UsersByPositionPage")
);
const UsersByCurrentCountryPage = lazy(
  () => import("./pages/Statistics/UsersByCurrentCountryPage")
);
const UsersByHomelandPage = lazy(
  () => import("./pages/Statistics/UsersByHomelandPage")
);
const UsersByInstitutionPage = lazy(
  () => import("./pages/Statistics/UsersByInstitutionPage")
);
const NotificationsPage = lazy(
  () => import("./pages/Notifications/NotificationsPage")
);
const ActiveNotificationsPage = lazy(
  () => import("./pages/Notifications/ActiveNotificationsPage")
);

function App() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Routes>
        <Route element={<AuthValidate />}>
          <Route path="/" element={<AuthenticationPage />} />
          <Route path="/dashboard" element={<Page />}>
            <Route path="users" element={<UsersPage />}>
              <Route path=":userId" element={<UserDetailsPage />} />
            </Route>

            <Route
              path="registration-requests"
              element={<RegistrationRequestsPage />}
            >
              <Route path=":requestId" element={<RegistrationDetailedPage />} />
            </Route>

            <Route path="commercials" element={<CommercialsPage />}>
              <Route path="create" element={<CreateCommercialPage />} />
              <Route path=":commercialId" element={<ActiveCommercialPage />} />
            </Route>

            <Route path="statistics" element={<StatisticsPage />}>
              <Route path="reg-dates" element={<UserRegDatesPage />} />
              <Route path="gender" element={<UsersByGenderPage />} />
              <Route path="position" element={<UsersByPositionPage />} />
              <Route path="institution" element={<UsersByInstitutionPage />} />
              <Route path="age-range" element={<UsersAgeRangePage />} />
              <Route
                path="geo-current"
                element={<UsersByCurrentCountryPage />}
              />
              <Route path="geo-home" element={<UsersByHomelandPage />} />
            </Route>

            <Route path="notifications" element={<NotificationsPage />}>
              <Route
                path=":notificationId"
                element={<ActiveNotificationsPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
