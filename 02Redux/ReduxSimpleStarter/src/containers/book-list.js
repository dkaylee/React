import React, { Component } from 'react';
//react redux 연결하는 역할
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) =>{
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)} 
                className="list-group-item">
                    {book.title}</li>
            )
        })
    }

    render(){
        // console.log(this.props.asdf) // -> '123'
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// react와 redux 연결
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    // 리덕스와 컨테이너의 컴포넌트를 연결하는 방식
    return {
       books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// creating container
// container function은 redux에 속해있고 state를 다룰 수 있는 component

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);