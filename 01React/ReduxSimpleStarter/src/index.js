import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';

// actual file reference address
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// youtube API key
const API_KEY = 'AIzaSyDqBZ7yOtRX2rbouzs87Cu-v48XpokHCM0'; 

// Create a new component. This component should produce
// some HTML

// const App = function() {
//     return <div>hi!</div>;
// }

// const App = () => { 
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// }

class App extends Component{
    constructor(props) {
        super(props);

        // list of object []
        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('surfboards');

        }
        
        // term -> 검색어
        videoSearch(term) {
            YTSearch({key: API_KEY, term: term}, (videos) => {
                //console.log(data);
                this.setState({ 
                    videos: videos,
                    selectedVideo: videos[0]
                 });
                // this.setState({ videos: videos}) key : value compress
            });
        }


    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                {/* <VideoDetail video={this.state.videos[0]} /> */}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)


ReactDOM.render(<App/>, document.querySelector('.container'));