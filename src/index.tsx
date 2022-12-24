import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import { BrowserRouter as Routes } from "react-router-dom";

import App from "./App";
import Theme from "./Theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Routes>
      <Theme>
        <App />
      </Theme>
    </Routes>
  </Provider>
);
