import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa";

export default function ContactImgs() {
  return (
    <>
      <a href="https://www.facebook.com/profile.php?id=100029785087930&mibextid=ZbWKwL">
        <FaFacebook size={15} /> Facebook
      </a>
      {"  "}
      or{"  "}
      <a href="https://t.me/Th22001">
        <FaTelegram size={15} />
        Telegram
      </a>
    </>
  );
}
