import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

// export default () => {
//     return <div>List of blog posts.</div>;
// }

class PostsIndex extends Component {

    componentWillMount(){
       // console.log('this would be a good time to call an action creator to fetch posts');
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of blog posts
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostsIndex);
// 액션생성자를 찾는 프로세스를 생략하고 오브젝트 전달 : 지름길
// export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);
 