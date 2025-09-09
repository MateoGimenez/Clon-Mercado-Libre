import { useState } from "react";
import './campana.css';

export const Campana = () => {
  const [notificaciones, setNotificaciones] = useState(3);

  return (
    <div className="campana">
      <img src="/campana/icon-campana.png" alt="" />
      {notificaciones > 0 && (
        <span className="contador">{notificaciones}</span>
      )}
    </div>
  );
};
