import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const AboutContact = (props) => (
    <Layout>
        <Helmet>
            <title>About / Contact</title>
            <meta name="description" content="Find out the background behind this honest,
                  tragic but ultimately heart warming series.
                  Want to contact us? All the details are here." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About / Contact</h1>
                    </header>
                    <p>The amazing true stories of Manfred Reich, survivor of the Nazi
                        regime in Berlin, Allied carpet bombing of Germany’s capital,
                        Soviet Berlin Blockade, Dividing of Germany and construction
                        of the Berlin Wall.</p>
                    <p>Our podcast will also tell of Manfred’s immigration to Australia
                        and starting of a new prosperous, peaceful life in his adopted home.</p>
                    <p>Heartfelt story telling from an honest and entertaining subject.
                        At times tragic and confronting, ultimately the tenacity of the
                        human spirit wins through. Manfred shares his wisdom from the
                        ultimate "school of hard knocks" and will lead you through a
                        heart warming series that is certain to make an impact on the
                        listener. </p>
                    <p>If you wish to contact us, we have a number of options.<br />
                        Email: <a href="mailto:upfromtherubble@gmail.com" alt="Email">upfromtherubble@gmail.com</a><br />
                        Facebook: <a href="https://www.facebook.com/Up-from-the-Rubble-Podcast-108885628137723">https://www.facebook.com/Up-from-the-Rubble-Podcast-108885628137723</a><br />
                        Instagram: Upfromtherubblepodcast</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default AboutContact
