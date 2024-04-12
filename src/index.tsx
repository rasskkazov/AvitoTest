import * as React from "react";
import { createRoot } from "react-dom/client";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./common.scss";
import { App } from "./App";
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);
