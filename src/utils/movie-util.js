const getMovieUrl = ({id}) => `/films/${id}`;

const formatDuration = (duration) => duration.format(`HH:mm:ss`);


export {
  getMovieUrl,
  formatDuration,
};
