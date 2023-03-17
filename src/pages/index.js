import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../style/index.scss"
import CardSection from "../components/cardSection"

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

    <section class="twoColoumnLayout sectionContainer firstColor">

      <div className="maxPW">
        <h1 className="sectionHeader">Signing Documents Electronically</h1>
        <p>Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document. If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared.</p>
      </div>

      <div>
        <StaticImage
          src="../images/lc-share-docs@2x.png"
          alt="Safe Documents"
          width="372"
        />
      </div>

    </section>

    <section class="twoColoumnLayout sectionContainer">
      <div>
        <StaticImage
          src="../images/lc-sign-docs-desktop@2x.png"
          alt="Safe Documents"
          width="372"
        />
      </div>
      <div className="maxPW">
        <h1 className="sectionHeader">Signing Documents Electronically</h1>
        <p>LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign importnt legal documents online.</p>
      </div>
    </section>

    <footer>

    </footer>

  </div>
}
