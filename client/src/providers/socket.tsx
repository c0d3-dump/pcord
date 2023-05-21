import React, { useContext, useMemo } from "react";
import { io } from "socket.io-client";

export const SocketContext = React.createContext<unknown>(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props: React.PropsWithChildren) => {
  const socket = useMemo(() => io("http://localhost:8001"), []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {props.children}
    </SocketContext.Provider>
  );
};
