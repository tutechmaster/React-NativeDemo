import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import { TMDB_URL, TMDB_API_KEY } from '../constants/api';
import MovieDetail from '../components/MovieDetail';
//2

class Movies extends Component {
	state = { movies: [] };
	componentWillMount() {
		var self = this;
		axios.get(`${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=1`)
			.then(function(response){
				console.log(response.data.results);
				self.setState({ movies: response.data.results});
  });
	}
	renderMovies() {
		return this.state.movies.map(movie => <MovieDetail key={movie.title} movie={movie} />);
	}
    render() {
			return (
	  		<ScrollView>
	  			{this.renderMovies()}
	  		</ScrollView>
	  	);
		}
};

export default Movies;
