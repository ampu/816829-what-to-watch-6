const getMovieUrl = ({id}) => `/films/${id}`;

const formatDuration = (duration) => duration.format(`HH:mm:ss`);

const findMovieById = (movies, movieId) => movies.find((it) => it.id === movieId);


export {
  getMovieUrl,
  formatDuration,
  findMovieById,
};
