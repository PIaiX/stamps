import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'
import {Link} from 'react-router-dom';

const ArticleCard = () => {
    return (
        <figure className='article-card'>
            <Link to="/articles/321">
            <img src={Replacement} alt="Печать и штамп – в чем разница?" />
            <figcaption>Печать и штамп – в чем разница?</figcaption>
            </Link>
        </figure>
    );
};

export default ArticleCard;