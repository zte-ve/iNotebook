import React, { useContext } from 'react'
import AlertContext from '../Contexts/alerts/AlertContext';
function Alert() {
    const capitalize = (word) => {
        if (word === 'danger') return word = 'Error';
        word = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const { alert } = useContext(AlertContext);
    return (
        <div style={{
            height: '45px', position: 'fixed',
            width: '100vw',
            zIndex: 1
        }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(alert.type)}</strong> {alert.message}
            </div>}
        </div>
    );
}
export default Alert;

