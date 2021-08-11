import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        //JSX, DOM에 callback이 있을경우 context로 바인딩해야함
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // console.log(event.target.value);

        // text 입력시 state를 세팅
        this.setState( { term : event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        // Clear the search input
        this.setState({ term: '' });

    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

// middleware로 흘러가 리덕스 어플리케이션안의 리듀서로 들어가는 부분
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

// null은 지금 state이 필요없기때문에
export default connect(null, mapDispatchToProps)(SearchBar);