import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "../style/CardSection.scss"


export class CardSection extends Component {
    render() {
        return (
            <div className='sectionContainer'>

                <div>
                    <h2 className='cardHeader'>One Solution Designed to Make Your Firm More Money</h2>
                    <br></br>
                </div>

                <section className="card-layout">
                    <div className="card">
                        <div className='card-image'>
                            <StaticImage
                                src="../images/lc-safe-docs@2x.jpg"
                                alt="Safe Documents"
                                layout="constrained"
                            />
                        </div>
                        <div className="card-body">
                            <h3>Safe Documents</h3>
                            <p>LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className='card-image'>
                            <StaticImage
                                src="../images/lc-work-remote@2x.jpg"
                                alt="Work Remote"
                                layout="constrained"
                            />
                        </div>
                        <div className="card-body">
                            <h3>Work remotely</h3>
                            <p>You can sign in to LawConnect and view, collaborate and share your documents from anywhere..</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className='card-image'>
                            <StaticImage
                                src="../images/lc-greater-collab@2x.jpg"
                                alt="Greater Collaboration"
                                layout="constrained"
                            />
                        </div>
                        <div className="card-body">
                            <h3>Greater Collaboration</h3>
                            <p>Collaborate on documents with clients, lawyers and other parties with LawConnect’s Comment and Reply.</p>
                        </div>
                    </div>

                </section>

            </div>


        )
    }
}


export default (CardSection)