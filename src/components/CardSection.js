import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import "../style/CardSection.scss"


export class CardSection extends Component {
    render() {
        return (
            <div className='sectionContainer'>

                <div>
                    <h1 className='cardHeader'>One Solution Designed to Make Your Firm More Money</h1>
                    <br></br>
                </div>

                <section className="card-layout">
                    <div className="card">
                        <div className='card-image'>
                        </div>

                        <div className="card-body">
                            <h4>Safe Documents</h4>
                            <p>LawConnect stores its data on servers provided by Amazon Web Services and is safer than email.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4>Work remotely</h4>
                            <p>You can sign in to LawConnect and view, collaborate and share your documents from anywhere..</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
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