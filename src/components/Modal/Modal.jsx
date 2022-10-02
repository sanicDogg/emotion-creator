import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./modal.module.css";
import buttonStyles from "../Button/button.module.css";

export const Modal = () => {
  const [copied, setCopied] = useState(false);

  const qrUrl = window.location.href;

  navigator.clipboard.writeText(qrUrl).then(() => {
    setCopied(true);
  })

  return (
    <div className={s.modal}>
      <div className={s.modalInner}>
        {copied && <h2>Link copied to clipboard!</h2>}
        <img src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${qrUrl}`} alt="qr"/>
        <Link className={`${buttonStyles.button} ${s.link}`} to={"/"}>Return home</Link>
      </div>
    </div>
  )
}