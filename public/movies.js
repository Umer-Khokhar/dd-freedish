const movies = [
  {
    "name": "Minions & Monsters (2026) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sO3O1szSYuXLwtkobU5TExQ6Wfa.jpg",
    "category": "IN - Hindi Animation",
    "title": "Minions & Monsters",
    "year": 2026,
    "id": "1",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1070928.mkv"
  },
  {
    "name": "Beowulf (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7QsWYyJAV97N9jOh21pdRIqJeJq.jpg",
    "category": "IN - Hindi Animation",
    "title": "Beowulf",
    "year": 2007,
    "id": "2",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1070797.mkv"
  },
  {
    "name": "Hoppers (2026)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjtWQ2CL1mpmMNwuU5HeS4Iuwuu.jpg",
    "category": "IN - Hindi Animation",
    "title": "Hoppers",
    "year": 2026,
    "id": "3",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1060409.mkv"
  },
  {
    "name": "The Super Mario Galaxy Movie (2026)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eJGWx219ZcEMVQJhAgMiqo8tYY.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Super Mario Galaxy Movie",
    "year": 2026,
    "id": "4",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1056928.mkv"
  },
  {
    "name": "GOAT (2026)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wfuqMlaExcoYiUEvKfVpUTt1v4u.jpg",
    "category": "IN - Hindi Animation",
    "title": "GOAT",
    "year": 2026,
    "id": "5",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1056254.mkv"
  },
  {
    "name": "Zootopia (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    "category": "IN - Hindi Animation",
    "title": "Zootopia",
    "year": 2016,
    "id": "6",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1052961.mkv"
  },
  {
    "name": "Ekoua (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tVP9w4862AzkDtb8E9SFL6PVGbN.jpg",
    "category": "IN - Hindi Animation",
    "title": "Ekoua",
    "year": 2025,
    "id": "7",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1050162.mkv"
  },
  {
    "name": "Chainsaw Man - The Movie: Reze Arc (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pHyxb2RV5wLlboAwm9ZJ9qTVEDw.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chainsaw Man - The Movie: Reze Arc",
    "year": 2025,
    "id": "8",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1047602.mkv"
  },
  {
    "name": "Crayon Shin-chan the Movie: Our Dinosaur Diary (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n7YcOeqPOmvQ2PUatn4UqV5YStj.jpg",
    "category": "IN - Hindi Animation",
    "title": "Crayon Shin-chan the Movie: Our Dinosaur Diary",
    "year": 2024,
    "id": "9",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1047568.mp4"
  },
  {
    "name": "The Twits (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/izYZGeOHhPWiga8Hb5P4JYfcH8T.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Twits",
    "year": 2025,
    "id": "10",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1047564.mp4"
  },
  {
    "name": "Suzume (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yStW1TXF5s7Tbtu9KjIZEaWl6HL.jpg",
    "category": "IN - Hindi Animation",
    "title": "Suzume",
    "year": 2022,
    "id": "11",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1046433.mkv"
  },
  {
    "name": "Chainsaw Man - The Movie: Reze Arc (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xdzLBZjCVSEsic7m7nJc4jNJZVW.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chainsaw Man - The Movie: Reze Arc",
    "year": 2025,
    "id": "12",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1046334.mkv"
  },
  {
    "name": "Zootopia 2 (2025) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg",
    "category": "IN - Hindi Animation",
    "title": "Zootopia 2",
    "year": 2025,
    "id": "13",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1045503.mkv"
  },
  {
    "name": "Chainsaw Man - The Movie: Reze Arc (2025) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xdzLBZjCVSEsic7m7nJc4jNJZVW.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chainsaw Man - The Movie: Reze Arc",
    "year": 2025,
    "id": "14",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1042804.mkv"
  },
  {
    "name": "IN-EN: Jujutsu Kaisen 0 (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Jujutsu Kaisen 0",
    "year": 2021,
    "id": "15",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1042801.mkv"
  },
  {
    "name": "Pokémon the Movie: Kyurem vs. the Sword of Justice (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7gQEAR8aaCQRtJi7wq26ST5hukn.jpg",
    "category": "IN - Hindi Animation",
    "title": "Pokémon the Movie: Kyurem vs. the Sword of Justice",
    "year": 2012,
    "id": "16",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1041919.mkv"
  },
  {
    "name": "The Twits (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/izYZGeOHhPWiga8Hb5P4JYfcH8T.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Twits",
    "year": 2025,
    "id": "17",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1039907.mkv"
  },
  {
    "name": "The Wind Guardians (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/t3pYiazT21B35NZIdJSJPnATQHM.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Wind Guardians",
    "year": 2018,
    "id": "18",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1039906.mkv"
  },
  {
    "name": "Home on the Range (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xIIo4FMquy5SRqn8hppyr2QadR.jpg",
    "category": "IN - Hindi Animation",
    "title": "Home on the Range",
    "year": 2004,
    "id": "19",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1039575.mkv"
  },
  {
    "name": "Elio (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w2ARwtc1zoh0pyfwmyhpZHwuXgK.jpg",
    "category": "IN - Hindi Animation",
    "title": "Elio",
    "year": 2025,
    "id": "20",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1037417.mkv"
  },
  {
    "name": "Mahavatar Narsimha (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uGTF87VyfjtwwqRlT2apQg5YnEp.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mahavatar Narsimha",
    "year": 2025,
    "id": "21",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1037217.mkv"
  },
  {
    "name": "Demon Slayer: Kimetsu no Yaiba Infinity Castle (2025) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aFRDH3P7TX61FVGpaLhKr6QiOC1.jpg",
    "category": "IN - Hindi Animation",
    "title": "Demon Slayer: Kimetsu no Yaiba Infinity Castle",
    "year": 2025,
    "id": "22",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1036951.mkv"
  },
  {
    "name": "Ne Zha 2 (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cb5NyNrqiCNNoDkA8FfxHAtypdG.jpg",
    "category": "IN - Hindi Animation",
    "title": "Ne Zha 2",
    "year": 2025,
    "id": "23",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1025611.mkv"
  },
  {
    "name": "The Bad Guys 2 (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/26oSPnq0ct59l07QOXZKyzsiRtN.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Bad Guys 2",
    "year": 2025,
    "id": "24",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1025513.mkv"
  },
  {
    "name": "BLUE LOCK THE MOVIE -EPISODE NAGI- (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yZYZqT1f6rddhiSdjl8NVVCoZKE.jpg",
    "category": "IN - Hindi Animation",
    "title": "BLUE LOCK THE MOVIE -EPISODE NAGI-",
    "year": 2024,
    "id": "25",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1025345.mkv"
  },
  {
    "name": "Mononoke the Movie: Chapter II - The Ashes of Rage (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bT2qcTXVNUbeIMjbggB14Wyymgi.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mononoke the Movie: Chapter II - The Ashes of Rage",
    "year": 2025,
    "id": "26",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1010859.mkv"
  },
  {
    "name": "Mononoke the Movie: The Phantom in the Rain (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xE06xrZkIipJMPSgWoeelohxi9h.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mononoke the Movie: The Phantom in the Rain",
    "year": 2024,
    "id": "27",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1010858.mkv"
  },
  {
    "name": "My Hero Academia: You're Next (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tTrI6PwqzxkgO3dvQ7BEKXM7SYR.jpg",
    "category": "IN - Hindi Animation",
    "title": "My Hero Academia: You're Next",
    "year": 2024,
    "id": "28",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/1009487.mkv"
  },
  {
    "name": "Mahavatar Narsimha (2025) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wfGTnnP35bWCd8iOtmKa2Hy7MAQ.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mahavatar Narsimha",
    "year": 2025,
    "id": "29",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/994524.mkv"
  },
  {
    "name": "How to Train Your Dragon: The Hidden World (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    "category": "IN - Hindi Animation",
    "title": "How to Train Your Dragon: The Hidden World",
    "year": 2019,
    "id": "30",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/992382.mkv"
  },
  {
    "name": "How to Train Your Dragon (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    "category": "IN - Hindi Animation",
    "title": "How to Train Your Dragon",
    "year": 2010,
    "id": "31",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/992380.mkv"
  },
  {
    "name": "Motu Patlu & the Mighty Magnathor (2025)",
    "logo": "https://i.ytimg.com/vi/BXbjXf5A8Jg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCiNpmNhm-XBSd9KiY1WuGHE0UutA",
    "category": "IN - Hindi Animation",
    "title": "Motu Patlu & the Mighty Magnathor",
    "year": 2025,
    "id": "32",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/915971.mkv"
  },
  {
    "name": "IN-EN: Lost in Starlight (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXlUIfwejWa9YvugU9V773dUASY.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Lost in Starlight",
    "year": 2025,
    "id": "33",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/915133.mkv"
  },
  {
    "name": "IN-EN: Ben 10: Ben 10,010 (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6aDh4yH5FHaMfjdsqw4n97rl7FJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ben 10: Ben 10,010",
    "year": 2021,
    "id": "34",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/913871.mkv"
  },
  {
    "name": "IN-EN: Plankton: The Movie (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iqQw58Cbgh5r7XRYUZpJPDPQD0m.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Plankton: The Movie",
    "year": 2025,
    "id": "35",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/882145.mkv"
  },
  {
    "name": "IN-EN: Mufasa: The Lion King (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9bXHaLlsFYpJUutg4E6WXAjaxDi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mufasa: The Lion King",
    "year": 2024,
    "id": "36",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/877982.mkv"
  },
  {
    "name": "IN-EN: The Witcher: Sirens of the Deep (2025)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mfy5SyaNBleBACs5mIVudDP7UNY.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Witcher: Sirens of the Deep",
    "year": 2025,
    "id": "37",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/874468.mkv"
  },
  {
    "name": "IN-EN: Moana 2 (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Moana 2",
    "year": 2024,
    "id": "38",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/874022.mkv"
  },
  {
    "name": "IN-EN: Mufasa: The Lion King (2024) [HDTS]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mufasa: The Lion King",
    "year": 2024,
    "id": "39",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/871485.mkv"
  },
  {
    "name": "IN-EN: Despicable Me 3 (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6t3YWl7hrr88lCEFlGVqW5yV99R.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Despicable Me 3",
    "year": 2017,
    "id": "40",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/868194.mkv"
  },
  {
    "name": "IN-EN: The Canterville Ghost (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dFu8oHN805ZRzpQZNOjkiLzMbep.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Canterville Ghost",
    "year": 2023,
    "id": "41",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/867950.mkv"
  },
  {
    "name": "IN-EN: SPY x FAMILY CODE: White (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xlIQf4y9eB14iYzNN142tROIWON.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: SPY x FAMILY CODE: White",
    "year": 2023,
    "id": "42",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/856147.mkv"
  },
  {
    "name": "IN-EN: Look Back (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AgBNLcHFEXCRFZuKv0H8RWMxNAJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Look Back",
    "year": 2024,
    "id": "43",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/848984.mkv"
  },
  {
    "name": "IN-EN: Under the Boardwalk (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dYubl9T67KKgggQUawHs0xYMWEU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Under the Boardwalk",
    "year": 2023,
    "id": "44",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/848983.mkv"
  },
  {
    "name": "IN-EN: Transformers One (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iHPIBzrjJHbXeY9y7VVbEVNt7LW.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Transformers One",
    "year": 2024,
    "id": "45",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/848981.mkv"
  },
  {
    "name": "IN-EN: The Wild Robot (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Wild Robot",
    "year": 2024,
    "id": "46",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/848734.mkv"
  },
  {
    "name": "IN-EN: The Bad Guys: Haunted Heist (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oEJC05CqPugMxC4rFu9r6r6vg6m.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Bad Guys: Haunted Heist",
    "year": 2024,
    "id": "47",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/842357.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: The History of Trunks (1993)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5P7okfMZT5pboVdtTydv7yE0n7R.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: The History of Trunks",
    "year": 1993,
    "id": "48",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/836453.mkv"
  },
  {
    "name": "IN-EN: Frozen II (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Frozen II",
    "year": 2019,
    "id": "49",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/809824.mkv"
  },
  {
    "name": "IN-EN: Magic Arch (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hnDhw5nudk4RfiV1Fxn3QXV3HuJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Magic Arch",
    "year": 2020,
    "id": "50",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/807335.mkv"
  },
  {
    "name": "IN-EN: The Snow Queen and the Princess (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7dTQWba8uSVe7WQFdzRnKs9iCdA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Snow Queen and the Princess",
    "year": 2022,
    "id": "51",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/807334.mkv"
  },
  {
    "name": "Monkey King: Hero Is Back (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xHme10Y5jVdH8KeSGgStndjatF5.jpg",
    "category": "IN - Hindi Animation",
    "title": "Monkey King: Hero Is Back",
    "year": 2015,
    "id": "52",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/805215.mkv"
  },
  {
    "name": "Pixels (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rV5DzghQv6z6Yagak6ysKE77nuf.jpg",
    "category": "IN - Hindi Animation",
    "title": "Pixels",
    "year": 2015,
    "id": "53",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804583.mkv"
  },
  {
    "name": "Mosley (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jSCXNO87YYjQAyckLrFQhELzaL0.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mosley",
    "year": 2019,
    "id": "54",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804556.mp4"
  },
  {
    "name": "Home on the Range (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9xIIo4FMquy5SRqn8hppyr2QadR.jpg",
    "category": "IN - Hindi Animation",
    "title": "Home on the Range",
    "year": 2004,
    "id": "55",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804553.mkv"
  },
  {
    "name": "Mr. Bean's Holiday (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bSSx9Sq6irWwN9NTQmoT9KE8kXn.jpg",
    "category": "IN - Hindi Animation",
    "title": "Mr. Bean's Holiday",
    "year": 2007,
    "id": "56",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804549.mkv"
  },
  {
    "name": "Bean (1997)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/IwrDPrB4d2DMcpnGkvan46yINL.jpg",
    "category": "IN - Hindi Animation",
    "title": "Bean",
    "year": 1997,
    "id": "57",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804539.mkv"
  },
  {
    "name": "We Can Be Heroes (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1S21HpcKY6uQ9UAw68aICmrJaq6.jpg",
    "category": "IN - Hindi Animation",
    "title": "We Can Be Heroes",
    "year": 2020,
    "id": "58",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804536.mkv"
  },
  {
    "name": "Nanny McPhee and the Big Bang (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9cgHfgBXVZmVR63AhwJ82R1kAFS.jpg",
    "category": "IN - Hindi Animation",
    "title": "Nanny McPhee and the Big Bang",
    "year": 2010,
    "id": "59",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804472.mkv"
  },
  {
    "name": "IN-EN: Pokémon Detective Pikachu (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Pokémon Detective Pikachu",
    "year": 2019,
    "id": "60",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804459.mkv"
  },
  {
    "name": "IN-EN: Cinderella (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ryKwNlAfDXu0do6SX9h4G9Si1kG.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cinderella",
    "year": 2015,
    "id": "61",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804395.mkv"
  },
  {
    "name": "IN-EN: G-Force (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4CTxlU4JGSqq0yxi5ZVtAu5zsHE.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: G-Force",
    "year": 2009,
    "id": "62",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804334.mkv"
  },
  {
    "name": "IN-EN: Jimmy Neutron: Boy Genius (2001)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zdOVbZk53CiCtgcC4UOSSEFvf5U.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Jimmy Neutron: Boy Genius",
    "year": 2001,
    "id": "63",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804308.mkv"
  },
  {
    "name": "IN-EN: Rio 2 (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tpCqpv8y0cDb7mgIPeTv70W9vmF.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rio 2",
    "year": 2014,
    "id": "64",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804300.mkv"
  },
  {
    "name": "IN-EN: Peter Rabbit 2: The Runaway (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cycDz68DtTjJrDJ1fV8EBq2Xdpb.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Peter Rabbit 2: The Runaway",
    "year": 2021,
    "id": "65",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804295.mkv"
  },
  {
    "name": "IN-EN: Charlie and the Chocolate Factory (2005)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wfGfxtBkhBzQfOZw4S8IQZgrH0a.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Charlie and the Chocolate Factory",
    "year": 2005,
    "id": "66",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804294.mkv"
  },
  {
    "name": "IN-EN: The Smurfs 2 (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4zu8hbjp7bedcbetQssylLhpguk.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Smurfs 2",
    "year": 2013,
    "id": "67",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804263.mkv"
  },
  {
    "name": "IN-EN: Moana (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4JeejGugONWpJkbnvL12hVoYEDa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Moana",
    "year": 2016,
    "id": "68",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804254.mkv"
  },
  {
    "name": "IN-EN: How to Train Your Dragon 2 (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: How to Train Your Dragon 2",
    "year": 2014,
    "id": "69",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804221.mkv"
  },
  {
    "name": "IN-EN: The Jungle Bunch (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rZ0T0yRe8iDqAgeZXRNvpAJh5z1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Jungle Bunch",
    "year": 2017,
    "id": "70",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804204.mkv"
  },
  {
    "name": "IN-EN: Hotel Transylvania 3: Summer Vacation (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/o7RY5zNHdH2heGS1hET2Rt6hZOe.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hotel Transylvania 3: Summer Vacation",
    "year": 2018,
    "id": "71",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/804197.mkv"
  },
  {
    "name": "Boruto: Naruto the Movie (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1k6iwC4KaPvTBt1JuaqXy3noZRY.jpg",
    "category": "IN - Hindi Animation",
    "title": "Boruto: Naruto the Movie",
    "year": 2015,
    "id": "72",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796404.mkv"
  },
  {
    "name": "Strange World (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fHMqfsYyl3lskPK2RiFRwhzwuep.jpg",
    "category": "IN - Hindi Animation",
    "title": "Strange World",
    "year": 2022,
    "id": "73",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796403.mkv"
  },
  {
    "name": "Pokémon the Movie: Kyurem vs. the Sword of Justice (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ii6iOh6nTcndEuabU1oUsSFnr2l.jpg",
    "category": "IN - Hindi Animation",
    "title": "Pokémon the Movie: Kyurem vs. the Sword of Justice",
    "year": 2012,
    "id": "74",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796402.mkv"
  },
  {
    "name": "Chickenhare and the Hamster of Darkness (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2v6f1EqTo4FUxVT9MDXpF6158AX.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chickenhare and the Hamster of Darkness",
    "year": 2022,
    "id": "75",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796400.mkv"
  },
  {
    "name": "Planes: Fire & Rescue (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pOmteFeBDI9FJOPTDvYJYFeAtdp.jpg",
    "category": "IN - Hindi Animation",
    "title": "Planes: Fire & Rescue",
    "year": 2014,
    "id": "76",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796398.mkv"
  },
  {
    "name": "Planes (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i2xgU0y0p77WTrB0oIkbpdaWq8R.jpg",
    "category": "IN - Hindi Animation",
    "title": "Planes",
    "year": 2013,
    "id": "77",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796397.mkv"
  },
  {
    "name": "Happy Feet Two (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2gWiQ4mn85jcXtREVePlVViupeV.jpg",
    "category": "IN - Hindi Animation",
    "title": "Happy Feet Two",
    "year": 2011,
    "id": "78",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796395.mkv"
  },
  {
    "name": "Princess Mononoke (1997)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    "category": "IN - Hindi Animation",
    "title": "Princess Mononoke",
    "year": 1997,
    "id": "79",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796394.mkv"
  },
  {
    "name": "Shark Tale (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/r08DpyPyhXcJTfNZAICNGMzcQ8l.jpg",
    "category": "IN - Hindi Animation",
    "title": "Shark Tale",
    "year": 2004,
    "id": "80",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796393.mkv"
  },
  {
    "name": "Maya the Bee: The Honey Games (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/my34w43Z0l2XGvpHiAOYkTm6M8P.jpg",
    "category": "IN - Hindi Animation",
    "title": "Maya the Bee: The Honey Games",
    "year": 2018,
    "id": "81",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796392.mkv"
  },
  {
    "name": "Maya the Bee: The Golden Orb (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tMS2qcbhbkFpcwLnbUE9o9IK4HH.jpg",
    "category": "IN - Hindi Animation",
    "title": "Maya the Bee: The Golden Orb",
    "year": 2021,
    "id": "82",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796391.mkv"
  },
  {
    "name": "The Land Before Time XII: The Great Day of the Flyers (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WKZksck9oLWBQnSZYdmrhaY3At.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Land Before Time XII: The Great Day of the Flyers",
    "year": 2006,
    "id": "83",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796390.mkv"
  },
  {
    "name": "The Land Before Time XIII: The Wisdom of Friends (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/weRDZgqsJbxrM90wq5entBV4ah2.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Land Before Time XIII: The Wisdom of Friends",
    "year": 2007,
    "id": "84",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796389.mkv"
  },
  {
    "name": "The Snow Queen 2: Refreeze (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fU6kiB3p4efwC48hDdy77eC5qJK.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Snow Queen 2: Refreeze",
    "year": 2014,
    "id": "85",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796388.mkv"
  },
  {
    "name": "The SpongeBob Movie: Sponge on the Run (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
    "category": "IN - Hindi Animation",
    "title": "The SpongeBob Movie: Sponge on the Run",
    "year": 2020,
    "id": "86",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796387.mkv"
  },
  {
    "name": "The Rescuers (1977)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49rGpB2x6AFB83SC4IBl9foRIGp.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Rescuers",
    "year": 1977,
    "id": "87",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796386.mkv"
  },
  {
    "name": "Epic (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/81cSsWzjTfR3cJSqnTiHwy1eyPK.jpg",
    "category": "IN - Hindi Animation",
    "title": "Epic",
    "year": 2013,
    "id": "88",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796384.mkv"
  },
  {
    "name": "Scooby-Doo! and Krypto, Too! (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8F0vndHgyVRPYawXm91pSLPWSKz.jpg",
    "category": "IN - Hindi Animation",
    "title": "Scooby-Doo! and Krypto, Too!",
    "year": 2023,
    "id": "89",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796383.mkv"
  },
  {
    "name": "Under the Boardwalk (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dYubl9T67KKgggQUawHs0xYMWEU.jpg",
    "category": "IN - Hindi Animation",
    "title": "Under the Boardwalk",
    "year": 2023,
    "id": "90",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796382.mkv"
  },
  {
    "name": "Iron Man: Rise of Technovore (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eHDez1uN5X2ZAq4niX7HvhyZIIO.jpg",
    "category": "IN - Hindi Animation",
    "title": "Iron Man: Rise of Technovore",
    "year": 2013,
    "id": "91",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796378.mkv"
  },
  {
    "name": "The Casagrandes Movie (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1ZHetsKD44xB63ZjTjqryC0CtoL.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Casagrandes Movie",
    "year": 2024,
    "id": "92",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796377.mkv"
  },
  {
    "name": "The Garden of Words (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mXUCVq3HMtS4Y9IQ8vmEOPyN0vH.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Garden of Words",
    "year": 2013,
    "id": "93",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796375.mkv"
  },
  {
    "name": "Motu Patlu: Kung Fu Kings (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bWUyHbjGhgxstnZ2dxZrR721TVe.jpg",
    "category": "IN - Hindi Animation",
    "title": "Motu Patlu: Kung Fu Kings",
    "year": 2014,
    "id": "94",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796374.mkv"
  },
  {
    "name": "Inside Out 2 (2024) [Cam]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "category": "IN - Hindi Animation",
    "title": "Inside Out 2",
    "year": 2024,
    "id": "95",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796373.mkv"
  },
  {
    "name": "The Boy and the Heron (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jDQPkgzerGophKRRn7MKm071vCU.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Boy and the Heron",
    "year": 2023,
    "id": "96",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796372.mkv"
  },
  {
    "name": "Monsters University (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    "category": "IN - Hindi Animation",
    "title": "Monsters University",
    "year": 2013,
    "id": "97",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796371.mkv"
  },
  {
    "name": "The Magical Brush (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9Jly66P2Vu8l3pH05Fv5jWwB1A9.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Magical Brush",
    "year": 2014,
    "id": "98",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796370.mkv"
  },
  {
    "name": "The Jungle Bunch 2: World Tour (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uxkvv9KAhJFeIRDtg7OKtYsHziC.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Jungle Bunch 2: World Tour",
    "year": 2023,
    "id": "99",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/796204.mkv"
  },
  {
    "name": "IN-EN: Boonie Bears: Guardian Code (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lIR8h3Os8peWOave8CGE7xsTFoi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Boonie Bears: Guardian Code",
    "year": 2023,
    "id": "100",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/795816.mkv"
  },
  {
    "name": "IN-EN: Ultraman: Rising (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/j886YEkIUsiImY53px5VHKD4lRa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ultraman: Rising",
    "year": 2024,
    "id": "101",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/795159.mkv"
  },
  {
    "name": "IN-EN: Mortal Kombat Legends: Scorpion's Revenge (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mortal Kombat Legends: Scorpion's Revenge",
    "year": 2020,
    "id": "102",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794377.mkv"
  },
  {
    "name": "Hair Love (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pm9uRa7031Z56unxNE8AqE8f2wg.jpg",
    "category": "IN - Hindi Animation",
    "title": "Hair Love",
    "year": 2019,
    "id": "103",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794007.mkv"
  },
  {
    "name": "Homeward (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eBfo1wKsE6qIbhKMFg2gJbG2QAt.jpg",
    "category": "IN - Hindi Animation",
    "title": "Homeward",
    "year": 2020,
    "id": "104",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794006.mp4"
  },
  {
    "name": "Here We Are: Notes for Living on Planet Earth (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tZWgclntziFRPQg0u0nI2FU4nYg.jpg",
    "category": "IN - Hindi Animation",
    "title": "Here We Are: Notes for Living on Planet Earth",
    "year": 2020,
    "id": "105",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794005.mp4"
  },
  {
    "name": "Inside Out (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
    "category": "IN - Hindi Animation",
    "title": "Inside Out",
    "year": 2015,
    "id": "106",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794004.mp4"
  },
  {
    "name": "Jungle Beat: The Movie (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cgC67SOxd9xkjN4Bnvjtuj1vI8T.jpg",
    "category": "IN - Hindi Animation",
    "title": "Jungle Beat: The Movie",
    "year": 2020,
    "id": "107",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794003.mp4"
  },
  {
    "name": "Justice League vs. the Fatal Five (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yELYEIvVsWy1QH7hCBnzqtbGqxk.jpg",
    "category": "IN - Hindi Animation",
    "title": "Justice League vs. the Fatal Five",
    "year": 2019,
    "id": "108",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794002.mkv"
  },
  {
    "name": "LEGO DC: Shazam! Magic and Monsters (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ziIyuNNNwYqv0qbOpV9VvvdnRBb.jpg",
    "category": "IN - Hindi Animation",
    "title": "LEGO DC: Shazam! Magic and Monsters",
    "year": 2020,
    "id": "109",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/794001.mkv"
  },
  {
    "name": "Kitbull (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mwKO3cZbxipgd9QAPboJVTDLPiN.jpg",
    "category": "IN - Hindi Animation",
    "title": "Kitbull",
    "year": 2019,
    "id": "110",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793998.mp4"
  },
  {
    "name": "Missing Link (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEkKHiiQRVUSX15Iwo8VFydXrtu.jpg",
    "category": "IN - Hindi Animation",
    "title": "Missing Link",
    "year": 2019,
    "id": "111",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793996.mp4"
  },
  {
    "name": "Marvel Rising: Heart of Iron (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/z3lD286jY8iYasC5hJZ2kgZF9uY.jpg",
    "category": "IN - Hindi Animation",
    "title": "Marvel Rising: Heart of Iron",
    "year": 2019,
    "id": "112",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793995.mp4"
  },
  {
    "name": "Ne Zha (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vhnxaQel1CwfcwLtCkTNpSdjte1.jpg",
    "category": "IN - Hindi Animation",
    "title": "Ne Zha",
    "year": 2019,
    "id": "113",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793994.mp4"
  },
  {
    "name": "Norm of the North: Family Vacation (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ohWU8bPbAK5WEAboIabivld9Hyw.jpg",
    "category": "IN - Hindi Animation",
    "title": "Norm of the North: Family Vacation",
    "year": 2021,
    "id": "114",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793991.mkv"
  },
  {
    "name": "Chicken Little (2005)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1wg65q3daTE8rGfaUhBxLdXk6NL.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chicken Little",
    "year": 2005,
    "id": "115",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793990.mkv"
  },
  {
    "name": "Evangelion: 2.0 You Can (Not) Advance (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7VLYN2CfJpB6PrcuzDKKqdGSUi6.jpg",
    "category": "IN - Hindi Animation",
    "title": "Evangelion: 2.0 You Can (Not) Advance",
    "year": 2009,
    "id": "116",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793988.mkv"
  },
  {
    "name": "Evangelion: 1.0 You Are (Not) Alone (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pETU4GurpeEjBOM8oytMH0yNBHx.jpg",
    "category": "IN - Hindi Animation",
    "title": "Evangelion: 1.0 You Are (Not) Alone",
    "year": 2007,
    "id": "117",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793987.mkv"
  },
  {
    "name": "Spider-Man: Across the Spider-Verse (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "category": "IN - Hindi Animation",
    "title": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "id": "118",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793983.mp4"
  },
  {
    "name": "Phineas and Ferb the Movie: Candace Against the Universe (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n6hptKS7Y0ZjkYwbqKOK3jz9XAC.jpg",
    "category": "IN - Hindi Animation",
    "title": "Phineas and Ferb the Movie: Candace Against the Universe",
    "year": 2020,
    "id": "119",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793981.mkv"
  },
  {
    "name": "Stand by Me Doraemon (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wc7XQbfx6EIQqCuvmBMt3aisb2Y.jpg",
    "category": "IN - Hindi Animation",
    "title": "Stand by Me Doraemon",
    "year": 2014,
    "id": "120",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793980.mkv"
  },
  {
    "name": "Stand by Me Doraemon 2 (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vBv8iOFPLnXmtELUjcFc7OKHsR4.jpg",
    "category": "IN - Hindi Animation",
    "title": "Stand by Me Doraemon 2",
    "year": 2020,
    "id": "121",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793979.mkv"
  },
  {
    "name": "The Swan Princess: A Fairytale Is Born (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2axXVpi3dKfESWzgncbakLB7o7f.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Swan Princess: A Fairytale Is Born",
    "year": 2023,
    "id": "122",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793978.mkv"
  },
  {
    "name": "Motu Patlu In The Metal World (2023)(Hindi)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/p9zyKWCGR5FzBiev9pU7fVQyC0T.jpg",
    "category": "IN - Hindi Animation",
    "title": "Motu Patlu In The Metal World (2023)(Hindi)",
    "year": null,
    "id": "123",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793977.mp4"
  },
  {
    "name": "Elemental (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    "category": "IN - Hindi Animation",
    "title": "Elemental",
    "year": 2023,
    "id": "124",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793976.mp4"
  },
  {
    "name": "The Swan Princess: Far Longer Than Forever (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dWyxPokAp4eiJXWriYbNvU2v1V.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Swan Princess: Far Longer Than Forever",
    "year": 2023,
    "id": "125",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793975.mp4"
  },
  {
    "name": "Batman: Hush (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg",
    "category": "IN - Hindi Animation",
    "title": "Batman: Hush",
    "year": 2019,
    "id": "126",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793974.mp4"
  },
  {
    "name": "Barbie and Stacie to the Rescue (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3ktT0NphGK2uYRkhBLtNssIgOXl.jpg",
    "category": "IN - Hindi Animation",
    "title": "Barbie and Stacie to the Rescue",
    "year": 2024,
    "id": "127",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793973.mp4"
  },
  {
    "name": "Doraemon: Nobita and the Animal Planet (1990)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mB1nulptGzyJJFKOfkDXenCUHP5.jpg",
    "category": "IN - Hindi Animation",
    "title": "Doraemon: Nobita and the Animal Planet",
    "year": 1990,
    "id": "128",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793971.mp4"
  },
  {
    "name": "Stand by Me Doraemon (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wc7XQbfx6EIQqCuvmBMt3aisb2Y.jpg",
    "category": "IN - Hindi Animation",
    "title": "Stand by Me Doraemon",
    "year": 2014,
    "id": "129",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793970.mp4"
  },
  {
    "name": "Sing 2 (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    "category": "IN - Hindi Animation",
    "title": "Sing 2",
    "year": 2021,
    "id": "130",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793967.mkv"
  },
  {
    "name": "The Bad Guys: A Very Bad Holiday (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/atBDD05PbVDI2lm2OUy1KFQpzen.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Bad Guys: A Very Bad Holiday",
    "year": 2023,
    "id": "131",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793966.mp4"
  },
  {
    "name": "Merry Little Batman (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2J70guF8wcErbYbRgZUBcvShgI1.jpg",
    "category": "IN - Hindi Animation",
    "title": "Merry Little Batman",
    "year": 2023,
    "id": "132",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793965.mp4"
  },
  {
    "name": "The Super Mario Bros. Movie (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "id": "133",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793964.mp4"
  },
  {
    "name": "Migration (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    "category": "IN - Hindi Animation",
    "title": "Migration",
    "year": 2023,
    "id": "134",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793963.mp4"
  },
  {
    "name": "Cloudy with a Chance of Meatballs 2 (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ss5NcK2NWFg2YcKKYXLrk8q1myS.jpg",
    "category": "IN - Hindi Animation",
    "title": "Cloudy with a Chance of Meatballs 2",
    "year": 2013,
    "id": "135",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793962.mp4"
  },
  {
    "name": "Lupin III: The First (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dnTuIOzW5TOgTIfFz9oGUgC1vO2.jpg",
    "category": "IN - Hindi Animation",
    "title": "Lupin III: The First",
    "year": 2019,
    "id": "136",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793961.mp4"
  },
  {
    "name": "Trolls Band Together (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
    "category": "IN - Hindi Animation",
    "title": "Trolls Band Together",
    "year": 2023,
    "id": "137",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793960.mp4"
  },
  {
    "name": "Migration (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    "category": "IN - Hindi Animation",
    "title": "Migration",
    "year": 2023,
    "id": "138",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793959.mp4"
  },
  {
    "name": "Pokémon the Movie: The Power of Us (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eakBFzG1dZn0uouBgv6kYtPXLkT.jpg",
    "category": "IN - Hindi Animation",
    "title": "Pokémon the Movie: The Power of Us",
    "year": 2018,
    "id": "139",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793958.mp4"
  },
  {
    "name": "The Casagrandes Movie (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1ZHetsKD44xB63ZjTjqryC0CtoL.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Casagrandes Movie",
    "year": 2024,
    "id": "140",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/793957.mp4"
  },
  {
    "name": "IN-EN: My Oni Girl (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/k69kkwsipkPn7Nzq488kHGQTPo.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: My Oni Girl",
    "year": 2024,
    "id": "141",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/791319.mkv"
  },
  {
    "name": "IN-EN: Thelma the Unicorn (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yutiEZ7taGDNau2jGjKIdDwQpDw.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Thelma the Unicorn",
    "year": 2024,
    "id": "142",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/790659.mkv"
  },
  {
    "name": "IN-EN: Noah's Ark (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/j1Rjw6a62UwrbTNT0I3JzZnnCmr.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Noah's Ark",
    "year": 2024,
    "id": "143",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/789137.mkv"
  },
  {
    "name": "IN-EN: Kung Fu Panda 4 (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda 4",
    "year": 2024,
    "id": "144",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/788660.mkv"
  },
  {
    "name": "IN-EN: Ralph Breaks the Internet (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iVCrhBcpDaHGvv7CLYbK6PuXZo1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ralph Breaks the Internet",
    "year": 2018,
    "id": "145",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/788659.mkv"
  },
  {
    "name": "IN-EN: Barbie and Stacie to the Rescue (2024)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dS4Qsu22Hrf6bZUtfALSAawa0tU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Barbie and Stacie to the Rescue",
    "year": 2024,
    "id": "146",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/786920.mkv"
  },
  {
    "name": "IN-EN: Up Up & Up (2019)",
    "logo": "https://m.media-amazon.com/images/M/MV5BZDhlMzU4ZDctYTcxMy00NWYxLTk4ZTUtNDA0MDU0YjgzNDgxXkEyXkFqcGdeQXVyOTMxNTk1Mjc@._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Up Up & Up",
    "year": 2019,
    "id": "147",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/785032.mkv"
  },
  {
    "name": "Dragon Ball Z: Cooler’s Revenge (1991)",
    "logo": "https://www.themoviedb.org/t/p/w500/sN4HyDkBFGtNNg9fm2iETQNUMSt.jpg",
    "category": "IN - Hindi Animation",
    "title": "Dragon Ball Z: Cooler’s Revenge",
    "year": 1991,
    "id": "148",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/745715.mkv"
  },
  {
    "name": "Dragon Ball Z: Revival Fusion (1995)",
    "logo": "https://m.media-amazon.com/images/M/MV5BMjI5OTA3ZjUtYjgyNC00Y2Y5LWFlOTAtNzA3MjMwOWJjZjIyXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "Dragon Ball Z: Revival Fusion",
    "year": 1995,
    "id": "149",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/745714.mkv"
  },
  {
    "name": "Dragon Ball Z: Super Android 13 (1992)",
    "logo": "https://m.media-amazon.com/images/M/MV5BZmM0MjAxYWItZDlkMC00MDQ5LTljMDctMTk0Yzc0MzRjNzc5XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "Dragon Ball Z: Super Android 13",
    "year": 1992,
    "id": "150",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/745713.mkv"
  },
  {
    "name": "IT:  Batman Mask Of The Phantasm (1993)",
    "logo": "https://image.tmdb.org/t/p/original/sJern8gCFmW9WQXJY4Aq2iH4wjk.jpg",
    "category": "IN - Hindi Animation",
    "title": "IT: Batman Mask Of The Phantasm",
    "year": 1993,
    "id": "151",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/740930.mkv"
  },
  {
    "name": "The Lego Ninjago Movie (2017)",
    "logo": "https://image.tmdb.org/t/p/original/etPGtOrDCuRAw4NI34RCOK6bAoS.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Lego Ninjago Movie",
    "year": 2017,
    "id": "152",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/737383.mkv"
  },
  {
    "name": "Chhota Bheem Aur Registaan Ka Shehenshah (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/auBaBc0Xfm7yDn8FpVTzNjkCpoS.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chhota Bheem Aur Registaan Ka Shehenshah",
    "year": 2023,
    "id": "153",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/731321.mkv"
  },
  {
    "name": "IN-EN: Teenage Mutant Ninja Turtles: Mutant Mayhem (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Teenage Mutant Ninja Turtles: Mutant Mayhem",
    "year": 2023,
    "id": "154",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/729943.mkv"
  },
  {
    "name": "IN-EN: Elemental (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Elemental",
    "year": 2023,
    "id": "155",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/729404.mkv"
  },
  {
    "name": "IN-EN: Barbie as Rapunzel (2002)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ysiGzuMSc0nFmmDPn9z7U7YSFYf.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Barbie as Rapunzel",
    "year": 2002,
    "id": "156",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/729402.mkv"
  },
  {
    "name": "Motu Patlu In The Metal World (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/p9zyKWCGR5FzBiev9pU7fVQyC0T.jpg",
    "category": "IN - Hindi Animation",
    "title": "Motu Patlu In The Metal World",
    "year": 2023,
    "id": "157",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/728772.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: Wrath of the Dragon (1995)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ybkLEVCvwQEzh7Lq1zsCmda5A4.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: Wrath of the Dragon",
    "year": 1995,
    "id": "158",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/724931.mkv"
  },
  {
    "name": "IN-EN:  Captain Underpants: The First Epic Movie (2017)",
    "logo": "https://image.tmdb.org/t/p/original/vKSmaPct5OEeMoD8ue30RisHlKD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Captain Underpants: The First Epic Movie",
    "year": 2017,
    "id": "159",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/724563.mkv"
  },
  {
    "name": "Grave of the Fireflies (1988)",
    "logo": "https://image.tmdb.org/t/p/original/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg",
    "category": "IN - Hindi Animation",
    "title": "Grave of the Fireflies",
    "year": 1988,
    "id": "160",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/724009.mkv"
  },
  {
    "name": "Fantastica: A Boonie Bears Adventure (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wgmfCGzVViXqW02Pt29ylUFOP8v.jpg",
    "category": "IN - Hindi Animation",
    "title": "Fantastica: A Boonie Bears Adventure",
    "year": 2017,
    "id": "161",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/723946.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: Fusion Reborn (1995)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7AHvaEAeQfkfJ4OqcBePxa2ao09.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: Fusion Reborn",
    "year": 1995,
    "id": "162",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/723567.mkv"
  },
  {
    "name": "Nanny McPhee and the Big Bang (2010)",
    "logo": "https://www.themoviedb.org/t/p/original/9cgHfgBXVZmVR63AhwJ82R1kAFS.jpg",
    "category": "IN - Hindi Animation",
    "title": "Nanny McPhee and the Big Bang",
    "year": 2010,
    "id": "163",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/722852.mkv"
  },
  {
    "name": "Star Wars Rebels The Siege Of Lothal (2015)",
    "logo": "https://www.justwatch.com/images/backdrop/12362901/s1440/star-wars-rebels-the-siege-of-lothal",
    "category": "IN - Hindi Animation",
    "title": "Star Wars Rebels The Siege Of Lothal",
    "year": 2015,
    "id": "164",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/722851.mkv"
  },
  {
    "name": "Star Wars Rebels Twilight Of The Apprentice (2016)",
    "logo": "https://lh3.googleusercontent.com/proxy/y8Giy-TW4BG1XdVUMqYzt53Qp3jNTaA_-n5Dl7ljGXEW-KIIn99kxmD6VGZ3kKGJNnxqTy3gQ5f8muxgJWEt3cK9Bw=s0-d",
    "category": "IN - Hindi Animation",
    "title": "Star Wars Rebels Twilight Of The Apprentice",
    "year": 2016,
    "id": "165",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/722850.mkv"
  },
  {
    "name": "IN-EN: The Monkey King (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i6ye8ueFhVE5pXatgyRrZ83LBD8.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Monkey King",
    "year": 2023,
    "id": "166",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/718229.mkv"
  },
  {
    "name": "IN-EN: The Legend of Muay Thai: 9 Satra (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7qoLL81fC9yO4e3InLHdlenAzSO.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Legend of Muay Thai: 9 Satra",
    "year": 2018,
    "id": "167",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/716552.mkv"
  },
  {
    "name": "IN-EN: Ruby Gillman, Teenage Kraken (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ruby Gillman, Teenage Kraken",
    "year": 2023,
    "id": "168",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/716152.mkv"
  },
  {
    "name": "IN-EN: Spider-Man: Across the Spider-Verse (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "id": "169",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/716150.mkv"
  },
  {
    "name": "Bilal A New Breed of Hero (2015)",
    "logo": "http://aftercredits.com/wp-content/uploads/2018/02/BilalANewBreedOfHeroPoster.jpg",
    "category": "IN - Hindi Animation",
    "title": "Bilal A New Breed of Hero",
    "year": 2015,
    "id": "170",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/716144.mkv"
  },
  {
    "name": "Bilal: A New Breed of Hero (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ncWuEzxnXqssxRfHghZuUAIezCo.jpg",
    "category": "IN - Hindi Animation",
    "title": "Bilal: A New Breed of Hero",
    "year": 2016,
    "id": "171",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/716039.mkv"
  },
  {
    "name": "IN-EN: Onward (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Onward",
    "year": 2020,
    "id": "172",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715918.mkv"
  },
  {
    "name": "IN-EN: The Action Pack Saves Christmas (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/a6MUJa8xIBQnx0a5Us5pEe38l9P.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Action Pack Saves Christmas",
    "year": 2022,
    "id": "173",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715917.mkv"
  },
  {
    "name": "A Silent Voice (2016)",
    "logo": "https://www.themoviedb.org/t/p/original/xjeYI75uMBtBjNlJ0cDJZDFg5Yv.jpg",
    "category": "IN - Hindi Animation",
    "title": "A Silent Voice",
    "year": 2016,
    "id": "174",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715855.mkv"
  },
  {
    "name": "IN-EN: Miraculous: Ladybug & Cat Noir, The Movie (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Miraculous: Ladybug & Cat Noir, The Movie",
    "year": 2023,
    "id": "175",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715691.mkv"
  },
  {
    "name": "Resident Evil Death Island (2023)",
    "logo": "https://m.media-amazon.com/images/M/MV5BMTU4YmExZGItNDdkMC00MjJjLWI3MDAtNmQzMDZkMjRkZDlhXkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_FMjpg_UX1000_.jpg",
    "category": "IN - Hindi Animation",
    "title": "Resident Evil Death Island",
    "year": 2023,
    "id": "176",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715589.mkv"
  },
  {
    "name": "Suzume (2022)",
    "logo": "https://m.media-amazon.com/images/M/MV5BNGVkNDc3NjUtNTY5ZS00ZmE0LWE3YzctMDk2OTRlNTdiZWQwXkEyXkFqcGdeQXVyMTU3NDg0OTgx._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "Suzume",
    "year": 2022,
    "id": "177",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715360.mp4"
  },
  {
    "name": "IN-EN: Resident Evil: Death Island (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Resident Evil: Death Island",
    "year": 2023,
    "id": "178",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/715139.mkv"
  },
  {
    "name": "IN-EN: Realm of Terracotta (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/48uip87WgekvqtoPGwuGPwxbCPm.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Realm of Terracotta",
    "year": 2021,
    "id": "179",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/714976.mkv"
  },
  {
    "name": "9 (2009)",
    "logo": "https://image.tmdb.org/t/p/original/usfcQZRqdXTSSQ55esiPHJZKkIU.jpg",
    "category": "IN - Hindi Animation",
    "title": "9",
    "year": 2009,
    "id": "180",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/714865.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Super: Super Hero (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pi0iZOEHeA3ih4p1IwAG4x2DZNH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Super: Super Hero",
    "year": 2022,
    "id": "181",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/714123.mkv"
  },
  {
    "name": "Antz (1998)",
    "logo": "https://image.tmdb.org/t/p/original/efwid6DnAUJCjvedtx7h6CvCVob.jpg",
    "category": "IN - Hindi Animation",
    "title": "Antz",
    "year": 1998,
    "id": "182",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/713684.mkv"
  },
  {
    "name": "IN-EN: Nimona (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8havBo9m3vZvj5XbJffcrmpgjnx.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Nimona",
    "year": 2023,
    "id": "183",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/712733.mkv"
  },
  {
    "name": "IN-EN: Black Clover: Sword of the Wizard King (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gNVYqSnZ89UyTZ977SEJLze4g3X.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Black Clover: Sword of the Wizard King",
    "year": 2023,
    "id": "184",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/709650.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: Broly – The Legendary Super Saiyan (1993)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6iO8TJCyLI4BiPYOvdwzPV2bhoV.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: Broly – The Legendary Super Saiyan",
    "year": 1993,
    "id": "185",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/708031.mkv"
  },
  {
    "name": "IN-EN: Spider-Man: Into the Spider-Verse (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "id": "186",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/707209.mkv"
  },
  {
    "name": "IN-EN: BoBoiBoy: The Movie (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jVwoMOZQjhO7V223NOT8RRazXMp.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: BoBoiBoy: The Movie",
    "year": 2016,
    "id": "187",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/707202.mkv"
  },
  {
    "name": "IN-EN: Boonie Bears: Back to Earth (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9tOF6yTtzFP2p7q4GB1lSEMrfIq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Boonie Bears: Back to Earth",
    "year": 2022,
    "id": "188",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/705192.mkv"
  },
  {
    "name": "The Rescuers (1977)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/49rGpB2x6AFB83SC4IBl9foRIGp.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Rescuers",
    "year": 1977,
    "id": "189",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/705186.mkv"
  },
  {
    "name": "IN-EN: The SpongeBob SquarePants Movie (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gjZD811kfY1ideNuBukcuCy8ocA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The SpongeBob SquarePants Movie",
    "year": 2004,
    "id": "190",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/705032.mkv"
  },
  {
    "name": "Buddha 2: The Endless Journey (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gG6c8TA6VsH5iDqAey8YNcwhQPt.jpg",
    "category": "IN - Hindi Animation",
    "title": "Buddha 2: The Endless Journey",
    "year": 2014,
    "id": "191",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/704965.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: Super Android 13! (1992)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uVJqC187rKxQ1sJsWlKjNfAzeTk.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: Super Android 13!",
    "year": 1992,
    "id": "192",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/704906.mkv"
  },
  {
    "name": "Big Hero 6 (2014)",
    "logo": "https://www.themoviedb.org/t/p/original/mi6dmhbr6z0Ocnd1dbcn0sszlfV.jpg",
    "category": "IN - Hindi Animation",
    "title": "Big Hero 6",
    "year": 2014,
    "id": "193",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/702702.mkv"
  },
  {
    "name": "My Neighbor Totoro (1988)",
    "logo": "https://www.themoviedb.org/t/p/original/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    "category": "IN - Hindi Animation",
    "title": "My Neighbor Totoro",
    "year": 1988,
    "id": "194",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/702701.mkv"
  },
  {
    "name": "The Snow Queen 3: Fire and Ice (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nZmUrl59UXIC1pXrviJMB3ERCnv.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Snow Queen 3: Fire and Ice",
    "year": 2016,
    "id": "195",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/702695.mkv"
  },
  {
    "name": "The Snow Queen: Mirror Lands (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8251dVxltnhqbt2DaO9bwJYmvAK.jpg",
    "category": "IN - Hindi Animation",
    "title": "The Snow Queen: Mirror Lands",
    "year": 2018,
    "id": "196",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/702694.mkv"
  },
  {
    "name": "Chicken Run (2000)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sKr9uEqQ0NWQhb29XIJvpT43khk.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chicken Run",
    "year": 2000,
    "id": "197",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/702397.mkv"
  },
  {
    "name": "IN-EN: Mummies (2023) [HQ-Dubbed]",
    "logo": "https://m.media-amazon.com/images/M/MV5BZWU0ZjJiOGItZDUwNy00MDE1LTk2ZjEtY2YwMzQxZGJjYjFjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UX1000_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mummies",
    "year": 2023,
    "id": "198",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/700397.mkv"
  },
  {
    "name": "Kochadaiiyaan (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/imvahgJM2w1LQnSnZEgaycRbgx.jpg",
    "category": "IN - Hindi Animation",
    "title": "Kochadaiiyaan",
    "year": 2014,
    "id": "199",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699712.mkv"
  },
  {
    "name": "America: The Motion Picture (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1JRRvx5RotvWM1maeq9r82ktdHi.jpg",
    "category": "IN - Hindi Animation",
    "title": "America: The Motion Picture",
    "year": 2021,
    "id": "200",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699698.mkv"
  },
  {
    "name": "IN-EN: Xico's Journey (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/g8ZyfUC0THygJkVoO2J7NxsdPI5.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Xico's Journey",
    "year": 2020,
    "id": "201",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699697.mkv"
  },
  {
    "name": "IN-EN: Evangelion: 2.0 You Can (Not) Advance (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7VLYN2CfJpB6PrcuzDKKqdGSUi6.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Evangelion: 2.0 You Can (Not) Advance",
    "year": 2009,
    "id": "202",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699632.mkv"
  },
  {
    "name": "IN-EN: Evangelion: 3.0 You Can (Not) Redo (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d0s1xvykzl0kz7fP5S2ROYqphdz.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Evangelion: 3.0 You Can (Not) Redo",
    "year": 2012,
    "id": "203",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699631.mkv"
  },
  {
    "name": "Doraemon: Nobita's Treasure Island (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
    "category": "IN - Hindi Animation",
    "title": "Doraemon: Nobita's Treasure Island",
    "year": 2018,
    "id": "204",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699630.mkv"
  },
  {
    "name": "IN-EN: The Magician's Elephant (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cAoAgzOCxSytYBqqCQulhXNR3LB.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Magician's Elephant",
    "year": 2023,
    "id": "205",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/699463.mkv"
  },
  {
    "name": "IN-EN: Monkey King Reloaded (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c41IxQkwTZCNXxxgT6YKsRhszn1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Monkey King Reloaded",
    "year": 2018,
    "id": "206",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/697509.mkv"
  },
  {
    "name": "IN-EN: Puss in Boots: The Last Wish (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Puss in Boots: The Last Wish",
    "year": 2022,
    "id": "207",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/696883.mkv"
  },
  {
    "name": "Fukrey Boyzzz: Space Mein Fukrapanti (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rx5hceSb5Ydl1iyoawrDkGo7oFW.jpg",
    "category": "IN - Hindi Animation",
    "title": "Fukrey Boyzzz: Space Mein Fukrapanti",
    "year": 2020,
    "id": "208",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/693861.mkv"
  },
  {
    "name": "IN-EN: Mariah Carey's All I Want for Christmas Is You (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5jv1ZhB4H5SdlG9Q1dEL8WSIIGq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mariah Carey's All I Want for Christmas Is You",
    "year": 2017,
    "id": "209",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/692281.mkv"
  },
  {
    "name": "IN-EN: LUPIN THE 3rd vs. CAT’S EYE (2023)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/b85EjAMa40gkSs9wOR9P6nuRZhi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: LUPIN THE 3rd vs. CAT’S EYE",
    "year": 2023,
    "id": "210",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/691612.mkv"
  },
  {
    "name": "IN-EN: Spirit Untamed (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q4WaFHk9Vp1poc88X1szwFRtYc5.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Spirit Untamed",
    "year": 2021,
    "id": "211",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/691595.mkv"
  },
  {
    "name": "IN-EN: The Jungle Book (1967)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yN1kuupnPTLUprgfvC5WapgrxG4.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Jungle Book",
    "year": 1967,
    "id": "212",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/689882.mkv"
  },
  {
    "name": "Buddha: The Great Departure (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/idrwvZygykOie3KnkgWc0752Oe5.jpg",
    "category": "IN - Hindi Animation",
    "title": "Buddha: The Great Departure",
    "year": 2011,
    "id": "213",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/689852.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Super: Broly (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f03YksE4NggUjG75toz4H1YAGRf.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Super: Broly",
    "year": 2018,
    "id": "214",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/688435.mkv"
  },
  {
    "name": "IN-EN: Mickey Saves Christmas (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yroznFQnEjgzgHj0vBDm4Hnppv6.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mickey Saves Christmas",
    "year": 2022,
    "id": "215",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/687658.mkv"
  },
  {
    "name": "IN-EN: Guillermo del Toro's Pinocchio (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Guillermo del Toro's Pinocchio",
    "year": 2022,
    "id": "216",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/684147.mkv"
  },
  {
    "name": "IN-EN: Scrooge: A Christmas Carol (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nOrnzHn9SCF6JTXfX02eSPyAAXL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Scrooge: A Christmas Carol",
    "year": 2022,
    "id": "217",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/682203.mkv"
  },
  {
    "name": "IN-EN: 100% Wolf (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: 100% Wolf",
    "year": 2020,
    "id": "218",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/682094.mkv"
  },
  {
    "name": "Asterix: The Mansions of the Gods (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oZYyisfvWY6N6KvC6cs9N6Anyht.jpg",
    "category": "IN - Hindi Animation",
    "title": "Asterix: The Mansions of the Gods",
    "year": 2014,
    "id": "219",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/681539.mp4"
  },
  {
    "name": "IN-EN: Hanuman Da Damdaar (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y8yZaoDqjJRXmeNfZJHU27Urvsl.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hanuman Da Damdaar",
    "year": 2017,
    "id": "220",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/681522.mkv"
  },
  {
    "name": "IN-EN: Entergalactic (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cfXbwPWwlmMhC45asWxCWq3Utwa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Entergalactic",
    "year": 2022,
    "id": "221",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/681349.mkv"
  },
  {
    "name": "IN-EN: Your Name (2016)",
    "logo": "https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Your Name",
    "year": 2016,
    "id": "222",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/680848.mkv"
  },
  {
    "name": "IN-EN: Despicable Me (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bRZT3dAv85TWLmQj4fhQg06W07D.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Despicable Me",
    "year": 2010,
    "id": "223",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/680618.mkv"
  },
  {
    "name": "IN-EN: Spirited Away (2001)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Spirited Away",
    "year": 2001,
    "id": "224",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/680616.mkv"
  },
  {
    "name": "IN-EN: My Father's Dragon (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6hgEe1w0An5fKi3ZqIUBwOyIN2y.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: My Father's Dragon",
    "year": 2022,
    "id": "225",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/653199.mkv"
  },
  {
    "name": "IN-EN: Teen Titans: Trouble in Tokyo (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uUIczHTpnBDC6Mbp0dFGDZldcc1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Teen Titans: Trouble in Tokyo",
    "year": 2006,
    "id": "226",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/652923.mkv"
  },
  {
    "name": "IN-EN: The Soccer Football Movie (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sWoYDNPNZs5MtzPbirXV73tIHrA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Soccer Football Movie",
    "year": 2022,
    "id": "227",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/652920.mkv"
  },
  {
    "name": "IN-EN: Wendell & Wild (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5dsX6UAHqkQz1kiV8bs8SvjyVNa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Wendell & Wild",
    "year": 2022,
    "id": "228",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/643472.mkv"
  },
  {
    "name": "IN-EN: Barbie: Mermaid Power (2022)",
    "logo": "https://m.media-amazon.com/images/M/MV5BMWQxYjQ0NmUtMzUxMC00OTZiLThiNzQtZjlhZWU4NDhlM2Y4XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_FMjpg_UX1000_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Barbie: Mermaid Power",
    "year": 2022,
    "id": "229",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/639476.mkv"
  },
  {
    "name": "IN-EN: Paws of Fury: The Legend of Hank (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vccE9bBa9mgghFpkWzU1fQqmOKB.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Paws of Fury: The Legend of Hank",
    "year": 2022,
    "id": "230",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/638339.mkv"
  },
  {
    "name": "IN-EN: WALL·E (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: WALL·E",
    "year": 2008,
    "id": "231",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/638017.mkv"
  },
  {
    "name": "IN-EN: Puss in Boots (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eufJ36oQCauDc427ewaEvQrhZ6i.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Puss in Boots",
    "year": 2011,
    "id": "232",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/638015.mkv"
  },
  {
    "name": "IN-EN: Super Monsters Furever Friends (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7Mar7KWdm4muSueufwDm7T4kctJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Super Monsters Furever Friends",
    "year": 2019,
    "id": "233",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/637669.mkv"
  },
  {
    "name": "IN-EN: Sunshine Barry & the Disco Worms (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eW4z9K2w7cZripBDQzdf2EAg07R.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Sunshine Barry & the Disco Worms",
    "year": 2008,
    "id": "234",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/636633.mkv"
  },
  {
    "name": "IN-EN: The Secret Life of Pets 2 (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Secret Life of Pets 2",
    "year": 2019,
    "id": "235",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/636578.mkv"
  },
  {
    "name": "IN-EN: Pil's Adventures (2021) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Pil's Adventures",
    "year": 2021,
    "id": "236",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/636470.mkv"
  },
  {
    "name": "IN-EN: Dragon Ball Z: Battle of Gods (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nxZEdYcHMuD8SSuwusDnK9CD2H1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Ball Z: Battle of Gods",
    "year": 2013,
    "id": "237",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/636469.mkv"
  },
  {
    "name": "IN-EN: Hanuman Vs Mahiravana (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aTY1gwCPmltzUBwlTb4V96eduLi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hanuman Vs Mahiravana",
    "year": 2018,
    "id": "238",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/617453.mkv"
  },
  {
    "name": "IN-EN: DC League of Super-Pets (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: DC League of Super-Pets",
    "year": 2022,
    "id": "239",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/613280.mkv"
  },
  {
    "name": "IN-EN: Snow White and the Seven Dwarfs (1937)",
    "logo": "https://www.themoviedb.org/t/p/original/9QKUh9UuIIT2ZA9Rby9R6vtNRKa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Snow White and the Seven Dwarfs",
    "year": 1937,
    "id": "240",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/612812.mkv"
  },
  {
    "name": "IN-EN: Doraemon: Nobita Chal Pada Antarctica (2022)",
    "logo": "https://cdn.animenewsnetwork.com/thumbnails/fit450x450/cms/news/110814/doraemon.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Doraemon: Nobita Chal Pada Antarctica",
    "year": 2022,
    "id": "241",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/606846.mkv"
  },
  {
    "name": "IN-EN: Minions: The Rise of Gru (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Minions: The Rise of Gru",
    "year": 2022,
    "id": "242",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/606773.mkv"
  },
  {
    "name": "IN-EN: Motu Patlu & The Secret of Devil's Heart (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aN9K39990gBpGV6noJKBTcI2sry.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Motu Patlu & The Secret of Devil's Heart",
    "year": 2022,
    "id": "243",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/606690.mkv"
  },
  {
    "name": "IN-EN: Luck (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Luck",
    "year": 2022,
    "id": "244",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/605528.mkv"
  },
  {
    "name": "IN-EN: Rise of the Teenage Mutant Ninja Turtles: The Movie (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4PASAPJSoUsY6I69gaED4k642Gb.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rise of the Teenage Mutant Ninja Turtles: The Movie",
    "year": 2022,
    "id": "245",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/605517.mkv"
  },
  {
    "name": "IN-EN: Lightyear (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Lightyear",
    "year": 2022,
    "id": "246",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/603842.mkv"
  },
  {
    "name": "IN-EN: Bal Ganesh and the Pomzom Planet (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rLGyTFqf8dr0BlR3MvtuChlIui1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Bal Ganesh and the Pomzom Planet",
    "year": 2017,
    "id": "247",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/601394.mkv"
  },
  {
    "name": "IN-EN: Return Of Hanuman (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sBPYBOiyYnlCZdTKZvi4FLdWFh6.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Return Of Hanuman",
    "year": 2007,
    "id": "248",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/601261.mkv"
  },
  {
    "name": "IN-EN: Johnny Bravo Goes to Bollywood (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sLeidXyrr2hlZkWd2p91jzqipaj.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Johnny Bravo Goes to Bollywood",
    "year": 2011,
    "id": "249",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/601075.mkv"
  },
  {
    "name": "IN-EN: Kung Fu Panda: The Dragon Knight (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cr7ow6T0kKIuDPQYmyh8U2kpair.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda: The Dragon Knight",
    "year": 2022,
    "id": "250",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/595615.mp4"
  },
  {
    "name": "IN-EN: The Sea Beast (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xXhtTf86hm3FRTzskJO06a9LQ6r.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Sea Beast",
    "year": 2022,
    "id": "251",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592422.mkv"
  },
  {
    "name": "IN-EN: Hoopa and the Magic Rings (2015)",
    "logo": "https://i.ebayimg.com/images/g/F9cAAOSwgY9XgAas/s-l400.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hoopa and the Magic Rings",
    "year": 2015,
    "id": "252",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592362.mkv"
  },
  {
    "name": "IN-EN: The Bad Guys (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Bad Guys",
    "year": 2022,
    "id": "253",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592250.mkv"
  },
  {
    "name": "IN-EN: Ben 10 Versus the Universe: The Movie (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/34KSOJVowmkeh6G0HZJMxqdHq6s.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ben 10 Versus the Universe: The Movie",
    "year": 2020,
    "id": "254",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592248.mkv"
  },
  {
    "name": "IN-EN: Ben 10: Secret of the Omnitrix (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aFFlwrv6jnj8LnYzxDifB5MOMpT.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ben 10: Secret of the Omnitrix",
    "year": 2007,
    "id": "255",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592247.mkv"
  },
  {
    "name": "IN-EN: Ben 10 Alien X-tinction (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pgL3pJEPv1K4Bb1isw5PFlA1MJ3.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ben 10 Alien X-tinction",
    "year": 2021,
    "id": "256",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/592246.mkv"
  },
  {
    "name": "IN-EN: The Nut Job 2: Nutty by Nature (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xOfdQHNF9TlrdujyAjiKfUhxSXy.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Nut Job 2: Nutty by Nature",
    "year": 2017,
    "id": "257",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/591691.mkv"
  },
  {
    "name": "IN-EN: The Pilgrim's Progress (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vtfsNxAsDHElFvYHUc9Khwqg17Y.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Pilgrim's Progress",
    "year": 2019,
    "id": "258",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589582.mkv"
  },
  {
    "name": "IN-EN: Fireheart (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hepwOZWJNUmLzB68gKYEdEJAaD3.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Fireheart",
    "year": 2022,
    "id": "259",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589581.mkv"
  },
  {
    "name": "IN-EN: The Lorax (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Lorax",
    "year": 2012,
    "id": "260",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589461.mkv"
  },
  {
    "name": "IN-EN: Surf's Up 2: WaveMania (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wdSX8enQ5uEvNLQ3yXTnAVGtrCy.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Surf's Up 2: WaveMania",
    "year": 2017,
    "id": "261",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589460.mkv"
  },
  {
    "name": "IN-EN: Boonie Bears: The Big Shrink (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3SHjHTSbbl9bWe4dFCignISpGEA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Boonie Bears: The Big Shrink",
    "year": 2018,
    "id": "262",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589148.mkv"
  },
  {
    "name": "IN-EN: Fearless (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5oQJ6HeNGWnEtP9Qyt5IZjuKI7j.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Fearless",
    "year": 2020,
    "id": "263",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589147.mkv"
  },
  {
    "name": "IN-EN: Super Bear (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xt64XxEgb38ZIPh45Y3ZddFYfOq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Super Bear",
    "year": 2019,
    "id": "264",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589146.mkv"
  },
  {
    "name": "IN-EN: Plan egg (2017)",
    "logo": "https://m.media-amazon.com/images/M/MV5BMzRkNTljNWYtYmExNy00MTkwLTk0OWMtODc3NjYzNWQwZjZhXkEyXkFqcGdeQXVyODk0ODAwODQ@._V1_FMjpg_UX1000_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Plan egg",
    "year": 2017,
    "id": "265",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589145.mkv"
  },
  {
    "name": "IN-EN: Jonah: A VeggieTales Movie (2002)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xJ6ImpQIqZxBh4eE2813ljQ0TQ3.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Jonah: A VeggieTales Movie",
    "year": 2002,
    "id": "266",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589144.mkv"
  },
  {
    "name": "IN-EN: The Wild (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sxqzaOto1qyUseSg6YpIP9Su5lp.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Wild",
    "year": 2006,
    "id": "267",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589143.mkv"
  },
  {
    "name": "IN-EN: The Polar Express (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zCuq1sy3xwbJJytFttp2qItqdc8.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Polar Express",
    "year": 2004,
    "id": "268",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589142.mkv"
  },
  {
    "name": "IN-EN: Up and Away (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1WRK69soLEfVFRW1WwE0vWGz1mq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Up and Away",
    "year": 2018,
    "id": "269",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589141.mkv"
  },
  {
    "name": "IN-EN: Alien Xmas (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3UGrAX6D1AMVra80jmUMUOLq8Qr.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Alien Xmas",
    "year": 2020,
    "id": "270",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589140.mkv"
  },
  {
    "name": "IN-EN: Tweety's High Flying Adventure (2000)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aZH3zVisuVAg6Krx3V1i4JVo9rN.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tweety's High Flying Adventure",
    "year": 2000,
    "id": "271",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589139.mkv"
  },
  {
    "name": "IN-EN: The Prince and the 108 Demons (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xreS5heEDeMieIs26PGLwZReq4X.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Prince and the 108 Demons",
    "year": 2014,
    "id": "272",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589138.mkv"
  },
  {
    "name": "IN-EN: Sinbad: Legend of the Seven Seas (2003)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/CQ1bthSN2uXDxovHUwH8mIB9zy.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Sinbad: Legend of the Seven Seas",
    "year": 2003,
    "id": "273",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589136.mkv"
  },
  {
    "name": "IN-EN: The Road to El Dorado (2000)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ip5MgTU8qpsFcmlgjcSlXXAwTRB.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Road to El Dorado",
    "year": 2000,
    "id": "274",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589135.mkv"
  },
  {
    "name": "IN-EN: Over the Hedge (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6qKM3Rl1tQgOFO1fMA7DAizWZ5n.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Over the Hedge",
    "year": 2006,
    "id": "275",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/589133.mkv"
  },
  {
    "name": "IN-EN: Klaus (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q125RHUDgR4gjwh1QkfYuJLYkL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Klaus",
    "year": 2019,
    "id": "276",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588892.mkv"
  },
  {
    "name": "IN-EN: The Lion King (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Lion King",
    "year": 2019,
    "id": "277",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588831.mkv"
  },
  {
    "name": "IN-EN: Justin and the Knights of Valour (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/z6GrOTKOazrLnHQWVrN1pA082qi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Justin and the Knights of Valour",
    "year": 2013,
    "id": "278",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588830.mkv"
  },
  {
    "name": "IN-EN: A Monster in Paris (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jerM6xBeRfIr2rLg2pICmduzoyf.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: A Monster in Paris",
    "year": 2011,
    "id": "279",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588828.mkv"
  },
  {
    "name": "IN-EN: Happy Feet (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zP4CK9O70P8GDilfTkPm4lrmaks.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Happy Feet",
    "year": 2006,
    "id": "280",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588826.mkv"
  },
  {
    "name": "IN-EN: Hop (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hRa9MJTgCbSuL3h2CVPwUdYOWJH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hop",
    "year": 2011,
    "id": "281",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/588825.mkv"
  },
  {
    "name": "IN-EN: Rumble (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fL7rh6Mzx87MbVl2aI4sYtxfhO5.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rumble",
    "year": 2021,
    "id": "282",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/583713.mkv"
  },
  {
    "name": "IN-EN: Ghost in the Shell: SAC_2045 Sustainable War (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9MHLVxGiQeWB6goT3hjgz3CLzNH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ghost in the Shell: SAC_2045 Sustainable War",
    "year": 2021,
    "id": "283",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/583670.mkv"
  },
  {
    "name": "IN-EN: Howard Lovecraft & the Frozen Kingdom (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5eKjZo8bGjzbEEw99Iy0hhLUQHF.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Howard Lovecraft & the Frozen Kingdom",
    "year": 2016,
    "id": "284",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/582730.mkv"
  },
  {
    "name": "IN-EN: Astro Kid (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vwqEIL5SrsZFVvileNe9LuHbJy7.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Astro Kid",
    "year": 2019,
    "id": "285",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/579588.mkv"
  },
  {
    "name": "IN-EN: Sing 2 (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Sing 2",
    "year": 2021,
    "id": "286",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/572867.mkv"
  },
  {
    "name": "IN-EN: Ella Bella Bingo (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vdK86hDn31gjtVJhMDB7ZMEAH8Z.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ella Bella Bingo",
    "year": 2020,
    "id": "287",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/569088.mkv"
  },
  {
    "name": "IN-EN: Turning Red (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Turning Red",
    "year": 2022,
    "id": "288",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/568450.mkv"
  },
  {
    "name": "IN-EN: Monsters vs Aliens (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hpHarddVj34j53T7NsoUGdKj4mP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Monsters vs Aliens",
    "year": 2009,
    "id": "289",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/565779.mkv"
  },
  {
    "name": "IN-EN: Monsters, Inc. (2001)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Monsters, Inc.",
    "year": 2001,
    "id": "290",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/565689.mkv"
  },
  {
    "name": "IN-EN: Ainbo: Spirit of the Amazon (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l8HyObVj8fPrzacAPtGWWLDhcfh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ainbo: Spirit of the Amazon",
    "year": 2021,
    "id": "291",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/558556.mkv"
  },
  {
    "name": "IN-EN: The Willoughbys (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9WrMmjdZvpxLQh1tCQ9tOd1asOb.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Willoughbys",
    "year": 2020,
    "id": "292",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/558515.mkv"
  },
  {
    "name": "IN-EN: Rabbids Invasion Special: Mission To Mars (2022)",
    "logo": "https://juju.b-cdn.net/wp-content/uploads/2022/02/Rabbids-Invasion-Special-Mission-to-Mars-Wallpaper-and-Images.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rabbids Invasion Special: Mission To Mars",
    "year": 2022,
    "id": "293",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/558138.mkv"
  },
  {
    "name": "IN-EN: Louis & Luca – Mission to the Moon (2018)",
    "logo": "https://m.media-amazon.com/images/M/MV5BM2M3Mzg4NmUtYjQ5Mi00ZTdlLTk5MzUtZDU0NmNiYTJlZGI2XkEyXkFqcGdeQXVyNjk4MzY1MTk@._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Louis & Luca – Mission to the Moon",
    "year": 2018,
    "id": "294",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/547558.mkv"
  },
  {
    "name": "IN-EN: Motu Patlu: King Of Kings (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vCpXMPIiFyG9eoFG644yqGImGbI.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Motu Patlu: King Of Kings",
    "year": 2016,
    "id": "295",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/546399.mkv"
  },
  {
    "name": "IN-EN: Riverdance: The Animated Adventure (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yn9DrhUBPrUTFEUHtdXSxgWcFTA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Riverdance: The Animated Adventure",
    "year": 2021,
    "id": "296",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/546180.mkv"
  },
  {
    "name": "IN-EN: Hotel Transylvania: Transformania (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6zt5l4DYV1kLPL5Vqz1kLq3THXD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hotel Transylvania: Transformania",
    "year": 2022,
    "id": "297",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/546177.mkv"
  },
  {
    "name": "IN-EN: The House (2022)",
    "logo": "https://m.media-amazon.com/images/M/MV5BOWM4NDgyN2QtN2UzNS00Y2YyLWJjMTgtNjljNjk2MmJjMjdmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UY720_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The House",
    "year": 2022,
    "id": "298",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/546175.mkv"
  },
  {
    "name": "IN-EN: Vic the Viking and the Magic Sword (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/e06pEk5ONPUQHRKURWP7Vj3DO3b.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Vic the Viking and the Magic Sword",
    "year": 2019,
    "id": "299",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545718.mkv"
  },
  {
    "name": "IN-EN: Seal Team (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yPZ3I27oeSm4zVesgMxXlhW8GDe.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Seal Team",
    "year": 2021,
    "id": "300",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545564.mkv"
  },
  {
    "name": "IN-EN: The Princess and the Dragon (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/a8lY7bzTZ9LsimEVjSLpRDW9fEZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Princess and the Dragon",
    "year": 2018,
    "id": "301",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545184.mkv"
  },
  {
    "name": "IN-EN: Encanto (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Encanto",
    "year": 2021,
    "id": "302",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545182.mkv"
  },
  {
    "name": "IN-EN: StarBeam: Beaming in the New Year (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qLzgNOTXla5gjT9yQbcR7IMm0Fi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: StarBeam: Beaming in the New Year",
    "year": 2021,
    "id": "303",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545111.mkv"
  },
  {
    "name": "IN-EN: The Snow Queen (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/siQpJAT2IQjN218hxJXvrHePtNS.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Snow Queen",
    "year": 2012,
    "id": "304",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545109.mkv"
  },
  {
    "name": "IN-EN: The Boss Baby: Family Business (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Boss Baby: Family Business",
    "year": 2021,
    "id": "305",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/545022.mkv"
  },
  {
    "name": "IN-EN: Back to the Outback (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zNXNRLH5wJprUG6B1olaBTNZOjy.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Back to the Outback",
    "year": 2021,
    "id": "306",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/542067.mkv"
  },
  {
    "name": "IN-EN: Robin Robin (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bKIdlJbd17rrIm4oZzhXTbmqpon.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Robin Robin",
    "year": 2021,
    "id": "307",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/539389.mkv"
  },
  {
    "name": "IN-EN: Earwig and the Witch (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/86jyzdxtAX8p956rVQDKwGbrYh2.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Earwig and the Witch",
    "year": 2021,
    "id": "308",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/539387.mkv"
  },
  {
    "name": "IN-EN: Space Jam: A New Legacy (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Space Jam: A New Legacy",
    "year": 2021,
    "id": "309",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/538412.mkv"
  },
  {
    "name": "IN-EN: Luca (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8tABCBpzu3mZbzMB3sRzMEHEvJi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Luca",
    "year": 2021,
    "id": "310",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/538409.mkv"
  },
  {
    "name": "IN-EN: Wish Dragon (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Wish Dragon",
    "year": 2021,
    "id": "311",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/538404.mkv"
  },
  {
    "name": "IN-EN: Valley of the Lanterns (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bEc8WKnCOYFoC1jLQKP3mIQuvmY.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Valley of the Lanterns",
    "year": 2018,
    "id": "312",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537575.mkv"
  },
  {
    "name": "IN-EN: Dragon Nest: Throne of Elves (2016).mkv",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yCV6x3ovzdPEF8LC7JmTr0wOxs3.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Nest: Throne of Elves (2016).mkv",
    "year": null,
    "id": "313",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537574.mkv"
  },
  {
    "name": "IN-EN: The Croods: A New Age (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Croods: A New Age",
    "year": 2020,
    "id": "314",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537573.mkv"
  },
  {
    "name": "IN-EN: Pokémon the Movie: Secrets of the Jungle (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vGcHyV9s1N2I7bJLSBODvqHTYLL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Pokémon the Movie: Secrets of the Jungle",
    "year": 2020,
    "id": "315",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537267.mkv"
  },
  {
    "name": "IN-EN: The Witcher: Nightmare of the Wolf (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3sLz2yv6vBDWqBbd8rdnNeoJ2kJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Witcher: Nightmare of the Wolf",
    "year": 2021,
    "id": "316",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537266.mkv"
  },
  {
    "name": "IN-EN: The Loud House Movie (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mab5wPeGVjbMyYMzyzfdKKnG9cl.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Loud House Movie",
    "year": 2021,
    "id": "317",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537265.mkv"
  },
  {
    "name": "IN-EN: Steven Universe: The Movie (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8mRgpubxHqnqvENK4Bei30xMDvy.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Steven Universe: The Movie",
    "year": 2019,
    "id": "318",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537261.mkv"
  },
  {
    "name": "IN-EN: Tom & Jerry (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tom & Jerry",
    "year": 2021,
    "id": "319",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537259.mkv"
  },
  {
    "name": "IN-EN: Super Monsters: Once Upon a Rhyme (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/unIkHTdCEIdHdtmWjEwfv7Ifllk.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Super Monsters: Once Upon a Rhyme",
    "year": 2021,
    "id": "320",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537257.mkv"
  },
  {
    "name": "IN-EN: Motu Patlu Vs Dr. Destroyer (2021)",
    "logo": null,
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Motu Patlu Vs Dr. Destroyer",
    "year": 2021,
    "id": "321",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537255.mkv"
  },
  {
    "name": "IN-EN: Daisy Quokka: World's Scariest Animal (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jjV1DY1SlGI1eUJAXSdre8bpw7t.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Daisy Quokka: World's Scariest Animal",
    "year": 2021,
    "id": "322",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/537034.mkv"
  },
  {
    "name": "IN-EN: Condorito: The Movie (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/Vv1SCKxeApOeAE4M2tU9iCqilU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Condorito: The Movie",
    "year": 2017,
    "id": "323",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/484525.mkv"
  },
  {
    "name": "IN-EN: My Little Pony: A New Generation (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hzq5XRGgm6NDMOW1idUvbpGqEkv.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: My Little Pony: A New Generation",
    "year": 2021,
    "id": "324",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/484432.mkv"
  },
  {
    "name": "IN-EN: Garfield (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5hKlKh62yIR03XHZxwFs3EaIFfD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Garfield",
    "year": 2004,
    "id": "325",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/484420.mp4"
  },
  {
    "name": "IN-EN: Dragon Rider (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ucDrOXUrVnr9X3ZmXP2Q68HDIHr.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Rider",
    "year": 2020,
    "id": "326",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/482153.mkv"
  },
  {
    "name": "IN-EN: Megamind (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7l5OY9oeJyaB2XJKrg0du7pmi1C.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Megamind",
    "year": 2010,
    "id": "327",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/482022.mkv"
  },
  {
    "name": "IN-EN: Two Tails (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dUhCpS255LXwmN4ELL02bmHsXYH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Two Tails",
    "year": 2018,
    "id": "328",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/482020.mkv"
  },
  {
    "name": "IN-EN: Rio (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/BSZ2dA3G369e3pHIXGhh5orzPt.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rio",
    "year": 2011,
    "id": "329",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/466151.mkv"
  },
  {
    "name": "IN-EN: Smurfs: The Lost Village (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/diYAZ6CKUuRAqLYMB2AyVutEFm0.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Smurfs: The Lost Village",
    "year": 2017,
    "id": "330",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/461349.mkv"
  },
  {
    "name": "IN-EN: Vivo (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Vivo",
    "year": 2021,
    "id": "331",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/460102.mkv"
  },
  {
    "name": "IN-EN: Miraculous World: New York, United HeroeZ (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/19kfvGktytDZInUmpv3WlaHoTxP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Miraculous World: New York, United HeroeZ",
    "year": 2020,
    "id": "332",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/460060.mp4"
  },
  {
    "name": "IN-EN: Cloudy with a Chance of Meatballs 2 (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tT2DN1tWk1zpCxqvaaNY8yP8Awn.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cloudy with a Chance of Meatballs 2",
    "year": 2013,
    "id": "333",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/460058.mkv"
  },
  {
    "name": "IN-EN: Johnny Test - Season 1",
    "logo": "https://m.media-amazon.com/images/M/MV5BZDVhZWVkNTUtMTE1OC00YmViLWJlMzYtNTQwYmI3MmQ3OGYzXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Johnny Test - Season 1",
    "year": null,
    "id": "334",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/456854.mkv"
  },
  {
    "name": "IN-EN: Abominable (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/20djTLqppfBx5WYA67Y300S6aPD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Abominable",
    "year": 2019,
    "id": "335",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/456765.mkv"
  },
  {
    "name": "IN-EN: Scoob! (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Scoob!",
    "year": 2020,
    "id": "336",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404972.mkv"
  },
  {
    "name": "IN-EN: Zootopia (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Zootopia",
    "year": 2016,
    "id": "337",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404963.mkv"
  },
  {
    "name": "IN-EN: Trollhunters: Rise of the Titans (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zvUNFeTz0Sssb210wSiIiHRjA4W.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Trollhunters: Rise of the Titans",
    "year": 2021,
    "id": "338",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404961.mkv"
  },
  {
    "name": "IN-EN: The Stolen Princess (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4v6MoBcbCSI5Kw6AQVYLTJHfxrO.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Stolen Princess",
    "year": 2018,
    "id": "339",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404960.mkv"
  },
  {
    "name": "IN-EN: The Secret Life of Pets (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gJo9G56QlXKRe2tcdDVSt28xVsP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Secret Life of Pets",
    "year": 2016,
    "id": "340",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404959.mkv"
  },
  {
    "name": "IN-EN: The Big Trip (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/31a41CbwpsG9jRrWifmte4nNJWe.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Big Trip",
    "year": 2019,
    "id": "341",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404958.mkv"
  },
  {
    "name": "IN-EN: Scooby-Doo! Music of the Vampire (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/a72diuO4zc9NXbXrfajuaO0sptC.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Scooby-Doo! Music of the Vampire",
    "year": 2012,
    "id": "342",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404956.mkv"
  },
  {
    "name": "IN-EN: Raya and the Last Dragon (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Raya and the Last Dragon",
    "year": 2021,
    "id": "343",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404955.mkv"
  },
  {
    "name": "IN-EN: Ratchet & Clank (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/649xP2LST4VIrZ5cLPw7Ys9movF.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ratchet & Clank",
    "year": 2016,
    "id": "344",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404954.mkv"
  },
  {
    "name": "IN-EN: Ooops! Noah is Gone... (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEJXHgpiKh89Vwjc4XUY5CIgUdB.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ooops! Noah is Gone...",
    "year": 2015,
    "id": "345",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404953.mkv"
  },
  {
    "name": "IN-EN: Firebreather (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fQkCKYHmWRNAcWb1XWk8SPylUog.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Firebreather",
    "year": 2010,
    "id": "346",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404951.mkv"
  },
  {
    "name": "IN-EN: Ferdinand (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ferdinand",
    "year": 2017,
    "id": "347",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404950.mkv"
  },
  {
    "name": "IN-EN: Dino King: Journey to Fire Mountain (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w6N6xJvvjY6pLxOnHz5yu9Z8quG.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dino King: Journey to Fire Mountain",
    "year": 2019,
    "id": "348",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404949.mkv"
  },
  {
    "name": "IN-EN: Turbo (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tN4bjzZ3ePY57hpCTFk0Kc3oXAw.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Turbo",
    "year": 2013,
    "id": "349",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404345.mkv"
  },
  {
    "name": "IN-EN: Penguins of Madagascar (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXbpNrPDZDMEbujFoOxmMNQVMHa.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Penguins of Madagascar",
    "year": 2014,
    "id": "350",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404343.mkv"
  },
  {
    "name": "IN-EN: Gnome Alone (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jWB0zhk1Rj1tIWUM98Wsh15gkiW.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Gnome Alone",
    "year": 2017,
    "id": "351",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404342.mkv"
  },
  {
    "name": "IN-EN: Dragon Hunters (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bhHhTCh43aT3kAeknSd5T5BcZcJ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dragon Hunters",
    "year": 2008,
    "id": "352",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404341.mkv"
  },
  {
    "name": "IN-EN: Chicken Little (2005)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1wg65q3daTE8rGfaUhBxLdXk6NL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Chicken Little",
    "year": 2005,
    "id": "353",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404340.mkv"
  },
  {
    "name": "IN-EN: Winx Club: The Mystery of the Abyss (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tf0QLY55SjgEDHqk44LnkRkfemM.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Winx Club: The Mystery of the Abyss",
    "year": 2014,
    "id": "354",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404338.mkv"
  },
  {
    "name": "IN-EN: Cloudy with a Chance of Meatballs (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qhOhIKf7QEyQ5dMrRUqs5eTX1Oq.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cloudy with a Chance of Meatballs",
    "year": 2009,
    "id": "355",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404336.mkv"
  },
  {
    "name": "IN-EN: White Snake (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/30SLnoKmYNyRPkKCYowsrGLRnJA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: White Snake",
    "year": 2019,
    "id": "356",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/404329.mkv"
  },
  {
    "name": "IN-EN: Hotel Transylvania (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eJGvzGrsfe2sqTUPv5IwLWXjVuR.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hotel Transylvania",
    "year": 2012,
    "id": "357",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399047.mkv"
  },
  {
    "name": "IN-EN: The Incredibles 2 (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aTbRJHCrQwceSS5b8LYj7hC654I.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Incredibles 2",
    "year": 2018,
    "id": "358",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399044.mkv"
  },
  {
    "name": "IN-EN: Yugo and Lala (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ir6rpN3H9kAOJsE9AuzlNoWKhGm.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Yugo and Lala",
    "year": 2012,
    "id": "359",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399041.mkv"
  },
  {
    "name": "IN-EN: Tom and Jerry: Robin Hood and His Merry Mouse (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vsQBkkMDsquRGW4SSoD2VZ8uW73.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tom and Jerry: Robin Hood and His Merry Mouse",
    "year": 2012,
    "id": "360",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399040.mkv"
  },
  {
    "name": "IN-EN: The Smurfs (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vRhnslP2gW0QDym7BsMeSuioUfK.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Smurfs",
    "year": 2011,
    "id": "361",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399038.mkv"
  },
  {
    "name": "IN-EN: The Nut Job (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4iHnGlmOjAj2k5zUftYDIzSITCf.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Nut Job",
    "year": 2014,
    "id": "362",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399037.mkv"
  },
  {
    "name": "IN-EN: The Angry Birds Movie (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nsaaZryqabtrdKwXcNud2Bm39mu.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Angry Birds Movie",
    "year": 2016,
    "id": "363",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399036.mkv"
  },
  {
    "name": "IN-EN: Salma's Big Wish (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nR9mgNV2FaXLJs4BzZg160dXWJC.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Salma's Big Wish",
    "year": 2019,
    "id": "364",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399035.mkv"
  },
  {
    "name": "IN-EN: Open Season 3 (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qEr9fkGLQUWcAnVfDV46L79bdFs.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Open Season 3",
    "year": 2010,
    "id": "365",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399034.mkv"
  },
  {
    "name": "IN-EN: Open Season 2 (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lM4bahouPblYcfngZtnNSkaWxCU.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Open Season 2",
    "year": 2008,
    "id": "366",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399033.mkv"
  },
  {
    "name": "IN-EN: Open Season (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w5Lctmkc1yah215Luxmci4djaiW.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Open Season",
    "year": 2006,
    "id": "367",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399032.mkv"
  },
  {
    "name": "IN-EN: Next Gen (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hUDDo5MPWM6rc6COQYhaoRNqvhE.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Next Gen",
    "year": 2018,
    "id": "368",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399031.mkv"
  },
  {
    "name": "IN-EN: Madagascar: Escape 2 Africa (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/agRbLOHgN46TQO4YdKR462iR7To.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Madagascar: Escape 2 Africa",
    "year": 2008,
    "id": "369",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399028.mkv"
  },
  {
    "name": "IN-EN: Madagascar (2005)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uHkmbxb70IQhV4q94MiBe9dqVqv.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Madagascar",
    "year": 2005,
    "id": "370",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399026.mkv"
  },
  {
    "name": "IN-EN: Kung Fu Panda Holiday (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rV77WxY35LuYLOuQvBeD1nyWMuI.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda Holiday",
    "year": 2010,
    "id": "371",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399025.mkv"
  },
  {
    "name": "IN-EN: Kung Fu Panda 2 (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mtqqD00vB4PGRt20gWtGqFhrkd0.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda 2",
    "year": 2011,
    "id": "372",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399024.mkv"
  },
  {
    "name": "IN-EN: Kung Fu Panda (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda",
    "year": 2008,
    "id": "373",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399023.mkv"
  },
  {
    "name": "IN-EN: The Incredibles (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Incredibles",
    "year": 2004,
    "id": "374",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399021.mkv"
  },
  {
    "name": "IN-EN: Ice Age: The Meltdown (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hzJzd0OFRHjSykLuSmDG8ssPJAn.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age: The Meltdown",
    "year": 2006,
    "id": "375",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399020.mkv"
  },
  {
    "name": "IN-EN: Ice Age: Dawn of the Dinosaurs (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age: Dawn of the Dinosaurs",
    "year": 2009,
    "id": "376",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399019.mkv"
  },
  {
    "name": "IN-EN: Ice Age: Continental Drift (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6NSFKyOz7ppsd0KY6g4HInIZ53P.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age: Continental Drift",
    "year": 2012,
    "id": "377",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399018.mkv"
  },
  {
    "name": "IN-EN: Ice Age: A Mammoth Christmas (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kwLi6MLlVsPWMVB9gOpFo5n7HZR.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age: A Mammoth Christmas",
    "year": 2011,
    "id": "378",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399017.mkv"
  },
  {
    "name": "IN-EN: Ice Age (2002)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age",
    "year": 2002,
    "id": "379",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399016.mkv"
  },
  {
    "name": "IN-EN: Frozen (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mbPrrbt8bSLcHSBCHnRclPlMZPl.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Frozen",
    "year": 2013,
    "id": "380",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399013.mkv"
  },
  {
    "name": "IN-EN: Flushed Away (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kgoZI4xh38RrEYEPVib6a12UPLn.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Flushed Away",
    "year": 2006,
    "id": "381",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399012.mkv"
  },
  {
    "name": "IN-EN: Finding Nemo (2013)",
    "logo": null,
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Finding Nemo",
    "year": 2013,
    "id": "382",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399011.mkv"
  },
  {
    "name": "IN-EN: Cars 2 (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cars 2",
    "year": 2011,
    "id": "383",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399010.mkv"
  },
  {
    "name": "IN-EN: Cars (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cars",
    "year": 2006,
    "id": "384",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/399009.mkv"
  },
  {
    "name": "IN-EN: Yogi Bear (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hDd4Yf9jkysYMuXeVjFXKmrthjl.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Yogi Bear",
    "year": 2010,
    "id": "385",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398704.mkv"
  },
  {
    "name": "IN-EN: The Secret Life of Pets (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gJo9G56QlXKRe2tcdDVSt28xVsP.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Secret Life of Pets",
    "year": 2016,
    "id": "386",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398703.mkv"
  },
  {
    "name": "IN-EN: The Good Dinosaur (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dM50iVbcnzQUIoc9TmUUk0SP4P4.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Good Dinosaur",
    "year": 2015,
    "id": "387",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398702.mkv"
  },
  {
    "name": "IN-EN: The Croods (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/27zvjVOtOi5ped1HSlJKNsKXkFH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Croods",
    "year": 2013,
    "id": "388",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398701.mkv"
  },
  {
    "name": "IN-EN: The Boss Baby (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/unPB1iyEeTBcKiLg8W083rlViFH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Boss Baby",
    "year": 2017,
    "id": "389",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398700.mkv"
  },
  {
    "name": "IN-EN: Tangled: Before Ever After (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8BiZ8KXS0itmOx4uQw3E8UnmqEQ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tangled: Before Ever After",
    "year": 2017,
    "id": "390",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398698.mkv"
  },
  {
    "name": "IN-EN: Tangled (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tangled",
    "year": 2010,
    "id": "391",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398697.mkv"
  },
  {
    "name": "IN-EN: Smurfs: The Lost Village (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/diYAZ6CKUuRAqLYMB2AyVutEFm0.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Smurfs: The Lost Village",
    "year": 2017,
    "id": "392",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398696.mkv"
  },
  {
    "name": "IN-EN: Sing (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lW0kUtXTOVlHTVhDO2VzNBACAHX.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Sing",
    "year": 2016,
    "id": "393",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398695.mkv"
  },
  {
    "name": "IN-EN: Shrek 2 (2004)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/b6BGbffMYYtwwIED1BGkghbuJm0.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Shrek 2",
    "year": 2004,
    "id": "394",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398694.mkv"
  },
  {
    "name": "IN-EN: Scooby-Doo! and the Samurai Sword (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7LoWIRjFsAYDDV3Fz2lk8HBAWt8.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Scooby-Doo! and the Samurai Sword",
    "year": 2009,
    "id": "395",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398693.mkv"
  },
  {
    "name": "IN-EN: Rise of the Guardians (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kUBkmlWriPbNMijL2m3LtmPYPTb.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rise of the Guardians",
    "year": 2012,
    "id": "396",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398692.mkv"
  },
  {
    "name": "IN-EN: Rango (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/h9GJiKuuJ650dte0gyzLD3ILcIh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Rango",
    "year": 2011,
    "id": "397",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398691.mkv"
  },
  {
    "name": "IN-EN: Minions (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vlOgaxUiMOA8sPDG9n3VhQabnEi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Minions",
    "year": 2015,
    "id": "398",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398688.mkv"
  },
  {
    "name": "IN-EN: Kubo and the Two Strings (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aZJ6KK1Wt7YB4dgZ0qlpaX3PwNV.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kubo and the Two Strings",
    "year": 2016,
    "id": "399",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398686.mkv"
  },
  {
    "name": "IN-EN: Ice Age: Collision Course (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mSR0AjQaZ3mIx77h2vC5ZR7KDwO.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ice Age: Collision Course",
    "year": 2016,
    "id": "400",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398685.mkv"
  },
  {
    "name": "IN-EN: Hotel Transylvania 2 (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kKFgwQnR5q08UFsAvtoYyTIiHyj.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Hotel Transylvania 2",
    "year": 2015,
    "id": "401",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398683.mkv"
  },
  {
    "name": "IN-EN: Escape from Planet Earth (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9la0CSCJqwh6io3yk4Xv3aEZxEA.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Escape from Planet Earth",
    "year": 2013,
    "id": "402",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398682.mkv"
  },
  {
    "name": "IN-EN: Cars 3 (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jJ8TnHvWHaVadW5JJjGYsM07j9i.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Cars 3",
    "year": 2017,
    "id": "403",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398680.mkv"
  },
  {
    "name": "IN-EN: Brave (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/L6qqU6Q3k4MmPojncNbT43FSTL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Brave",
    "year": 2012,
    "id": "404",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398679.mkv"
  },
  {
    "name": "IN-EN: Big Hero 6 (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Big Hero 6",
    "year": 2014,
    "id": "405",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398678.mkv"
  },
  {
    "name": "IN-EN: Arthur Christmas (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sPCrGLdTMn0ud3oAJG37VDxpQfZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Arthur Christmas",
    "year": 2011,
    "id": "406",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398677.mkv"
  },
  {
    "name": "IN-EN: Wreck-It Ralph (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Wreck-It Ralph",
    "year": 2012,
    "id": "407",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398676.mkv"
  },
  {
    "name": "IN-EN: Trolls World Tour (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Trolls World Tour",
    "year": 2020,
    "id": "408",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398674.mkv"
  },
  {
    "name": "IN-EN: Trolls (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zKu5MNy9QW1a5ZHgv7iAp3kRZpE.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Trolls",
    "year": 2016,
    "id": "409",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398673.mkv"
  },
  {
    "name": "IN-EN: Transformers Prime Beast Hunters: Predacons Rising (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yNLhYBrsAnYVjsAxpm4nuGWtk6U.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Transformers Prime Beast Hunters: Predacons Rising",
    "year": 2013,
    "id": "410",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398672.mkv"
  },
  {
    "name": "IN-EN: Toy Story 4 (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Toy Story 4",
    "year": 2019,
    "id": "411",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398671.mkv"
  },
  {
    "name": "IN-EN: Tom and Jerry: Spy Quest (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sk6Kzkwp8vXPhluinKVQ4DrD2JC.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tom and Jerry: Spy Quest",
    "year": 2015,
    "id": "412",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398670.mkv"
  },
  {
    "name": "IN-EN: Tinker Bell and the Lost Treasure (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hg1959yuBkHb4BKbIvETQSfxGCT.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tinker Bell and the Lost Treasure",
    "year": 2009,
    "id": "413",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398669.mkv"
  },
  {
    "name": "IN-EN: Tinker Bell and the Great Fairy Rescue (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cb7PrVIYbwIadQqWxgSU6CGHJjj.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tinker Bell and the Great Fairy Rescue",
    "year": 2010,
    "id": "414",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398668.mkv"
  },
  {
    "name": "IN-EN: Tinker Bell (2008)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Ma0r1n8kfH7UaQMS7bJ9KsYUjT.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Tinker Bell",
    "year": 2008,
    "id": "415",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398667.mkv"
  },
  {
    "name": "IN-EN: The Powerpuff Girls Movie (2002)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qWiiB9RFKQSF4tpG2NWnZ0gjB9Q.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Powerpuff Girls Movie",
    "year": 2002,
    "id": "416",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398666.mkv"
  },
  {
    "name": "IN-EN: The Hero of Color City (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tKOSuJhjn981H3G3zoGTETgj1AG.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Hero of Color City",
    "year": 2014,
    "id": "417",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398664.mkv"
  },
  {
    "name": "IN-EN: The Ant Bully (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oFuqX0inTvbA1XAFv2x3CQnI65m.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Ant Bully",
    "year": 2006,
    "id": "418",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398663.mkv"
  },
  {
    "name": "IN-EN: Sheep & Wolves (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4R28oIV65bElWcXlavPV0kRbmSZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Sheep & Wolves",
    "year": 2016,
    "id": "419",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398662.mkv"
  },
  {
    "name": "IN-EN: Norm of the North (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ouaoVSV7aOSWTNnQ9iDA1jw0pgg.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Norm of the North",
    "year": 2016,
    "id": "420",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398661.mkv"
  },
  {
    "name": "IN-EN: Mr Black: Green Star (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9GYMWhLvjMtrj7t7aOLBwhXZxw1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mr Black: Green Star",
    "year": 2015,
    "id": "421",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398659.mkv"
  },
  {
    "name": "IN-EN: How to Train Your Dragon: The Hidden World (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: How to Train Your Dragon: The Hidden World",
    "year": 2019,
    "id": "422",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398658.mkv"
  },
  {
    "name": "IN-EN: GG Bond Ultimate Battle",
    "logo": null,
    "category": "IN - Hindi Animation",
    "title": "IN-EN: GG Bond Ultimate Battle",
    "year": null,
    "id": "423",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398656.mkv"
  },
  {
    "name": "IN-EN: Frog Kingdom (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gzbN8z81gx8M0Fkk1ZvBUeVeRAb.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Frog Kingdom",
    "year": 2013,
    "id": "424",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398655.mkv"
  },
  {
    "name": "IN-EN: Ferdinand (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/rMm94JsRfcOPiPVsTRcBiiVBOhz.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ferdinand",
    "year": 2017,
    "id": "425",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398654.mkv"
  },
  {
    "name": "IN-EN: Elena and the Secret of Avalor (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6dknXo3Ny4J97eBRs9XKVwQc8fH.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Elena and the Secret of Avalor",
    "year": 2016,
    "id": "426",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398653.mkv"
  },
  {
    "name": "IN-EN: Dex Hamilton and the Doomsday Swarm (2012)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3kfN4Oq4IWznZ3NoLisGznv50GL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dex Hamilton and the Doomsday Swarm",
    "year": 2012,
    "id": "427",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398652.mp4"
  },
  {
    "name": "IN-EN: Despicable Me 2 (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Despicable Me 2",
    "year": 2013,
    "id": "428",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398651.mkv"
  },
  {
    "name": "IN-EN: Curious George (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kj6MvHlFQcoKgSrVUOC8aI3XfLi.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Curious George",
    "year": 2006,
    "id": "429",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398650.mkv"
  },
  {
    "name": "IN-EN: Coco (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Coco",
    "year": 2017,
    "id": "430",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398649.mkv"
  },
  {
    "name": "IN-EN: Boonie Bears: Homeward Journey (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/p6a5bA8rDA6g2da60jfDO4vAFjB.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Boonie Bears: Homeward Journey",
    "year": 2013,
    "id": "431",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398647.mkv"
  },
  {
    "name": "IN-EN: Boonie Bears: The Big Top Secret (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l1Dbx1PkO3SPgsYyf0C8QqoL6X1.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Boonie Bears: The Big Top Secret",
    "year": 2016,
    "id": "432",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398646.mkv"
  },
  {
    "name": "IN-EN: Batman: Mask of the Phantasm (1993)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l4jaQjkgznu2Rz05X18f24UjPNW.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Batman: Mask of the Phantasm",
    "year": 1993,
    "id": "433",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398645.mkv"
  },
  {
    "name": "IN-EN: Barbie in Princess Power (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nCviAdChxibrKRZfvG7MZ2wsqdR.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Barbie in Princess Power",
    "year": 2015,
    "id": "434",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398644.mkv"
  },
  {
    "name": "IN-EN: Barbie: Dolphin Magic (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/c8Bb9MnvkNTKstQSKixO4dWaUhL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Barbie: Dolphin Magic",
    "year": 2017,
    "id": "435",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398643.mkv"
  },
  {
    "name": "IN-EN: Ballerina (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qBxMhcmNnFniuDAZTKEHcSgKtsn.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Ballerina",
    "year": 2016,
    "id": "436",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398642.mkv"
  },
  {
    "name": "IN-EN: Astro Boy (2009)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fYOJaaCpqq1NatziVJntmsXXDi8.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Astro Boy",
    "year": 2009,
    "id": "437",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398641.mkv"
  },
  {
    "name": "IN-EN: Asterix and the Vikings (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fer4QcdkxKpVVaZhwKaaS9dmLh9.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Asterix and the Vikings",
    "year": 2006,
    "id": "438",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398640.mkv"
  },
  {
    "name": "IN-EN: Arthur and the Invisibles (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gH27K0S7BiZCsNMxzOQTacG9IZp.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Arthur and the Invisibles",
    "year": 2006,
    "id": "439",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398639.mkv"
  },
  {
    "name": "IN-EN: A Goofy Movie (1995)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bycmMhO3iIoEDzP768sUjq2RV4T.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: A Goofy Movie",
    "year": 1995,
    "id": "440",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398638.mkv"
  },
  {
    "name": "IN-EN: Over the Moon (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lQfdytwN7eh0tXWjIiMceFdBBvD.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Over the Moon",
    "year": 2020,
    "id": "441",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398631.mp4"
  },
  {
    "name": "IN-EN: Mr. Peabody & Sherman (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zfM3kcF6IiHkM84JsMFYAnKnEuh.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Mr. Peabody & Sherman",
    "year": 2014,
    "id": "442",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398630.mp4"
  },
  {
    "name": "IN-EN: Dog Gone Trouble (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yfTXk9T3iNxuOcnA72AirzueLxL.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Dog Gone Trouble",
    "year": 2019,
    "id": "443",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/398604.mp4"
  },
  {
    "name": "Toonpur Ka Superrhero (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2apBkbLd19aivVAES4lboFeqtwC.jpg",
    "category": "IN - Hindi Animation",
    "title": "Toonpur Ka Superrhero",
    "year": 2010,
    "id": "444",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/389788.mkv"
  },
  {
    "name": "Motu Patlu Vs Dr Destroyer 2021",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6dcrAyoX0k7LK71SsDELlet3KWi.jpg",
    "category": "IN - Hindi Animation",
    "title": "Motu Patlu Vs Dr Destroyer",
    "year": 2021,
    "id": "445",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/389694.mkv"
  },
  {
    "name": "Phantom Boy (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AlCyvatuIXehWMFrhqR4QE1ZIt.jpg",
    "category": "IN - Hindi Animation",
    "title": "Phantom Boy",
    "year": 2015,
    "id": "446",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/335133.mkv"
  },
  {
    "name": "Incredibles 2 (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    "category": "IN - Hindi Animation",
    "title": "Incredibles 2",
    "year": 2018,
    "id": "447",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/335058.mkv"
  },
  {
    "name": "Chaar Sahibzaade : Rise of Banda Singh Bahadur (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/82NzD53hr3NT4pc9t6CybJXabSG.jpg",
    "category": "IN - Hindi Animation",
    "title": "Chaar Sahibzaade : Rise of Banda Singh Bahadur",
    "year": 2016,
    "id": "448",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/335010.mkv"
  },
  {
    "name": "Arthur and the Invisibles (2006)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gH27K0S7BiZCsNMxzOQTacG9IZp.jpg",
    "category": "IN - Hindi Animation",
    "title": "Arthur and the Invisibles",
    "year": 2006,
    "id": "449",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/334989.mkv"
  },
  {
    "name": "Cookie (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fMW0wnphxsr9yQmWJzczqr7P3sb.jpg",
    "category": "IN - Hindi Animation",
    "title": "Cookie",
    "year": 2020,
    "id": "450",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/323822.mkv"
  },
  {
    "name": "Acid (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4NqfafCVwPFn2vph1uBRMEFgTdF.jpg",
    "category": "IN - Hindi Animation",
    "title": "Acid",
    "year": 2020,
    "id": "451",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/323796.mkv"
  },
  {
    "name": "IN-EN: Wonder Park (2019) 1080p",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/English%20Hindi%20Pics/Wonder%20Park%20(2019).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Wonder Park (2019) 1080p",
    "year": null,
    "id": "452",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/276803.mp4"
  },
  {
    "name": "IN-EN: The Emoji Movie (2017) [Hindi DD 2.0 English]",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/English%20Hindi%20Pics/The%20Emoji%20Movie.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Emoji Movie",
    "year": 2017,
    "id": "453",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/276802.mp4"
  },
  {
    "name": "IN-EN: Home (2015) 720p",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Home%202015.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Home (2015) 720p",
    "year": null,
    "id": "454",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/271136.mp4"
  },
  {
    "name": "IN-EN: Jungle Beat The Movie (2021) 720p.mp4",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Jungle%20Beat%20The%20Movie%202021.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Jungle Beat The Movie (2021) 720p.mp4",
    "year": null,
    "id": "455",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/268801.mp4"
  },
  {
    "name": "IN-EN: The Mitchells vs. the Machines (2021) Hindi 720p",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/English%20Hindi%20Pics/The%20Mitchells%20vs.%20the%20Machines%202021.jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: The Mitchells vs. the Machines (2021) Hindi 720p",
    "year": null,
    "id": "456",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/191548.mp4"
  },
  {
    "name": "IN-EN: Olaf's Frozen Adventure (2017) Short Movie",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Olaf%27s%20Frozen%20Adventure%20(2017).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Olaf's Frozen Adventure (2017) Short Movie",
    "year": null,
    "id": "457",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179391.mp4"
  },
  {
    "name": "IN-EN: Meet the Robinsons (2007) [Hindi] 720p",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Meet%20the%20Robinsons%20(2007).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Meet the Robinsons (2007) [Hindi] 720p",
    "year": null,
    "id": "458",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179390.mp4"
  },
  {
    "name": "IN-EN: Madagascar 3 Europe's Most Wanted (2012)",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Madagascar%203%20Europe%27s%20Most%20Wanted%20(2012).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Madagascar 3 Europe's Most Wanted",
    "year": 2012,
    "id": "459",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179389.mp4"
  },
  {
    "name": "IN-EN: Latte and the Magic Waterstone (2019) [Hindi-DD5.1] 720p",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Latte%20and%20the%20Magic%20Waterstone%20(2019).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Latte and the Magic Waterstone (2019) [Hindi-DD5.1] 720p",
    "year": null,
    "id": "460",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179388.mp4"
  },
  {
    "name": "IN-EN: Kung Fu Panda 3 (2016)",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Kung%20Fu%20Panda%203%20(2016).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Kung Fu Panda 3",
    "year": 2016,
    "id": "461",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179387.mp4"
  },
  {
    "name": "IN-EN: Free Birds (2013)",
    "logo": "https://cdn.cline.fun/img.php?link=/zain786/Animation%20Pics/Free%20Birds%20(2013).jpg",
    "category": "IN - Hindi Animation",
    "title": "IN-EN: Free Birds",
    "year": 2013,
    "id": "462",
    "url": "http://tv.sciptv.cc:8880/movie/2ba33af6/1ec52ca6/179386.mp4"
  }
];
