import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class PostsShow extends Component {

    static contextType ={
        router: PropTypes.object
    }

    componentDidMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.params.id)
        .then(() => { this.props.history.push('/'); 
        });
    }

    render() {

        const { post } = this.props;


        if (!post) {
            return <div>Loading...</div>;
        }
        console.log(this.props.post);
        return (
            <div>
                <Link to="/">Back</Link>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}>
                    Delete
                </button>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);