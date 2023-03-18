import React, { Component } from 'react'
import { StaticImage } from "gatsby-plugin-image"

import "../style/jumbotron.scss"

export default class IndexJumbotron extends Component {
    render() {
        return (
            <div>
                {/* First Jumbotron */}
                <section class="twoColoumnLayoutWrapReverse sectionContainer withBGColor">

                    <div className="textBox">
                        <h2 className="sectionHeader">Signing Documents Electronically</h2>
                        <p>Your lawyer will share documents related to your case with you, via LawConnect. Each time a document is shared by your lawyer, you will receive an email notification so you can access the document.</p>
                        <p> If you already have a LawConnect account, you can login and an alert will be in your notifications tab that a document has been shared.</p>
                    </div>

                    <div className="imgColoumn">
                        <StaticImage
                            src="../images/lc-share-docs@2x.png"
                            alt="Safe Documents"
                            width="372"
                            layout="constrained"
                        />
                    </div>

                </section>

                {/* First Jumbotron END */}

                {/* Second Jumbotron */}

                <section class="twoColoumnLayout sectionContainer">
                    <div className="imgColoumn">

                        <div className="hideOnMobile">
                            <StaticImage
                                src="../images/lc-sign-docs-desktop@2x.png"
                                alt="Safe Documents"
                                width="372"
                            />
                        </div>

                        <div className="showOnMobile hideOnDesktop">
                            <StaticImage
                                src="../images/lc-sign-docs-mobile@2x.png"
                                alt="Safe Documents"
                                width="372"
                            />
                        </div>
                    </div>
                    <div className="textBox">
                        <h2 className="sectionHeader">Signing Documents Electronically</h2>
                        <p>LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way to sign importnt legal documents online.</p>
                    </div>
                </section>

                {/* Second Jumbotron END */}

            </div>
        )
    }
}