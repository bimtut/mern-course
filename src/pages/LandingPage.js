import React, { Component } from "react";
import Header from "elements/Header";
import Hero from "elements/Hero";
import MostPicked from "elements/MostPicked";
import Categories from 'elements/Categories'
import Testimony from 'elements/Testimony'
import Footer from 'elements/Footer'

import landingPage from "json-schema/landingPage.json";

// export default function LandingPage(props) {
//   return (
//     <>
//       <Header {...props}></Header>
//       <Hero data={landingPage.hero}></Hero>
//       <MostPicked data={landingPage.mostPicked}></MostPicked>
//     </>
//   );
// }

// pakai class component aja

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef(); //pelajari bagaimana createRef ini bekerja
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} refMostPicked={this.refMostPicked}></Hero>
        <MostPicked
          data={landingPage.mostPicked}
          refMostPicked={this.refMostPicked}
        ></MostPicked>
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial}/>
        <Footer/>
      </>
    );
  }
}
