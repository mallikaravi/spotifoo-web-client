import React from "react";

interface iProps {
  title: string;
  text: string;
  imageURL: string;
}
export default function WelcomePage({ title, text, imageURL }: iProps) {
  return (
    <article>
      <h1></h1>
      <title></title>
      <img></img>
    </article>
  );
}
