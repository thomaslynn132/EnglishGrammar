import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright-container">
        <p>
          &copy; {currentYear} Thomas's English Grammar. Everyone is allowed to
          learn or teach by using this website. Copying is allowed but reselling
          my notes is strongly restricted.
        </p>
      </div>
    </footer>
  );
}
