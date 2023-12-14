import React from "react";
import FacebookIcon from "../assets/FacebookIcon.jpg";
import TelegramIcon from "../assets/TelegramIcon.jpg";

export default function ContactImgs() {
  return (
    <>
      <a href="https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL">
        <img src={FacebookIcon} alt="Facebook" width={50} height={50} />
      </a>
      <a href="https://t.me/Th22001">
        <img src={TelegramIcon} alt="Telegram" width={50} height={50} />
      </a>
    </>
  );
}
