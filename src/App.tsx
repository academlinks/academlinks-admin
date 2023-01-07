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
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
