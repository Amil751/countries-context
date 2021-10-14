import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import ContextWrapper from "./context/context";
import { ReactQueryDevtools } from "react-query-devtools";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </QueryClientProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
