import { useState } from "react";

type Props = {
  title: string | number;
  footer?: JSX.Element;
  onPostClick?: (index: number, name: string) => void;
};

export default function Post(props: Props) {
  const { title, footer, onPostClick } = props;

  const [biki, setBiki] = useState("Anish");
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div
      onClick={() => {
        setBiki("Hero");
        if (onPostClick) onPostClick(12, "nischit");
      }}
    >
      {title} {footer}
      {biki}
      {biki === "Hero" ? <>BIKI is HERO</> : <></>}
      {numbers.map((number) => {
        return <h5 key={number}>{number}</h5>;
      })}
      <button
        onClick={(e) => {
          console.log("I am clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
}
