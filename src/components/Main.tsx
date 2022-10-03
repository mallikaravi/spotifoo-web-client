import React from 'react'
import "../styles/Main.css";

export const Main = ({props}:any) => {
    return (
      <div className="header">
        <h1>{props.message}</h1>
      </div>
    );
  }