import * as React from "react"
import "../style/style.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return <div>

    <div>

    <h2>One Solution Designed to Make Your Firm More Money</h2>

      <section class="card-layout">


        <div class="card">
          <StaticImage
            src="../images/lc-safe-docs@2x.jpg"
            alt="A dinosaur"
          />
          <div class="card-body">
            <h4><b>Safe Documents</b></h4>
            <p>LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.</p>
          </div>
        </div>

        <div class="card">
          <StaticImage
            src="../images/lc-work-remote@2x.jpg"
            alt="A dinosaur"
          />
          <div class="card-body">
            <h4><b>Work remotely</b></h4>
            <p>You can sign in to LawConnect and view, collaborate and share your documents from anywhere..</p>
          </div>
        </div>

        <div class="card">
          <StaticImage
            src="../images/lc-greater-collab@2x.jpg"
            alt="A dinosaur"
          />
          <div class="card-body">
            <h4><b>Greater Collaboration</b></h4>
            <p>Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply.</p>
          </div>
        </div>



      </section>

    </div>


  </div>
}
