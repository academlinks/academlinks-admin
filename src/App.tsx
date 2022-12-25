import { Routes, Route } from "react-router-dom";

import Page from "./pages/Page";
import RegistrationRequestsPage from "./pages/RegistrationRequests/RegistrationRequestsPage";
import RegistrationDetailedPage from "./pages/RegistrationRequests/RegistrationDetailedPage";
import UsersPage from "./pages/Users/UsersPage";
import UserDetailsPage from "./pages/Users/UserDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route path="/users" element={<UsersPage />}>
          <Route path=":userId" element={<UserDetailsPage />} />
        </Route>
        <Route
          path="/registration-requests"
          element={<RegistrationRequestsPage />}
        >
          <Route path=":requestId" element={<RegistrationDetailedPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
