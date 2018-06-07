import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class HomePage extends Component {
    render() {
        return (
            <div className="background">
                <div className="centered">
                    <div>
                        <h1 className="homepage_header">
                            ART INSPO
                        </h1>

                        <iframe
                            src="https://giphy.com/embed/PH8gHFw2YJPaM"
                            width="383"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed center-align"
                            allowFullScreen title="background"></iframe>

                        <Link
                            className="center-align teal lighten-3 waves-effect waves-light btn"
                            to='/user'>Enter</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;