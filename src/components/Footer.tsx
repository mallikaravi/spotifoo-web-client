import React from 'react'
import "../styles/Footer.css";

export const Footer = ({props}:any) => {
    return (
      <div className="footer">
        <h1>{props.note}</h1>
      </div>
    );
  }