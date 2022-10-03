import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = ({ props }: any) => {
  return (
    <footer className="footer fixed-bottom  bg-dark">
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}