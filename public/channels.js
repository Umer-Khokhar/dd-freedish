const channels = [
  {
    "id": "1",
    "name": "IPL LIVE 24 / 7 SD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAglA1fqnzVHqL1yfCEFM3NN2XjL68YWT2BQ&s",
    "category": "Indian Premier League",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1056298"
  },
  {
    "id": "2",
    "name": "IPL LIVE 24 / 7 HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAglA1fqnzVHqL1yfCEFM3NN2XjL68YWT2BQ&s",
    "category": "Indian Premier League",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1056304"
  },
  {
    "id": "3",
    "name": "IPL LIVE 24 / 7  HINDI SD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAglA1fqnzVHqL1yfCEFM3NN2XjL68YWT2BQ&s",
    "category": "Indian Premier League",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1056301"
  },
  {
    "id": "4",
    "name": "IPL LIVE 24 / 7  HINDI HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAglA1fqnzVHqL1yfCEFM3NN2XjL68YWT2BQ&s",
    "category": "Indian Premier League",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1056307"
  },
  {
    "id": "5",
    "name": "IN: STAR PLUS HD",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/d7/StarPlus_Logo.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326092"
  },
  {
    "id": "6",
    "name": "IN: STAR PLUS SD Low Net",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/d7/StarPlus_Logo.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179091"
  },
  {
    "id": "7",
    "name": "IN: STAR BHARAT HD",
    "logo": "https://play-lh.googleusercontent.com/SQ8XkXAuBoN16kbfyNXNzi_mMl-9TjRULTLz_Iqdgze4QH9za7grZSb5csVRD6O7tu4",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60154"
  },
  {
    "id": "8",
    "name": "IN: STAR BHARAT SD Low Net",
    "logo": "https://play-lh.googleusercontent.com/SQ8XkXAuBoN16kbfyNXNzi_mMl-9TjRULTLz_Iqdgze4QH9za7grZSb5csVRD6O7tu4",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325232"
  },
  {
    "id": "9",
    "name": "IN: STAR UTSAV SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/dc907349bd1e994ab09b59addbf47839.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1039605"
  },
  {
    "id": "10",
    "name": "IN: & TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ac0051f6c882b02c3fe17788059451b4.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326593"
  },
  {
    "id": "11",
    "name": "IN: & TV SD Low Net",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ac0051f6c882b02c3fe17788059451b4.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179092"
  },
  {
    "id": "12",
    "name": "IN: COLORS FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6ecc6987b5469c68bb4d4322e42283a5.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179093"
  },
  {
    "id": "13",
    "name": "IN: COLORS SD Low Net",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6ecc6987b5469c68bb4d4322e42283a5.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325500"
  },
  {
    "id": "14",
    "name": "IN: COLORS RISHTEY SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6ecc6987b5469c68bb4d4322e42283a5.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326594"
  },
  {
    "id": "15",
    "name": "IN: ZEE TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/abe8fbca0832280a88dc5983147bf0de.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32140"
  },
  {
    "id": "16",
    "name": "IN:  Zee TV SD Low Net",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/abe8fbca0832280a88dc5983147bf0de.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325190"
  },
  {
    "id": "17",
    "name": "IN ANMOL SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d1a0bd941bfa200d0d53d7949e3397ee.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325395"
  },
  {
    "id": "18",
    "name": "IN: SAB HD",
    "logo": "https://wallpapers.com/images/hd/sony-sab-television-channel-logo-zer5x8nmlbgnbujk.jpg",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179143"
  },
  {
    "id": "19",
    "name": "IN: SAB SD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sony_SAB.svg/250px-Sony_SAB.svg.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1039608"
  },
  {
    "id": "20",
    "name": "IN: SET FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0e58e330ad32a26c6c51fbcb68b2f280.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179098"
  },
  {
    "id": "21",
    "name": "IN: SONY SD Low Net",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0e58e330ad32a26c6c51fbcb68b2f280.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179083"
  },
  {
    "id": "22",
    "name": "IN: SONY PAL SD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3kjZT8CrJYcLDjnY65MuYR1mNat3Cmt3cw&s",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325997"
  },
  {
    "id": "23",
    "name": "IN; BIG MAGIC SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/56a03da6ecc774ca1dd913c99c6b429f.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043108"
  },
  {
    "id": "24",
    "name": "IN: Dangal 2",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/12ad55d49823c3f5cda1019bcadad36a.png",
    "category": "IN - ENTERTAINMENT - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043115"
  },
  {
    "id": "25",
    "name": "IN: MAX HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/4678899977.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60157"
  },
  {
    "id": "26",
    "name": "IN: MAX 2 SD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2024-11/c1dd82929a5c0356b690fb581cdd5ae9.jpeg",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32196"
  },
  {
    "id": "27",
    "name": "IN: SONY WAH SD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmG91CwiSMgR1BTD2ZDbR9rGXJbC2BAjZ3w&s",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1047670"
  },
  {
    "id": "28",
    "name": "IN: AIRTEL MINIPLEX HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYdub4JpLG6b-xYbyvuZTz9eIJRGOGEG7kQ&s",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1058762"
  },
  {
    "id": "29",
    "name": "IN: STAR GOLD HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/59975785291.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32161"
  },
  {
    "id": "30",
    "name": "IN: STAR SELECT HD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2023-02/30af3c510bcfdb3845c56a67a1c3bd61.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326257"
  },
  {
    "id": "31",
    "name": "IN: STAR GOLD 2 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/69390864761.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32205"
  },
  {
    "id": "32",
    "name": "IN: STAR UTSAV MOVIS SD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2024-08/fcfbf2a1877ed32b46cb2e8e12520dfa.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326047"
  },
  {
    "id": "33",
    "name": "IN: STAR GOLD ROMNS SD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2021-09/39e4ba0feeb32d7265b5d927f3b7c668.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/522181"
  },
  {
    "id": "34",
    "name": "IN: Star Gold THL SD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2021-09/39e4ba0feeb32d7265b5d927f3b7c668.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325483"
  },
  {
    "id": "35",
    "name": "IN: Colors Cineplex HD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2022-05/3065653535cdfa318a8185d152607846.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/584456"
  },
  {
    "id": "36",
    "name": "IN  CINEPLEX BOLLYWOOD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2022-05/3065653535cdfa318a8185d152607846.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60127"
  },
  {
    "id": "37",
    "name": "IN: & PICTURES FHD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2021-06/a1f81b40485819fec3ef445eb88d0557.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325319"
  },
  {
    "id": "38",
    "name": "IN: COLORS CINEPLEX SUPERHITS SD",
    "logo": "https://www.lyngsat.com/logo/tv/cc/colors-cineplex-superhits-in.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32142"
  },
  {
    "id": "39",
    "name": "IN: ZEE CINEMA HD",
    "logo": "http://s3.i3ns.net:2052/portal/picon/2021-06/085bf305157db5fde8b5efdf9e67c0eb.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325485"
  },
  {
    "id": "40",
    "name": "IN: ZEE Bollywood",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/fc206a0b6638d335172236ae7503db4e.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1037905"
  },
  {
    "id": "41",
    "name": "IN Zee Classic SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/31bb083e13e39fcd766423ea37ad7ca9.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32132"
  },
  {
    "id": "42",
    "name": "IN:  ANMOL CINEMA SD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/5823186724.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32148"
  },
  {
    "id": "43",
    "name": "IN:  ANMOL CINEMA 2 SD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcpJyX_4SHAqeH4vGExD3axnKopMqJmV3pQ&s",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1058765"
  },
  {
    "id": "44",
    "name": "IN: B4U SD",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/a/ab/B4U_Kadak.jpeg/revision/latest?cb=20200320100818",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/587546"
  },
  {
    "id": "45",
    "name": "IN: ZEE ACTION HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/41755892411.png",
    "category": "IN - MOVIS HD SD - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179096"
  },
  {
    "id": "46",
    "name": "& PRIVE 4K",
    "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQDxIVFhAXFxUbGBYVFhgVGBoXFRcXGBgWFhgYHSggGBolHRgZITEhJSkrLi4uGR8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcEBggBAwL/xABQEAABAwIDBAcCBwkNCQEAAAABAAIDBBEFEiEGBzFBEyJRYXGBkTKhCBQjQlKxshUzNWJyc3SSwRYkNENVY4KDk5Siw9IXNlNks7TR4fBU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF5dRWLbSUVJ/CamKM9j3gH04oJZFpT96uCg2+Ot8mSEeoapPC9uMLqSGw1kLnH5pdld6OsUGxIvyHA8F6EHqIiAiIgIiICIiAi8ul0HqIiAiIgIi8JQeovAV6gIiICIiAiIgIiIF1FbQ4/T0EDqiqkDIx6uPJrRxLj2LLxKujp4nzTODY2NLnOPIAXK5Q3g7ZTYtVGV5LYGkiKO+jW30JH0zzKDadpN5+JYtOKTDg6GN7srWMPyj7/AEn/ADdNdOC3nZTcvSRtEmJF1RUHVwzOEYPZobv8StO+DphrJK6edwu6GIBvcZCQT42aR5q9No8WFHSTVTm5hFG5+UaXLRoO6",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586718"
  },
  {
    "id": "47",
    "name": "SONY PIX 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/a1ef31e41d1c9f847a947f5d4364f57d.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586747"
  },
  {
    "id": "48",
    "name": "STAR Movies 4K",
    "logo": "https://pluspng.com/img-png/star-movies-logo-png-star-movies-hd-star-movies-png-300.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586723"
  },
  {
    "id": "49",
    "name": "STAR MOVIES SELECT  4K",
    "logo": "https://pluspng.com/img-png/star-movies-logo-png-star-movies-hd-star-movies-png-300.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586767"
  },
  {
    "id": "50",
    "name": "&flix 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/94314475361.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586721"
  },
  {
    "id": "51",
    "name": "MN+ 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/896c4e820aef64925416c28f3faf1f1b.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586720"
  },
  {
    "id": "52",
    "name": "MOVIES NOW 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/84b4574bc2fbb0c5edcef5adca04f960.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586771"
  },
  {
    "id": "53",
    "name": "&Xplor 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/637c89a29a602468ce0bffc8cb1fea6f.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586763"
  },
  {
    "id": "54",
    "name": "DISNEY INTERNATIONAL 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b99d21de7a2ef3760599456b29f7b48f.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1040932"
  },
  {
    "id": "55",
    "name": "NICK+ 4K ENGLISH",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6a8784ce34c59a4e891e7274587857ae.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1040935"
  },
  {
    "id": "56",
    "name": "TRAVEL XP 4K",
    "logo": "https://b1gchlogos.xyz/wp-content/uploads/2023/08/TravelXP4K.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586743"
  },
  {
    "id": "57",
    "name": "TLC 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/37538906971.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586727"
  },
  {
    "id": "58",
    "name": "ZEE CAFE 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ac225ce6b67e914986a3f2ad5888f5a3.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586745"
  },
  {
    "id": "59",
    "name": "Colors Infinity 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9edcdd9b9ce9a7188c2452a23b3fe9c4.png",
    "category": "IN - ENG MOVIES 4K LIVE ",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586729"
  },
  {
    "id": "60",
    "name": "IN: SONY TEN 1 HD",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/e/ed/Sony_Sports_Ten_1.png/revision/latest/scale-to-width-down/340?cb=20221025083646",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325506"
  },
  {
    "id": "61",
    "name": "IN: SONY TEN 2 HD",
    "logo": "https://assets-prod.services.toffeelive.com/w_256,q_75,f_webp/sy5m-JQBv9knK3AHYTTk/posters/5e40bf0e-633f-4d37-a3b2-3d606f0ac19a.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32169"
  },
  {
    "id": "62",
    "name": "IN SONY TEN 3 SD",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/f/ff/Sony_Sports_Ten_3.png/revision/latest/scale-to-width-down/460?cb=20221025085433",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043126"
  },
  {
    "id": "63",
    "name": "IN: SONY TEN 3 HD",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/f/ff/Sony_Sports_Ten_3.png/revision/latest/scale-to-width-down/460?cb=20221025085433",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325387"
  },
  {
    "id": "64",
    "name": "IN: SONY TEN 5 HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzetBdZ-mAZ552ehUvqTm7r8CSJkZWpJkQpg&s",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32179"
  },
  {
    "id": "65",
    "name": "IN: STAR SPORT 108E",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ee28fa483fd6ed3f989bd4c1bb0eab6b.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1042682"
  },
  {
    "id": "66",
    "name": "IN: STAR SPORTS 1 HD  83E",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ee28fa483fd6ed3f989bd4c1bb0eab6b.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179348"
  },
  {
    "id": "67",
    "name": "IN : STAR SPORTS 1 SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ee28fa483fd6ed3f989bd4c1bb0eab6b.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1053169"
  },
  {
    "id": "68",
    "name": "IN: STAR SPORTS HINDI HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/87425eefc162d5887894dc8688837d4a.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179338"
  },
  {
    "id": "69",
    "name": "IN: STAR SPORTS 1 HINDI SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ee28fa483fd6ed3f989bd4c1bb0eab6b.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1042279"
  },
  {
    "id": "70",
    "name": "IN: STAR SPORTS 2 HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c9b1a43f3979676efb34cb2fb0c7b1b8.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179342"
  },
  {
    "id": "71",
    "name": "IN: STAR SPORT 2 HINDH HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c9b1a43f3979676efb34cb2fb0c7b1b8.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32139"
  },
  {
    "id": "72",
    "name": "IN: STAR SPORTS 3 SD ENG",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1b697c9952c2b629729569e9b64a5249.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179353"
  },
  {
    "id": "73",
    "name": "IN: STAR SPORTS SELECT 2 HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/8e8b373b9cffe7f4fe7a4097d3080ba1.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32158"
  },
  {
    "id": "74",
    "name": "IN: STAR SPORTS SELECT 1 HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7c4491a30a3a8e479a892edae4ca81b5.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60141"
  },
  {
    "id": "75",
    "name": "IN: STAR SPORTS 2 HD TAMIL",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c9b1a43f3979676efb34cb2fb0c7b1b8.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1046113"
  },
  {
    "id": "76",
    "name": "IN: Europsorts HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/864df3f9f529dd21705f6051745f9a0d.png",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179146"
  },
  {
    "id": "77",
    "name": "Sony Ten 4 HD",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/9/95/Sony_Sports_Ten_4.png/revision/latest/scale-to-width-down/460?cb=20221025090401",
    "category": "IN - INDIAN SPORTS - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325174"
  },
  {
    "id": "78",
    "name": "IN: TOM & JERRY HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrQLWYAaTRzUdh2Xa6tkmr2jpGyIO-8aPIA&s",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1058768"
  },
  {
    "id": "88v1",
    "name": "IN: Cartoon Network HD (RS 20)",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/7/79/CNHD_Plus.svg",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://line.dino.ws:80/{USERNAME}/{PASSWORD}/643219"
  },
  {
    "id": "80",
    "name": "IN: NICK HINDHI SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6a8784ce34c59a4e891e7274587857ae.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325220"
  },
  {
    "id": "81",
    "name": "IN: SONY YAY SD",
    "logo": "https://pbs.twimg.com/profile_images/1585530858186104832/1UsrsUMV_400x400.jpg",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32174"
  },
  {
    "id": "82",
    "name": "IN: POGO SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c6c3ed7455f000f1988f68575dcf59da.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/191564"
  },
  {
    "id": "83",
    "name": "IN: NICK Junior  SD",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Nick_Jr.logo.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325513"
  },
  {
    "id": "84",
    "name": "IN: Disney",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/d/d2/Dc_screen_bug_2018.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/108628"
  },
  {
    "id": "85",
    "name": "IN: Disney Channel HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7b38e4f12ac8a22b416f2c15029921cb.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325150"
  },
  {
    "id": "86",
    "name": "IN Sonic Hindi",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a80c5c214c380fe6062591e42049da1b.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325511"
  },
  {
    "name": "IN: POGO (RS 7)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c6c3ed7455f000f1988f68575dcf59da.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "type": "live",
    "url": "http://line.dino.ws:80/{USERNAME}/{PASSWORD}/281410",
    "id": "68v1"
  },
  {
    "id": "87",
    "name": "IN: Cartoon Network SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b827827b80b13904f6ca3b46f44ee8f4.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/191549"
  },
  {
    "id": "88",
    "name": "IN: Cartoon Network HD+",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/7/79/CNHD_Plus.svg",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111638"
  },
  {
    "id": "89",
    "name": "IN: Discovery KIDS SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d640e4f65b8fef1077ab77d037409d4d.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/191566"
  },
  {
    "name": "IN: Disney (RS 12)",
    "logo": "https://static.wikia.nocookie.net/logopedia/images/d/d2/Dc_screen_bug_2018.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "type": "live",
    "url": "http://line.dino.ws:80/{USERNAME}/{PASSWORD}/281356",
    "id": "70v1"
  },
  {
    "id": "90",
    "name": "IN: Super Hungama SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/eb956ec4772e3ca67ed036f83c447e87.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043119"
  },
  {
    "id": "91",
    "name": "IN: WoW Kidz TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9c2afd9d3427fd87703656a89050a283.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043123"
  },
  {
    "id": "92",
    "name": "IN: Planet Fun HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9a1de0e867e7bf9d1e15b3d2b1e44410.png",
    "category": "IN - KIDS CARTOON - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/191551"
  },
  {
    "id": "93",
    "name": "IN: ANIMAL PLANET ENG HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/77879330041.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586730"
  },
  {
    "id": "94",
    "name": "IN: ANIMAL PLANET HINDH HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/3174409551.jpg",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/466050"
  },
  {
    "id": "95",
    "name": "IN SONY BBC ENG HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/8129620278.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60152"
  },
  {
    "id": "96",
    "name": "IN: BBC Earth Hindi HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/b53118cfb940d29ae313b3ff2a97973f.jpg",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179127"
  },
  {
    "id": "97",
    "name": "IN: National Geographic ENG HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/26991132821.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60146"
  },
  {
    "id": "98",
    "name": "IN: National GEO HINDI HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/50353419321.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586733"
  },
  {
    "id": "99",
    "name": "IN: NAT GEOENG HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/71d2c00e3e765aa4ce7efa370ab183f9.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/465835"
  },
  {
    "id": "100",
    "name": "IN: NAT GEO WILD HD HINDI",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/14464391491.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/547645"
  },
  {
    "id": "101",
    "name": "IN: DISCOVERY HD ENG",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/16399646921.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325213"
  },
  {
    "id": "102",
    "name": "IN: DISCOVERY HINDH HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/67105710731.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325394"
  },
  {
    "id": "103",
    "name": "IN: DISCOVERY SCIENCE ENG SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/10271136661.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325230"
  },
  {
    "id": "104",
    "name": "IN: Discovery Science Hindi HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/10271136661.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325251"
  },
  {
    "id": "105",
    "name": "IN: INVST  DISCOVERY HINDH SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/25853500771.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325393"
  },
  {
    "id": "106",
    "name": "IN: HISTORY TV ENG HD",
    "logo": "http://img-cdn.curl.pk:8880/jio_icon/65200175131.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586731"
  },
  {
    "id": "107",
    "name": "IN: HISTORY TV HINDH HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/41937615481.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325187"
  },
  {
    "id": "108",
    "name": "IN: TRAVEL XP HINDI HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/78232829731.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111939"
  },
  {
    "id": "109",
    "name": "IN: TLC HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/72801574231.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586734"
  },
  {
    "id": "110",
    "name": "IN: Love Nature HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/69467233771.png",
    "category": "IN - DOCUMENTARY - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/466054"
  },
  {
    "id": "111",
    "name": "IN: MTV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5c40243daf99de738a6c3aa37ddc2e98.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043111"
  },
  {
    "id": "112",
    "name": "PK: 8XM MUSIC HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/478b1e330bf1ed48d18e941ddcad0c44.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/106304"
  },
  {
    "id": "113",
    "name": "IN: B4U Music SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1cae6fa8501d630d3c8478789a03a6fb.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32185"
  },
  {
    "id": "114",
    "name": "IN: 9xm SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a183b4fd3e514951b36fa7aafd1f93c5.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/106297"
  },
  {
    "id": "115",
    "name": "IN: ZOOM MUSIC SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d9337cc5610194125ef5cd6a7a7dc335.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111669"
  },
  {
    "id": "116",
    "name": "IN: Pitaara HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d07358c36108de641077b9affd633d29.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/106307"
  },
  {
    "id": "117",
    "name": "IN: YRF Music",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/057393c266b27cd20c94ae23a44a56b7.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/584457"
  },
  {
    "id": "118",
    "name": "IN: Balle Balle",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/deb7c2f8ac51468caade91b0221e3929.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32123"
  },
  {
    "id": "119",
    "name": "PK JALWA MUSIC HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/bd4ea277c5c855ecec4dc0cc2cc1c6d0.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32124"
  },
  {
    "id": "120",
    "name": "IN: 9X JALWA",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/3d50141a43f91d047f65e527dd9854d9.png",
    "category": "IN - VIP Music TV - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/579367"
  },
  {
    "id": "121",
    "name": "IND: ZEE News HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d77d78bd680fedc47e256041328cc991.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32154"
  },
  {
    "id": "122",
    "name": "IND: AAJ TAK SD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0e6631c43a3d77771b2848d5bd5e4bcc.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586764"
  },
  {
    "id": "123",
    "name": "IND: DD India HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5d7aa6a9cc562319ad9b39b4878e0415.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111792"
  },
  {
    "id": "124",
    "name": "IND:  India Today NEWS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7cc0dd4cb81a930b6cd402563aa0c236.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/32098"
  },
  {
    "id": "125",
    "name": "IND:  NDTV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/fcc5da3ce2f8c9f5550364d05489e801.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60171"
  },
  {
    "id": "126",
    "name": "IND: NEWS 18 HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c219076c1bd8b47c731b3110e7665db0.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/60170"
  },
  {
    "id": "127",
    "name": "IND:  News 24 Live HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9a077b036f10791078dfe03cac38edff.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325248"
  },
  {
    "id": "128",
    "name": "IND:  ABP NEWS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/72fb1e5ccea6268746636d1ad3c9ccfd.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179139"
  },
  {
    "id": "129",
    "name": "IND:  CNBC Awaaz HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5e0a48dcf6617d5b7bf4b35870b00308.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325247"
  },
  {
    "id": "130",
    "name": "IND:  Republic TV HD ( English",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4055b9a0677bb764c3aadf230d54e52a.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/696332"
  },
  {
    "id": "131",
    "name": "IND: Times Now Navbharat HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/86ba5906ea22330a84bc5a1e91134151.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325370"
  },
  {
    "id": "132",
    "name": "IND: India NEWS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7637dc57486c4d3e2469fad9d44665fe.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325366"
  },
  {
    "id": "133",
    "name": "IND:  JK NEWS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/930b77f390fbe4fcc377f28aa947af92.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325369"
  },
  {
    "id": "134",
    "name": "IND:   TV9 Bharatvarsh HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9d12841dcb0afccf4e0704402ef28d88.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325368"
  },
  {
    "id": "135",
    "name": "IND:  Zee News HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d77d78bd680fedc47e256041328cc991.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179128"
  },
  {
    "id": "136",
    "name": "IND: India Today HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7cc0dd4cb81a930b6cd402563aa0c236.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325361"
  },
  {
    "id": "137",
    "name": "IND: NEWS X HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/753fbf809d9d1de15c60ec7b834eea7a.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325367"
  },
  {
    "id": "138",
    "name": "IND: Republic Bharat HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/092e78de8f8ecdc7d1a141ad02ac5c99.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325259"
  },
  {
    "id": "139",
    "name": "IND: Times NOW HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/86ba5906ea22330a84bc5a1e91134151.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325254"
  },
  {
    "id": "140",
    "name": "IND: WION TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5465ae856bf4b01785a01532282f5898.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325211"
  },
  {
    "id": "141",
    "name": "IND: ZEE Bihar JH HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d5673c8d7ff969c0ae5f7d004cf4db2a.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325205"
  },
  {
    "id": "142",
    "name": "IND: ZEE Business HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6c0e3352e46df68dcbd7bd0d7bbadb3d.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325200"
  },
  {
    "id": "143",
    "name": "IND: ZEE Hindustan HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/81956548991.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325204"
  },
  {
    "id": "144",
    "name": "IND: ZEE MP",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/fb7ee4fd61f756ea835d356b97661f96.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325381"
  },
  {
    "id": "145",
    "name": "IND: ZEE UP UK HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/03321640538e365ed71bf97ae4c6263a.png",
    "category": "IN - Hindi News - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325206"
  },
  {
    "id": "146",
    "name": "BAN || COLORS BANGLA CINEMA",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d442d9bc4eceb9f4a22094445b711ec9.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179362"
  },
  {
    "id": "147",
    "name": "BAN || ZEE BANGLA CINEMA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7b3baf380f683444c917f455a4e42fd7.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111956"
  },
  {
    "id": "148",
    "name": "BAN || ZEE BANGLA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7b3baf380f683444c917f455a4e42fd7.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325132"
  },
  {
    "id": "149",
    "name": "BAN || STAR JALSHA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5039527a26d97f794c5ca408858df420.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/522289"
  },
  {
    "id": "150",
    "name": "BAN || JALSA Movies HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/45e1c1b6805e1dfaeacc254241cec583.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179254"
  },
  {
    "id": "151",
    "name": "BAN || SUN BANGLA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4a058bc308014ec5e1f09928d07b8b40.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179258"
  },
  {
    "id": "152",
    "name": "BAN || TV9 BANGLA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/e09bc74e9d64a11dc952f5f2e3ea2d88.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325123"
  },
  {
    "id": "153",
    "name": "BAN || SONY AATH",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/88c0dac09400ac77e4c4154ce3b9ee6a.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/522386"
  },
  {
    "id": "154",
    "name": "BAN || ZEE BANGLA CINEMA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7b3baf380f683444c917f455a4e42fd7.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325131"
  },
  {
    "id": "155",
    "name": "BAN || COLORS BANGLA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d442d9bc4eceb9f4a22094445b711ec9.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179255"
  },
  {
    "id": "156",
    "name": "BAN || DD Bangla HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/8a9de57fa6576c95068b6d73c8d785b1.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111789"
  },
  {
    "id": "157",
    "name": "BAN || ABP ANANDA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/80d5bc9e6ff485ec986b921f1c9536a4.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/522284"
  },
  {
    "id": "158",
    "name": "Dhoom Music",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7d1eda1e2113175671d1208a1ba2f2f0.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179266"
  },
  {
    "id": "159",
    "name": "BAN || Discovery Channel Bengali HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/684ac085788836d504d1a17e61a07564.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325128"
  },
  {
    "id": "160",
    "name": "BAN || BANGLA BHAKTI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/3a61e53bc2988dabf739f8ffd8e3f68e.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325126"
  },
  {
    "id": "161",
    "name": "BAN || NEWS TIME",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a0bcec15522c5b2ccd84b59fe459d6f8.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179294"
  },
  {
    "id": "162",
    "name": "BAN || R PLUS NEWS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9989c7c86940e76e09d2e50fb63b3c0a.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179291"
  },
  {
    "id": "163",
    "name": "BAN || SANGEET BANGLA",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6ccf9cc61bd68c85286f9720b35e1624.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179283"
  },
  {
    "id": "164",
    "name": "BAN || ZEE 24 GHANTA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/113c362baf8db845e0aad3c8002a3ad2.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/522285"
  },
  {
    "id": "165",
    "name": "Nick (Bangla)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1b9a4d4588acbaa10d53ab57fff964a5.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325125"
  },
  {
    "id": "166",
    "name": "Travelxp Bangla HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a8de975cd4cef8e910bba9fe3934f7b2.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/586679"
  },
  {
    "id": "167",
    "name": "Rupshi Bangla HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/95741a5cb93b862afdf3113b8af1c63b.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179282"
  },
  {
    "id": "168",
    "name": "BAN || ATN BANGLA UK",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ad0d07eb39edf385ed7baa96a2941c7e.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325489"
  },
  {
    "id": "169",
    "name": "BAN || GLOBAL TELEVIAION HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d6d5c6d6ce0339f538da80ebb2c8ffad.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325491"
  },
  {
    "id": "170",
    "name": "BAN || R BANGALA 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/df6b2ac2bcff079fbf9ea295e0df0642.png",
    "category": "IN - BANGLA - LIVE",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325492"
  },
  {
    "id": "171",
    "name": "CineMania_Gujarati_1_FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828482"
  },
  {
    "id": "172",
    "name": "CineMania_Gujarati_2_FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828483"
  },
  {
    "id": "173",
    "name": "CineMania_Gujarati_3_FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828484"
  },
  {
    "id": "174",
    "name": "CineMania_Gujarati_4_FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828485"
  },
  {
    "id": "175",
    "name": "Colors Gujarati Cinema HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b37ff9cb77d8da685d16f225cf2f8a89.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326113"
  },
  {
    "id": "176",
    "name": "Colors Gujarati FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/3c5dc100e88c7763960a1f017c20565a.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325120"
  },
  {
    "id": "177",
    "name": "IN-GUJ| News18 GUJRATI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6a074ea3771e8eea6fd95d046fa5947e.png",
    "category": "IN - Gujarati - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325116"
  },
  {
    "id": "178",
    "name": "IN-KAN | ZEE Kananda HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4e6ba2b2260fc4a5ad0519dbba53a77d.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043856"
  },
  {
    "id": "179",
    "name": "Colors Kananda Cinema HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/28bf811c70da8234403ee20ff9cd3cb0.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1043860"
  },
  {
    "id": "180",
    "name": "TV9 - Kannada",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/51b7a965213f84150d18227fdb678ad7.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324957"
  },
  {
    "id": "181",
    "name": "IN-KAN | POGO",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/000b031267a20586464e03e7aacc932a.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326114"
  },
  {
    "id": "182",
    "name": "IN Colors Kannada FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/aa7c796fa3258e76547192b8b2922d76.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324954"
  },
  {
    "id": "183",
    "name": "IN-KAN | SONIC NICK",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1c0d0a53028a547027cc7151dc73e3ad.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324953"
  },
  {
    "id": "184",
    "name": "IN-KAN | DISCOVERY KIDS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6019766cbeaaa005419e988038a63786.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324981"
  },
  {
    "id": "185",
    "name": "IN-KAN | ZEE Kananda News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/eef5d642640bc72fa981a11ee0eb3c81.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324782"
  },
  {
    "id": "186",
    "name": "Star Suvarna HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/8639563390f8081589597753093fb0ed.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/547560"
  },
  {
    "id": "187",
    "name": "UDAYA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7c8516fe26d5bef8bb6795c57c126d80.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324789"
  },
  {
    "id": "188",
    "name": "COLORS KANANDA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f1fce7e34805f70c4eacab04af1b05d3.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324976"
  },
  {
    "id": "189",
    "name": "IN-KAN | RAJ MUSIX KAN",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a2ed5050492f7ec9374649ce367b87b9.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324970"
  },
  {
    "id": "190",
    "name": "Public Music",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d595334d04319866e8360655b4da9fb3.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179330"
  },
  {
    "id": "191",
    "name": "IN-KN | RAJ MUSIX",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4315cfe4ebdbcd306ded264691c1c3fd.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324972"
  },
  {
    "id": "192",
    "name": "UDAYA MOVIES",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1b3657812f281e8d03575fd702a1d0d2.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179122"
  },
  {
    "id": "193",
    "name": "IN-KAN | Raj News Kananda",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/cfb1208ee37ddf3b49a5e4d91f501f31.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326378"
  },
  {
    "id": "194",
    "name": "Colors SUPER",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0f327cad8a2fc811847c6c062b82401b.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324975"
  },
  {
    "id": "195",
    "name": "Star Suvarna Plus",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/e6d73e820157e5da541db4fa65061e9c.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179123"
  },
  {
    "id": "196",
    "name": "Udaya HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7c8516fe26d5bef8bb6795c57c126d80.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179118"
  },
  {
    "id": "197",
    "name": "Udaya Comedy",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7c8516fe26d5bef8bb6795c57c126d80.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179121"
  },
  {
    "id": "198",
    "name": "Asianet Suvarna News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/44b42750e6abccdb1bdce54cdf66c0af.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324978"
  },
  {
    "id": "199",
    "name": "Udaya_music HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/aca4be527e5ac44e25188d09f7e442ba.png",
    "category": "IN - Kannada - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324977"
  },
  {
    "id": "200",
    "name": "IN-MAL | News18 kerala",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/fcd55321e1f382fc9ec128d3b7865a77.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/994426"
  },
  {
    "id": "201",
    "name": "IN: Asianet HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/404c61d39225f803f08ca39bd12f1c7c.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179360"
  },
  {
    "id": "202",
    "name": "IN-MAL | KOCHU TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/81e4163e10d4af79f3b388e78819df07.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179364"
  },
  {
    "id": "203",
    "name": "Surya HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/920a13bb9c4e70295b87a677a7a3f3e4.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179359"
  },
  {
    "id": "204",
    "name": "IN; Surya Movies HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/125f3b43cdf7ae68343d58bb0899685c.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324918"
  },
  {
    "id": "205",
    "name": "IN-MAL | SONIC NICK",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1c0d0a53028a547027cc7151dc73e3ad.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324919"
  },
  {
    "id": "206",
    "name": "IN-MAL | SHALOM TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9a4524e15a00fb0ee066c5143289febf.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179135"
  },
  {
    "id": "207",
    "name": "Mazhavil Man HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/13f618e329ea719f708af12b1cef3117.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324915"
  },
  {
    "id": "208",
    "name": "IN-MY | TS ASIANET FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5f68fc78fbadd629c955535afe3100e3.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179361"
  },
  {
    "id": "209",
    "name": "IN-MY | ASIANET MOVIES FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f711d2d2b494a80eb22d524fa7a4d47f.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179363"
  },
  {
    "id": "210",
    "name": "IN Flowers TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/311061cc1d3f88b76e04e947a1734498.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179365"
  },
  {
    "id": "211",
    "name": "Kairali We",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7a98402565d40bd88795db47c1149e4f.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/585648"
  },
  {
    "id": "212",
    "name": "Eagle One News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/05060b6bf2ce155e15ed166e22881da4.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324929"
  },
  {
    "id": "213",
    "name": "In-ml: Kairali Arabia HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/afff3a121fdfe0c8076448fb70b4334f.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179200"
  },
  {
    "id": "214",
    "name": "WE TV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/824bad905e5402fe2b1131b37e1a4094.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324936"
  },
  {
    "id": "215",
    "name": "Surya Music HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9c8f2169ab04f7ea0f01be24d9fcac90.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179368"
  },
  {
    "id": "216",
    "name": "Surya Comedy HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b8b64c8e21edf0638d00cd1645ce46bd.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179367"
  },
  {
    "id": "217",
    "name": "Harvest TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/9146c2c7d22bfecc6cd41f7caf670505.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179243"
  },
  {
    "id": "218",
    "name": "Manorama NEWS HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/65ad7e862a1ee2de8f33f9aba4fdf22a.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324924"
  },
  {
    "id": "219",
    "name": "RAJ NEWS HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/cfb1208ee37ddf3b49a5e4d91f501f31.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179370"
  },
  {
    "id": "220",
    "name": "ASIA India HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/fa593438485a449afe2c430a87f75899.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/692537"
  },
  {
    "id": "221",
    "name": "DarshanaTV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/3e7276be8f165c968fb550da167be4ea.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324945"
  },
  {
    "id": "222",
    "name": "Jaihind TV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/e8e3facc6b072cd2d3d0e3f68ca9ce19.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324913"
  },
  {
    "id": "223",
    "name": "RAJ Musix HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/bdfd5c8e8898e0fa530f392e073b4b79.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179369"
  },
  {
    "id": "224",
    "name": "Reporter TV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1f66b7294e39aa1bd9323fdd54cb390d.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111587"
  },
  {
    "id": "225",
    "name": "Kerala Vision HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7784be2d966eb5291d3b376cbbea57b1.png",
    "category": "IN - Malayalam - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/774851"
  },
  {
    "id": "226",
    "name": "CineMania Marathi 1 FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828500"
  },
  {
    "id": "227",
    "name": "CineMania Marathi 2 FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828501"
  },
  {
    "id": "228",
    "name": "CineMania Marathi 3 FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4dad2a389a132ef32e205e27e945bff8.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/828502"
  },
  {
    "id": "229",
    "name": "Colors Marathi FHD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/90651ccffc74a0c7bf457f96b83f2bb5.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324887"
  },
  {
    "id": "230",
    "name": "Colors Marathi HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/90651ccffc74a0c7bf457f96b83f2bb5.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179355"
  },
  {
    "id": "231",
    "name": "SONY Marathi SD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/75f494f6d7b9551e91fe9cf1fd5499f8.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324886"
  },
  {
    "id": "232",
    "name": "ZEE Marathi HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/70964419c6dd0b0ab0cbb461aa3d3d4e.png",
    "category": "IN -  Marathi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179354"
  },
  {
    "id": "233",
    "name": "PUN || DD PUNJABI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/31ddef8d15b62db600774254bb6e6a28.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/880827"
  },
  {
    "id": "234",
    "name": "PUN || CHARDIKLA TIME TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a68bcf564a64492969adb0003727cc92.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/880830"
  },
  {
    "id": "235",
    "name": "PUN || 9X TASHAN",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a0f437b8a68640946879dc7a045d1f09.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/880841"
  },
  {
    "id": "236",
    "name": "PUN || PTC PUNJABI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4b359361b3a9bf66a6ccb7542e4c231d.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325472"
  },
  {
    "id": "237",
    "name": "PUN || PTC NEWS 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/e6dfde7a30ce2e14e2974d4a6d178fb4.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325244"
  },
  {
    "id": "238",
    "name": "IN Balle Balle HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/25dc665e4032b4fc49b2b402e4a5c271.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325399"
  },
  {
    "id": "239",
    "name": "PUN || ABP SANJHA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1ffc104ccbb3a4d61ac0f78d2bad2b00.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325315"
  },
  {
    "id": "240",
    "name": "PUN || PUNJABI HITS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f680acb6e6dcdf72c976bf056f4ea20f.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325330"
  },
  {
    "id": "241",
    "name": "PUN || APNA PUNJAB",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/030c295b077384993434ae24dd089bcd.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179179"
  },
  {
    "id": "242",
    "name": "IN ETC Punjabi HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/dbcd3a891fcb7a179c27cd2361bdcd37.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324819"
  },
  {
    "id": "243",
    "name": "PUN || ZEE PUNJABI HARIYANA NEWS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/afa77cd691e878abc2609bc1d262de82.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325322"
  },
  {
    "id": "244",
    "name": "PUN || JUS ONE",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/db0a2f1de707827797e2ac70071cced4.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325314"
  },
  {
    "id": "245",
    "name": "PUN || PTC MUSIC HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b0bbc539aed1adaa0e2f4fddafd6d382.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325326"
  },
  {
    "id": "246",
    "name": "PUN || GAUDA PUNJAB",
    "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQDxIQFQ8QEBAPFRUQDxAPDxUPFREWFxUVFRUZHSogGBolGxUVITIhJSktMS4uFx8zODUuNyguLy4BCgoKDg0OGBAQGisfHR8tLS0tKy03LS8tLSsrLS0tLSstLy0vKy0tLS0tLS0rLSsrLS0tKy0tLS0tLS0tLS0tLf/AABEIAQMAwgMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABMEAACAQMCAwMHBA4HCAMAAAABAgMABBEFEgYhMQcTQRQiMlFhcYEXI1SRFTNCUlNicpOUobLR0tM0Q4KSoqSxCCRzdKOzwfEWJfD/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADcRAAIBAwEFBgQFBAIDAAAAAAABAgMEERIFEyExUQYyQWFxkRQiUoEVobHR4SMzQsFD8BZy8f/aAAwDAQACEQMRAD8A8v2e+u7g5eRwtSkGwqkgcChAWKkjIsUAsUAsUA2KAEioLDYoASKq0SmDt99MFsixUkD4oBUAxoBiKgkagGqCRUAqAVAAyZ8T8DiqOGfFllLAVXKnTVzGICgCAoRkICpIFQD4oQNihIqAVAMRQA4qCRiKEjYqADihIiKAagFQkbFANQkaoA1CRVAFQCoBUB01cxDgVJAYFCGFQgVAPQgVAMRQkAihYVANigBqCREUJGoBiKAHFQSNQkVADQkVQBiKAVANUEioBUB1ishhHoAloQwqFRUAqAVAKgFQkErQZBIoWGoBUAJqCRqEjGgBNQSNQkVADQkVQBjQCoBqgkVAdxSshgyJVoMh4oVGIoBUA+KAcCgGIoBYoBAUAzChJGaFhqARFACagkahIJFQBjQkahIiKAGhIqgDEUA1QSKgLisxpgEVBYEioJFigFigyLFCMiAoSI0IHIqQDUEjNQEbU",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179178"
  },
  {
    "id": "247",
    "name": "PUN || PRIME ASIA",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a46334eb655d595f56225bfc90972a9f.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325227"
  },
  {
    "id": "248",
    "name": "PUN || GLOBAL DESI",
    "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMTExMSFRIVGBUVFRUVFhUXFRUVFRIXFhUVFRUYHiggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHSUtNS0tLS0tMi0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUCBAYHAQj/xABTEAABAwEDBAkODAQFAwUAAAABAAIDBAUREgYhUdETMUFVYZGTsrMHIiQlM1RxcnOBkpSx0hQjMjRCUmJjZGWhwXSCtOEVFhcmU0XE8DaDo8LD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xABAEQABAwIBBA4IBgMBAQEAAAAAAQIDBBESBSFSkRMUIyQxMjNBUVNhcaGxFSIlVGJjgfAGNGRyweEWQpJDNXP/2gAMAwEAAhEDEQA/APG7EN08Xjt9qw1HJO7jJFx0Ozhf2XL5NntK4zk3u3vU3f8A0XuKyV3YEg+07pVtNTfSd38GJeSXvLKod2RT+K/2BazU3J5lXjIRQPN9Zm3XdGruTkvvnIT/AGK21XdgQ/y/utmH824xScihyy6RqBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQF7YXcz4x5rUBoWJ84i8dvtWGo5J3cXi46HbQs7Lk8kznFcVy73b3qb6Jui9xVyt7Al8Z3TLaau+m938GJeRUtKlnZFP4r/YFqtXcnmVU9ZpFA3PW+F3Rq7l5L75yqf7lZare18J8T91swrvtxik5FDk11DUCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgL2wu5nxjzWoDRsH5xD47fasFTyTu4yRcdDvYGdmy+SZzi",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325329"
  },
  {
    "id": "249",
    "name": "PUN || JUS PUNJABI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5f240f32399451cce5b673bc9fae1041.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179174"
  },
  {
    "id": "250",
    "name": "PUN || PITAARA HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4f4168f4160f629ff4cdf85b02abc554.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325325"
  },
  {
    "id": "251",
    "name": "PUN || PTC PUNJABI GOLD HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ada5d93e87f001f31c5f0e38b7a67e95.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325397"
  },
  {
    "id": "252",
    "name": "PUN || PTC SIMRAN 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/bcec97489d528d58c4e210afe9254d03.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325260"
  },
  {
    "id": "253",
    "name": "PUN || PTC CHAKDE 4K",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f39990ffd45c5d49514645772b2761d9.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325278"
  },
  {
    "id": "254",
    "name": "PUN || 5AAB TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/acb0790aa71f82b8716baa41ec041b4e.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179171"
  },
  {
    "id": "255",
    "name": "PUN || NAMDHARI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/af4bb78a4e6f24b428eb0bfbdfa60267.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179172"
  },
  {
    "id": "256",
    "name": "PUN || STEELBIRD MUSIC",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a3d40c523ca719bf7869371781238d5e.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179176"
  },
  {
    "id": "257",
    "name": "PUN || MH ONE SHRADDHA",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/45f90b15f066f9bc8d59bf73bc41f85a.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179173"
  },
  {
    "id": "258",
    "name": "PUN || MH1 DIL SE HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/07dbd0ef615b37c254ec76749e4c814f.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179177"
  },
  {
    "id": "259",
    "name": "PUN || BALLE BALLE",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/25dc665e4032b4fc49b2b402e4a5c271.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325482"
  },
  {
    "id": "260",
    "name": "PUN || TV Punjab",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/925eb08cb4f4099c251e765621948f95.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325279"
  },
  {
    "id": "261",
    "name": "PUN || Charkdila Gubrani",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/1a87733ce3e3bdc9c6ae783dfedaa8b8.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/325400"
  },
  {
    "id": "262",
    "name": "India News Punjab",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6e4b00b82f3318683660d2f49155ccc0.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324815"
  },
  {
    "id": "263",
    "name": "IN-PUN: GLOBAL PUNJAB HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a4a5c288bbcc1a96012fce396d462125.png",
    "category": "IN - Punjabi - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324820"
  },
  {
    "id": "264",
    "name": "IN-TM | D2H D TAMIL",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0f6a4409e09f37f1ca536459cad23678.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324760"
  },
  {
    "id": "265",
    "name": "IN-TM | D2H NAT GEO FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/cdfc71bd179f433e34864aa1d5b5b688.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324727"
  },
  {
    "id": "266",
    "name": "IN-TM | D2H NAT GEO WILD FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/cdfc71bd179f433e34864aa1d5b5b688.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324761"
  },
  {
    "id": "267",
    "name": "IN-TM | D2H DISCOVERY FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/584657afd2abd0becf0d80da0c8e2e5f.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324737"
  },
  {
    "id": "268",
    "name": "IN-TM | TS HISTORY TV18 FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c138cfbaf390e69b84cd31d224dd5e7e.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324736"
  },
  {
    "id": "269",
    "name": "IN-TM | D2H SONY BBC EARTH FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0e58e330ad32a26c6c51fbcb68b2f280.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324726"
  },
  {
    "id": "270",
    "name": "IN-TM | D2H ANIMAL PLANET FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5f4cf432adc147fa56507b34be4b4cda.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324754"
  },
  {
    "id": "271",
    "name": "IN-TM | D2H CARTOON NETWORK",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b827827b80b13904f6ca3b46f44ee8f4.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324757"
  },
  {
    "id": "272",
    "name": "IN-TM | D2H DISNEY CHANNEL",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/7b38e4f12ac8a22b416f2c15029921cb.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324769"
  },
  {
    "id": "273",
    "name": "IN-TM | D2H DISCOVERY KIDS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d640e4f65b8fef1077ab77d037409d4d.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324775"
  },
  {
    "id": "274",
    "name": "IN-TM | D2H POGO",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c6c3ed7455f000f1988f68575dcf59da.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179332"
  },
  {
    "id": "275",
    "name": "IN-TM | D2H NICK",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6a8784ce34c59a4e891e7274587857ae.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324724"
  },
  {
    "id": "276",
    "name": "IN-TM | D2H SONIC",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/a80c5c214c380fe6062591e42049da1b.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324795"
  },
  {
    "id": "277",
    "name": "IN-TM | TS DISNEY JUNIOR",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/72d1e47d4f1b2540c84f33f6df7ce614.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324714"
  },
  {
    "id": "278",
    "name": "IN-TAM | TS HUNGAMA TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/eb956ec4772e3ca67ed036f83c447e87.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1036530"
  },
  {
    "id": "279",
    "name": "IN-TM | D2H SONY YAY",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0e58e330ad32a26c6c51fbcb68b2f280.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1036533"
  },
  {
    "id": "280",
    "name": "STAR Vijay HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/30d144db74557f7d873fd061364e139e.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179321"
  },
  {
    "id": "281",
    "name": "STAR Vijay Super HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/30d144db74557f7d873fd061364e139e.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179325"
  },
  {
    "id": "282",
    "name": "SUN TV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/321ab420c622c5a9d5bc282d581c45fa.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/111931"
  },
  {
    "id": "283",
    "name": "RAJ Musix HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/10d89133480e6e96b276381dcfc5a56f.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179329"
  },
  {
    "id": "284",
    "name": "FD | DD Tamil",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/0f6a4409e09f37f1ca536459cad23678.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/992074"
  },
  {
    "id": "285",
    "name": "Kalaignar Chithiram",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f826d62ad130b47b62606dee123c9894.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/911306"
  },
  {
    "id": "286",
    "name": "IN-TAM | Colors Tamil HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/d12df0a7e2506c8f0b57b540e0bdf962.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/913755"
  },
  {
    "id": "287",
    "name": "Sirippoli TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/728be68a0a0a8b3132a0f87919591571.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/870468"
  },
  {
    "id": "288",
    "name": "IN-TAM | Polimer News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4ae645965c28e8ca2050ea3efa35c5b2.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/796207"
  },
  {
    "id": "289",
    "name": "IN-TAM | Polimer News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/4ae645965c28e8ca2050ea3efa35c5b2.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324802"
  },
  {
    "id": "290",
    "name": "Polimer TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/5e8714df0c198484cc1eb27b31790d47.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324798"
  },
  {
    "id": "291",
    "name": "Zee Thirai HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/70a0939f567bbb51e80dd65de021d9fc.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179336"
  },
  {
    "id": "292",
    "name": "KALAIGNAR TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/62f3348fe64647a4393ae6808e00bbf2.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324741"
  },
  {
    "id": "293",
    "name": "IN-TM | TS COLORS HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/6ecc6987b5469c68bb4d4322e42283a5.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/484347"
  },
  {
    "id": "294",
    "name": "IN-TM | TS ZEE TAMIL FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/58376d950a960a758137954893b04af8.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324776"
  },
  {
    "id": "295",
    "name": "Captain TV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/3f3e9193bcda530b0c0f94a58b93b672.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324758"
  },
  {
    "id": "296",
    "name": "IN-TM |  STAR VIJAY FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/30d144db74557f7d873fd061364e139e.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324734"
  },
  {
    "id": "297",
    "name": "IN-TM | D2H SUN TV FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/321ab420c622c5a9d5bc282d581c45fa.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324808"
  },
  {
    "id": "298",
    "name": "IN-TM | TS KTV FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/418602a2994d6758c93e3862a6319306.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179324"
  },
  {
    "id": "299",
    "name": "IN-TM | KALAIGNAR Chitram",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/364885d10b0fc09da1bf1c1203ec9e50.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324709"
  },
  {
    "id": "300",
    "name": "IN-TM | TS JAYA TV HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/839dd74f9d58faaeede1e93a5d9a454e.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324796"
  },
  {
    "id": "301",
    "name": "IN-TM | TS SUN LIFE HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/ddd648dfff9b0e797521f796cee66758.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324797"
  },
  {
    "id": "302",
    "name": "IN-TM | TS VIJAY SUPER FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/f878c7845c037c4d122775e9f6b46e73.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324785"
  },
  {
    "id": "303",
    "name": "IN-TM | TS JAYA PLUS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/804e84336672f40a6f16fc7efd5f5fa0.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324751"
  },
  {
    "id": "304",
    "name": "IN-TM | TS JAYA MAX",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/8e35d1bba28be84e5b835693b06e9c8b.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324716"
  },
  {
    "id": "305",
    "name": "IN-TM | D2H RAJ TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/bb5aba9ee0891af89353709669e00282.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324745"
  },
  {
    "id": "306",
    "name": "IN-TM | D2H MURASU TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/922472ee56edf6d932275871c1a589de.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324718"
  },
  {
    "id": "307",
    "name": "IN-TM | D2H SUN MUSIC FHD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/2bf7423ba02bc17c2f0b52f41da2f987.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/326421"
  },
  {
    "id": "308",
    "name": "IN-TM | D2H SIRIPPOLI",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/728be68a0a0a8b3132a0f87919591571.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/538628"
  },
  {
    "id": "309",
    "name": "IN-TM | D2H ADITHYA TV",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/c9297616b74281f7e0c42406d23ecf7f.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324742"
  },
  {
    "id": "310",
    "name": "KTV HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/aeea2cd6d09250c7106faef3ee3b10c2.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179322"
  },
  {
    "id": "311",
    "name": "IN-TM | TS SUN NEWS",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b3093692a82edfb0258cfbe4ed8251eb.png",
    "category": "IN - Tamil - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324730"
  },
  {
    "id": "312",
    "name": "ABN Andhra Jyothi HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/b1ddba76a4de499b9bc77dd3bbe57ed1.png",
    "category": "IN - Telugu - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324875"
  },
  {
    "id": "313",
    "name": "Gemini Movies HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/29dc47adf5742d7007188c4e1fa57705.png",
    "category": "IN - Telugu - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179312"
  },
  {
    "id": "314",
    "name": "ZEE Telugu HD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/de7c0cef48df7a606a39fb6d1ebda6cf.png",
    "category": "IN - Telugu - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/547685"
  },
  {
    "id": "315",
    "name": "ZEE Telugu SD (IN)",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/de7c0cef48df7a606a39fb6d1ebda6cf.png",
    "category": "IN - Telugu - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/324831"
  },
  {
    "id": "316",
    "name": "IN-npl: Ntv Plus",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/388c47bb51248ba1f995dc2d29198729.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756698"
  },
  {
    "id": "317",
    "name": "IN-npl: Avenues Khabar",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/8ed90b5e650adf135f7ef2834df72f80.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756690"
  },
  {
    "id": "318",
    "name": "IN-npl: NTV News",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/628c149e63773e1a44321fad23b86a98.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756686"
  },
  {
    "id": "319",
    "name": "IN-npl: Ntv Itherai",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/156e3899f485764a91235863d6b463c4.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756696"
  },
  {
    "id": "320",
    "name": "IN-npl: News 24",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/87c0a01e562c60913caeb041ebdda89a.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756692"
  },
  {
    "id": "321",
    "name": "IN-npl: Kantipur HD Cineplex",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/50c44b241e78b6d5709dbc903aee175a.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/756687"
  },
  {
    "id": "322",
    "name": "IN-npl: Kantipur HD",
    "logo": "https://img-cdn.curl.pk/channels_icon_api/50c44b241e78b6d5709dbc903aee175a.png",
    "category": "IN - Nepal - Live",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179300"
  },
  {
    "name": "PK Geo Super HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/83500846111.png",
    "category": "VIP - CRICKET LIVE",
    "id": "323",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/48603"
  },
  {
    "name": "PK Ptv Sports HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/40360052271.png",
    "category": "VIP - CRICKET LIVE",
    "id": "324",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/48601"
  },
  {
    "name": "PK A Sporte HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/81217520581.png",
    "category": "VIP - CRICKET LIVE",
    "id": "325",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/588437"
  },
  {
    "name": "PAK: GEO TV HD Low Net",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/29807549511.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "326",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179013"
  },
  {
    "name": "PAK: GEO ENT 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/29807549511.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "327",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179044"
  },
  {
    "name": "PAK: GEO KAHANI",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/30756937981.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "328",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179009"
  },
  {
    "name": "PAK: BOL ENT HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/82644269221.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "329",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179017"
  },
  {
    "name": "PAK: ARY ZINDAGI SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/81242806421.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "330",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/612617"
  },
  {
    "name": "PAK: ARY DIGITAL HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/20069142921.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "331",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179005"
  },
  {
    "name": "PAK: ARY DIGITAL 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/20069142921.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "332",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179056"
  },
  {
    "name": "PAK: HUM TV  HD Low net",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/87794587421.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "333",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/539756"
  },
  {
    "name": "PAK:HUM ENT 4K",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/87794587421.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "334",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179041"
  },
  {
    "name": "PAK: HUM SITARAY HD",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0b8jWk8uUkPXi-X9kMnaFMxi7tGK42HeHw&s",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "335",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179068"
  },
  {
    "name": "PAK: ARY QTV HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/7372303070.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "336",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179035"
  },
  {
    "name": "PAK:  Madni TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/60342265021.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "337",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179046"
  },
  {
    "name": "PAK: Express Ent TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/84581197341.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "338",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179000"
  },
  {
    "name": "PAK: AAJ Entertainment HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/81904331201.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "339",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179037"
  },
  {
    "name": "PAK: Green Entertainment HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/14aa45b2aa12f864d5cd5064aa1e7ecc.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "340",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/703673"
  },
  {
    "name": "PAK: Discover Pakistan HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/2149047410.jpg",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "341",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179072"
  },
  {
    "name": "PAK: Aruj Life HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/425129_263072120440470_2011363434_n.jpg",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "342",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179070"
  },
  {
    "name": "PAK: TV ONE * HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/98063829261.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "343",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179042"
  },
  {
    "name": "PAK: A Plus TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/9028e6e375757345e3b3988ec225749e.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "344",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/636465"
  },
  {
    "name": "PAK: APNA TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/29969107061.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "345",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179055"
  },
  {
    "name": "PAK: KASHISH HD",
    "logo": "https://www.lyngsat.com/logo/tv/kk/kashish-pk.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "346",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179059"
  },
  {
    "name": "PAK: Sindh HD TV",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/45009263601.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "347",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179062"
  },
  {
    "name": "PAK: KTN Entertainment TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/48361050241.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "348",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179061"
  },
  {
    "name": "PAK: Mehran TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/b3b667c1c6440a137fbbc3bd29cf20ae.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "349",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/690354"
  },
  {
    "name": "PAK: Hum Masala HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/149097_140043386048538_1513117_n.jpg",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "350",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179045"
  },
  {
    "name": "Pak: LTN Family",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/6c9c76463335b230a837ad73c0653174.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "351",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/889346"
  },
  {
    "name": "Pak: Aan TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/4c3f4871ed79e924882ac064ae6ade84.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "352",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/889353"
  },
  {
    "name": "PAK: SAB TV PAK HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/d89065f4a87eff6bff91cf48171cdca2.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "353",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/639760"
  },
  {
    "name": "PAK: Kay-2 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/25801881791.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "354",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179019"
  },
  {
    "name": "PAK: AVT Khyber HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/71844654641.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "355",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/592249"
  },
  {
    "name": "PAK: Paigham URDU HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/95713415691.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "356",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179081"
  },
  {
    "name": "PAK: ATV SD TV",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/18374288031.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "357",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179053"
  },
  {
    "name": "PAK: ARY Musik FHD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/0c516942611e43553cde4fc57d8ef6c9.png",
    "category": "PK - ENTERTAINMENT - LIVE",
    "id": "358",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/612621"
  },
  {
    "name": "PAK: ARY NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/84661142241.png",
    "category": "PK -  NEWS - LIVE",
    "id": "359",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/612628"
  },
  {
    "name": "PAK: GEO NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/51607676501.png",
    "category": "PK -  NEWS - LIVE",
    "id": "360",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179020"
  },
  {
    "name": "PAK: GEO NEWS SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/51607676501.png",
    "category": "PK -  NEWS - LIVE",
    "id": "361",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/639413"
  },
  {
    "name": "PAK: GEO TEZZ HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/32313745_1657644617675777_5323975266085634048_n.jpg",
    "category": "PK -  NEWS - LIVE",
    "id": "362",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179048"
  },
  {
    "name": "PAK: BOL NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/60039262291.png",
    "category": "PK -  NEWS - LIVE",
    "id": "363",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179023"
  },
  {
    "name": "PAK: Samaa NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/47427545721.png",
    "category": "PK -  NEWS - LIVE",
    "id": "364",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179025"
  },
  {
    "name": "PAK: Hum News HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/19789896471.png",
    "category": "PK -  NEWS - LIVE",
    "id": "365",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179024"
  },
  {
    "name": "PAK: 24 NEWS HD TV",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/58655444341.png",
    "category": "PK -  NEWS - LIVE",
    "id": "366",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179057"
  },
  {
    "name": "PAK: 92 NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/41616518801.png",
    "category": "PK -  NEWS - LIVE",
    "id": "367",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/404384"
  },
  {
    "name": "PAK: AAJ NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/45159678421.png",
    "category": "PK -  NEWS - LIVE",
    "id": "368",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179029"
  },
  {
    "name": "PAK: ABB TAK PK HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/55888903721.png",
    "category": "PK -  NEWS - LIVE",
    "id": "369",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179006"
  },
  {
    "name": "PAK: Express NEWS SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/64919560651.png",
    "category": "PK -  NEWS - LIVE",
    "id": "370",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/178999"
  },
  {
    "name": "PAK: GNN NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/46805676431.png",
    "category": "PK -  NEWS - LIVE",
    "id": "371",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179026"
  },
  {
    "name": "PAK: KTN News",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/5112f24f234c70ec61fc71bcde80d418.png",
    "category": "PK -  NEWS - LIVE",
    "id": "372",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/714525"
  },
  {
    "name": "PAK: Sindh NEWS TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/19254676311.png",
    "category": "PK -  NEWS - LIVE",
    "id": "373",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/114004"
  },
  {
    "name": "PAK: PTV News HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/59741035991.png",
    "category": "PK -  NEWS - LIVE",
    "id": "374",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179039"
  },
  {
    "name": "PAK: PTV NATIONALY",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxADadRXpqr0X1tscK5_T__bnj384sAFaDw&s",
    "category": "PK -  NEWS - LIVE",
    "id": "375",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179038"
  },
  {
    "name": "PAK: Dawn News TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/10487829951.png",
    "category": "PK -  NEWS - LIVE",
    "id": "376",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179064"
  },
  {
    "name": "PAK: NEWS ONE FHD",
    "logo": "https://www.lyngsat.com/logo/tv/nn/news-one-pk.png",
    "category": "PK -  NEWS - LIVE",
    "id": "377",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179079"
  },
  {
    "name": "PAK: Dunya NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/72535231701.png",
    "category": "PK -  NEWS - LIVE",
    "id": "378",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179018"
  },
  {
    "name": "PAK: Khyber NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/1287914159.jpg",
    "category": "PK -  NEWS - LIVE",
    "id": "379",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179030"
  },
  {
    "name": "PAK: Lahore NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/18445239711.png",
    "category": "PK -  NEWS - LIVE",
    "id": "380",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/466101"
  },
  {
    "name": "PAK: Lahore Rang HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/66958911791.png",
    "category": "PK -  NEWS - LIVE",
    "id": "381",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179052"
  },
  {
    "name": "PAK: NEO NEWS TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/c931bbd407a694a99edfde03afd66a58.png",
    "category": "PK -  NEWS - LIVE",
    "id": "382",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179051"
  },
  {
    "name": "PAK: NEWS ONE HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/35351829811.png",
    "category": "PK -  NEWS - LIVE",
    "id": "383",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179040"
  },
  {
    "name": "PAK: Public NEWS HD TV",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/16014643231.png",
    "category": "PK -  NEWS - LIVE",
    "id": "384",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179022"
  },
  {
    "name": "PAK: ROZE NEWS TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/74820870381.png",
    "category": "PK -  NEWS - LIVE",
    "id": "385",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179065"
  },
  {
    "name": "PAK: SUNO TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon_api/cca6588ce8ba65b3e07626d0d07c4c7f.png",
    "category": "PK -  NEWS - LIVE",
    "id": "386",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/689908"
  },
  {
    "name": "PAK: ROHI TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/79036086571.png",
    "category": "PK -  NEWS - LIVE",
    "id": "387",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179067"
  },
  {
    "name": "PAK: Vsh news",
    "logo": "https://th.bing.com/th/id/R.8cfb65d47af8ca6b5ecda0ad57532804?rik=PIK%2btWmYp4AJLA&pid=ImgRaw&r=0",
    "category": "PK -  NEWS - LIVE",
    "id": "388",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/581906"
  },
  {
    "name": "PAK: CITY 42 NEWS HD",
    "logo": "http://img-cdn.curl.pk:8880/chimg/city42.jpg",
    "category": "PK -  NEWS - LIVE",
    "id": "389",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179043"
  },
  {
    "name": "PK: GEO SUPER HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/33467934881.png",
    "category": "PK - SPORTS - LIVE",
    "id": "390",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179012"
  },
  {
    "name": "PK: TEN SPORTS SD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/46690167981.png",
    "category": "PK - SPORTS - LIVE",
    "id": "391",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1047604"
  },
  {
    "name": "PK: TEN SPORTS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/46690167981.png",
    "category": "PK - SPORTS - LIVE",
    "id": "392",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/179011"
  },
  {
    "name": "PK: PTV SPORTS 720",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/40360052271.png",
    "category": "PK - SPORTS - LIVE",
    "id": "393",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/1047376"
  },
  {
    "name": "PK: PTV SPORTS FHD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/69913911961.png",
    "category": "PK - SPORTS - LIVE",
    "id": "394",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/639414"
  },
  {
    "name": "PK: A SPORTS HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/81863626311.png",
    "category": "PK - SPORTS - LIVE",
    "id": "395",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/498899"
  },
  {
    "name": "PK: HOTI SI Zindagi HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "396",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818827"
  },
  {
    "name": "PK: HUM TV Telefilm HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "397",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818814"
  },
  {
    "name": "PK: ISHQ Tamasha HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "398",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818815"
  },
  {
    "name": "PK: Khamoshi HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "399",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818816"
  },
  {
    "name": "PK: MAAT HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "400",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818817"
  },
  {
    "name": "PK: MATA E JAAN HAI TU HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "401",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818818"
  },
  {
    "name": "PK: Parchayee HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "402",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818819"
  },
  {
    "name": "PK: Parizaad HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "403",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818820"
  },
  {
    "name": "PK: QAID E Tanhai HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "404",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818821"
  },
  {
    "name": "PK: Sanam HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "405",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818822"
  },
  {
    "name": "PK: SANG E MAR MAR HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "406",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818823"
  },
  {
    "name": "PK: SUNO Chanda HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "407",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818825"
  },
  {
    "name": "PK: WOH AIK PAL HUM TV HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "408",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818826"
  },
  {
    "name": "PK: HI TECH Pashto Films HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "409",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818836"
  },
  {
    "name": "PK: Hitech Stage Drama HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "410",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818837"
  },
  {
    "name": "PK: Moammar RANA Collection HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "411",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818838"
  },
  {
    "name": "PK: Movies 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "412",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818830"
  },
  {
    "name": "PK: Munawar Zarif Cinema 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "413",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818832"
  },
  {
    "name": "PK: Nadeem AND Javed Sheikh Movies HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "414",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818839"
  },
  {
    "name": "PK: NAnna AND ALI EJAZ Movies HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "415",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818829"
  },
  {
    "name": "PK: Pashto Movies VOL 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "416",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818841"
  },
  {
    "name": "PK: PK: Films Collection HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "417",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818840"
  },
  {
    "name": "PK: PK: Latest HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "418",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818833"
  },
  {
    "name": "PK: Pothwar GOLD Videos HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "419",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818842"
  },
  {
    "name": "PK: Pothwar PLU Drama Video HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "420",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818848"
  },
  {
    "name": "PK: Pothwari Drama 2021 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "421",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818843"
  },
  {
    "name": "PK: Pothwari Mithu Series HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "422",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818844"
  },
  {
    "name": "PK: Pothwari Ramzani Series 2020 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "423",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818845"
  },
  {
    "name": "PK: Pothwari Ramzani Series 2022 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "424",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818846"
  },
  {
    "name": "PK: Punjabi Classic Cinema 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "425",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818834"
  },
  {
    "name": "PK: RAngeela AND Munawar Zareef Movies HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "426",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818849"
  },
  {
    "name": "PK: SHaan AND Saima Movies HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "427",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818850"
  },
  {
    "name": "PK: Stage Drama HD 1",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "428",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818831"
  },
  {
    "name": "PK: Stage Shows V1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "429",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818847"
  },
  {
    "name": "PK: STage Shows VOL 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "430",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818851"
  },
  {
    "name": "PK: URDU Cinema 1 HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Movies - Exclusive",
    "id": "431",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818835"
  },
  {
    "name": "PK: Abrar UL HAQ Songs HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "432",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818852"
  },
  {
    "name": "PK: AIMA BAIG HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "433",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818853"
  },
  {
    "name": "PK: Akhlaq Ahmed HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "434",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818854"
  },
  {
    "name": "PK: ALI Azmat HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "435",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818855"
  },
  {
    "name": "PK: ALI Fazar HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "436",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818856"
  },
  {
    "name": "PK: ARIF Lohar HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "437",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818857"
  },
  {
    "name": "PK: ATIF Aslam HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "438",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818858"
  },
  {
    "name": "PK: Bilal Saeed HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "439",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818859"
  },
  {
    "name": "PK: Fakhir Mehmood HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "440",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818860"
  },
  {
    "name": "PK: Falak Shabir HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "441",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818861"
  },
  {
    "name": "PK: Farhan Saeed HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "442",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818862"
  },
  {
    "name": "PK: Ghulam Abbas HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "443",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818863"
  },
  {
    "name": "PK: Gohar Mumtaz HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "444",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818864"
  },
  {
    "name": "PK: GUL Panva HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "445",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818865"
  },
  {
    "name": "PK: Hadiqa Kiani HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "446",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818866"
  },
  {
    "name": "PK: Humaira Channa HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "447",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818867"
  },
  {
    "name": "PK: Imran KHAN HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "448",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818868"
  },
  {
    "name": "PK: Inayat Hussain Bhatti HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "449",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818869"
  },
  {
    "name": "PK: Komal Rizvi HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "450",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818870"
  },
  {
    "name": "PK: MIX HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "451",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818871"
  },
  {
    "name": "PK: Momina Mustehsan HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "452",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818872"
  },
  {
    "name": "PK: Mustafa Zahid HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "453",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818873"
  },
  {
    "name": "PK: Nabeel Shoukat HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "454",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818874"
  },
  {
    "name": "PK: Naseebo LAL HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "455",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818875"
  },
  {
    "name": "PK: Nayyara NOOR HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "456",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818876"
  },
  {
    "name": "PK: NOOR Jehan HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "457",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818877"
  },
  {
    "name": "PK: Nusrat Fateh ALI KHAN HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "458",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818878"
  },
  {
    "name": "PK: Qurat UL AIN Balouch HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "459",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818879"
  },
  {
    "name": "PK: Rahat Fateha ALI KHAN HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "460",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818880"
  },
  {
    "name": "PK: RUNA Laila HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "461",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818882"
  },
  {
    "name": "PK: Singer | Mustafa Zahid HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "462",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818883"
  },
  {
    "name": "PK: Singer | Rahat Fateh ALI KHAN HD",
    "logo": "http://img-cdn.curl.pk:8880/channels_icon/54089973711.png",
    "category": "PK - 24x7 Singers - Exclusive",
    "id": "463",
    "url": "http://xx96.uk:8880/{USERNAME}/{PASSWORD}/818884"
  },
  {
    "name": "PK: Nadia (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q99hHAUm14y7wmWdHs8uaLGuXNO.jpg",
    "category": "PK - Pakistan Movies",
    "id": "464",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/910504.mp4"
  },
  {
    "name": "PK: Tich Button HD (2022)",
    "logo": "https://m.media-amazon.com/images/M/MV5BYzUyNGJmY2EtMDQ0Zi00MGZjLWE5YTQtMTE5YTc2MzE1NzY2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "465",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/729353.mkv"
  },
  {
    "name": "PK: Goga Lahoryia  (2023)",
    "logo": "https://c.saavncdn.com/747/Goga-Lahoriya-Pakistani-Film-Soundtrack--Punjabi-2022-20220413070659-500x500.jpg",
    "category": "PK - Pakistan Movies",
    "id": "466",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/715073.mp4"
  },
  {
    "name": "PK: Shotcut (2022) [HDRip]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cC1yGTZ2eZi9D6meweyqSyouNEN.jpg",
    "category": "PK - Pakistan Movies",
    "id": "467",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/714929.mkv"
  },
  {
    "name": "PK: Fakhroo Ki Dulhaniya (2023)",
    "logo": "https://i.ytimg.com/vi/_PvcU2RdvfA/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "468",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713426.mp4"
  },
  {
    "name": "PK: Jimmy Ki Ayegi Baraat (2023)",
    "logo": "https://s1.dmcdn.net/v/V3M181adoAJnHQBz6/x720",
    "category": "PK - Pakistan Movies",
    "id": "469",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713424.mp4"
  },
  {
    "name": "PK: Good Morning Sasu Maa (2023)",
    "logo": "https://i.ytimg.com/vi/kvvekrUT884/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "470",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713422.mp4"
  },
  {
    "name": "PK: Mera Dil Meri Marzi (2023)",
    "logo": "https://i.ytimg.com/vi/-M7WyKEXs00/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "471",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713420.mp4"
  },
  {
    "name": "PK: Khul Gayee Qismat (2023)",
    "logo": "https://i.ytimg.com/vi/klZNkanp5bk/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "472",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713418.mp4"
  },
  {
    "name": "PK: Yeh Tou 2 Much Hogaya",
    "logo": "https://i.ytimg.com/vi/ImKQKtyd1vQ/sddefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "473",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713417.mp4"
  },
  {
    "name": "PK: Tamak Toiyan (2023)",
    "logo": "https://img.wegreenkw.com/sites/3/2023/06/Tamak-Toiyaan-drama-cast-release-date-2023.webp",
    "category": "PK - Pakistan Movies",
    "id": "474",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713415.mp4"
  },
  {
    "name": "PK: Daku Bangaya Gentleman",
    "logo": "https://s1.dmcdn.net/v/V3T001ae6Gs3OuNjM/x240",
    "category": "PK - Pakistan Movies",
    "id": "475",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/713414.mp4"
  },
  {
    "name": "PK: Arshad Sharif  From the Eyes of the Closest Exclusive Documentary  Part 2",
    "logo": "https://i.ytimg.com/vi/eLsI6U36fik/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "476",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/706837.mp4"
  },
  {
    "name": "PK: Arshad Sharif  From the Eyes of the Closest Exclusive Documentary  Part 1",
    "logo": "https://i.ytimg.com/vi/eLsI6U36fik/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "477",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/706836.mp4"
  },
  {
    "name": "Quaid-e-Azam Zindabad (2022) [HDRip]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dqgzgpB9nynNEjY5445EhMG8zn9.jpg",
    "category": "PK - Pakistan Movies",
    "id": "478",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/689992.mkv"
  },
  {
    "name": "PK: Tich Button (2022) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nCjXDAXctQILohqy0Isyc6ByX46.jpg",
    "category": "PK - Pakistan Movies",
    "id": "479",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/684260.mkv"
  },
  {
    "name": "PK :Dum Mastam (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eOms0k2mGdckIAqNmBUvnL5YOVv.jpg",
    "category": "PK - Pakistan Movies",
    "id": "480",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/652214.mkv"
  },
  {
    "name": "PK: Ghabrana Nahi Hai (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/owSO7UBvKX2ct0jGhSXDLuBvhQI.jpg",
    "category": "PK - Pakistan Movies",
    "id": "481",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/643473.mkv"
  },
  {
    "name": "PK: The Legend of Maula Jatt (2022) [HDCAM]",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/njmYtTRQ9hY35T9mmwrP7NnsNS6.jpg",
    "category": "PK - Pakistan Movies",
    "id": "482",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/638549.mkv"
  },
  {
    "name": "PK: London Nahi Jaunga (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/29B2iZHJnc5zgfciBPY9cUWCmYY.jpg",
    "category": "PK - Pakistan Movies",
    "id": "483",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/638515.mkv"
  },
  {
    "name": "PK: Comedy Drama Order Disorder",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrJtNJ8GjnQNlDust27KZMrVPgD_EnRBFLEXJXy4wI0MaKW0-1GfYgwRrnEtLbkg60DI&usqp=CAU",
    "category": "PK - Pakistan Movies",
    "id": "484",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/601337.mp4"
  },
  {
    "name": "PK: Ruposh (2022)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8KeWjiF0HXGAjvCgYgG1O5pzKpt.jpg",
    "category": "PK - Pakistan Movies",
    "id": "485",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/601336.mp4"
  },
  {
    "name": "AR: PK.COM.CN",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/pYuWLc6FFsIBNIAI8ZyxmDndQC9.jpg",
    "category": "AR - Asian Films [أفلام أسيوية]",
    "id": "486",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/568173.mkv"
  },
  {
    "name": "PK: DUSHMAN 2020",
    "logo": "https://i.ytimg.com/vi/M73tebuMf40/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "487",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542279.mkv"
  },
  {
    "name": "PK: Pari (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kyWno4o8R9rsp1t52BZ6RjskpQv.jpg",
    "category": "PK - Pakistan Movies",
    "id": "488",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542277.mkv"
  },
  {
    "name": "PK: Lo Pakray Gaye (2020)",
    "logo": "https://dailyiflix.com/uploads/video_thumb/1239.jpg",
    "category": "PK - Pakistan Movies",
    "id": "489",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542272.mkv"
  },
  {
    "name": "PK: Karachi Division (2021)",
    "logo": "https://m.media-amazon.com/images/M/MV5BZDgzMjEyOGEtNDUyZi00NmQzLTlkODEtNDBkN2NlNGI2YjIyXkEyXkFqcGdeQXVyODg1MTc3MTM@._V1_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "490",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542268.mkv"
  },
  {
    "name": "PK: Bhootni Kay",
    "logo": "https://images-na.ssl-images-amazon.com/images/I/61Z96inJMZL._RI_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "491",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542267.mkv"
  },
  {
    "name": "PK: Maya The Myth (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gacgMUb51fyBTVc7WCSTkhFlz37.jpg",
    "category": "PK - Pakistan Movies",
    "id": "492",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542266.mkv"
  },
  {
    "name": "PK: The Raaz By Hareem Shah (2021)",
    "logo": "https://nexttvc.com/wp-content/uploads/2021/03/Raaz-Poster-1-706x1024.jpg",
    "category": "PK - Pakistan Movies",
    "id": "493",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542263.mkv"
  },
  {
    "name": "PK: Teri Meri Kahani (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dWiJi6s3Qy7lzjCMTzGbnCua4Cs.jpg",
    "category": "PK - Pakistan Movies",
    "id": "494",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542260.mkv"
  },
  {
    "name": "PK: Teray Pyar Mai (2020)",
    "logo": "https://m.media-amazon.com/images/M/MV5BODhjZWM1NzktYTc1MC00ZjNkLWI2M2YtZDMyNmI5MmJlYWU5XkEyXkFqcGdeQXVyMTMzMjE5NDky._V1_FMjpg_UX1000_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "495",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542256.mkv"
  },
  {
    "name": "PK: Dil Tera Hogaya (2020)",
    "logo": "https://m.media-amazon.com/images/M/MV5BOWFlNTdiOTEtZTlhYi00Y2Y3LThjOGYtMDRiMjY1ZDQ0NzQyXkEyXkFqcGdeQXVyMTMzMjE5NDky._V1_FMjpg_UX1000_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "496",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/542253.mkv"
  },
  {
    "name": "PK: Main Hoon Shahid Afridi (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mUwHfDvl49O7XxxuN9ys9Hjbsgm.jpg",
    "category": "PK - Pakistan Movies",
    "id": "497",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/539168.mp4"
  },
  {
    "name": "PK: Aik Hai Nigar (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zorZcNqS8MToGOEOVZTDUO34G8p.jpg",
    "category": "PK - Pakistan Movies",
    "id": "498",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/538376.mkv"
  },
  {
    "name": "IN: PK (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hUitxmc1klkZF4zYHAz3oT9e7mT.jpg",
    "category": "IN - Indian Hindi Movies - Bollywood",
    "id": "499",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/398615.mkv"
  },
  {
    "name": "PK: Zindagi Kitni Haseen Hay (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ws3qLMfbzhEdRMYvvhPYZeDlOjw.jpg",
    "category": "PK - Pakistan Movies",
    "id": "500",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345894.mp4"
  },
  {
    "name": "PK: Zinda Bhaag (2013)",
    "logo": "https://m.media-amazon.com/images/M/MV5BODY4NDY2NTQ3N15BMl5BanBnXkFtZTgwNDg3NDAxMzE@._V1_FMjpg_UX1000_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "501",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345893.mp4"
  },
  {
    "name": "PK: Zara Ther Jao",
    "logo": "https://c.saavncdn.com/575/Dhol-Balocha-Vol-27-Punjabi-2004-20190911172553-500x500.jpg",
    "category": "PK - Pakistan Movies",
    "id": "502",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345892.mp4"
  },
  {
    "name": "PK: Zara Palat Kar Dekho",
    "logo": "https://i.ytimg.com/vi/i6oeL6wuzhw/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "503",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345891.mp4"
  },
  {
    "name": "PK: Zara Nam Ho Tou",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "504",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345890.mp4"
  },
  {
    "name": "PK: Youn Hum Miley",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7668.jpg",
    "category": "PK - Pakistan Movies",
    "id": "505",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345889.mp4"
  },
  {
    "name": "PK: Yeh To Hona Hi Tha",
    "logo": "https://m.media-amazon.com/images/M/MV5BOTU3MDY0MmEtZGU4NS00NzM4LWE4ZmQtYmZjZDAzOTcxNjBjXkEyXkFqcGdeQXVyMTMzNDQwOTcx._V1_QL75_UY281_CR143,0,190,281_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "506",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345888.mp4"
  },
  {
    "name": "PK: Yalghaar (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wf9dk9BrKFkHEPruqsiiPW5P05n.jpg",
    "category": "PK - Pakistan Movies",
    "id": "507",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345887.mkv"
  },
  {
    "name": "PK: Wrong Number (2002)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cVZqE4dmvvN30GECqEux7fsKcJq.jpg",
    "category": "PK - Pakistan Movies",
    "id": "508",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345886.mkv"
  },
  {
    "name": "PK: Wrong No Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7760.jpg",
    "category": "PK - Pakistan Movies",
    "id": "509",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345885.mp4"
  },
  {
    "name": "PK: Vespa Girl",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uxvQ6aF8h0nrfkankSnn-MFXTw-ctz37sn5E6eTRWDhIy6HLqpP8HCfQ0puj07Nz_dE&usqp=CAU",
    "category": "PK - Pakistan Movies",
    "id": "510",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345884.mp4"
  },
  {
    "name": "PK: Uper Bhabi Ka Makan",
    "logo": "https://i.ytimg.com/vi/4OKuIiYMibo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6jE6So8N1wPm1Lz1dzEaC9OZveQ",
    "category": "PK - Pakistan Movies",
    "id": "511",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345883.mp4"
  },
  {
    "name": "PK: Tumhari Khatir",
    "logo": "https://i.ytimg.com/vi/nvvgKMmzAbU/hqdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "512",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345882.mp4"
  },
  {
    "name": "PK: Tu Jo Nahin",
    "logo": "https://dramasplanet.com/wp-content/uploads/2021/03/Tu-Jo-Nahi-Cover-204x350_c.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-2",
    "category": "PK - Pakistan Movies",
    "id": "513",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345881.mp4"
  },
  {
    "name": "PK: Tu Hai Meri Neelum",
    "logo": "https://www.arydigital.tv/videos/wp-content/uploads/2020/11/tele-film.jpg",
    "category": "PK - Pakistan Movies",
    "id": "514",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345880.mp4"
  },
  {
    "name": "PK: Tohmat",
    "logo": "https://dramasplanet.com/wp-content/uploads/2020/04/Tohmat-Cover.jpg",
    "category": "PK - Pakistan Movies",
    "id": "515",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345879.mp4"
  },
  {
    "name": "PK: The Story of Love (2016)",
    "logo": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTcE2c7C67i_z84jjClirtZCoInWu6cZqHKB7qxRtFNazKANVNL",
    "category": "PK - Pakistan Movies",
    "id": "516",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345878.mp4"
  },
  {
    "name": "PK: The Donkey King Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7761.jpg",
    "category": "PK - Pakistan Movies",
    "id": "517",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345877.mkv"
  },
  {
    "name": "PK: The Donkey King (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xzotyfHaej5bcMli3clQD4qcPXx.jpg",
    "category": "PK - Pakistan Movies",
    "id": "518",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345876.mkv"
  },
  {
    "name": "PK: Teray Pyar Mai",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/81/8093.jpg",
    "category": "PK - Pakistan Movies",
    "id": "519",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345875.mp4"
  },
  {
    "name": "PK: Teen Shoqeen",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7670.jpg",
    "category": "PK - Pakistan Movies",
    "id": "520",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345874.mp4"
  },
  {
    "name": "PK: Teefa in Trouble (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/aJv4GNV1g4zLHDBQiQCIwAx4j42.jpg",
    "category": "PK - Pakistan Movies",
    "id": "521",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345873.mp4"
  },
  {
    "name": "PK: Tamasha Merey Aagay",
    "logo": "https://rekhta.pc.cdn.bitgravity.com/Images/EBooks/small_tamasha-mere-aage-jameeluddin-aali-ebooks.jpg",
    "category": "PK - Pakistan Movies",
    "id": "522",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345872.mp4"
  },
  {
    "name": "PK: Siraj Begum Aur Madam",
    "logo": "https://i.ytimg.com/vi/pYX4WQr2X_I/mqdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "523",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345871.mp4"
  },
  {
    "name": "PK: Sare Zameen Per",
    "logo": "https://i.ytimg.com/vi/CWcNfEgONKo/hqdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "524",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345870.mp4"
  },
  {
    "name": "PK: Sapnay",
    "logo": "https://c.saavncdn.com/636/Sapnay-Hindi-2022-20220321122447-500x500.jpg",
    "category": "PK - Pakistan Movies",
    "id": "525",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345869.mp4"
  },
  {
    "name": "PK: Rangreza Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7762.jpg",
    "category": "PK - Pakistan Movies",
    "id": "526",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345868.mkv"
  },
  {
    "name": "PK: Rangreza (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v9qBXgNbYJOglQsCFhcSC7kHugR.jpg",
    "category": "PK - Pakistan Movies",
    "id": "527",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345867.mkv"
  },
  {
    "name": "PK: Raja Ki Raji",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7671.jpg",
    "category": "PK - Pakistan Movies",
    "id": "528",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345866.mp4"
  },
  {
    "name": "PK: Rahay Salamat Jodi",
    "logo": "https://i.ytimg.com/vi/RY8wkF5gdQE/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "529",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345865.mp4"
  },
  {
    "name": "PK: Pyar Nahi Hota Bar Bar",
    "logo": "https://i.ytimg.com/vi/mVkZCmRmLrY/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "530",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345864.mp4"
  },
  {
    "name": "PK: Pinky Memsaab (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1PoAJvlu3zkoznpVP3ZhIpl1fV8.jpg",
    "category": "PK - Pakistan Movies",
    "id": "531",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345863.mp4"
  },
  {
    "name": "PK: Pinky Memsaab (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1PoAJvlu3zkoznpVP3ZhIpl1fV8.jpg",
    "category": "PK - Pakistan Movies",
    "id": "532",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345862.mkv"
  },
  {
    "name": "PK: Penalty (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vzUBDA4Voxe8QbqcwUohr9PGE3l.jpg",
    "category": "PK - Pakistan Movies",
    "id": "533",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345861.mp4"
  },
  {
    "name": "PK: Pari (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kyWno4o8R9rsp1t52BZ6RjskpQv.jpg",
    "category": "PK - Pakistan Movies",
    "id": "534",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345860.mp4"
  },
  {
    "name": "PK: Pari (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kyWno4o8R9rsp1t52BZ6RjskpQv.jpg",
    "category": "PK - Pakistan Movies",
    "id": "535",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345859.mkv"
  },
  {
    "name": "PK: Parda Hai Parda (1992)",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "536",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345858.mp4"
  },
  {
    "name": "PK: Parchi (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2S8JvDXXT4o9bqRG70qiAj83Cw2.jpg",
    "category": "PK - Pakistan Movies",
    "id": "537",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345857.mkv"
  },
  {
    "name": "PK: O21 (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bximDYrwbJk4S6yUJYukd3qj6Za.jpg",
    "category": "PK - Pakistan Movies",
    "id": "538",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345856.mkv"
  },
  {
    "name": "PK: O21 Operation",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Operation_021.jpg/220px-Operation_021.jpg",
    "category": "PK - Pakistan Movies",
    "id": "539",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345855.mkv"
  },
  {
    "name": "PK: Nimmo Papad Wali",
    "logo": "https://i.ytimg.com/vi/UrQmZY8DAtE/maxresdefault.jpg?v=60d47dbc",
    "category": "PK - Pakistan Movies",
    "id": "540",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345854.mp4"
  },
  {
    "name": "PK: Na Maloom Afraad 2 (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/64evmEMrjIGP2uyxKMVGVEo0mQc.jpg",
    "category": "PK - Pakistan Movies",
    "id": "541",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345853.mp4"
  },
  {
    "name": "PK: Nain Taara",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7707.jpg",
    "category": "PK - Pakistan Movies",
    "id": "542",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345852.mp4"
  },
  {
    "name": "PK: Mushtari",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "543",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345851.mp4"
  },
  {
    "name": "PK: Motorcycle Girl Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7763.jpg",
    "category": "PK - Pakistan Movies",
    "id": "544",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345850.mkv"
  },
  {
    "name": "PK: Motorcycle Girl (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dMOrXQguNrC13ZpGtiW66PJZS4x.jpg",
    "category": "PK - Pakistan Movies",
    "id": "545",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345849.mp4"
  },
  {
    "name": "PK: X Moor (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6a3Yh4JikKitqVToYbhWk0jBBxl.jpg",
    "category": "PK - Pakistan Movies",
    "id": "546",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345848.mp4"
  },
  {
    "name": "PK: Moomal Rano (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jgBFlBoCmh8fdlL1fWF3l1UXrVf.jpg",
    "category": "PK - Pakistan Movies",
    "id": "547",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345847.mp4"
  },
  {
    "name": "PK: Mohabbat Hogayee Aakhir",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/86/8528.jpg",
    "category": "PK - Pakistan Movies",
    "id": "548",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345846.mp4"
  },
  {
    "name": "PK: Meri bari kb ayegi",
    "logo": "https://i.ytimg.com/vi/nSYwnIsEfBY/sddefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "549",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345845.mp4"
  },
  {
    "name": "PK: Meri Awaz",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4eTMxaGu-0PSBCuCl69jqrGtnlMSkEm10nbbfiNeri8CXcfake5RjAGq0suHyS-xlwc&usqp=CAU",
    "category": "PK - Pakistan Movies",
    "id": "550",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345844.mp4"
  },
  {
    "name": "PK: Meri Ammi",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7708.jpg",
    "category": "PK - Pakistan Movies",
    "id": "551",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345843.mp4"
  },
  {
    "name": "PK: Merey Sanwariya Ka Naam",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7709.jpg",
    "category": "PK - Pakistan Movies",
    "id": "552",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345842.mp4"
  },
  {
    "name": "PK: Mera Hero",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "553",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345841.mp4"
  },
  {
    "name": "PK: Mein Tha Marjaniyan",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/86/8529.jpg",
    "category": "PK - Pakistan Movies",
    "id": "554",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345840.mp4"
  },
  {
    "name": "PK: Mehrunisa V Lub U Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7764.jpg",
    "category": "PK - Pakistan Movies",
    "id": "555",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345839.mp4"
  },
  {
    "name": "PK: Mehrunisa V Lub U (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Q8aIxGz2mtArBo6owiR011qGCQ.jpg",
    "category": "PK - Pakistan Movies",
    "id": "556",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345838.mp4"
  },
  {
    "name": "PK: Mehndi Laga Ke Rakhna",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7710.jpg",
    "category": "PK - Pakistan Movies",
    "id": "557",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345837.mp4"
  },
  {
    "name": "PK: Mehboob or Wo",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7711.jpg",
    "category": "PK - Pakistan Movies",
    "id": "558",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345836.mp4"
  },
  {
    "name": "PK: Masoom Si Bholi Bhali Si",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7673.jpg",
    "category": "PK - Pakistan Movies",
    "id": "559",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345835.mp4"
  },
  {
    "name": "PK: Manjhele Bhaiya ki Biti",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7712.jpg",
    "category": "PK - Pakistan Movies",
    "id": "560",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345834.mp4"
  },
  {
    "name": "PK: Lyari Ke Teer",
    "logo": "https://i.ytimg.com/vi/zhpKlUybVVo/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "561",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345833.mp4"
  },
  {
    "name": "PK: Love Siyappa",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7675.jpg",
    "category": "PK - Pakistan Movies",
    "id": "562",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345832.mp4"
  },
  {
    "name": "PK: Love ki Hide & Seek",
    "logo": "https://i.ytimg.com/vi/5rGN2xrNaJs/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "563",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345831.mp4"
  },
  {
    "name": "PK: Lo Pakray Gaye",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7676.jpg",
    "category": "PK - Pakistan Movies",
    "id": "564",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345830.mp4"
  },
  {
    "name": "PK: Load Wedding (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8JbhYVGBvBR8nDq6qp1BWwBPpyH.jpg",
    "category": "PK - Pakistan Movies",
    "id": "565",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345829.mkv"
  },
  {
    "name": "PK: Left Right Left (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7GGP0ZQLeuT0Fm2yjR4LARTP99c.jpg",
    "category": "PK - Pakistan Movies",
    "id": "566",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345828.mp4"
  },
  {
    "name": "PK: Lahore Se Aagey Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7765.jpg",
    "category": "PK - Pakistan Movies",
    "id": "567",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345827.mkv"
  },
  {
    "name": "PK: Laal Kabootar (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/agPaPX6CsdDFd1bRleELDUtTL7u.jpg",
    "category": "PK - Pakistan Movies",
    "id": "568",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345826.mkv"
  },
  {
    "name": "PK: Laal (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A1FuXm6X5CLOFS4rb4EpUCRiI81.jpg",
    "category": "PK - Pakistan Movies",
    "id": "569",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345825.mp4"
  },
  {
    "name": "PK: Koila Bhiona Raakh",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "570",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345824.mp4"
  },
  {
    "name": "PK: Khuwaish",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "571",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345823.mp4"
  },
  {
    "name": "PK: Khuda Kay Liye Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7766.jpg",
    "category": "PK - Pakistan Movies",
    "id": "572",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345822.mkv"
  },
  {
    "name": "PK: Khamoosh Angar",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "573",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345821.mp4"
  },
  {
    "name": "PK: Karachi Se Lahore Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7767.jpg",
    "category": "PK - Pakistan Movies",
    "id": "574",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345820.mp4"
  },
  {
    "name": "PK: Jurm Kia The Mera",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "575",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345819.mp4"
  },
  {
    "name": "PK: Junoon (1992)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDLGI6LfkgxtvHsXdTyFRcHVoZU.jpg",
    "category": "PK - Pakistan Movies",
    "id": "576",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345818.mp4"
  },
  {
    "name": "PK: Jhanka Tanki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7713.jpg",
    "category": "PK - Pakistan Movies",
    "id": "577",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345817.mp4"
  },
  {
    "name": "PK: Jawani Phir Nahi Ani (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yREOuueE8fZkCHfGVSC73AWFAPe.jpg",
    "category": "PK - Pakistan Movies",
    "id": "578",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345816.mkv"
  },
  {
    "name": "PK: Jawani Phir Nahi Aani 2",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7753.jpg",
    "category": "PK - Pakistan Movies",
    "id": "579",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345815.mkv"
  },
  {
    "name": "PK: Janaan Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7768.jpg",
    "category": "PK - Pakistan Movies",
    "id": "580",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345814.mkv"
  },
  {
    "name": "PK: Janaan (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xXjleOzKUoVyVJDQJaivO9kGtzk.jpg",
    "category": "PK - Pakistan Movies",
    "id": "581",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345813.mp4"
  },
  {
    "name": "PK: Jalaibee Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7769.jpg",
    "category": "PK - Pakistan Movies",
    "id": "582",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345812.mkv"
  },
  {
    "name": "PK: Jaane Anjaane (1971)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/q6A2pSi555z0pl7GYawvlKXx8cD.jpg",
    "category": "PK - Pakistan Movies",
    "id": "583",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345811.mp4"
  },
  {
    "name": "PK: Ishq Na Tamam",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "584",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345810.mp4"
  },
  {
    "name": "PK: Is Dil Ki Asi Ki Tasi",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7681.jpg",
    "category": "PK - Pakistan Movies",
    "id": "585",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345809.mp4"
  },
  {
    "name": "PK: In Se Miliye",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7714.jpg",
    "category": "PK - Pakistan Movies",
    "id": "586",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345808.mp4"
  },
  {
    "name": "PK: Hum Zuban",
    "logo": "https://i.ytimg.com/vi/1z0V9JBLvb0/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "587",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345807.mp4"
  },
  {
    "name": "PK: Hum Chaley Aye",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7716.jpg",
    "category": "PK - Pakistan Movies",
    "id": "588",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345806.mp4"
  },
  {
    "name": "PK: Ho Mann Jahaan (Paki)",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7770.jpg",
    "category": "PK - Pakistan Movies",
    "id": "589",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345805.mkv"
  },
  {
    "name": "PK: Help Me Durdana 2",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7717.jpg",
    "category": "PK - Pakistan Movies",
    "id": "590",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345804.mp4"
  },
  {
    "name": "PK: Help Me Durdana",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7718.jpg",
    "category": "PK - Pakistan Movies",
    "id": "591",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345803.mp4"
  },
  {
    "name": "PK: Heer Maan Ja (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dTq7FOtIgdXz40XgFKeChlcDHuY.jpg",
    "category": "PK - Pakistan Movies",
    "id": "592",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345802.mp4"
  },
  {
    "name": "PK: Glass Tora Bara Aana",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7719.jpg",
    "category": "PK - Pakistan Movies",
    "id": "593",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345800.mp4"
  },
  {
    "name": "PK: Ghairat Mera Naa (1971)",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "594",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345799.mp4"
  },
  {
    "name": "PK: Geo Sar Utha Kay (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7JOoUN8F31YupNMAYhId0s1yPH2.jpg",
    "category": "PK - Pakistan Movies",
    "id": "595",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345798.mp4"
  },
  {
    "name": "PK: Fasana Khatam Hota Hai",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "596",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345797.mp4"
  },
  {
    "name": "PK: Ek Tha Raja Ek Thi Rani",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/86/8530.jpg",
    "category": "PK - Pakistan Movies",
    "id": "597",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345796.mp4"
  },
  {
    "name": "PK: Ek Noor (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mFUZ8vuO4XhkH9zeiBsyeSh6qAp.jpg",
    "category": "PK - Pakistan Movies",
    "id": "598",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345795.mp4"
  },
  {
    "name": "PK: Ek Chance Pyar Ka",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7720.jpg",
    "category": "PK - Pakistan Movies",
    "id": "599",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345794.mp4"
  },
  {
    "name": "PK: Eid Loadshedding",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7721.jpg",
    "category": "PK - Pakistan Movies",
    "id": "600",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345793.mp4"
  },
  {
    "name": "PK: Eid Hu To Aesi   Eid Part 2",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "601",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345792.mp4"
  },
  {
    "name": "PK: Eid Hu To Aesi Eid Day",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "602",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345791.mp4"
  },
  {
    "name": "PK: Dulha Bana Bakra",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7722.jpg",
    "category": "PK - Pakistan Movies",
    "id": "603",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345790.mp4"
  },
  {
    "name": "PK: Doosra Sach Bhool",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "604",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345789.mp4"
  },
  {
    "name": "PK: Doly From Mianwali",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/86/8531.jpg",
    "category": "PK - Pakistan Movies",
    "id": "605",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345788.mp4"
  },
  {
    "name": "PK: Dobara Phir Se Paki",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7771.jpg",
    "category": "PK - Pakistan Movies",
    "id": "606",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345787.mkv"
  },
  {
    "name": "PK: Dobara Phir Se (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iM4jUfyhITyMo4Q5umDP9v2PjyS.jpg",
    "category": "PK - Pakistan Movies",
    "id": "607",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345786.mp4"
  },
  {
    "name": "PK: Dino Ki Dulhaniya (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n6n2Tci6EqMtKh8jPEkkAIjC35v.jpg",
    "category": "PK - Pakistan Movies",
    "id": "608",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345785.mkv"
  },
  {
    "name": "PK: Dil To Bacha Hai",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7723.jpg",
    "category": "PK - Pakistan Movies",
    "id": "609",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345784.mp4"
  },
  {
    "name": "PK: Dil Tera Hogaya",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vOSYb0rQAj1sguKo5zAartx3VF3.jpg",
    "category": "PK - Pakistan Movies",
    "id": "610",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345783.mp4"
  },
  {
    "name": "PK: Dil Pe Mat Le Yaar!!",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2CpWdhlh2rogwHCqYvZHk8V1zFe.jpg",
    "category": "PK - Pakistan Movies",
    "id": "611",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345782.mp4"
  },
  {
    "name": "PK: Dil Parosi",
    "logo": "https://i.ytimg.com/vi/woBlrsw2p_4/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "612",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345781.mp4"
  },
  {
    "name": "PK: Dilnaz Naseeb Wali",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7724.jpg",
    "category": "PK - Pakistan Movies",
    "id": "613",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345780.mp4"
  },
  {
    "name": "PK: Dil Ma Baji Ganti",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7684.jpg",
    "category": "PK - Pakistan Movies",
    "id": "614",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345779.mp4"
  },
  {
    "name": "PK: Dil Diyan Gallan (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3DEq9RkUHtWYdzPsEJwnjbf4P5b.jpg",
    "category": "PK - Pakistan Movies",
    "id": "615",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345778.mp4"
  },
  {
    "name": "PK: Dildariyan",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7685.jpg",
    "category": "PK - Pakistan Movies",
    "id": "616",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345777.mp4"
  },
  {
    "name": "PK: Deemak",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zdPEJWRTwKq3JyiPlVnSgbEiDuj.jpg",
    "category": "PK - Pakistan Movies",
    "id": "617",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345776.mp4"
  },
  {
    "name": "PK: Darinday Part 2",
    "logo": "https://i0.wp.com/www.thelibrarypk.com/wp-content/uploads/2017/05/N-30-1.jpg?fit=400%2C610&ssl=1",
    "category": "PK - Pakistan Movies",
    "id": "618",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345775.mp4"
  },
  {
    "name": "PK: Darinday",
    "logo": "https://i0.wp.com/www.thelibrarypk.com/wp-content/uploads/2017/05/N-30-1.jpg?fit=400%2C610&ssl=1",
    "category": "PK - Pakistan Movies",
    "id": "619",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345774.mp4"
  },
  {
    "name": "PK: Chupan Chupai (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2SK6vuj7uCvqheGqjcbPK9mLvxW.jpg",
    "category": "PK - Pakistan Movies",
    "id": "620",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345773.mkv"
  },
  {
    "name": "PK: CHUPAN CHPAI",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7749.jpg",
    "category": "PK - Pakistan Movies",
    "id": "621",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345772.mp4"
  },
  {
    "name": "PK: Chhapar Phaar kay",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7726.jpg",
    "category": "PK - Pakistan Movies",
    "id": "622",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345771.mp4"
  },
  {
    "name": "PK: Chhalawa (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tdvKqBnxJfXppzlzUxvWiIHSRHu.jpg",
    "category": "PK - Pakistan Movies",
    "id": "623",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345770.mkv"
  },
  {
    "name": "PK: Chatpati Mohabbat",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7727.jpg",
    "category": "PK - Pakistan Movies",
    "id": "624",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345769.mp4"
  },
  {
    "name": "PK: Chalay Thay Saath (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bpYsaFjc8HvpOqYUJkSxKCCnRMe.jpg",
    "category": "PK - Pakistan Movies",
    "id": "625",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345768.mp4"
  },
  {
    "name": "PK: Cake (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5GJEZovjtKisJxNMG6fBTCxNzZi.jpg",
    "category": "PK - Pakistan Movies",
    "id": "626",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345767.mp4"
  },
  {
    "name": "PK: Breakup Ke Baad",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7728.jpg",
    "category": "PK - Pakistan Movies",
    "id": "627",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345766.mp4"
  },
  {
    "name": "PK: Bonga BA Part 2",
    "logo": "https://i.ytimg.com/vi/28ZmZxqUemg/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "628",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345765.mp4"
  },
  {
    "name": "PK: Bonga BA",
    "logo": "https://i.ytimg.com/vi/28ZmZxqUemg/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "629",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345764.mp4"
  },
  {
    "name": "PK: Bitiya Hamaray Zamanay Mein",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7729.jpg",
    "category": "PK - Pakistan Movies",
    "id": "630",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345763.mp4"
  },
  {
    "name": "PK: Bin Roye (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3fQAIsd3dD9QbplQbX9QgBjgtly.jpg",
    "category": "PK - Pakistan Movies",
    "id": "631",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345762.mkv"
  },
  {
    "name": "PK: Bin Bulae Abba Jan",
    "logo": "https://i.ytimg.com/vi/JGRCjJpI5wk/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "632",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345761.mp4"
  },
  {
    "name": "PK: Bhabhi Nazar Laga Dengi",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/81/8090.jpg",
    "category": "PK - Pakistan Movies",
    "id": "633",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345760.mp4"
  },
  {
    "name": "PK: Bhaag Amna Bhaag",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7730.jpg",
    "category": "PK - Pakistan Movies",
    "id": "634",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345759.mp4"
  },
  {
    "name": "PK: Be Hisi Part 2",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "635",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345758.mp4"
  },
  {
    "name": "PK: Be Hisi Part 1",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "636",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345757.mp4"
  },
  {
    "name": "PK: Behadd (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lhgulQ8D1BOpnmO3NbN1n4ZNXz1.jpg",
    "category": "PK - Pakistan Movies",
    "id": "637",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345756.mp4"
  },
  {
    "name": "PK: Beech Ki Aarh",
    "logo": "https://vuclipi-a.akamaihd.net/p/cloudinary/h_171,w_304,dpr_1.5,f_auto,c_thumb,q_auto:low/1165763049/d-1",
    "category": "PK - Pakistan Movies",
    "id": "638",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345755.mp4"
  },
  {
    "name": "PK: Basant Khoon e Rang",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "639",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345754.mp4"
  },
  {
    "name": "PK: Band Toh Ab Bajay Ga",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHn3wLnzh35LTj3RhDWJzIBnGda9dQcHZfvioN_FixFLbH5Hc3HyRcHbp2apTnVCaOh7s&usqp=CAU",
    "category": "PK - Pakistan Movies",
    "id": "640",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345753.mp4"
  },
  {
    "name": "PK: Bandagi Bechargi",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "641",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345752.mp4"
  },
  {
    "name": "PK: Balu Mahi (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/Nk3AWy6k3RI8LmnoYp7d52hVPl.jpg",
    "category": "PK - Pakistan Movies",
    "id": "642",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345751.mp4"
  },
  {
    "name": "PK: Bakra In Law",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7689.jpg",
    "category": "PK - Pakistan Movies",
    "id": "643",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345750.mp4"
  },
  {
    "name": "PK: Bakra Impossible",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7732.jpg",
    "category": "PK - Pakistan Movies",
    "id": "644",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345749.mp4"
  },
  {
    "name": "PK: Bakhtawar",
    "logo": "https://propakistani.pk/lens/wp-content/uploads/2022/07/yumna-zaidi-bakhtawar.jpg",
    "category": "PK - Pakistan Movies",
    "id": "645",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345748.mp4"
  },
  {
    "name": "PK: Bahu Rani Saas Sayani",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7735.jpg",
    "category": "PK - Pakistan Movies",
    "id": "646",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345747.mp4"
  },
  {
    "name": "PK: Bahu Ki Deed Saas Ki Eid",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7736.jpg",
    "category": "PK - Pakistan Movies",
    "id": "647",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345746.mp4"
  },
  {
    "name": "PK: Badtameez Ishq",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7737.jpg",
    "category": "PK - Pakistan Movies",
    "id": "648",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345745.mp4"
  },
  {
    "name": "PK: Baal Baal Bach Gaye",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7733.jpg",
    "category": "PK - Pakistan Movies",
    "id": "649",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345744.mp4"
  },
  {
    "name": "PK: Asteen Ka sanp",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiCRAbyHbhZpHUrTBN3THExf-98hd7GRYNjoq1EEmwAyto7w6EZRxCe6-uH2FM1Qcijg&usqp=CAU",
    "category": "PK - Pakistan Movies",
    "id": "650",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345743.mp4"
  },
  {
    "name": "PK: Asha Ki Asha",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "651",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345742.mp4"
  },
  {
    "name": "PK: Andarworld",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "652",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345741.mp4"
  },
  {
    "name": "PK: Allahyar and the Legend of Markhor (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mp1ywf4y6QXntxoDkeW9T8HpNbT.jpg",
    "category": "PK - Pakistan Movies",
    "id": "653",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345739.mp4"
  },
  {
    "name": "PK: Akhri Ghanti",
    "logo": "https://i.ytimg.com/vi/O4_slGaELgA/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "654",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345738.mp4"
  },
  {
    "name": "PK: Aitebaar",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7746.jpg",
    "category": "PK - Pakistan Movies",
    "id": "655",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345737.mp4"
  },
  {
    "name": "PK: Aik Say Barh Kar Aik",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/78/7734.jpg",
    "category": "PK - Pakistan Movies",
    "id": "656",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345736.mp4"
  },
  {
    "name": "PK: Aik Pagal Si Larki",
    "logo": "https://img-cdn.curl.pk/base_img/f168cb8a515ca359c6abde0c2457bfec.png",
    "category": "PK - Pakistan Movies",
    "id": "657",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345735.mp4"
  },
  {
    "name": "PK: Aik Gair Zaroori Maa",
    "logo": "https://i.ytimg.com/vi/2M6IkmjcbBI/hqdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "658",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345734.mp4"
  },
  {
    "name": "PK: Aik Aur Phupo Ki Beti",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7690.jpg",
    "category": "PK - Pakistan Movies",
    "id": "659",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345733.mp4"
  },
  {
    "name": "PK: Aik Ajeeb Rishta",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "660",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345732.mp4"
  },
  {
    "name": "PK: Aese Na Tu Jaa",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/77/7691.jpg",
    "category": "PK - Pakistan Movies",
    "id": "661",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345731.mp4"
  },
  {
    "name": "PK: Adhura Geet",
    "logo": "https://i.ytimg.com/vi/v4UduxHAS1Q/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "662",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345730.mp4"
  },
  {
    "name": "PK: Actor in Law (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1EmBwDBXCJlfmcYNUUa7lJdBlvs.jpg",
    "category": "PK - Pakistan Movies",
    "id": "663",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345729.mp4"
  },
  {
    "name": "PK: Achar Waali",
    "logo": "https://i.ytimg.com/vi/EB_63gaPb4A/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "664",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345728.mp4"
  },
  {
    "name": "PK: Abdullah : The Final Witness (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7pWK6NXAuzkosU8unDfVuAMBB0p.jpg",
    "category": "PK - Pakistan Movies",
    "id": "665",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345727.mp4"
  },
  {
    "name": "PK: Aatish (1994)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9OnAjSA79teckEFvPBLcigoccxN.jpg",
    "category": "PK - Pakistan Movies",
    "id": "666",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345726.mp4"
  },
  {
    "name": "PK: Aashiq Colony",
    "logo": "http://logo.protv.cc/stalker_portal/screenshots/86/8533.jpg",
    "category": "PK - Pakistan Movies",
    "id": "667",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345725.mp4"
  },
  {
    "name": "PK: Aakhri Chaal",
    "logo": "https://i.ytimg.com/vi/vRAAUVTU4MU/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "668",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345724.mp4"
  },
  {
    "name": "PK: 7 Din Mohabbat In (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vP45yPU2PSIB3oYVxqyBHTL2iBl.jpg",
    "category": "PK - Pakistan Movies",
    "id": "669",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/345723.mkv"
  },
  {
    "name": "PK: Wah Tera Joban",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "670",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329712.mp4"
  },
  {
    "name": "PK: The Crorepati 2017",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "671",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329706.mp4"
  },
  {
    "name": "PK: Super Singh 2018",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/snfij4mPoyGvBB20fg4KtS2DwyJ.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "672",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329702.mkv"
  },
  {
    "name": "PK: Punjab Bolda (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ht8x4gw9kqtqJoJ6s3iP569Gyvg.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "673",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329690.mp4"
  },
  {
    "name": "PK: Phamous (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4r7JV6891lx0kNzZ1YkcaDxcTkA.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "674",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329689.mkv"
  },
  {
    "name": "PK: MySelf Ghaint (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eT4zYPWDKsgXX6VA9CXHpX3KGiP.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "675",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329685.mp4"
  },
  {
    "name": "PK: Munde Kamaal De (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/m964JRSLcFOWxeZiXKiWkVPzBMR.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "676",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329684.mp4"
  },
  {
    "name": "PK: Mitthi Baryani",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "677",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329683.mp4"
  },
  {
    "name": "PK: METHEY KARELEY",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "678",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329680.mp4"
  },
  {
    "name": "PK: MASTI DE DIN",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "679",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329679.mp4"
  },
  {
    "name": "PK: Lukan Michi (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vYr0ShMWrwTTNI7yxQuHW8JbLT4.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "680",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329676.mkv"
  },
  {
    "name": "PK: LOVE SPOT",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "681",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329674.mp4"
  },
  {
    "name": "PK: Lovely Te Lovely (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2I18YRZUEMW47J1xPZJjCk7hysa.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "682",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329672.mp4"
  },
  {
    "name": "PK: Lockdown (2000)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4l46GpxBygrLnGdYISxDvRaf5fC.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "683",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329671.mp4"
  },
  {
    "name": "PK: Lakeeran (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/d8EFojqn2vyYzHqpZ5Ngj5EOiYe.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "684",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329669.mkv"
  },
  {
    "name": "PK: Lai Lag (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/eVMY4jT1Ob6jKR9t6XfZETS3FBX.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "685",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329668.mp4"
  },
  {
    "name": "PK: Kuriyan Jawan Bapu Preshaan (2021)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/g682EwEzJbl1nF3Rj0TvksEGx4e.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "686",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329666.mkv"
  },
  {
    "name": "PK: Kuri Karey Ishare",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "687",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329665.mp4"
  },
  {
    "name": "PK: Kuch Naa Kaho (2003)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hxZlXIflrZ5FJkDhFkV5OFe1bWi.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "688",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329664.mp4"
  },
  {
    "name": "PK: Kitty Party (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/waWtsvnjLSZ3thGj7lyeDJFQN4f.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "689",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329662.mkv"
  },
  {
    "name": "PK: Khatre Da Ghuggu (2020)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/o02pnMgWr0Msq22A55IotoOAN9s.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "690",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329661.mkv"
  },
  {
    "name": "PK: JHANJHRAN DA JORA",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "691",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329652.mp4"
  },
  {
    "name": "PK: JEO DHOLA",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "692",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329651.mp4"
  },
  {
    "name": "PK: HUSSAN KO DEKHO",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "693",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329644.mp4"
  },
  {
    "name": "PK: High End Yaariyan - 2019",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "694",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329643.mkv"
  },
  {
    "name": "PK: Heyy Babyy (2007)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9XxhqihX1kcZXcvJ48aQlPYHPQo.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "695",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329642.mp4"
  },
  {
    "name": "PK: GULABI MUKHRA",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "696",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329641.mp4"
  },
  {
    "name": "PK: Guddi Udaie Jaa",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "697",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329640.mp4"
  },
  {
    "name": "PK: Ghori Chareya",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "698",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329636.mp4"
  },
  {
    "name": "PK: FRAUDIYE",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "699",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329634.mp4"
  },
  {
    "name": "PK: Fateh (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yVegJdDW5hzMtFa6KRZwWBwv5jU.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "700",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329633.mp4"
  },
  {
    "name": "PK: Do Kaliyan (1968)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hAotyyZJq0gliE97LfGcRthYERP.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "701",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329630.mp4"
  },
  {
    "name": "PK: DIL TAGDI",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "702",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329628.mp4"
  },
  {
    "name": "PK: DIL SE DIL TAK",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "703",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329627.mp4"
  },
  {
    "name": "PK: Connection Pyaar Da",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "704",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329624.mp4"
  },
  {
    "name": "PK: Chor Machaye Shor (1974)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9SmyN8xQjsR5SMVo5gEj6joTHso.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "705",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329623.mp4"
  },
  {
    "name": "PK: CHAL SO CHAL",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "706",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329621.mp4"
  },
  {
    "name": "PK: Chalak Toutay 2",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "707",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329619.mp4"
  },
  {
    "name": "PK: Chalak Toutay",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "708",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329618.mp4"
  },
  {
    "name": "PK: Bulbulay",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "709",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329616.mp4"
  },
  {
    "name": "PK: Budhay Shararti 2",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "710",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329615.mp4"
  },
  {
    "name": "PK: Bubble Gum (2011)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iDNKtCRos2Weeonet6ipB1l4LCZ.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "711",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329614.mp4"
  },
  {
    "name": "PK: Binnu Dhillo",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "712",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329613.mp4"
  },
  {
    "name": "PK: BHANGREY DI QUEEN",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "713",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329612.mp4"
  },
  {
    "name": "PK: ASHIQ",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "714",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329607.mp4"
  },
  {
    "name": "PK: Andaz Apna Apna (1994)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/l1tE1GspvcyeYSfKxmnh8DObnzG.jpg",
    "category": "PK - Punjabi Stage Drama",
    "id": "715",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329605.mp4"
  },
  {
    "name": "PK: AAG LAGA DI",
    "logo": null,
    "category": "PK - Punjabi Stage Drama",
    "id": "716",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/329601.mp4"
  },
  {
    "name": "PK: Zindagi Kitni Haseen Hay (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ws3qLMfbzhEdRMYvvhPYZeDlOjw.jpg",
    "category": "PK - Pakistan Movies",
    "id": "717",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323388.mp4"
  },
  {
    "name": "PK: Yalghaar (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wf9dk9BrKFkHEPruqsiiPW5P05n.jpg",
    "category": "PK - Pakistan Movies",
    "id": "718",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323387.mkv"
  },
  {
    "name": "PK: Waar (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uCmM1St1w0jFtY86K4oP6PHMImV.jpg",
    "category": "PK - Pakistan Movies",
    "id": "719",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323385.mp4"
  },
  {
    "name": "PK: Verna (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u5zaQaxEEN5u7IemKpKdlKQWe6g.jpg",
    "category": "PK - Pakistan Movies",
    "id": "720",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323384.mp4"
  },
  {
    "name": "PK: The Donkey King (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xzotyfHaej5bcMli3clQD4qcPXx.jpg",
    "category": "PK - Pakistan Movies",
    "id": "721",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323383.mkv"
  },
  {
    "name": "PK: Tere Bin Laden (2010)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9L1SPbw0UCvEQ36qYote2lVfTm5.jpg",
    "category": "PK - Pakistan Movies",
    "id": "722",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323382.avi"
  },
  {
    "name": "Wrong Number (1948)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A39p8fEvucMFQXFmjp5Z8WepdsQ.jpg",
    "category": "PK - Pakistan Movies",
    "id": "723",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323381.mp4"
  },
  {
    "name": "PK: Saya e Khuda e Zuljalal (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3WJsblrCo1oRkfzQYV53jYiyEEW.jpg",
    "category": "PK - Pakistan Movies",
    "id": "724",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323380.avi"
  },
  {
    "name": "PK: Sawaal 700 Crore Dollar Ka (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gXrBCzosZAldDsWKmseTOF4eS3u.jpg",
    "category": "PK - Pakistan Movies",
    "id": "725",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323379.mkv"
  },
  {
    "name": "PK: Saawan (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/753UDLCXJY58LvqAKYtIMJko6ig.jpg",
    "category": "PK - Pakistan Movies",
    "id": "726",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323378.mkv"
  },
  {
    "name": "PK: Rok Sako To Rok Lo (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ieLcZJSU3goQnS71rsj305cxU5.jpg",
    "category": "PK - Pakistan Movies",
    "id": "727",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323377.mkv"
  },
  {
    "name": "PK: Rahm (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fXhX2EDiZByyUEK7kq24Xpb0t0j.jpg",
    "category": "PK - Pakistan Movies",
    "id": "728",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323376.mp4"
  },
  {
    "name": "PK: Punjab Nahi Jaungi (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nZU1dhLyMynWgTDy4feBNK9oUp6.jpg",
    "category": "PK - Pakistan Movies",
    "id": "729",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323375.mp4"
  },
  {
    "name": "PK: Parwaaz Hai Junoon (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kkqbj4IaBLO7RsnCWKCrcYkyg4o.jpg",
    "category": "PK - Pakistan Movies",
    "id": "730",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323374.mkv"
  },
  {
    "name": "PK: Na Band Na Baraati (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/f94QaAPnVi58gBcWlnWlZp9ebmo.jpg",
    "category": "PK - Pakistan Movies",
    "id": "731",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323373.mp4"
  },
  {
    "name": "PK: Laal Kabootar (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/agPaPX6CsdDFd1bRleELDUtTL7u.jpg",
    "category": "PK - Pakistan Movies",
    "id": "732",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323372.mkv"
  },
  {
    "name": "PK: Laal (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/A1FuXm6X5CLOFS4rb4EpUCRiI81.jpg",
    "category": "PK - Pakistan Movies",
    "id": "733",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323371.mkv"
  },
  {
    "name": "PK: Jawani Phir Nahi Ani 2 (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xDxXzv7hsR5oSYvqIBCDBarulxf.jpg",
    "category": "PK - Pakistan Movies",
    "id": "734",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323370.mkv"
  },
  {
    "name": "PK: Ishq Khuda (2013)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/46pV9PfkQUHRIdMEmpepwZBpWU4.jpg",
    "category": "PK - Pakistan Movies",
    "id": "735",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323369.mkv"
  },
  {
    "name": "PK: Durj (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/99haA5AvkmHu6kyTLunxHb07KhU.jpg",
    "category": "PK - Pakistan Movies",
    "id": "736",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323367.mkv"
  },
  {
    "name": "PK: Dukhtar (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1IdZriVY4x2BUeWblYdY8AwILw4.jpg",
    "category": "PK - Pakistan Movies",
    "id": "737",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323366.mkv"
  },
  {
    "name": "PK: Chhalawa (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tdvKqBnxJfXppzlzUxvWiIHSRHu.jpg",
    "category": "PK - Pakistan Movies",
    "id": "738",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323365.mkv"
  },
  {
    "name": "PK: Bahu Mahi - 2017",
    "logo": "https://m.media-amazon.com/images/M/MV5BZGQ3YTcwZmUtNDIxZC00OWY2LThjNjQtNWQ0ZDk3MGRiYWJlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTM3MzQ3NzE@._V1_FMjpg_UX1000_.jpg",
    "category": "PK - Pakistan Movies",
    "id": "739",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323364.mkv"
  },
  {
    "name": "PK: Aisa Bhi Hota Hai - 2017",
    "logo": "https://i.ytimg.com/vi/pyY4vqLFN4I/maxresdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "740",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323362.mp4"
  },
  {
    "name": "PK: 7 Din Mohabbat In (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/vP45yPU2PSIB3oYVxqyBHTL2iBl.jpg",
    "category": "PK - Pakistan Movies",
    "id": "741",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/323361.mkv"
  },
  {
    "name": "PK: Thirumanam Enum Nikkah (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/u9RK7MTJgAm9xIsueIZL6GB6bbD.jpg",
    "category": "PK - Pakistan Movies",
    "id": "742",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322194.mkv"
  },
  {
    "name": "PK: Shilai Maseen (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tgSqw4RB0sQTKA2IxsAeQrRtaNh.jpg",
    "category": "PK - Pakistan Movies",
    "id": "743",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322193.mkv"
  },
  {
    "name": "PK: Project Ghazi (2019)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1VmDLGQrhd0k1oNdgvPaSoXEJhP.jpg",
    "category": "PK - Pakistan Movies",
    "id": "744",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322192.mkv"
  },
  {
    "name": "PK: PilPli Sahib",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "745",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322191.mkv"
  },
  {
    "name": "PK: Phary Hut Love",
    "logo": "https://upload.wikimedia.org/wikipedia/en/7/76/Parey_Hut_Love.jpeg",
    "category": "PK - Pakistan Movies",
    "id": "746",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322190.mkv"
  },
  {
    "name": "PK: Pehlwan Ji In London",
    "logo": "https://i.ytimg.com/vi/mgV-dFRCCnI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAa109zF4sBrigmGHZni8UcNndxVA",
    "category": "PK - Pakistan Movies",
    "id": "747",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322189.mkv"
  },
  {
    "name": "PK: Parwaaz Hai Junoon (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kkqbj4IaBLO7RsnCWKCrcYkyg4o.jpg",
    "category": "PK - Pakistan Movies",
    "id": "748",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322188.mkv"
  },
  {
    "name": "PK: Parchi (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2S8JvDXXT4o9bqRG70qiAj83Cw2.jpg",
    "category": "PK - Pakistan Movies",
    "id": "749",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322187.mp4"
  },
  {
    "name": "PK: Parcham",
    "logo": "https://media.istockphoto.com/photos/flag-of-pakistan-picture-id959633894?k=20&m=959633894&s=612x612&w=0&h=WwtLROEbg0YrJRSz8hg7siRffEMtvalY_8hGe_dbe2w=",
    "category": "PK - Pakistan Movies",
    "id": "750",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322186.mkv"
  },
  {
    "name": "PK: Pappu Lahoria (2003)",
    "logo": "https://i.ibb.co/Hgf5dTQ/image.png",
    "category": "PK - Pakistan Movies",
    "id": "751",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322185.mkv"
  },
  {
    "name": "PK: O21 (2014)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bximDYrwbJk4S6yUJYukd3qj6Za.jpg",
    "category": "PK - Pakistan Movies",
    "id": "752",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322184.mp4"
  },
  {
    "name": "PK: New Latest Neelum Muneer Pakistani Movie ()",
    "logo": "https://i.ytimg.com/vi/WF24UpYWDtY/hqdefault.jpg",
    "category": "PK - Pakistan Movies",
    "id": "753",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322183.mkv"
  },
  {
    "name": "PK: Na Maloom Afraad 2 2018",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/64evmEMrjIGP2uyxKMVGVEo0mQc.jpg",
    "category": "PK - Pakistan Movies",
    "id": "754",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322182.mp4"
  },
  {
    "name": "PK: Motorcycle Girl (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dMOrXQguNrC13ZpGtiW66PJZS4x.jpg",
    "category": "PK - Pakistan Movies",
    "id": "755",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322181.mkv"
  },
  {
    "name": "PK: Moor (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2nodpCaigKtWvZfUwckm6hDB3Et.jpg",
    "category": "PK - Pakistan Movies",
    "id": "756",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322180.mkv"
  },
  {
    "name": "PK: Mehrunisa V Lub U (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3Q8aIxGz2mtArBo6owiR011qGCQ.jpg",
    "category": "PK - Pakistan Movies",
    "id": "757",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322179.mp4"
  },
  {
    "name": "PK: Mah e Mir (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lobmJnjI0a5dCEWEt4ZkT7IsNv7.jpg",
    "category": "PK - Pakistan Movies",
    "id": "758",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322178.mkv"
  },
  {
    "name": "PK: Maasi 2017",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qEpmiA35wA7dwz6N5fEDxDXfFdf.jpg",
    "category": "PK - Pakistan Movies",
    "id": "759",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322177.mkv"
  },
  {
    "name": "PK: Maan Jao Naa (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9jyz3Z0DXDTXoBENp9wsoCNjuhr.jpg",
    "category": "PK - Pakistan Movies",
    "id": "760",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322176.mkv"
  },
  {
    "name": "PK: Maalik (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v0e3kYp1xvgrEvZw6Z0rOFDJkBD.jpg",
    "category": "PK - Pakistan Movies",
    "id": "761",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322175.mkv"
  },
  {
    "name": "PK: Load Wedding (2018)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/8JbhYVGBvBR8nDq6qp1BWwBPpyH.jpg",
    "category": "PK - Pakistan Movies",
    "id": "762",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322174.mkv"
  },
  {
    "name": "PK: Latest Movie ()",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "763",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322173.mkv"
  },
  {
    "name": "PK: Karachi Se Lahore (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xpzhyTnsuS2eX2eYb8SUCotbovn.jpg",
    "category": "PK - Pakistan Movies",
    "id": "764",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322172.mp4"
  },
  {
    "name": "PK: Jawani Phir Nahi Ani (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yREOuueE8fZkCHfGVSC73AWFAPe.jpg",
    "category": "PK - Pakistan Movies",
    "id": "765",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322171.mp4"
  },
  {
    "name": "PK: Jalaibee (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/98jqOuMrkdckDHNXYe59XMggG0S.jpg",
    "category": "PK - Pakistan Movies",
    "id": "766",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322170.mp4"
  },
  {
    "name": "PK: Ho Mann Jahaan (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qesgzPU8Vlhr2eQDbeD61iuPe2D.jpg",
    "category": "PK - Pakistan Movies",
    "id": "767",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322169.mkv"
  },
  {
    "name": "PK: Heer Ranjha (1932)",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "768",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322168.mkv"
  },
  {
    "name": "PK: Danish Taimoor ()",
    "logo": null,
    "category": "PK - Pakistan Movies",
    "id": "769",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322167.mkv"
  },
  {
    "name": "PK: Dad's Army (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6MnhydfF3L97zJ0GlukE58kOByo.jpg",
    "category": "PK - Pakistan Movies",
    "id": "770",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322166.mkv"
  },
  {
    "name": "PK: Chalay Thay Saath (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bpYsaFjc8HvpOqYUJkSxKCCnRMe.jpg",
    "category": "PK - Pakistan Movies",
    "id": "771",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322165.mkv"
  },
  {
    "name": "PK: Chain Aye Na (2017)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xcKg0Cqu6hnIxDMJYulkZSnJF1I.jpg",
    "category": "PK - Pakistan Movies",
    "id": "772",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322164.mkv"
  },
  {
    "name": "PK: Cake 2018",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/oFsEI7Ou2GGdYaPrl1VbJnhfGdU.jpg",
    "category": "PK - Pakistan Movies",
    "id": "773",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322163.mkv"
  },
  {
    "name": "PK: Bol - 2011",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6hx1ogX91dxe4SGJ1MRHX9dLjp7.jpg",
    "category": "PK - Pakistan Movies",
    "id": "774",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322162.mkv"
  },
  {
    "name": "PK: Bin Roye (2015)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3fQAIsd3dD9QbplQbX9QgBjgtly.jpg",
    "category": "PK - Pakistan Movies",
    "id": "775",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322161.mkv"
  },
  {
    "name": "PK: Azaad (2000)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kIVEh2SlMqbBbDdFl55e7VTjfH1.jpg",
    "category": "PK - Pakistan Movies",
    "id": "776",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322160.mkv"
  },
  {
    "name": "PK: Alta Via dei Parchi. Viaggio a piedi in Emilia-Romagna (2013)",
    "logo": "https://pad.mymovies.it/filmclub/2013/12/081/locandina.jpg",
    "category": "PK - Pakistan Movies",
    "id": "777",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322159.mkv"
  },
  {
    "name": "PK: Actor in Law (2016)",
    "logo": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1EmBwDBXCJlfmcYNUUa7lJdBlvs.jpg",
    "category": "PK - Pakistan Movies",
    "id": "778",
    "url": "http://xx96.uk:8880/movie/{USERNAME}/{PASSWORD}/322157.mp4"
  }
];