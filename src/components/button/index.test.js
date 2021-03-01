import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

test("Should not allowed to click if isDisabled is present", () => {
  //parameter pertama (string) berisi keterangan tentang test ini. parameter kedua berisi function yang digunakan untuk menjalankan test
  const { container: bandarnarkoba } = render(<Button isDisabled></Button>);
  // console.log(render(<Button isDisabled></Button>))

  expect(bandarnarkoba.querySelector("span.disabled")).toBeInTheDocument();
  // penjelasan:
  // container adalah object BAWWAN yang didapat dari merender element Button.
  // Container mengandung SEMUA hasil dari render(). lakukan console.log() untuk cek isinya.
  // Penamaan ini ("container") merupakan aturan bawaan pada test.js
  // penamaan container dapat diatur ulang dengan cara const {container: NAMABARU}
  // pada bagian expect: mengecek menggunakan querySelector apakah terdapat <span></span> yang memiliki class disabled?
  // jika ada maka test dinyatakan LULUS
  // jika tidak ada maka hasilnya FAIL

  // expect() adalah function bawaan test.js untuk mengecek keluaran dari object container
});

// lanjutkan coba testing fitur lain

test("Should render loading text when isLoading", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument(); //getByText mengandung text "loading" dan case insensitive. cek menggunakan regex
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a></a> when type is link and link isExternal", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link></Link> when type is link and link is NOT External", () => {
  const { container } = render(
    <Router>
      <Button type="link" href=""></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
  // Note: <Link> dan <a> diperlakukan dan dianggap sama sebagai <a> oleh DOM
});
