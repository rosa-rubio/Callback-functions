//MÉTODO DE ARRAY - filter()

const tvShows = [
    {
    title: 'The Last of Us',
    score: 9.5
    },
    {
    title: 'Game of Thrones',
    score: 8.0
    },
    {   
    title: 'The Mandalorian',
    score: 8.75
    },
    {
    title: 'Succession',
    score: 8.0
    },
    {
    title: 'BoJack Horseman',
    score: 9.0
    },
    {
    title: 'Sex and the City',
    score: 3.5
    },
    {
    title: 'Squid Game',
    score: 8.5
    },
    {
    title: 'Euphoria',
    score: 9.0
    }
  ]
  
  
  const greatTvShows = tvShows.filter(highestScores);

  function highestScores(tvShow) {
    return tvShow.score >= 8.5;
  }

  console.log(greatTvShows);

  //código refactorizado
  //const greatTvShows = tvShows.filter(tvShow => tvShow.score >= 9);
