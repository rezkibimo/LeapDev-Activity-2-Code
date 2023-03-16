import * as React from "react"
import "../style/style.scss"
import ImageTest from "../images/lc-greater-collab@2x.jpg"

export default function Home() {
  return <div>


    <section class="layout">
      <div>
        <div class="card">

          <div class="container">
            <img src={ImageTest} alt="Logo" />
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">

          <div class="container">
            <img src={ImageTest} alt="Logo" />
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
      <div>
        <div class="card">
          <img src={ImageTest} alt="Logo" />
          <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </section>


  </div>
}
