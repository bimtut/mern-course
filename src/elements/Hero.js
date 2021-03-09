import React from "react";

import cities from "assets/icons/ic_cities.svg";
import traveler from "assets/icons/ic_traveler.svg";
import treasure from "assets/icons/ic_treasure.svg";

import heroImage from "assets/images/hero-image.jpg";
import heroImageFrame from "assets/images/hero-image-frame.jpg";

import Button from "components/button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      // Pelajari dengan baik bagaimana ngatur value dari atribut "top" di bawah ini
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section>
      <div className="container pt-4">
        {/* class di wabah ini kenapa pake ROW yak? Perlu g sih yang begini? */}
        <div className="row align-item-center">
          {/* class COL-AUTO artinya kolom yang lebarnya auto. lalu deklarasi kalo itemsnya nyebar  */}
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>

            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy holiday with you family. Time to
              make another memorable moments.
            </p>

            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto " style={{ marginRight: 35 }}>
                <img
                  src={traveler}
                  alt={`${props.data.travelers} Travelers`}
                  width="36"
                  height="36"
                ></img>

                <h6 className="mt-3 ">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto " style={{ marginRight: 35 }}>
                <img
                  src={treasure}
                  alt={`${props.data.treasures} Treasures`}
                  width="36"
                  height="36"
                ></img>

                <h6 className="mt-3 ">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto ">
                <img
                  src={cities}
                  alt={`${props.data.cities} Travelers`}
                  width="36"
                  height="36"
                ></img>

                <h6 className="mt-3 ">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div className="" style={{ width: 520, height: 370 }}>
              <img
                src={heroImage}
                alt="room with blue sky"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0px 0px -30px", zIndex: 1 }}
              />
              <img
                src={heroImageFrame}
                alt="frame for room with blue sky"
                className="img-fluid position-absolute"
                style={{ margin: "0px -15px -15px 0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
