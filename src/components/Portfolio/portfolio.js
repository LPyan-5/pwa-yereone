import React from 'react';
import { Link } from 'react-router-dom';
import classes from './portfolio.css';

const Portfolio = () => {
    return (
        <div className={classes.works}>
            <h3>
                <Link to="" className={classes.worksLink}>Recent Works</Link>
            </h3>
            <p>Take a look at some of the sites we have created.</p>
        </div>
    )
};

export default Portfolio;