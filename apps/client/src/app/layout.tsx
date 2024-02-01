"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import Provider from "@/components/provider/Provider";
import { RecoilRoot } from "recoil";
import { PropsWithChildren } from "@sanghyun/core";
import { useState } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="ko">
      <title>유저 페이지</title>
      <body>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <div id="modal-root" />
            <Provider>{children}</Provider>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
