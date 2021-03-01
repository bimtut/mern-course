import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    // jika atribut isDisabled aktif, class disabled dimasukan ke dalam <span></span> di bawah ini.
    // belum begitu tahu bagaimana bisa sebuah return <span></span> yang ada di bawah bisa diinjek class dari line ini  dan berhasil.
    if (props.isDisabled) className.push("disabled");

    //   else
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          // jika masih loading, tampilkan spinner dan message bahwa sedang loading
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span>Loading...</span>
          </>
        ) : (
          // jika sudah tidak loading, tampilkan children. Namun sebenarnya children ini tidak akan pernah muncul karena begitu kondisi ini tidak terpenuhi akan berpindah ke kondisi/return yang lain
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      //jika eksternal, nyambungnya ke link luar web sehingga harus pake <a></a> namun jika bukan eksternal, hanya perlu React Router Dom menggunakan <Link>
      // props stylenya ini dideklarasikan di a atau di button?
      return (
        <a
          href={props.href}
          className={className.join(" ")} //belum tahu kenapa ini pake ginian
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")} //belum tahu kenapa ini pake ginian
          style={props.style}
          onClick={onClick} //kondisional memakai onClick
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    // nah bagian ini bingung bener. setelah bikin tetek bengek di atas, kenapa terus yang direturn adalah button lagi?
    // ataukah return button ini adalah bentuk default return nya jika semua kondisi di atas tidak terpenuhi?
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

// deklarasi proptype (type property) yang tersedia pada element Button
// function punya hoisting. jadi propType bisa dideklarasikan sebelum atau sesudah function
Button.propTypes = {
  type: PropTypes.oneOf(["button", "link"]),
  onClick: PropTypes.func,
  target: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  //   style: PropTypes.string, //attribute ini sudah menjadi attribute bawaan dari react. Penggunaannya untuk inline style. Jadi tidak perlu dideklarasikan
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  isPrimary: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
