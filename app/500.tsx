import React from "react";
import Link from "next/link";

const InternalServerErrorPage = () => {
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
        <h1>500 - Internal Server Error</h1>
        <p>Something went wrong on our end. Please try again later.</p>
        <Link href="/">
          <a style={{ color: "blue", textDecoration: "underline" }}>
            Go back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default InternalServerErrorPage;
