import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="Slack Integration"/>

        <div className={"page-header"}>
            <h2>HiStaff and Slack</h2>
            <p>HiStaff is excited to announce a new integration with Slack<br />if you use the Slack it can be really efficient for your team.</p>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack Event Webhook</h2>
                                <p>The ability to send Event alerts to any channel when a new event is created by anyone.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack News Webhook</h2>
                                <p>Let staff know about any news on the Slack channel.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Slack Note Webhook</h2>
                                <p>Staff can see an alert about any post on the public board.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"bg-color"}>
            <div className={"container"}>
                <div className={"integration-guid"}>
                    <div className={"title"}>
                        <h2>How to enable and use the Slack integration</h2>
                    </div>

                    <div className={"content"}>
                        <h4>Overview</h4>
                        <p>You need to be an admin in order to enable the Slack integration. With the Slack integration, you can send an alert to Slack.</p>
                        <h4>Step 1</h4>
                        <p>Company admin needs to enable the integration one time for the whole company to use.</p>

                        <h4>Step 2</h4>
                        <p>Set up your conditions, and press the Update button. You will be able to send a notification to a specific Slack channel or to a specific user.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
