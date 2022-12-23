import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";
import Theme from "./Theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>
);
