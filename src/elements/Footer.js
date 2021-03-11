import React from "react";

import Button from "components/button";
import TextIcon from "elements/TextIcon";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <TextIcon />
            <p className="brand-tagline">
              We kaboom your amazing holiday instantly and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms-conditions">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  type="link"
                  href="mailto:support@staycation.id"
                  isExternal
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+62122081996" isExternal>
                  021-2208-1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            copyright 2021 - All right reserved - Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
