import React from 'react';
import Replacement from '../assets/imgs/replacement.jpg'

const ArticleCard = () => {
    return (
        <figure className='article-card'>
            <img src={Replacement} alt="Печать и штамп – в чем разница?" />
            <figcaption>Печать и штамп – в чем разница?</figcaption>
        </figure>
    );
};

export default ArticleCard;