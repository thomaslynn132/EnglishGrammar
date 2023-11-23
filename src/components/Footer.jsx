import React from "react";
import ContactImgs from "./img";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright-container">
        <p>
          &copy; {currentYear} Thomas's English Grammar. Learnig can be going
          free from my website but reselling my notes is restricted. You can
          contact me via: <br />
        </p>
        <ContactImgs />
      </div>
    </footer>
  );
}
