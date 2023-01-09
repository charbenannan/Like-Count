import React, { Component } from 'react';
import { dumpLogs } from './utils';

import classes from './blogCard.module.css';

const BlogCard = (props) => {
   

    // onlikeBtnClick=()=>{
    //     this.setState((prevState, prevProp) =>{
    //         return {likeCount: prevState.likeCount +1}
    //     });
    // }
    dumpLogs(props);
    
    
    return(
        <div className={classes.blogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            <p>Like Count: <span className={classes.likeCount}> {props.likeCount} </span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    )

}


export default BlogCard;