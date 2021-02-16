import {nanoid} from 'nanoid';
import dayjs from 'dayjs';


const MILLISECONDS_IN_SECOND = 1000;


const generateMovies = () => {
  return [
    {
      id: nanoid(),
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    },
    {
      id: nanoid(),
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
    },
    {
      id: nanoid(),
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
    },
    {
      id: nanoid(),
      title: `Aviator`,
      poster: `img/aviator.jpg`,
    },
    {
      id: nanoid(),
      title: `"We need to talk about Kevin`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
    },
    {
      id: nanoid(),
      title: `What We Do in the Shadows`,
      poster: `img/what-we-do-in-the-shadows.jpg`,
    },
    {
      id: nanoid(),
      title: `Revenant`,
      poster: `img/revenant.jpg`,
    },
    {
      id: nanoid(),
      title: `Johnny English`,
      poster: `img/johnny-english.jpg`,
    },
    {
      id: nanoid(),
      title: `Shutter Island`,
      poster: `img/shutter-island.jpg`,
    },
    {
      id: nanoid(),
      title: `Pulp Fiction`,
      poster: `img/pulp-fiction.jpg`,
    },
    {
      id: nanoid(),
      title: `No Country for Old Men`,
      poster: `img/no-country-for-old-men.jpg`,
    },
    {
      id: nanoid(),
      title: `Snatch`,
      poster: `img/snatch.jpg`,
    },
    {
      id: nanoid(),
      title: `Moonrise Kingdom`,
      poster: `img/moonrise-kingdom.jpg`,
    },
    {
      id: nanoid(),
      title: `Seven Years in Tibet`,
      poster: `img/seven-years-in-tibet.jpg`,
    },
    {
      id: nanoid(),
      title: `Midnight Special`,
      poster: `img/midnight-special.jpg`,
    },
    {
      id: nanoid(),
      title: `War of the Worlds`,
      poster: `img/war-of-the-worlds.jpg`,
    },

    {
      id: nanoid(),
      title: `Dardjeeling Limited`,
      poster: `img/dardjeeling-limited.jpg`,
    },
    {
      id: nanoid(),
      title: `Orlando`,
      poster: `img/orlando.jpg`,
    },
    {
      id: nanoid(),
      title: `Mindhunter`,
      poster: `img/mindhunter.jpg`,
    },
    {
      id: nanoid(),
      title: `Midnight Special`,
      poster: `img/midnight-special.jpg`,
    },
  ];
};

const generatePromoMovie = () => {
  return {
    id: nanoid(),
    title: `The Grand Budapest Hotel`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    genre: `Drama`,
    year: 2014,
    duration: dayjs.duration(4677 * MILLISECONDS_IN_SECOND),
  };
};


export {
  generateMovies,
  generatePromoMovie,
};
