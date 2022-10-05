import React from 'react'
import {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Player } from './player';

export const Footer = () => {
  return (
    <>
      <footer className="footer fixed-bottom ">
        <Player 
            id={1}
          /> 
      </footer>
    </>
  );
}