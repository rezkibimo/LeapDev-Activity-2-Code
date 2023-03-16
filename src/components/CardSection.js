import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "../style/CardSection.scss"

export class CardSection extends Component {
    render() {
        return (
            <div>

                <h1>CardSection</h1>


                <h2>One Solution Designed to Make Your Firm More Money</h2>
                <section class="card-layout">
                    <div class="card">
                        <StaticImage
                            src="../images/lc-safe-docs@2x.jpg"
                            alt="Safe Documents"
                        />
                        <div class="card-body">
                            <h4>Safe Documents</h4>
                            <p>LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.</p>
                        </div>
                    </div>

                    <div class="card">
                        <StaticImage
                            src="../images/lc-work-remote@2x.jpg"
                            alt="Work remotely"
                        />
                        <div class="card-body">
                            <h4>Work remotely</h4>
                            <p>You can sign in to LawConnect and view, collaborate and share your documents from anywhere..</p>
                        </div>
                    </div>

                    <div class="card">
                        <StaticImage
                            src="../images/lc-greater-collab@2x.jpg"
                            alt="Greater Collaboration"
                        />
                        <div class="card-body">
                            <h4>Greater Collaboration</h4>
                            <p>Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply.</p>
                        </div>
                    </div>

                </section>

            </div>


        )
    }
}


export default (CardSection)