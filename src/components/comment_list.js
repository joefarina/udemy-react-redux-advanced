import React, {Component} from 'react'
import {connect} from 'react-redux'

const CommentList = (props) => {
    let count = 0;
    const cList = props.comments.map((comment)=> {
        return <li key={count++}>{comment}</li>
    })
    return <ul className="comment-list">
        {cList}
    </ul>
}

function mapStateToProps(state) {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);