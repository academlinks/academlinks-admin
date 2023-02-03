import React, { createContext, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getAPI_Origin } from "../lib/config";

interface IoProviderT {
  children: React.ReactNode;
}

interface ActiveUserT {
  _id: string;
}

interface SocketPlaceholdersT {
  userConnection: "user_connection";
  userDisconnection: "user_disconnection";
  newUserIsRegistered: "new_user_is_registered";
  userChangeEmail: "admin_change_email_notify";
}

const socket_name_placeholders: SocketPlaceholdersT = {
  userConnection: "user_connection",
  userDisconnection: "user_disconnection",
  newUserIsRegistered: "new_user_is_registered",
  userChangeEmail: "admin_change_email_notify",
};

export const IoContext = createContext<{
  connection: (activeUser: ActiveUserT) => void;
  socket_name_placeholders: SocketPlaceholdersT;
  socket?: Socket;
}>({
  connection: (activeUser: ActiveUserT) => {},
  socket_name_placeholders: socket_name_placeholders,
});

const IoProvider: React.FC<IoProviderT> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();

  async function establishIoConnection() {
    const HOST = getAPI_Origin();

    const socketIo = HOST ? io(HOST, { transports: ["websocket"] }) : null;
    socketIo && setSocket(socketIo);

    return socketIo;
  }

  async function connection(activeUser: ActiveUserT) {
    try {
      const sock = await establishIoConnection();
      sock && sock.emit(socket_name_placeholders.userConnection, activeUser);
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <IoContext.Provider
      value={{ connection, socket_name_placeholders, socket }}
    >
      {children}
    </IoContext.Provider>
  );
};

export default IoProvider;
