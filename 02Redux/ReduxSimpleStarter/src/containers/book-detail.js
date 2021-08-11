import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        // 처음 초기화 selected 되어있지 않기때문에 초기 값이 x -> error
        if (!this.props.book) {
            return <div>Select a book to get started.</div>
        }

        return(
            <div>
                <h3>Details for:</h3>
                <div>Title : {this.props.book.title}</div>
                <div>Pages : {this.props.book.pages}p</div>
            </div>

        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);