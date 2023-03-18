import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../style/index.scss"
import CardSection from "../components/CardSection"
import IndexJumbotron from "../components/indexJumbotron"

export default function Home() {
  return <div>

    <div className="headerSize">
      <section class="navigationBar">
        <div>
          <StaticImage
            src="../images/LawConnect-logo-reverse-mono-RGB.svg"
            alt="Safe Documents"
            height="32"
            layout="constrained"

          />
        </div>
        <div className="hideOnMobile">

          <ul>
            <li>For People</li>
            <li>For Business</li>
            <li>Contact</li>
          </ul>

        </div>
        <div>
          <ul>
            <li className="showOnMobile hideOnDesktop">
              <div className="hamburgerMenu">
                <div className="hamburgerMenuIcon"></div>
                <div className="hamburgerMenuIcon"></div>
                <div className="hamburgerMenuIcon"></div>
              </div>
            </li>
            <li className="hideOnMobile">Login</li>
            <li className="hideOnMobile"><button>Create Free Account</button></li>
          </ul>
        </div>
      </section>
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

          <div className="hideOnMobile">
            <StaticImage
              src="../images/lc-hero-desktop@2x.png"
              alt="Safe Documents"
              width="611"
            />
          </div>
          <div className="showOnMobile hideOnDesktop">
            <StaticImage
              src="../images/lc-hero-mobile@2x.png"
              alt="Safe Documents"
              width="300"
            />
          </div>

        </div>

      </header>
    </div>

    <CardSection />

    <IndexJumbotron />

    <footer>

    </footer>

  </div>
}
