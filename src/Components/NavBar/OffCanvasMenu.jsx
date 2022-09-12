import React, { useEffect, useRef } from "react";
import { Offcanvas } from "bootstrap";

export default function OffcanvasMenu({
  offcanvasVisible,
  setOffcanvasVisible,
}) {
  const offcanvasRef = useRef();

  useEffect(() => {
    const offcanvasCurrent = offcanvasRef.current;
    let menu = Offcanvas.getInstance(offcanvasCurrent);
    if (!menu) {
      menu = new Offcanvas(offcanvasCurrent);
      menu.hide();
    } else {
      offcanvasVisible ? menu.show() : menu.hide();
    }
    offcanvasCurrent.addEventListener("hidden.bs.offcanvas", () => {
      setOffcanvasVisible(false);
    });
  }, [offcanvasVisible, setOffcanvasVisible]);

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvas"
      aria-labelledby="offcanvasLabel"
      data-bs-backdrop="true"
      data-bs-scroll="true"
      ref={offcanvasRef}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          onClick={() => setOffcanvasVisible(!offcanvasVisible)}
        ></button>
      </div>
      <div className="offcanvas-body">
        Content for the offcanvas goes here. You can place just about any
        Bootstrap component or custom elements here.
      </div>
    </div>
  );
}