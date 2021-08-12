import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'; 
import PropTypes from 'prop-types';

class PostsNew extends Component {

    static contextType = {
        router: PropTypes.object
    }; 

    onSubmit(props) {
        this.props.createPost(props)
            .then(()=>{ 
                // blog post has been created, navigate the user to the index
                // We navigate by calling this.context.router.push with the
                // new path to navigate to.
                this.props.history.push('/');
            });
    }

    render() {

        // const title = this.props.fields.title;
        const { fields:{ title, categories, content }, handleSubmit } = this.props;
        console.log(title);

        return (
            // an action creator (handleSubmit)
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }
    if (!values.categories) {
        errors.categories = 'Enter a categories';
    }
    if (!values.content) {
        errors.content = 'Enter a content';
    }

    return errors;
}



// 리덕스 폼 구성 전달
// connet: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps 
export default reduxForm({
    // form key
    form: 'PostsNewForm',
    // form을 가지고 있는 field 선언
    fields: ['title', 'categories', 'content'],
    // form 검증
    validate
}, null, { createPost }) (PostsNew);

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