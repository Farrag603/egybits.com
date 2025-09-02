import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
