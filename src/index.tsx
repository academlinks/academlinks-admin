import { BrowserRouter as Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import Theme from "./Theme";
import IoProvider from "./store/IoProvider";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistore } from "./store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistore} loading={null}>
      <Routes>
        <Theme>
          <IoProvider>
            <App />
          </IoProvider>
        </Theme>
      </Routes>
    </PersistGate>
  </Provider>
);
