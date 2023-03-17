import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../style/index.scss"
import CardSection from "../components/cardSection"
import IndexJumbotron from "../components/indexJumbotron"

export default function Home() {
  return <div>

    <div className="headerSize">

      <header class="twoColoumnLayoutHeader">

        <div className="headerTextBox">
          <h1 className="sectionTopHeader">The place to work</h1>
          <h1 className="sectionTopHeader"> with your lawyer</h1>
          <br></br>
          <p>Your lawyer uses LawConnect to share information with you about your legal case in a privite, convenient and secure way.</p>
          <br></br>
          <button>Create Free Account</button>
        </div>

        <div>
          <StaticImage
            src="../images/lc-hero-desktop@2x.png"
            alt="Safe Documents"
            width="611"
          />
        </div>

      </header>
    </div>

    <CardSection />

    <IndexJumbotron />

    <footer>

    </footer>

  </div>
}
