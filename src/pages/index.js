import * as React from "react"
import "../style/style.scss"
import ImageTest from "../images/lc-greater-collab@2x.jpg"

export default function Home() {
  return <div>

    <div>

      <h2>Card</h2>

      <section class="layout">

        <div class="card">
          <img 
          src={ImageTest} 
          srcset=
  "{ImageTest} 1x, {ImageTest} 2x"
          alt="Logo" />
          <div class="container">
            <h4><b>Safe Documents</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>

        <div class="card">
          <img src={ImageTest} alt="Logo" />
          <div class="container">
            <h4><b>Work remotely</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>

        <div class="card">
          <img src={ImageTest} alt="Logo" />
          <div class="container">
            <h4><b>Greater Collaboration</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>



      </section>

    </div>


  </div>
}
