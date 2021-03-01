import {connect} from 'react-redux';

import MoviesList from './movies-list';

const mapStateToProps = (state) => ({
  movies: state.genreMovies,
});

export default connect(mapStateToProps)(MoviesList);
