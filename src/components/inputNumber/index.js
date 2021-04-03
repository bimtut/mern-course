import React, { useState } from "react";

import PropTypes from "prop-types";

import "./index.scss";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix } = props;

  const [InputValue, setInputValue] = useState(`${prefix}${value}${suffix}`); //kemungkinan ini nanti gunanya buat membentuk kata "10 nights", "1 night", dll

  const onChange = (e) => {
    console.log(e.target);
    let value = String(e.target.value); //mendapatkan "value" dari object e.target. Untuk lebih jelasnya apa saja isi object ini bisa console.log() objectnya saja

    if (prefix) {
      value = value.replace(prefix);
    } //jika ada prefix, hilangkan prefix dari value
    if (suffix) {
      value = value.replace(suffix);
    } //jika ada suffix, hilangkan suffix dari value

    const patternNumeric = new RegExp("[0-9]*"); //validasi menggunakan regex apakah valuenya hanya berisi Number atau tidak
    const isNumeric = patternNumeric.test(value); //bernilai boolean hasil validasi patternNumeric terhadap "value"

    if (isNumeric && +value <= max && +value >= min) {
      //apakah guna "+" sebelum value?
      props.onChange({
        //who is this "target" object below?
        // ohhh... apakah "target" ini adalah "anaknya" e? lalu name dan valuenya ditimpa gitu?
        target: {
          name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}`);
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend ">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(InputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
