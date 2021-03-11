import React from "react";
import Button from "components/button";
import TextIcon from "elements/TextIcon";

import Fade from "react-reveal/Fade";

export default function Header(props) {
  // guna function ini : menambahkan class "active" pada path navigation yang sedang aktif
  // hal ini nantinya akan berpengaruh pada tampilan navbar.
  // path yang sedang aktif akan berbeda warna karena memiliki class "active", sedangkan yang lain biasa aja.
  const getNavLinkClass = (path) => {
    //   actually aku belum tahu apa itu location.pathname. mari kita cari tahu nanti
    // JAWAB: props.location adalah object yang dikembalikan komponen yang sedang dirender.
    // pada object location tersebut juga terdapat pathname
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        {/* setelah bikin "bungkus" maka isinya dibungkus lagi dulu di dalam div.container dulu */}
        <div className="container">
          {/* di dalam sini dimasukan elemen2 yang diinginkan. pada kasus ini ada 2 elemen. nav dan dix berisi UL */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <TextIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
