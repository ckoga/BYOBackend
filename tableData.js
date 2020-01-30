let mangaData = [
  {
    "name": "Solo Leveling",
    "author": "JANG Sung-Lak",
    "serialization_year": 2018,
    "genres": ["Action", "Adventure", "Fantasy", "Shounen"],
    "chapters": 104,
    "status": "Ongoing",
    "publisher": "Kakao",
    "location": "Korea"
  },
  {
    "name": "One Piece",
    "author": "ODA Eiichiro",
    "serialization_year": 1997,
    "genres": ["Action", "Adventure", "Fantasy", "Shounen", "Comedy"],
    "chapters": 969,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Komi-san wa Komyushou Desu",
    "author": "ODA Tomohito",
    "serialization_year": 2015,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 237,
    "status": "Ongoing",
    "publisher": "Shogakukan",
    "locatio": "Japan"
  },
  {
    "name": "Koe no Katachi",
    "author": "OOIMA Yoshitoki",
    "serialization_year": 2013,
    "genres": ["Comedy", "Drama", "Psychological", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 62,
    "status": "Completed",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Shingeki no Kyojin",
    "author": "ISAYAMA Hajime",
    "serializtion_year": 2009,
    "genres": ["Action", "Drama", "Fantasy", "Horror", "Mature", "Mystery", "Shounen", "Supernatural", "Tragedy"],
    "chapters": 125,
    "status": "Ongoing",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Bakuman",
    "author": "OHBA Tsugumi",
    "serializtion_year": 2008,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 171,
    "status": "Completed",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Beck",
    "author": "HAROLD Sakuishi",
    "serializtion_year": 1999,
    "genres": ["Comedy", "Drama", "Ecchi", "Romance", "Shounen", "Slice of Life"],
    "chapters": 102,
    "status": "Completed",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Kimetsu no Yaiba",
    "author": "GOTOUGE Koyoharu",
    "serializtion_year": 2016,
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Historical", "Martial Arts", "Shounen", "Supernatural", "Tragedy"],
    "chapters": 191,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Exterminator",
    "author": "Hanabokuro",
    "serializtion_year": 2017,
    "genres": ["Action", "Adventure", "Comedy", "Ecchi", "Fantasy", "Harem", "Romance", "Shounen"],
    "chapters": 18,
    "status": "Ongoing",
    "publisher": "Kadokawa",
    "loaction": "Japan"
  },
  {
    "name": "Shokugeki no Soma",
    "author": "TSUKUDA Yuuto",
    "serializtion_year": 2012,
    "genres": ["Comedy", "Drama", "Ecchi", "School Life", "Shounen"],
    "chapters": 315,
    "status": "Completed",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Goblin Slayer",
    "author": "KAGYU Kumo",
    "serializtion_year": 2016,
    "genres": ["Action", "Adult", "Adventure", "Drama", "Fantasy", "Harem", "Horror", "Mature", "Seinen"],
    "chapters": 45,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "loaction": "Japan"
  },
  {
    "name": "Fuuka",
    "author": "SEO Kouji",
    "serializtion_year": 2014,
    "genres": ["Comedy", "Drama", "Ecchi", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 115,
    "status": "Completed",
    "publisher": "Kodansha",
    "loaction": "Japan"
  }, 
  {
    "name": "Hajime no Ippo",
    "author": "MORIKAWA Jyoji",
    "serializtion_year": 1989,
    "genres": ["Action", "Comedy", "Drama", "Shounen", "Slice of Life", "Sports"],
    "chapters": 1287,
    "status": "Ongoing",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Horimiya",
    "author": "HERO",
    "serializtion_year": 2011,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 110,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "loaction": "Japan"
  },
  {
    "name": "Shijou Saikyou no Deshi Kenichi",
    "author": "MATSUENA Syun",
    "serializtion_year": 2002,
    "genres": ["Action", "Comedy", "Drama", "Ecchi", "Harem", "Martial Arts", "Romance", "School Life", "Shounen"],
    "chapters": 583,
    "status": "Completed",
    "publisher": "Shogakukan",
    "loaction": "Japan"
  },
  {
    "name": "Dungeon no Deai o Motomeru no wa Machigatte iru Darou Ka",
    "author": "OOMORI Fujino",
    "serializtion_year": 2013,
    "genres": ["Action", "Adventure", "Comedy", "Ecchi", "Fantasy", "Harem", "Romance", "Seinen"],
    "chapters": 90,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "loaction": "Japan"
  },
  {
    "name": "Kimi ni Todoke",
    "author": "SHINA Karuho",
    "serializtion_year": 2005,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Shoujo", "Slice of Life"],
    "chapters": 112,
    "status": "Completed",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Breaker",
    "author": "JEON Geuk-Jin",
    "serializtion_year": 2007,
    "genres": ["Actio", "Comedy", "Drama", "Martial Arts", "Romance", "School Life", "Shounen"],
    "chapters": 72,
    "status": "Completed",
    "publisher": "Daiwon",
    "loaction": "Korea"
  },
  {
    "name": "Kobayashi-san Chi no Maid Dragon",
    "author": "COOL Kyoushinsha",
    "serializtion_year": 2013,
    "genres": ["Comedy", "Ecchi", "Fantasy", "Seinen", "Shoujo Ai", "Slice of Life"],
    "chapters": 0=90,
    "status": "Ongoing",
    "publisher": "Futabasha",
    "loaction": "Japan"
  },
  {
    "name": "One Punch-Man",
    "author": "ONE",
    "serializtion_year": 2012,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Sci-fi", "Seinen", "Supernatural"],
    "chapters": 126,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Pastel",
    "author": "KOBAYASHI Toshihiko",
    "serializtion_year": 2002,
    "genres": ["Comedy", "Ecchi", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 153,
    "status": "Complete",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume o Minai",
    "author": "KAMOSHIDA Hajime",
    "serializtion_year": 2015,
    "genres": ["Comedy", "Drama", "Mystery", "Psychological", "Romance", "School Life", "Seinen", "Slice of Life"],
    "chapters": 21,
    "status": "Completed",
    "publisher": "ASCII Media Works",
    "loaction": "Japan"
  },
  {
    "name": "Tondemo Skill de Isekai Hourou Meshi",
    "author": "EGUCHI Ren",
    "serializtion_year": 2016,
    "genres": ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    "chapters": 27,
    "status": "Ongoing",
    "publisher": "Overlap",
    "loaction": "Japan"
  },
  {
    "name": "ReLIFE",
    "author": "YAYOI Sou",
    "serializtion_year": 2013,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Slice of Life"],
    "chapters": 108,
    "status": "Completed",
    "publisher": "NHN Entertainment",
    "loaction": "Japan"
  },
  {
    "name": "Sewayaki Kitsune no Senko-san",
    "author": "Rimukoro",
    "serializtion_year": 2017,
    "genres": ["Comedy", "Romance", "Slice of Life", "Supernatural"],
    "chapters": 60,
    "status": "Ongoing",
    "publisher": "Kadokawa",
    "loaction": "Japan"
  },
  {
    "name": "Soul Eater",
    "author": "OHKUBO Atsushi",
    "serializtion_year": 2003,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Horro", "School Life", "Shounen", "Supernatural"],
    "chapters": 113,
    "status": "Completed",
    "publisher": "Square Enix",
    "loaction": "Japan"
  },
  {
    "name": "Karakai Jouzu no Takagi-san",
    "author": "YAMAMOTO Souichirou",
    "serializtion_year": 2012,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 119,
    "status": "Ongoing",
    "publisher": "Shogakukan",
    "loaction": "Japan"
  },
  {
    "name": "GTO",
    "author": "FUJISAWA Tohru",
    "serializtion_year": 1997,
    "genres": ["Comedy", "Drama", "Ecchi", "School Life", "Shounen"],
    "chapters": 200,
    "status": "Completed",
    "publisher": "Kodansha",
    "loaction": "Japan"
  },
  {
    "name": "Bleach",
    "author": "KUBO Tite",
    "serializtion_year": 2000,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Shounen", "Supernatural"],
    "chapters": 705,
    "status": "Completed",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "Naruto",
    "author": "KISHIMOTO Masashi",
    "serializtion_year": 1999,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 700,
    "status": "Completed",
    "publisher": "Shueisha",
    "loaction": "Japan"
  },
  {
    "name": "MG Hammer",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 2024,
    "genres": ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    "chapters": 2,
    "status": "Ongoing",
    "publisher": "Lazy Publications",
    "loaction": "USA"
  },
  {
    "name": "Cyborg Beat-Box",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 2402,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 10,
    "status": "Completed",
    "publisher": "Digital Publisher",
    "loaction": "Japan"
  },
  {
    "name": "Something Interesting",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 1989,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 100,
    "status": "Ongoing",
    "publisher": "Lame Enterprise",
    "loaction": "USA"
  },
  {
    "name": "Life of a Basement Dweller",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 1999,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 400,
    "status": "Completed",
    "publisher": "Sad House",
    "loaction": "USA"
  },
  {
    "name": "How to Fall Behind",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 2020,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 1,
    "status": "Completed",
    "publisher": "Funky Press",
    "loaction": "Japan"
  },
  {
    "name": "Crazy Code",
    "author": "KOGA Kiyoshi",
    "serializtion_year": 2002,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 72,
    "status": "Completed",
    "publisher": "A Publishing Company",
    "loaction": "USA"
  },
  {
    "name": "Super Normal",
    "author": "Some Dude",
    "serializtion_year": 2000,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 704,
    "status": "Completed",
    "publisher": "Tired Publications",
    "loaction": "USA"
  },
  {
    "name": "Happy Story",
    "author": "John Doe",
    "serializtion_year": 2020,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 1000,
    "status": "Completed",
    "publisher": "Happy Publications",
    "loaction": "Japan"
  },
  {
    "name": "Rawwwwwr",
    "author": "Dinosaur",
    "serializtion_year": 1002,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 7,
    "status": "Completed",
    "publisher": "Ancient Text",
    "loaction": "USA"
  },
]

module.exports = mangaData;