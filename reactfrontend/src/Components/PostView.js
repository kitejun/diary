// App.js파일에서 import PostView from './Components/PostView' 로 전달 받음
// 데이터가 잘 전달되는지 바로 확인 할 수 있음
import React, { Component } from 'react';
/*
const dummy_prop = {
    title: '테스트용 타이틀입니다.',
    content: '테스트용 글입니다.'
}
*/
export default class PostView extends Component {
    render() {
        const {id, title, content} = this.props
        return (
            <div>
                {id}
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}

export default class CommentView extends Component {
    render() {
        const {id, content} = this.props
        return (
            <div>
                {id}
                <p>{content}</p>
            </div>
        )
    }
}