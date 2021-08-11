import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component  {
    constructor(props) {
        super(props);
        this.state = { term: 'Starting Value' };
    } 

    render() {
        // this.state.term = event.target.value // BAD!
        return (
            <div className="search-bar">
                <input
                // state으로 부터 값을 받는 것을 알림으로써 component를 제어함 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState ({term});
        this.props.onSearchTermChange(term);
    }

    // 인풋이 바뀔때마다 run
    // onInputChange(event) {
        // console.log(event);
        // console.log(event.target.value);
    //}

}


export default SearchBar;