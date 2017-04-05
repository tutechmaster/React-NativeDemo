//MovieDetail:
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import { TMDB_IMG_URL, TMDB_URL, TMDB_API_KEY, YOUTUBE_URL } from '../constants/api';
import Button from './Button';
import axios from 'axios';
const MovieDetail = ({ movie }) => {
  const { title, release_date, poster_path, backdrop_path, id } = movie;
  const { headerContentStyle,
          thumbnailStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle } = styles;
  return (
    <Card>
      <CardSection>
      	<View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: `${TMDB_IMG_URL}${poster_path}`}}
          />
      	</View>
      	<View style={headerContentStyle}>
        	<Text style={headerTextStyle}>{title}</Text>
        	<Text>{release_date}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image
            style={imageStyle}
            source={{uri: `${TMDB_IMG_URL}${backdrop_path}`}}
          />
      </CardSection>

      <CardSection>
        <Button onPress={() => requestTrailerVideo(id)}/>
      </CardSection>
    </Card>
  );
  function requestTrailerVideo(id)
  {
    `${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=1`
    axios.get(`${TMDB_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos`)
			.then(function(response){
				console.log(response.data.videos.results[0].id);
        Linking.openURL(`${YOUTUBE_URL}${response.data.videos.results[0].key}`)
  });
  }
};
export default MovieDetail;


const styles = {
	headerContentStyle: {
    marginLeft: 10,
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}
