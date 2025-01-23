export interface Game {
  id: number;
  name: string;
  genre: string;
  released: string;
  rating: number;
  image: string;
}

export const fetchTopGames = async (): Promise<Game[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const defaultImage = '../assets/img/default.png';

  const mockGames: Game[] = [
    {
      id: 1,
      name: "The Legend of Zelda: Breath of the Wild",
      genre: "Action RPG",
      released: "2017-03-03",
      rating: 4.8,
      image: defaultImage
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      genre: "Action Adventure",
      released: "2018-10-26",
      rating: 4.9,
      image: defaultImage
    },
    {
      id: 3,
      name: "Elden Ring",
      genre: "Action RPG",
      released: "2022-02-25",
      rating: 4.7,
      image: defaultImage
    },
    {
      id: 4,
      name: "God of War Ragnarök",
      genre: "Action Adventure",
      released: "2022-11-09",
      rating: 4.9,
      image: defaultImage
    },
    {
      id: 5,
      name: "Cyberpunk 2077",
      genre: "Action RPG",
      released: "2020-12-10",
      rating: 4.3,
      image: defaultImage
    },
    {
      id: 6,
      name: "The Last of Us Part II",
      genre: "Action Adventure",
      released: "2020-06-19",
      rating: 4.7,
      image: defaultImage
    },
    {
      id: 7,
      name: "Horizon Forbidden West",
      genre: "Action RPG",
      released: "2022-02-18",
      rating: 4.6,
      image: defaultImage
    },
    {
      id: 8,
      name: "Final Fantasy XVI",
      genre: "Action RPG",
      released: "2023-06-22",
      rating: 4.5,
      image: defaultImage
    }
  ];

  return mockGames;

}
