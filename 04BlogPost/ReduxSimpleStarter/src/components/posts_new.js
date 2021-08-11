import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class PostsNew extends Component {
    render() {

        // const title = this.props.fields.title;
        const { fields:{ title, categories, content }, handleSubmit } = this.props;
        console.log(title);

        return (
            <form onSubmit={handleSubmit}>
                <h3>Create A New Post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

// 리덕스 폼 구성 전달
export default reduxForm({
    // form key
    form: 'PostsNewForm',
    // form을 가지고 있는 field 선언
    fields: ['title', 'categories', 'content']
}) (PostsNew);

// user types something in...record it on application state
// state === {
//     form: {
//         PostsNewForm: {
//             title: '....',
//             categories: '....',
//             content: '....'
//         }
//     }
// }