import React from 'react'
import "./About.css"

function About() {
    return (
        <div className="About">
            <div className="About__Text">About Qs</div>
            <div className="About__Main">
                <p className="About__P1">Qs is a platform for asking any type of question and polls.Words words words and more words</p>
                <p className="About__P2">This paragraph contains amazing knowlege, please read with caution, also have a great day</p>
            </div>
            <div className="About__Under">
               Made with MongoDB, Express, React, Node.
            </div>
            
        </div>
    )
}

export default About
