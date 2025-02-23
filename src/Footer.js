import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This weather app was coded by Lisa Valentina Riedel with SheCodes. It is
        open-sourced on{" "}
        <a
          href="https://github.com/lisa-valentina/react_weather-app_2025"
          target="_blank"
          rel="noopener no referrer"
        >
          github
        </a>{" "}
        and hosted on Netlify.
      </p>
    </div>
  );
}
