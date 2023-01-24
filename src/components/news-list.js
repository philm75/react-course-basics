import React from 'react';
import NewsListItem from './news-item';

const NewsList = (props) => {

    return (
        <>
            {props.news.map((item, index) => (
                <NewsListItem key={index} item={item} />
            ))}
            {/*props.children*/}
        </>
    )
}

export default NewsList;