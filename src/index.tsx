import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import ContextWrapper from "./context/context";
import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.render(
  
  <QueryClientProvider client={queryClient}>
    
    <ContextWrapper>
    <App />
    </ContextWrapper>
    
  </QueryClientProvider>
  ,
  document.getElementById("root")
);

