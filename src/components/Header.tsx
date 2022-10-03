import React from 'react'
import "../styles/Header.css";

export const Header = ({props}:any) => {
    return (
      <div className="header">
        <h1>{props.message}</h1>
      </div>
    );
  }