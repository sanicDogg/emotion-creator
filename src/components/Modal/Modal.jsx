import React from "react";
import s from "./modal.module.css";

export const Modal = () => {
    const qrUrl = window.location.href;

    return (
        <div className={ s.modal }>
            <div className={ s.modalInner }>
                <img src={ `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${ qrUrl }` } alt="qr"/>
            </div>
        </div>
    )
}