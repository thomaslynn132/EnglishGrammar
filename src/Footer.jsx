import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright-container">
        <p>
          &copy; {currentYear} Thomas's English Grammar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
