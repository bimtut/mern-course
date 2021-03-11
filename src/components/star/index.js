import React from "react";
import PropTypes from "prop-types";
import './index.scss'

export default function Star({ className, value, height, width, spacing }) {
  const decimal = Number(value) % 1; //untuk dapatkan sisa desimal dari value yang dimasukan

  const star = [];

  let leftPosition = 0; //untuk menentukan lokasi penempatan Star, dari awal hingga akhir
  for (let i = 0; i < 5 && i < value - decimal; i++) {
    leftPosition = leftPosition + width; //ditambahkan width untuk menentukan posisi bintang yang selanjutnya
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{ left: i * width, height, width, marginRight: spacing }}
      ></div>
    );
  }

  if (decimal > 0 && value <= 5) {
    star.push(
      <div
        className="star"
          key={`starWithDecimal`}
        style={{ left: leftPosition, height, width: decimal* width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${i}`}
        style={{ left: i * width, height, width, marginRight: spacing }}
      ></div>
    );
  }
  return <>
   <div className={["stars", className].join(" ")} style={{height}}>
       {starPlaceholder}
       {star}
   </div>
  </>;
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number,
};
