import React from "react";
import Button from "components/button";

import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {/* <div className="item column-4 row-2">
                    <div className="card">card 1</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 3</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 4</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 5</div>
                </div> */}
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={150 * index}>
                <div
                  className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
                  key={`most-picked-${index}`}
                >
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}{" "}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      ></img>
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
