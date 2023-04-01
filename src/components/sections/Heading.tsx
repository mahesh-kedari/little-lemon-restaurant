/**
 * Heading Component
 * @author kedari.mahesh@gmail.com
 */
import React from "react";
import HeroImage from "../../assets/food/food4.webp";
type Props = {
  pageTitle: string;
};

export default function Heading({ pageTitle }: Props) {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>{pageTitle}</h1>
      </div>
    </header>
  );
}
