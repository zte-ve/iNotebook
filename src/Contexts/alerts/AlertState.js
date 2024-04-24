import React, { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
    const [alert, setAlert] = useState(null);
    const setAlertFun = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return <AlertContext.Provider value={{ alert, setAlertFun }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;