import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../style/index.scss"
import CardSection from "../components/cardSection"
import IndexJumbotron from "../components/indexJumbotron"

export default function Home() {
  return <div>

    <nav class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <header class="twoColoumnLayout">

      <div className="maxPW">
        <h1 className="sectionHeader">The place to work with your lawyer</h1>
        <p>Your lawyer uses LawConnect to share information with you about your legal case in a privite, convenient and secure way.</p>
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

    <CardSection />

    <IndexJumbotron />

    <footer>

    </footer>

  </div>
}
