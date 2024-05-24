import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./page";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <HomePage />
    </ThemeProvider>
  </React.StrictMode>,
);
