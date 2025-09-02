"use client";

import React from "react";
import Link from "next/link";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <html>
      <body>
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
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <button
              onClick={reset}
              style={{
                padding: "10px 20px",
                margin: "10px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Go back home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
