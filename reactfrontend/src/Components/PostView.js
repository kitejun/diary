import React, { Component } from 'react';


export default class PostView extends Component {
    render() {
        const {title, content, updated} = this.props
        return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <h6>수정한 날짜: {updated}</h6>
            </div>
        )
    }
}
