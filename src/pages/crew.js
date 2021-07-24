import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import simon_reich_headshot from '../assets/images/simon_reich.jpg'
import evan_howell_headshot from '../assets/images/evan_howell.jpg'

const Crew = (props) => (
    <Layout>
        <Helmet>
            <title>Crew</title>
            <meta name="description" content="Meet the passionate, creative members
                  behind the podcast recording, music composition,
                  sound design and editing." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Crew</h1>
                    </header>
                    <p>
                        <span className="image right">
                            <img src={simon_reich_headshot} alt="Simon Reich" />
                        </span>
                        Simon Reich came up with the idea for this podcast,
                        while preparing for his Bachelor of Audio capstone project.
                        The amazing tales of survival and resilence, struck Simon
                        as an engaging story that would resonate throughout the
                        wider community. Through hours of interviews and putting
                        the audio clips together to form a consistent narrative,
                        Simon then composed and recorded a string quartet to
                        provide an emotional soundscape to accompany the podcast.
                        He also provided his own piano playing and voice overs.
                        This project is something Simon wants to expand into a
                        filmed documentary and eventually a book.</p>
                </div>
                <br />
                <div className="inner">
                    <p>
                        <span className="image right">
                            <img src={evan_howell_headshot} alt="Evan Howell" />
                        </span>
                        Evan Howell has a passion for audio and has been a podcast
                        producer and voice over artist for some years now. Through
                        the Government initiative "The Push", Evan has been
                        mentored by audio industry professionals and has also
                        created relationships to build his career in sound.
                        As sound supervisor/producer on this podcast, Evan has
                        provided amazing sound effects to give Manfred's stories
                        added depth. He has also edited, cleaned up audio files
                        and contributed to the editorial content of the narrative.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Crew
