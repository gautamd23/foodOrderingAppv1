import { createContext } from "react";

const UserContext = createContext({
    loginUserName: "DefaultUser"
})

export default UserContext;