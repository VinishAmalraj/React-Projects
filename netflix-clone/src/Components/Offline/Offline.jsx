import React from "react";
import "./Offline.css";
import { MdCellWifi } from "react-icons/md";

function Offline() {
  return (
    <div className="ofbox">
      <div className="loader1"></div>
      <h1>Youre Offline</h1>
      <p color="#ffff">
        Check your Internet <MdCellWifi color="#ffff" size={29} />
      </p>
    </div>
  );
}

export default Offline;
