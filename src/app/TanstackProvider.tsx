"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useInternet from "@/hooks/use-internet";

const TanstackProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  const isOnline = useInternet();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {typeof window !== "undefined" && !isOnline && (
        <div className="bg-red-500 text-white fixed bottom-0 inset-x-0 p-2 text-center animate-flip-up">
          Your currently offline!
        </div>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
