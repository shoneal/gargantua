const films = [
  {
    release: new Date("2012-11-09"),
    publication: new Date("2022-09-21"),
    format: "фильм",
    grade: "love",
    title: "007: Координаты «Скайфолл»",
    original: "Skyfall",
    kinopoisk: "https://www.kinopoisk.ru/film/408871/",
    director: [
      {
        name: "Сэм Мендес",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Хавьер Бардем",
      },
      {
        name: "Джуди Денч",
      },
      {
        name: "Рэйф Файнс",
      },
      {
        name: "Наоми Харрис",
      },
    ],
    description:
      "Преданность Бонда своей начальнице М оказывается под угрозой, когда всплывают неприятные тайны её прошлого.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      {
        genre: "шпионаж",
      },
    ],
    screenshots: 51,
    posters: 1,
  }, // 007: координаты «скайфолл»
  {
    release: new Date("2015-11-06"),
    publication: new Date("2022-09-21"),
    format: "фильм",
    grade: "A+",
    title: "007: СПЕКТР",
    original: "Spectre",
    kinopoisk: "https://www.kinopoisk.ru/film/678552/",
    director: [
      {
        name: "Сэм Мендес",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Кристоф Вальц",
      },
      {
        name: "Леа Сейду",
      },
      {
        name: "Рэйф Файнс",
      },
    ],
    description:
      "Таинственное сообщение ведет Джеймса Бонда к организации СПЕКТР. Появление этой новой угрозы показывает агенту истинный источник всех его прошлых неудач.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 32,
    posters: 1,
  }, // 007: спектр
  {
    release: new Date("2019-12-04"),
    publication: new Date("2020-03-25"),
    format: "фильм",
    grade: "A+",
    title: "1917",
    original: "1917",
    kinopoisk: "https://www.kinopoisk.ru/film/1171976/",
    director: [
      {
        name: "Сэм Мендес",
      },
    ],
    cast: [
      {
        name: "Джордж Маккэй",
      },
      {
        name: "Дин-Чарльз Чепмен",
      },
    ],
    description:
      "Два солдата мчатся наперегонки со временем, чтобы спасти батальон от смертельной ловушки.",
    genres: [
      {
        genre: "военный",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // 1917
  {
    release: new Date("2023-04-05"),
    publication: new Date("2023-05-13"),
    format: "фильм",
    grade: "B",
    title: "Air: Большой прыжок",
    original: "Air",
    kinopoisk: "https://www.kinopoisk.ru/",
    director: [
      {
        name: "Бен Аффлек",
      },
    ],
    cast: [
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Бен Аффлек",
      },
      {
        name: "Виола Дэвис",
      },
      {
        name: "Крис Мессина",
      },
    ],
    description:
      "История сотрудничества Майкла Джордана с Nike, которое породило бренд Air Jordan, изменивший мир спорта и культуры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // air: большой прыжок
  {
    release: new Date("2021-08-13"),
    publication: new Date("2022-01-18"),
    format: "фильм",
    grade: "A",
    title: "CODA: Ребенок глухих родителей",
    original: "CODA",
    kinopoisk: "https://www.kinopoisk.ru/film/1311466/",
    director: [
      {
        name: "Шан Хейдер",
      },
    ],
    cast: [
      {
        name: "Эмилия Джонс",
      },
      {
        name: "Эухенио Дербес",
      },
      {
        name: "Фердия Уолш-Пило",
      },
      {
        name: "Трой Коцур",
      },
      {
        name: "Марли Мэтлин",
      },
      {
        name: "Дэниэл Дюран",
      },
    ],
    description:
      "Руби - единственный слышащий член семьи. Девушка хочет стать певицей. Она стоит перед выбором: семейный долг или мечта всей жизни.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // coda
  {
    release: new Date("2024-04-10"),
    publication: new Date("2024-04-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Fallout",
    original: "Fallout",
    kinopoisk: "https://www.kinopoisk.ru/series/1394131/",
    director: [
      {
        name: "Джонатан Нолан",
      },
      {
        name: "Лиза Джой",
      },
      {
        name: "Грэм Вагнер",
      },
      {
        name: "Женева Робертсон-Дуорет",
      },
    ],
    cast: [
      {
        name: "Элла Пернелл",
      },
      {
        name: "Аарон Мотен",
      },
      {
        name: "Уолтон Гоггинс",
      },
      {
        name: "Мойзес Ариас",
      },
    ],
    description:
      "В 2296 году, более 200 лет спустя после ядерной войны, потомки привилегированных и богатых живут в автономных благоустроенных бункерах, а остальное человечество выживает в жёстких условиях.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // fallout 1
  {
    release: new Date("2019-11-15"),
    publication: new Date("2022-02-21"),
    format: "фильм",
    grade: "A",
    title: "Ford против Ferrari",
    original: "Ford v Ferrari",
    kinopoisk: "https://www.kinopoisk.ru/film/835086/",
    director: [
      {
        name: "Джеймс Мэнголд",
      },
    ],
    cast: [
      {
        name: "Кристиан Бэйл",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Катрина Балф",
      },
      {
        name: "Трэйси Леттс",
      },
      {
        name: "Ноа Джуп",
      },
      {
        name: "Джон Бернтал",
      },
      {
        name: "Джош Лукас",
      },
    ],
    description:
      "Кэрролл Шелби и Кен Майлз разрабатывают для Ford инновационный гоночный автомобиль, чтобы победить Ferrari в гонке «24 часа Ле-Мана» 1966 года.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // ford против ferrari
  {
    release: new Date("2024-02-15"),
    publication: new Date("2024-10-07"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "The Vince Staples Show",
    original: "The Vince Staples Show",
    kinopoisk: "https://www.kinopoisk.ru/series/5450042/",
    director: [
      {
        name: "Йен Эдельман",
      },
      {
        name: "Морис Уильямс",
      },
      {
        name: "Винс Стэйплс",
      },
    ],
    cast: [
      {
        name: "Винс Стэйплс",
      },
    ],
    description:
      "Известный рэпер Винс Стэйплс сталкивается с трудностями и неожиданностями повседневной жизни в своем родном городе Бич.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // vince staples show
  {
    release: new Date("2006-09-01"),
    publication: new Date("2021-06-07"),
    format: "фильм",
    grade: "A",
    title: "Адреналин",
    original: "Crank",
    kinopoisk: "https://www.kinopoisk.ru/film/180609/",
    director: [
      {
        name: "Марк Невелдайн",
      },
      {
        name: "Брайан Тейлор",
      },
    ],
    cast: [
      {
        name: "Джейсон Стэйтем",
      },
      {
        name: "Эми Смарт",
      },
      {
        name: "Хосе Пабло Кантильо",
      },
      {
        name: "Дуайт Йоакам",
      },
    ],
    description:
      "Чев Челиос отравлен ядом, который активируется при снижении пульса.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // адреналин
  {
    release: new Date("2016-09-23"),
    publication: new Date("2019-02-14"),
    format: "фильм",
    grade: "A",
    title: "Аисты",
    original: "Storks",
    kinopoisk: "https://www.kinopoisk.ru/film/894045/",
    director: [
      {
        name: "Николас Столлер",
      },
      {
        name: "Даг Свитлэнд",
      },
    ],
    cast: [
      {
        name: "Энди Сэмберг",
      },
      {
        name: "Кэти Краун",
      },
      {
        name: "Келси Грэммер",
      },
      {
        name: "Дженнифер Энистон",
      },
      {
        name: "Тай Бурелл",
      },
      {
        name: "Антон Старкман",
      },
      {
        name: "Кигэн-Майкл Ки",
      },
      {
        name: "Джордан Пил",
      },
      {
        name: "Дэнни Трехо",
      },
    ],
    description:
      "Опытный аист-курьер должен исправить ошибку и доставить ребёнка, хотя его компания теперь занимается только посылками.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // аисты
  {
    release: new Date("2007-01-12"),
    publication: new Date("2022-01-24"),
    format: "фильм",
    grade: "A",
    title: "Альфа Дог",
    original: "Alpha Dog",
    kinopoisk: "https://www.kinopoisk.ru/film/84451/",
    director: [
      {
        name: "Ник Кассаветис",
      },
    ],
    cast: [
      {
        name: "Эмиль Хирш",
      },
      {
        name: "Антон Ельчин",
      },
      {
        name: "Джастин Тимберлейк",
      },
      {
        name: "Бен Фостер",
      },
      {
        name: "Шон Хэтоси",
      },
      {
        name: "Брюс Уиллис",
      },
      {
        name: "Шэрон Стоун",
      },
      {
        name: "Оливия Уайлд",
      },
      {
        name: "Аманда Сайфред",
      },
    ],
    description:
      "Дилеры похищают брата должника своего босса, но это больше похоже на веселую игру, от которой жертва в восторге.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // альфа дог
  {
    release: new Date("2021-12-25"),
    publication: new Date("2023-10-28"),
    format: "фильм",
    grade: "A",
    title: "Американский неудачник",
    original: "American Underdog",
    kinopoisk: "https://www.kinopoisk.ru/film/1347733/",
    director: [
      {
        name: "Эндрю Эрвин",
      },
      {
        name: "Джон Эрвин",
      },
    ],
    cast: [
      {
        name: "Закари Ливай",
      },
    ],
    description:
      "История жизни и карьеры профессионального футболиста Курта Уорнера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // американский неудачник
  {
    release: new Date("2023-12-22"),
    publication: new Date("2024-03-03"),
    format: "фильм",
    grade: "A",
    title: "Американское чтиво",
    original: "American Fiction",
    kinopoisk: "https://www.kinopoisk.ru/film/5212291/",
    director: [
      {
        name: "Корд Джефферсон",
      },
    ],
    cast: [
      {
        name: "Джеффри Райт",
      },
      {
        name: "Эрика Александр",
      },
      {
        name: "Стерлинг К. Браун",
      },
      {
        name: "Джон Ортис",
      },
    ],
    description:
      "Интеллектуал пишет роман, целиком состоящий из стереотипов об афроамериканцах. Вскоре он просыпается суперзвездой.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // американское чтиво
  {
    release: new Date("2005-12-21"),
    publication: new Date("2021-02-10"),
    format: "фильм",
    grade: "A",
    title: "Ангел-А",
    original: "Angel-A",
    kinopoisk: "https://www.kinopoisk.ru/film/160929/",
    director: [
      {
        name: "Люк Бессон",
      },
    ],
    cast: [
      {
        name: "Жамель Деббуз",
      },
      {
        name: "Рье Расмуссен",
      },
    ],
    description:
      "Высокая блондинка спускается с небес, чтобы помочь Андре вернуть долги.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // ангел-а
  {
    release: new Date("2015-06-03"),
    publication: new Date("2021-01-31"),
    format: "фильм",
    grade: "B",
    title: "Антураж",
    original: "Entourage / Красавцы",
    kinopoisk: "https://www.kinopoisk.ru/film/535317/",
    director: [
      {
        name: "Даг Эллин",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
      {
        name: "Эммануэль Шрики",
      },
      {
        name: "Ронда Раузи",
      },
      {
        name: "Билли Боб Торнтон",
      },
      {
        name: "Эмили Ратаковски",
      },
    ],
    description:
      "Винсент Чейз с друзьями снимает свой первый фильм под руководством Ари Голда.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // антураж
  {
    release: new Date("2022-04-01"),
    publication: new Date("2022-06-23"),
    format: "фильм",
    grade: "B",
    title: "Аполлон-10½: Приключение космического века",
    original: "Apollo 10½: A Space Age Childhood",
    kinopoisk: "https://www.kinopoisk.ru/film/1114648/",
    director: [
      {
        name: "Ричард Линклейтер",
      },
    ],
    cast: [
      {
        name: "Майло Кой",
      },
      {
        name: "Джек Блэк",
      },
      {
        name: "Закари Ливай",
      },
      {
        name: "Глен Пауэлл",
      },
    ],
    description:
      "История взросления подростка в пригороде Хьюстона летом 1969 года на фоне исторической высадки «Аполлона-11» на Луну.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // аполлон-10½
  {
    release: new Date("2024-11-09"),
    publication: new Date("2024-11-23"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Аркейн",
    original: "Arcane: League of Legends",
    kinopoisk: "https://www.kinopoisk.ru/series/4445150/",
    director: [
      {
        name: "Алекс Йи",
      },
      {
        name: "Кристиан Линке",
      },
    ],
    cast: [
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Кевин Алехандро",
      },
      {
        name: "Элла Пернелл",
      },
      {
        name: "Кэти Льюнг",
      },
      {
        name: "Гарри Ллойд",
      },
    ],
    description:
      "Две сестры противостоят друг другу в конфликте между технологичным Пилтовером и нищим Зауном.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 59,
    posters: 1,
  }, // aркейн 2
  {
    release: new Date("2021-11-06"),
    publication: new Date("2024-11-21"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Аркейн",
    original: "Arcane: League of Legends",
    kinopoisk: "https://www.kinopoisk.ru/series/4445150/",
    director: [
      {
        name: "Алекс Йи",
      },
      {
        name: "Кристиан Линке",
      },
    ],
    cast: [
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Кевин Алехандро",
      },
      {
        name: "Элла Пернелл",
      },
      {
        name: "Кэти Льюнг",
      },
      {
        name: "Гарри Ллойд",
      },
    ],
    description:
      "Две сестры противостоят друг другу в конфликте между технологичным Пилтовером и нищим Зауном.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 54,
    posters: 1,
  }, // aркейн 1
  {
    release: new Date("2011-12-23"),
    publication: new Date("2021-02-05"),
    format: "фильм",
    grade: "love",
    title: "Артист",
    original: "The Artist",
    kinopoisk: "https://www.kinopoisk.ru/film/539550/",
    director: [
      {
        name: "Мишель Хазанавичус",
      },
    ],
    cast: [
      {
        name: "Жан Дюжарден",
      },
      {
        name: "Беренис Бежо",
      },
      {
        name: "Джон Гудман",
      },
      {
        name: "Джеймс Кромуэлл",
      },
    ],
    description: "В жизнь звезды немого кино врывается прекрасная статистка.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // артист
  {
    release: new Date("2022-11-16"),
    publication: new Date("2022-05-27"),
    format: "сериал",
    season: "4",
    grade: "love",
    title: "Атланта",
    original: "Atlanta",
    kinopoisk: "https://www.kinopoisk.ru/series/882408/",
    director: [
      {
        name: "Дональд Гловер",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Зази Битц",
      },
    ],
    description:
      "История рассказывает о нескольких афроамериканцах из Атланты, каждый из которых стремится обеспечить себе достойную жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 72,
    posters: 1,
  }, // атланта 4
  {
    release: new Date("2022-03-24"),
    publication: new Date("2022-05-27"),
    format: "сериал",
    season: "3",
    grade: "love",
    title: "Атланта",
    original: "Atlanta",
    kinopoisk: "https://www.kinopoisk.ru/series/882408/",
    director: [
      {
        name: "Дональд Гловер",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Зази Битц",
      },
    ],
    description:
      "История рассказывает о нескольких афроамериканцах из Атланты, каждый из которых стремится обеспечить себе достойную жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // атланта 3
  {
    release: new Date("2018-03-01"),
    publication: new Date("2021-11-21"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Атланта",
    original: "Atlanta",
    kinopoisk: "https://www.kinopoisk.ru/series/882408/",
    director: [
      {
        name: "Дональд Гловер",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Зази Битц",
      },
    ],
    description:
      "История рассказывает о нескольких афроамериканцах из Атланты, каждый из которых стремится обеспечить себе достойную жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 34,
    posters: 1,
  }, // атланта 2
  {
    release: new Date("2016-09-06"),
    publication: new Date("2021-11-17"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Атланта",
    original: "Atlanta",
    kinopoisk: "https://www.kinopoisk.ru/series/882408/",
    director: [
      {
        name: "Дональд Гловер",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Зази Битц",
      },
    ],
    description:
      "История рассказывает о нескольких афроамериканцах из Атланты, каждый из которых стремится обеспечить себе достойную жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 44,
    posters: 1,
  }, // атланта 1
  {
    release: new Date("2001-06-15"),
    publication: new Date("2023-10-31"),
    format: "фильм",
    grade: "B",
    title: "Атлантида: Затерянный мир",
    original: "Atlantis: The Lost Empire",
    kinopoisk: "https://www.kinopoisk.ru/film/597/",
    director: [
      {
        name: "Гари Труздейл",
      },
      {
        name: "Кирк Уайз",
      },
    ],
    cast: [
      {
        name: "Майкл Дж. Фокс",
      },
      {
        name: "Кри Саммер",
      },
    ],
    description:
      "Молодой лингвист Майло Тэтч присоединяется к отважным исследователям в поисках таинственного континента Атлантида.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // атлантида: затерянный мир
  {
    release: new Date("2023-02-10"),
    publication: new Date("2023-02-21"),
    format: "фильм",
    grade: "B",
    title: "Аферисты",
    original: "Sharper",
    kinopoisk: "https://www.kinopoisk.ru/film/4383102/",
    director: [
      {
        name: "Бенджамин Карон",
      },
    ],
    cast: [
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Джулианна Мур",
      },
      {
        name: "Джон Литгоу",
      },
      {
        name: "Бриана Миддлтон",
      },
      {
        name: "Джастис Смит",
      },
    ],
    description:
      "Манхэттенская мошенница встречает авантюриста, специалиста по хитрым аферам.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 44,
    posters: 1,
  }, // аферисты
  {
    release: new Date("2022-06-17"),
    publication: new Date("2022-07-21"),
    format: "фильм",
    grade: "B",
    title: "Базз Лайтер",
    original: "Lightyear",
    kinopoisk: "https://www.kinopoisk.ru/film/4291715/",
    director: [
      {
        name: "Энгус МакЛэйн",
      },
    ],
    cast: [
      {
        name: "Крис Эванс",
      },
      {
        name: "Кеке Палмер",
      },
    ],
    description:
      "История приключений легендарного космического рейнджера Базза Лайтера.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 29,
    posters: 2,
  }, // базз лайтер
  {
    release: new Date("2020-03-06"),
    publication: new Date("2020-04-14"),
    format: "фильм",
    grade: "B",
    title: "Банкир",
    original: "The Banker",
    kinopoisk: "https://www.kinopoisk.ru/film/1199655/",
    director: [
      {
        name: "Джордж Нолфи",
      },
    ],
    cast: [
      {
        name: "Энтони Маки",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Николас Холт",
      },
      {
        name: "Ниа Лонг",
      },
    ],
    description:
      "Темнокожие бизнесмены пытаются обойти расовые ограничения в Америке 1950-х.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // банкир
  {
    release: new Date("2022-11-04"),
    publication: new Date("2022-12-16"),
    format: "фильм",
    grade: "A",
    title: "Банши Инишерина",
    original: "The Banshees of Inisherin",
    kinopoisk: "https://www.kinopoisk.ru/film/1354524/",
    director: [
      {
        name: "Мартин Макдона",
      },
    ],
    cast: [
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Брендан Глисон",
      },
      {
        name: "Керри Кондон",
      },
      {
        name: "Барри Кеоган",
      },
    ],
    description:
      "Двое товарищей оказываются в разногласиях на уединенном ирландском острове.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // банши инишерина
  {
    release: new Date("2023-04-16"),
    publication: new Date("2024-09-10"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk: "https://www.kinopoisk.ru/series/972587/",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Стивен Рут",
      },
      {
        name: "Сара Голдберг",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Генри Уинклер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 28,
    posters: 1,
  }, // барри 4
  {
    release: new Date("2022-04-24"),
    publication: new Date("2024-09-09"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk: "https://www.kinopoisk.ru/series/972587/",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Стивен Рут",
      },
      {
        name: "Сара Голдберг",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Генри Уинклер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // барри 3
  {
    release: new Date("2019-03-31"),
    publication: new Date("2024-09-08"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk: "https://www.kinopoisk.ru/series/972587/",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Стивен Рут",
      },
      {
        name: "Сара Голдберг",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Генри Уинклер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // барри 2
  {
    release: new Date("2018-03-25"),
    publication: new Date("2024-09-07"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk: "https://www.kinopoisk.ru/series/972587/",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Стивен Рут",
      },
      {
        name: "Сара Голдберг",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Генри Уинклер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // барри 1
  {
    release: new Date("2017-10-06"),
    publication: new Date("2025-03-17"),
    format: "фильм",
    grade: "B",
    title: "Бегущий по лезвию 2049",
    original: "Blade Runner 2049",
    kinopoisk: "https://www.kinopoisk.ru/film/589290/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Харрисон Форд",
      },
      {
        name: "Ана де Армас",
      },
      {
        name: "Сильвия Хукс",
      },
      {
        name: "Робин Райт",
      },
      {
        name: "Маккензи Дэвис",
      },
      {
        name: "Джаред Лето",
      },
      {
        name: "Дэйв Батиста",
      },
    ],
    description:
      "В мире будущего офицер полиции Кей, контролирующий репликантов, обнаруживает опасную тайну, угрожающую человечеству.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 81,
    posters: 2,
  }, // бегущий по лезвию 2049
  {
    release: new Date("2023-12-08"),
    publication: new Date("2024-03-03"),
    format: "фильм",
    grade: "B",
    title: "Бедные-несчастные",
    original: "Poor Things",
    kinopoisk: "https://www.kinopoisk.ru/film/4396438/",
    director: [
      {
        name: "Йоргос Лантимос",
      },
    ],
    cast: [
      {
        name: "Эмма Стоун",
      },
      {
        name: "Уиллем Дефо",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Рами Юссеф",
      },
      {
        name: "Джеррод Кармайкл",
      },
    ],
    description:
      "Сумасшедший хирург вылавливает из Темзы тело молодой беременной женщины, прыгнувшей с моста, пересаживает ей мозг её собственного нерожденного младенца и реанимирует.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 42,
    posters: 1,
  }, // бедные несчастные
  {
    release: new Date("1998-02-20"),
    publication: new Date("2022-01-19"),
    format: "фильм",
    grade: "C",
    title: "Без чувств",
    original: "Senseless",
    kinopoisk: "https://www.kinopoisk.ru/film/5084/",
    director: [
      {
        name: "Пенелопа Сфирис",
      },
    ],
    cast: [
      {
        name: "Марлон Уайанс",
      },
      {
        name: "Дэвид Спейд",
      },
      {
        name: "Мэттью Лиллард",
      },
      {
        name: "Тамара Тейлор",
      },
    ],
    description:
      "Бедный студент участвует в научном эксперименте, чтобы подзаработать, но получает неожиданные побочные эффекты.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // без чувств
  {
    release: new Date("2016-12-01"),
    publication: new Date("2025-03-25"),
    format: "фильм",
    grade: "A+",
    title: "Безумный Макс: Дорога ярости. Чёрно-белое издание",
    original: "Mad Max Fury Road Black And Chrome Edition",
    kinopoisk: "https://www.kinopoisk.ru/film/453406/",
    director: [
      {
        name: "Джордж Миллер",
      },
    ],
    cast: [
      {
        name: "Том Харди",
      },
      {
        name: "Шарлиз Терон",
      },
      {
        name: "Николас Холт",
      },
      {
        name: "Хью Кияс-Бёрн",
      },
      {
        name: "Зои Кравиц",
      },
      {
        name: "Роузи Хантингтон-Уайтли",
      },
      {
        name: "Райли Кио",
      },
      {
        name: "Энгус Сэмпсон",
      },
    ],
    description:
      "Выживание бунтаря-одиночки в постапокалиптическом мире. Чёрно-белое издание.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 54,
    posters: 1,
  }, // безумный макс. чёрно-белое издание
  {
    release: new Date("2021-11-12"),
    publication: new Date("2025-03-02"),
    format: "фильм",
    grade: "B",
    title: "Белфаст",
    original: "Belfast",
    kinopoisk: "https://www.kinopoisk.ru/film/1397888/",
    director: [
      {
        name: "Кеннет Брана",
      },
    ],
    cast: [
      {
        name: "Джуд Хилл",
      },
      {
        name: "Катрина Балф",
      },
      {
        name: "Джейми Дорнан",
      },
      {
        name: "Киран Хайндс",
      },
      {
        name: "Джуди Денч",
      },
    ],
    description:
      "Жизнь и беспорядки ирландского городка глазами девятилетнего мальчугана.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 69,
    posters: 2,
  }, // белфаст
  {
    release: new Date("1992-03-27"),
    publication: new Date("2023-01-29"),
    format: "фильм",
    grade: "C",
    title: "Белые люди не умеют прыгать",
    original: "White Men Can't Jump",
    kinopoisk: "https://www.kinopoisk.ru/film/4347/",
    director: [
      {
        name: "Рон Шелтон",
      },
    ],
    cast: [
      {
        name: "Уэсли Снайпс",
      },
      {
        name: "Вуди Харрельсон",
      },
      {
        name: "Рози Перес",
      },
      {
        name: "Тайра Феррелл",
      },
    ],
    description:
      "Сидни Дин и Билли Хойл — два баскетболиста, которые объединяются для участия в уличных соревнованиях ради заработка.",
    genres: [
      {
        genre: "спорт",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // белые люди не умеют прыгать
  {
    release: new Date("2014-01-18"),
    publication: new Date("2022-08-04"),
    format: "фильм",
    grade: "C",
    title: "Бесконечно белый медведь",
    original: "Infinitely Polar Bear",
    kinopoisk: "https://www.kinopoisk.ru/film/596215/",
    director: [
      {
        name: "Майя Форбс",
      },
    ],
    cast: [
      {
        name: "Марк Руффало",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Имоджин Володарски",
      },
      {
        name: "Эшли Ауфдерхайд",
      },
    ],
    description: "Отец с биполярным расстройством пытается вернуть семью.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // бесконечно белый медведь
  {
    release: new Date("2009-11-25"),
    publication: new Date("2023-05-01"),
    format: "фильм",
    grade: "B",
    title: "Бесподобный мистер Фокс",
    original: "Fantastic Mr. Fox",
    kinopoisk: "https://www.kinopoisk.ru/film/86621/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Мэрил Стрип",
      },
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Билл Мюррей",
      },
    ],
    description:
      "Разъяренные фермеры, уставшие от постоянных нападок хитрого лиса на их курятники, готовятся уничтожить своего врага и его «хитрое» семейство.",
    genres: [
      {
        genre: "анимация",
      },
    ],
    screenshots: 24,
    posters: 2,
  }, // бесподобный мистер фокс
  {
    release: new Date("2011-01-09"),
    continuation: new Date("2013-01-13"),
    publication: new Date("2022-04-03"),
    format: "сериал",
    season: "1-3",
    grade: "C",
    title: "Бесстыжие",
    original: "Shameless",
    kinopoisk: "https://www.kinopoisk.ru/series/571335/",
    director: [
      {
        name: "Пол Эбботт",
      },
    ],
    cast: [
      {
        name: "Уильям Х. Мэйси",
      },
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Эмми Россам",
      },
      {
        name: "Джастин Чатвин",
      },
    ],
    description:
      "В Чикаго живёт многодетная семья Галлагеров: пьющий отец и старшая дочь Фиона, которая заботится о младших и ищет работу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 38,
    posters: 3,
  }, // бесстыжие 1-3
  {
    release: new Date("2020-05-01"),
    publication: new Date("2021-05-18"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Бетти",
    original: "Betty",
    kinopoisk: "https://www.kinopoisk.ru/series/1309955/",
    director: [
      {
        name: "Кристал Мозелл",
      },
    ],
    cast: [
      {
        name: "Деде Лавлэйс",
      },
      {
        name: "Кабрина Адамс",
      },
      {
        name: "Нина Моран",
      },
      {
        name: "Аджани Расселл",
      },
      {
        name: "Рейчел Винберг",
      },
    ],
    description:
      "Группа девушек преодолевает личные трудности, пробиваясь в мужской мир скейтбординга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // бетти 1
  {
    release: new Date("1980-11-13"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "C",
    title: "Бешеный бык",
    original: "Raging Bull",
    kinopoisk:
      "https://www.kinopoisk.ru/film/374/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Мартин Скорсезе",
      },
    ],
    cast: [
      {
        name: "Роберт Де Ниро",
      },
      {
        name: "Джо Пеши",
      },
    ],
    description:
      "Джейк ЛаМотта по прозвищу Бронксский бык - боксер 1940-х годов, не умевший обуздывать свою грубую силу даже за пределами ринга.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // бешеный бык
  {
    release: new Date("2017-09-29"),
    publication: new Date("2023-05-05"),
    format: "фильм",
    grade: "C",
    title: "Битва полов",
    original: "Battle of the Sexes",
    kinopoisk: "https://www.kinopoisk.ru/film/928805/",
    director: [
      {
        name: "Джонатан Дэйтон",
      },
      {
        name: "Валери Фэрис",
      },
    ],
    cast: [
      {
        name: "Эмма Стоун",
      },
      {
        name: "Стив Карелл",
      },
      {
        name: "Андреа Райзборо",
      },
    ],
    description:
      "История теннисного матча 1973 года между первой ракеткой мира Билли Джин Кинг и экс-чемпионом Бобби Риггсом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // битва полов
  {
    release: new Date("2022-09-16"),
    publication: new Date("2022-10-03"),
    format: "фильм",
    grade: "C",
    title: "Блондинка",
    original: "Blonde",
    kinopoisk: "https://www.kinopoisk.ru/film/525530/",
    director: [
      {
        name: "Эндрю Доминик",
      },
    ],
    cast: [
      {
        name: "Ана де Армас",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Бобби Каннавале",
      },
    ],
    description:
      "Трагическая история жизни культовой красавицы и звезды Голливуда Мэрилин Монро.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 63,
    posters: 1,
  }, // блондинка
  {
    release: new Date("2017-06-15"),
    publication: new Date("2024-03-04"),
    format: "фильм",
    grade: "A",
    title: "Большой злой лис и другие сказки",
    original:
      "The Big Bad Fox and Other Tales... / Le grand méchant renard et autres contes...",
    kinopoisk: "https://www.kinopoisk.ru/film/1047719/",
    director: [
      {
        name: "Патрик Имбер",
      },
      {
        name: "Бенжамин Реннер",
      },
    ],
    cast: [
      {
        name: "Гийом Дарно",
      },
      {
        name: "Дамьен Витецка",
      },
      {
        name: "Камел Абдессадок",
      },
      {
        name: "Антуан Шумский",
      },
    ],
    description:
      "Переполох за переполохом происходит на одной отдаленной ферме. Свинья, кролик, утка и лис попадают в разные передряги.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 43,
    posters: 2,
  }, // большой злой лис и другие сказки
  {
    release: new Date("2000-08-23"),
    publication: new Date("2020-02-19"),
    format: "фильм",
    grade: "love",
    title: "Большой куш",
    original: "Snatch / Спиздили",
    kinopoisk: "https://www.kinopoisk.ru/film/526/",
    director: [
      {
        name: "Гай Ричи",
      },
    ],
    cast: [
      {
        name: "Джейсон Стэйтем",
      },
      {
        name: "Стивен Грэм",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Робби Ги",
      },
      {
        name: "Ленни Джеймс",
      },
      {
        name: "Деннис Фарина",
      },
      {
        name: "Винни Джонс",
      },
      {
        name: "Бенисио Дель Торо",
      },
    ],
    description:
      "За бесценным бриллиантом охотятся боксёрские промоутеры, букмекеры, русский гангстер, грабители и ювелиры.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // большой куш
  {
    release: new Date("2023-04-05"),
    publication: new Date("2025-07-20"),
    format: "фильм",
    grade: "A",
    title: "Братья Супер Марио в кино",
    original: "The Super Mario Bros. Movie",
    kinopoisk: "https://www.kinopoisk.ru/film/1111005/",
    director: [
      {
        name: "Аарон Хорват",
      },
      {
        name: "Михаэль Еленик",
      },
      {
        name: "Пьер Ледюк",
      },
    ],
    cast: [
      {
        name: "Крис Пратт",
      },
      {
        name: "Чарли Дэй",
      },
      {
        name: "Аня Тейлор-Джой",
      },
      {
        name: "Джек Блэк",
      },
      {
        name: "Кигэн-Майкл Ки",
      },
      {
        name: "Сет Роген",
      },
      {
        name: "Фред Армисен",
      },
    ],
    description:
      "Братья Марио и Луиджи через портал отправляются спасать принцессу Пич и сражаться с Боузером.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // братья супер марио в кино
  {
    release: new Date("1999-09-17"),
    publication: new Date("2019-06-02"),
    format: "фильм",
    grade: "A+",
    title: "Бриллиантовый полицейский",
    original: "Blue Streak",
    kinopoisk: "https://www.kinopoisk.ru/film/7415/",
    director: [
      {
        name: "Лес Мэйфилд",
      },
    ],
    cast: [
      {
        name: "Мартин Лоуренс",
      },
      {
        name: "Люк Уилсон",
      },
      {
        name: "Питер Грин",
      },
      {
        name: "Дэйв Шаппелл",
      },
    ],
    description:
      "Бывший заключенный выдает себя за полицейского, чтобы вернуть бриллиант, который он украл много лет назад.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // бриллиантовый полицейский
  {
    release: new Date("2021-08-12"),
    publication: new Date("2022-04-25"),
    format: "сериал",
    season: "8",
    grade: "A+",
    title: "Бруклин 9-9",
    original: "Brooklyn Nine-Nine",
    kinopoisk: "https://www.kinopoisk.ru/series/714102/",
    director: [
      {
        name: "Дэн Гур",
      },
      {
        name: "Майкл Шур",
      },
    ],
    cast: [
      {
        name: "Энди Сэмберг",
      },
      {
        name: "Андре Брауэр",
      },
      {
        name: "Терри Крюс",
      },
      {
        name: "Мелисса Фумеро",
      },
      {
        name: "Джо Ло Трульо",
      },
      {
        name: "Стефани Беатрис",
      },
    ],
    description:
      "Сериал рассказывает о жизни полицейского участка в вымышленном 99 округе в Бруклине.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 18,
    posters: 1,
  }, // бруклин 9-9 8
  {
    release: new Date("2024-09-01"),
    publication: new Date("2025-02-21"),
    format: "фильм",
    grade: "D",
    title: "Бруталист",
    original: "The Brutalist",
    kinopoisk: "https://www.kinopoisk.ru/film/1405331/",
    director: [
      {
        name: "Брэйди Корбе",
      },
    ],
    cast: [
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Фелисити Джонс",
      },
      {
        name: "Гай Пирс",
      },
      {
        name: "Джо Элвин",
      },
      {
        name: "Рэффи Кэссиди",
      },
      {
        name: "Алессандро Нивола",
      },
      {
        name: "Эмма Лейрд",
      },
      {
        name: "Исаак Де Банколе",
      },
    ],
    description:
      "В 1947 году архитектор уезжает из послевоенной Европы в США. Встреча с богатым клиентом навсегда меняет его судьбу.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 72,
    posters: 2,
  }, // бруталист
  {
    release: new Date("2003-05-23"),
    publication: new Date("2022-04-09"),
    format: "фильм",
    grade: "A",
    title: "Брюс Всемогущий",
    original: "Bruce Almighty",
    kinopoisk: "https://www.kinopoisk.ru/film/39577/",
    director: [
      {
        name: "Том Шэдьяк",
      },
    ],
    cast: [
      {
        name: "Джим Керри",
      },
      {
        name: "Морган Фриман",
      },
      {
        name: "Дженнифер Энистон",
      },
    ],
    description:
      "Ведущему новостей выпадает уникальная возможность побывать на месте Всемогущего.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "фэнтези",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // брюс всемогущий
  {
    release: new Date("1996-02-21"),
    publication: new Date("2021-03-06"),
    format: "фильм",
    grade: "C",
    title: "Бутылочная ракета",
    original: "Bottle Rocket",
    kinopoisk: "https://www.kinopoisk.ru/film/7231/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Люк Уилсон",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Роберт Мусгрейв",
      },
    ],
    description:
      "Трое друзей планируют совершить простое ограбление и пуститься в бега.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // бутылочная ракета
  {
    release: new Date("2022-08-05"),
    publication: new Date("2022-10-02"),
    format: "фильм",
    grade: "A",
    title: "Быстрее пули",
    original: "Bullet Train",
    kinopoisk: "https://www.kinopoisk.ru/film/1392550/",
    director: [
      {
        name: "Дэвид Литч",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Джои Кинг",
      },
      {
        name: "Аарон Тейлор-Джонсон",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Эндрю Кодзи",
      },
      {
        name: "Хироюки Санада",
      },
      {
        name: "Бэд Банни",
      },
      {
        name: "Зази Битц",
      },
      {
        name: "Майкл Шеннон",
      },
      {
        name: "Логан Лерман",
      },
    ],
    description:
      "Киллер-пацифист должен вынести чемодан из поезда, набитого наемными убийцами.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 29,
    posters: 2,
  }, // быстрее пули
  {
    release: new Date("1995-02-10"),
    publication: new Date("2025-05-23"),
    format: "фильм",
    grade: "B",
    title: "Быстрый и мертвый",
    original: "The Quick and the Dead",
    kinopoisk: "https://www.kinopoisk.ru/film/2273/",
    director: [
      {
        name: "Сэм Рэйми",
      },
    ],
    cast: [
      {
        name: "Шэрон Стоун",
      },
      {
        name: "Рассел Кроу",
      },
      {
        name: "Джин Хэкмен",
      },
      {
        name: "Леонардо ДиКаприо",
      },
      {
        name: "Кит Дэвид",
      },
    ],
    description:
      "Женщина-стрелок приезжает на дуэльный турнир, чтобы отомстить за смерть своего отца.",
    genres: [
      {
        genre: "вестерн",
      },
    ],
    screenshots: 24,
    posters: 3,
  }, // быстрый и мертвый
  {
    release: new Date("2023-04-07"),
    publication: new Date("2023-11-26"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Быть присяжным",
    original: "Jury Duty",
    kinopoisk: "https://www.kinopoisk.ru/series/5106451/",
    director: [
      {
        name: "Ли Айзенберг",
      },
      {
        name: "Джин Ступницки",
      },
    ],
    cast: [
      {
        name: "Рональд Гладден",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "О работе американского суда глазами Рональда Гладдена, присяжного, который не подозревает, что все, кроме него, — актёры, и происходящее тщательно спланировано.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "реалити",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // быть присяжным
  {
    release: new Date("2022-03-04"),
    publication: new Date("2022-04-18"),
    format: "фильм",
    grade: "A",
    title: "Бэтмен",
    original: "The Batman",
    kinopoisk: "https://www.kinopoisk.ru/film/590286/",
    director: [
      {
        name: "Мэтт Ривз",
      },
    ],
    cast: [
      {
        name: "Роберт Паттинсон",
      },
      {
        name: "Зои Кравиц",
      },
      {
        name: "Пол Дано",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Джон Туртурро",
      },
      {
        name: "Колин Фаррелл",
      },
    ],
    description:
      "Серийный убийца устраняет ключевых политиков Готэма, втягивая Бэтмена в расследование коррупции. Ему предстоит не только разоблачить преступные схемы, но и усомниться в причастности своей семьи.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "боевик",
      },
      { genre: "супергероика" },
      {
        genre: "dc",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // бэтмен
  {
    release: new Date("2007-09-21"),
    publication: new Date("2020-01-14"),
    format: "фильм",
    grade: "A",
    title: "В диких условиях",
    original: "Into the Wild",
    kinopoisk: "https://www.kinopoisk.ru/film/252626/",
    director: [
      {
        name: "Шон Пенн",
      },
    ],
    cast: [
      {
        name: "Эмиль Хирш",
      },
      {
        name: "Кэтрин Кинер",
      },
      {
        name: "Винс Вон",
      },
      {
        name: "Кристен Стюарт",
      },
    ],
    description:
      "Кристофер МакКэндлесс, сын богатых родителей и выпускник колледжа Эмори, жертвует деньги на благотворительность и отправляется на Аляску.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // в диких условиях
  {
    release: new Date("2006-12-15"),
    publication: new Date("2020-01-27"),
    format: "фильм",
    grade: "A",
    title: "В погоне за счастьем",
    original: "The Pursuit of Happyness",
    kinopoisk: "https://www.kinopoisk.ru/film/104938/",
    director: [
      {
        name: "Габриэле Муччино",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Джейден Смит",
      },
      {
        name: "Тандиве Ньютон",
      },
    ],
    description:
      "Отец-одиночка Крис Гарднер приложил максимум усилий, чтобы обеспечить счастливое детство своему пятилетнему сыну.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // в погоне за счастьем
  {
    release: new Date("2022-06-17"),
    publication: new Date("2022-08-01"),
    format: "фильм",
    grade: "C",
    title: "В ритме ча-ча-ча",
    original: "Cha Cha Real Smooth",
    kinopoisk: "https://www.kinopoisk.ru/film/4414982/",
    director: [
      {
        name: "Купер Рэфф",
      },
    ],
    cast: [
      {
        name: "Купер Рэфф",
      },
      {
        name: "Дакота Джонсон",
      },
      {
        name: "Лесли Манн",
      },
    ],
    description:
      "Ведущий вечеринок на бар-мицве подружился с матерью и её дочерью с аутизмом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // в ритме ча-ча-ча
  {
    release: new Date("2006-11-10"),
    publication: new Date("2025-03-02"),
    format: "фильм",
    grade: "C",
    title: "Вавилон",
    original: "Babel",
    kinopoisk: "https://www.kinopoisk.ru/film/102125/",
    director: [
      {
        name: "Алехандро Гонсалес Иньярриту",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Гаэль Гарсиа Берналь",
      },
      {
        name: "Кодзи Якусё",
      },
      {
        name: "Ринко Кикути",
      },
      {
        name: "Адриана Барраса",
      },
      {
        name: "Эль Фаннинг",
      },
    ],
    description:
      "Трагедия в марокканской пустыне связывает судьбы четырёх семей.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // вавилон (2006)
  {
    release: new Date("2022-12-23"),
    publication: new Date("2023-02-05"),
    format: "фильм",
    grade: "A",
    title: "Вавилон",
    original: "Babylon",
    kinopoisk: "https://www.kinopoisk.ru/film/1283955/",
    director: [
      {
        name: "Дэмьен Шазелл",
      },
    ],
    cast: [
      {
        name: "Диего Кальва",
      },
      {
        name: "Марго Робби",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Джован Адепо",
      },
      {
        name: "Ли Цзюнь Ли",
      },
    ],
    description:
      "Голливуд, конец 1920-х. Звезды немого кино пытаются найти место в новом мире, где набирают популярность звуковые фильмы.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 40,
    posters: 2,
  }, // вавилон (2022)
  {
    release: new Date("2021-01-15"),
    publication: new Date("2021-03-11"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Ванда/Вижн",
    original: "WandaVision",
    kinopoisk: "https://www.kinopoisk.ru/series/1203040/",
    director: [
      {
        name: "Жаклин Шеффер",
      },
    ],
    cast: [
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Пол Беттани",
      },
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Тейона Паррис",
      },
      {
        name: "Рэндалл Пак",
      },
    ],
    description:
      "Ванда и Вижн — молодожены в городке Вествью. Их идеальная жизнь постепенно начинает рушиться.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "фэнтези",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // ванда вижн
  {
    release: new Date("2022-09-09"),
    publication: new Date("2025-04-06"),
    format: "фильм",
    grade: "A",
    title: "Варвар",
    original: "Barbarian",
    kinopoisk: "https://www.kinopoisk.ru/film/4749790/",
    director: [
      {
        name: "Зак Креггер",
      },
    ],
    cast: [
      {
        name: "Джорджина Кэмпбелл",
      },
      {
        name: "Билл Скарсгард",
      },
      {
        name: "Джастин Лонг",
      },
    ],
    description:
      "Девушка приезжает в съемный дом и обнаруживает, что там уже живет другой человек.",
    genres: [
      {
        genre: "ужасы",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 50,
    posters: 1,
  }, // варвар
  {
    release: new Date("2009-05-29"),
    publication: new Date("2020-07-19"),
    format: "фильм",
    grade: "A+",
    title: "Вверх",
    original: "Up",
    kinopoisk: "https://www.kinopoisk.ru/film/325381/",
    director: [
      {
        name: "Пит Доктер",
      },
      {
        name: "Боб Питерсон",
      },
    ],
    cast: [
      {
        name: "Эдвард Эснер",
      },
      {
        name: "Кристофер Пламмер",
      },
      {
        name: "Джордан Нагаи",
      },
    ],
    description:
      "Ворчун Карл Фредриксен отправляется в волшебное путешествие в собственном доме.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // вверх
  {
    release: new Date("2023-09-04"),
    publication: new Date("2024-08-19"),
    format: "фильм",
    grade: "B",
    title: "Великая ирония",
    original: "Coup de chance",
    kinopoisk: "https://www.kinopoisk.ru/film/4541527/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Лу де Лааж",
      },
      {
        name: "Нильс Шнайдер",
      },
      {
        name: "Мельвиль Пупо",
      },
    ],
    description:
      "Связь двух молодых людей приводит к супружеской неверности и, в конечном счете, к преступлению.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // великая ирония
  {
    release: new Date("2021-11-24"),
    publication: new Date("2025-02-28"),
    format: "фильм",
    grade: "A",
    title: "Вершина богов",
    original: "The Summit of the Gods / Le sommet des dieux",
    kinopoisk: "https://www.kinopoisk.ru/film/1090932/",
    director: [
      {
        name: "Патрик Имбер",
      },
    ],
    cast: [
      {
        name: "Лазар Эрсон-Макарель",
      },
      {
        name: "Эрик Эрсон-Макарель",
      },
      {
        name: "Дамиен Буассо",
      },
    ],
    description:
      "Фотожурналист одержим поиском исчезнувшего в Гималаях альпиниста, чтобы раскрыть правду о первом восхождении на Эверест.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 57,
    posters: 2,
  }, // вершина богов
  {
    release: new Date("2021-12-10"),
    publication: new Date("2022-03-27"),
    format: "фильм",
    grade: "B",
    title: "Вестсайдская история",
    original: "West Side Story",
    kinopoisk: "https://www.kinopoisk.ru/film/839653/",
    director: [
      {
        name: "Стивен Спилберг",
      },
    ],
    cast: [
      {
        name: "Рэйчел Зеглер",
      },
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Майк Фейст",
      },
      {
        name: "Ариана Дебоуз",
      },
      {
        name: "Дэвид Альварес",
      },
    ],
    description:
      "История невозможной любви юноши и девушки из враждующих группировок.",
    genres: [
      {
        genre: "мюзикл",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 21,
    posters: 3,
  }, // вестсайдская история
  {
    release: new Date("2019-01-28"),
    publication: new Date("2020-10-15"),
    format: "фильм",
    grade: "B",
    title: "Взрослеть на полную",
    original: "Big Time Adolescence",
    kinopoisk: "https://www.kinopoisk.ru/film/1166942/",
    director: [
      {
        name: "Джейсон Орли",
      },
    ],
    cast: [
      {
        name: "Гриффин Глюк",
      },
      {
        name: "Пит Дэвидсон",
      },
    ],
    description:
      "Подросток из пригорода взрослеет, находясь под разрушительным влиянием друга, бросившего колледж.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // взрослеть на полную
  {
    release: new Date("2023-08-18"),
    publication: new Date("2023-09-18"),
    format: "фильм",
    grade: "B",
    title: "Взрослые",
    original: "The Adults",
    kinopoisk: "https://www.kinopoisk.ru/film/5256888/",
    director: [
      {
        name: "Дастин Гай Дефа",
      },
    ],
    cast: [
      {
        name: "Майкл Сера",
      },
      {
        name: "Ханна Гросс",
      },
      {
        name: "София Лиллис",
      },
    ],
    description:
      "Попытка Эрика быстро навестить семью срывается: семейные разборки и покер держат его в городе.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // взрослые
  {
    release: new Date("2021-12-01"),
    publication: new Date("2022-03-27"),
    format: "фильм",
    grade: "B",
    title: "Власть пса",
    original: "The Power of the Dog",
    kinopoisk: "https://www.kinopoisk.ru/film/1262931/",
    director: [
      {
        name: "Джейн Кэмпион",
      },
    ],
    cast: [
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Кирстен Данст",
      },
      {
        name: "Джесси Племонс",
      },
      {
        name: "Коди Смит-Макфи",
      },
    ],
    description: "Опасный фермер противостоит новой семье брата.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "вестерн",
      },
    ],
    screenshots: 20,
    posters: 2,
  }, // власть пса
  {
    release: new Date("2007-10-26"),
    publication: new Date("2020-04-06"),
    format: "фильм",
    grade: "C",
    title: "Влюбиться в невесту брата",
    original: "Dan in Real Life",
    kinopoisk: "https://www.kinopoisk.ru/film/196661/",
    director: [
      {
        name: "Питер Хеджес",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Жюльет Бинош",
      },
      {
        name: "Дейн Кук",
      },
      {
        name: "Элисон Пилл",
      },
      {
        name: "Бритт Робертсон",
      },
      {
        name: "Эмили Блант",
      },
    ],
    description:
      "Вдовец узнает, что женщина, в которую он влюбился, — подружка его брата.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // влюбиться в невесту брата
  {
    release: new Date("2008-01-20"),
    continuation: new Date("2012-07-15"),
    publication: new Date("2019-11-22"),
    format: "сериал",
    season: "1-5",
    grade: "love",
    title: "Во все тяжкие",
    original: "Breaking Bad",
    kinopoisk: "https://www.kinopoisk.ru/series/404900/",
    director: [
      {
        name: "Винс Гиллиган",
      },
    ],
    cast: [
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Анна Ганн",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Дин Норрис",
      },
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Джанкарло Эспозито",
      },
      {
        name: "Джонатан Бэнкс",
      },
    ],
    description:
      "Уолтер Уайт, преподаватель химии в школе, узнает, что он болен раком лёгких, и решает стать наркодилером, чтобы обеспечить будущее своей семьи.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 43,
    posters: 6,
  }, // во все тяжкие 1-5
  {
    release: new Date("2004-12-25"),
    publication: new Date("2020-06-08"),
    format: "фильм",
    grade: "C",
    title: "Водная жизнь",
    original: "The Life Aquatic with Steve Zissou / Водная жизнь Стива Зиссу",
    kinopoisk: "https://www.kinopoisk.ru/film/18543/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Билл Мюррей",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Анжелика Хьюстон",
      },
      {
        name: "Уиллем Дефо",
      },
      {
        name: "Джефф Голдблюм",
      },
      {
        name: "Майкл Гэмбон",
      },
    ],
    description: "Океанограф Стив Зиссу мстит акуле, убившей его напарника.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // водная жизнь
  {
    release: new Date("2013-12-25"),
    publication: new Date("2022-02-25"),
    format: "фильм",
    grade: "A+",
    title: "Волк с Уолл-стрит",
    original: "The Wolf of Wall Street",
    kinopoisk: "https://www.kinopoisk.ru/film/462682/",
    director: [
      {
        name: "Мартин Скорсезе",
      },
    ],
    cast: [
      {
        name: "Леонардо ДиКаприо",
      },
      {
        name: "Джона Хилл",
      },
      {
        name: "Марго Робби",
      },
      {
        name: "Кайл Чендлер",
      },
      {
        name: "Джон Бернтал",
      },
    ],
    description:
      "История брокера Джордана Белфорта, которому удалось сказочно разбогатеть на биржевых махинациях.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // волк с уолл-стрит
  {
    release: new Date("2019-11-15"),
    publication: new Date("2021-08-15"),
    format: "фильм",
    grade: "A+",
    title: "Волны",
    original: "Waves",
    kinopoisk: "https://www.kinopoisk.ru/film/1172136/",
    director: [
      {
        name: "Трей Эдвард Шульц",
      },
    ],
    cast: [
      {
        name: "Тейлор Расселл",
      },
      {
        name: "Келвин Харрисон мл.",
      },
      {
        name: "Алекса Деми",
      },
      {
        name: "Рене Голдсберри",
      },
      {
        name: "Стерлинг К. Браун",
      },
      {
        name: "Лукас Хеджес",
      },
    ],
    description:
      "Борца Тайлера из богатой семьи подстерегает двойной удар: угроза карьеры из-за операции и беременность девушки Алексис.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // волны
  {
    release: new Date("2024-05-17"),
    publication: new Date("2024-07-13"),
    format: "фильм",
    grade: "D",
    title: "Воображаемые друзья",
    original: "IF",
    kinopoisk: "https://www.kinopoisk.ru/film/4847638/",
    director: [
      {
        name: "Джон Красински",
      },
    ],
    cast: [
      {
        name: "Кэйли Флеминг",
      },
      {
        name: "Райан Рейнольдс",
      },
      {
        name: "Джон Красински",
      },
      {
        name: "Фиона Шоу",
      },
      {
        name: "Стив Карелл",
      },
      {
        name: "Фиби Уоллер-Бридж",
      },
    ],
    description:
      "Юная Беа спасает забытых воображаемых друзей, подыскивая им новых хозяев.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // воображаемые друзья
  {
    release: new Date("2020-03-06"),
    publication: new Date("2020-04-25"),
    format: "фильм",
    grade: "A+",
    title: "Вперёд",
    original: "Onward",
    kinopoisk: "https://www.kinopoisk.ru/film/1080513/",
    director: [
      {
        name: "Дэн Скэнлон",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Джулия Луи-Дрейфус",
      },
      {
        name: "Октавия Спенсер",
      },
      {
        name: "Мэл Родригес",
      },
    ],
    description:
      "Эльфы-подростки Иэн и Барли отправляются в магическое путешествие, чтобы увидеться с покойным отцом.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // вперёд
  {
    release: new Date("2010-11-05"),
    publication: new Date("2022-01-16"),
    format: "фильм",
    grade: "love",
    title: "Впритык",
    original: "Due Date",
    kinopoisk: "https://www.kinopoisk.ru/film/464282/",
    director: [
      {
        name: "Тодд Филлипс",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Зак Галифианакис",
      },
      {
        name: "Мишель Монахэн",
      },
    ],
    description:
      "Питер Хайман, вынужден ехать автостопом вместе с начинающим актером Итаном Трамбле, чтобы прибыть ко времени рождения своего ребенка.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // впритык
  {
    release: new Date("2013-09-08"),
    publication: new Date("2025-03-13"),
    format: "фильм",
    grade: "B",
    title: "Враг",
    original: "Enemy",
    kinopoisk: "https://www.kinopoisk.ru/film/673910/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Джейк Джилленхол",
      },
      {
        name: "Сара Гадон",
      },
      {
        name: "Мелани Лоран",
      },
    ],
    description:
      "Преподаватель истории Адам Белл находит в фильме своего двойника и одержимо ищет его.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 48,
    posters: 2,
  }, // враг
  {
    release: new Date("2022-11-04"),
    publication: new Date("2023-09-11"),
    format: "фильм",
    grade: "D",
    title: "Время Армагеддона",
    original: "Armageddon Time",
    kinopoisk: "https://www.kinopoisk.ru/film/1388894/",
    director: [
      {
        name: "Джеймс Грэй",
      },
    ],
    cast: [
      {
        name: "Энн Хэтэуэй",
      },
      {
        name: "Джереми Стронг",
      },
      {
        name: "Майкл Бэнкс Репета",
      },
      {
        name: "Джейлин Уэбб",
      },
      {
        name: "Энтони Хопкинс",
      },
    ],
    description:
      "Пол Графф из любящей семьи мечтает стать артистом, но родители переводят его в престижную школу против его воли.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // время армагеддона
  {
    release: new Date("2022-04-08"),
    publication: new Date("2022-10-24"),
    format: "фильм",
    grade: "A+",
    title: "Всё везде и сразу",
    original: "Everything Everywhere All at Once",
    kinopoisk: "https://www.kinopoisk.ru/film/1322324/",
    director: [
      {
        name: "Дэн Кван",
      },
      {
        name: "Дэниэл Шайнерт",
      },
    ],
    cast: [
      {
        name: "Мишель Йео",
      },
      {
        name: "Джейми Ли Кёртис",
      },
      {
        name: "Ке Хюи Куан",
      },
      {
        name: "Стефани Сюй",
      },
      {
        name: "Джеймс Хун",
      },
    ],
    description:
      "Китайская иммигрантка спасает вселенную, путешествуя по параллельным мирам.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // всё везде и сразу
  {
    release: new Date("2024-05-24"),
    publication: new Date("2024-07-13"),
    format: "фильм",
    grade: "C",
    title: "Гарфилд",
    original: "The Garfield Movie",
    kinopoisk: "https://www.kinopoisk.ru/film/1044220/",
    director: [
      {
        name: "Марк Диндал",
      },
    ],
    cast: [
      {
        name: "Крис Пратт",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Николас Холт",
      },
    ],
    description:
      "Гарфилд встречает своего пропавшего отца, бродягу Вика, и вынужден оставить сытую жизнь ради опасного ограбления.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // гарфилд
  {
    release: new Date("2025-07-02"),
    publication: new Date("2025-08-16"),
    format: "фильм",
    grade: "B",
    title: "Главы государств",
    original: "Heads of State",
    kinopoisk: "https://www.kinopoisk.ru/film/5278126/",
    director: [
      {
        name: "Илья Найшуллер",
      },
    ],
    cast: [
      {
        name: "Джон Сина",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Приянка Чопра Джонас",
      },
      {
        name: "Пэдди Консидайн",
      },
      {
        name: "Александр Кузнецов",
      },
      {
        name: "Карла Гуджино",
      },
      {
        name: "Стивен Рут",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Сара Найлз",
      },
    ],
    description:
      "На президента США и премьер-министра Великобритании охотится неизвестный террорист. Теперь им придётся объединить усилия, чтобы выжить.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // главы государств
  {
    release: new Date("2023-11-03"),
    publication: new Date("2023-12-09"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Голубоглазый самурай",
    original: "Blue Eye Samurai",
    kinopoisk: "https://www.kinopoisk.ru/series/4992678/",
    director: [
      {
        name: "Майкл Грин",
      },
      {
        name: "Эмбер Ноидзуми",
      },
    ],
    cast: [
      {
        name: "Майя Эрскин",
      },
      {
        name: "Даррен Барнет",
      },
      {
        name: "Кеннет Брана",
      },
    ],
    description: "Юная воительница мстит тем, из-за кого она стала изгоем.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 40,
    posters: 2,
  }, // голубоглазый самурай 1
  {
    release: new Date("2021-09-17"),
    publication: new Date("2025-07-28"),
    format: "фильм",
    grade: "A+",
    title: "Голубой байу",
    original: "Blue Bayou / Синий залив",
    kinopoisk: "https://www.kinopoisk.ru/film/1313196/",
    director: [
      {
        name: "Джастин Чон",
      },
    ],
    cast: [
      {
        name: "Джастин Чон",
      },
      {
        name: "Алисия Викандер",
      },
      {
        name: "Марк О’Брайен",
      },
      {
        name: "Фам Линь Дан",
      },
      {
        name: "Сидни Ковальске",
      },
      {
        name: "Вонди Кёртис-Холл",
      },
      {
        name: "Эмори Коэн",
      },
    ],
    description:
      "Из-за ошибки прожившего всю жизнь в Штатах Антонио хотят депортировать в Корею.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 75,
    posters: 2,
  }, // голубой байу
  {
    release: new Date("2025-08-01"),
    publication: new Date("2025-09-06"),
    format: "фильм",
    grade: "B",
    title: "Голый пистолет",
    original: "The Naked Gun",
    kinopoisk: "https://www.kinopoisk.ru/film/817971/",
    director: [
      {
        name: "Акива Шаффер",
      },
    ],
    cast: [
      {
        name: "Лиам Нисон",
      },
      {
        name: "Памела Андерсон",
      },
      {
        name: "Пол Уолтер Хаузер",
      },
      {
        name: "Дэнни Хьюстон",
      },
      {
        name: "Кевин Дюран",
      },
      {
        name: "Лайза Коши",
      },
    ],
    description:
      "Лейтенант Фрэнк Дребин-младший — единственный, кто может спасти мир.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // голый пистолет (2025)
  {
    release: new Date("1988-12-02"),
    publication: new Date("2025-04-05"),
    format: "фильм",
    grade: "B",
    title: "Голый пистолет",
    original: "The Naked Gun: From the Files of Police Squad!",
    kinopoisk: "https://www.kinopoisk.ru/film/4067/",
    director: [
      {
        name: "Дэвид Цукер",
      },
    ],
    cast: [
      {
        name: "Лесли Нильсен",
      },
      {
        name: "Присцилла Пресли",
      },
      {
        name: "Рикардо Монтальбан",
      },
      {
        name: "Джордж Кеннеди",
      },
      {
        name: "О. Джей Симпсон",
      },
      {
        name: "Нэнси Марчанд",
      },
    ],
    description:
      "Детектив Фрэнк Дребин должен предотвратить покушение на королеву Великобритании Елизавету II.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // голый пистолет (1988)
  {
    release: new Date("2023-06-23"),
    publication: new Date("2023-07-14"),
    format: "фильм",
    grade: "B",
    title: "Город астероидов",
    original: "Asteroid City",
    kinopoisk: "https://www.kinopoisk.ru/film/4395987/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Том Хэнкс",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Майя Хоук",
      },
      {
        name: "Брайан Крэнстон",
      },
    ],
    description:
      "События, меняющие мир, нарушают ежегодное празднование Дня астероида в американском городке в пустыне.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // город астероидов
  {
    release: new Date("2010-09-17"),
    publication: new Date("2025-03-20"),
    format: "фильм",
    grade: "A",
    title: "Город воров",
    original: "The Town",
    kinopoisk: "https://www.kinopoisk.ru/film/462732/",
    director: [
      {
        name: "Бен Аффлек",
      },
    ],
    cast: [
      {
        name: "Бен Аффлек",
      },
      {
        name: "Ребекка Холл",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Блейк Лайвли",
      },
      {
        name: "Титус Уэлливер",
      },
    ],
    description:
      "Лидер банды грабителей Даг МакРэй во время очередного налёта влюбляется в заложницу — банковского менеджера.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 47,
    posters: 3,
  }, // город воров
  {
    release: new Date("2023-08-25"),
    publication: new Date("2023-09-30"),
    format: "фильм",
    grade: "B",
    title: "Гран туризмо",
    original: "Gran Turismo",
    kinopoisk: "https://www.kinopoisk.ru/film/1044002/",
    director: [
      {
        name: "Нил Бломкамп",
      },
    ],
    cast: [
      {
        name: "Арчи Мадекве",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Орландо Блум",
      },
      {
        name: "Джимон Хонсу",
      },
      {
        name: "Даррен Барнет",
      },
    ],
    description:
      "Подросток, благодаря навыкам в видеоигре «Gran Turismo», стал профессиональным гонщиком.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // гран туризмо
  {
    release: new Date("2024-09-13"),
    publication: new Date("2024-09-30"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Кларксон, Хэммонд и Мэй отправляются в Зимбабве на трех автомобилях, о которых всегда мечтали. Путешествие по красивым пейзажам приводит к эмоциональному финалу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 20,
    posters: 2,
  }, // гранд тур 6
  {
    release: new Date("2022-09-16"),
    publication: new Date("2024-02-25"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 28,
    posters: 1,
  }, // гранд тур 5
  {
    release: new Date("2019-12-13"),
    publication: new Date("2022-03-04"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 19,
    posters: 2,
  }, // гранд тур 4
  {
    release: new Date("2019-01-18"),
    publication: new Date("2020-02-02"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // гранд тур 3
  {
    release: new Date("2025-04-18"),
    publication: new Date("2025-07-08"),
    format: "фильм",
    grade: "A",
    title: "Грешники",
    original: "Sinners",
    kinopoisk: "https://www.kinopoisk.ru/film/5499518/",
    director: [
      {
        name: "Райан Куглер",
      },
    ],
    cast: [
      {
        name: "Майкл Б. Джордан",
      },
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Майлз Кэйтон",
      },
      {
        name: "Джек О’Коннелл",
      },
      {
        name: "Вунми Мосаку",
      },
      {
        name: "Джейми Лоусон",
      },
      {
        name: "Омар Бенсон Миллер",
      },
      {
        name: "Делрой Линдо",
      },
      {
        name: "Ли Цзюнь Ли",
      },
    ],
    description:
      "Близнецы возвращаются домой, чтобы начать новую жизнь, но сталкиваются с новым злом.",
    genres: [
      {
        genre: "музыка",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 51,
    posters: 2,
  }, // грешники
  {
    release: new Date("2025-05-02"),
    publication: new Date("2025-07-08"),
    format: "фильм",
    grade: "A",
    title: "Громовержцы*",
    original: "Thunderbolts* / New Avengers Новые Мстители",
    kinopoisk: "https://www.kinopoisk.ru/film/5001443/",
    director: [
      {
        name: "Джейк Шрейер",
      },
    ],
    cast: [
      {
        name: "Флоренс Пью",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Уайатт Рассел",
      },
      {
        name: "Льюис Пуллман",
      },
      {
        name: "Джулия Луи-Дрейфус",
      },
      {
        name: "Джеральдин Висванатан",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Ханна Джон-Кэймен",
      },
      {
        name: "Уэнделл Пирс",
      },
    ],
    description:
      "По приказу правительства команда злодеев отправляется на задание.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 66,
    posters: 5,
  }, // громовержцы*
  {
    release: new Date("2023-04-06"),
    publication: new Date("2023-04-26"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Грызня",
    original: "Beef",
    kinopoisk: "https://www.kinopoisk.ru/series/4477341/",
    director: [
      {
        name: "Ли Сон-джин",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Али Вон",
      },
      {
        name: "Джозеф Ли",
      },
      {
        name: "Янг Мазино",
      },
    ],
    description:
      "Столкновение на парковке перерастает в вражду: случайная ссора становится поводом для взаимной мести.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 31,
    posters: 1,
  }, // грызня 1
  {
    release: new Date("2016-02-05"),
    publication: new Date("2021-02-17"),
    format: "фильм",
    grade: "A",
    title: "Да здравствует Цезарь!",
    original: "Hail, Caesar!",
    kinopoisk: "https://www.kinopoisk.ru/film/841335/",
    director: [
      {
        name: "Итан Коэн",
      },
      {
        name: "Джоэл Коэн",
      },
    ],
    cast: [
      {
        name: "Джош Бролин",
      },
      {
        name: "Джордж Клуни",
      },
      {
        name: "Олден Эренрайк",
      },
      {
        name: "Рэйф Файнс",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Тильда Суинтон",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Джона Хилл",
      },
    ],
    description: "Голливудский решала держит в узде звёзд студии.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // да здравствует цезарь!
  {
    release: new Date("2004-12-10"),
    publication: new Date("2020-01-08"),
    format: "фильм",
    grade: "love",
    title: "Двенадцать друзей Оушена",
    original: "Ocean's Twelve",
    kinopoisk: "https://www.kinopoisk.ru/film/18294/",
    director: [
      {
        name: "Стивен Содерберг",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Кэтрин Зета-Джонс",
      },
      {
        name: "Джулия Робертс",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Венсан Кассель",
      },
      {
        name: "Карл Райнер",
      },
      {
        name: "Эллиотт Гулд",
      },
      {
        name: "Скотт Каан",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Берни Мак",
      },
      {
        name: "Эдди Джемисон",
      },
      {
        name: "Цинь Шаобо",
      },
      {
        name: "Энди Гарсиа",
      },
    ],
    description:
      "Денни Оушен с новой бандой планирует ограбления в Европе. За ними охотится владелец казино Терри Бенедикт, которого Оушен ранее ограбил в Лас-Вегасе.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 3,
  }, // двенадцать друзей оушена
  {
    release: new Date("2011-12-20"),
    publication: new Date("2019-07-15"),
    format: "фильм",
    grade: "A+",
    title: "Девушка с татуировкой дракона",
    original: "The Girl with the Dragon Tattoo",
    kinopoisk: "https://www.kinopoisk.ru/film/491724/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Руни Мара",
      },
      {
        name: "Кристофер Пламмер",
      },
      {
        name: "Стеллан Скарсгард",
      },
      {
        name: "Робин Райт",
      },
    ],
    description:
      "Журналист и молодая хакерша занимаются расследованием убийства, которое произошло сорок лет назад.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "детектив",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // девушка с татуировкой дракона
  {
    release: new Date("2019-04-18"),
    publication: new Date("2024-03-04"),
    format: "фильм",
    grade: "B",
    title: "Дело Коллини",
    original: "The Collini Case / Der Fall Collini",
    kinopoisk: "https://www.kinopoisk.ru/film/939981/",
    director: [
      {
        name: "Марко Кройцпайнтнер",
      },
    ],
    cast: [
      {
        name: "Элиас М’Барек",
      },
      {
        name: "Франко Неро",
      },
    ],
    description:
      "Молодой юрист обнаруживает темные тайны прошлого, расследуя дело о жестоком убийстве.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // дело коллини
  {
    release: new Date("2017-10-20"),
    publication: new Date("2019-09-18"),
    format: "фильм",
    grade: "A+",
    title: "Дело храбрых",
    original: "Only the Brave",
    kinopoisk: "https://www.kinopoisk.ru/film/965754/",
    director: [
      {
        name: "Джозеф Косински",
      },
    ],
    cast: [
      {
        name: "Джош Бролин",
      },
      {
        name: "Майлз Теллер",
      },
      {
        name: "Джефф Бриджес",
      },
      {
        name: "Дженнифер Коннелли",
      },
      {
        name: "Джеймс Бэдж Дейл",
      },
      {
        name: "Тейлор Китч",
      },
      {
        name: "Алекс Расселл",
      },
    ],
    description: "Пожарные пытаются остановить стихию в лесах Аризоны.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 3,
  }, // дело храбрых
  {
    release: new Date("2019-12-03"),
    publication: new Date("2020-04-07"),
    format: "фильм",
    grade: "A+",
    title: "Джентльмены",
    original: "The Gentlemen",
    kinopoisk: "https://www.kinopoisk.ru/film/1143242/",
    director: [
      {
        name: "Гай Ричи",
      },
    ],
    cast: [
      {
        name: "Мэттью Макконахи",
      },
      {
        name: "Чарли Ханнэм",
      },
      {
        name: "Хью Грант",
      },
      {
        name: "Генри Голдинг",
      },
      {
        name: "Мишель Докери",
      },
      {
        name: "Джереми Стронг",
      },
      {
        name: "Колин Фаррелл",
      },
    ],
    description:
      "Бизнес наркобарона рвут на части китайцы, евреи, ушлые журналисты и танцующие гопники.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // джентльмены
  {
    release: new Date("1996-12-11"),
    publication: new Date("2022-01-27"),
    format: "фильм",
    grade: "C",
    title: "Джерри Магуайер",
    original: "Jerry Maguire",
    kinopoisk: "https://www.kinopoisk.ru/film/4561/",
    director: [
      {
        name: "Кэмерон Кроу",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Рене Зеллвегер",
      },
      {
        name: "Кьюба Гудинг мл.",
      },
      {
        name: "Келли Престон",
      },
    ],
    description:
      "После увольнения за критику начальства Джерри Магуайер решает создать собственную фирму.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // джерри магуайер
  {
    release: new Date("2002-02-15"),
    publication: new Date("2025-07-29"),
    format: "фильм",
    grade: "B",
    title: "Джон Кью",
    original: "John Q",
    kinopoisk: "https://www.kinopoisk.ru/film/720/",
    director: [
      {
        name: "Ник Кассаветис",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Кимберли Элиз",
      },
      {
        name: "Дэниэл Э. Смит",
      },
      {
        name: "Джеймс Вудс",
      },
      {
        name: "Энн Хеч",
      },
      {
        name: "Роберт Дювалл",
      },
      {
        name: "Рэй Лиотта",
      },
      {
        name: "Шон Хэтоси",
      },
      {
        name: "Эдди Гриффин",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Итан Сапли",
      },
    ],
    description:
      "Отец взял больницу в заложники из-за отказа страховой оплатить операцию сына.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 45,
    posters: 2,
  }, // джон кью
  {
    release: new Date("2018-10-19"),
    publication: new Date("2019-10-02"),
    format: "фильм",
    grade: "D",
    title: "Дикая жизнь",
    original: "Wildlife",
    kinopoisk: "https://www.kinopoisk.ru/film/1005852/",
    director: [
      {
        name: "Пол Дано",
      },
    ],
    cast: [
      {
        name: "Эд Оксенбульд",
      },
      {
        name: "Джейк Джилленхол",
      },
      {
        name: "Кэри Маллиган",
      },
    ],
    description:
      "Распад семьи глазами подростка: родители ищут выход каждый по-своему.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // дикая жизнь
  {
    release: new Date("2024-09-27"),
    publication: new Date("2024-10-27"),
    format: "фильм",
    grade: "A",
    title: "Дикий робот",
    original: "The Wild Robot",
    kinopoisk: "https://www.kinopoisk.ru/film/5457899/",
    director: [
      {
        name: "Крис Сандерс",
      },
    ],
    cast: [
      {
        name: "Лупита Нионго",
      },
      {
        name: "Педро Паскаль",
      },
      {
        name: "Кит Коннор",
      },
      {
        name: "Кэтрин О’Хара",
      },
      {
        name: "Билл Найи",
      },
    ],
    description:
      "Посылка с роботом-помощником ROZZUM 7134 падает на необитаемый остров. Чтобы приспособиться к суровым условиям, «Роз» сближается с животными острова.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // дикий робот
  {
    release: new Date("2022-08-12"),
    publication: new Date("2022-08-12"),
    format: "фильм",
    grade: "C",
    title: "Дневная смена",
    original: "Day Shift",
    kinopoisk: "https://www.kinopoisk.ru/film/1438923/",
    director: [
      {
        name: "Дж.Дж. Перри",
      },
    ],
    cast: [
      {
        name: "Джейми Фокс",
      },
      {
        name: "Дэйв Франко",
      },
      {
        name: "Миган Гуд",
      },
      {
        name: "Карла Соуса",
      },
      {
        name: "Снуп Догг",
      },
    ],
    description:
      "У охотника на вампиров остался последний шанс заработать на будущее семьи.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // дневная смена
  {
    release: new Date("2019-10-10"),
    publication: new Date("2020-02-23"),
    format: "фильм",
    grade: "A",
    title: "Дождливый день в Нью-Йорке",
    original: "A Rainy Day in New York",
    kinopoisk: "https://www.kinopoisk.ru/film/1047626/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Эль Фаннинг",
      },
      {
        name: "Селена Гомес",
      },
      {
        name: "Джуд Лоу",
      },
      {
        name: "Диего Луна",
      },
      {
        name: "Лив Шрайбер",
      },
    ],
    description:
      "Гэтсби и Эшли приезжают в Нью-Йорк на романтический уикенд, но город готовит им неожиданные сюрпризы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // дождливый день в нью-йорке
  {
    release: new Date("2022-05-06"),
    publication: new Date("2022-06-23"),
    format: "фильм",
    grade: "C",
    title: "Доктор Стрэндж: В мультивселенной безумия",
    original: "Doctor Strange in the Multiverse of Madness",
    kinopoisk: "https://www.kinopoisk.ru/film/1219909/",
    director: [
      {
        name: "Сэм Рэйми",
      },
    ],
    cast: [
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Чиветель Эджиофор",
      },
      {
        name: "Бенедикт Вонг",
      },
      {
        name: "Сочил Гомес",
      },
      {
        name: "Рэйчел Макадамс",
      },
    ],
    description:
      "Доктор Стрэндж вместе с юной путешественницей по мультивселенным сражается против опасных версий самого себя.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // доктор стрэндж 2
  {
    release: new Date("1997-02-28"),
    publication: new Date("2021-02-22"),
    format: "фильм",
    grade: "B",
    title: "Донни Браско",
    original: "Donnie Brasco",
    kinopoisk: "https://www.kinopoisk.ru/film/3984/",
    director: [
      {
        name: "Майк Ньюэлл",
      },
    ],
    cast: [
      {
        name: "Аль Пачино",
      },
      {
        name: "Джонни Депп",
      },
      {
        name: "Майкл Мэдсен",
      },
    ],
    description: "Агент ФБР сливается с мафией и теряет себя.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "биография",
      },
      {
        genre: "шпионаж",
      },
    ],
    screenshots: 30,
    posters: 3,
  }, // донни браско
  {
    release: new Date("2022-03-25"),
    publication: new Date("2022-10-24"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Дорога в тысячу ли",
    original: "Pachinko",
    kinopoisk: "https://www.kinopoisk.ru/series/1440534/",
    director: [
      {
        name: "Су Хью",
      },
    ],
    cast: [
      {
        name: "Ким Мин-ха",
      },
      {
        name: "Ли Мин-хо",
      },
      {
        name: "Чин Ха",
      },
      {
        name: "Юн Ё-джон",
      },
      {
        name: "Содзи Араи",
      },
      {
        name: "Стив Но",
      },
      {
        name: "Анна Саваи",
      },
    ],
    description:
      "Семейная сага о четырёх поколениях корейских иммигрантов, мечтающих достичь успеха в новой стране.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // дорога в тысячу ли 1
  {
    release: new Date("2008-12-26"),
    publication: new Date("2022-09-18"),
    format: "фильм",
    grade: "A",
    title: "Дорога перемен",
    original: "Revolutionary Road",
    kinopoisk: "https://www.kinopoisk.ru/film/280932/",
    director: [
      {
        name: "Сэм Мендес",
      },
    ],
    cast: [
      {
        name: "Кейт Уинслет",
      },
      {
        name: "Леонардо ДиКаприо",
      },
      {
        name: "Майкл Шеннон",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Кэти Бейтс",
      },
    ],
    description:
      "В 50-х годах семья Уиллер мечтает переехать в Париж, но судьба готовит им сюрпризы.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // дорога перемен
  {
    release: new Date("2019-11-27"),
    publication: new Date("2020-02-21"),
    format: "фильм",
    grade: "A+",
    title: "Достать ножи",
    original: "Knives Out",
    kinopoisk: "https://www.kinopoisk.ru/film/1188529/?utm_referrer=yandex.ru",
    director: [
      {
        name: "Райан Джонсон",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Ана де Армас",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Джейми Ли Кёртис",
      },
      {
        name: "Майкл Шеннон",
      },
      {
        name: "Дон Джонсон",
      },
      {
        name: "Тони Коллетт",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Кристофер Пламмер",
      },
    ],
    description:
      "Частный детектив ведет запутанное дело о смерти известного писателя.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // достать ножи (1)
  {
    release: new Date("2022-11-23"),
    publication: new Date("2022-12-24"),
    format: "фильм",
    grade: "A+",
    title: "Достать ножи: Стеклянная луковица",
    original: "Glass Onion / A Knives Out Mystery",
    kinopoisk: "https://www.kinopoisk.ru/film/1343908/?utm_referrer=yandex.ru",
    director: [
      {
        name: "Райан Джонсон",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Эдвард Нортон",
      },
      {
        name: "Жанель Моне",
      },
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Кейт Хадсон",
      },
      {
        name: "Лесли Одом мл.",
      },
      {
        name: "Мэдлин Клайн",
      },
      {
        name: "Джессика Хенвик",
      },
    ],
    description:
      "Детектив Бенуа Бланк направляется в Грецию с целью разгадать загадку, связанную с богатым миллиардером и его необычным окружением.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // достать ножи: стеклянная луковица (2)
  {
    release: new Date("2019-09-06"),
    publication: new Date("2025-05-06"),
    format: "фильм",
    grade: "A+",
    title: "Друзья навсегда",
    original: "Our Friend",
    kinopoisk: "https://www.kinopoisk.ru/film/1231105/",
    director: [
      {
        name: "Габриэла Каупертуэйт",
      },
    ],
    cast: [
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Дакота Джонсон",
      },
    ],
    description:
      "Когда жене поставили смертельный диагноз, друг семьи переехал к ним.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 48,
    posters: 1,
  }, // друзья навсегда
  {
    release: new Date("2000-08-11"),
    publication: new Date("2023-02-10"),
    format: "фильм",
    grade: "B",
    title: "Дублеры",
    original: "The Replacements",
    kinopoisk: "https://www.kinopoisk.ru/film/800/",
    director: [
      {
        name: "Ховард Дойч",
      },
    ],
    cast: [
      {
        name: "Киану Ривз",
      },
      {
        name: "Джин Хэкмен",
      },
      {
        name: "Брук Лэнгтон",
      },
      {
        name: "Орландо Джонс",
      },
      {
        name: "Фэйзон Лав",
      },
      {
        name: "Джон Фавро",
      },
    ],
    description:
      "Во время забастовки профессиональных футболистов владельцы нанимают простых работяг.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // дублеры
  {
    release: new Date("2020-09-16"),
    publication: new Date("2021-02-27"),
    format: "фильм",
    grade: "B",
    title: "Дьявол всегда здесь",
    original: "The Devil All the Time",
    kinopoisk: "https://www.kinopoisk.ru/film/1072788/",
    director: [
      {
        name: "Антонио Кампос",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Билл Скарсгард",
      },
      {
        name: "Райли Кио",
      },
      {
        name: "Джейсон Кларк",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Хейли Беннетт",
      },
      {
        name: "Миа Васиковска",
      },
      {
        name: "Роберт Паттинсон",
      },
    ],
    description:
      "Религия, смерть и любовь тесно переплетают судьбы незнакомцев.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // дьявол всегда здесь
  {
    release: new Date("2018-05-18"),
    publication: new Date("2021-02-07"),
    format: "фильм",
    grade: "A+",
    title: "Дэдпул 2",
    original: "Deadpool 2",
    kinopoisk: "https://www.kinopoisk.ru/film/961715/",
    director: [
      {
        name: "Дэвид Литч",
      },
    ],
    cast: [
      {
        name: "Райан Рейнольдс",
      },
      {
        name: "Джош Бролин",
      },
      {
        name: "Морена Баккарин",
      },
      {
        name: "Джулиан Деннисон",
      },
      {
        name: "Зази Битц",
      },
      {
        name: "ТиДжей Миллер",
      },
      {
        name: "Каран Сони",
      },
      {
        name: "Брианна Хилдебранд",
      },
      {
        name: "Стефан Капичич",
      },
    ],
    description:
      "Мутант-наёмник Дэдпул собирает команду, чтобы спасти мальчика от киборга Кейбла.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 24,
    posters: 2,
  }, // дэдпул 2
  {
    release: new Date("2024-03-01"),
    publication: new Date("2024-05-11"),
    format: "фильм",
    grade: "love",
    title: "Дюна: Часть вторая",
    original: "Dune: Part Two",
    kinopoisk: "https://www.kinopoisk.ru/film/4540126/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Зендея",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Хавьер Бардем",
      },
      {
        name: "Джош Бролин",
      },
      {
        name: "Остин Батлер",
      },
      {
        name: "Флоренс Пью",
      },
      {
        name: "Леа Сейду",
      },
      {
        name: "Стеллан Скарсгард",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Кристофер Уокен",
      },
    ],
    description:
      "Герцог Пол Атрейдес присоединяется к фрименам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 78,
    posters: 2,
  }, // дюна 2
  {
    release: new Date("2021-09-03"),
    publication: new Date("2022-10-28"),
    format: "фильм",
    grade: "love",
    title: "Дюна",
    original: "Dune",
    kinopoisk: "https://www.kinopoisk.ru/film/409424/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Оскар Айзек",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Зендея",
      },
      {
        name: "Хавьер Бардем",
      },
      {
        name: "Джейсон Момоа",
      },
      {
        name: "Стеллан Скарсгард",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Джош Бролин",
      },
    ],
    description:
      "Пустынная планета Арракис – это единственный источник вещества, необходимого для полетов в космос. Два Великих Дома межгалактической империи вступают в борьбу за Арракис.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 47,
    posters: 1,
  }, // дюна
  {
    release: new Date("2017-07-21"),
    publication: new Date("2019-07-27"),
    format: "фильм",
    grade: "A",
    title: "Дюнкерк",
    original: "Dunkirk",
    kinopoisk: "https://www.kinopoisk.ru/film/931677/",
    director: [
      {
        name: "Кристофер Нолан",
      },
    ],
    cast: [
      {
        name: "Финн Уайтхед",
      },
      {
        name: "Том Глинн-Карни",
      },
      {
        name: "Джек Лауден",
      },
      {
        name: "Гарри Стайлс",
      },
      {
        name: "Барри Кеоган",
      },
      {
        name: "Кеннет Брана",
      },
      {
        name: "Киллиан Мерфи",
      },
      {
        name: "Марк Райлэнс",
      },
      {
        name: "Том Харди",
      },
    ],
    description:
      "Фильм расскажет историю чудесного спасения более трехсот тысяч солдат в ходе Дюнкеркской операции, имевшей место в начале Второй мировой войны.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // дюнкерк
  {
    release: new Date("2024-09-20"),
    publication: new Date("2024-12-15"),
    format: "фильм",
    grade: "B",
    title: "Его три дочери",
    original: "His Three Daughters",
    kinopoisk: "https://www.kinopoisk.ru/film/5368757/",
    director: [
      {
        name: "Азазель Джейкобс",
      },
    ],
    cast: [
      {
        name: "Кэрри Кун",
      },
      {
        name: "Наташа Лионн",
      },
      {
        name: "Элизабет Олсен",
      },
    ],
    description:
      "Три сестры возвращаются в родительскую квартиру в Нью-Йорке, чтобы быть рядом с больным отцом.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // его три дочери
  {
    release: new Date("2023-01-20"),
    publication: new Date("2025-04-28"),
    format: "фильм",
    grade: "C",
    title: "Жажда славы",
    original: "Magazine Dreams",
    kinopoisk: "https://www.kinopoisk.ru/film/4704816/",
    director: [
      {
        name: "Элайджа Байнум",
      },
    ],
    cast: [
      {
        name: "Джонатан Мейджорс",
      },
    ],
    description:
      "Любитель-бодибилдер борется с физическими и душевными демонами ради всеобщего признания.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 60,
    posters: 3,
  }, // жажда славы
  {
    release: new Date("2017-03-13"),
    publication: new Date("2025-03-29"),
    format: "фильм",
    grade: "B",
    title: "Жаркие летние ночи",
    original: "Hot Summer Nights",
    kinopoisk: "https://www.kinopoisk.ru/film/928993/",
    director: [
      {
        name: "Элайджа Байнум",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Майка Монро",
      },
      {
        name: "Алекс Роу",
      },
      {
        name: "Эмори Коэн",
      },
      {
        name: "Майя Митчелл",
      },
      {
        name: "Томас Джейн",
      },
    ],
    description:
      "Подросток влюбляется и ввязывается в наркоторговлю после знакомства с бунтарем на Кейп-Код.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 42,
    posters: 1,
  }, // жаркие летние ночи
  {
    release: new Date("2013-07-26"),
    publication: new Date("2025-03-18"),
    format: "фильм",
    grade: "C",
    title: "Жасмин",
    original: "Blue Jasmine",
    kinopoisk: "https://www.kinopoisk.ru/film/675565/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Салли Хокинс",
      },
      {
        name: "Алек Болдуин",
      },
      {
        name: "Луи С.К.",
      },
      {
        name: "Питер Сарсгаард",
      },
      {
        name: "Бобби Каннавале",
      },
      {
        name: "Эндрю Дайс Клэй",
      },
    ],
    description: "Из-за аферы мужа светская львица теряет деньги и статус.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // жасмин
  {
    release: new Date("2010-12-22"),
    publication: new Date("2025-05-04"),
    format: "фильм",
    grade: "A+",
    title: "Железная хватка",
    original: "True Grit",
    kinopoisk: "https://www.kinopoisk.ru/film/462553/",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Джефф Бриджес",
      },
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Джош Бролин",
      },
      {
        name: "Барри Пеппер",
      },
    ],
    description:
      "Юная мстительница вместе с охотником за головами и рейнджером преследует убийцу отца.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "вестерн",
      },
      {
        genre: "приключения",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 41,
    posters: 3,
  }, // железная хватка
  {
    release: new Date("2022-08-18"),
    publication: new Date("2022-10-15"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Женщина-Халк: Адвокат",
    original: "She-Hulk: Attorney at Law",
    kinopoisk: "https://www.kinopoisk.ru/series/1301509/",
    director: [
      {
        name: "Джессика Гао",
      },
    ],
    cast: [
      {
        name: "Татьяна Маслани",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Джинджер Гонзага",
      },
      {
        name: "Джамила Джамил",
      },
      {
        name: "Рене Голдсберри",
      },
      {
        name: "Джош Сегарра",
      },
      {
        name: "Тим Рот",
      },
      {
        name: "Бенедикт Вонг",
      },
      {
        name: "Чарли Кокс",
      },
    ],
    description:
      "Кузина Халка получает его сверхспособность и становится адвокатом супергероев.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // женщина-халк: адвокат
  {
    release: new Date("2020-12-01"),
    publication: new Date("2022-06-23"),
    format: "фильм",
    grade: "C",
    title: "Жизнь за год",
    original: "Life in a Year",
    kinopoisk: "https://www.kinopoisk.ru/film/1044785/",
    director: [
      {
        name: "Митя Окорн",
      },
    ],
    cast: [
      {
        name: "Джейден Смит",
      },
      {
        name: "Кара Делевинь",
      },
      {
        name: "Кьюба Гудинг мл.",
      },
      {
        name: "RZA",
      },
      {
        name: "Ниа Лонг",
      },
    ],
    description:
      "История 17-летнего Дэрина, пытающегося подарить умирающей девушке целую жизнь за год.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // жизнь за год
  {
    release: new Date("2012-11-21"),
    publication: new Date("2019-01-20"),
    format: "фильм",
    grade: "A+",
    title: "Жизнь Пи",
    original: "Life of Pi",
    kinopoisk: "https://www.kinopoisk.ru/film/158786/",
    director: [
      {
        name: "Энг Ли",
      },
    ],
    cast: [
      {
        name: "Сурадж Шарма",
      },
      {
        name: "Ирфан Кхан",
      },
      {
        name: "Табу",
      },
      {
        name: "Рейф Сполл",
      },
    ],
    description:
      "Юноша после кораблекрушения путешествует с опасным бенгальским тигром.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 21,
    posters: 3,
  }, // жизнь пи
  {
    release: new Date("2025-06-13"),
    publication: new Date("2025-08-16"),
    format: "фильм",
    grade: "B",
    title: "Жизнь Чака",
    original: "The Life of Chuck",
    kinopoisk: "https://www.kinopoisk.ru/film/5406956/",
    director: [
      {
        name: "Майк Флэнаган",
      },
    ],
    cast: [
      {
        name: "Том Хиддлстон",
      },
      {
        name: "Бенджамин Паяк",
      },
      {
        name: "Чиветель Эджиофор",
      },
      {
        name: "Карен Гиллан",
      },
      {
        name: "Карл Ламбли",
      },
      {
        name: "Марк Хэмилл",
      },
      {
        name: "Саманта Слойан",
      },
      {
        name: "Кейт Сигел",
      },
      {
        name: "Джейкоб Тремблей",
      },
    ],
    description:
      "История о трёх этапах жизни простого человека Чарльза Кранца.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // жизнь чака
  {
    release: new Date("2022-12-23"),
    publication: new Date("2023-04-30"),
    format: "фильм",
    grade: "B",
    title: "Жить",
    original: "Living",
    kinopoisk: "https://www.kinopoisk.ru/film/4502701/",
    director: [
      {
        name: "Оливер Херманус",
      },
    ],
    cast: [
      {
        name: "Билл Найи",
      },
      {
        name: "Эйми Лу Вуд",
      },
    ],
    description:
      "Госслужащий мистер Уильямс узнаёт о своей смертельной болезни и решает прожить остаток жизни на максимуме.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // жить
  {
    release: new Date("2022-09-30"),
    publication: new Date("2022-10-02"),
    format: "фильм",
    grade: "B",
    title: "За пивом!",
    original: "The Greatest Beer Run Ever",
    kinopoisk: "https://www.kinopoisk.ru/film/1389553/",
    director: [
      {
        name: "Питер Фаррелли",
      },
    ],
    cast: [
      {
        name: "Зак Эфрон",
      },
      {
        name: "Рассел Кроу",
      },
    ],
    description:
      "Чики решил поддержать друзей-солдат во Вьетнаме, организовав доставку американского пива для них.",
    genres: [
      {
        genre: "военный",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // за пивом!
  {
    release: new Date("2011-01-09"),
    publication: new Date("2020-06-05"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Закусочная Боба",
    original: "Bob's Burgers",
    kinopoisk: "https://www.kinopoisk.ru/series/569787/",
    director: [
      {
        name: "Лорен Бушар",
      },
      {
        name: "Джим Дотерайв",
      },
    ],
    cast: [
      {
        name: "Х. Джон Бенжамин",
      },
      {
        name: "Дэн Минтц",
      },
      {
        name: "Юджин Мирман",
      },
      {
        name: "Джон Робертс",
      },
      {
        name: "Кристен Шаал",
      },
    ],
    description:
      "Боб Белчер с женой и тремя детьми управляет убыточной закусочной бургеров.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // закусочная боба 1
  {
    release: new Date("2016-10-15"),
    publication: new Date("2021-02-28"),
    format: "фильм",
    grade: "C",
    title: "Затерянный город Z",
    original: "The Lost City of Z",
    kinopoisk: "https://www.kinopoisk.ru/film/432794/",
    director: [
      {
        name: "Джеймс Грэй",
      },
    ],
    cast: [
      {
        name: "Чарли Ханнэм",
      },
      {
        name: "Роберт Паттинсон",
      },
      {
        name: "Сиенна Миллер",
      },
      {
        name: "Том Холланд",
      },
    ],
    description:
      "Британский топограф ищет следы древней цивилизации в Южной Америке.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // затерянный город z
  {
    release: new Date("2024-08-09"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "C",
    title: "Зачинщики",
    original: "The Instigators",
    kinopoisk: "https://www.kinopoisk.ru/film/5274244/",
    director: [
      {
        name: "Даг Лайман",
      },
    ],
    cast: [
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Хонг Чау",
      },
      {
        name: "Майкл Стулбарг",
      },
      {
        name: "Пол Уолтер Хаузер",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Альфред Молина",
      },
      {
        name: "Рон Перлман",
      },
      {
        name: "Джек Харлоу",
      },
      {
        name: "Тоби Джонс",
      },
    ],
    description:
      "Рори и Кобби — неожиданные сообщники: отчаявшийся отец и бывший заключенный, объединившиеся для ограбления.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // зачинщики
  {
    release: new Date("2016-12-21"),
    publication: new Date("2021-07-22"),
    format: "фильм",
    grade: "A",
    title: "Зверопой",
    original: "Sing",
    kinopoisk: "https://www.kinopoisk.ru/film/821008/",
    director: [
      {
        name: "Гарт Дженнингс",
      },
      {
        name: "Кристоф Лурделе",
      },
    ],
    cast: [
      {
        name: "Мэттью Макконахи",
      },
      {
        name: "Риз Уизерспун",
      },
      {
        name: "Сет Макфарлейн",
      },
      {
        name: "Тэрон Эджертон",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Ник Кролл",
      },
      {
        name: "Тори Келли",
      },
    ],
    description:
      "Коала Бастер Мун пытается спасти свой театр от закрытия и организует городской конкурс певцов.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "мюзикл",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // зверопой
  {
    release: new Date("2021-12-22"),
    publication: new Date("2022-03-22"),
    format: "фильм",
    grade: "B",
    title: "Зверопой 2",
    original: "Sing 2",
    kinopoisk: "https://www.kinopoisk.ru/film/1009142/",
    director: [
      {
        name: "Гарт Дженнингс",
      },
      {
        name: "Кристоф Лурделе",
      },
    ],
    cast: [
      {
        name: "Мэттью Макконахи",
      },
      {
        name: "Риз Уизерспун",
      },
      {
        name: "Тэрон Эджертон",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Ник Кролл",
      },
      {
        name: "Тори Келли",
      },
      {
        name: "Холзи",
      },
      {
        name: "Фаррелл Уильямс",
      },
      {
        name: "Эрик Андре",
      },
      {
        name: "Летиша Райт",
      },
    ],
    description:
      "Бастер Мун и его друзья должны убедить рок-звезду-затворника Клэя Кэллоуэя присоединиться к ним на открытии нового шоу.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "мюзикл",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // зверопой 2
  {
    release: new Date("2016-03-04"),
    publication: new Date("2020-03-08"),
    format: "фильм",
    grade: "love",
    title: "Зверополис",
    original: "Zootopia",
    kinopoisk: "https://www.kinopoisk.ru/film/775276/",
    director: [
      {
        name: "Байрон Ховард",
      },
      {
        name: "Рич Мур",
      },
      {
        name: "Джаред Буш",
      },
    ],
    cast: [
      {
        name: "Джиннифер Гудвин",
      },
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Дженни Слейт",
      },
      {
        name: "Дж.К. Симмонс",
      },
    ],
    description:
      "В зверином мегаполисе маленькая зайка мечтает стать детективом.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // зверополис
  {
    release: new Date("2020-11-20"),
    publication: new Date("2021-02-04"),
    format: "фильм",
    grade: "A",
    title: "Звук металла",
    original: "Sound of Metal",
    kinopoisk: "https://www.kinopoisk.ru/film/957883/",
    director: [
      {
        name: "Дариус Мардер",
      },
    ],
    cast: [
      {
        name: "Риз Ахмед",
      },
      {
        name: "Оливия Кук",
      },
      {
        name: "Пол Рейси",
      },
      {
        name: "Лорен Ридлофф",
      },
    ],
    description: "У барабанщика метал группы Рубена ухудшается слух.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // звук металла
  {
    release: new Date("2018-11-21"),
    publication: new Date("2019-03-22"),
    format: "фильм",
    grade: "A+",
    title: "Зеленая книга",
    original: "Green Book",
    kinopoisk: "https://www.kinopoisk.ru/film/1108577/",
    director: [
      {
        name: "Питер Фаррелли",
      },
    ],
    cast: [
      {
        name: "Вигго Мортенсен",
      },
      {
        name: "Махершала Али",
      },
      {
        name: "Линда Карделлини",
      },
    ],
    description:
      "Белый водитель сопровождает чернокожего музыканта в южном туре 1960-х.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // зеленая книга
  {
    release: new Date("2020-09-11"),
    publication: new Date("2021-12-01"),
    format: "фильм",
    grade: "A",
    title: "Земля кочевников",
    original: "Nomadland",
    kinopoisk: "https://www.kinopoisk.ru/film/1238506/",
    director: [
      {
        name: "Хлоя Чжао",
      },
    ],
    cast: [
      {
        name: "Фрэнсис Макдорманд",
      },
      {
        name: "Дэвид Стрэтэйрн",
      },
    ],
    description:
      "Пожилая американка стала кочевником в фургоне после потери всего в кризис.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // земля кочевников
  {
    release: new Date("1998-03-18"),
    publication: new Date("2019-01-20"),
    format: "фильм",
    grade: "B",
    title: "Знакомьтесь, Джо Блэк",
    original: "Meet Joe Black",
    kinopoisk: "https://www.kinopoisk.ru/film/5059/",
    director: [
      {
        name: "Мартин Брест",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Энтони Хопкинс",
      },
      {
        name: "Клэр Форлани",
      },
    ],
    description:
      "Смерть в облике юноши просит магната показать ему жизнь людей.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "фэнтези",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 3,
  }, // знакомьтесь, джо блэк
  {
    release: new Date("2023-11-10"),
    publication: new Date("2024-12-15"),
    format: "фильм",
    grade: "A",
    title: "Идеальные дни",
    original: "Perfect Days",
    kinopoisk: "https://www.kinopoisk.ru/film/5283168/",
    director: [
      {
        name: "Вим Вендерс",
      },
    ],
    cast: [
      {
        name: "Кодзи Якусё",
      },
    ],
    description:
      "Хираяма — уборщик общественных туалетов в Токио, живущий простой и спокойной жизнью. Случайные встречи заставляют его задуматься о себе.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 59,
    posters: 2,
  }, // идеальные дни
  {
    release: new Date("2000-06-30"),
    publication: new Date("2025-01-24"),
    format: "фильм",
    grade: "C",
    title: "Идеальный шторм",
    original: "The Perfect Storm",
    kinopoisk: "https://www.kinopoisk.ru/film/783/",
    director: [
      {
        name: "Вольфганг Петерсен",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Марк Уолберг",
      },
      {
        name: "Джон Си Райли",
      },
      {
        name: "Дайан Лэйн",
      },
      {
        name: "Уильям Фихтнер",
      },
      {
        name: "Джон Хоукс",
      },
      {
        name: "Аллен Пэйн",
      },
    ],
    description: "Мощный шторм поставил рыбаков под угрозу гибели.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // идеальный шторм
  {
    release: new Date("2022-12-09"),
    publication: new Date("2023-03-02"),
    format: "фильм",
    grade: "D",
    title: "Империя света",
    original: "Empire of Light",
    kinopoisk: "https://www.kinopoisk.ru/film/4477121/",
    director: [
      {
        name: "Сэм Мендес",
      },
    ],
    cast: [
      {
        name: "Оливия Колман",
      },
      {
        name: "Майкл Уорд",
      },
      {
        name: "Колин Фёрт",
      },
      {
        name: "Тоби Джонс",
      },
    ],
    description:
      "В 1980 году работница кинотеатра заводит роман с чернокожим сотрудником.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // империя света
  {
    release: new Date("2014-11-07"),
    publication: new Date("2019-01-20"),
    format: "фильм",
    grade: "A+",
    title: "Интерстеллар",
    original: "Interstellar",
    kinopoisk: "https://www.kinopoisk.ru/film/258687/",
    director: [
      {
        name: "Кристофер Нолан",
      },
    ],
    cast: [
      {
        name: "Мэттью Макконахи",
      },
      {
        name: "Энн Хэтэуэй",
      },
      {
        name: "Джессика Честейн",
      },
      {
        name: "Маккензи Фой",
      },
      {
        name: "Майкл Кейн",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Мэтт Дэймон",
      },
    ],
    description:
      "Бывший пилот НАСА Джозеф Купер возглавляет экспедицию по поиску нового дома для человечества.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // интерстеллар
  {
    release: new Date("2007-12-07"),
    publication: new Date("2019-09-10"),
    format: "фильм",
    grade: "B",
    title: "Искупление",
    original: "Atonement",
    kinopoisk: "https://www.kinopoisk.ru/film/255611/",
    director: [
      {
        name: "Джо Райт",
      },
    ],
    cast: [
      {
        name: "Кира Найтли",
      },
      {
        name: "Джеймс Макэвой",
      },
      {
        name: "Сирша Ронан",
      },
    ],
    description:
      "13-летняя писательница Брайони Таллис рушит судьбы, ложно обвинив любовника сестры в преступлении.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // искупление
  {
    release: new Date("2017-10-13"),
    publication: new Date("2021-08-21"),
    format: "фильм",
    grade: "A",
    title: "Истории семьи Майровиц",
    original: "The Meyerowitz Stories (New and Selected)",
    kinopoisk: "https://www.kinopoisk.ru/film/968307/",
    director: [
      {
        name: "Ноа Баумбак",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Бен Стиллер",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Элизабет Марвел",
      },
      {
        name: "Эмма Томпсон",
      },
      {
        name: "Грэйс Ван Паттен",
      },
    ],
    description:
      "Рассорившаяся семья воссоединяется в Нью-Йорке на выставке работ отца.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // истории семьи майровиц
  {
    release: new Date("2019-06-21"),
    publication: new Date("2020-03-06"),
    format: "фильм",
    grade: "A",
    title: "История игрушек 4",
    original: "Toy Story 4",
    kinopoisk: "https://www.kinopoisk.ru/film/846824/",
    director: [
      {
        name: "Джош Кули",
      },
    ],
    cast: [
      {
        name: "Том Хэнкс",
      },
      {
        name: "Тим Аллен",
      },
      {
        name: "Энни Поттс",
      },
      {
        name: "Тони Хейл",
      },
      {
        name: "Кигэн-Майкл Ки",
      },
      {
        name: "Джордан Пил",
      },
      {
        name: "Кристина Хендрикс",
      },
    ],
    description:
      "Бонни создала игрушку Вилкинса, и начались приключения со старыми и новыми друзьями.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // история игрушек 4
  {
    release: new Date("2019-11-06"),
    publication: new Date("2020-02-25"),
    format: "фильм",
    grade: "A",
    title: "История о супружестве",
    original: "Marriage Story / Брачная история",
    kinopoisk: "https://www.kinopoisk.ru/film/1115486/",
    director: [
      {
        name: "Ноа Баумбак",
      },
    ],
    cast: [
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Адам Драйвер",
      },
      {
        name: "Лора Дерн",
      },
      {
        name: "Эжи Робертсон",
      },
    ],
    description: "Режиссёр и его жена-актриса переживают мучительный развод.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 32,
    posters: 2,
  }, // история о супружестве
  {
    release: new Date("2012-06-22"),
    publication: new Date("2020-04-01"),
    format: "фильм",
    grade: "B",
    title: "Ищу друга на конец света",
    original: "Seeking a Friend for the End of the World",
    kinopoisk: "https://www.kinopoisk.ru/film/464573/",
    director: [
      {
        name: "Лорин Скафария",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Кира Найтли",
      },
    ],
    description:
      "К Земле несется астероид, а одинокий страховой агент разыскивает свою первую любовь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // ищу друга на конец света
  {
    release: new Date("2019-09-20"),
    publication: new Date("2019-12-08"),
    format: "фильм",
    grade: "A",
    title: "К звёздам",
    original: "Ad Astra",
    kinopoisk: "https://www.kinopoisk.ru/film/768561/",
    director: [
      {
        name: "Джеймс Грэй",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Томми Ли Джонс",
      },
      {
        name: "Рут Негга",
      },
      {
        name: "Лив Тайлер",
      },
    ],
    description:
      "Астронавт Рой Макбрайд отправляется в опасное путешествие по Солнечной системе, чтобы узнать правду о своём пропавшем отце и его экспедиции.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "драма" },
    ],
    screenshots: 18,
    posters: 3,
  }, // к звёздам
  {
    release: new Date("1999-12-22"),
    publication: new Date("2021-02-09"),
    format: "фильм",
    grade: "A",
    title: "Каждое воскресенье",
    original: "Any Given Sunday",
    kinopoisk: "https://www.kinopoisk.ru/film/1541/",
    director: [
      {
        name: "Оливер Стоун",
      },
    ],
    cast: [
      {
        name: "Аль Пачино",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Деннис Куэйд",
      },
      {
        name: "Кэмерон Диас",
      },
      {
        name: "Джеймс Вудс",
      },
      {
        name: "ЭлЭл Кул Джей",
      },
    ],
    description:
      "«Акулы Майами» терпят неудачи, а новый владелец – дочь прежнего, Кристина – конфликтует с тренером, жёстко управляя клубом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // каждое воскресенье
  {
    release: new Date("2006-11-17"),
    publication: new Date("2022-09-20"),
    format: "фильм",
    grade: "A+",
    title: "Казино Рояль",
    original: "Casino Royale",
    kinopoisk: "https://www.kinopoisk.ru/film/49844/",
    director: [
      {
        name: "Мартин Кэмпбелл",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Ева Грин",
      },
      {
        name: "Мадс Миккельсен",
      },
      {
        name: "Джуди Денч",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Джанкарло Джаннини",
      },
    ],
    description:
      "Получив лицензию на убийство, секретный агент Джеймс Бонд отправляется на свое первое задание в качестве агента 007.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 52,
    posters: 1,
  }, // казино рояль
  {
    release: new Date("2007-09-21"),
    publication: new Date("2025-05-25"),
    format: "фильм",
    grade: "C",
    title: "Как трусливый Роберт Форд убил Джесси Джеймса",
    original: "The Assassination of Jesse James by the Coward Robert Ford",
    kinopoisk: "https://www.kinopoisk.ru/film/102127/",
    director: [
      {
        name: "Эндрю Доминик",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Сэм Рокуэлл",
      },
      {
        name: "Пол Шнайдер",
      },
      {
        name: "Джереми Реннер",
      },
    ],
    description:
      "Роберт Форд, боготворивший Джесси Джеймса с детства, пытается присоединиться к банде преступника.",
    genres: [
      {
        genre: "вестерн",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // как трусливый роберт форд убил джесси джеймса
  {
    release: new Date("2005-09-19"),
    continuation: new Date("2013-09-23"),
    publication: new Date("2021-05-08"),
    format: "сериал",
    season: "1-9",
    grade: "A",
    title: "Как я встретил вашу маму",
    original: "How I Met Your Mother",
    kinopoisk: "https://www.kinopoisk.ru/series/401522/",
    director: [
      {
        name: "Картер Бэйс",
      },
      {
        name: "Крейг Томас",
      },
    ],
    cast: [
      {
        name: "Джош Рэднор",
      },
      {
        name: "Нил Патрик Харрис",
      },
      {
        name: "Коби Смолдерс",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Элисон Хэннигэн",
      },
    ],
    description:
      "Главный герой решает поделиться со своими детьми историей, как он познакомился с их мамой.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ситком",
      },
    ],
    screenshots: 107,
    posters: 12,
  }, // как я встретил вашу маму 1-9
  {
    release: new Date("2025-02-14"),
    publication: new Date("2025-04-19"),
    format: "фильм",
    grade: "D",
    title: "Капитан Америка: Новый мир",
    original: "Captain America: Brave New World",
    kinopoisk: "https://www.kinopoisk.ru/film/4443920/",
    director: [
      {
        name: "Джулиус Она",
      },
    ],
    cast: [
      {
        name: "Энтони Маки",
      },
      {
        name: "Харрисон Форд",
      },
      {
        name: "Дэнни Рамирес",
      },
      {
        name: "Шира Хаас",
      },
      {
        name: "Карл Ламбли",
      },
      {
        name: "Тим Блейк Нельсон",
      },
      {
        name: "Джанкарло Эспозито",
      },
    ],
    description:
      "Новый Капитан Америка Сэм Уилсон оказывается в центре международного инцидента и расследует зловещий мировой заговор.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // капитан америка: новый мир
  {
    release: new Date("2023-11-10"),
    publication: new Date("2024-01-29"),
    format: "фильм",
    grade: "D",
    title: "Капитан Марвел 2",
    original: "The Marvels",
    kinopoisk: "https://www.kinopoisk.ru/film/1287544/",
    director: [
      {
        name: "Ниа ДаКоста",
      },
    ],
    cast: [
      {
        name: "Бри Ларсон",
      },
      {
        name: "Тейона Паррис",
      },
      {
        name: "Иман Веллани",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Зави Эштон",
      },
    ],
    description:
      "Кэрол Дэнверс объединила свои силы с Камалой Хан и Моникой Рамбо для спасения вселенной.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // капитан марвел 2
  {
    release: new Date("2010-06-11"),
    publication: new Date("2020-03-28"),
    format: "фильм",
    grade: "B",
    title: "Каратэ-пацан",
    original: "The Karate Kid",
    kinopoisk: "https://www.kinopoisk.ru/film/412162/",
    director: [
      {
        name: "Харольд Цварт",
      },
    ],
    cast: [
      {
        name: "Джеки Чан",
      },
      {
        name: "Джейден Смит",
      },
      {
        name: "Тараджи П. Хенсон",
      },
    ],
    description:
      "Мать-одиночка переезжает в Китай из-за работы, и её сын учится кунг-фу у местного мастера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // каратэ-пацан
  {
    release: new Date("2021-02-12"),
    publication: new Date("2021-09-02"),
    format: "фильм",
    grade: "B",
    title: "Карта совершенных мгновений",
    original: "The Map of Tiny Perfect Things",
    kinopoisk: "https://www.kinopoisk.ru/film/1346672/",
    director: [
      {
        name: "Йен Сэмюэлс",
      },
    ],
    cast: [
      {
        name: "Кайл Аллен",
      },
      {
        name: "Кэтрин Ньютон",
      },
    ],
    description: "Временная петля помогает подросткам составить карту событий.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "мелодрама",
      },
      { genre: "комедия" },
    ],
    screenshots: 16,
    posters: 1,
  }, // карта совершенных мгновений
  {
    release: new Date("1998-03-05"),
    publication: new Date("2020-02-22"),
    format: "фильм",
    grade: "A+",
    title: "Карты, деньги, два ствола",
    original: "Lock, Stock and Two Smoking Barrels",
    kinopoisk: "https://www.kinopoisk.ru/film/522/",
    director: [
      {
        name: "Гай Ричи",
      },
    ],
    cast: [
      {
        name: "Ник Моран",
      },
      {
        name: "Джейсон Стэйтем",
      },
      {
        name: "Джейсон Флеминг",
      },
      {
        name: "Декстер Флетчер",
      },
      {
        name: "Винни Джонс",
      },
    ],
    description:
      "Четыре мелких преступника проиграли крупную сумму в покере криминальному авторитету и получили неделю на выплату долга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // карты, деньги, два ствола
  {
    release: new Date("1942-11-26"),
    publication: new Date("2024-08-10"),
    format: "фильм",
    grade: "B",
    title: "Касабланка",
    original: "Casablanca",
    kinopoisk: "https://www.kinopoisk.ru/film/330/",
    director: [
      {
        name: "Майкл Кёртиц",
      },
    ],
    cast: [
      {
        name: "Хамфри Богарт",
      },
      {
        name: "Ингрид Бергман",
      },
    ],
    description:
      "Оставивший родину американец, владелец игорного клуба в Касабланке, встречается с покинувшей его несколько лет назад возлюбленной.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // касабланка
  {
    release: new Date("2024-05-03"),
    publication: new Date("2024-06-15"),
    format: "фильм",
    grade: "C",
    title: "Каскадёры",
    original: "The Fall Guy",
    kinopoisk: "https://www.kinopoisk.ru/film/535243/",
    director: [
      {
        name: "Дэвид Литч",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Эмили Блант",
      },
      {
        name: "Аарон Тейлор-Джонсон",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Уинстон Дьюк",
      },
    ],
    description:
      "Каскадер, только что переживший аварию, которая едва не положила конец его карьере, должен разыскать пропавшую кинозвезду.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // каскадеры
  {
    release: new Date("2008-11-14"),
    publication: new Date("2022-09-20"),
    format: "фильм",
    grade: "B",
    title: "Квант милосердия",
    original: "Quantum of Solace",
    kinopoisk: "https://www.kinopoisk.ru/film/258475/",
    director: [
      {
        name: "Марк Форстер",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Ольга Куриленко",
      },
      {
        name: "Матьё Амальрик",
      },
      {
        name: "Джуди Денч",
      },
      {
        name: "Джанкарло Джаннини",
      },
    ],
    description:
      "Джеймс Бонд пытается помешать организации уничтожить самый ценный ресурс страны.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 16,
    posters: 1,
  }, // квант милосердия
  {
    release: new Date("1960-06-15"),
    publication: new Date("2024-08-19"),
    format: "фильм",
    grade: "B",
    title: "Квартира",
    original: "The Apartment",
    kinopoisk: "https://www.kinopoisk.ru/film/404/",
    director: [
      {
        name: "Билли Уайлдер",
      },
    ],
    cast: [
      {
        name: "Джек Леммон",
      },
      {
        name: "Ширли Маклейн",
      },
      {
        name: "Фред Макмюррей",
      },
    ],
    description:
      "Страховой клерк из Манхэттена пытается подняться по карьерной лестнице в своей компании, позволяя ее руководителям использовать свою квартиру для свиданий.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "чёрно-белое",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // квартира
  {
    release: new Date("2019-11-27"),
    publication: new Date("2022-03-24"),
    format: "фильм",
    grade: "A+",
    title: "Квин и Слим",
    original: "Queen & Slim",
    kinopoisk: "https://www.kinopoisk.ru/film/1186158/",
    director: [
      {
        name: "Мелина Матсукас",
      },
    ],
    cast: [
      {
        name: "Дэниэл Калуя",
      },
      {
        name: "Джоди Тёрнер-Смит",
      },
    ],
    description:
      "Первое свидание пары принимает неожиданный оборот, когда их останавливает полицейский.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 63,
    posters: 2,
  }, // квин и слим
  {
    release: new Date("2025-03-26"),
    publication: new Date("2025-06-21"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Киностудия",
    original: "The Studio",
    kinopoisk: "https://www.kinopoisk.ru/series/6579800/",
    director: [
      {
        name: "Сет Роген",
      },
      {
        name: "Эван Голдберг",
      },
      {
        name: "Алекс Грегори",
      },
      {
        name: "Питер Хайк",
      },
    ],
    cast: [
      {
        name: "Сет Роген",
      },
      {
        name: "Айк Баринхолц",
      },
      {
        name: "Чейз Суй Уондерс",
      },
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Кэтрин О’Хара",
      },
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Дэйв Франко",
      },
      {
        name: "Зои Кравиц",
      },
      {
        name: "Дуэйн Перкинс",
      },
    ],
    description:
      "Мэтт Ремик пытается управлять проблемной киностудией Continental Studios.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // киностудия 1
  {
    release: new Date("2019-11-08"),
    publication: new Date("2019-12-29"),
    format: "фильм",
    grade: "A+",
    title: "Клаус",
    original: "Klaus",
    kinopoisk: "https://www.kinopoisk.ru/film/957887/",
    director: [
      {
        name: "Серхио Паблос",
      },
      {
        name: "Карлос Мартинес Лопес",
      },
    ],
    cast: [
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Рашида Джонс",
      },
    ],
    description:
      "Эгоист-почтальон и нелюдимый мастер игрушек подружились и принесли радость в холодный город.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // клаус
  {
    release: new Date("2016-04-15"),
    publication: new Date("2025-03-21"),
    format: "фильм",
    grade: "A+",
    title: "Книга джунглей",
    original: "The Jungle Book",
    kinopoisk: "https://www.kinopoisk.ru/film/779024/",
    director: [
      {
        name: "Джон Фавро",
      },
    ],
    cast: [
      {
        name: "Нил Сетхи",
      },
      {
        name: "Билл Мюррей",
      },
      {
        name: "Бен Кингсли",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лупита Нионго",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Джанкарло Эспозито",
      },
      {
        name: "Кристофер Уокен",
      },
    ],
    description:
      "Маугли покидает джунгли из-за угрозы Шер Хана и отправляется в путешествие с Багирой и Балу.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // книга джунглей
  {
    release: new Date("2018-05-02"),
    continuation: new Date("2021-01-01"),
    publication: new Date("2021-05-05"),
    format: "сериал",
    season: "1-3",
    grade: "B",
    title: "Кобра Кай",
    original: "Cobra Kai",
    kinopoisk: "https://www.kinopoisk.ru/series/1047617/",
    director: [
      {
        name: "Джош Хилд",
      },
      {
        name: "Джон Харвитц",
      },
      {
        name: "Хейден Шлоссберг",
      },
    ],
    cast: [
      {
        name: "Уильям Забка",
      },
      {
        name: "Ральф Маччио",
      },
      {
        name: "Шоло Маридуэнья",
      },
      {
        name: "Тэннер Бьюкэнэн",
      },
      {
        name: "Мэри Мэтилин Маусер",
      },
    ],
    description:
      "Спустя годы после турнира 1984 года по карате, Даниэль ЛаРуссо и Джонни Лоуренс вновь становятся соперниками в боевых искусствах.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // кобра кай 1-3
  {
    release: new Date("2019-05-31"),
    publication: new Date("2019-06-24"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Когда они нас увидят",
    original: "When They See Us",
    kinopoisk: "https://www.kinopoisk.ru/series/1174230/",
    director: [
      {
        name: "Ава ДюВерней",
      },
    ],
    cast: [
      {
        name: "Джаррель Джером",
      },
      {
        name: "Асанте Блэк",
      },
      {
        name: "Калил Харрис",
      },
      {
        name: "Итан Херисс",
      },
      {
        name: "Маркиз Родригез",
      },
      {
        name: "Марша Стефани Блейк",
      },
      {
        name: "Кайли Банбери",
      },
      {
        name: "Джон Легуизамо",
      },
      {
        name: "Ниси Нэш",
      },
      {
        name: "Майкл Кеннет Уильямс",
      },
      {
        name: "Фелисити Хаффман",
      },
      {
        name: "Вера Фармига",
      },
      {
        name: "Джован Адепо",
      },
    ],
    description:
      "Пятеро подростков из Гарлема, были приговорены к тюремным срокам за жестокое изнасилование белой девушки, которого они не совершали.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // когда они нас увидят
  {
    release: new Date("2022-01-20"),
    publication: new Date("2023-02-10"),
    format: "фильм",
    grade: "D",
    title: "Когда ты закончишь спасать мир",
    original: "When You Finish Saving the World",
    kinopoisk: "https://www.kinopoisk.ru/film/1400133/",
    director: [
      {
        name: "Джесси Айзенберг",
      },
    ],
    cast: [
      {
        name: "Джулианна Мур",
      },
      {
        name: "Финн Вулфхард",
      },
      {
        name: "Алиша Боэ",
      },
    ],
    description:
      "Эвелин руководит приютом для жертв домашнего насилия и отдаляется от сына Зигги.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // когда ты закончишь спасать мир
  {
    release: new Date("2018-04-20"),
    publication: new Date("2020-10-14"),
    format: "фильм",
    grade: "A",
    title: "Кодахром",
    original: "Kodachrome",
    kinopoisk: "https://www.kinopoisk.ru/film/835100/",
    director: [
      {
        name: "Марк Расо",
      },
    ],
    cast: [
      {
        name: "Эд Харрис",
      },
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Элизабет Олсен",
      },
    ],
    description:
      "Сын едет проявить отцовскую плёнку «Кодахром» в последней лаборатории «Кодак».",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // кодахром
  {
    release: new Date("2023-02-24"),
    publication: new Date("2023-03-16"),
    format: "фильм",
    grade: "B",
    title: "Кокаиновый медведь",
    original: "Cocaine Bear",
    kinopoisk: "https://www.kinopoisk.ru/film/4476889/",
    director: [
      {
        name: "Элизабет Бэнкс",
      },
    ],
    cast: [
      {
        name: "Кери Рассел",
      },
      {
        name: "Кристиан Конвери",
      },
      {
        name: "Олден Эренрайк",
      },
      {
        name: "О’Ши Джексон мл.",
      },
      {
        name: "Бруклин Принс",
      },
      {
        name: "Рэй Лиотта",
      },
    ],
    description:
      "Наркокурьер выбросил из самолёта в лесах Джорджии пакеты с кокаином. Один из них нашёл медведь, съел содержимое и пришёл в неистовство, представляя опасность для всех встречных.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // кокаиновый медведь
  {
    release: new Date("2002-03-29"),
    publication: new Date("2019-07-17"),
    format: "фильм",
    grade: "A+",
    title: "Комната страха",
    original: "Panic Room",
    kinopoisk: "https://www.kinopoisk.ru/film/780/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Джоди Фостер",
      },
      {
        name: "Кристен Стюарт",
      },
      {
        name: "Джаред Лето",
      },
      {
        name: "Форест Уитакер",
      },
      {
        name: "Дуайт Йоакам",
      },
    ],
    description:
      "Женщина с дочерью прячутся в убежище дома от трёх грабителей.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // комната страха
  {
    release: new Date("2019-10-25"),
    publication: new Date("2020-11-13"),
    format: "сериал",
    season: "6",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // конь боджек 6
  {
    release: new Date("2018-09-14"),
    publication: new Date("2020-11-08"),
    format: "сериал",
    season: "5",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 28,
    posters: 1,
  }, // конь боджек 5
  {
    release: new Date("2017-09-08"),
    publication: new Date("2020-11-07"),
    format: "сериал",
    season: "4",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // конь боджек 4
  {
    release: new Date("2016-07-22"),
    publication: new Date("2020-11-04"),
    format: "сериал",
    season: "3",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // конь боджек 3
  {
    release: new Date("2015-07-17"),
    publication: new Date("2020-11-01"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // конь боджек 2
  {
    release: new Date("2014-08-22"),
    publication: new Date("2020-02-20"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Конь БоДжек",
    original: "BoJack Horseman",
    kinopoisk: "https://www.kinopoisk.ru/series/818185/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
    ],
    cast: [
      {
        name: "Уилл Арнетт",
      },
      {
        name: "Эми Седарис",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Пол Ф. Томпкинс",
      },
    ],
    description:
      "Экс-звезда ситкома конь-актер БоДжек переживает кризис среднего возраста.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // конь боджек 1
  {
    release: new Date("2012-06-29"),
    publication: new Date("2023-05-02"),
    format: "фильм",
    grade: "C",
    title: "Королевство полной луны",
    original: "Moonrise Kingdom",
    kinopoisk: "https://www.kinopoisk.ru/film/571892/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джаред Гилман",
      },
      {
        name: "Кара Хэйуорд",
      },
      {
        name: "Брюс Уиллис",
      },
      {
        name: "Эдвард Нортон",
      },
      {
        name: "Билл Мюррей",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
    ],
    description:
      "Двое 12-летних подростков влюбляются друг в друга и сбегают в дикую местность.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // королевство полной луны
  {
    release: new Date("2013-05-31"),
    publication: new Date("2020-01-28"),
    format: "фильм",
    grade: "B",
    title: "Короли лета",
    original: "The Kings of Summer",
    kinopoisk: "https://www.kinopoisk.ru/film/684618/",
    director: [
      {
        name: "Джордан Вот-Робертс",
      },
    ],
    cast: [
      {
        name: "Ник Робинсон",
      },
      {
        name: "Гэбриел Бассо",
      },
      {
        name: "Мойзес Ариас",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Эрин Мориарти",
      },
    ],
    description:
      "Трое подростков сбегают в лес от родителей, чтобы ощутить свободу.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // короли лета
  {
    release: new Date("2021-11-19"),
    publication: new Date("2025-07-12"),
    format: "фильм",
    grade: "A",
    title: "Король Ричард",
    original: "King Richard",
    kinopoisk: "https://www.kinopoisk.ru/film/1272469/",
    director: [
      {
        name: "Рейнальдо Маркус Грин",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Онжаню Эллис",
      },
      {
        name: "Санийя Сидни",
      },
      {
        name: "Деми Синглтон",
      },
      {
        name: "Тони Голдуин",
      },
      {
        name: "Джон Бернтал",
      },
    ],
    description:
      "История успеха сестёр Уильямс под руководством их отца-тренера Ричарда.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 26,
    posters: 4,
  }, // король ричард
  {
    release: new Date("2020-05-28"),
    publication: new Date("2020-10-13"),
    format: "фильм",
    grade: "A",
    title: "Король Стейтен-Айленда",
    original: "The King of Staten Island",
    kinopoisk: "https://www.kinopoisk.ru/film/1236644/",
    director: [
      {
        name: "Джадд Апатоу",
      },
    ],
    cast: [
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Мариса Томей",
      },
      {
        name: "Билл Бёрр",
      },
      {
        name: "Бел Паули",
      },
      {
        name: "Мод Апатоу",
      },
      {
        name: "Стив Бушеми",
      },
      {
        name: "Мойзес Ариас",
      },
    ],
    description:
      "После смерти отца Скотт курит травку и мечтает о татуировках, но жизнь заставляет его повзрослеть.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // король стейтен-айленда
  {
    release: new Date("2022-11-13"),
    publication: new Date("2023-05-13"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Король Талсы",
    original: "Tulsa King",
    kinopoisk:
      "https://www.kinopoisk.ru/series/4760854/?utm_referrer=www.google.com",
    director: [
      {
        name: "Тейлор Шеридан",
      },
    ],
    cast: [
      {
        name: "Сильвестр Сталлоне",
      },
      {
        name: "Мартин Старр",
      },
      {
        name: "Гаррет Хедлунд",
      },
    ],
    description:
      "Дуайт «Генерал» Манфреди, капо Нью-Йоркской мафии, после 25 лет тюрьмы отправляется в Талсу.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // король талсы 1
  {
    release: new Date("2021-10-22"),
    continuation: new Date("2022-11-18"),
    publication: new Date("2023-01-13"),
    format: "сериал",
    season: "1-2",
    grade: "A",
    title: "Корпорация «Заговор»",
    original: "Inside Job",
    kinopoisk: "https://www.kinopoisk.ru/series/1263653/",
    director: [
      {
        name: "Сион Такэути",
      },
    ],
    cast: [
      {
        name: "Лиззи Каплан",
      },
      {
        name: "Кристиан Слэйтер",
      },
      {
        name: "Кларк Дьюк",
      },
      {
        name: "Тиша Кэмпбелл",
      },
      {
        name: "Джон Ди Маджио",
      },
      {
        name: "Бобби Ли",
      },
      {
        name: "Бретт Гельман",
      },
    ],
    description:
      "Для работников этого секретного отдела теории заговора — не глупости, а реальные факты. И их работа — держать это в тайне.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // корпорация «заговор» 1-2
  {
    release: new Date("2022-12-21"),
    publication: new Date("2023-01-13"),
    format: "фильм",
    grade: "A+",
    title: "Кот в сапогах 2: Последнее желание",
    original: "Puss in Boots: The Last Wish",
    kinopoisk: "https://www.kinopoisk.ru/film/840821/",
    director: [
      {
        name: "Джоэль Кроуфорд",
      },
      {
        name: "Хануэль Меркадо",
      },
    ],
    cast: [
      {
        name: "Антонио Бандерас",
      },
      {
        name: "Сальма Хайек",
      },
      {
        name: "Харви Гильен",
      },
      {
        name: "Флоренс Пью",
      },
      {
        name: "Джон Малейни",
      },
      {
        name: "Вагнер Моура",
      },
      {
        name: "Кристина Хендрикс",
      },
      {
        name: "Рэй Уинстон",
      },
      {
        name: "Оливия Колман",
      },
    ],
    description:
      "Кот в сапогах ищет Последнее желание, чтобы вернуть свои 9 жизней.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // кот в сапогах 2: последнее желание
  {
    release: new Date("2011-07-24"),
    publication: new Date("2021-01-30"),
    format: "сериал",
    season: "8",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // красавцы 8
  {
    release: new Date("2010-06-27"),
    publication: new Date("2021-01-29"),
    format: "сериал",
    season: "7",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 10,
    posters: 1,
  }, // красавцы 7
  {
    release: new Date("2009-07-12"),
    publication: new Date("2021-01-25"),
    format: "сериал",
    season: "6",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // красавцы 6
  {
    release: new Date("2007-06-17"),
    continuation: new Date("2008-09-07"),
    publication: new Date("2021-01-22"),
    format: "сериал",
    season: "4-5",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // красавцы 4-5
  {
    release: new Date("2006-06-11"),
    publication: new Date("2021-01-17"),
    format: "сериал",
    season: "3",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // красавцы 3
  {
    release: new Date("2005-06-05"),
    publication: new Date("2021-01-11"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // красавцы 2
  {
    release: new Date("2004-07-18"),
    publication: new Date("2021-01-10"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Красавцы",
    original: "Entourage / Антураж",
    kinopoisk: "https://www.kinopoisk.ru/series/277548/",
    director: [
      {
        name: "Даг Эллин",
      },
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Эдриан Гренье",
      },
      {
        name: "Кевин Коннолли",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Кевин Диллон",
      },
      {
        name: "Джерри Феррара",
      },
    ],
    description:
      "Молодой актер и его друзья покоряют Голливуд. Сериал о восхождении молодого актера, основанный на биографии Марка Уолберга.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // красавцы 1
  {
    release: new Date("2018-11-02"),
    publication: new Date("2019-03-22"),
    format: "фильм",
    grade: "A",
    title: "Красивый мальчик",
    original: "Beautiful Boy",
    kinopoisk: "https://www.kinopoisk.ru/film/462654/",
    director: [
      {
        name: "Феликс ван Гронинген",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Мора Тирни",
      },
    ],
    description: "Отец спасает сына от наркозависимости.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 10,
    posters: 3,
  }, // красивый мальчик
  {
    release: new Date("2021-12-03"),
    publication: new Date("2022-03-12"),
    format: "фильм",
    grade: "B",
    title: "Красная ракета",
    original: "Red Rocket",
    kinopoisk: "https://www.kinopoisk.ru/film/4422444/",
    director: [
      {
        name: "Шон Бэйкер",
      },
    ],
    cast: [
      {
        name: "Саймон Рекс",
      },
    ],
    description: "Порноактер в отставке хочет выбиться в люди в родном Техасе.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // красная ракета
  {
    release: new Date("2021-11-05"),
    publication: new Date("2021-11-15"),
    format: "фильм",
    grade: "D",
    title: "Красное уведомление",
    original: "Red Notice",
    kinopoisk: "https://www.kinopoisk.ru/film/1115099/",
    director: [
      {
        name: "Роусон Маршалл Тёрбер",
      },
    ],
    cast: [
      {
        name: "Дуэйн Джонсон",
      },
      {
        name: "Райан Рейнольдс",
      },
      {
        name: "Галь Гадот",
      },
    ],
    description: "Агент ФБР и вор охотятся на аферистку.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // красное уведомление
  {
    release: new Date("1990-12-25"),
    publication: new Date("2022-06-29"),
    format: "фильм",
    grade: "B",
    title: "Крестный отец 3",
    original: "The Godfather: Part III",
    kinopoisk: "https://www.kinopoisk.ru/film/4500/",
    director: [
      {
        name: "Фрэнсис Форд Коппола",
      },
    ],
    cast: [
      {
        name: "Аль Пачино",
      },
      {
        name: "Энди Гарсиа",
      },
      {
        name: "Дайан Китон",
      },
    ],
    description:
      "Через 20 лет Майкл Корлеоне переходит к легальному бизнесу, но сопротивление в клане вынуждает его прибегнуть к прежним жестоким методам.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // крестный отец 3
  {
    release: new Date("1974-12-12"),
    publication: new Date("2022-06-28"),
    format: "фильм",
    grade: "B",
    title: "Крестный отец 2",
    original: "The Godfather: Part II",
    kinopoisk: "https://www.kinopoisk.ru/film/327/",
    director: [
      {
        name: "Фрэнсис Форд Коппола",
      },
    ],
    cast: [
      {
        name: "Аль Пачино",
      },
      {
        name: "Роберт Де Ниро",
      },
      {
        name: "Дайан Китон",
      },
      {
        name: "Роберт Дювалл",
      },
      {
        name: "Джон Казале",
      },
    ],
    description:
      "История показывает становление Вито Корлеоне в Нью-Йорке 1920-х и усиление власти его сына Майкла над семейным синдикатом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // крестный отец 2
  {
    release: new Date("1972-03-15"),
    publication: new Date("2022-06-27"),
    format: "фильм",
    grade: "B",
    title: "Крестный отец",
    original: "The Godfather",
    kinopoisk: "https://www.kinopoisk.ru/film/325/",
    director: [
      {
        name: "Фрэнсис Форд Коппола",
      },
    ],
    cast: [
      {
        name: "Марлон Брандо",
      },
      {
        name: "Аль Пачино",
      },
      {
        name: "Джеймс Каан",
      },
      {
        name: "Дайан Китон",
      },
      {
        name: "Роберт Дювалл",
      },
      {
        name: "Джон Казале",
      },
    ],
    description: "История о семье сицилийской мафии Корлеоне в Нью-Йорке.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // крестный отец
  {
    release: new Date("1994-10-14"),
    publication: new Date("2020-08-02"),
    format: "фильм",
    grade: "A+",
    title: "Криминальное чтиво",
    original: "Pulp Fiction",
    kinopoisk: "https://www.kinopoisk.ru/film/342/",
    director: [
      {
        name: "Квентин Тарантино",
      },
    ],
    cast: [
      {
        name: "Джон Траволта",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Брюс Уиллис",
      },
      {
        name: "Ума Турман",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Тим Рот",
      },
      {
        name: "Харви Кейтель",
      },
      {
        name: "Квентин Тарантино",
      },
    ],
    description:
      "Судьбы двух киллеров, боксёра, гангстера с женой и грабителей ресторана переплетаются в истории о насилии и искуплении.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // криминальное чтиво
  {
    release: new Date("2013-04-26"),
    publication: new Date("2025-03-29"),
    format: "фильм",
    grade: "A",
    title: "Кровью и потом: Анаболики",
    original: "Pain & Gain",
    kinopoisk: "https://www.kinopoisk.ru/film/596227/",
    director: [
      {
        name: "Майкл Бэй",
      },
    ],
    cast: [
      {
        name: "Марк Уолберг",
      },
      {
        name: "Дуэйн Джонсон",
      },
      {
        name: "Энтони Маки",
      },
      {
        name: "Тони Шэлуб",
      },
      {
        name: "Бар Пали",
      },
      {
        name: "Эд Харрис",
      },
      {
        name: "Роб Кордри",
      },
    ],
    description:
      "Три недалеких качка из Майами решают похитить местного богача.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 69,
    posters: 3,
  }, // кровью и потом: анаболики
  {
    release: new Date("2019-11-08"),
    publication: new Date("2020-02-05"),
    format: "фильм",
    grade: "A+",
    title: "Кролик Джоджо",
    original: "Jojo Rabbit",
    kinopoisk: "https://www.kinopoisk.ru/film/726838/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Роман Гриффин Дэвис",
      },
      {
        name: "Томасин Маккензи",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Сэм Рокуэлл",
      },
    ],
    description:
      "История о мальчике из Гитлерюгенда и еврейской девушке в его доме.",
    genres: [
      {
        genre: "военный",
      },
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // кролик джоджо
  {
    release: new Date("2023-12-22"),
    publication: new Date("2025-06-29"),
    format: "фильм",
    grade: "B",
    title: "Кто угодно, кроме тебя",
    original: "Anyone But You",
    kinopoisk: "https://www.kinopoisk.ru/film/5305423/",
    director: [
      {
        name: "Уилл Глак",
      },
    ],
    cast: [
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Сидни Суини",
      },
      {
        name: "Александра Шипп",
      },
      {
        name: "ГаТа",
      },
      {
        name: "Хэдли Робинсон",
      },
      {
        name: "Дермот Малруни",
      },
      {
        name: "Чарли Фрейзер",
      },
      {
        name: "Даррен Барнет",
      },
    ],
    description:
      "После неудачного свидания Бен и Би встречаются на чужой свадьбе.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 32,
    posters: 2,
  }, // кто угодно, кроме тебя
  {
    release: new Date("2016-01-29"),
    publication: new Date("2023-12-26"),
    format: "фильм",
    grade: "love",
    title: "Кунг-фу Панда 3",
    original: "Kung Fu Panda 3",
    kinopoisk: "https://www.kinopoisk.ru/film/692865/",
    director: [
      {
        name: "Алессандро Карлони",
      },
      {
        name: "Дженнифер Ю Нельсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Анджелина Джоли",
      },
    ],
    description:
      "Злодей Кай уничтожает мастеров кунг-фу в Китае. Теперь По должен обучить боевым искусствам деревню панд и превратить её в команду кунг-фу.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // кунг-фу панда 3
  {
    release: new Date("2011-05-26"),
    publication: new Date("2023-12-21"),
    format: "фильм",
    grade: "love",
    title: "Кунг-фу Панда 2",
    original: "Kung Fu Panda 2",
    kinopoisk: "https://www.kinopoisk.ru/film/427878/",
    director: [
      {
        name: "Дженнифер Ю Нельсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Анджелина Джоли",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Гари Олдман",
      },
    ],
    description:
      "По и его друзья должны помешать злобному павлину Лорду Шэню завоевать Китай с помощью нового смертоносного оружия, но сначала Воин Дракона должен познать своё прошлое.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // кунг-фу панда 2
  {
    release: new Date("2008-06-06"),
    publication: new Date("2023-12-18"),
    format: "фильм",
    grade: "love",
    title: "Кунг-фу Панда",
    original: "Kung Fu Panda",
    kinopoisk: "https://www.kinopoisk.ru/film/103734/",
    director: [
      {
        name: "Марк Осборн",
      },
      {
        name: "Джон Стивенсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Анджелина Джоли",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Иэн Макшейн",
      },
    ],
    description:
      "Панда По — избранный, которому предстоит познать все тонкости кунг-фу и защитить Долину Мира от Тай Лунга.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // кунг-фу панда
  {
    release: new Date("2022-07-28"),
    publication: new Date("2022-09-27"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Курорт",
    original: "The Resort",
    kinopoisk: "https://www.kinopoisk.ru/series/4889608/",
    director: [
      {
        name: "Энди Сьяра",
      },
    ],
    cast: [
      {
        name: "Кристин Милиоти",
      },
      {
        name: "Уильям Джексон Харпер",
      },
      {
        name: "Луис Херардо Мендес",
      },
      {
        name: "Скайлер Гизондо",
      },
    ],
    description:
      "Эмма и Ной отдыхают в отпуске на годовщину брака и находят телефон пропавшего 15 лет назад парня.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // курорт 1
  {
    release: new Date("2023-12-15"),
    publication: new Date("2024-03-24"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Кэрол и конец света",
    original: "Carol & The End of the World",
    kinopoisk: "https://www.kinopoisk.ru/series/5405539/",
    director: [
      {
        name: "Дэн Гутерман",
      },
    ],
    cast: [
      {
        name: "Марта Келли",
      },
      {
        name: "Кимберли Хеберт Грегори",
      },
      {
        name: "Мэл Родригес",
      },
      {
        name: "Тим Хайдекер",
      },
    ],
    description:
      "Кэрол ищет смысл жизни в последние месяцы перед концом света.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // кэрол и конец света
  {
    release: new Date("2016-12-25"),
    publication: new Date("2022-08-02"),
    format: "фильм",
    grade: "love",
    title: "Ла-Ла Ленд",
    original: "La La Land",
    kinopoisk: "https://www.kinopoisk.ru/film/841081/",
    director: [
      {
        name: "Дэмьен Шазелл",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Эмма Стоун",
      },
    ],
    description: "Миа и Себастьян выбирают между личным счастьем и амбициями.",
    genres: [
      {
        genre: "мюзикл",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 114,
    posters: 1,
  }, // ла-ла ленд
  {
    release: new Date("2017-02-08"),
    publication: new Date("2022-05-10"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Легион",
    original: "Legion",
    kinopoisk: "https://www.kinopoisk.ru/series/939002/",
    director: [
      {
        name: "Ной Хоули",
      },
    ],
    cast: [
      {
        name: "Дэн Стивенс",
      },
      {
        name: "Рэйчел Келлер",
      },
      {
        name: "Обри Плаза",
      },
      {
        name: "Джереми Харрис",
      },
      {
        name: "Эмбер Мидфандер",
      },
      {
        name: "Джин Смарт",
      },
    ],
    description:
      "Дэвиду Хэллеру диагностировали шизофрению. После странной встречи он открывает в себе особые способности, изменившие его жизнь.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // легион 1
  {
    release: new Date("2023-11-17"),
    publication: new Date("2023-11-26"),
    format: "фильм",
    grade: "B",
    title: "Лео",
    original: "Leo",
    kinopoisk: "https://www.kinopoisk.ru/film/1346564/",
    director: [
      {
        name: "Роберт Марианетти",
      },
      {
        name: "Роберт Шмигель",
      },
      {
        name: "Дэвид Уочтенхейм",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Билл Бёрр",
      },
    ],
    description:
      "74-летний ящер по имени Лео решает сбежать из террариума школьного класса во Флориде, где он жил десятилетиями.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // лео
  {
    release: new Date("2021-03-18"),
    publication: new Date("2025-03-26"),
    format: "фильм",
    grade: "B",
    title: "Лига справедливости Зака Снайдера",
    original: "Zack Snyder's Justice League",
    kinopoisk: "https://www.kinopoisk.ru/film/1387021/",
    director: [
      {
        name: "Зак Снайдер",
      },
    ],
    cast: [
      {
        name: "Бен Аффлек",
      },
      {
        name: "Галь Гадот",
      },
      {
        name: "Генри Кавилл",
      },
      {
        name: "Джейсон Момоа",
      },
      {
        name: "Эзра Миллер",
      },
      {
        name: "Рэй Фишер",
      },
      {
        name: "Эми Адамс",
      },
      {
        name: "Джереми Айронс",
      },
      {
        name: "Конни Нильсен",
      },
      {
        name: "Киран Хайндс",
      },
      {
        name: "Эмбер Хёрд",
      },
    ],
    description:
      "Брюс Уэйн собирает команду сверхлюдей, чтобы защитить мир от надвигающейся угрозы.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "боевик",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "dc",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 126,
    posters: 2,
  }, // лига справедливости зака снайдера
  {
    release: new Date("2002-06-21"),
    publication: new Date("2025-06-08"),
    format: "фильм",
    grade: "B",
    title: "Лило и Стич",
    original: "Lilo & Stitch",
    kinopoisk: "https://www.kinopoisk.ru/film/740/",
    director: [
      {
        name: "Дин ДеБлуа",
      },
      {
        name: "Крис Сандерс",
      },
    ],
    cast: [
      {
        name: "Дэйви Чейз",
      },
      {
        name: "Крис Сандерс",
      },
      {
        name: "Тиа Каррере",
      },
      {
        name: "Винг Реймз",
      },
    ],
    description:
      "Удивительная история дружбы маленькой девочки с дружелюбным пришельцем.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 42,
    posters: 3,
  }, // лило и стич (2002)
  {
    release: new Date("2022-05-13"),
    publication: new Date("2022-06-18"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Линкольн для адвоката",
    original: "The Lincoln Lawyer",
    kinopoisk: "https://www.kinopoisk.ru/series/4471789/",
    director: [
      {
        name: "Дэвид Э. Келли",
      },
    ],
    cast: [
      {
        name: "Мануэль Рульфо",
      },
      {
        name: "Нив Кэмпбелл",
      },
      {
        name: "Беки Ньютон",
      },
      {
        name: "Энгус Сэмпсон",
      },
      {
        name: "Джаз Рэйкол",
      },
    ],
    description:
      "Адвокат Холлер вынужден взяться за резонансное дело и сталкивается с серьезным давлением.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // линкольн для адвоката 1
  {
    release: new Date("2021-10-28"),
    publication: new Date("2022-04-20"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Личная жизнь",
    original: "Love Life",
    kinopoisk: "https://www.kinopoisk.ru/series/1271262/",
    director: [
      {
        name: "Сэм Бойд",
      },
    ],
    cast: [
      {
        name: "Уильям Джексон Харпер",
      },
      {
        name: "Джессика Уильямс",
      },
    ],
    description:
      "Главный герой — Маркус Уоткинс, переживший разрыв длительных отношений со своей бывшей второй половинкой. Теперь он открыт для новых романтических приключений.",
    genres: [
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // личная жизнь 2
  {
    release: new Date("2017-05-16"),
    publication: new Date("2025-03-20"),
    format: "фильм",
    grade: "A+",
    title: "Логан: Нуар",
    original: "Logan: Noir",
    kinopoisk: "https://www.kinopoisk.ru/film/807682/",
    director: [
      {
        name: "Джеймс Мэнголд",
      },
    ],
    cast: [
      {
        name: "Хью Джекман",
      },
      {
        name: "Патрик Стюарт",
      },
      {
        name: "Дафни Кин",
      },
      {
        name: "Бойд Холбрук",
      },
      {
        name: "Стивен Мерчант",
      },
      {
        name: "Ричард Э. Грант",
      },
    ],
    description:
      "Черно-белая версия фильма «Логан», где уставший Логан в мире без мутантов спасает от учёных девочку-мутанта Лору.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "чёрно-белое",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 90,
    posters: 2,
  }, // логан: нуар
  {
    release: new Date("2023-10-05"),
    publication: new Date("2023-11-13"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Локи",
    original: "Loki",
    kinopoisk: "https://www.kinopoisk.ru/series/1203039/",
    director: [
      {
        name: "Майкл Уолдрон",
      },
    ],
    cast: [
      {
        name: "Том Хиддлстон",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Софи Ди Мартино",
      },
      {
        name: "Вунми Мосаку",
      },
    ],
    description:
      "Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "фэнтези",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // локи 2
  {
    release: new Date("2022-03-30"),
    publication: new Date("2022-05-06"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Лунный рыцарь",
    original: "Moon Knight",
    kinopoisk: "https://www.kinopoisk.ru/series/1320559/",
    director: [
      {
        name: "Джереми Слейтер",
      },
    ],
    cast: [
      {
        name: "Оскар Айзек",
      },
      {
        name: "Итан Хоук",
      },
      {
        name: "Мэй Каламави",
      },
      {
        name: "Ф. Мюррэй Абрахам",
      },
    ],
    description:
      "Бывший военный, который борется с диссоциативным расстройством, неожиданно обретает могущество и энергию египетского Бога Луны.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      {
        genre: "триллер",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 62,
    posters: 2,
  }, // лунный рыцарь
  {
    release: new Date("2016-11-18"),
    publication: new Date("2022-03-19"),
    format: "фильм",
    grade: "A",
    title: "Лунный свет",
    original: "Moonlight",
    kinopoisk: "https://www.kinopoisk.ru/film/939981/",
    director: [
      {
        name: "Барри Дженкинс",
      },
    ],
    cast: [
      {
        name: "Алекс Р. Хибберт",
      },
      {
        name: "Эштон Сандерс",
      },
      {
        name: "Треванте Роудс",
      },
      {
        name: "Наоми Харрис",
      },
      {
        name: "Жанель Моне",
      },
      {
        name: "Махершала Али",
      },
      {
        name: "Джаррель Джером",
      },
      {
        name: "Андре Холланд",
      },
    ],
    description:
      "Мальчик, подросток, мужчина… Ему выпало родиться и жить в Майами, где миром правят наркотики и деньги.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // лунный свет
  {
    release: new Date("2022-04-18"),
    publication: new Date("2022-08-17"),
    format: "сериал",
    season: "6",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
      {
        name: "Джанкарло Эспозито",
      },
      {
        name: "Тони Далтон",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 52,
    posters: 1,
  }, // лучше звоните солу 6
  {
    release: new Date("2020-02-23"),
    publication: new Date("2022-07-25"),
    format: "сериал",
    season: "5",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
      {
        name: "Джанкарло Эспозито",
      },
      {
        name: "Тони Далтон",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 26,
    posters: 1,
  }, // лучше звоните солу 5
  {
    release: new Date("2018-08-06"),
    publication: new Date("2022-07-22"),
    format: "сериал",
    season: "4",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
      {
        name: "Джанкарло Эспозито",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // лучше звоните солу 4
  {
    release: new Date("2017-04-10"),
    publication: new Date("2022-07-19"),
    format: "сериал",
    season: "3",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
      {
        name: "Джанкарло Эспозито",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 41,
    posters: 1,
  }, // лучше звоните солу 3
  {
    release: new Date("2016-02-15"),
    publication: new Date("2022-07-15"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 43,
    posters: 1,
  }, // лучше звоните солу 2
  {
    release: new Date("2015-02-08"),
    publication: new Date("2022-07-13"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Лучше звоните Солу",
    original: "Better Call Saul",
    kinopoisk: "https://www.kinopoisk.ru/series/796660/",
    director: [
      {
        name: "Винс Гиллиган",
      },
      {
        name: "Питер Гулд",
      },
    ],
    cast: [
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэй Сихорн",
      },
      {
        name: "Джонатан Бэнкс",
      },
      {
        name: "Майкл Мэндо",
      },
    ],
    description:
      "Об испытаниях и невзгодах адвоката по уголовным делам Джимми Макгилла в годы, предшествовавшие его судьбоносной стычке с Уолтером Уайтом и Джесси Пинкманом.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 42,
    posters: 1,
  }, // лучше звоните солу 1
  {
    release: new Date("2024-11-17"),
    publication: new Date("2025-01-19"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Лэндмен",
    original: "Landman / Землевладелец",
    kinopoisk: "https://www.kinopoisk.ru/series/4909559/",
    director: [
      {
        name: "Тейлор Шеридан",
      },
      {
        name: "Кристиан Уоллес",
      },
    ],
    cast: [
      {
        name: "Билли Боб Торнтон",
      },
      {
        name: "Эли Лартер",
      },
      {
        name: "Джейкоб Лофленд",
      },
      {
        name: "Мишель Рэндольф",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Кейла Уоллес",
      },
      {
        name: "Паулина Чавес",
      },
    ],
    description:
      "Лэндмен Томми Норрис решает проблемы нефтяной компании, улаживая конфликты с мексиканскими картелями, полицией и федеральными агентами.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 36,
    posters: 2,
  }, // лэндмен 1
  {
    release: new Date("2025-05-15"),
    publication: new Date("2025-06-01"),
    format: "сериал",
    season: "4",
    grade: "B",
    title: "Любовь. Смерть. Роботы",
    original: "Love, Death & Robots",
    kinopoisk: "https://www.kinopoisk.ru/series/1228254/",
    director: [
      {
        name: "Тим Миллер",
      },
    ],
    cast: [{ name: "" }],
    description:
      "Анимационная антология, объединяющая истории в жанрах научной фантастики, фэнтези, ужасов и комедии.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "короткометражка",
      },
    ],
    screenshots: 20,
    posters: 2,
  }, // любовь, смерть и роботы 4
  {
    release: new Date("2022-05-20"),
    publication: new Date("2022-05-25"),
    format: "сериал",
    season: "3",
    grade: "B",
    title: "Любовь. Смерть. Роботы",
    original: "Love, Death & Robots",
    kinopoisk: "https://www.kinopoisk.ru/series/1228254/",
    director: [
      {
        name: "Тим Миллер",
      },
    ],
    cast: [{ name: "" }],
    description:
      "Анимационная антология, объединяющая истории в жанрах научной фантастики, фэнтези, ужасов и комедии.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "короткометражка",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // любовь, смерть и роботы 3
  {
    release: new Date("2021-05-14"),
    publication: new Date("2021-05-16"),
    format: "сериал",
    season: "2",
    grade: "B",
    title: "Любовь. Смерть. Роботы",
    original: "Love, Death & Robots",
    kinopoisk: "https://www.kinopoisk.ru/series/1228254/",
    director: [
      {
        name: "Тим Миллер",
      },
    ],
    cast: [{ name: "" }],
    description:
      "Анимационная антология, объединяющая истории в жанрах научной фантастики, фэнтези, ужасов и комедии.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "короткометражка",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // любовь, смерть и роботы 2
  {
    release: new Date("2016-08-19"),
    publication: new Date("2025-04-06"),
    format: "фильм",
    grade: "A",
    title: "Любой ценой",
    original: "Hell or High Water",
    kinopoisk: "https://www.kinopoisk.ru/film/726794/",
    director: [
      {
        name: "Дэвид Маккензи",
      },
    ],
    cast: [
      {
        name: "Крис Пайн",
      },
      {
        name: "Бен Фостер",
      },
      {
        name: "Джефф Бриджес",
      },
      {
        name: "Гил Бирмингем",
      },
    ],
    description: "Чтобы погасить кредит в одном банке, братья грабят другие.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "вестерн",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // любой ценой
  {
    release: new Date("2019-06-14"),
    publication: new Date("2021-07-27"),
    format: "фильм",
    grade: "C",
    title: "Люди в чёрном: Интернэшнл",
    original: "Men in Black International",
    kinopoisk: "https://www.kinopoisk.ru/film/693730/",
    director: [
      {
        name: "Ф. Гэри Грей",
      },
    ],
    cast: [
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Тесса Томпсон",
      },
      {
        name: "Лиам Нисон",
      },
      {
        name: "Кумэйл Нанджиани",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Эмма Томпсон",
      },
    ],
    description:
      "Агенты организации «Люди в чёрном» раскрывают «крота» в своей команде.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "комедия" },
    ],
    screenshots: 19,
    posters: 3,
  }, // люди в чёрном: интернэшнл
  {
    release: new Date("2006-05-26"),
    publication: new Date("2023-09-15"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс: Последняя битва",
    original: "X-Men: The Last Stand",
    kinopoisk: "https://www.kinopoisk.ru/film/61361/",
    director: [
      {
        name: "Бретт Рэтнер",
      },
    ],
    cast: [
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "Люди Икс под руководством профессора Ксавьера сражаются с эволюцией в лице воскресшей Джин Грэй, превратившейся в Тёмного Феникса. Её сила угрожает всем: мутантам и людям.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 31,
    posters: 2,
  }, // люди икс 3
  {
    release: new Date("2003-05-02"),
    publication: new Date("2023-09-14"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс 2",
    original: "X2",
    kinopoisk: "https://www.kinopoisk.ru/film/298/",
    director: [
      {
        name: "Брайан Сингер",
      },
    ],
    cast: [
      {
        name: "Патрик Стюарт",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "Мутантов обвиняют в покушении на президента. Забыв разногласия, супергерои сплочаются против общего врага.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // люди икс 2
  {
    release: new Date("2000-07-14"),
    publication: new Date("2023-09-13"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс",
    original: "X-Men",
    kinopoisk: "https://www.kinopoisk.ru/film/886/",
    director: [
      {
        name: "Брайан Сингер",
      },
    ],
    cast: [
      {
        name: "Патрик Стюарт",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "Появляются люди с суперспособностями. Их боятся, но профессор Ксавье учит жить с людьми в мире. Магнето хочет захватить мир - Ксавье ему противостоит.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // люди икс
  {
    release: new Date("2024-03-20"),
    publication: new Date("2024-05-19"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Люди Икс ’97",
    original: "X-Men '97",
    kinopoisk: "https://www.kinopoisk.ru/series/4711940/",
    director: [
      {
        name: "Бо ДеМайо",
      },
    ],
    cast: [
      {
        name: "Рэй Чейз",
      },
      {
        name: "Кэл Додд",
      },
      {
        name: "Холли Чоу",
      },
      {
        name: "Дженнифер Хейл",
      },
      {
        name: "Росс Маркванд",
      },
    ],
    description:
      "Люди Икс справляются с потерей Ксавье и внутренними конфликтами.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 43,
    posters: 3,
  }, // люди икс ’97 1
  {
    release: new Date("2023-11-17"),
    publication: new Date("2023-12-10"),
    format: "фильм",
    grade: "B",
    title: "Май декабрь",
    original: "May December",
    kinopoisk: "https://www.kinopoisk.ru/film/4477074/",
    director: [
      {
        name: "Тодд Хейнс",
      },
    ],
    cast: [
      {
        name: "Натали Портман",
      },
      {
        name: "Джулианна Мур",
      },
      {
        name: "Чарльз Мелтон",
      },
    ],
    description:
      "Ради роли актриса сближается с женщиной, соблазнившей подростка.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // май декабрь
  {
    release: new Date("2018-10-18"),
    publication: new Date("2025-05-28"),
    format: "сериал",
    season: "мини–сериал",
    grade: "B",
    title: "Маленькая барабанщица",
    original: "The Little Drummer Girl",
    kinopoisk: "https://www.kinopoisk.ru/series/1100408/",
    director: [
      {
        name: "Пак Чхан-ук",
      },
    ],
    cast: [
      {
        name: "Флоренс Пью",
      },
      {
        name: "Александр Скарсгард",
      },
      {
        name: "Майкл Шеннон",
      },
    ],
    description:
      "Моссад вербует актрису для борьбы с палестинским террористом.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "шпионаж",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // маленькая барабанщица
  {
    release: new Date("2021-02-05"),
    publication: new Date("2021-06-06"),
    format: "фильм",
    grade: "A",
    title: "Маленькая рыбка",
    original: "Little Fish",
    kinopoisk: "https://www.kinopoisk.ru/film/1245545/",
    director: [
      {
        name: "Чед Хартиган",
      },
    ],
    cast: [
      {
        name: "Оливия Кук",
      },
      {
        name: "Джек О’Коннелл",
      },
    ],
    description:
      "Пара пытается сохранить свои отношения, в то время как вирус потери памяти распространяется и угрожает стереть историю их любви.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // маленькая рыбка
  {
    release: new Date("2019-12-25"),
    publication: new Date("2021-11-28"),
    format: "фильм",
    grade: "B",
    title: "Маленькие женщины",
    original: "Little Women",
    kinopoisk: "https://www.kinopoisk.ru/film/807339/",
    director: [
      {
        name: "Грета Гервиг",
      },
    ],
    cast: [
      {
        name: "Сирша Ронан",
      },
      {
        name: "Эмма Уотсон",
      },
      {
        name: "Флоренс Пью",
      },
      {
        name: "Элайза Сканлен",
      },
      {
        name: "Лора Дерн",
      },
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Джеймс Нортон",
      },
      {
        name: "Луи Гаррель",
      },
    ],
    description: "История взросления четырёх непохожих друг на друга сестер.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 24,
    posters: 2,
  }, // маленькие женщины
  {
    release: new Date("2021-01-29"),
    publication: new Date("2021-02-15"),
    format: "фильм",
    grade: "A",
    title: "Малкольм и Мари",
    original: "Malcolm & Marie",
    kinopoisk: "https://www.kinopoisk.ru/film/1394181/",
    director: [
      {
        name: "Сэм Левинсон",
      },
    ],
    cast: [
      {
        name: "Зендея",
      },
      {
        name: "Джон Дэвид Вашингтон",
      },
    ],
    description:
      "Отношения режиссёра и его девушки проходят испытание в одну долгую ночь после премьеры фильма.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 51,
    posters: 1,
  }, // малкольм и мари
  {
    release: new Date("2017-06-28"),
    publication: new Date("2019-01-27"),
    format: "фильм",
    grade: "love",
    title: "Малыш на драйве",
    original: "Baby Driver",
    kinopoisk: "https://www.kinopoisk.ru/film/902939/",
    director: [
      {
        name: "Эдгар Райт",
      },
    ],
    cast: [
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Кевин Спейси",
      },
      {
        name: "Лили Джеймс",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Эйса Гонсалес",
      },
      {
        name: "Джон Бернтал",
      },
    ],
    description:
      "Молодой водитель вынужден работать на криминального босса. Его жизнь, любовь и свобода под угрозой из-за обреченного на провал ограбления.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // малыш на драйве
  {
    release: new Date("2013-05-23"),
    publication: new Date("2022-01-15"),
    format: "фильм",
    grade: "B",
    title: "Мальчишник: Часть III",
    original: "The Hangover Part III",
    kinopoisk: "https://www.kinopoisk.ru/film/600847/",
    director: [
      {
        name: "Тодд Филлипс",
      },
    ],
    cast: [
      {
        name: "Брэдли Купер",
      },
      {
        name: "Эд Хелмс",
      },
      {
        name: "Зак Галифианакис",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Джон Гудман",
      },
      {
        name: "Джастин Барта",
      },
    ],
    description:
      "Гангстер похищает члена Волчьей стаи и требует найти сбежавшего из тюрьмы мистера Чоу.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // мальчишник 3
  {
    release: new Date("2011-05-26"),
    publication: new Date("2022-01-13"),
    format: "фильм",
    grade: "A",
    title: "Мальчишник 2: Из Вегаса в Бангкок",
    original: "The Hangover Part II",
    kinopoisk: "https://www.kinopoisk.ru/film/455338/",
    director: [
      {
        name: "Тодд Филлипс",
      },
    ],
    cast: [
      {
        name: "Брэдли Купер",
      },
      {
        name: "Эд Хелмс",
      },
      {
        name: "Зак Галифианакис",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Джастин Барта",
      },
    ],
    description:
      "После мальчишника в Лас-Вегасе друзья летят в Таиланд на свадьбу Стью, но его идея скромного предсвадебного бранча заканчивается провалом.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // мальчишник 2
  {
    release: new Date("2009-06-05"),
    publication: new Date("2021-12-27"),
    format: "фильм",
    grade: "love",
    title: "Мальчишник в Вегасе",
    original: "The Hangover",
    kinopoisk: "https://www.kinopoisk.ru/film/426004/",
    director: [
      {
        name: "Тодд Филлипс",
      },
    ],
    cast: [
      {
        name: "Брэдли Купер",
      },
      {
        name: "Эд Хелмс",
      },
      {
        name: "Зак Галифианакис",
      },
      {
        name: "Джастин Барта",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Майк Тайсон",
      },
    ],
    description:
      "После мальчишника в Лас-Вегасе друзья не помнят ничего, жениха нет, нужно найти его к свадьбе.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // мальчишник
  {
    release: new Date("2019-11-12"),
    publication: new Date("2020-01-12"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Мандалорец",
    original: "The Mandalorian",
    kinopoisk: "https://www.kinopoisk.ru/series/1118138/",
    director: [
      {
        name: "Джон Фавро",
      },
    ],
    cast: [
      {
        name: "Педро Паскаль",
      },
    ],
    description:
      "Отважный мандалорец Дин Джарин живет на задворках галактики, но его ждет большое приключение.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // мандалорец 1
  {
    release: new Date("2020-11-13"),
    publication: new Date("2021-02-04"),
    format: "фильм",
    grade: "D",
    title: "Манк",
    original: "Mank",
    kinopoisk: "https://www.kinopoisk.ru/film/1283862/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Гари Олдман",
      },
      {
        name: "Аманда Сайфред",
      },
      {
        name: "Лили Коллинз",
      },
      {
        name: "Том Пелфри",
      },
      {
        name: "Том Бёрк",
      },
      {
        name: "Чарльз Дэнс",
      },
    ],
    description:
      "В процессе работы над сценарием «Гражданин Кейн» Манкевич переосмысливает Голливуд 1930-х.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // манк
  {
    release: new Date("2016-12-16"),
    publication: new Date("2019-03-04"),
    format: "фильм",
    grade: "A+",
    title: "Манчестер у моря",
    original: "Manchester by the Sea",
    kinopoisk: "https://www.kinopoisk.ru/film/884376/",
    director: [
      {
        name: "Кеннет Лонерган",
      },
    ],
    cast: [
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Мишель Уильямс",
      },
      {
        name: "Кайл Чендлер",
      },
      {
        name: "Лукас Хеджес",
      },
    ],
    description:
      "Нелюдимый Ли, слесарь в многоквартирном доме, узнает о смерти брата и назначении опекуном его 16-летнего племянника.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // манчестер у моря
  {
    release: new Date("2024-02-09"),
    publication: new Date("2025-07-24"),
    format: "фильм",
    grade: "B",
    title: "Мармелад",
    original: "Marmalade",
    kinopoisk: "https://www.kinopoisk.ru/film/5071324/",
    director: [
      {
        name: "Кейр О’Доннелл",
      },
    ],
    cast: [
      {
        name: "Джо Кири",
      },
      {
        name: "Элдис Ходж",
      },
      {
        name: "Камила Морроун",
      },
    ],
    description: "Ради дерзкой красотки парень решается на ограбление.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 42,
    posters: 1,
  }, // мармелад
  {
    release: new Date("2021-05-23"),
    publication: new Date("2022-03-12"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Мастер не на все руки",
    original: "Master of None",
    kinopoisk: "https://www.kinopoisk.ru/series/938852/",
    director: [
      {
        name: "Азиз Ансари",
      },
      {
        name: "Алан Янг",
      },
    ],
    cast: [
      {
        name: "Лина Уэйте",
      },
      {
        name: "Наоми Аки",
      },
      {
        name: "Азиз Ансари",
      },
    ],
    description:
      "Дениз становится знаменитой писательницей и спокойно живет со своей женой Алисией в пригороде Нью-Йорка, но ужин с другой парой заставляет их задуматься о будущем.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 51,
    posters: 1,
  }, // мастер не на все руки 3
  {
    release: new Date("2019-10-25"),
    publication: new Date("2025-03-26"),
    format: "фильм",
    grade: "B",
    title: "Маяк",
    original: "The Lighthouse",
    kinopoisk: "https://www.kinopoisk.ru/film/1114927/",
    director: [
      {
        name: "Роберт Эггерс",
      },
    ],
    cast: [
      {
        name: "Роберт Паттинсон",
      },
      {
        name: "Уиллем Дефо",
      },
    ],
    description:
      "Два смотрителя маяка пытаются сохранить рассудок на уединённом острове Новой Англии в 1890-х годах.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 81,
    posters: 2,
  }, // маяк
  {
    release: new Date("2010-11-05"),
    publication: new Date("2025-03-29"),
    format: "фильм",
    grade: "A",
    title: "Мегамозг",
    original: "Megamind",
    kinopoisk: "https://www.kinopoisk.ru/film/405608/",
    director: [
      {
        name: "Том МакГрат",
      },
    ],
    cast: [
      {
        name: "Уилл Феррелл",
      },
      {
        name: "Тина Фей",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Джона Хилл",
      },
      {
        name: "Дэвид Кросс",
      },
    ],
    description:
      "Мегамозг, злой гений Метро-Сити, побеждает своего заклятого врага, героя Метро-Мэна, но теряет цель в жизни.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "супергероика",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // мегамозг
  {
    release: new Date("2025-06-25"),
    publication: new Date("2025-09-06"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
      {
        name: "Лайонел Бойс",
      },
      {
        name: "Лиза Колон-Зайас",
      },
      {
        name: "Эбби Эллиотт",
      },
      {
        name: "Мэтти Мэтисон",
      },
      {
        name: "Оливер Платт",
      },
      {
        name: "Молли Гордон",
      },
      {
        name: "Уилл Поултер",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 78,
    posters: 1,
  }, // медведь 4
  {
    release: new Date("2024-06-26"),
    publication: new Date("2024-08-28"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
      {
        name: "Лайонел Бойс",
      },
      {
        name: "Лиза Колон-Зайас",
      },
      {
        name: "Эбби Эллиотт",
      },
      {
        name: "Мэтти Мэтисон",
      },
      {
        name: "Оливер Платт",
      },
      {
        name: "Молли Гордон",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // медведь 3
  {
    release: new Date("2023-06-22"),
    publication: new Date("2023-08-05"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
      {
        name: "Лайонел Бойс",
      },
      {
        name: "Лиза Колон-Зайас",
      },
      {
        name: "Эбби Эллиотт",
      },
      {
        name: "Мэтти Мэтисон",
      },
      {
        name: "Оливер Платт",
      },
      {
        name: "Молли Гордон",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // медведь 2
  {
    release: new Date("2022-06-23"),
    publication: new Date("2022-07-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
      {
        name: "Лайонел Бойс",
      },
      {
        name: "Лиза Колон-Зайас",
      },
      {
        name: "Эбби Эллиотт",
      },
      {
        name: "Мэтти Мэтисон",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // медведь 1
  {
    release: new Date("2019-09-20"),
    publication: new Date("2022-01-21"),
    format: "фильм",
    grade: "C",
    title: "Между двумя папоротниками",
    original: "Between Two Ferns: The Movie",
    kinopoisk: "https://www.kinopoisk.ru/film/1220126/",
    director: [
      {
        name: "Скотт Окерман",
      },
    ],
    cast: [
      {
        name: "Зак Галифианакис",
      },
      {
        name: "Уилл Феррелл",
      },
    ],
    description:
      "Заку Галифианакису придется отправиться со своей съемочной командой в путешествие, чтобы взять серию интервью у знаменитостей первой величины.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // между двумя папоротниками
  {
    release: new Date("2001-03-02"),
    publication: new Date("2023-07-30"),
    format: "фильм",
    grade: "B",
    title: "Мексиканец",
    original: "The Mexican",
    kinopoisk: "https://www.kinopoisk.ru/film/753/",
    director: [
      {
        name: "Гор Вербински",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Джулия Робертс",
      },
      {
        name: "Джеймс Гандольфини",
      },
    ],
    description:
      "Мелкий гангстер должен разыскать в Мексике бесценный антикварный пистолет, прозванный «Мексиканец».",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // мексиканец
  {
    release: new Date("2020-02-14"),
    publication: new Date("2020-04-04"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Меломанка",
    original: "High Fidelity",
    kinopoisk: "https://www.kinopoisk.ru/series/1165440/",
    director: [
      {
        name: "Сара Кусерка",
      },
      {
        name: "Вероника Уэст",
      },
    ],
    cast: [
      {
        name: "Зои Кравиц",
      },
      {
        name: "Джейк Лэси",
      },
      {
        name: "Давайн Джой Рэндольф",
      },
      {
        name: "Дэвид Х. Холмс",
      },
      {
        name: "Кингсли Бен-Адир",
      },
    ],
    description:
      "Роб — хозяйка магазина пластинок в Бруклине, переживающая разрыв отношений через музыку.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // меломанка
  {
    release: new Date("2013-03-29"),
    publication: new Date("2019-03-26"),
    format: "фильм",
    grade: "A+",
    title: "Место под соснами",
    original: "The Place Beyond the Pines",
    kinopoisk: "https://www.kinopoisk.ru/film/577673/",
    director: [
      {
        name: "Дерек Сиенфрэнс",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Брэдли Купер",
      },
      {
        name: "Ева Мендес",
      },
      {
        name: "Дэйн ДеХаан",
      },
      {
        name: "Эмори Коэн",
      },
      {
        name: "Бен Мендельсон",
      },
    ],
    description:
      "Каскадер-мотоциклист становится грабителем банков, чтобы обеспечить сына.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // место под соснами
  {
    release: new Date("2023-11-22"),
    publication: new Date("2024-03-23"),
    format: "фильм",
    grade: "C",
    title: "Мечты робота",
    original: "Robot Dreams",
    kinopoisk: "https://www.kinopoisk.ru/film/5321227/",
    director: [
      {
        name: "Пабло Берхер",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description: "У одинокого пса из Нью-Йорка появляется лучший друг-робот.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // мечты робота
  {
    release: new Date("2023-12-22"),
    publication: new Date("2024-02-25"),
    format: "фильм",
    grade: "A",
    title: "Миграция",
    original: "Migration",
    kinopoisk: "https://www.kinopoisk.ru/film/4878248/",
    director: [
      {
        name: "Бенжамин Реннер",
      },
      {
        name: "Гейло Хомси",
      },
    ],
    cast: [
      {
        name: "Кумэйл Нанджиани",
      },
      {
        name: "Элизабет Бэнкс",
      },
    ],
    description:
      "Семейство уток пытается убедить своего чрезмерно заботливого отца отправиться в отпуск, который бывает раз в жизни.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 22,
    posters: 2,
  }, // миграция
  {
    release: new Date("2025-03-07"),
    publication: new Date("2025-04-06"),
    format: "фильм",
    grade: "C",
    title: "Микки 17",
    original: "Mickey 17",
    kinopoisk: "https://www.kinopoisk.ru/film/1320476/",
    director: [
      {
        name: "Пон Джун-хо",
      },
    ],
    cast: [
      {
        name: "Роберт Паттинсон",
      },
      {
        name: "Наоми Аки",
      },
      {
        name: "Стивен Ян",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Тони Коллетт",
      },
      {
        name: "Анамария Вартоломеи",
      },
    ],
    description:
      "«Одноразовый» Микки колонизирует ледяной мир, возрождаясь после каждой смерти в новом теле.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 66,
    posters: 2,
  }, // микки 17
  {
    release: new Date("2022-09-21"),
    publication: new Date("2023-02-28"),
    format: "фильм",
    grade: "C",
    title: "Милая встреча",
    original: "Meet Cute",
    kinopoisk: "https://www.kinopoisk.ru/film/4542022/",
    director: [
      {
        name: "Александр Леманн",
      },
    ],
    cast: [
      {
        name: "Кейли Куоко",
      },
      {
        name: "Пит Дэвидсон",
      },
    ],
    description:
      "Шейла использует машину времени для повторных свиданий с Гэри.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // милая встреча
  {
    release: new Date("2012-09-01"),
    publication: new Date("2022-03-13"),
    format: "фильм",
    grade: "D",
    title: "Милая Фрэнсис",
    original: "Frances Ha",
    kinopoisk: "https://www.kinopoisk.ru/film/677442/",
    director: [
      {
        name: "Ноа Баумбак",
      },
    ],
    cast: [
      {
        name: "Грета Гервиг",
      },
      {
        name: "Адам Драйвер",
      },
      {
        name: "Майкл Зеген",
      },
    ],
    description:
      "Танцовщица из Нью-Йорка присоединяется к труппе и преследует свои мечты, хотя шансы на их исполнение уменьшаются.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // милая фрэнсис
  {
    release: new Date("1977-07-01"),
    publication: new Date("2021-06-05"),
    format: "фильм",
    grade: "A",
    title: "Мимино",
    original: "Mimino",
    kinopoisk: "https://www.kinopoisk.ru/film/46638/",
    director: [
      {
        name: "Георгий Данелия",
      },
    ],
    cast: [
      {
        name: "Вахтанг Кикабидзе",
      },
      {
        name: "Фрунзик Мкртчян",
      },
      {
        name: "Елена Проклова",
      },
      {
        name: "Евгений Леонов",
      },
    ],
    description: "Путь грузина-пилота в большую авиацию.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // мимино
  {
    release: new Date("2020-01-26"),
    publication: new Date("2021-10-25"),
    format: "фильм",
    grade: "B",
    title: "Минари",
    original: "Minari",
    kinopoisk: "https://www.kinopoisk.ru/film/1286541/",
    director: [
      {
        name: "Ли Айзек Чун",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Хан Е-ри",
      },
      {
        name: "Юн Ё-джон",
      },
      {
        name: "Алан С. Ким",
      },
      {
        name: "Ноэль Чо",
      },
    ],
    description: "Семья корейских мигрантов осваивает Америку 1980-х.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // минари
  {
    release: new Date("2015-07-10"),
    publication: new Date("2022-07-10"),
    format: "фильм",
    grade: "B",
    title: "Миньоны",
    original: "Minions",
    kinopoisk: "https://www.kinopoisk.ru/film/694051/",
    director: [
      {
        name: "Кайл Балда",
      },
      {
        name: "Пьер Коффан",
      },
    ],
    cast: [
      {
        name: "Сандра Буллок",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Майкл Китон",
      },
      {
        name: "Эллисон Дженни",
      },
      {
        name: "Стив Куган",
      },
      {
        name: "Джеффри Раш",
      },
    ],
    description:
      "Скарлет Оверкилл с мужем-изобретателем вербует миньонов для захвата мира.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
    posters: 2,
  }, // миньоны
  {
    release: new Date("2022-07-01"),
    publication: new Date("2022-08-17"),
    format: "фильм",
    grade: "B",
    title: "Миньоны: Грювитация",
    original: "Minions: The Rise of Gru",
    kinopoisk: "https://www.kinopoisk.ru/film/1009513/",
    director: [
      {
        name: "Кайл Балда",
      },
      {
        name: "Брэд Эблесон",
      },
      {
        name: "Джонатан дель Валь",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Алан Аркин",
      },
      {
        name: "Тараджи П. Хенсон",
      },
      {
        name: "Мишель Йео",
      },
      {
        name: "RZA",
      },
    ],
    description:
      "История знакомства забавных жёлтых существ с будущем злодеем Грю.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // миньоны: грювитация
  {
    release: new Date("2022-06-26"),
    publication: new Date("2022-08-15"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Мир Дикого Запада",
    original: "Westworld",
    kinopoisk: "https://www.kinopoisk.ru/series/195523/",
    director: [
      {
        name: "Джонатан Нолан",
      },
      {
        name: "Лиза Джой",
      },
    ],
    cast: [
      {
        name: "Эван Рэйчел Вуд",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Эд Харрис",
      },
      {
        name: "Тандиве Ньютон",
      },
      {
        name: "Тесса Томпсон",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Люк Хемсворт",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "В парке будущего богатые посетители эксплуатируют андроидов, которым стирают память. Выясняется, что некоторые роботы помнят всё.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // мир дикого запада 4
  {
    release: new Date("2020-03-15"),
    publication: new Date("2020-05-13"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Мир Дикого Запада",
    original: "Westworld",
    kinopoisk: "https://www.kinopoisk.ru/series/195523/",
    director: [
      {
        name: "Джонатан Нолан",
      },
      {
        name: "Лиза Джой",
      },
    ],
    cast: [
      {
        name: "Эван Рэйчел Вуд",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Эд Харрис",
      },
      {
        name: "Тандиве Ньютон",
      },
      {
        name: "Тесса Томпсон",
      },
      {
        name: "Аарон Пол",
      },
      {
        name: "Люк Хемсворт",
      },
      {
        name: "Венсан Кассель",
      },
    ],
    description:
      "В парке будущего богатые посетители эксплуатируют андроидов, которым стирают память. Выясняется, что некоторые роботы помнят всё.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // мир дикого запада 3
  {
    release: new Date("2015-06-12"),
    publication: new Date("2020-05-06"),
    format: "фильм",
    grade: "B",
    title: "Мир Юрского периода",
    original: "Jurassic World",
    kinopoisk: "https://www.kinopoisk.ru/film/594554/",
    director: [
      {
        name: "Колин Треворроу",
      },
    ],
    cast: [
      {
        name: "Крис Пратт",
      },
      {
        name: "Брайс Даллас Ховард",
      },
      {
        name: "Ник Робинсон",
      },
      {
        name: "Тай Симпкинс",
      },
      {
        name: "Винсент Д’Онофрио",
      },
      {
        name: "Ирфан Кхан",
      },
      {
        name: "Омар Си",
      },
    ],
    description:
      "В новом парке Юрского периода сбегает опасный генетический гибрид.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // мир юрского периода
  {
    release: new Date("2022-01-13"),
    publication: new Date("2022-04-17"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Миротворец",
    original: "Peacemaker",
    kinopoisk: "https://www.kinopoisk.ru/series/1421587/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Джон Сина",
      },
      {
        name: "Даниэль Брукс",
      },
      {
        name: "Фредди Строма",
      },
      {
        name: "Чукуди Ивуджи",
      },
      {
        name: "Дженнифер Холлэнд",
      },
    ],
    description:
      "Пацифист безжалостно борется за мир во всем мире и пытается поладить с отцом.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "dc",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // миротворец 1
  {
    release: new Date("2025-05-23"),
    publication: new Date("2025-08-21"),
    format: "фильм",
    grade: "A",
    title: "Миссия невыполнима: Финальная расплата",
    original: "Mission: Impossible - The Final Reckoning",
    kinopoisk: "https://www.kinopoisk.ru/film/1229683/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Хейли Этвелл",
      },
      {
        name: "Эсай Моралес",
      },
      {
        name: "Пом Клементьефф",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Шей Уигэм",
      },
      {
        name: "Грег Тарзан Дэвис",
      },
      {
        name: "Холт Маккэллани",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Трэмелл Тиллман",
      },
      {
        name: "Анджела Бассетт",
      },
      {
        name: "Чарльз Парнелл",
      },
    ],
    description:
      "Хант противостоит опасному ИИ, угрожающему изменить мир, пока за ним охотятся правительства.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 33,
    posters: 2,
  }, // миссия невыполнима: финальная расплата (8)
  {
    release: new Date("2023-07-12"),
    publication: new Date("2023-10-12"),
    format: "фильм",
    grade: "A+",
    title: "Миссия невыполнима: Смертельная расплата",
    original: "Mission: Impossible - Dead Reckoning Part One / Часть первая",
    kinopoisk: "https://www.kinopoisk.ru/film/1229684/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Хейли Этвелл",
      },
      {
        name: "Эсай Моралес",
      },
      {
        name: "Пом Клементьефф",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Ванесса Кирби",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Шей Уигэм",
      },
      {
        name: "Грег Тарзан Дэвис",
      },
    ],
    description:
      "Итан Хант и его команда должны разыскать опасное оружие до того, как оно попадет не в те руки.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 26,
    posters: 1,
  }, // миссия невыполнима: смертельная расплата (7)
  {
    release: new Date("2018-07-27"),
    publication: new Date("2023-05-25"),
    format: "фильм",
    grade: "love",
    title: "Миссия невыполнима: Последствия",
    original: "Mission: Impossible - Fallout",
    kinopoisk: "https://www.kinopoisk.ru/film/926540/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Генри Кавилл",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Ванесса Кирби",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Анджела Бассетт",
      },
      {
        name: "Алек Болдуин",
      },
    ],
    description: "Агенты ЦРУ должны изъять плутоний из рук террористов.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 35,
    posters: 1,
  }, // миссия невыполнима: последствия (6)
  {
    release: new Date("2015-07-31"),
    publication: new Date("2023-05-22"),
    format: "фильм",
    grade: "A",
    title: "Миссия невыполнима: Племя изгоев",
    original: "Mission: Impossible - Rogue Nation",
    kinopoisk: "https://www.kinopoisk.ru/film/678549/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Алек Болдуин",
      },
    ],
    description:
      "Итан Хант сталкивается с международной сетью спецагентов Синдикатом, которые планируют разрушительные теракты ради нового мирового порядка.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 19,
    posters: 2,
  }, // миссия невыполнима: племя изгоев (5)
  {
    release: new Date("2011-12-21"),
    publication: new Date("2023-05-21"),
    format: "фильм",
    grade: "A",
    title: "Миссия невыполнима: Протокол Фантом",
    original: "Mission: Impossible - Ghost Protocol",
    kinopoisk: "https://www.kinopoisk.ru/film/472362/",
    director: [
      {
        name: "Брэд Бёрд",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Пола Пэттон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Саймон Пегг",
      },
    ],
    description:
      "Итан Хант обвинен во взрыве Кремля. Чтобы очистить своё имя, он должен предотвратить новую атаку.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 19,
    posters: 2,
  }, // миссия невыполнима: протокол фантом (4)
  {
    release: new Date("2006-05-05"),
    publication: new Date("2023-05-19"),
    format: "фильм",
    grade: "A+",
    title: "Миссия: невыполнима 3",
    original: "Mission: Impossible III",
    kinopoisk: "https://www.kinopoisk.ru/film/9552/",
    director: [
      {
        name: "Джей Джей Абрамс",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Филип Сеймур Хоффман",
      },
      {
        name: "Мишель Монахэн",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Джонатан Риз Майерс",
      },
      {
        name: "Мэгги Кью",
      },
    ],
    description:
      "Итан Хант готовится к отставке, но получает последнее задание — спасти бывшую ученицу из лап торговца оружием. Задание приводит к череде опасных миссий в трёх городах.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 26,
    posters: 2,
  }, // миссия: невыполнима 3
  {
    release: new Date("2024-02-02"),
    publication: new Date("2024-02-17"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Мистер и миссис Смит",
    original: "Mr. & Mrs. Smith",
    kinopoisk: "https://www.kinopoisk.ru/series/4363942/",
    director: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Франческа Слоун",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Майя Эрскин",
      },
    ],
    description:
      "Двум агентам необходимо выдавать себя за пару во время опасной миссии.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "приключения",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 89,
    posters: 2,
  }, // мистер и миссис смит 1
  {
    release: new Date("2021-04-23"),
    publication: new Date("2022-01-23"),
    format: "фильм",
    grade: "A",
    title: "Митчеллы против машин",
    original: "The Mitchells vs the Machines",
    kinopoisk: "https://www.kinopoisk.ru/film/1146303/",
    director: [
      {
        name: "Майкл Рианда",
      },
      {
        name: "Джефф Роу",
      },
    ],
    cast: [
      {
        name: "Эбби Джейкобсон",
      },
      {
        name: "Дэнни Макбрайд",
      },
      {
        name: "Майя Рудольф",
      },
      {
        name: "Эрик Андре",
      },
      {
        name: "Оливия Колман",
      },
    ],
    description:
      "Семья попадает в апокалипсис роботов и становится последней надеждой человечества.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // митчеллы против машин
  {
    release: new Date("2024-08-16"),
    publication: new Date("2025-08-03"),
    format: "фильм",
    grade: "B",
    title: "Младший брат",
    original: "Didi / Dìdi / 弟弟",
    kinopoisk: "https://www.kinopoisk.ru/film/5448457/",
    director: [
      {
        name: "Шон Ван",
      },
    ],
    cast: [
      {
        name: "Айзек Ван",
      },
      {
        name: "Джоан Чэнь",
      },
    ],
    description:
      "13-летний тайваньский подросток познаёт жизнь за месяц до школы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 48,
    posters: 2,
  }, // младший брат
  {
    release: new Date("2009-12-23"),
    publication: new Date("2021-08-28"),
    format: "фильм",
    grade: "B",
    title: "Мне бы в небо",
    original: "Up in the Air",
    kinopoisk: "https://www.kinopoisk.ru/film/464130/",
    director: [
      {
        name: "Джейсон Райтман",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Вера Фармига",
      },
      {
        name: "Анна Кендрик",
      },
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Мелани Лински",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Дэнни Макбрайд",
      },
      {
        name: "Зак Галифианакис",
      },
    ],
    description:
      "Райан живёт на чемоданах и не знает слов любви, пока не встречает прекрасную Алекс.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // мне бы в небо
  {
    release: new Date("2021-10-01"),
    publication: new Date("2021-10-05"),
    format: "фильм",
    grade: "D",
    title: "Множественные святые Ньюарка",
    original: "The Many Saints of Newark",
    kinopoisk: "https://www.kinopoisk.ru/film/1114968/",
    director: [
      {
        name: "Алан Тейлор",
      },
    ],
    cast: [
      {
        name: "Алессандро Нивола",
      },
      {
        name: "Майкл Гандольфини",
      },
      {
        name: "Лесли Одом мл.",
      },
      {
        name: "Вера Фармига",
      },
      {
        name: "Джон Бернтал",
      },
      {
        name: "Кори Столл",
      },
      {
        name: "Рэй Лиотта",
      },
      {
        name: "Микела Де Росси",
      },
      {
        name: "Билли Магнуссен",
      },
      {
        name: "Джон Магаро",
      },
    ],
    description: "Путь Тони Сопрано к вершинам мафии.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // множественные святые ньюарка
  {
    release: new Date("2024-12-05"),
    publication: new Date("2025-01-12"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Монстры-коммандос",
    original: "Creature Commandos",
    kinopoisk: "https://www.kinopoisk.ru/series/5253831/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Индира Варма",
      },
      {
        name: "Фрэнк Грилло",
      },
      {
        name: "Шон Ганн",
      },
      {
        name: "Алан Тьюдик",
      },
      {
        name: "Зои Чао",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Мария Бакалова",
      },
      {
        name: "Виола Дэвис",
      },
    ],
    description:
      "Правительство США формирует отряд монстров для секретных миссий.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "супергероика",
      },
    ],
    screenshots: 33,
    posters: 2,
  }, // монстры-коммандос 1
  {
    release: new Date("2022-11-04"),
    publication: new Date("2022-11-08"),
    format: "фильм",
    grade: "A",
    title: "Мост через озеро",
    original: "Causeway",
    kinopoisk: "https://www.kinopoisk.ru/film/1271993/",
    director: [
      {
        name: "Лайла Нойгебауэр",
      },
    ],
    cast: [
      {
        name: "Дженнифер Лоуренс",
      },
      {
        name: "Брайан Тайри Генри",
      },
    ],
    description:
      "Линси получила черепно-мозговую травму во время боевых действий в Афганистане и изо всех сил пытается приспособиться к жизни на родине.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 26,
    posters: 2,
  }, // мост через озеро
  {
    release: new Date("2012-05-04"),
    publication: new Date("2021-03-21"),
    format: "фильм",
    grade: "A+",
    title: "Мстители",
    original: "The Avengers",
    kinopoisk: "https://www.kinopoisk.ru/film/263531/",
    director: [
      {
        name: "Джосс Уидон",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Том Хиддлстон",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Коби Смолдерс",
      },
      {
        name: "Стеллан Скарсгард",
      },
    ],
    description:
      "Герои Земли должны объединиться, чтобы остановить Локи и его армию.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // мстители
  {
    release: new Date("2018-04-27"),
    publication: new Date("2025-02-28"),
    format: "фильм",
    grade: "A+",
    title: "Мстители: Война бесконечности",
    original: "Avengers: Infinity War",
    kinopoisk: "https://www.kinopoisk.ru/film/843649/",
    director: [
      {
        name: "Джо Руссо",
      },
      {
        name: "Энтони Руссо",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Том Холланд",
      },
      {
        name: "Чедвик Боузман",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Карен Гиллан",
      },
      {
        name: "Пол Беттани",
      },
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Бенедикт Вонг",
      },
      {
        name: "Пом Клементьефф",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Брэдли Купер",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Джош Бролин",
      },
    ],
    description:
      "Мстители противостоят Таносу, охотящемуся за Камнями Бесконечности — артефактами, способными менять реальность.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 89,
    posters: 1,
  }, // мстители: война бесконечности
  {
    release: new Date("2019-04-26"),
    publication: new Date("2025-03-01"),
    format: "фильм",
    grade: "A+",
    title: "Мстители: Финал",
    original: "Avengers: Endgame",
    kinopoisk: "https://www.kinopoisk.ru/film/843650/",
    director: [
      {
        name: "Джо Руссо",
      },
      {
        name: "Энтони Руссо",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Пол Радд",
      },
      {
        name: "Бри Ларсон",
      },
      {
        name: "Карен Гиллан",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Брэдли Купер",
      },
      {
        name: "Джош Бролин",
      },
    ],
    description: "Оставшиеся герои ищут способ победить Таноса.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 69,
    posters: 2,
  }, // мстители: финал
  {
    release: new Date("2015-05-01"),
    publication: new Date("2025-03-08"),
    format: "фильм",
    grade: "A",
    title: "Мстители: Эра Альтрона",
    original: "Avengers: Age of Ultron",
    kinopoisk: "https://www.kinopoisk.ru/film/679830/",
    director: [
      {
        name: "Джосс Уидон",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Аарон Тейлор-Джонсон",
      },
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Джеймс Спэйдер",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Коби Смолдерс",
      },
      {
        name: "Пол Беттани",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Энтони Маки",
      },
      {
        name: "Линда Карделлини",
      },
    ],
    description:
      "Мстители противостоят вышедшему из-под контроля искусственному интеллекту Тони Старка.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 48,
    posters: 1,
  }, // мстители: эра альтрона
  {
    release: new Date("2013-01-25"),
    publication: new Date("2022-03-11"),
    format: "фильм",
    grade: "C",
    title: "Муви 43",
    original: "Movie 43",
    kinopoisk: "https://www.kinopoisk.ru/film/432725/",
    director: [
      {
        name: "Стивен Брилл",
      },
      {
        name: "Питер Фаррелли",
      },
      {
        name: "Элизабет Бэнкс",
      },
      {
        name: "Стив Карр",
      },
      {
        name: "Расти Кандифф",
      },
      {
        name: "Джеймс Даффи",
      },
      {
        name: "Гриффин Данн",
      },
      {
        name: "Патрик Форсберг",
      },
      {
        name: "Уильям Грэм",
      },
      {
        name: "Джеймс Ганн",
      },
      {
        name: "Бретт Рэтнер",
      },
      {
        name: "Джонатан ван Тюллекен",
      },
      {
        name: "Боб Оденкёрк",
      },
    ],
    cast: [
      {
        name: "Хью Джекман",
      },
      {
        name: "Кейт Уинслет",
      },
      {
        name: "Наоми Уоттс",
      },
      {
        name: "Лив Шрайбер",
      },
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Анна Фэрис",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Эмма Стоун",
      },
      {
        name: "Киран Калкин",
      },
      {
        name: "Ричард Гир",
      },
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Джастин Лонг",
      },
      {
        name: "Кристен Белл",
      },
      {
        name: "Лесли Бибб",
      },
      {
        name: "Ума Турман",
      },
      {
        name: "Хлоя Грейс Морец",
      },
      {
        name: "Кристофер Минц-Плассе",
      },
      {
        name: "Джонни Ноксвил",
      },
      {
        name: "Шонн Уильям Скотт",
      },
      {
        name: "Джерард Батлер",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Стивен Мерчант",
      },
      {
        name: "Терренс Ховард",
      },
      {
        name: "Элизабет Бэнкс",
      },
      {
        name: "Джош Дюамель",
      },
    ],
    description:
      "Скандальная комедия-альманах с множеством голливудских звезд, где 13 режиссеров создали серию шокирующих новелл с черным юмором.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // муви 43
  {
    release: new Date("2021-01-22"),
    publication: new Date("2021-01-25"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Мультяшки Pixar",
    original: "Pixar Popcorn",
    kinopoisk: "https://www.kinopoisk.ru/series/4294193/",
    director: [
      {
        name: "Пит Доктер",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Сборник короткометражек с участием известных персонажей из мультфильмов Pixar.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "короткометражка",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // мультяшки pixar
  {
    release: new Date("2019-03-28"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "A+",
    title: "Мы",
    original: "Us",
    kinopoisk: "https://www.kinopoisk.ru/film/1122138/",
    director: [
      {
        name: "Джордан Пил",
      },
    ],
    cast: [
      {
        name: "Лупита Нионго",
      },
      {
        name: "Уинстон Дьюк",
      },
    ],
    description:
      "Семейная пара с дочерью-подростком и сыном приезжает на побережье. Ночью к ним наведывается четверо загадочных гостей.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // мы
  {
    release: new Date("2025-05-31"),
    publication: new Date("2025-06-21"),
    format: "фильм",
    grade: "C",
    title: "На вершине горы",
    original: "Mountainhead",
    kinopoisk: "https://www.kinopoisk.ru/film/7770979/",
    director: [
      {
        name: "Джесси Армстронг",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Рами Юссеф",
      },
      {
        name: "Кори Майкл Смит",
      },
      {
        name: "Джейсон Шварцман",
      },
    ],
    description:
      "Четыре друга встречаются во время мирового экономического кризиса.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // на вершине горы
  {
    release: new Date("1997-09-26"),
    publication: new Date("2023-01-27"),
    format: "фильм",
    grade: "B",
    title: "На грани",
    original: "The Edge",
    kinopoisk: "https://www.kinopoisk.ru/film/3775/",
    director: [
      {
        name: "Ли Тамахори",
      },
    ],
    cast: [
      {
        name: "Энтони Хопкинс",
      },
      {
        name: "Алек Болдуин",
      },
    ],
    description:
      "Трое мужчин борются за выживание в дикой местности Аляски, где их преследует опасный медведь-людоед.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // на грани
  {
    release: new Date("2008-09-26"),
    publication: new Date("2020-08-03"),
    format: "фильм",
    grade: "A+",
    title: "На крючке",
    original: "Eagle Eye",
    kinopoisk: "https://www.kinopoisk.ru/film/387477/",
    director: [
      {
        name: "Ди Джей Карузо",
      },
    ],
    cast: [
      {
        name: "Шайа ЛаБаф",
      },
      {
        name: "Мишель Монахэн",
      },
      {
        name: "Билли Боб Торнтон",
      },
      {
        name: "Розарио Доусон",
      },
      {
        name: "Кэмерон Бойс",
      },
      {
        name: "Майкл Чиклис",
      },
      {
        name: "Энтони Маки",
      },
    ],
    description:
      "Незнакомцы Джерри и Рэйчел становятся заложниками голоса из телефона.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "детектив",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // на крючке
  {
    release: new Date("2022-05-13"),
    publication: new Date("2022-05-24"),
    format: "фильм",
    grade: "A",
    title: "На счёт три",
    original: "On the Count of Three",
    kinopoisk: "https://www.kinopoisk.ru/film/1320812/",
    director: [
      {
        name: "Джеррод Кармайкл",
      },
    ],
    cast: [
      {
        name: "Джеррод Кармайкл",
      },
      {
        name: "Кристофер Эбботт",
      },
    ],
    description:
      "Вэл и Кевин — два лучших друга, желающих покончить с собой. Но им не хватает смелости сделать это самим, поэтому они выезжают за город и наставляют друг на друга пистолеты.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // на счёт три
  {
    release: new Date("2000-12-19"),
    publication: new Date("2021-02-25"),
    format: "фильм",
    grade: "B",
    title: "Найти Форрестера",
    original: "Finding Forrester",
    kinopoisk: "https://www.kinopoisk.ru/film/671/",
    director: [
      {
        name: "Гас Ван Сент",
      },
    ],
    cast: [
      {
        name: "Шон Коннери",
      },
      {
        name: "Роб Браун",
      },
      {
        name: "Ф. Мюррэй Абрахам",
      },
      {
        name: "Анна Пэкуин",
      },
    ],
    description:
      "Известный писатель Форрестер решает помочь 16-летнему Джамалу раскрыть писательский талант, взяв его под своё крыло и устроив в элитную школу.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
    posters: 2,
  }, // найти форрестера
  {
    release: new Date("2020-02-13"),
    publication: new Date("2020-02-28"),
    format: "сериал",
    season: "2",
    grade: "B",
    title: "Нарко: Мексика",
    original: "Narcos: Mexico / Narcos: México",
    kinopoisk: "https://www.kinopoisk.ru/series/1173983/",
    director: [
      {
        name: "Карло Бернард",
      },
      {
        name: "Крис Бренкето",
      },
      {
        name: "Даг Миро",
      },
    ],
    cast: [
      {
        name: "Скут Макнэри",
      },
      {
        name: "Диего Луна",
      },
      {
        name: "Тереса Руис",
      },
    ],
    description:
      "История о том, как зародился могущественный картель Гвадалахара.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // нарко: мексика 2
  {
    release: new Date("2025-03-14"),
    publication: new Date("2025-05-04"),
    format: "сериал",
    season: "1",
    grade: "D",
    title: "Нарковоры",
    original: "Dope Thief",
    kinopoisk: "https://www.kinopoisk.ru/series/5138508/",
    director: [
      {
        name: "Питер Крэйг",
      },
    ],
    cast: [
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Вагнер Моура",
      },
      {
        name: "Марин Айрленд",
      },
      {
        name: "Неста Купер",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Лиз Карибель",
      },
    ],
    description:
      "Двое аферистов грабят мелких наркодилеров, прикинувшись копами.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 42,
    posters: 1,
  }, // нарковоры 1
  {
    release: new Date("2024-11-15"),
    publication: new Date("2025-01-04"),
    format: "фильм",
    grade: "C",
    title: "Настоящая боль",
    original: "A Real Pain",
    kinopoisk: "https://www.kinopoisk.ru/film/5105866/",
    director: [
      {
        name: "Джесси Айзенберг",
      },
    ],
    cast: [
      {
        name: "Киран Калкин",
      },
      {
        name: "Джесси Айзенберг",
      },
    ],
    description:
      "Двоюродные братья едут в Польшу почтить память бабушки, где всплывают старые конфликты.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 21,
    posters: 3,
  }, // настоящая боль
  {
    release: new Date("2024-02-07"),
    publication: new Date("2024-09-01"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk: "https://www.kinopoisk.ru/series/4478603/",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
      { genre: "ситком" },
    ],
    screenshots: 26,
    posters: 1,
  }, // начальная школа эбботт 3
  {
    release: new Date("2022-09-21"),
    publication: new Date("2024-01-13"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk: "https://www.kinopoisk.ru/series/4478603/",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
      { genre: "ситком" },
    ],
    screenshots: 25,
    posters: 1,
  }, // начальная школа эбботт 2
  {
    release: new Date("2021-12-07"),
    publication: new Date("2024-01-08"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk: "https://www.kinopoisk.ru/series/4478603/",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
      { genre: "ситком" },
    ],
    screenshots: 16,
    posters: 1,
  }, // начальная школа эбботт 1
  {
    release: new Date("2022-09-23"),
    publication: new Date("2022-11-04"),
    format: "фильм",
    grade: "B",
    title: "Не беспокойся, дорогая",
    original: "Don't Worry, Darling",
    kinopoisk: "https://www.kinopoisk.ru/film/1379512/",
    director: [
      {
        name: "Оливия Уайлд",
      },
    ],
    cast: [
      {
        name: "Флоренс Пью",
      },
      {
        name: "Гарри Стайлс",
      },
      {
        name: "Крис Пайн",
      },
      {
        name: "Оливия Уайлд",
      },
      {
        name: "Джемма Чан",
      },
    ],
    description:
      "Домохозяйка Элис подозревает, что муж Джек и соседи скрывают опасные тайны, способные перевернуть её жизнь.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // не беспокойся, дорогая
  {
    release: new Date("2021-11-09"),
    publication: new Date("2022-09-23"),
    format: "фильм",
    grade: "A+",
    title: "Не время умирать",
    original: "No Time to Die",
    kinopoisk: "https://www.kinopoisk.ru/film/706019/",
    director: [
      {
        name: "Кэри Дзёдзи Фукунага",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Рами Малек",
      },
      {
        name: "Леа Сейду",
      },
      {
        name: "Рэйф Файнс",
      },
    ],
    description:
      "Агент 007 возвращается на службу ради своей последней миссии.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "боевик",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 24,
    posters: 2,
  }, // не время умирать
  {
    release: new Date("2016-08-26"),
    publication: new Date("2020-03-17"),
    format: "фильм",
    grade: "A+",
    title: "Не дыши",
    original: "Don't Breathe",
    kinopoisk: "https://www.kinopoisk.ru/film/910327/",
    director: [
      {
        name: "Феде Альварес",
      },
    ],
    cast: [
      {
        name: "Стивен Лэнг",
      },
      {
        name: "Джейн Леви",
      },
      {
        name: "Дилан Миннетт",
      },
      {
        name: "Дэниэл Дзоватто",
      },
    ],
    description:
      "Трое преступников проникают в дом ветерана, потерявшего зрение в бою, и хотят украсть его деньги.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // не дыши
  {
    release: new Date("2006-03-20"),
    publication: new Date("2025-01-19"),
    format: "фильм",
    grade: "B",
    title: "Не пойман – не вор",
    original: "Inside Man",
    kinopoisk: "https://www.kinopoisk.ru/film/103785/",
    director: [
      {
        name: "Спайк Ли",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Клайв Оуэн",
      },
      {
        name: "Джоди Фостер",
      },
      {
        name: "Чиветель Эджиофор",
      },
      {
        name: "Уиллем Дефо",
      },
    ],
    description:
      "Когда вооруженная банда в масках проникает в банк, запирает двери и захватывает заложников, детектив, которому поручено добиться их освобождения, вступает в переговоры.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // не пойман не вор
  {
    release: new Date("2021-12-24"),
    publication: new Date("2021-12-25"),
    format: "фильм",
    grade: "B",
    title: "Не смотрите наверх",
    original: "Don't Look Up",
    kinopoisk: "https://www.kinopoisk.ru/film/1338480/",
    director: [
      {
        name: "Адам Маккей",
      },
    ],
    cast: [
      {
        name: "Леонардо ДиКаприо",
      },
      {
        name: "Дженнифер Лоуренс",
      },
      {
        name: "Мэрил Стрип",
      },
      {
        name: "Джона Хилл",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Тимоти Шаламе",
      },
    ],
    description:
      "Два астронома отправляются в медиа-тур, чтобы предупредить человечество об угрожающей Земле комете.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // не смотрите наверх
  {
    release: new Date("2013-11-15"),
    publication: new Date("2020-02-01"),
    format: "фильм",
    grade: "A",
    title: "Небраска",
    original: "Nebraska",
    kinopoisk: "https://www.kinopoisk.ru/film/582391/",
    director: [
      {
        name: "Александр Пэйн",
      },
    ],
    cast: [
      {
        name: "Брюс Дерн",
      },
      {
        name: "Уилл Форте",
      },
      {
        name: "Джун Скуибб",
      },
      {
        name: "Боб Оденкёрк",
      },
    ],
    description:
      "Пожилой отец-алкоголик вместе с сыном едет из Монтаны в Небраску за выигрышем в миллион долларов.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // небраска
  {
    release: new Date("2013-12-25"),
    publication: new Date("2020-02-02"),
    format: "фильм",
    grade: "A+",
    title: "Невероятная жизнь Уолтера Митти",
    original: "The Secret Life of Walter Mitty",
    kinopoisk: "https://www.kinopoisk.ru/film/6034/",
    director: [
      {
        name: "Бен Стиллер",
      },
    ],
    cast: [
      {
        name: "Бен Стиллер",
      },
      {
        name: "Кристен Уиг",
      },
      {
        name: "Адам Скотт",
      },
      {
        name: "Шон Пенн",
      },
    ],
    description:
      "Редактор журнала Life Уолтер Митти покидает офис в поисках фотографа Шона О'Коннелла для последней бумажной обложки.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 19,
    posters: 2,
  }, // невероятная жизнь уолтера митти
  {
    release: new Date("2003-09-02"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "A",
    title: "Невыносимая жестокость",
    original: "Intolerable Cruelty",
    kinopoisk: "https://www.kinopoisk.ru/film/2886/",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Кэтрин Зета-Джонс",
      },
    ],
    description:
      "Майлз, известный адвокат по бракоразводным процессам, выигрывает дело для своего богатого, но неверного клиента. Но бывшая жена клиента жаждет денег и замышляет отомстить Майлзу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // невыносимая жестокость
  {
    release: new Date("2017-09-02"),
    publication: new Date("2025-05-25"),
    format: "фильм",
    grade: "C",
    title: "Недруги",
    original: "Hostiles",
    kinopoisk: "https://www.kinopoisk.ru/film/963016/",
    director: [
      {
        name: "Скотт Купер",
      },
    ],
    cast: [
      {
        name: "Кристиан Бэйл",
      },
      {
        name: "Розамунд Пайк",
      },
      {
        name: "Уэс Стьюди",
      },
      {
        name: "Рори Кокрейн",
      },
      {
        name: "Джесси Племонс",
      },
      {
        name: "Джонатан Мейджорс",
      },
      {
        name: "Бен Фостер",
      },
      {
        name: "К’Орианка Килчер",
      },
    ],
    description:
      "Вопреки ненависти к индейцам ветеран войны сопровождает их вождя на родину.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "вестерн",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // недруги
  {
    release: new Date("2021-12-22"),
    publication: new Date("2022-01-20"),
    format: "фильм",
    grade: "D",
    title: "Нежный бар",
    original: "The Tender Bar",
    kinopoisk: "https://www.kinopoisk.ru/film/786944/",
    director: [
      {
        name: "Джордж Клуни",
      },
    ],
    cast: [
      {
        name: "Бен Аффлек",
      },
      {
        name: "Тай Шеридан",
      },
      {
        name: "Лили Рэйб",
      },
      {
        name: "Кристофер Ллойд",
      },
      {
        name: "Бриана Миддлтон",
      },
    ],
    description:
      "Юноша, выросший с мамой, ищет замену отцу среди посетителей бара, где работает его дядя Чарли.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // нежный бар
  {
    release: new Date("2012-04-27"),
    publication: new Date("2021-03-27"),
    format: "фильм",
    grade: "C",
    title: "Немножко женаты",
    original: "The Five-Year Engagement",
    kinopoisk: "https://www.kinopoisk.ru/film/462508/",
    director: [
      {
        name: "Николас Столлер",
      },
    ],
    cast: [
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Эмили Блант",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Элисон Бри",
      },
    ],
    description:
      "Том делает предложение Вайолет через год, но неожиданные события мешают их свадьбе.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // немножко женаты
  {
    release: new Date("2019-12-25"),
    publication: new Date("2020-02-10"),
    format: "фильм",
    grade: "A",
    title: "Неогранённые алмазы",
    original: "Uncut Gems / Неогранённые драгоценности",
    kinopoisk: "https://www.kinopoisk.ru/film/1076152/",
    director: [
      {
        name: "Бенни Сэфди",
      },
      {
        name: "Джош Сэфди",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Джулия Фокс",
      },
      {
        name: "Идина Мензел",
      },
      {
        name: "Лакит Стэнфилд",
      },
      {
        name: "Кевин Гарнетт",
      },
    ],
    description:
      "Ювелир из Нью-Йорка рискует всем, чтобы спастись от кредиторов.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 28,
    posters: 1,
  }, // неогранённые алмазы
  {
    release: new Date("2025-02-06"),
    publication: new Date("2025-03-18"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Непобедимый",
    original: "Invincible",
    kinopoisk: "https://www.kinopoisk.ru/series/1171895/",
    director: [
      {
        name: "Роберт Киркман",
      },
      {
        name: "Кори Уокер",
      },
      {
        name: "Райан Оттли",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Сандра О",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Уолтон Гоггинс",
      },
    ],
    description:
      "17-летний Марк Грэйсон — сын самого могучего супергероя на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
    ],
    screenshots: 57,
    posters: 1,
  }, // непобедимый 3
  {
    release: new Date("2023-11-03"),
    publication: new Date("2024-04-16"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Непобедимый",
    original: "Invincible",
    kinopoisk: "https://www.kinopoisk.ru/series/1171895/",
    director: [
      {
        name: "Роберт Киркман",
      },
      {
        name: "Кори Уокер",
      },
      {
        name: "Райан Оттли",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Сандра О",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Уолтон Гоггинс",
      },
    ],
    description:
      "17-летний Марк Грэйсон — сын самого могучего супергероя на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
    ],
    screenshots: 29,
    posters: 2,
  }, // непобедимый 2
  {
    release: new Date("2021-03-26"),
    publication: new Date("2021-05-09"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Непобедимый",
    original: "Invincible",
    kinopoisk: "https://www.kinopoisk.ru/series/1171895/",
    director: [
      {
        name: "Роберт Киркман",
      },
      {
        name: "Кори Уокер",
      },
      {
        name: "Райан Оттли",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Сандра О",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Уолтон Гоггинс",
      },
    ],
    description:
      "17-летний Марк Грэйсон — сын самого могучего супергероя на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
    ],
    screenshots: 21,
    posters: 1,
  }, // непобедимый 1
  {
    release: new Date("2014-11-26"),
    publication: new Date("2022-04-11"),
    format: "фильм",
    grade: "B",
    title: "Несносные боссы 2",
    original: "Horrible Bosses 2",
    kinopoisk: "https://www.kinopoisk.ru/film/662337/",
    director: [
      {
        name: "Шон Андерс",
      },
    ],
    cast: [
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Чарли Дэй",
      },
      {
        name: "Крис Пайн",
      },
      {
        name: "Дженнифер Энистон",
      },
      {
        name: "Кристоф Вальц",
      },
      {
        name: "Джейми Фокс",
      },
    ],
    description:
      "Трое друзей открывают автомойку, но их обманывает инвестор. Чтобы вернуть деньги, они планируют похитить его сына ради выкупа.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // несносные боссы 2
  {
    release: new Date("2011-07-08"),
    publication: new Date("2022-04-09"),
    format: "фильм",
    grade: "A",
    title: "Несносные боссы",
    original: "Horrible Bosses",
    kinopoisk: "https://www.kinopoisk.ru/film/471628/",
    director: [
      {
        name: "Сет Гордон",
      },
    ],
    cast: [
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Чарли Дэй",
      },
      {
        name: "Кевин Спейси",
      },
      {
        name: "Дженнифер Энистон",
      },
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Джейми Фокс",
      },
    ],
    description:
      "Трое друзей решают убить своих боссов, которые мешают им жить.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 22,
    posters: 2,
  }, // несносные боссы
  {
    release: new Date("2022-07-22"),
    publication: new Date("2023-05-26"),
    format: "фильм",
    grade: "A",
    title: "Нет",
    original: "Nope",
    kinopoisk: "https://www.kinopoisk.ru/film/1447137/",
    director: [
      {
        name: "Джордан Пил",
      },
    ],
    cast: [
      {
        name: "Дэниэл Калуя",
      },
      {
        name: "Кеке Палмер",
      },
      {
        name: "Брэндон Переа",
      },
      {
        name: "Стивен Ян",
      },
    ],
    description:
      "Жители уединённого ущелья в глубине Калифорнии становятся свидетелями сверхъестественных и пугающих событий.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 34,
    posters: 1,
  }, // нет
  {
    release: new Date("2023-09-01"),
    publication: new Date("2023-10-17"),
    format: "фильм",
    grade: "B",
    title: "Неудачницы",
    original: "Bottoms",
    kinopoisk: "https://www.kinopoisk.ru/film/4994465/",
    director: [
      {
        name: "Эмма Селигман",
      },
    ],
    cast: [
      {
        name: "Рэйчел Сеннотт",
      },
      {
        name: "Айо Эдебири",
      },
    ],
    description:
      "Две непопулярные лесбиянки-старшеклассницы организуют в школе бойцовский клуб, чтобы успеть заняться сексом до выпускного.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // неудачницы
  {
    release: new Date("2024-12-06"),
    publication: new Date("2025-02-13"),
    format: "фильм",
    grade: "A",
    title: "Неудержимый",
    original: "Unstoppable / Неукротимый",
    kinopoisk: "https://www.kinopoisk.ru/film/5455286/",
    director: [
      {
        name: "Уильям Голденберг",
      },
    ],
    cast: [
      {
        name: "Джаррель Джером",
      },
      {
        name: "Дженнифер Лопес",
      },
      {
        name: "Бобби Каннавале",
      },
      {
        name: "Майкл Пенья",
      },
      {
        name: "Дон Чидл",
      },
    ],
    description: "История борца Энтони Роблса, который родился с одной ногой.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 42,
    posters: 2,
  }, // неудержимый
  {
    release: new Date("2018-10-12"),
    publication: new Date("2022-03-16"),
    format: "фильм",
    grade: "A",
    title: "Ничего хорошего в отеле «Эль Рояль»",
    original: "Bad Times at the El Royale",
    kinopoisk: "https://www.kinopoisk.ru/film/1047143/",
    director: [
      {
        name: "Дрю Годдард",
      },
    ],
    cast: [
      {
        name: "Джефф Бриджес",
      },
      {
        name: "Синтия Эриво",
      },
      {
        name: "Дакота Джонсон",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Кейли Спейни",
      },
      {
        name: "Льюис Пуллман",
      },
      {
        name: "Крис Хемсворт",
      },
    ],
    description:
      "В безлюдный отель «Эль Руаяль» заселяются четверо незнакомцев — у некоторых из них нечистая совесть.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // ничего хорошего в отеле «эль рояль»
  {
    release: new Date("2023-05-04"),
    publication: new Date("2023-08-24"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Ничегошеньки",
    original: "Bupkis",
    kinopoisk: "https://www.kinopoisk.ru/series/4967577/",
    director: [
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Джуда Миллер",
      },
      {
        name: "Дэйв Сирус",
      },
    ],
    cast: [
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Джо Пеши",
      },
      {
        name: "Чейз Суи Уондерс",
      },
      {
        name: "Бобби Каннавале",
      },
    ],
    description:
      "История жизни Пита Дэвидсона, сочетающая повествование с некоторыми абсурдными элементами мировоззрения героя.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // ничегошеньки
  {
    release: new Date("2014-05-02"),
    publication: new Date("2022-01-22"),
    format: "фильм",
    grade: "A",
    title: "Новый Человек-паук: Высокое напряжение",
    original: "The Amazing Spider-Man 2",
    kinopoisk: "https://www.kinopoisk.ru/film/602409/",
    director: [
      {
        name: "Марк Уэбб",
      },
    ],
    cast: [
      {
        name: "Эндрю Гарфилд",
      },
      {
        name: "Эмма Стоун",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Дэйн ДеХаан",
      },
      {
        name: "Салли Филд",
      },
    ],
    description: "Человек-паук защищает Нью-Йорк от компании Oscorp.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // новый человек-паук: высокое напряжение
  {
    release: new Date("2012-07-03"),
    publication: new Date("2022-01-21"),
    format: "фильм",
    grade: "A",
    title: "Новый Человек-паук",
    original: "The Amazing Spider-Man",
    kinopoisk: "https://www.kinopoisk.ru/film/278217/",
    director: [
      {
        name: "Марк Уэбб",
      },
    ],
    cast: [
      {
        name: "Эндрю Гарфилд",
      },
      {
        name: "Эмма Стоун",
      },
      {
        name: "Рис Иванс",
      },
      {
        name: "Дэнис Лири",
      },
      {
        name: "Мартин Шин",
      },
      {
        name: "Салли Филд",
      },
    ],
    description:
      "После укуса паука Питер Паркер обретает суперспособности и противостоит злодею-рептилии.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // новый человек-паук
  {
    release: new Date("2007-04-04"),
    publication: new Date("2023-12-24"),
    format: "фильм",
    grade: "D",
    title: "Ну что, приехали: Ремонт",
    original: "Are We Done Yet?",
    kinopoisk: "https://www.kinopoisk.ru/film/102247/",
    director: [
      {
        name: "Стив Карр",
      },
    ],
    cast: [
      {
        name: "Айс Кьюб",
      },
      {
        name: "Ниа Лонг",
      },
      {
        name: "Джон К. Макгинли",
      },
      {
        name: "Алейша Аллен",
      },
      {
        name: "Филип Болден",
      },
    ],
    description:
      "Супруги Ник и Сюзанна с детьми переезжают в пригород за лучшей жизнью, но их планы на дом мечты рушит эксцентричный подрядчик.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // ну что, приехали: ремонт
  {
    release: new Date("2000-05-13"),
    publication: new Date("2024-08-14"),
    format: "фильм",
    grade: "B",
    title: "О, где же ты, брат?",
    original: "O Brother, Where Art Thou?",
    kinopoisk: "https://www.kinopoisk.ru/film/546/",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Джон Туртурро",
      },
      {
        name: "Тим Блейк Нельсон",
      },
    ],
    description:
      "Трио каторжников пускается в бега, чтобы сорвать крупный куш.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // о где же ты брат
  {
    release: new Date("2000-07-24"),
    publication: new Date("2025-08-13"),
    format: "фильм",
    grade: "A",
    title: "О птичках",
    original: "For the Birds",
    kinopoisk: "https://www.kinopoisk.ru/film/672/",
    director: [
      {
        name: "Ральф Эгглстон",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description: "Пташки на проводе встречают большую птицу",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "короткометражка",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // о птичках
  {
    release: new Date("2009-09-18"),
    publication: new Date("2023-07-14"),
    format: "фильм",
    grade: "B",
    title: "Облачно, возможны осадки в виде фрикаделек",
    original: "Cloudy with a Chance of Meatballs",
    kinopoisk: "https://www.kinopoisk.ru/film/276363/",
    director: [
      {
        name: "Фил Лорд",
      },
      {
        name: "Кристофер Миллер",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Анна Фэрис",
      },
    ],
    description:
      "Ученый-неудачник изобретает машину, которая может заставлять еду падать с неба.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // облачно возможны осадки в виде фрикаделек
  {
    release: new Date("2020-05-08"),
    continuation: new Date("2021-03-26"),
    publication: new Date("2021-05-28"),
    format: "сериал",
    season: "1-2",
    grade: "B",
    title: "Обратная сторона Земли",
    original: "Solar Opposites",
    kinopoisk: "https://www.kinopoisk.ru/series/1190304/",
    director: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Майк МакМэхан",
      },
    ],
    cast: [
      {
        name: "Томас Миддлдитч",
      },
      {
        name: "Шон Джамброун",
      },
      {
        name: "Мэри Мак",
      },
    ],
    description: "Семья пришельцев вынуждена поселиться на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // обратная сторона земли 1-2
  {
    release: new Date("2001-12-07"),
    publication: new Date("2020-01-07"),
    format: "фильм",
    grade: "love",
    title: "Одиннадцать друзей Оушена",
    original: "Ocean's Eleven",
    kinopoisk: "https://www.kinopoisk.ru/film/770/",
    director: [
      {
        name: "Стивен Содерберг",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Джулия Робертс",
      },
      {
        name: "Энди Гарсиа",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Карл Райнер",
      },
      {
        name: "Эллиотт Гулд",
      },
      {
        name: "Скотт Каан",
      },
      {
        name: "Кейси Аффлек",
      },
      {
        name: "Берни Мак",
      },
      {
        name: "Эдди Джемисон",
      },
      {
        name: "Цинь Шаобо",
      },
    ],
    description:
      "После выхода из тюрьмы, опытный преступник Дэнни Оушен решается на новое смелое ограбление, собирая команду из своих друзей.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // одиннадцать друзей оушена
  {
    release: new Date("2024-09-01"),
    publication: new Date("2024-10-01"),
    format: "фильм",
    grade: "C",
    title: "Одинокие волки",
    original: "Wolfs",
    kinopoisk: "https://www.kinopoisk.ru/film/4825582/",
    director: [
      {
        name: "Джон Уоттс",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Остин Абрамс",
      },
    ],
    description:
      "Пути двух чистильщиков пересекаются, когда обоих вызывают решить проблему нью-йоркского прокурора.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // одинокие волки
  {
    release: new Date("2011-07-29"),
    publication: new Date("2020-08-01"),
    format: "фильм",
    grade: "A+",
    title: "Однажды в Ирландии",
    original: "The Guard",
    kinopoisk: "https://www.kinopoisk.ru/film/484474/",
    director: [
      {
        name: "Джон Майкл Макдона",
      },
    ],
    cast: [
      {
        name: "Брендан Глисон",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Марк Стронг",
      },
    ],
    description:
      "Грубый ирландский полицейский объединяется с агентом ФБР для борьбы с контрабандистами наркотиков.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // однажды в ирландии
  {
    release: new Date("2019-07-26"),
    publication: new Date("2019-11-30"),
    format: "фильм",
    grade: "A+",
    title: "Однажды в… Голливуде",
    original: "Once Upon a Time in... Hollywood",
    kinopoisk: "https://www.kinopoisk.ru/film/1047883/",
    director: [
      {
        name: "Квентин Тарантино",
      },
    ],
    cast: [
      {
        name: "Леонардо ДиКаприо",
      },
      {
        name: "Брэд Питт",
      },
      {
        name: "Марго Робби",
      },
    ],
    description:
      "Актёр и его дублёр стремятся к успеху в Голливуде конца 1960-х в Лос-Анджелесе.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // однажды в голливуде
  {
    release: new Date("2022-01-21"),
    publication: new Date("2022-05-02"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Озарк",
    original: "Ozark",
    kinopoisk: "https://www.kinopoisk.ru/series/1045553/",
    director: [
      {
        name: "Билл Дюбюк",
      },
      {
        name: "Марк Уильямс",
      },
    ],
    cast: [
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Лора Линни",
      },
      {
        name: "София Хьюблиц",
      },
      {
        name: "Скайлар Гертнер",
      },
      {
        name: "Джулия Гарнер",
      },
      {
        name: "Феликс Солис",
      },
    ],
    description:
      "Финансовый советник вынужден работать на мексиканский картель.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // озарк 4
  {
    release: new Date("2020-03-27"),
    publication: new Date("2020-04-02"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Озарк",
    original: "Ozark",
    kinopoisk: "https://www.kinopoisk.ru/series/1045553/",
    director: [
      {
        name: "Билл Дюбюк",
      },
      {
        name: "Марк Уильямс",
      },
    ],
    cast: [
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Лора Линни",
      },
      {
        name: "София Хьюблиц",
      },
      {
        name: "Скайлар Гертнер",
      },
      {
        name: "Джулия Гарнер",
      },
      {
        name: "Феликс Солис",
      },
      {
        name: "Джанет Мактир",
      },
    ],
    description:
      "Финансовый советник вынужден работать на мексиканский картель.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 26,
    posters: 1,
  }, // озарк 3
  {
    release: new Date("2015-12-30"),
    publication: new Date("2025-05-17"),
    format: "фильм",
    grade: "A+",
    title: "Омерзительная восьмерка",
    original: "The Hateful Eight",
    kinopoisk: "https://www.kinopoisk.ru/film/819101/",
    director: [
      {
        name: "Квентин Тарантино",
      },
    ],
    cast: [
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Курт Рассел",
      },
      {
        name: "Дженнифер Джейсон Ли",
      },
      {
        name: "Уолтон Гоггинс",
      },
      {
        name: "Тим Рот",
      },
      {
        name: "Майкл Мэдсен",
      },
      {
        name: "Демиан Бичир",
      },
      {
        name: "Брюс Дерн",
      },
      {
        name: "Ченнинг Татум",
      },
    ],
    description:
      "В зимнюю стужу Вайоминга охотник с пленницей укрываются в хижине с подозрительными обитателями.",
    genres: [
      {
        genre: "вестерн",
      },
    ],
    screenshots: 77,
    posters: 2,
  }, // омерзительная восьмерка
  {
    release: new Date("2023-07-14"),
    publication: new Date("2023-07-28"),
    format: "фильм",
    grade: "C",
    title: "Они клонировали Тайрона",
    original: "They Cloned Tyrone",
    kinopoisk: "https://www.kinopoisk.ru/film/1405266/",
    director: [
      {
        name: "Джуэл Тейлор",
      },
    ],
    cast: [
      {
        name: "Джон Бойега",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Тейона Паррис",
      },
    ],
    description:
      "Череда жутких событий выводит необычную троицу на след правительственного заговора.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // они клонировали тайрона
  {
    release: new Date("2023-07-21"),
    publication: new Date("2023-11-18"),
    format: "фильм",
    grade: "B",
    title: "Оппенгеймер",
    original: "Oppenheimer",
    kinopoisk: "https://www.kinopoisk.ru/film/4664634/",
    director: [
      {
        name: "Кристофер Нолан",
      },
    ],
    cast: [
      {
        name: "Киллиан Мерфи",
      },
      {
        name: "Эмили Блант",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Флоренс Пью",
      },
    ],
    description:
      "История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // оппенгеймер
  {
    release: new Date("2025-03-14"),
    publication: new Date("2025-06-01"),
    format: "фильм",
    grade: "C",
    title: "Опус",
    original: "Opus",
    kinopoisk: "https://www.kinopoisk.ru/film/6718282/",
    director: [
      {
        name: "Марк Энтони Грин",
      },
    ],
    cast: [
      {
        name: "Айо Эдебири",
      },
      {
        name: "Джон Малкович",
      },
      {
        name: "Джульетт Льюис",
      },
      {
        name: "Мюррэй Бартлетт",
      },
      {
        name: "Эмбер Мидфандер",
      },
    ],
    description:
      "Журналистка приезжает в дом звёздного музыканта ради интервью и попадает в ловушку.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 24,
    posters: 2,
  }, // опус
  {
    release: new Date("2007-03-23"),
    publication: new Date("2021-08-18"),
    format: "фильм",
    grade: "C",
    title: "Опустевший город",
    original: "Reign Over Me",
    kinopoisk: "https://www.kinopoisk.ru/film/251735/",
    director: [
      {
        name: "Майк Байндер",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Джада Пинкетт Смит",
      },
      {
        name: "Лив Тайлер",
      },
      {
        name: "Саффрон Берроуз",
      },
    ],
    description:
      "Мужчина, потерявший семью при теракте 11 сентября, находит утешение в дружбе со старым однокурсником.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // опустевший город
  {
    release: new Date("2024-02-02"),
    publication: new Date("2024-02-06"),
    format: "фильм",
    grade: "A",
    title: "Орион и Тьма",
    original: "Orion and the Dark",
    kinopoisk: "https://www.kinopoisk.ru/film/5326241/",
    director: [
      {
        name: "Шон Чэрмэтц",
      },
    ],
    cast: [
      {
        name: "Джейкоб Тремблей",
      },
      {
        name: "Пол Уолтер Хаузер",
      },
    ],
    description:
      "Мальчик Орион панически боится высоты, домашних животных, но больше всего — темноты.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // орион и тьма
  {
    release: new Date("2023-11-10"),
    publication: new Date("2023-12-17"),
    format: "фильм",
    grade: "B",
    title: "Оставленные",
    original: "The Holdovers",
    kinopoisk: "https://www.kinopoisk.ru/film/4499386/",
    director: [
      {
        name: "Александр Пэйн",
      },
    ],
    cast: [
      {
        name: "Пол Джаматти",
      },
      {
        name: "Доминик Сесса",
      },
      {
        name: "Давайн Джой Рэндольф",
      },
    ],
    description:
      "Ученики престижной закрытой школы для мальчиков разъезжаются на каникулы. Несколько учеников остаются, и за ними присматривают учитель истории Ханэм и повариха Мэри.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // оставленные
  {
    release: new Date("2023-11-22"),
    publication: new Date("2023-12-13"),
    format: "фильм",
    grade: "B",
    title: "Оставь мир позади",
    original: "Leave the World Behind",
    kinopoisk: "https://www.kinopoisk.ru/film/4511543/",
    director: [
      {
        name: "Сэм Эсмейл",
      },
    ],
    cast: [
      {
        name: "Джулия Робертс",
      },
      {
        name: "Итан Хоук",
      },
      {
        name: "Махершала Али",
      },
      {
        name: "Майхала Херролд",
      },
    ],
    description:
      "Две семьи оказываются заперты в загородном доме, пока мир вокруг рушится.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 40,
    posters: 1,
  }, // оставь мир позади
  {
    release: new Date("2018-04-06"),
    publication: new Date("2020-02-28"),
    format: "фильм",
    grade: "A+",
    title: "Остров собак",
    original: "Isle of Dogs",
    kinopoisk: "https://www.kinopoisk.ru/film/939785/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Кою Ранкин",
      },
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Эдвард Нортон",
      },
      {
        name: "Боб Балабан",
      },
      {
        name: "Джефф Голдблюм",
      },
      {
        name: "Билл Мюррей",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Грета Гервиг",
      },
    ],
    description:
      "В Японии из-за опасного «собачьего вируса» всех псов отправляют на карантинный остров.",
    genres: [
      {
        genre: "анимация",
      },
    ],
    screenshots: 23,
    posters: 2,
  }, // остров собак
  {
    release: new Date("2007-09-03"),
    publication: new Date("2025-07-20"),
    format: "фильм",
    grade: "B",
    title: "Отель «Шевалье»",
    original: "Hotel Chevalier",
    kinopoisk: "https://www.kinopoisk.ru/film/394003/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Натали Портман",
      },
    ],
    description:
      "Пролог душераздирающей истории любви рассказанной в фильме «Поезд на Дарджилинг. Отчаянные путешественники».",
    genres: [
      {
        genre: "короткометражка",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // отель «шевалье»
  {
    release: new Date("2019-09-13"),
    continuation: new Date("2022-04-29"),
    publication: new Date("2022-07-05"),
    format: "сериал",
    season: "1-2",
    grade: "B",
    title: "Отмена",
    original: "Undone",
    kinopoisk: "https://www.kinopoisk.ru/series/1134447/",
    director: [
      {
        name: "Рафаэль Боб-Ваксберг",
      },
      {
        name: "Кейт Парди",
      },
    ],
    cast: [
      {
        name: "Роза Салазар",
      },
      {
        name: "Анжелика Кебрал",
      },
      {
        name: "Констанс Мари",
      },
      {
        name: "Боб Оденкёрк",
      },
    ],
    description:
      "После автокатастрофы девушка Альма обретает способность перемещаться во времени и пространстве и решает спасти своего погибшего отца.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // отмена 1-2
  {
    release: new Date("2022-09-16"),
    publication: new Date("2022-10-08"),
    format: "фильм",
    grade: "C",
    title: "Отомсти за меня",
    original: "Do Revenge",
    kinopoisk: "https://www.kinopoisk.ru/film/4323986/",
    director: [
      {
        name: "Дженн Робинсон",
      },
    ],
    cast: [
      {
        name: "Камила Мендес",
      },
      {
        name: "Майя Хоук",
      },
      {
        name: "Остин Абрамс",
      },
      {
        name: "Риш Шах",
      },
      {
        name: "Алиша Боэ",
      },
      {
        name: "Джонатан Дэвисс",
      },
    ],
    description:
      "Дреа и Элеонор договариваются разобраться с обидчиками друг друга.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // отомсти за меня
  {
    release: new Date("2021-08-06"),
    publication: new Date("2025-03-21"),
    format: "фильм",
    grade: "A+",
    title: "Отряд самоубийц: Миссия навылет",
    original: "The Suicide Squad",
    kinopoisk: "https://www.kinopoisk.ru/film/1008477/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Идрис Эльба",
      },
      {
        name: "Марго Робби",
      },
      {
        name: "Джон Сина",
      },
      {
        name: "Юэль Киннаман",
      },
      {
        name: "Даниэла Мелшиор",
      },
      {
        name: "Давид Дастмалчян",
      },
      {
        name: "Питер Капальди",
      },
      {
        name: "Виола Дэвис",
      },
      {
        name: "Сильвестр Сталлоне",
      },
    ],
    description:
      "«Отряд самоубийц» получает задание уничтожить нацистскую тюрьму-лабораторию Йотунхайм.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "dc",
      },
    ],
    screenshots: 57,
    posters: 2,
  }, // отряд самоубийц: миссия навылет
  {
    release: new Date("2016-06-24"),
    publication: new Date("2021-02-06"),
    format: "фильм",
    grade: "B",
    title: "Охота на дикарей",
    original: "Hunt for the Wilderpeople",
    kinopoisk: "https://www.kinopoisk.ru/film/913703/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Сэм Нил",
      },
      {
        name: "Джулиан Деннисон",
      },
    ],
    description:
      "Подросток Рикки сбегает в лес от социальных служб после смерти приемной матери, за ним следует опекун Гек, и начинается их общенациональная погоня.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // охота на дикарей
  {
    release: new Date("2014-11-14"),
    publication: new Date("2022-03-26"),
    format: "фильм",
    grade: "A",
    title: "Охотник на лис",
    original: "Foxcatcher",
    kinopoisk: "https://www.kinopoisk.ru/film/638053/",
    director: [
      {
        name: "Беннетт Миллер",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Марк Руффало",
      },
    ],
    description:
      "Молодой борец попадает под влияние психически нестабильного миллионера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 50,
    posters: 2,
  }, // охотник на лис
  {
    release: new Date("2024-09-08"),
    publication: new Date("2025-05-31"),
    format: "фильм",
    grade: "D",
    title: "Оценка",
    original: "The Assessment",
    kinopoisk: "https://www.kinopoisk.ru/film/6042919/",
    director: [
      {
        name: "Флёр Форчун",
      },
    ],
    cast: [
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Химеш Патель",
      },
      {
        name: "Алисия Викандер",
      },
    ],
    description: "В будущем пара проходит проверку на право завести ребёнка.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 63,
    posters: 1,
  }, // оценка
  {
    release: new Date("2022-05-27"),
    publication: new Date("2022-07-03"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Очень странные дела",
    original: "Stranger Things",
    kinopoisk: "https://www.kinopoisk.ru/series/915196/",
    director: [
      {
        name: "Мэтт Даффер",
      },
      {
        name: "Росс Даффер",
      },
    ],
    cast: [
      {
        name: "Милли Бобби Браун",
      },
      {
        name: "Вайнона Райдер",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Финн Вулфхард",
      },
      {
        name: "Гейтен Матараццо",
      },
      {
        name: "Калеб Маклафлин",
      },
      {
        name: "Наталия Дайер",
      },
      {
        name: "Чарли Хитон",
      },
      {
        name: "Джо Кири",
      },
      {
        name: "Ноа Шнапп",
      },
      {
        name: "Сэди Синк",
      },
      {
        name: "Майя Хоук",
      },
      {
        name: "Джейми Кэмпбелл Бауэр",
      },
      {
        name: "Джозеф Куинн",
      },
    ],
    description:
      "В маленьком городке пропадает мальчик, и жители подозревают связь с таинственными сверхъестественными явлениями.",
    genres: [
      {
        genre: "ужасы",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 96,
    posters: 2,
  }, // очень странные дела 4
  {
    release: new Date("2024-04-12"),
    publication: new Date("2025-05-09"),
    format: "фильм",
    grade: "A",
    title: "Падение империи",
    original: "Civil War",
    kinopoisk: "https://www.kinopoisk.ru/film/4968810/",
    director: [
      {
        name: "Алекс Гарленд",
      },
    ],
    cast: [
      {
        name: "Кирстен Данст",
      },
      {
        name: "Вагнер Моура",
      },
      {
        name: "Кейли Спейни",
      },
      {
        name: "Стивен Маккинли Хендерсон",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Джесси Племонс",
      },
    ],
    description:
      "Журналисты пробиваются в Белый дом в разгар гражданской войны.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "драма",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 24,
    posters: 2,
  }, // падение империи
  {
    release: new Date("2016-11-18"),
    publication: new Date("2020-03-26"),
    format: "фильм",
    grade: "A",
    title: "Пазманский дьявол",
    original: "Bleed for This",
    kinopoisk: "https://www.kinopoisk.ru/film/502723/",
    director: [
      {
        name: "Бен Янгер",
      },
    ],
    cast: [
      {
        name: "Майлз Теллер",
      },
      {
        name: "Аарон Экхарт",
      },
      {
        name: "Киран Хайндс",
      },
      {
        name: "Кэти Сагал",
      },
    ],
    description:
      "История Винни Пациенца — чемпиона мира по боксу, который после серьёзной автокатастрофы с переломом шеи и угрозой паралича сумел вернуться в спорт.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // пазманский дьявол
  {
    release: new Date("2013-09-26"),
    continuation: new Date("2015-01-13"),
    publication: new Date("2020-04-30"),
    format: "сериал",
    season: "6-7",
    grade: "love",
    title: "Парки и зоны отдыха",
    original: "Parks and Recreation",
    kinopoisk: "https://www.kinopoisk.ru/series/455368/",
    director: [
      {
        name: "Грег Дэниелс",
      },
      {
        name: "Майкл Шур",
      },
    ],
    cast: [
      {
        name: "Эми Полер",
      },
      {
        name: "Обри Плаза",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Азиз Ансари",
      },
      {
        name: "Ретта",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Адам Скотт",
      },
    ],
    description:
      "Государственные чиновники из города Индиана реализуют различные проекты, чтобы сделать свой город лучше.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ситком",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 22,
    posters: 3,
  }, // парки и зоны отдыха 6-7
  {
    release: new Date("2016-08-19"),
    publication: new Date("2022-03-30"),
    format: "фильм",
    grade: "A",
    title: "Парни со стволами",
    original: "War Dogs",
    kinopoisk: "https://www.kinopoisk.ru/film/602749/",
    director: [
      {
        name: "Тодд Филлипс",
      },
    ],
    cast: [
      {
        name: "Майлз Теллер",
      },
      {
        name: "Джона Хилл",
      },
      {
        name: "Ана де Армас",
      },
      {
        name: "Брэдли Купер",
      },
    ],
    description:
      "История о друзьях из Майами, которым удалось получить контракт на поставку оружия на сумму в 300 миллионов долларов от Пентагона.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 47,
    posters: 2,
  }, // парни со стволами
  {
    release: new Date("2001-06-08"),
    publication: new Date("2023-09-30"),
    format: "фильм",
    grade: "D",
    title: "Пароль «Рыба-меч»",
    original: "Swordfish",
    kinopoisk: "https://www.kinopoisk.ru/film/849/",
    director: [
      {
        name: "Доминик Сена",
      },
    ],
    cast: [
      {
        name: "Джон Траволта",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Дон Чидл",
      },
    ],
    description:
      "Опасный шпион Гэбриэл Шир, бывший агент ЦРУ, планирует украсть 9 миллиардов из секретных фондов правительства. Ему нужен хакер для взлома систем безопасности.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // пароль «рыба-меч»
  {
    release: new Date("2024-06-13"),
    publication: new Date("2024-08-02"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Пацаны",
    original: "The Boys",
    kinopoisk: "https://www.kinopoisk.ru/series/460586/",
    director: [
      {
        name: "Эрик Крипке",
      },
    ],
    cast: [
      {
        name: "Карл Урбан",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Энтони Старр",
      },
      {
        name: "Эрин Мориарти",
      },
      {
        name: "Лас Алонсо",
      },
      {
        name: "Томер Капон",
      },
      {
        name: "Карен Фукухара",
      },
      {
        name: "Чейс Кроуфорд",
      },
      {
        name: "Джесси Ашер",
      },
    ],
    description:
      "В мире, где супергерои — популярные звёзды, за идеальным фасадом скрывается мрачный мир наркотиков и разврата. Противостоит им отряд «Пацаны».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      { genre: "супергероика" },
    ],
    screenshots: 25,
    posters: 1,
  }, // пацаны 4
  {
    release: new Date("2022-06-03"),
    publication: new Date("2022-07-09"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Пацаны",
    original: "The Boys",
    kinopoisk: "https://www.kinopoisk.ru/series/460586/",
    director: [
      {
        name: "Эрик Крипке",
      },
    ],
    cast: [
      {
        name: "Карл Урбан",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Энтони Старр",
      },
      {
        name: "Эрин Мориарти",
      },
      {
        name: "Лас Алонсо",
      },
      {
        name: "Томер Капон",
      },
      {
        name: "Карен Фукухара",
      },
      {
        name: "Чейс Кроуфорд",
      },
      {
        name: "Джесси Ашер",
      },
    ],
    description:
      "В мире, где супергерои — популярные звёзды, за идеальным фасадом скрывается мрачный мир наркотиков и разврата. Противостоит им отряд «Пацаны».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      { genre: "супергероика" },
    ],
    screenshots: 22,
    posters: 1,
  }, // пацаны 3
  {
    release: new Date("2020-09-04"),
    publication: new Date("2020-10-10"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Пацаны",
    original: "The Boys",
    kinopoisk: "https://www.kinopoisk.ru/series/460586/",
    director: [
      {
        name: "Эрик Крипке",
      },
    ],
    cast: [
      {
        name: "Карл Урбан",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Энтони Старр",
      },
      {
        name: "Эрин Мориарти",
      },
      {
        name: "Лас Алонсо",
      },
      {
        name: "Томер Капон",
      },
      {
        name: "Карен Фукухара",
      },
      {
        name: "Чейс Кроуфорд",
      },
      {
        name: "Джесси Ашер",
      },
    ],
    description:
      "В мире, где супергерои — популярные звёзды, за идеальным фасадом скрывается мрачный мир наркотиков и разврата. Противостоит им отряд «Пацаны».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      { genre: "супергероика" },
    ],
    screenshots: 12,
    posters: 1,
  }, // пацаны 2
  {
    release: new Date("2019-10-07"),
    publication: new Date("2023-05-06"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Первобытный",
    original: "Primal",
    kinopoisk: "https://www.kinopoisk.ru/series/1263399/",
    director: [
      {
        name: "Генндий Тартаковский",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Пещерный человек и тираннозавр объединяются для выживания в доисторическом мире.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 50,
    posters: 1,
  }, // первобытный 1
  {
    release: new Date("2016-05-06"),
    publication: new Date("2021-07-25"),
    format: "фильм",
    grade: "A",
    title: "Первый мститель: Противостояние",
    original: "Captain America: Civil War",
    kinopoisk: "https://www.kinopoisk.ru/film/822708/",
    director: [
      {
        name: "Джо Руссо",
      },
      {
        name: "Энтони Руссо",
      },
    ],
    cast: [
      {
        name: "Крис Эванс",
      },
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Энтони Маки",
      },
      {
        name: "Дон Чидл",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Чедвик Боузман",
      },
      {
        name: "Пол Беттани",
      },
      {
        name: "Элизабет Олсен",
      },
      {
        name: "Пол Радд",
      },
      {
        name: "Том Холланд",
      },
      {
        name: "Даниэль Брюль",
      },
    ],
    description:
      "Политическое вмешательство в дела Мстителей приводит к расколу между Капитаном Америкой и Железным человеком.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "marvel",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // первый мститель: противостояние
  {
    release: new Date("2004-10-22"),
    publication: new Date("2023-12-30"),
    format: "фильм",
    grade: "C",
    title: "Пережить Рождество",
    original: "Surviving Christmas",
    kinopoisk: "https://www.kinopoisk.ru/film/20105/",
    director: [
      {
        name: "Майк Митчелл",
      },
    ],
    cast: [
      {
        name: "Бен Аффлек",
      },
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Кристина Эпплгейт",
      },
      {
        name: "Кэтрин О’Хара",
      },
    ],
    description:
      "Одинокий, несносный молодой миллионер платит семье за то, чтобы они провели с ним Рождество.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // пережить рождество
  {
    release: new Date("2005-03-05"),
    publication: new Date("2025-07-23"),
    format: "фильм",
    grade: "C",
    title: "Пиджак",
    original: "The Jacket / Пиджмак",
    kinopoisk: "https://www.kinopoisk.ru/film/47382/",
    director: [
      {
        name: "Джон Мэйбери",
      },
    ],
    cast: [
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Кира Найтли",
      },
      {
        name: "Крис Кристофферсон",
      },
      {
        name: "Дженнифер Джейсон Ли",
      },
      {
        name: "Дэниэл Крэйг",
      },
    ],
    description:
      "Экспериментальное «лечение» перемещают ветерана войны в будущее, где он узнает о скорой смерти.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 32,
    posters: 3,
  }, // пиджак
  {
    release: new Date("2024-09-19"),
    publication: new Date("2024-11-15"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Пингвин",
    original: "The Penguin",
    kinopoisk: "https://www.kinopoisk.ru/series/4635062/",
    director: [
      {
        name: "Лорен Лефранк",
      },
    ],
    cast: [
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Кристин Милиоти",
      },
    ],
    description:
      "После событий фильма «Бэтмен» Освальд Кобблпот, он же Пингвин, пытается захватить бразды правления криминальным миром Готэма.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "dc",
      },
    ],
    screenshots: 33,
    posters: 2,
  }, // пингвин
  {
    release: new Date("2007-01-05"),
    publication: new Date("2022-05-17"),
    format: "фильм",
    grade: "A+",
    title: "Писатели свободы",
    original: "Freedom Writers",
    kinopoisk: "https://www.kinopoisk.ru/film/195226/",
    director: [
      {
        name: "Ричард ЛаГравенес",
      },
    ],
    cast: [
      {
        name: "Хилари Суэнк",
      },
      {
        name: "Патрик Демпси",
      },
      {
        name: "Скотт Гленн",
      },
      {
        name: "Имелда Стонтон",
      },
      {
        name: "Эйприл Л. Эрнандез",
      },
      {
        name: "Марио",
      },
    ],
    description:
      "Эрин Груэлл помогла проблемным ученикам из расово разделенной школы Лос-Анджелеса поверить в образование.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 14,
    posters: 3,
  }, // писатели свободы
  {
    release: new Date("2022-04-22"),
    publication: new Date("2022-05-17"),
    format: "фильм",
    grade: "A",
    title: "Плохие парни",
    original: "The Bad Guys",
    kinopoisk: "https://www.kinopoisk.ru/film/1311146/",
    director: [
      {
        name: "Пьер Перифел",
      },
    ],
    cast: [
      {
        name: "Сэм Рокуэлл",
      },
      {
        name: "Аквафина",
      },
      {
        name: "Крэйг Робинсон",
      },
      {
        name: "Энтони Рамос",
      },
      {
        name: "Ричард Айоади",
      },
      {
        name: "Зази Битц",
      },
    ],
    description:
      "Чтобы избежать тюрьмы, банда отъявленных преступников делает вид, что меняются в лучшую сторону.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // плохие парни
  {
    release: new Date("2003-07-18"),
    publication: new Date("2020-01-23"),
    format: "фильм",
    grade: "A+",
    title: "Плохие парни 2",
    original: "Bad Boys II",
    kinopoisk: "https://www.kinopoisk.ru/film/2928/",
    director: [
      {
        name: "Майкл Бэй",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Мартин Лоуренс",
      },
      {
        name: "Гэбриэл Юнион",
      },
    ],
    description:
      "Полицейские расследуют поставки экстази во Флориду от кубинской наркогруппировки.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 20,
    posters: 3,
  }, // плохие парни 2
  {
    release: new Date("1995-04-07"),
    publication: new Date("2020-01-22"),
    format: "фильм",
    grade: "A",
    title: "Плохие парни",
    original: "Bad Boys",
    kinopoisk: "https://www.kinopoisk.ru/film/3908/",
    director: [
      {
        name: "Майкл Бэй",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Мартин Лоуренс",
      },
    ],
    description:
      "Детективы охраняют свидетеля убийства и расследуют кражу героина из полицейского хранилища.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // плохие парни
  {
    release: new Date("2021-02-26"),
    publication: new Date("2021-12-05"),
    format: "фильм",
    grade: "C",
    title: "По наклонной",
    original: "Cherry",
    kinopoisk: "https://www.kinopoisk.ru/film/1245501/",
    director: [
      {
        name: "Джо Руссо",
      },
      {
        name: "Энтони Руссо",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Сиэра Браво",
      },
      {
        name: "Джек Рейнор",
      },
      {
        name: "Майкл Гандольфини",
      },
    ],
    description:
      "После Ирака медик Нико Уокер подсаживается на наркотики и грабит банки.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // по наклонной
  {
    release: new Date("2014-05-09"),
    publication: new Date("2022-09-29"),
    format: "фильм",
    grade: "B",
    title: "Повар на колесах",
    original: "Chef",
    kinopoisk: "https://www.kinopoisk.ru/film/760763/",
    director: [
      {
        name: "Джон Фавро",
      },
    ],
    cast: [
      {
        name: "Джон Фавро",
      },
      {
        name: "Бобби Каннавале",
      },
      {
        name: "Эмджей Энтони",
      },
      {
        name: "Джон Легуизамо",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Бобби Каннавале",
      },
    ],
    description: "Шеф-повар теряет работу и открывает передвижную закусочную.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // повар на колесах
  {
    release: new Date("2016-12-09"),
    publication: new Date("2022-03-16"),
    format: "фильм",
    grade: "love",
    title: "Под покровом ночи",
    original: "Nocturnal Animals",
    kinopoisk: "https://www.kinopoisk.ru/film/909898/",
    director: [
      {
        name: "Том Форд",
      },
    ],
    cast: [
      {
        name: "Эми Адамс",
      },
      {
        name: "Джейк Джилленхол",
      },
      {
        name: "Майкл Шеннон",
      },
      {
        name: "Аарон Тейлор-Джонсон",
      },
      {
        name: "Айла Фишер",
      },
    ],
    description: "Сьюзан получает мрачную рукопись от бывшего мужа писателя.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // под покровом ночи
  {
    release: new Date("2024-08-21"),
    publication: new Date("2024-10-01"),
    format: "фильм",
    grade: "B",
    title: "Подай знак",
    original: "Blink Twice",
    kinopoisk: "https://www.kinopoisk.ru/film/4630624/",
    director: [
      {
        name: "Зои Кравиц",
      },
    ],
    cast: [
      {
        name: "Наоми Аки",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Адриа Архона",
      },
      {
        name: "Алиа Шокат",
      },
      {
        name: "Кристиан Слэйтер",
      },
      {
        name: "Саймон Рекс",
      },
    ],
    description:
      "Миллионер приглашает Фриду с подругой в отпуск мечты на частном острове, но на месте девушки замечают нечто зловещее.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // подай знак
  {
    release: new Date("2023-03-31"),
    publication: new Date("2025-04-06"),
    format: "фильм",
    grade: "A",
    title: "Подземелья и драконы: Честь среди воров",
    original: "Dungeons & Dragons: Honor Among Thieves",
    kinopoisk: "https://www.kinopoisk.ru/film/762646/",
    director: [
      {
        name: "Джон Фрэнсис Дейли",
      },
      {
        name: "Джонатан М. Голдштейн",
      },
    ],
    cast: [
      {
        name: "Крис Пайн",
      },
      {
        name: "Мишель Родригес",
      },
      {
        name: "Джастис Смит",
      },
      {
        name: "София Лиллис",
      },
      {
        name: "Хью Грант",
      },
      {
        name: "Реге-Жан Пейдж",
      },
      {
        name: "Хлоя Коулмэн",
      },
      {
        name: "Дэйзи Хэд",
      },
    ],
    description:
      "Вор и его неожиданные спутники ищут утерянную реликвию, но попадают в неприятности.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "фэнтези",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // подземелья и драконы: честь среди воров
  {
    release: new Date("2018-06-12"),
    publication: new Date("2024-08-10"),
    format: "фильм",
    grade: "B",
    title: "Подстава",
    original: "Set It Up",
    kinopoisk: "https://www.kinopoisk.ru/film/976520/",
    director: [
      {
        name: "Клер Скэнлон",
      },
    ],
    cast: [
      {
        name: "Зои Дойч",
      },
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Люси Лью",
      },
      {
        name: "Тэй Диггз",
      },
    ],
    description:
      "Два ассистента замышляют коварный план, чтобы заставить своих несносных боссов встречаться.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // подстава
  {
    release: new Date("2007-09-29"),
    publication: new Date("2025-07-20"),
    format: "фильм",
    grade: "A+",
    title: "Поезд на Дарджилинг. Отчаянные путешественники",
    original: "The Darjeeling Limited",
    kinopoisk: "https://www.kinopoisk.ru/film/278185/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Амара Каран",
      },
      {
        name: "Ирфан Кхан",
      },
      {
        name: "Анжелика Хьюстон",
      },
    ],
    description:
      "Три брата отправляются в путешествие по Индии на поезде, надеясь восстановить свои близкие отношения.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 63,
    posters: 1,
  }, // поезд на дарджилинг
  {
    release: new Date("2007-09-07"),
    publication: new Date("2025-05-11"),
    format: "фильм",
    grade: "A",
    title: "Поезд на Юму",
    original: "3:10 to Yuma",
    kinopoisk: "https://www.kinopoisk.ru/film/78240/",
    director: [
      {
        name: "Джеймс Мэнголд",
      },
    ],
    cast: [
      {
        name: "Рассел Кроу",
      },
      {
        name: "Кристиан Бэйл",
      },
      {
        name: "Логан Лерман",
      },
      {
        name: "Даллас Робертс",
      },
      {
        name: "Бен Фостер",
      },
      {
        name: "Питер Фонда",
      },
      {
        name: "Кевин Дюран",
      },
      {
        name: "Алан Тьюдик",
      },
    ],
    description:
      "Небольшой владелец ранчо берётся доставить пойманного преступника на поезд до Юмы.",
    genres: [
      {
        genre: "вестерн",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 27,
    posters: 3,
  }, // поезд на юму
  {
    release: new Date("2010-09-03"),
    publication: new Date("2025-03-01"),
    format: "фильм",
    grade: "B",
    title: "Пожары",
    original: "Incendies",
    kinopoisk: "https://www.kinopoisk.ru/film/425400/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Лубна Азабаль",
      },
      {
        name: "Мелисса Дезормо-Полен",
      },
      {
        name: "Максим Годетт",
      },
    ],
    description: "Брат и сестра исследуют трагическое прошлое своей семьи.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 53,
    posters: 2,
  }, // пожары
  {
    release: new Date("2024-07-12"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "C",
    title: "Покажи мне Луну",
    original: "Fly Me to the Moon",
    kinopoisk: "https://www.kinopoisk.ru/film/591469/",
    director: [
      {
        name: "Грег Берланти",
      },
    ],
    cast: [
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Вуди Харрельсон",
      },
      {
        name: "Рэй Романо",
      },
      {
        name: "Джим Рэш",
      },
    ],
    description:
      "Белый дом поручает Келли Джонс организовать фальшивую высадку на Луну как запасной план.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // покажи мне луну
  {
    release: new Date("2023-09-23"),
    publication: new Date("2023-11-19"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Поколение «Ви»",
    original: "Gen V",
    kinopoisk: "https://www.kinopoisk.ru/series/1431133/",
    director: [
      {
        name: "Эрик Крипке",
      },
      {
        name: "Эван Голдберг",
      },
      {
        name: "Крэйг Розенберг",
      },
      {
        name: "Сет Роген",
      },
    ],
    cast: [
      {
        name: "Джаз Синклер",
      },
      {
        name: "Лиззи Бродвей",
      },
      {
        name: "Мэдди Филлипс",
      },
      {
        name: "Лондон Тор",
      },
      {
        name: "Дерек Лу",
      },
      {
        name: "Аса Германн",
      },
      {
        name: "Чэнс Пердомо",
      },
      {
        name: "Патрик Шварценеггер",
      },
    ],
    description: "Супергерои обучаются в колледже компании «Vought».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      { genre: "супергероика" },
    ],
    screenshots: 26,
    posters: 1,
  }, // поколение «ви» 1
  {
    release: new Date("2012-10-26"),
    publication: new Date("2019-06-03"),
    format: "фильм",
    grade: "love",
    title: "Покорители волн",
    original: "Chasing Mavericks",
    kinopoisk: "https://www.kinopoisk.ru/film/546244/",
    director: [
      {
        name: "Майкл Аптед",
      },
      {
        name: "Кёртис Хэнсон",
      },
    ],
    cast: [
      {
        name: "Джонни Уэстон",
      },
      {
        name: "Джерард Батлер",
      },
      {
        name: "Эбигейл Спенсер",
      },
      {
        name: "Элизабет Шу",
      },
      {
        name: "Ливен Рамбин",
      },
    ],
    description:
      "Узнав о надвигающейся гигантской волне, юный сёрфер Джей Мориарти обращается за тренировками к знаменитому Фрости Хессону.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // покорители волн
  {
    release: new Date("2024-02-08"),
    publication: new Date("2024-05-04"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Полиция Токио",
    original: "Tokyo Vice",
    kinopoisk: "https://www.kinopoisk.ru/series/762194/",
    director: [
      {
        name: "Дж.Т. Роджерс",
      },
    ],
    cast: [
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Кэн Ватанабэ",
      },
      {
        name: "Рэйчел Келлер",
      },
      {
        name: "Сё Касамацу",
      },
      {
        name: "Ринко Кикути",
      },
    ],
    description:
      "Американец, приехав в Японию в конце 90-х, становится первым иностранным журналистом в крупной газете и погружается в опасный мир токийского криминала.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // полиция токио 2
  {
    release: new Date("2022-04-07"),
    publication: new Date("2022-04-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Полиция Токио",
    original: "Tokyo Vice",
    kinopoisk: "https://www.kinopoisk.ru/series/762194/",
    director: [
      {
        name: "Дж.Т. Роджерс",
      },
    ],
    cast: [
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Кэн Ватанабэ",
      },
      {
        name: "Рэйчел Келлер",
      },
      {
        name: "Сё Касамацу",
      },
      {
        name: "Ринко Кикути",
      },
    ],
    description:
      "Американец, приехав в Японию в конце 90-х, становится первым иностранным журналистом в крупной газете и погружается в опасный мир токийского криминала.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // полиция токио 1
  {
    release: new Date("2006-11-18"),
    publication: new Date("2021-02-08"),
    format: "фильм",
    grade: "C",
    title: "Полный облом",
    original: "Big Nothing",
    kinopoisk: "https://www.kinopoisk.ru/film/220497/",
    director: [
      {
        name: "Жан-Батист Андреа",
      },
    ],
    cast: [
      {
        name: "Дэвид Швиммер",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Элис Ив",
      },
      {
        name: "Наташа Макэлхоун",
      },
    ],
    description:
      "Школьный учитель теряет работу и ввязывается в опасную аферу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // полный облом
  {
    release: new Date("2017-11-03"),
    publication: new Date("2022-08-03"),
    format: "фильм",
    grade: "B",
    title: "Последний взмах флага",
    original: "Last Flag Flying",
    kinopoisk: "https://www.kinopoisk.ru/film/1002592/",
    director: [
      {
        name: "Ричард Линклейтер",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Лоренс Фишбёрн",
      },
      {
        name: "Дж. Куинтон Джонсон",
      },
      {
        name: "Юл Васкес",
      },
    ],
    description:
      "Ларри Шеперд с бывшими сослуживцами хоронит погибшего в Ираке сына.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // последний взмах флага
  {
    release: new Date("2003-12-05"),
    publication: new Date("2025-07-24"),
    format: "фильм",
    grade: "A+",
    title: "Последний самурай",
    original: "The Last Samurai",
    kinopoisk: "https://www.kinopoisk.ru/film/6764/",
    director: [
      {
        name: "Эдвард Цвик",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Кэн Ватанабэ",
      },
      {
        name: "Коюки",
      },
      {
        name: "Тони Голдуин",
      },
      {
        name: "Хироюки Санада",
      },
    ],
    description:
      "В Японии XIX века американский капитан становится свидетелем столкновения старого и нового миров.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 90,
    posters: 3,
  }, // последний самурай
  {
    release: new Date("2020-04-19"),
    publication: new Date("2020-05-20"),
    format: "сериал",
    season: "мини–сериал",
    grade: "love",
    title: "Последний танец",
    original: "The Last Dance",
    kinopoisk: "https://www.kinopoisk.ru/series/1162628/",
    director: [
      {
        name: "Джейсон Хехир",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "История о легенде баскетбола Майкле Джордане и команде «Чикаго Буллз» времен 1990-х годов.",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // последний танец
  {
    release: new Date("2019-06-07"),
    publication: new Date("2019-11-24"),
    format: "фильм",
    grade: "A",
    title: "Последний черный в Сан-Франциско",
    original: "The Last Black Man in San Francisco",
    kinopoisk: "https://www.kinopoisk.ru/film/1115907/",
    director: [
      {
        name: "Джо Талбот",
      },
    ],
    cast: [
      {
        name: "Джимми Фэйлс",
      },
      {
        name: "Джонатан Мейджорс",
      },
      {
        name: "Роб Морган",
      },
      {
        name: "Дэнни Гловер",
      },
    ],
    description:
      "Молодой человек ищет дом в меняющемся городе, который, кажется, оставил его позади.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 28,
    posters: 2,
  }, // последний черный в сан-франциско
  {
    release: new Date("2020-10-02"),
    publication: new Date("2021-01-31"),
    format: "фильм",
    grade: "B",
    title: "Последняя капля",
    original: "On the Rocks",
    kinopoisk: "https://www.kinopoisk.ru/film/1228685/",
    director: [
      {
        name: "София Коппола",
      },
    ],
    cast: [
      {
        name: "Билл Мюррей",
      },
      {
        name: "Рашида Джонс",
      },
      {
        name: "Марлон Уайанс",
      },
      {
        name: "Джессика Хенвик",
      },
    ],
    description:
      "Лаура подозревает мужа в измене и начинает шпионить за ним с помощью своего отца.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // последняя капля
  {
    release: new Date("2005-11-11"),
    publication: new Date("2020-03-11"),
    format: "фильм",
    grade: "A",
    title: "Поцелуй навылет",
    original: "Kiss Kiss Bang Bang",
    kinopoisk: "https://www.kinopoisk.ru/film/51439/",
    director: [
      {
        name: "Шейн Блэк",
      },
    ],
    cast: [
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Вэл Килмер",
      },
      {
        name: "Мишель Монахэн",
      },
    ],
    description:
      "Вора, принятого за актёра, отправляют в Голливуд тренироваться у детектива для съёмок в кино, но вместе с неудачливой актрисой они попадают в расследование убийства.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // поцелуй навылет
  {
    release: new Date("2016-11-18"),
    publication: new Date("2020-10-16"),
    format: "фильм",
    grade: "B",
    title: "Почти семнадцать",
    original: "The Edge of Seventeen",
    kinopoisk: "https://www.kinopoisk.ru/film/624161/",
    director: [
      {
        name: "Келли Фрэмон",
      },
    ],
    cast: [
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Хейли Лу Ричардсон",
      },
      {
        name: "Блейк Дженнер",
      },
      {
        name: "Кира Седжвик",
      },
      {
        name: "Вуди Харрельсон",
      },
      {
        name: "Хейден Сзето",
      },
    ],
    description: "Жизнь Надин усложнилась из-за романа подруги с её братом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // почти семнадцать
  {
    release: new Date("2022-04-28"),
    publication: new Date("2022-06-25"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Предложение",
    original: "The Offer",
    kinopoisk: "https://www.kinopoisk.ru/series/1407744/",
    director: [
      {
        name: "Майкл Толкин",
      },
    ],
    cast: [
      {
        name: "Майлз Теллер",
      },
      {
        name: "Мэттью Гуд",
      },
      {
        name: "Дэн Фоглер",
      },
      {
        name: "Джованни Рибизи",
      },
      {
        name: "Джуно Темпл",
      },
    ],
    description: "История создания культового фильма «Крестный отец».",
    genres: [
      {
        genre: "биография",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // предложение
  {
    release: new Date("2015-09-04"),
    publication: new Date("2020-04-16"),
    format: "фильм",
    grade: "B",
    title: "Прежде чем мы расстанемся",
    original: "Before We Go",
    kinopoisk: "https://www.kinopoisk.ru/film/784389/",
    director: [
      {
        name: "Крис Эванс",
      },
    ],
    cast: [
      {
        name: "Крис Эванс",
      },
      {
        name: "Элис Ив",
      },
    ],
    description:
      "Два незнакомца, застрявшие в Манхэттене на ночь, становятся близки друг другу.",
    genres: [
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // прежде чем мы расстанемся
  {
    release: new Date("2024-04-26"),
    publication: new Date("2024-06-15"),
    format: "фильм",
    grade: "love",
    title: "Претенденты",
    original: "Challengers",
    kinopoisk: "https://www.kinopoisk.ru/film/4860116/",
    director: [
      {
        name: "Лука Гуаданьино",
      },
    ],
    cast: [
      {
        name: "Зендея",
      },
      {
        name: "Майк Фейст",
      },
      {
        name: "Джош О’Коннор",
      },
    ],
    description:
      "Таши Дункан решила отправить своего мужа Арта на соревнования «Челленджер», в надежде возродить его страсть к теннису. Однако его соперником окажется бывший партнёр Таши.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 67,
    posters: 1,
  }, // претенденты
  {
    release: new Date("2016-11-11"),
    publication: new Date("2021-07-29"),
    format: "фильм",
    grade: "A",
    title: "Прибытие",
    original: "Arrival",
    kinopoisk: "https://www.kinopoisk.ru/film/718811/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Эми Адамс",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Форест Уитакер",
      },
    ],
    description:
      "Приземлились корабли пришельцев — лингвист Бэнкс ищет способ общения.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // прибытие
  {
    release: new Date("2011-12-21"),
    publication: new Date("2025-08-06"),
    format: "фильм",
    grade: "A+",
    title: "Приключения Тинтина: Тайна единорога",
    original: "The Adventures of Tintin",
    kinopoisk: "https://www.kinopoisk.ru/film/406186/",
    director: [
      {
        name: "Стивен Спилберг",
      },
    ],
    cast: [
      {
        name: "Джейми Белл",
      },
      {
        name: "Энди Серкис",
      },
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Ник Фрост",
      },
    ],
    description:
      "Репортёр Тинтин и капитан Хэддок отправляются на поиски сокровищ затонувшего корабля.",
    genres: [
      {
        genre: "анимация",
      },
      {
        genre: "детектив",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 44,
    posters: 3,
  }, // приключения тинтина
  {
    release: new Date("2024-01-19"),
    publication: new Date("2025-03-20"),
    format: "фильм",
    grade: "B",
    title: "Присутствие",
    original: "Presence",
    kinopoisk: "https://www.kinopoisk.ru/film/5445463/",
    director: [
      {
        name: "Стивен Содерберг",
      },
    ],
    cast: [
      {
        name: "Каллина Лян",
      },
      {
        name: "Люси Лью",
      },
      {
        name: "Крис Салливан",
      },
      {
        name: "Эдди Мэдэй",
      },
      {
        name: "Уэст Малхолланд",
      },
    ],
    description: "Семья въезжает в новый дом, где обитает призрак.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // присутствие
  {
    release: new Date("2020-03-05"),
    publication: new Date("2024-04-30"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Программисты",
    original: "Devs",
    kinopoisk: "https://www.kinopoisk.ru/series/1137249/",
    director: [
      {
        name: "Алекс Гарленд",
      },
    ],
    cast: [
      {
        name: "Соноя Мидзуно",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Чин Ха",
      },
      {
        name: "Кейли Спейни",
      },
      {
        name: "Элисон Пилл",
      },
      {
        name: "Стивен Маккинли Хендерсон",
      },
    ],
    description:
      "Компьютерный инженер Лили Чан подозревает, что руководство фирмы, в которой она работает, виновно в смерти её парня.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 44,
    posters: 1,
  }, // программисты
  {
    release: new Date("2017-10-06"),
    publication: new Date("2025-03-28"),
    format: "фильм",
    grade: "B",
    title: "Проект Флорида",
    original: "The Florida Project",
    kinopoisk: "https://www.kinopoisk.ru/film/998317/",
    director: [
      {
        name: "Шон Бэйкер",
      },
    ],
    cast: [
      {
        name: "Бруклин Принс",
      },
      {
        name: "Брия Винайте",
      },
      {
        name: "Уиллем Дефо",
      },
    ],
    description:
      "Мать-одиночка и администратор придорожного мотеля заботятся о шестилетней девочке",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 48,
    posters: 2,
  }, // проект флорида
  {
    release: new Date("2012-03-02"),
    publication: new Date("2019-08-13"),
    format: "фильм",
    grade: "love",
    title: "Проект X: Дорвались",
    original: "Project X",
    kinopoisk: "https://www.kinopoisk.ru/film/507440/",
    director: [
      {
        name: "Нима Нуризаде",
      },
    ],
    cast: [
      {
        name: "Томас Манн",
      },
      {
        name: "Оливер Купер",
      },
      {
        name: "Джонатан Даниэль Браун",
      },
      {
        name: "Кирби Блисс Блэнтон",
      },
      {
        name: "Майлз Теллер",
      },
    ],
    description:
      "Три старшеклассника устраивают вечеринку дома у одного из них, но на неё заявляется слишком много народу.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // проект х
  {
    release: new Date("2022-06-03"),
    publication: new Date("2022-06-10"),
    format: "фильм",
    grade: "B",
    title: "Прорваться в НБА",
    original: "Hustle",
    kinopoisk: "https://www.kinopoisk.ru/film/1437989/",
    director: [
      {
        name: "Джеремайя Сагар",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Хуанчо Эрнангомес",
      },
      {
        name: "Энтони Эдвардс",
      },
    ],
    description: "Баскетбольный скаут натыкается на молодое дарование.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // прорваться в нба
  {
    release: new Date("2008-01-06"),
    publication: new Date("2024-11-20"),
    format: "сериал",
    season: "5",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 47,
    posters: 1,
  }, // прослушка 5
  {
    release: new Date("2006-09-10"),
    publication: new Date("2024-11-12"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 65,
    posters: 1,
  }, // прослушка 4
  {
    release: new Date("2004-09-19"),
    publication: new Date("2024-02-15"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 59,
    posters: 2,
  }, // прослушка 3
  {
    release: new Date("2003-06-01"),
    publication: new Date("2024-02-05"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 60,
    posters: 1,
  }, // прослушка 2
  {
    release: new Date("2002-06-02"),
    publication: new Date("2024-01-26"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
      {
        name: "Майкл Б. Джордан",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 90,
    posters: 1,
  }, // прослушка 1
  {
    release: new Date("2025-06-27"),
    publication: new Date("2025-08-17"),
    format: "фильм",
    grade: "B",
    title: "Прости, детка",
    original: "Sorry, Baby",
    kinopoisk: "https://www.kinopoisk.ru/film/7092649/",
    director: [
      {
        name: "Ева Виктор",
      },
    ],
    cast: [
      {
        name: "Ева Виктор",
      },
      {
        name: "Наоми Аки",
      },
      {
        name: "Лукас Хеджес",
      },
      {
        name: "Луис Канселми",
      },
      {
        name: "Келли МакКормак",
      },
      {
        name: "Джон Кэрролл Линч",
      },
    ],
    description:
      "С Агнес случилось что-то плохое, но жизнь продолжается — по крайней мере, для всех вокруг неё.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 57,
    posters: 1,
  }, // прости, детка
  {
    release: new Date("2023-06-30"),
    publication: new Date("2023-12-17"),
    format: "фильм",
    grade: "A",
    title: "Прошлые жизни",
    original: "Past Lives",
    kinopoisk: "https://www.kinopoisk.ru/film/1346482/",
    director: [
      {
        name: "Селин Сон",
      },
    ],
    cast: [
      {
        name: "Грета Ли",
      },
      {
        name: "Тео Ю",
      },
      {
        name: "Джон Магаро",
      },
    ],
    description: "Замужняя Нора встречает друга, которого любила в детстве.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 37,
    posters: 3,
  }, // прошлые жизни
  {
    release: new Date("2023-08-02"),
    publication: new Date("2023-10-12"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 41,
    posters: 2,
  }, // псы резервации 3
  {
    release: new Date("2022-08-03"),
    publication: new Date("2023-05-17"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
    posters: 1,
  }, // псы резервации 2
  {
    release: new Date("2021-08-09"),
    publication: new Date("2021-10-03"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // псы резервации 1
  {
    release: new Date("2022-02-02"),
    publication: new Date("2022-06-24"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Пэм и Томми",
    original: "Pam & Tommy",
    kinopoisk: "https://www.kinopoisk.ru/series/4294378/",
    director: [
      {
        name: "Роберт Сигел",
      },
    ],
    cast: [
      {
        name: "Лили Джеймс",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Сет Роген",
      },
      {
        name: "Ник Офферман",
      },
    ],
    description: "История отношений Памелы Андерсон и Томми Ли.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // пэм и томми
  {
    release: new Date("1995-04-26"),
    publication: new Date("2022-08-15"),
    format: "фильм",
    grade: "B",
    title: "Пятница",
    original: "Friday",
    kinopoisk: "https://www.kinopoisk.ru/film/4809/",
    director: [
      {
        name: "Ф. Гэри Грей",
      },
    ],
    cast: [
      {
        name: "Айс Кьюб",
      },
      {
        name: "Крис Такер",
      },
      {
        name: "Ниа Лонг",
      },
      {
        name: "Том Листер мл.",
      },
      {
        name: "Джон Уизерспун",
      },
    ],
    description:
      "Крейг и Смоки должны вернуть 200 долларов местному бандиту до субботы.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 36,
    posters: 3,
  }, // пятница
  {
    release: new Date("2025-01-17"),
    publication: new Date("2025-04-04"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Разделение",
    original: "Severance",
    kinopoisk: "https://www.kinopoisk.ru/series/1343318/",
    director: [
      {
        name: "Бен Стиллер",
      },
      {
        name: "Дэн Эриксон",
      },
    ],
    cast: [
      {
        name: "Адам Скотт",
      },
      {
        name: "Бритт Лауэр",
      },
      {
        name: "Зак Черри",
      },
      {
        name: "Джон Туртурро",
      },
      {
        name: "Трэмелл Тиллман",
      },
      {
        name: "Дичен Лакмэн",
      },
      {
        name: "Патриша Аркетт",
      },
      {
        name: "Кристофер Уокен",
      },
    ],
    description:
      "Марк возглавляет команду офисных работников, чьи воспоминания четко разграничены на рабочие и личные.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 237,
    posters: 2,
  }, // разделение 2
  {
    release: new Date("2022-02-18"),
    publication: new Date("2022-04-27"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Разделение",
    original: "Severance",
    kinopoisk: "https://www.kinopoisk.ru/series/1343318/",
    director: [
      {
        name: "Бен Стиллер",
      },
      {
        name: "Дэн Эриксон",
      },
    ],
    cast: [
      {
        name: "Адам Скотт",
      },
      {
        name: "Бритт Лауэр",
      },
      {
        name: "Зак Черри",
      },
      {
        name: "Джон Туртурро",
      },
      {
        name: "Трэмелл Тиллман",
      },
      {
        name: "Дичен Лакмэн",
      },
      {
        name: "Патриша Аркетт",
      },
      {
        name: "Кристофер Уокен",
      },
    ],
    description:
      "Марк возглавляет команду офисных работников, чьи воспоминания четко разграничены на рабочие и личные.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 74,
    posters: 2,
  }, // разделение 1
  {
    release: new Date("2018-08-17"),
    continuation: new Date("2021-01-15"),
    publication: new Date("2021-09-26"),
    format: "сериал",
    season: "1-2",
    grade: "D",
    title: "Разочарование",
    original: "Disenchantment",
    kinopoisk: "https://www.kinopoisk.ru/series/1112702/",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
      {
        name: "Джош Вайнштейн",
      },
    ],
    cast: [
      {
        name: "Эбби Джейкобсон",
      },
      {
        name: "Нат Факсон",
      },
      {
        name: "Эрик Андре",
      },
      {
        name: "Джон Ди Маджио",
      },
    ],
    description:
      "Принцесса Бин недовольна предстоящим браком с принцем. Но всё меняется, когда она знакомится с демоном и эльфом, и события становятся увлекательными и опасными.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // разочарование 1-2
  {
    release: new Date("2016-04-08"),
    publication: new Date("2019-03-28"),
    format: "фильм",
    grade: "A",
    title: "Разрушение",
    original: "Demolition",
    kinopoisk: "https://www.kinopoisk.ru/film/842493/",
    director: [
      {
        name: "Жан-Марк Валле",
      },
    ],
    cast: [
      {
        name: "Джейк Джилленхол",
      },
      {
        name: "Наоми Уоттс",
      },
      {
        name: "Крис Купер",
      },
    ],
    description: "Дэвис переживает утрату супруги, круша всё вокруг.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // разрушение
  {
    release: new Date("2009-08-13"),
    publication: new Date("2024-10-02"),
    format: "фильм",
    grade: "B",
    title: "Район №9",
    original: "District 9",
    kinopoisk: "https://www.kinopoisk.ru/film/397494/",
    director: [
      {
        name: "Нил Бломкамп",
      },
    ],
    cast: [
      {
        name: "Шарлто Копли",
      },
      {
        name: "Джейсон Коуп",
      },
    ],
    description:
      "В 1982 году над южноафриканским Йоханнесбургом появляется массивный космический корабль, на борту которого люди обнаруживают истощенных инопланетян. Правительство ЮАР оказывает пришельцам всяческую помощь и организовывает для пришельцев временный лагерь в Районе №9.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 11,
    posters: 2,
  }, // район № 9
  {
    release: new Date("2022-09-30"),
    publication: new Date("2024-03-13"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Рами",
    original: "Ramy",
    kinopoisk: "https://www.kinopoisk.ru/series/1108755/",
    director: [
      {
        name: "Рами Юссеф",
      },
    ],
    cast: [
      {
        name: "Рами Юссеф",
      },
      {
        name: "Амр Вакед",
      },
      {
        name: "Хиам Аббасс",
      },
      {
        name: "Мэй Каламави",
      },
      {
        name: "Мохаммед Амер",
      },
    ],
    description:
      "Рами Хассан — американец египетского происхождения из Нью-Джерси, разрывающийся между культурой миллениалов и традициями своей веры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // рами 3
  {
    release: new Date("2019-04-19"),
    continuation: new Date("2020-05-29"),
    publication: new Date("2020-09-01"),
    format: "сериал",
    season: "1-2",
    grade: "A",
    title: "Рами",
    original: "Ramy",
    kinopoisk: "https://www.kinopoisk.ru/series/1108755/",
    director: [
      {
        name: "Рами Юссеф",
      },
    ],
    cast: [
      {
        name: "Рами Юссеф",
      },
      {
        name: "Амр Вакед",
      },
      {
        name: "Хиам Аббасс",
      },
      {
        name: "Мэй Каламави",
      },
      {
        name: "Мохаммед Амер",
      },
      {
        name: "Махершала Али",
      },
    ],
    description:
      "Рами Хассан — американец египетского происхождения из Нью-Джерси, разрывающийся между культурой миллениалов и традициями своей веры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // рами 1-2
  {
    release: new Date("2011-03-04"),
    publication: new Date("2019-05-31"),
    format: "фильм",
    grade: "A+",
    title: "Ранго",
    original: "Rango",
    kinopoisk: "https://www.kinopoisk.ru/film/426053/",
    director: [
      {
        name: "Гор Вербински",
      },
    ],
    cast: [
      {
        name: "Джонни Депп",
      },
      {
        name: "Айла Фишер",
      },
      {
        name: "Эбигейл Бреслин",
      },
      {
        name: "Альфред Молина",
      },
      {
        name: "Билл Найи",
      },
      {
        name: "Стивен Рут",
      },
    ],
    description:
      "Ранго — хамелеон, случайно попавший в городок Грязь на Диком Западе.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "вестерн",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // ранго
  {
    release: new Date("2023-08-06"),
    publication: new Date("2024-01-17"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Время побеждать: Расцвет династии Лейкерс",
    original: "Winning Time: The Rise of the Lakers Dynasty",
    kinopoisk: "https://www.kinopoisk.ru/series/1272097/",
    director: [
      {
        name: "Макс Боренштейн",
      },
      {
        name: "Джим Хехт",
      },
    ],
    cast: [
      {
        name: "Джон Си Райли",
      },
      {
        name: "Куинси Исайя",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Хэдли Робинсон",
      },
      {
        name: "Джейсон Кларк",
      },
    ],
    description: "История восхождения «Лейкерс» к вершинам спортивного олимпа.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 38,
    posters: 1,
  }, // расцвет династии лейкерс 2
  {
    release: new Date("2022-03-06"),
    publication: new Date("2022-08-11"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Время побеждать: Расцвет династии Лейкерс",
    original: "Winning Time: The Rise of the Lakers Dynasty",
    kinopoisk: "https://www.kinopoisk.ru/series/1272097/",
    director: [
      {
        name: "Макс Боренштейн",
      },
      {
        name: "Джим Хехт",
      },
    ],
    cast: [
      {
        name: "Джон Си Райли",
      },
      {
        name: "Куинси Исайя",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Хэдли Робинсон",
      },
      {
        name: "Джейсон Кларк",
      },
    ],
    description: "История восхождения «Лейкерс» к вершинам спортивного олимпа.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // расцвет династии лейкерс 1
  {
    release: new Date("2007-06-29"),
    publication: new Date("2021-11-15"),
    format: "фильм",
    grade: "love",
    title: "Рататуй",
    original: "Ratatouille",
    kinopoisk: "https://www.kinopoisk.ru/film/89514/",
    director: [
      {
        name: "Брэд Бёрд",
      },
      {
        name: "Ян Пинкава",
      },
    ],
    cast: [
      {
        name: "Пэттон Освальт",
      },
      {
        name: "Лу Романо",
      },
      {
        name: "Иэн Холм",
      },
      {
        name: "Брэд Гэррет",
      },
      {
        name: "Джанин Гарофало",
      },
    ],
    description:
      "Крыса-повар заключает необычный союз с молодым работником кухни в знаменитом парижском ресторане.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 41,
    posters: 2,
  }, // рататуй
  {
    release: new Date("2014-01-19"),
    publication: new Date("2020-03-28"),
    format: "фильм",
    grade: "B",
    title: "Реальные упыри",
    original: "What We Do in the Shadows",
    kinopoisk: "https://www.kinopoisk.ru/film/818981/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Джемейн Клемент",
      },
    ],
    cast: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Джемейн Клемент",
      },
      {
        name: "Джонатан Бруг",
      },
    ],
    description: "Вампиры пытаются приспособиться к современной жизни.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // реальные упыри
  {
    release: new Date("2025-05-25"),
    publication: new Date("2025-08-30"),
    format: "сериал",
    season: "8",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // рик и морти 8
  {
    release: new Date("2023-10-15"),
    publication: new Date("2023-12-28"),
    format: "сериал",
    season: "7",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // рик и морти 7
  {
    release: new Date("2022-09-04"),
    publication: new Date("2023-01-03"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // рик и морти 6
  {
    release: new Date("2021-06-20"),
    publication: new Date("2021-09-16"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // рик и морти 5
  {
    release: new Date("2024-03-07"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "D",
    title: "Рики Стэники",
    original: "Ricky Stanicky",
    kinopoisk: "https://www.kinopoisk.ru/film/523111/",
    director: [
      {
        name: "Питер Фаррелли",
      },
    ],
    cast: [
      {
        name: "Зак Эфрон",
      },
      {
        name: "Джон Сина",
      },
      {
        name: "Эндрю Сантино",
      },
      {
        name: "Жермен Фаулер",
      },
      {
        name: "Лекс Скотт Дэвис",
      },
      {
        name: "Уильям Х. Мэйси",
      },
    ],
    description:
      "Три друга создали фиктивного Рикки Стэнники после неудачной шалости и до сих пор прикрываются им, оправдывая своё ребячество.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // рики стэники
  {
    release: new Date("2024-04-04"),
    publication: new Date("2024-05-05"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Рипли",
    original: "Ripley",
    kinopoisk: "https://www.kinopoisk.ru/series/1311083/",
    director: [
      {
        name: "Стивен Зеллиан",
      },
    ],
    cast: [
      {
        name: "Эндрю Скотт",
      },
      {
        name: "Дакота Фаннинг",
      },
      {
        name: "Джонни Флинн",
      },
    ],
    description:
      "Богатый бизнесмен нанимает Тома Рипли, чтобы тот помог ему вернуть сына из Италии обратно в Соединенные Штаты.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 310,
    posters: 1,
  }, // рипли
  {
    release: new Date("2008-10-31"),
    publication: new Date("2020-02-15"),
    format: "фильм",
    grade: "A+",
    title: "Рок-н-рольщик",
    original: "RocknRolla",
    kinopoisk: "https://www.kinopoisk.ru/film/378140/",
    director: [
      {
        name: "Гай Ричи",
      },
    ],
    cast: [
      {
        name: "Джерард Батлер",
      },
      {
        name: "Том Уилкинсон",
      },
      {
        name: "Тандиве Ньютон",
      },
      {
        name: "Марк Стронг",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Том Харди",
      },
      {
        name: "Тоби Кеббелл",
      },
      {
        name: "Джереми Пивен",
      },
      {
        name: "Лудакрис",
      },
    ],
    description:
      "Мафиози проводит сделку с землёй, вызывая борьбу за ресурсы и миллионы долларов между лондонскими преступниками.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // рок-н-рольщик
  {
    release: new Date("2018-11-21"),
    publication: new Date("2025-02-17"),
    format: "фильм",
    grade: "B",
    title: "Рома",
    original: "Roma",
    kinopoisk: "https://www.kinopoisk.ru/film/1008486/",
    director: [
      {
        name: "Альфонсо Куарон",
      },
    ],
    cast: [
      {
        name: "Ялица Апарисио",
      },
      {
        name: "Марина Де Тавира",
      },
    ],
    description: "История жизни обычной семьи среднего класса в Мехико 1970-х.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 39,
    posters: 1,
  }, // рома
  {
    release: new Date("2021-12-03"),
    publication: new Date("2022-03-28"),
    format: "фильм",
    grade: "C",
    title: "Рука бога",
    original: "The Hand of God / È stata la mano di Dio",
    kinopoisk: "https://www.kinopoisk.ru/film/1395871/",
    director: [
      {
        name: "Паоло Соррентино",
      },
    ],
    cast: [
      {
        name: "Филиппо Скотти",
      },
      {
        name: "Тони Сервилло",
      },
      {
        name: "Тереза Сапонанджело",
      },
      {
        name: "Марлон Жубер",
      },
      {
        name: "Луиза Раньери",
      },
    ],
    description:
      "В 1980-х в Неаполе Фабьетто, увлеченный футболом, переживает семейную трагедию, которая определяет его путь к режиссуре.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 35,
    posters: 2,
  }, // рука бога
  {
    release: new Date("2016-07-29"),
    publication: new Date("2019-09-26"),
    format: "фильм",
    grade: "B",
    title: "Светская жизнь",
    original: "Cafe Society / Café Society",
    kinopoisk: "https://www.kinopoisk.ru/film/893362/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Джесси Айзенберг",
      },
      {
        name: "Кристен Стюарт",
      },
      {
        name: "Стив Карелл",
      },
      {
        name: "Блейк Лайвли",
      },
      {
        name: "Кори Столл",
      },
    ],
    description: "Простой парень попадает в мир богемы Голливуда 1930-х.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // светская жизнь
  {
    release: new Date("2014-10-24"),
    publication: new Date("2021-02-23"),
    format: "фильм",
    grade: "B",
    title: "Святой Винсент",
    original: "St. Vincent",
    kinopoisk: "https://www.kinopoisk.ru/film/694646/",
    director: [
      {
        name: "Тед Мелфи",
      },
    ],
    cast: [
      {
        name: "Билл Мюррей",
      },
      {
        name: "Джейден Мартелл",
      },
      {
        name: "Мелисса Маккарти",
      },
      {
        name: "Наоми Уоттс",
      },
      {
        name: "Крис О’Дауд",
      },
    ],
    description:
      "После развода родителей мальчик заводит дружбу с пожилым соседом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // святой винсент
  {
    release: new Date("2021-07-15"),
    publication: new Date("2022-01-31"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Северные воды",
    original: "The North Water",
    kinopoisk: "https://www.kinopoisk.ru/series/1263067/",
    director: [
      {
        name: "Эндрю Хэй",
      },
    ],
    cast: [
      {
        name: "Джек О’Коннелл",
      },
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Сэм Спруэлл",
      },
      {
        name: "Роланд Мёллер",
      },
    ],
    description:
      "Бывший военный врач находит работу на китобойном судне, где его стремление к искуплению оборачивается борьбой за выживание.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // северные воды
  {
    release: new Date("2024-02-27"),
    publication: new Date("2024-12-14"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Сёгун",
    original: "Shogun / Shôgun",
    kinopoisk: "https://www.kinopoisk.ru/series/749562/",
    director: [
      {
        name: "Рейчел Кондо",
      },
      {
        name: "Джастин Маркс",
      },
    ],
    cast: [
      {
        name: "Космо Джарвис",
      },
      {
        name: "Анна Саваи",
      },
      {
        name: "Хироюки Санада",
      },
      {
        name: "Таданобу Асано",
      },
    ],
    description:
      "В начале 17 века английский штурман Джон Блэкторн потерпел кораблекрушение у берегов Японии.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 45,
    posters: 1,
  }, // сёгун 1
  {
    release: new Date("2009-12-08"),
    publication: new Date("2022-03-24"),
    format: "фильм",
    grade: "A",
    title: "Сезон ураганов",
    original: "Hurricane Season",
    kinopoisk: "https://www.kinopoisk.ru/film/403431/",
    director: [
      {
        name: "Тим Стори",
      },
    ],
    cast: [
      {
        name: "Форест Уитакер",
      },
      {
        name: "Тараджи П. Хенсон",
      },
      {
        name: "Исайя Вашингтон",
      },
      {
        name: "Робби Джонс",
      },
      {
        name: "Шэд Мосс",
      },
      {
        name: "Эрик Д. Хилл мл.",
      },
    ],
    description:
      "После урагана «Катрина» тренер Коллинз собрал команду из игроков пяти разрушенных школ Луизианы и повел их к победе в чемпионате штата.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // сезон ураганов
  {
    release: new Date("2003-06-22"),
    publication: new Date("2023-08-25"),
    format: "сериал",
    season: "6",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 25,
    posters: 1,
  }, // секс в большом городе 6
  {
    release: new Date("2001-06-03"),
    publication: new Date("2023-04-07"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // секс в большом городе 4
  {
    release: new Date("2000-06-04"),
    publication: new Date("2023-03-11"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // секс в большом городе 3
  {
    release: new Date("1999-06-06"),
    publication: new Date("2023-01-21"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // секс в большом городе 2
  {
    release: new Date("1998-06-07"),
    publication: new Date("2022-11-14"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // секс в большом городе 1
  {
    release: new Date("2018-04-06"),
    publication: new Date("2022-03-28"),
    format: "фильм",
    grade: "B",
    title: "Секса не будет!!!",
    original: "Blockers",
    kinopoisk: "https://www.kinopoisk.ru/film/719155/",
    director: [
      {
        name: "Кэй Кэннон",
      },
    ],
    cast: [
      {
        name: "Джон Сина",
      },
      {
        name: "Лесли Манн",
      },
      {
        name: "Айк Баринхолц",
      },
      {
        name: "Кэтрин Ньютон",
      },
      {
        name: "Джеральдин Висванатан",
      },
      {
        name: "Гидеон Адлон",
      },
    ],
    description:
      "Трое родителей пытаются помешать своим дочерям потерять девственность на выпускном вечере.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // секса не будет
  {
    release: new Date("2023-09-21"),
    publication: new Date("2023-10-03"),
    format: "сериал",
    season: "4",
    grade: "B",
    title: "Сексуальное просвещение",
    original: "Sex Education / Половое воспитание",
    kinopoisk: "https://www.kinopoisk.ru/series/1147693/",
    director: [
      {
        name: "Лори Нанн",
      },
    ],
    cast: [
      {
        name: "Эйса Баттерфилд",
      },
      {
        name: "Джиллиан Андерсон",
      },
      {
        name: "Шути Гатва",
      },
      {
        name: "Эмма Маки",
      },
      {
        name: "Коннор Суинделлс",
      },
      {
        name: "Эйми Лу Вуд",
      },
    ],
    description:
      "Застенчивый подросток, живущий с матерью-сексологом, начинает помогать одноклассникам, давая советы сексуального характера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // сексуальное просвещение 4
  {
    release: new Date("2001-12-14"),
    publication: new Date("2020-02-26"),
    format: "фильм",
    grade: "C",
    title: "Семейка Тененбаум",
    original: "The Royal Tenenbaums",
    kinopoisk: "https://www.kinopoisk.ru/film/809/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джин Хэкмен",
      },
      {
        name: "Люк Уилсон",
      },
      {
        name: "Гвинет Пэлтроу",
      },
      {
        name: "Анжелика Хьюстон",
      },
      {
        name: "Бен Стиллер",
      },
      {
        name: "Билл Мюррей",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Дэнни Гловер",
      },
      {
        name: "Кумар Паллана",
      },
    ],
    description:
      "Члены неблагополучной семьи с неохотой собираются под одной крышей.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // семейка тененбаум
  {
    release: new Date("2023-12-15"),
    publication: new Date("2023-12-21"),
    format: "фильм",
    grade: "D",
    title: "Семейный план",
    original: "The Family Plan",
    kinopoisk: "https://www.kinopoisk.ru/film/5107088/",
    director: [
      {
        name: "Саймон Селлан Джонс",
      },
    ],
    cast: [
      {
        name: "Марк Уолберг",
      },
      {
        name: "Мишель Монахэн",
      },
      {
        name: "Киран Хайндс",
      },
      {
        name: "Мэгги Кью",
      },
      {
        name: "Зои Маргарет Коллетти",
      },
    ],
    description:
      "Бывший киллер, скрывающийся под маской отца в пригороде, вынужден бежать с семьей, когда прошлое его настигает.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // семейный план
  {
    release: new Date("1995-09-22"),
    publication: new Date("2019-06-14"),
    format: "фильм",
    grade: "love",
    title: "Семь",
    original: "Se7en / Seven",
    kinopoisk: "https://www.kinopoisk.ru/film/377/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Морган Фриман",
      },
      {
        name: "Гвинет Пэлтроу",
      },
      {
        name: "Кевин Спейси",
      },
    ],
    description:
      "Два детектива — новичок и ветеран — расследуют дело серийного убийцы, чьи преступления вдохновлены семью смертными грехами.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 25,
    posters: 2,
  }, // семь
  {
    release: new Date("2012-10-12"),
    publication: new Date("2019-07-16"),
    format: "фильм",
    grade: "A+",
    title: "Семь психопатов",
    original: "Seven Psychopaths",
    kinopoisk: "https://www.kinopoisk.ru/film/586584/",
    director: [
      {
        name: "Мартин Макдона",
      },
    ],
    cast: [
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Сэм Рокуэлл",
      },
      {
        name: "Кристофер Уокен",
      },
      {
        name: "Вуди Харрельсон",
      },
      {
        name: "Эбби Корниш",
      },
      {
        name: "Ольга Куриленко",
      },
    ],
    description:
      "Мошенники похищают пса опасного бандита, который готов на все, чтобы вернуть питомца.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // семь психопатов
  {
    release: new Date("2018-10-26"),
    publication: new Date("2019-05-26"),
    format: "фильм",
    grade: "love",
    title: "Середина 90-х",
    original: "Mid90s",
    kinopoisk: "https://www.kinopoisk.ru/film/1040690/",
    director: [
      {
        name: "Джона Хилл",
      },
    ],
    cast: [
      {
        name: "Санни Сулджик",
      },
      {
        name: "Кэтрин Уотерстон",
      },
      {
        name: "Лукас Хеджес",
      },
      {
        name: "На-кел Смит",
      },
      {
        name: "Олэн Пренатт",
      },
      {
        name: "Джио Галисия",
      },
      {
        name: "Алекса Деми",
      },
    ],
    description: "Подросток ищет признания в компании уличных скейтбордистов.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // середина 90-х
  {
    release: new Date("2022-07-15"),
    publication: new Date("2022-07-24"),
    format: "фильм",
    grade: "D",
    title: "Серый человек",
    original: "The Gray Man",
    kinopoisk: "https://www.kinopoisk.ru/film/558393/",
    director: [
      {
        name: "Джо Руссо",
      },
      {
        name: "Энтони Руссо",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Ана де Армас",
      },
      {
        name: "Билли Боб Торнтон",
      },
      {
        name: "Джессика Хенвик",
      },
      {
        name: "Реге-Жан Пейдж",
      },
      {
        name: "Джулия Баттерз",
      },
    ],
    description: "Спецагент сам становится мишенью ЦРУ.",
    genres: [
      {
        genre: "боевик",
      },
    ],
    screenshots: 18,
    posters: 3,
  }, // серый человек
  {
    release: new Date("2023-10-01"),
    publication: new Date("2024-08-23"),
    format: "сериал",
    season: "35",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk: "https://www.kinopoisk.ru/series/77164/",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // симпсоны 35
  {
    release: new Date("2022-09-25"),
    publication: new Date("2023-08-13"),
    format: "сериал",
    season: "34",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk: "https://www.kinopoisk.ru/series/77164/",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // симпсоны 34
  {
    release: new Date("2021-09-26"),
    publication: new Date("2022-09-06"),
    format: "сериал",
    season: "33",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk: "https://www.kinopoisk.ru/series/77164/",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // симпсоны 33
  {
    release: new Date("2024-07-17"),
    publication: new Date("2025-03-21"),
    format: "фильм",
    grade: "B",
    title: "Синг-Синг",
    original: "Sing Sing",
    kinopoisk: "https://www.kinopoisk.ru/film/5378058/",
    director: [
      {
        name: "Грег Куидар",
      },
    ],
    cast: [
      {
        name: "Колман Доминго",
      },
      {
        name: "Кларенс Маклин",
      },
      {
        name: "Пол Рейси",
      },
    ],
    description:
      "Джон Уитфилд создаёт театральную труппу в тюрьме Синг-Синг, помогая заключённым через искусство.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 54,
    posters: 2,
  }, // синг-синг
  {
    release: new Date("2023-08-18"),
    publication: new Date("2023-09-29"),
    format: "фильм",
    grade: "C",
    title: "Синий Жук",
    original: "Blue Beetle",
    kinopoisk: "https://www.kinopoisk.ru/film/1219153/",
    director: [
      {
        name: "Анхель Мануэль Сото",
      },
    ],
    cast: [
      {
        name: "Шоло Маридуэнья",
      },
      {
        name: "Бруна Маркезини",
      },
      {
        name: "Дамиан Алькасар",
      },
    ],
    description:
      "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "dc",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // синий жук
  {
    release: new Date("2009-04-26"),
    publication: new Date("2020-02-16"),
    format: "фильм",
    grade: "love",
    title: "Сити-Айленд",
    original: "City Island",
    kinopoisk: "https://www.kinopoisk.ru/film/418802/",
    director: [
      {
        name: "Рэймонд Де Фелитта",
      },
    ],
    cast: [
      {
        name: "Энди Гарсиа",
      },
      {
        name: "Джулианна Маргулис",
      },
      {
        name: "Стивен Стрейт",
      },
      {
        name: "Эмили Мортимер",
      },
      {
        name: "Эзра Миллер",
      },
      {
        name: "Доминик Гарсиа-Лоридо",
      },
      {
        name: "Алан Аркин",
      },
    ],
    description:
      "История о необычной семье из Бронкса, где у каждого члена семьи есть свои секреты.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // сити-айленд
  {
    release: new Date("2018-08-10"),
    publication: new Date("2021-05-19"),
    format: "фильм",
    grade: "B",
    title: "Скейт-кухня",
    original: "Skate Kitchen",
    kinopoisk: "https://www.kinopoisk.ru/film/1098919/",
    director: [
      {
        name: "Кристал Мозелл",
      },
    ],
    cast: [
      {
        name: "Рейчел Винберг",
      },
      {
        name: "Деде Лавлэйс",
      },
      {
        name: "Кабрина Адамс",
      },
      {
        name: "Нина Моран",
      },
      {
        name: "Аджани Расселл",
      },
      {
        name: "Джейден Смит",
      },
    ],
    description:
      "17-летняя Камилла тайком катается на скейте вопреки запрету матери.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // скейт-кухня
  {
    release: new Date("2023-07-27"),
    publication: new Date("2023-11-07"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Скрежет металла",
    original: "Twisted Metal",
    kinopoisk: "https://www.kinopoisk.ru/series/4397762/",
    director: [
      {
        name: "Ретт Риз",
      },
      {
        name: "Майкл Джонатан Смит",
      },
      {
        name: "Пол Верник",
      },
    ],
    cast: [
      {
        name: "Энтони Маки",
      },
      {
        name: "Стефани Беатрис",
      },
    ],
    description:
      "Джон Доу должен доставить таинственную посылку через постапокалиптическую пустошь в обмен на лучшую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // скрежет металла 1
  {
    release: new Date("2016-05-20"),
    publication: new Date("2022-07-27"),
    format: "фильм",
    grade: "A+",
    title: "Славные парни",
    original: "The Nice Guys",
    kinopoisk: "https://www.kinopoisk.ru/film/841152/",
    director: [
      {
        name: "Шейн Блэк",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Рассел Кроу",
      },
      {
        name: "Ким Бейсингер",
      },
      {
        name: "Энгаури Райс",
      },
      {
        name: "Маргарет Куолли",
      },
    ],
    description:
      "Бандит и детектив расследуют смерть порнозвезды в Лос-Анджелесе 1970-х.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // славные парни
  {
    release: new Date("2000-01-12"),
    publication: new Date("2022-09-15"),
    format: "фильм",
    grade: "D",
    title: "Следующая пятница",
    original: "Next Friday",
    kinopoisk: "https://www.kinopoisk.ru/film/6106/",
    director: [
      {
        name: "Ф. Гэри Грей",
      },
    ],
    cast: [
      {
        name: "Айс Кьюб",
      },
      {
        name: "Майк Эппс",
      },
      {
        name: "Дон «Д.С.» Керри",
      },
      {
        name: "Том Листер мл.",
      },
      {
        name: "Джон Уизерспун",
      },
    ],
    description:
      "Отец отправляет Крейга Джонса пожить за городом у родни. На первый взгляд спокойный спальный район с приездом Крейга становится местом веселья.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // следующая пятница
  {
    release: new Date("2023-11-17"),
    publication: new Date("2024-01-28"),
    format: "фильм",
    grade: "C",
    title: "Следующий гол – победный",
    original: "Next Goal Wins",
    kinopoisk: "https://www.kinopoisk.ru/film/1318952/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Майкл Фассбендер",
      },
    ],
    description:
      "Футбольный тренер Томас Ронген приезжает в Американское Самоа, чтобы подготовить местную команду к отборочному циклу чемпионата мира.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // следующий гол победный
  {
    release: new Date("2004-10-01"),
    publication: new Date("2025-07-24"),
    format: "фильм",
    grade: "A",
    title: "Слоеный торт",
    original: "Layer Cake",
    kinopoisk: "https://www.kinopoisk.ru/film/47250/",
    director: [
      {
        name: "Мэттью Вон",
      },
    ],
    cast: [
      {
        name: "Дэниэл Крэйг",
      },
      {
        name: "Сиенна Миллер",
      },
      {
        name: "Колм Мини",
      },
      {
        name: "Майкл Гэмбон",
      },
      {
        name: "Джордж Харрис",
      },
      {
        name: "Том Харди",
      },
      {
        name: "Бен Уишоу",
      },
      {
        name: "Декстер Флетчер",
      },
      {
        name: "Салли Хокинс",
      },
      {
        name: "Берн Горман",
      },
    ],
    description:
      "В шаге от заветного выхода «на пенсию» опытный наркодилер получает от босса неожиданное поручение.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 51,
    posters: 3,
  }, // слоеный торт
  {
    release: new Date("1998-03-06"),
    publication: new Date("2023-02-01"),
    format: "фильм",
    grade: "B",
    title: "Служители закона",
    original: "U.S. Marshals",
    kinopoisk: "https://www.kinopoisk.ru/film/3901/",
    director: [
      {
        name: "Стюарт Бейрд",
      },
    ],
    cast: [
      {
        name: "Томми Ли Джонс",
      },
      {
        name: "Уэсли Снайпс",
      },
      {
        name: "Роберт Дауни мл.",
      },
    ],
    description:
      "Федеральному маршалу США и его команде поручено найти Шеридана, обвиняемого в двойном убийстве.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "триллер",
      },
      {
        genre: "криминал",
      },
      { genre: "шпионаж" },
    ],
    screenshots: 19,
    posters: 1,
  }, // служители закона
  {
    release: new Date("2025-03-28"),
    publication: new Date("2025-05-31"),
    format: "фильм",
    grade: "C",
    title: "Смерть единорога",
    original: "Death of a Unicorn",
    kinopoisk: "https://www.kinopoisk.ru/film/5445197/",
    director: [
      {
        name: "Алекс Шарфман",
      },
    ],
    cast: [
      {
        name: "Дженна Ортега",
      },
      {
        name: "Пол Радд",
      },
      {
        name: "Уилл Поултер",
      },
      {
        name: "Ричард Э. Грант",
      },
      {
        name: "Теа Леони",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Сунита Мани",
      },
    ],
    description:
      "Отец и дочь сбивают единорога и обнаруживают целительные свойства его крови.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фэнтези",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // смерть единорога
  {
    release: new Date("2010-04-16"),
    publication: new Date("2024-01-13"),
    format: "фильм",
    grade: "B",
    title: "Смерть на похоронах",
    original: "Death at a Funeral",
    kinopoisk: "https://www.kinopoisk.ru/film/450725/",
    director: [
      {
        name: "Нил Лабут",
      },
    ],
    cast: [
      {
        name: "Крис Рок",
      },
      {
        name: "Мартин Лоуренс",
      },
      {
        name: "Реджина Холл",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Джеймс Марсден",
      },
      {
        name: "Питер Динклэйдж",
      },
    ],
    description:
      "Похоронная церемония превращается в настоящий хаос из-за раскрытых семейных тайн.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // смерть на похоронах
  {
    release: new Date("2024-07-08"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "C",
    title: "Смерч 2",
    original: "Twisters",
    kinopoisk: "https://www.kinopoisk.ru/film/5388362/",
    director: [
      {
        name: "Ли Айзек Чун",
      },
    ],
    cast: [
      {
        name: "Дейзи Эдгар-Джонс",
      },
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Энтони Рамос",
      },
      {
        name: "Брэндон Переа",
      },
      {
        name: "Дэвид Коренсвет",
      },
    ],
    description:
      "Команда ученых исследуют смерчи. Оказавшись в эпицентре опасных штормов, им приходится бороться за свою жизнь.",
    genres: [
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // смерч 2
  {
    release: new Date("2023-09-29"),
    publication: new Date("2023-11-15"),
    format: "фильм",
    grade: "D",
    title: "Создатель",
    original: "The Creator",
    kinopoisk: "https://www.kinopoisk.ru/film/4499408/",
    director: [
      {
        name: "Гарет Эдвардс",
      },
    ],
    cast: [
      {
        name: "Джон Дэвид Вашингтон",
      },
      {
        name: "Мэделин Юна Войлс",
      },
      {
        name: "Джемма Чан",
      },
      {
        name: "Эллисон Дженни",
      },
      {
        name: "Кэн Ватанабэ",
      },
    ],
    description:
      "Бывший солдат находит секретное оружие — робота-ребёнка во время войны людей с ИИ.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // создатель
  {
    release: new Date("2022-09-16"),
    publication: new Date("2022-11-11"),
    format: "фильм",
    grade: "C",
    title: "Сознавайтесь, Флетч",
    original: "Confess, Fletch",
    kinopoisk: "https://www.kinopoisk.ru/film/1394147/",
    director: [
      {
        name: "Грег Моттола",
      },
    ],
    cast: [
      {
        name: "Джон Хэмм",
      },
      {
        name: "Лоренца Иззо",
      },
      {
        name: "Эйден Майери",
      },
      {
        name: "Рой Вуд мл.",
      },
      {
        name: "Кайл Маклоклен",
      },
      {
        name: "Джон Слэттери",
      },
    ],
    description:
      "Флетч — подозреваемый в убийстве — охотится за правдой и украденным искусством.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // сознавайтесь, флетч
  {
    release: new Date("2021-03-19"),
    publication: new Date("2021-04-24"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Сокол и Зимний Солдат",
    original: "The Falcon and the Winter Soldier",
    kinopoisk: "https://www.kinopoisk.ru/series/1209203/",
    director: [
      {
        name: "Малкольм Спэллман",
      },
    ],
    cast: [
      {
        name: "Энтони Маки",
      },
      {
        name: "Себастиан Стэн",
      },
      {
        name: "Уайатт Рассел",
      },
      {
        name: "Даниэль Брюль",
      },
      {
        name: "Эмили ВанКэмп",
      },
    ],
    description:
      "Сэм Уилсон становится новым Капитаном Америка и выполняет миссию Стива Роджерса.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "боевик",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // сокол и зимний солдат
  {
    release: new Date("2021-11-24"),
    publication: new Date("2022-01-03"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Соколиный глаз",
    original: "Hawkeye",
    kinopoisk: "https://www.kinopoisk.ru/series/1254069/",
    director: [
      {
        name: "Джонатан Игла",
      },
      {
        name: "Риз Томас",
      },
    ],
    cast: [
      {
        name: "Джереми Реннер",
      },
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Тони Далтон",
      },
      {
        name: "Вера Фармига",
      },
      {
        name: "Линда Карделлини",
      },
      {
        name: "Флоренс Пью",
      },
    ],
    description:
      "Клинт Бартон с Кейт Бишоп расследуют заговор из его прошлого, чтобы успеть домой на Рождество.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "криминал",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "новогодний",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // соколиный глаз
  {
    release: new Date("2003-09-26"),
    publication: new Date("2021-02-14"),
    format: "фильм",
    grade: "C",
    title: "Сокровище Амазонки",
    original: "The Rundown",
    kinopoisk: "https://www.kinopoisk.ru/film/5412/",
    director: [
      {
        name: "Питер Берг",
      },
    ],
    cast: [
      {
        name: "Дуэйн Джонсон",
      },
      {
        name: "Шонн Уильям Скотт",
      },
      {
        name: "Розарио Доусон",
      },
      {
        name: "Кристофер Уокен",
      },
    ],
    description:
      "Солдат получает задание найти сына заказчика, скрывающегося в джунглях Амазонки.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // сокровище амазонки
  {
    release: new Date("2004-11-19"),
    publication: new Date("2025-01-25"),
    format: "фильм",
    grade: "B",
    title: "Сокровище нации",
    original: "National Treasure",
    kinopoisk: "https://www.kinopoisk.ru/film/61333/",
    director: [
      {
        name: "Джон Тёртлтауб",
      },
    ],
    cast: [
      {
        name: "Николас Кейдж",
      },
      {
        name: "Дайан Крюгер",
      },
      {
        name: "Джастин Барта",
      },
      {
        name: "Шон Бин",
      },
      {
        name: "Джон Войт",
      },
      {
        name: "Харви Кейтель",
      },
    ],
    description: "Историк со своими товарищами ищет сокровище тамплиеров.",
    genres: [
      {
        genre: "приключения",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // сокровище нации
  {
    release: new Date("2007-12-21"),
    publication: new Date("2025-01-25"),
    format: "фильм",
    grade: "B",
    title: "Сокровище нации: Книга Тайн",
    original: "National Treasure: Book of Secrets",
    kinopoisk: "https://www.kinopoisk.ru/film/195408/",
    director: [
      {
        name: "Джон Тёртлтауб",
      },
    ],
    cast: [
      {
        name: "Николас Кейдж",
      },
      {
        name: "Дайан Крюгер",
      },
      {
        name: "Джастин Барта",
      },
      {
        name: "Эд Харрис",
      },
      {
        name: "Джон Войт",
      },
      {
        name: "Хелен Миррен",
      },
      {
        name: "Харви Кейтель",
      },
      {
        name: "Брюс Гринвуд",
      },
    ],
    description:
      "Охотник за сокровищами пытается доказать невиновность своего предка в убийстве Линкольна.",
    genres: [
      {
        genre: "приключения",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // сокровище нации: книга тайн
  {
    release: new Date("2008-08-13"),
    publication: new Date("2020-04-16"),
    format: "фильм",
    grade: "A",
    title: "Солдаты неудачи",
    original: "Tropic Thunder",
    kinopoisk: "https://www.kinopoisk.ru/film/278208/",
    director: [
      {
        name: "Бен Стиллер",
      },
    ],
    cast: [
      {
        name: "Бен Стиллер",
      },
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Джек Блэк",
      },
      {
        name: "Джей Барушель",
      },
      {
        name: "Брэндон Т. Джексон",
      },
      {
        name: "Том Круз",
      },
      {
        name: "Дэнни Макбрайд",
      },
      {
        name: "Ник Нолти",
      },
      {
        name: "Мэттью Макконахи",
      },
    ],
    description:
      "Из-за недоразумений актёры военной ленты вынуждены стать реальными солдатами вместо съёмок.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "военный",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 11,
    posters: 2,
  }, // солдаты неудачи
  {
    release: new Date("2022-10-21"),
    publication: new Date("2023-04-28"),
    format: "фильм",
    grade: "C",
    title: "Солнце моё",
    original: "Aftersun",
    kinopoisk: "https://www.kinopoisk.ru/film/4948281/",
    director: [
      {
        name: "Шарлотта Уэллс",
      },
    ],
    cast: [
      {
        name: "Пол Мескал",
      },
      {
        name: "Фрэнки Корио",
      },
    ],
    description: "Софи вспоминает летний отдых со своим отцом.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // солнце моё
  {
    release: new Date("2015-03-17"),
    publication: new Date("2023-12-03"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Кит Дэвид",
      },
      {
        name: "Пэйджет Брюстер",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 14,
    posters: 1,
  }, // сообщетсво 6
  {
    release: new Date("2014-01-02"),
    publication: new Date("2023-03-27"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Джонатан Бэнкс",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 13,
    posters: 1,
  }, // сообщетсво 5
  {
    release: new Date("2013-02-07"),
    publication: new Date("2023-03-20"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэвид Гарасио",
      },
      {
        name: "Моусес Порт",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 20,
    posters: 1,
  }, // сообщетсво 4
  {
    release: new Date("2011-09-22"),
    publication: new Date("2023-03-12"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 34,
    posters: 1,
  }, // сообщетсво 3
  {
    release: new Date("2010-09-23"),
    publication: new Date("2022-10-19"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 48,
    posters: 2,
  }, // сообщетсво 2
  {
    release: new Date("2009-09-17"),
    publication: new Date("2022-10-11"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 19,
    posters: 2,
  }, // сообщетсво 1
  {
    release: new Date("2006-03-12"),
    publication: new Date("2021-01-09"),
    format: "сериал",
    season: "6",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 17,
    posters: 2,
  }, // сопрано 6
  {
    release: new Date("2004-03-07"),
    publication: new Date("2020-12-31"),
    format: "сериал",
    season: "5",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
      {
        name: "Стив Бушеми",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 24,
    posters: 1,
  }, // сопрано 5
  {
    release: new Date("2002-09-15"),
    publication: new Date("2020-12-22"),
    format: "сериал",
    season: "4",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 24,
    posters: 1,
  }, // сопрано 4
  {
    release: new Date("2001-03-04"),
    publication: new Date("2020-11-30"),
    format: "сериал",
    season: "3",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 21,
    posters: 1,
  }, // сопрано 3
  {
    release: new Date("2000-01-16"),
    publication: new Date("2020-11-23"),
    format: "сериал",
    season: "2",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
      {
        name: "Нэнси Марчанд",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 29,
    posters: 1,
  }, // сопрано 2
  {
    release: new Date("1999-01-10"),
    publication: new Date("2020-11-18"),
    format: "сериал",
    season: "1",
    grade: "love",
    title: "Сопрано",
    original: "The Sopranos / Клан Сопрано",
    kinopoisk: "https://www.kinopoisk.ru/series/79848/",
    director: [
      {
        name: "Дэвид Чейз",
      },
    ],
    cast: [
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Лоррейн Бракко",
      },
      {
        name: "Майкл Империоли",
      },
      {
        name: "Роберт Айлер",
      },
      {
        name: "Джэми-Линн Сиглер",
      },
      {
        name: "Стив Ван Зандт",
      },
      {
        name: "Тони Сирико",
      },
      {
        name: "Нэнси Марчанд",
      },
    ],
    description:
      "Тони Сопрано, глава мафии из Нью-Джерси, страдает от проблем в семье и бизнесе, из-за чего начинает посещать психиатра.",
    genres: [
      {
        genre: "криминал",
      },
      { genre: "драма" },
    ],
    screenshots: 37,
    posters: 1,
  }, // сопрано 1
  {
    release: new Date("2016-03-18"),
    publication: new Date("2025-02-02"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Сорвиголова",
    original: "Daredevil",
    kinopoisk: "https://www.kinopoisk.ru/series/817509/",
    director: [
      {
        name: "Дрю Годдард",
      },
    ],
    cast: [
      {
        name: "Чарли Кокс",
      },
      {
        name: "Дебора Энн Уолл",
      },
      {
        name: "Элден Хенсон",
      },
      {
        name: "Джон Бернтал",
      },
      {
        name: "Элоди Юнг",
      },
      {
        name: "Скотт Гленн",
      },
    ],
    description:
      "Днем он — успешный адвокат, а ночью — мститель в маске по прозвищу Сорвиголова.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "криминал",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 46,
    posters: 1,
  }, // сорвиголова 2
  {
    release: new Date("2015-04-10"),
    publication: new Date("2024-03-02"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Сорвиголова",
    original: "Daredevil",
    kinopoisk: "https://www.kinopoisk.ru/series/817509/",
    director: [
      {
        name: "Дрю Годдард",
      },
    ],
    cast: [
      {
        name: "Чарли Кокс",
      },
      {
        name: "Дебора Энн Уолл",
      },
      {
        name: "Элден Хенсон",
      },
      {
        name: "Винсент Д’Онофрио",
      },
      {
        name: "Скотт Гленн",
      },
      {
        name: "Розарио Доусон",
      },
      {
        name: "Вонди Кёртис-Холл",
      },
    ],
    description:
      "Днем он — успешный адвокат, а ночью — мститель в маске по прозвищу Сорвиголова.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "криминал",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // сорвиголова 1
  {
    release: new Date("2004-02-18"),
    publication: new Date("2021-03-23"),
    format: "фильм",
    grade: "A+",
    title: "Соседка",
    original: "The Girl Next Door",
    kinopoisk: "https://www.kinopoisk.ru/film/6293/",
    director: [
      {
        name: "Люк Гринфилд",
      },
    ],
    cast: [
      {
        name: "Эмиль Хирш",
      },
      {
        name: "Элиша Катберт",
      },
      {
        name: "Тимоти Олифант",
      },
      {
        name: "Пол Дано",
      },
    ],
    description:
      "Мечты молодого человека сбываются, когда бывшая порноактриса переезжает в соседний дом.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 30,
    posters: 1,
  }, // соседка
  {
    release: new Date("2004-08-05"),
    publication: new Date("2025-07-23"),
    format: "фильм",
    grade: "B",
    title: "Соучастник",
    original: "Collateral",
    kinopoisk: "https://www.kinopoisk.ru/film/61325/",
    director: [
      {
        name: "Майкл Манн",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Джада Пинкетт Смит",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Питер Берг",
      },
      {
        name: "Хавьер Бардем",
      },
    ],
    description:
      "Лос-анджелесский таксист вынужден всю ночь развозить киллера по местам заказных убийств.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // соучастник
  {
    release: new Date("2010-10-01"),
    publication: new Date("2022-01-26"),
    format: "фильм",
    grade: "A+",
    title: "Социальная сеть",
    original: "The Social Network",
    kinopoisk: "https://www.kinopoisk.ru/film/427198/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Джесси Айзенберг",
      },
      {
        name: "Эндрю Гарфилд",
      },
      {
        name: "Джастин Тимберлейк",
      },
      {
        name: "Арми Хаммер",
      },
    ],
    description:
      "Как нелюдимый зануда из Гарварда создал самую популярную социальную сеть.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 27,
    posters: 1,
  }, // социальная сеть
  {
    release: new Date("2022-06-17"),
    publication: new Date("2022-06-18"),
    format: "фильм",
    grade: "D",
    title: "Спайдерхед",
    original: "Spiderhead",
    kinopoisk: "https://www.kinopoisk.ru/film/1450799/",
    director: [
      {
        name: "Джозеф Косински",
      },
    ],
    cast: [
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Майлз Теллер",
      },
      {
        name: "Джерни Смоллетт",
      },
    ],
    description:
      "Заключенные соглашаются на участие в сомнительном медицинском эксперименте.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 37,
    posters: 1,
  }, // спайдерхед
  {
    release: new Date("2023-12-22"),
    publication: new Date("2025-05-03"),
    format: "фильм",
    grade: "A+",
    title: "Стальная хватка",
    original: "The Iron Claw",
    kinopoisk: "https://www.kinopoisk.ru/film/5005446/",
    director: [
      {
        name: "Шон Дуркин",
      },
    ],
    cast: [
      {
        name: "Зак Эфрон",
      },
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Харрис Дикинсон",
      },
      {
        name: "Мора Тирни",
      },
      {
        name: "Лили Джеймс",
      },
      {
        name: "Холт Маккэллани",
      },
      {
        name: "Стэнли Саймонс",
      },
    ],
    description:
      "Жёсткий отец делает из сыновей суперзвёзд рестлинга. Настоящая история братьев фон Эрих.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 63,
    posters: 3,
  }, // стальная хватка
  {
    release: new Date("2007-11-21"),
    publication: new Date("2023-05-30"),
    format: "фильм",
    grade: "A",
    title: "Старикам тут не место",
    original: "No Country for Old Men",
    kinopoisk: "https://www.kinopoisk.ru/film/195434/",
    director: [
      {
        name: "Итан Коэн",
      },
      {
        name: "Джоэл Коэн",
      },
    ],
    cast: [
      {
        name: "Хавьер Бардем",
      },
      {
        name: "Джош Бролин",
      },
      {
        name: "Томми Ли Джонс",
      },
    ],
    description:
      "Обычный работяга обнаруживает в пустыне последствия неудачной сделки с наркотиками и сумму в два миллиона долларов наличными. Он решает взять деньги себе.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "вестерн",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 34,
    posters: 1,
  }, // старикам тут не место
  {
    release: new Date("2025-08-13"),
    publication: new Date("2025-08-24"),
    format: "фильм",
    grade: "C",
    title: "Стерилизован",
    original: "Fixed",
    kinopoisk: "https://www.kinopoisk.ru/film/4695962/",
    director: [
      {
        name: "Генндий Тартаковский",
      },
    ],
    cast: [
      {
        name: "Адам Дивайн",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Фред Армисен",
      },
      {
        name: "Бобби Мойнахан",
      },
    ],
    description:
      "Пёс узнаёт о предстоящей кастрации и решает провести последние сутки с друзьями на полную катушку.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // стерилизован
  {
    release: new Date("2005-05-06"),
    publication: new Date("2020-04-14"),
    format: "фильм",
    grade: "B",
    title: "Столкновение",
    original: "Crash",
    kinopoisk: "https://www.kinopoisk.ru/film/61297/",
    director: [
      {
        name: "Пол Хаггис",
      },
    ],
    cast: [
      {
        name: "Дон Чидл",
      },
      {
        name: "Мэтт Диллон",
      },
      {
        name: "Райан Филипп",
      },
      {
        name: "Терренс Ховард",
      },
      {
        name: "Сандра Буллок",
      },
      {
        name: "Тандиве Ньютон",
      },
      {
        name: "Брендан Фрейзер",
      },
      {
        name: "Майкл Пенья",
      },
      {
        name: "Лудакрис",
      },
      {
        name: "Дженнифер Эспозито",
      },
      {
        name: "Лоренц Тейт",
      },
    ],
    description:
      "Сборник взаимосвязанных историй о расовых конфликтах в Лос-Анджелесе.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 14,
    posters: 3,
  }, // столкновение
  {
    release: new Date("2023-05-05"),
    publication: new Date("2023-07-09"),
    format: "фильм",
    grade: "A+",
    title: "Стражи Галактики. Часть 3",
    original: "Guardians of the Galaxy Vol. 3",
    kinopoisk: "https://www.kinopoisk.ru/film/1044280/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Брэдли Купер",
      },
      {
        name: "Крис Пратт",
      },
      {
        name: "Карен Гиллан",
      },
      {
        name: "Пом Клементьефф",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Чукуди Ивуджи",
      },
      {
        name: "Уилл Поултер",
      },
    ],
    description:
      "Питер Квилл со Стражами Галактики отправляется на новую миссию.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "драма",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // стражи галактики 3
  {
    release: new Date("2014-08-01"),
    publication: new Date("2023-04-06"),
    format: "фильм",
    grade: "love",
    title: "Стражи Галактики",
    original: "Guardians of the Galaxy",
    kinopoisk: "https://www.kinopoisk.ru/film/689066/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Крис Пратт",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Брэдли Купер",
      },
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Карен Гиллан",
      },
      {
        name: "Ли Пейс",
      },
      {
        name: "Майкл Рукер",
      },
      {
        name: "Джимон Хонсу",
      },
    ],
    description:
      "Межгалактические преступники объединяются против фанатичного воина, задумавшего уничтожить вселенную.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 34,
    posters: 1,
  }, // стражи галактики
  {
    release: new Date("2020-11-06"),
    publication: new Date("2021-06-05"),
    format: "фильм",
    grade: "B",
    title: "Страна джунглей",
    original: "Jungleland",
    kinopoisk: "https://www.kinopoisk.ru/film/1174218/",
    director: [
      {
        name: "Макс Уинклер",
      },
    ],
    cast: [
      {
        name: "Чарли Ханнэм",
      },
      {
        name: "Джек О’Коннелл",
      },
      {
        name: "Джонатан Мейджорс",
      },
      {
        name: "Джессика Барден",
      },
    ],
    description: "Братья должны вернуть долг, выиграв в подпольных боях.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // страна джунглей
  {
    release: new Date("2023-02-03"),
    publication: new Date("2023-02-26"),
    format: "фильм",
    grade: "B",
    title: "Стук в хижине",
    original: "Knock at the Cabin",
    kinopoisk: "https://www.kinopoisk.ru/film/4675164/",
    director: [
      {
        name: "М. Найт Шьямалан",
      },
    ],
    cast: [
      {
        name: "Дэйв Батиста",
      },
      {
        name: "Джонатан Грофф",
      },
      {
        name: "Бен Элдридж",
      },
      {
        name: "Руперт Гринт",
      },
    ],
    description:
      "Счастливая пара с семилетней дочерью отдыхает в лесном коттедже у озера. Внезапно у них на пороге возникают четыре незнакомца.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // стук в хижине
  {
    release: new Date("2025-07-11"),
    publication: new Date("2025-08-26"),
    format: "фильм",
    grade: "A",
    title: "Супермен",
    original: "Superman",
    kinopoisk: "https://www.kinopoisk.ru/film/997647/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Дэвид Коренсвет",
      },
      {
        name: "Рэйчел Броснахэн",
      },
      {
        name: "Николас Холт",
      },
      {
        name: "Эди Гатеги",
      },
      {
        name: "Нэйтан Филлион",
      },
      {
        name: "Изабела Мерсед",
      },
      {
        name: "Скайлер Гизондо",
      },
      {
        name: "Мария Габриела де Фария",
      },
      {
        name: "Энтони Кэрриган",
      },
      {
        name: "Сара Сампайо",
      },
    ],
    description:
      "Кларк Кент ищет баланс между земной жизнью и криптонским наследием Супермена.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "dc",
      },
    ],
    screenshots: 50,
    posters: 2,
  }, // супермен
  {
    release: new Date("2022-07-29"),
    publication: new Date("2022-10-09"),
    format: "фильм",
    grade: "B",
    title: "Суперпитомцы",
    original: "DC League of Super-Pets",
    kinopoisk: "https://www.kinopoisk.ru/film/1189960/",
    director: [
      {
        name: "Джаред Штерн",
      },
      {
        name: "Сэм Ливайн",
      },
    ],
    cast: [
      {
        name: "Дуэйн Джонсон",
      },
      {
        name: "Кевин Харт",
      },
      {
        name: "Кейт Маккиннон",
      },
      {
        name: "Джон Красински",
      },
      {
        name: "Киану Ривз",
      },
      {
        name: "Наташа Лионн",
      },
      {
        name: "Диего Луна",
      },
      {
        name: "Оливия Уайлд",
      },
      {
        name: "Джамила Джамил",
      },
    ],
    description:
      "Пёс Крипто собирает команду животных-супергероев из приюта, чтобы спасти Лигу Справедливости от Лекса Лютора.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "dc",
      },
    ],
    screenshots: 33,
    posters: 3,
  }, // суперпитомцы
  {
    release: new Date("2018-06-15"),
    publication: new Date("2025-03-30"),
    format: "фильм",
    grade: "A+",
    title: "Суперсемейка 2",
    original: "Incredibles 2",
    kinopoisk: "https://www.kinopoisk.ru/film/839650/",
    director: [
      {
        name: "Брэд Бёрд",
      },
    ],
    cast: [
      {
        name: "Крэйг Т. Нельсон",
      },
      {
        name: "Холли Хантер",
      },
      {
        name: "Кэтрин Кинер",
      },
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
    ],
    description:
      "В семье супергероев роли меняются: мистер Исключительный сидит дома, пока Эластика спасает мир.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 87,
    posters: 1,
  }, // суперсемейка 2
  {
    release: new Date("2004-11-05"),
    publication: new Date("2025-03-29"),
    format: "фильм",
    grade: "A+",
    title: "Суперсемейка",
    original: "The Incredibles",
    kinopoisk: "https://www.kinopoisk.ru/film/38903/",
    director: [
      {
        name: "Брэд Бёрд",
      },
    ],
    cast: [
      {
        name: "Крэйг Т. Нельсон",
      },
      {
        name: "Холли Хантер",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Джейсон Ли",
      },
    ],
    description:
      "Скрывающие суперспособности герои возвращаются на защиту мира.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 27,
    posters: 4,
  }, // суперсемейка
  {
    release: new Date("2021-09-12"),
    publication: new Date("2021-10-20"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Сцены из супружеской жизни",
    original: "Scenes from a Marriage",
    kinopoisk: "https://www.kinopoisk.ru/series/1394680/",
    director: [
      {
        name: "Хагай Леви",
      },
    ],
    cast: [
      {
        name: "Джессика Честейн",
      },
      {
        name: "Оскар Айзек",
      },
    ],
    description:
      "Супруги переживают болезненный разрыв, хотя их чувства все еще живы.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // сцены из супружеской жизни
  {
    release: new Date("2006-04-07"),
    publication: new Date("2022-01-26"),
    format: "фильм",
    grade: "A+",
    title: "Счастливое число Слевина",
    original: "Lucky Number Slevin",
    kinopoisk: "https://www.kinopoisk.ru/film/86326/",
    director: [
      {
        name: "Пол Макгиган",
      },
    ],
    cast: [
      {
        name: "Джош Хартнетт",
      },
      {
        name: "Люси Лью",
      },
      {
        name: "Брюс Уиллис",
      },
      {
        name: "Морган Фриман",
      },
      {
        name: "Бен Кингсли",
      },
      {
        name: "Стэнли Туччи",
      },
    ],
    description: "Гангстеры втягивают обычного парня в войну кланов.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // счастливое число слевина
  {
    release: new Date("1996-02-16"),
    publication: new Date("2021-08-22"),
    format: "фильм",
    grade: "C",
    title: "Счастливчик Гилмор",
    original: "Happy Gilmore",
    kinopoisk: "https://www.kinopoisk.ru/film/3690/",
    director: [
      {
        name: "Деннис Дуган",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Кристофер Макдональд",
      },
      {
        name: "Джули Боуэн",
      },
      {
        name: "Карл Уэзерс",
      },
    ],
    description: "Хоккеист переходит в гольф, чтобы вернуть дом бабушки.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // счастливчик гилмор
  {
    release: new Date("2021-11-24"),
    publication: new Date("2022-03-08"),
    format: "фильм",
    grade: "B",
    title: "Сядь за руль моей машины",
    original: "Drive My Car / Doraibu mai ka",
    kinopoisk: "https://www.kinopoisk.ru/film/4382259/",
    director: [
      {
        name: "Рюсукэ Хамагути",
      },
    ],
    cast: [
      {
        name: "Хидэтоси Нисидзима",
      },
      {
        name: "Токо Миура",
      },
      {
        name: "Масаки Окада",
      },
      {
        name: "Пак Ю-рим",
      },
    ],
    description:
      "Театральный режиссер Юсукэ, переживающий личную трагедию, получает приглашение поставить «Дядю Ваню» в Хиросиме.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 26,
    posters: 2,
  }, // сядь за руль моей машины
  {
    release: new Date("2017-03-17"),
    publication: new Date("2021-03-21"),
    format: "фильм",
    grade: "C",
    title: "Т2 Трейнспоттинг",
    original: "T2 Trainspotting / На игле 2",
    kinopoisk: "https://www.kinopoisk.ru/film/744776/",
    director: [
      {
        name: "Дэнни Бойл",
      },
    ],
    cast: [
      {
        name: "Юэн Макгрегор",
      },
      {
        name: "Юэн Бремнер",
      },
      {
        name: "Джонни Ли Миллер",
      },
      {
        name: "Роберт Карлайл",
      },
      {
        name: "Келли Макдоналд",
      },
    ],
    description:
      "Марк Рентон спустя 20 лет воссоединяется с Сик Боем, Спудом и Бегби.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // т2 трейнспоттинг
  {
    release: new Date("2019-05-03"),
    publication: new Date("2020-04-17"),
    format: "фильм",
    grade: "B",
    title: "Та ещё парочка",
    original: "Long Shot",
    kinopoisk: "https://www.kinopoisk.ru/film/684983/",
    director: [
      {
        name: "Джонатан Левин",
      },
    ],
    cast: [
      {
        name: "Шарлиз Терон",
      },
      {
        name: "Сет Роген",
      },
      {
        name: "О’Ши Джексон мл.",
      },
      {
        name: "Александр Скарсгард",
      },
      {
        name: "Боб Оденкёрк",
      },
      {
        name: "Рэндалл Пак",
      },
    ],
    description:
      "Журналист-неудачник влюбляется в свою бывшую няню, которая собирается стать президентом.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // та ещё парочка
  {
    release: new Date("2019-06-07"),
    publication: new Date("2020-03-22"),
    format: "фильм",
    grade: "A",
    title: "Тайная жизнь домашних животных 2",
    original: "The Secret Life of Pets 2",
    kinopoisk: "https://www.kinopoisk.ru/film/995974/",
    director: [
      {
        name: "Крис Рено",
      },
      {
        name: "Джонатан дель Валь",
      },
    ],
    cast: [
      {
        name: "Пэттон Освальт",
      },
      {
        name: "Эрик Стоунстрит",
      },
      {
        name: "Кевин Харт",
      },
      {
        name: "Дженни Слейт",
      },
      {
        name: "Харрисон Форд",
      },
      {
        name: "Тиффани Хэддиш",
      },
    ],
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 45,
    posters: 2,
  }, // тайная жизнь домашних животных 2
  {
    release: new Date("1999-12-25"),
    publication: new Date("2024-05-13"),
    format: "фильм",
    grade: "C",
    title: "Талантливый мистер Рипли",
    original: "The Talented Mr. Ripley",
    kinopoisk: "https://www.kinopoisk.ru/film/5558/",
    director: [
      {
        name: "Энтони Мингелла",
      },
    ],
    cast: [
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Джуд Лоу",
      },
      {
        name: "Гвинет Пэлтроу",
      },
      {
        name: "Филип Сеймур Хоффман",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Джек Девенпорт",
      },
    ],
    description:
      "Богатый американец поручает Тому съездить в Италию и вернуть его транжирящего деньги сына в США. Когда миссия проваливается, Рипли идёт на крайние меры.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 50,
    posters: 1,
  }, // талантливый мистер рипли
  {
    release: new Date("2022-07-15"),
    publication: new Date("2022-10-07"),
    format: "фильм",
    grade: "C",
    title: "Там, где раки поют",
    original: "Where the Crawdads Sing",
    kinopoisk: "https://www.kinopoisk.ru/film/1396525/",
    director: [
      {
        name: "Оливия Ньюман",
      },
    ],
    cast: [
      {
        name: "Дейзи Эдгар-Джонс",
      },
      {
        name: "Тейлор Джон Смит",
      },
      {
        name: "Харрис Дикинсон",
      },
      {
        name: "Дэвид Стрэтэйрн",
      },
    ],
    description:
      "Жительницу болот Глубокого Юга подозревают в убийстве бывшего любовника.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 22,
    posters: 2,
  }, // там, где раки поют
  {
    release: new Date("2023-03-15"),
    publication: new Date("2023-06-11"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Тед Лассо",
    original: "Ted Lasso",
    kinopoisk: "https://www.kinopoisk.ru/series/1309707/",
    director: [
      {
        name: "Брендан Хант",
      },
      {
        name: "Джо Келли",
      },
      {
        name: "Билл Лоуренс",
      },
    ],
    cast: [
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Фил Данстер",
      },
      {
        name: "Бретт Голдстин",
      },
      {
        name: "Джуно Темпл",
      },
    ],
    description:
      "Тренер американского футбола Тед Лассо отправляется в Лондон, чтобы возглавить футбольный клуб “Ричмонд”, не имея опыта работы с европейским футболом.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // тед лассо 3
  {
    release: new Date("2021-07-23"),
    publication: new Date("2021-12-29"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Тед Лассо",
    original: "Ted Lasso",
    kinopoisk: "https://www.kinopoisk.ru/series/1309707/",
    director: [
      {
        name: "Брендан Хант",
      },
      {
        name: "Джо Келли",
      },
      {
        name: "Билл Лоуренс",
      },
    ],
    cast: [
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Фил Данстер",
      },
      {
        name: "Бретт Голдстин",
      },
      {
        name: "Джуно Темпл",
      },
    ],
    description:
      "Тренер американского футбола Тед Лассо отправляется в Лондон, чтобы возглавить футбольный клуб “Ричмонд”, не имея опыта работы с европейским футболом.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // тед лассо 2
  {
    release: new Date("2020-08-14"),
    publication: new Date("2020-10-11"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Тед Лассо",
    original: "Ted Lasso",
    kinopoisk: "https://www.kinopoisk.ru/series/1309707/",
    director: [
      {
        name: "Брендан Хант",
      },
      {
        name: "Джо Келли",
      },
      {
        name: "Билл Лоуренс",
      },
    ],
    cast: [
      {
        name: "Джейсон Судейкис",
      },
      {
        name: "Ханна Уоддингэм",
      },
      {
        name: "Фил Данстер",
      },
      {
        name: "Бретт Голдстин",
      },
      {
        name: "Джуно Темпл",
      },
    ],
    description:
      "Тренер американского футбола Тед Лассо отправляется в Лондон, чтобы возглавить футбольный клуб “Ричмонд”, не имея опыта работы с европейским футболом.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // тед лассо 1
  {
    release: new Date("2022-08-12"),
    publication: new Date("2022-10-03"),
    format: "фильм",
    grade: "D",
    title: "Тела, тела, тела",
    original: "Bodies Bodies Bodies",
    kinopoisk: "https://www.kinopoisk.ru/film/4496039/",
    director: [
      {
        name: "Халина Рейн",
      },
    ],
    cast: [
      {
        name: "Амандла Стенберг",
      },
      {
        name: "Мария Бакалова",
      },
      {
        name: "Майхала Херролд",
      },
      {
        name: "Рэйчел Сеннотт",
      },
      {
        name: "Чейз Суй Уондерс",
      },
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Ли Пейс",
      },
    ],
    description:
      "Во время урагана компания модной молодёжи устраивает смертельную игру в загородном особняке.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // тела, тела, тела
  {
    release: new Date("2024-05-07"),
    publication: new Date("2024-08-07"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Тёмная материя",
    original: "Dark Matter",
    kinopoisk: "https://www.kinopoisk.ru/series/5024113/",
    director: [
      {
        name: "Блейк Крауч",
      },
    ],
    cast: [
      {
        name: "Джоэл Эдгертон",
      },
      {
        name: "Дженнифер Коннелли",
      },
      {
        name: "Алиси Брага",
      },
      {
        name: "Джимми Симпсон",
      },
      {
        name: "Дайо Окенийи",
      },
    ],
    description:
      "Мужчина попадает в альтернативную реальность и отправляется в мучительное путешествие, чтобы спасти свою семью от самого страшного врага - себя.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 35,
    posters: 1,
  }, // темная материя
  {
    release: new Date("2008-07-18"),
    publication: new Date("2019-10-05"),
    format: "фильм",
    grade: "A",
    title: "Темный рыцарь",
    original: "The Dark Knight / Тёмный рыцарь",
    kinopoisk: "https://www.kinopoisk.ru/film/111543/",
    director: [
      {
        name: "Кристофер Нолан",
      },
    ],
    cast: [
      {
        name: "Кристиан Бэйл",
      },
      {
        name: "Хит Леджер",
      },
      {
        name: "Аарон Экхарт",
      },
      {
        name: "Мэгги Джилленхол",
      },
      {
        name: "Гари Олдман",
      },
      {
        name: "Майкл Кейн",
      },
      {
        name: "Морган Фриман",
      },
    ],
    description:
      "Джокер терроризирует Готэм, пытаясь вынудить Бэтмена раскрыть свою личность.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // темный рыцарь
  {
    release: new Date("2023-01-27"),
    publication: new Date("2023-04-05"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Терапия",
    original: "Shrinking",
    kinopoisk: "https://www.kinopoisk.ru/series/4675392/",
    director: [
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Билл Лоуренс",
      },
      {
        name: "Бретт Голдстин",
      },
    ],
    cast: [
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Джессика Уильямс",
      },
      {
        name: "Харрисон Форд",
      },
      {
        name: "Криста Миллер",
      },
      {
        name: "Люк Тенни",
      },
      {
        name: "Лукита Максвелл",
      },
    ],
    description:
      "Убитый горем психотерапевт начинает говорить своим клиентам то, что думает.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 19,
    posters: 1,
  }, // терапия 1
  {
    release: new Date("2024-06-28"),
    publication: new Date("2024-08-10"),
    format: "фильм",
    grade: "B",
    title: "Тихое место: День первый",
    original: "A Quiet Place: Day One",
    kinopoisk: "https://www.kinopoisk.ru/film/1451347/",
    director: [
      {
        name: "Майкл Сарноски",
      },
    ],
    cast: [
      {
        name: "Лупита Нионго",
      },
      {
        name: "Джозеф Куинн",
      },
      {
        name: "Алекс Вулф",
      },
      {
        name: "Джимон Хонсу",
      },
    ],
    description:
      "На Землю напали хищные монстры со сверхчувствительным слухом.",
    genres: [
      {
        genre: "ужасы",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // тихое место: день первый
  {
    release: new Date("2022-05-27"),
    publication: new Date("2025-03-02"),
    format: "фильм",
    grade: "A+",
    title: "Топ Ган: Мэверик",
    original: "Top Gun: Maverick",
    kinopoisk: "https://www.kinopoisk.ru/film/572032/",
    director: [
      {
        name: "Джозеф Косински",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Майлз Теллер",
      },
      {
        name: "Дженнифер Коннелли",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Моника Барбаро",
      },
      {
        name: "Льюис Пуллман",
      },
      {
        name: "Чарльз Парнелл",
      },
      {
        name: "Дэнни Рамирес",
      },
      {
        name: "Грег Тарзан Дэвис",
      },
      {
        name: "Вэл Килмер",
      },
    ],
    description:
      "Мэверик тренирует выпускников Top Gun для опасной миссии и сталкивается с прошлым.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 96,
    posters: 1,
  }, // топ ган: мэверик
  {
    release: new Date("2017-11-03"),
    publication: new Date("2021-07-24"),
    format: "фильм",
    grade: "love",
    title: "Тор: Рагнарёк",
    original: "Thor: Ragnarok",
    kinopoisk: "https://www.kinopoisk.ru/film/822709/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Том Хиддлстон",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Тесса Томпсон",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Джефф Голдблюм",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Карл Урбан",
      },
      {
        name: "Энтони Хопкинс",
      },
    ],
    description:
      "Тор, попав в плен на планете Сакаар, должен спасти Асгард от уничтожения Хелой.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
      {
        genre: "комедия",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 29,
    posters: 1,
  }, // тор рагнарёк
  {
    release: new Date("2022-07-08"),
    publication: new Date("2022-09-14"),
    format: "фильм",
    grade: "C",
    title: "Тор: Любовь и гром",
    original: "Thor: Love and Thunder",
    kinopoisk: "https://www.kinopoisk.ru/film/1282688/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Натали Портман",
      },
      {
        name: "Кристиан Бэйл",
      },
      {
        name: "Тесса Томпсон",
      },
    ],
    description:
      "Тор воссоединяется с Валькирией и своей бывшей девушкой Джейн Фостер, чтобы противостоять убийце богов Горру.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
      {
        genre: "комедия",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // тор любовь и гром
  {
    release: new Date("2025-01-17"),
    publication: new Date("2025-04-29"),
    format: "фильм",
    grade: "D",
    title: "Тот самый день",
    original: "One of Them Days / Один из этих дней",
    kinopoisk: "https://www.kinopoisk.ru/film/7002807/",
    director: [
      {
        name: "Лоуренс Ламонт",
      },
    ],
    cast: [
      {
        name: "Кеке Палмер",
      },
      {
        name: "SZA",
      },
      {
        name: "Мод Апатоу",
      },
      {
        name: "Дуэйн Перкинс",
      },
    ],
    description:
      "Подруги Дрю и Алисса спасаются от выселения после того, как парень Алиссы просадил их арендную плату.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 15,
    posters: 3,
  }, // тот самый день
  {
    release: new Date("2021-12-25"),
    publication: new Date("2022-01-16"),
    format: "фильм",
    grade: "B",
    title: "Трагедия Макбета",
    original: "The Tragedy of Macbeth",
    kinopoisk: "https://www.kinopoisk.ru/film/1253387/",
    director: [
      {
        name: "Джоэл Коэн",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
      {
        name: "Алекс Хэсселл",
      },
      {
        name: "Брендан Глисон",
      },
      {
        name: "Кори Хокинс",
      },
    ],
    description:
      "Ведьмы предсказывают шотландскому лорду королевский престол, а его жена одобряет планы захвата власти.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 54,
    posters: 2,
  }, // трагедия макбета
  {
    release: new Date("2023-06-09"),
    publication: new Date("2023-07-17"),
    format: "фильм",
    grade: "B",
    title: "Трансформеры: Восхождение Звероботов",
    original: "Transformers: Rise of the Beasts",
    kinopoisk: "https://www.kinopoisk.ru/film/937438/",
    director: [
      {
        name: "Стивен Кейпл мл.",
      },
    ],
    cast: [
      {
        name: "Энтони Рамос",
      },
      {
        name: "Доминик Фишбэк",
      },
      {
        name: "Питер Каллен",
      },
      {
        name: "Рон Перлман",
      },
      {
        name: "Питер Динклэйдж",
      },
      {
        name: "Мишель Йео",
      },
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Джон Ди Маджио",
      },
    ],
    description:
      "В 90-х новая фракция Трансформеров — Максималы — присоединяется к Автоботам в битве за Землю.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // трансформеры: восхождение звероботов
  {
    release: new Date("2024-09-20"),
    publication: new Date("2025-02-22"),
    format: "фильм",
    grade: "A",
    title: "Трансформеры: Начало",
    original: "Transformers One",
    kinopoisk: "https://www.kinopoisk.ru/film/1229682/",
    director: [
      {
        name: "Джош Кули",
      },
    ],
    cast: [
      {
        name: "Крис Хемсворт",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Кигэн-Майкл Ки",
      },
      {
        name: "Стив Бушеми",
      },
      {
        name: "Джон Хэмм",
      },
    ],
    description:
      "Оптимус Прайм и Мегатрон — бывшие друзья, изменившие судьбу Кибертрона.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 24,
    posters: 3,
  }, // трансформеры: начало
  {
    release: new Date("2001-10-05"),
    publication: new Date("2025-01-25"),
    format: "фильм",
    grade: "A+",
    title: "Тренировочный день",
    original: "Training Day",
    kinopoisk: "https://www.kinopoisk.ru/film/863/",
    director: [
      {
        name: "Антуан Фукуа",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Итан Хоук",
      },
      {
        name: "Скотт Гленн",
      },
      {
        name: "Клифф Кёртис",
      },
      {
        name: "Ева Мендес",
      },
    ],
    description:
      "Новичок полиции Лос-Анджелеса встречает загадочного детектива в первый день работы.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 44,
    posters: 3,
  }, // тренировочный день
  {
    release: new Date("2024-01-11"),
    publication: new Date("2024-03-28"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Третий лишний",
    original: "Ted",
    kinopoisk: "https://www.kinopoisk.ru/series/4475348/",
    director: [
      {
        name: "Сет Макфарлейн",
      },
    ],
    cast: [
      {
        name: "Сет Макфарлейн",
      },
      {
        name: "Макс Буркхолдер",
      },
    ],
    description:
      "На дворе 1993 год, и момент славы медвежонка Теда миновал. Он живет дома со своим лучшим другом Джоном Беннеттом и его семьей.",
    genres: [
      {
        genre: "комедия",
      },
      { genre: "ситком" },
    ],
    screenshots: 12,
    posters: 1,
  }, // третий лишний 1
  {
    release: new Date("2015-06-26"),
    publication: new Date("2020-03-28"),
    format: "фильм",
    grade: "A",
    title: "Третий лишний 2",
    original: "Ted 2",
    kinopoisk: "https://www.kinopoisk.ru/film/731691/",
    director: [
      {
        name: "Сет Макфарлейн",
      },
    ],
    cast: [
      {
        name: "Марк Уолберг",
      },
      {
        name: "Сет Макфарлейн",
      },
      {
        name: "Аманда Сайфред",
      },
      {
        name: "Джованни Рибизи",
      },
      {
        name: "Морган Фриман",
      },
    ],
    description:
      "Плюшевый медведь борется за свои права и пытается завести детей.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 2,
  }, // третий лишний 2
  {
    release: new Date("2022-05-21"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "A",
    title: "Треугольник печали",
    original: "Triangle of Sadness",
    kinopoisk: "https://www.kinopoisk.ru/film/1348487/",
    director: [
      {
        name: "Рубен Эстлунд",
      },
    ],
    cast: [
      {
        name: "Харрис Дикинсон",
      },
      {
        name: "Шарлби Дин",
      },
      {
        name: "Вуди Харрельсон",
      },
    ],
    description:
      "Пара фотомоделей отправляется в насыщенный событиями круиз для сверхбогатых.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // треугольник печали
  {
    release: new Date("1999-10-01"),
    publication: new Date("2020-04-13"),
    format: "фильм",
    grade: "B",
    title: "Три короля",
    original: "Three Kings",
    kinopoisk: "https://www.kinopoisk.ru/film/4987/",
    director: [
      {
        name: "Дэвид О. Расселл",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Марк Уолберг",
      },
      {
        name: "Айс Кьюб",
      },
      {
        name: "Спайк Джонс",
      },
      {
        name: "Клифф Кёртис",
      },
    ],
    description:
      "После войны в Персидском заливе четверо солдат ищут похищенное кувейтское золото.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "драма",
      },
      {
        genre: "военный",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // три короля
  {
    release: new Date("2019-03-06"),
    publication: new Date("2019-04-06"),
    format: "фильм",
    grade: "C",
    title: "Тройная граница",
    original: "Triple Frontier",
    kinopoisk: "https://www.kinopoisk.ru/film/470464/",
    director: [
      {
        name: "Джей Си Чендор",
      },
    ],
    cast: [
      {
        name: "Оскар Айзек",
      },
      {
        name: "Чарли Ханнэм",
      },
      {
        name: "Бен Аффлек",
      },
      {
        name: "Гаррет Хедлунд",
      },
      {
        name: "Педро Паскаль",
      },
      {
        name: "Адриа Архона",
      },
    ],
    description: "Пятеро бывших спецагентов решаются ограбить наркобарона.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 12,
    posters: 1,
  }, // тройная граница
  {
    release: new Date("1996-10-18"),
    publication: new Date("2021-02-16"),
    format: "фильм",
    grade: "C",
    title: "Тусовщики",
    original: "Swingers",
    kinopoisk: "https://www.kinopoisk.ru/film/4449/",
    director: [
      {
        name: "Даг Лайман",
      },
    ],
    cast: [
      {
        name: "Джон Фавро",
      },
      {
        name: "Винс Вон",
      },
      {
        name: "Рон Ливингстон",
      },
    ],
    description:
      "Начинающий актёр не может забыть расставание, но друзья его поддерживают.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 2,
  }, // тусовщики
  {
    release: new Date("2023-02-09"),
    publication: new Date("2023-04-14"),
    format: "сериал",
    season: "4",
    grade: "B",
    title: "Ты",
    original: "You",
    kinopoisk: "https://www.kinopoisk.ru/series/1115630/",
    director: [
      {
        name: "Грег Берланти",
      },
      {
        name: "Сера Гэмбл",
      },
    ],
    cast: [
      {
        name: "Пенн Бэджли",
      },
      {
        name: "Тати Габриэль",
      },
      {
        name: "Шарлотта Ричи",
      },
      {
        name: "Эд Спелирс",
      },
    ],
    description: "Обаятельный молодой человек готов на всё ради любви.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 26,
    posters: 1,
  }, // ты 4
  {
    release: new Date("2021-10-15"),
    publication: new Date("2022-01-14"),
    format: "сериал",
    season: "3",
    grade: "B",
    title: "Ты",
    original: "You",
    kinopoisk: "https://www.kinopoisk.ru/series/1115630/",
    director: [
      {
        name: "Грег Берланти",
      },
      {
        name: "Сера Гэмбл",
      },
    ],
    cast: [
      {
        name: "Пенн Бэджли",
      },
      {
        name: "Виктория Педретти",
      },
      {
        name: "Тати Габриэль",
      },
    ],
    description: "Обаятельный молодой человек готов на всё ради любви.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // ты 3
  {
    release: new Date("2019-12-26"),
    publication: new Date("2020-02-09"),
    format: "сериал",
    season: "2",
    grade: "B",
    title: "Ты",
    original: "You",
    kinopoisk: "https://www.kinopoisk.ru/series/1115630/",
    director: [
      {
        name: "Грег Берланти",
      },
      {
        name: "Сера Гэмбл",
      },
    ],
    cast: [
      {
        name: "Пенн Бэджли",
      },
      {
        name: "Виктория Педретти",
      },
      {
        name: "Джеймс Скалли",
      },
      {
        name: "Эмбир Чилдерс",
      },
    ],
    description: "Обаятельный молодой человек готов на всё ради любви.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // ты 2
  {
    release: new Date("2018-09-09"),
    publication: new Date("2020-01-20"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Ты",
    original: "You",
    kinopoisk: "https://www.kinopoisk.ru/series/1115630/",
    director: [
      {
        name: "Грег Берланти",
      },
      {
        name: "Сера Гэмбл",
      },
    ],
    cast: [
      {
        name: "Пенн Бэджли",
      },
      {
        name: "Элизабет Лэил",
      },
    ],
    description: "Обаятельный молодой человек готов на всё ради любви.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // ты 1
  {
    release: new Date("2023-03-31"),
    publication: new Date("2024-03-18"),
    format: "фильм",
    grade: "A",
    title: "Тысяча и один",
    original: "A Thousand and One",
    kinopoisk: "https://www.kinopoisk.ru/film/1431429/",
    director: [
      {
        name: "А.В. Рокуэлл",
      },
    ],
    cast: [
      {
        name: "Тейяна Тейлор",
      },
      {
        name: "Джозиа Кросс",
      },
      {
        name: "Уильям Кэтлетт",
      },
    ],
    description:
      "Инес похищает своего сына из приёмной семьи и пытается обеспечить ему лучшую жизнь.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 50,
    posters: 1,
  }, // тысяча и один
  {
    release: new Date("2020-06-19"),
    publication: new Date("2022-05-27"),
    format: "фильм",
    grade: "B",
    title: "Убийственная внешность",
    original: "Looks That Kill",
    kinopoisk: "https://www.kinopoisk.ru/film/1141950/",
    director: [
      {
        name: "Келлен Мур",
      },
    ],
    cast: [
      {
        name: "Брэндон Флинн",
      },
      {
        name: "Джулия Голден Теллес",
      },
    ],
    description:
      "Из-за своей смертельно опасной красоты Макс вынужден жить затворником, пока однажды не встречает Алекс.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // убийственная внешность
  {
    release: new Date("2023-10-27"),
    publication: new Date("2023-11-11"),
    format: "фильм",
    grade: "A",
    title: "Убийца",
    original: "The Killer",
    kinopoisk: "https://www.kinopoisk.ru/film/462656/",
    director: [
      {
        name: "Дэвид Финчер",
      },
    ],
    cast: [
      {
        name: "Майкл Фассбендер",
      },
    ],
    description:
      "Киллер охотится за жертвой в Париже, но промах превращает его самого в мишень, вынуждая идти против своих заказчиков.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // убийца
  {
    release: new Date("2005-03-25"),
    publication: new Date("2020-04-15"),
    format: "фильм",
    grade: "B",
    title: "Угадай, кто?",
    original: "Guess Who",
    kinopoisk: "https://www.kinopoisk.ru/film/47257/",
    director: [
      {
        name: "Кевин Родни Салливан",
      },
    ],
    cast: [
      {
        name: "Берни Мак",
      },
      {
        name: "Эштон Кутчер",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Джудит Скотт",
      },
    ],
    description: "Тереза знакомит родителей с белым женихом Саймоном.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // угадай, кто?
  {
    release: new Date("2022-08-05"),
    publication: new Date("2022-08-13"),
    format: "фильм",
    grade: "C",
    title: "Удача",
    original: "Luck",
    kinopoisk: "https://www.kinopoisk.ru/film/1087904/",
    director: [
      {
        name: "Пегги Холмс",
      },
      {
        name: "Хавьер Абад",
      },
    ],
    cast: [
      {
        name: "Эва Ноблесада",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Джейн Фонда",
      },
      {
        name: "Вупи Голдберг",
      },
    ],
    description: "Самая неудачливая девочка обретает удачу в волшебной стране.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // удача
  {
    release: new Date("2004-09-17"),
    publication: new Date("2025-06-14"),
    format: "фильм",
    grade: "C",
    title: "Уимблдон",
    original: "Wimbledon",
    kinopoisk: "https://www.kinopoisk.ru/film/19174/",
    director: [
      {
        name: "Ричард Лонкрэйн",
      },
    ],
    cast: [
      {
        name: "Пол Беттани",
      },
      {
        name: "Кирстен Данст",
      },
      {
        name: "Сэм Нил",
      },
      {
        name: "Джон Фавро",
      },
      {
        name: "Николай Костер-Вальдау",
      },
      {
        name: "Джеймс Макэвой",
      },
      {
        name: "Остин Николс",
      },
    ],
    description:
      "Теннисист, потерявший форму, влюбляется в молодую спортсменку, и это помогает ему вернуться в игру и добиться успеха на Уимблдонее.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // уимблдон
  {
    release: new Date("2019-05-17"),
    publication: new Date("2019-05-28"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Уловка-22",
    original: "Catch-22",
    kinopoisk: "https://www.kinopoisk.ru/series/1134613/",
    director: [
      {
        name: "Люк Дейвис",
      },
      {
        name: "Дэвид Мишо",
      },
      {
        name: "Джордж Клуни",
      },
    ],
    cast: [
      {
        name: "Кристофер Эбботт",
      },
      {
        name: "Кайл Чендлер",
      },
      {
        name: "Рафи Гаврон",
      },
      {
        name: "Остин Стоуэлл",
      },
      {
        name: "Льюис Пуллман",
      },
    ],
    description:
      "Военный лётчик думает избавиться от службы, сославшись на невменяемость.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "военный",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // уловка-22
  {
    release: new Date("1999-09-17"),
    publication: new Date("2021-02-25"),
    format: "фильм",
    grade: "B",
    title: "Ураган",
    original: "The Hurricane",
    kinopoisk: "https://www.kinopoisk.ru/film/4914/",
    director: [
      {
        name: "Норман Джуисон",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Виселос Реон Шеннон",
      },
      {
        name: "Дебора Кара Ангер",
      },
    ],
    description: "Темнокожий боксер ложно обвинен в убийстве.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // ураган
  {
    release: new Date("2023-10-13"),
    publication: new Date("2023-11-27"),
    format: "сериал",
    season: "мини–сериал",
    grade: "B",
    title: "Уроки химии",
    original: "Lessons in Chemistry",
    kinopoisk: "https://www.kinopoisk.ru/series/4367624/",
    director: [
      {
        name: "Ли Айзенберг",
      },
    ],
    cast: [
      {
        name: "Бри Ларсон",
      },
      {
        name: "Льюис Пуллман",
      },
      {
        name: "Эйджа Наоми Кинг",
      },
    ],
    description:
      "В 1950-х годах женщина-учёная, столкнувшись с предрассудками о месте женщины только на кухне, получает работу в кулинарном шоу, где планирует просвещать домохозяек основам науки через приготовление пищи.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 19,
    posters: 2,
  }, // уроки химии
  {
    release: new Date("2011-08-12"),
    publication: new Date("2020-04-17"),
    format: "фильм",
    grade: "B",
    title: "Успеть за 30 минут",
    original: "30 Minutes or Less",
    kinopoisk: "https://www.kinopoisk.ru/film/506133/",
    director: [
      {
        name: "Рубен Фляйшер",
      },
    ],
    cast: [
      {
        name: "Джесси Айзенберг",
      },
      {
        name: "Азиз Ансари",
      },
      {
        name: "Дэнни Макбрайд",
      },
      {
        name: "Майкл Пенья",
      },
    ],
    description:
      "Преступники похищают разносчика пиццы и приковывают к нему бомбу, требуя ограбить банк за 10 часов.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 11,
    posters: 3,
  }, // успеть за 30 минут
  {
    release: new Date("2025-02-14"),
    publication: new Date("2025-02-22"),
    format: "фильм",
    grade: "C",
    title: "Ущелье",
    original: "The Gorge",
    kinopoisk: "https://www.kinopoisk.ru/film/5098653/",
    director: [
      {
        name: "Скотт Дерриксон",
      },
    ],
    cast: [
      {
        name: "Майлз Теллер",
      },
      {
        name: "Аня Тейлор-Джой",
      },
      {
        name: "Сигурни Уивер",
      },
    ],
    description:
      "Элитным снайперам поручают охранять противоположные стороны таинственного ущелья.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 48,
    posters: 2,
  }, // ущелье
  {
    release: new Date("2022-10-21"),
    publication: new Date("2022-11-02"),
    format: "фильм",
    grade: "C",
    title: "Уэнделл и Уайлд",
    original: "Wendell and Wild",
    kinopoisk: "https://www.kinopoisk.ru/film/1115174/",
    director: [
      {
        name: "Генри Селик",
      },
    ],
    cast: [
      {
        name: "Лирик Росс",
      },
      {
        name: "Кигэн-Майкл Ки",
      },
      {
        name: "Джордан Пил",
      },
      {
        name: "Анджела Бассетт",
      },
    ],
    description:
      "Два хитрых демона просят 13-летнюю Кэт вызвать их в мир живых.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 11,
    posters: 2,
  }, // уэнделл и уайлд
  {
    release: new Date("2022-11-23"),
    publication: new Date("2023-02-19"),
    format: "фильм",
    grade: "D",
    title: "Фабельманы",
    original: "The Fabelmans",
    kinopoisk: "https://www.kinopoisk.ru/film/4472502/",
    director: [
      {
        name: "Стивен Спилберг",
      },
    ],
    cast: [
      {
        name: "Гэбриел ЛаБелль",
      },
      {
        name: "Мишель Уильямс",
      },
      {
        name: "Пол Дано",
      },
      {
        name: "Сет Роген",
      },
      {
        name: "Джулия Баттерз",
      },
    ],
    description:
      "Подросток из Аризоны, Сэмми Фабельман, мечтает стать кинорежиссером.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 26,
    posters: 1,
  }, // фабельманы
  {
    release: new Date("2000-03-31"),
    publication: new Date("2020-04-07"),
    format: "фильм",
    grade: "B",
    title: "Фанатик",
    original: "High Fidelity",
    kinopoisk: "https://www.kinopoisk.ru/film/698/",
    director: [
      {
        name: "Стивен Фрирз",
      },
    ],
    cast: [
      {
        name: "Джон Кьюсак",
      },
      {
        name: "Тодд Луисо",
      },
      {
        name: "Джек Блэк",
      },
      {
        name: "Лиза Боне",
      },
      {
        name: "Кэтрин Зета-Джонс",
      },
    ],
    description:
      "Роб — владелец музыкального магазина, вспоминающий свои пять главных расставаний.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 13,
    posters: 1,
  }, // фанатик
  {
    release: new Date("2005-07-08"),
    publication: new Date("2025-07-14"),
    format: "фильм",
    grade: "B",
    title: "Фантастическая четверка",
    original: "Fantastic Four",
    kinopoisk: "https://www.kinopoisk.ru/film/23263/",
    director: [
      {
        name: "Тим Стори",
      },
    ],
    cast: [
      {
        name: "Йоан Гриффит",
      },
      {
        name: "Джессика Альба",
      },
      {
        name: "Крис Эванс",
      },
      {
        name: "Майкл Чиклис",
      },
      {
        name: "Джулиан Макмэхон",
      },
    ],
    description:
      "Четверо космонавтов получают уникальные суперсилы после облучения в космосе.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 42,
    posters: 3,
  }, // фантастическая четверка (2005)
  {
    release: new Date("2023-11-21"),
    publication: new Date("2024-01-28"),
    format: "сериал",
    season: "5",
    grade: "B",
    title: "Фарго",
    original: "Fargo",
    kinopoisk: "https://www.kinopoisk.ru/series/767379/",
    director: [
      {
        name: "Ной Хоули",
      },
    ],
    cast: [
      {
        name: "Джуно Темпл",
      },
      {
        name: "Джон Хэмм",
      },
      {
        name: "Дженнифер Джейсон Ли",
      },
      {
        name: "Джо Кири",
      },
      {
        name: "Рича Мурджани",
      },
      {
        name: "Сэм Спруэлл",
      },
    ],
    description:
      "2019 год, Миннесота, штат Северная Дакота. Домохозяйку Дот Лайонс похищают средь бела дня неизвестные.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // фарго 5
  {
    release: new Date("2020-09-18"),
    publication: new Date("2023-09-19"),
    format: "фильм",
    grade: "C",
    title: "Фестиваль Рифкина",
    original: "Rifkin's Festival",
    kinopoisk: "https://www.kinopoisk.ru/film/1169702/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Уоллес Шоун",
      },
      {
        name: "Джина Гершон",
      },
      {
        name: "Елена Анайя",
      },
      {
        name: "Луи Гаррель",
      },
    ],
    description:
      "Супружеская пара из Сша отправляется на фестиваль в Сан-Себастьян и попадает под влияние магии кино.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // фестиваль рифкина
  {
    release: new Date("2021-11-05"),
    publication: new Date("2023-07-29"),
    format: "фильм",
    grade: "B",
    title: "Финч",
    original: "Finch",
    kinopoisk: "https://www.kinopoisk.ru/film/823616/",
    director: [
      {
        name: "Мигель Сапочник",
      },
    ],
    cast: [
      {
        name: "Том Хэнкс",
      },
      {
        name: "Калеб Лэндри Джонс",
      },
    ],
    description:
      "В постапокалиптическом мире робот, созданный для защиты собаки своего создателя, познаёт человеческие чувства.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // финч
  {
    release: new Date("2025-03-07"),
    publication: new Date("2025-05-03"),
    format: "сериал",
    season: "7",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 47,
    posters: 1,
  }, // формула 1. драйв выживания 7
  {
    release: new Date("2024-02-23"),
    publication: new Date("2024-07-21"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // формула 1. драйв выживания 6
  {
    release: new Date("2023-02-24"),
    publication: new Date("2024-07-14"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // формула 1. драйв выживания 5
  {
    release: new Date("2022-03-11"),
    publication: new Date("2024-06-07"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // формула 1. драйв выживания 4
  {
    release: new Date("2021-03-19"),
    publication: new Date("2024-05-29"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // формула 1. драйв выживания 3
  {
    release: new Date("2020-02-28"),
    publication: new Date("2023-07-08"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // формула 1. драйв выживания 2
  {
    release: new Date("2019-03-08"),
    publication: new Date("2023-07-02"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // формула 1. драйв выживания 1
  {
    release: new Date("2001-06-22"),
    publication: new Date("2022-02-22"),
    format: "фильм",
    grade: "A",
    title: "Форсаж",
    original: "The Fast and the Furious",
    kinopoisk: "https://www.kinopoisk.ru/film/666/",
    director: [
      {
        name: "Роб Коэн",
      },
    ],
    cast: [
      {
        name: "Пол Уокер",
      },
      {
        name: "Вин Дизель",
      },
      {
        name: "Мишель Родригес",
      },
      {
        name: "Джордана Брюстер",
      },
      {
        name: "Рик Юн",
      },
    ],
    description:
      "Офицер полиции Лос-Анджелеса Брайан О'Коннер должен втереться в доверие к Доминику Торетто, главарю автобанды, подозреваемому в причастности к грабежам грузовиков.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // форсаж
  {
    release: new Date("2021-10-29"),
    publication: new Date("2022-01-04"),
    format: "фильм",
    grade: "A",
    title:
      "Французский вестник. Приложение к газете «Либерти. Канзас ивнинг сан»",
    original: "The French Dispatch of the Liberty, Kansas Evening Sun",
    kinopoisk: "https://www.kinopoisk.ru/film/1211076/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Билл Мюррей",
      },
      {
        name: "Бенисио Дель Торо",
      },
      {
        name: "Леа Сейду",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Джеффри Райт",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Матьё Амальрик",
      },
      {
        name: "Эдвард Нортон",
      },
      {
        name: "Сирша Ронан",
      },
    ],
    description:
      "Собрание историй, опубликованных на страницах последнего выпуска американского журнала, который выходил в свет в вымышленном французском городе в середине XX века.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 78,
    posters: 3,
  }, // французский вестник
  {
    release: new Date("2023-08-25"),
    publication: new Date("2025-04-13"),
    format: "фильм",
    grade: "B",
    title: "Фримонт. Американская мечта",
    original: "Fremont",
    kinopoisk: "https://www.kinopoisk.ru/film/5108082/",
    director: [
      {
        name: "Бабак Джалали",
      },
    ],
    cast: [
      {
        name: "Анаита Вали Жада",
      },
      {
        name: "Джереми Аллен Уайт",
      },
    ],
    description: "Девушка из Афганистана ищет себя в Америке.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 60,
    posters: 1,
  }, // фримонт
  {
    release: new Date("2019-08-25"),
    publication: new Date("2019-10-27"),
    format: "сериал",
    season: "5",
    grade: "A+",
    title: "Футболисты",
    original: "Ballers / Игроки",
    kinopoisk: "https://www.kinopoisk.ru/series/762087/",
    director: [
      {
        name: "Стивен Левинсон",
      },
      {
        name: "Марк Уолберг",
      },
    ],
    cast: [
      {
        name: "Дуэйн Джонсон",
      },
      {
        name: "Джон Дэвид Вашингтон",
      },
      {
        name: "Донован В. Картер",
      },
      {
        name: "Роб Кордри",
      },
      {
        name: "Омар Бенсон Миллер",
      },
    ],
    description:
      "Бывший футболист Спенсер Страсмор помогает спортсменам в финансовых вопросах после завершения карьеры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 11,
    posters: 1,
  }, // футболисты 5
  {
    release: new Date("2023-07-24"),
    publication: new Date("2023-10-15"),
    format: "сериал",
    season: "11",
    grade: "B",
    title: "Футурама",
    original: "Futurama",
    kinopoisk: "https://www.kinopoisk.ru/series/79920/",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
      {
        name: "Дэвид И. Коэн",
      },
    ],
    cast: [
      {
        name: "Билли Уэст",
      },
      {
        name: "Джон Ди Маджио",
      },
      {
        name: "Кэти Сагал",
      },
    ],
    description:
      "Филип Джей Фрай, разносчик пиццы, был случайно заморожен в 1999 году и оттаял в канун Нового 2999 года.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
    posters: 1,
  }, // футурама 11
  {
    release: new Date("2019-11-29"),
    continuation: new Date("2023-07-27"),
    publication: new Date("2023-10-07"),
    format: "сериал",
    season: "1-4",
    grade: "B",
    title: "Харли Квинн",
    original: "Harley Quinn",
    kinopoisk: "https://www.kinopoisk.ru/series/1112514/",
    director: [
      {
        name: "Дин Лори",
      },
      {
        name: "Джастин Халперн",
      },
      {
        name: "Патрик Шумакер",
      },
    ],
    cast: [
      {
        name: "Кейли Куоко",
      },
      {
        name: "Лейк Белл",
      },
      {
        name: "Алан Тьюдик",
      },
    ],
    description:
      "Безумные приключения бывшей девушки Джокера, суперзлодейки Харлин Фрэнсис Квинзель.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 22,
    posters: 4,
  }, // харли квинн 1-4
  {
    release: new Date("2025-06-06"),
    publication: new Date("2025-07-13"),
    format: "фильм",
    grade: "A+",
    title: "Хищник: Убийца убийц",
    original: "Predator: Killer of Killers",
    kinopoisk: "https://www.kinopoisk.ru/film/7596122/",
    director: [
      {
        name: "Дэн Трахтенберг",
      },
      {
        name: "Джошуа Вассунг",
      },
    ],
    cast: [
      {
        name: "Рик Гонсалес",
      },
      {
        name: "Линдсэй ЛаВанши",
      },
      {
        name: "Луис Одзава",
      },
    ],
    description:
      "Величайшие воины истории против высшего инопланетного хищника.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 51,
    posters: 1,
  }, // хищник: убийца убийц
  {
    release: new Date("2014-12-17"),
    publication: new Date("2024-12-27"),
    format: "фильм",
    grade: "A",
    title: "Хоббит: Битва пяти воинств",
    original: "The Hobbit: The Battle of the Five Armies",
    kinopoisk: "https://www.kinopoisk.ru/film/694633/",
    director: [
      {
        name: "Питер Джексон",
      },
    ],
    cast: [
      {
        name: "Мартин Фриман",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Ричард Армитедж",
      },
      {
        name: "Грэм Мактавиш",
      },
      {
        name: "Эйдан Тёрнер",
      },
      {
        name: "Эванджелин Лилли",
      },
      {
        name: "Орландо Блум",
      },
      {
        name: "Люк Эванс",
      },
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Ли Пейс",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Хьюго Уивинг",
      },
    ],
    description:
      "Бильбо Бэггинс, гномы и их товарищи защищают Одинокую гору от тёмных сил.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
    posters: 2,
  }, // хоббит: битва пяти воинств (3)
  {
    release: new Date("2013-12-13"),
    publication: new Date("2024-12-26"),
    format: "фильм",
    grade: "A",
    title: "Хоббит: Пустошь Смауга",
    original: "The Hobbit: The Desolation of Smaug",
    kinopoisk: "https://www.kinopoisk.ru/film/408876/",
    director: [
      {
        name: "Питер Джексон",
      },
    ],
    cast: [
      {
        name: "Мартин Фриман",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Ричард Армитедж",
      },
      {
        name: "Грэм Мактавиш",
      },
      {
        name: "Эйдан Тёрнер",
      },
      {
        name: "Эванджелин Лилли",
      },
      {
        name: "Орландо Блум",
      },
      {
        name: "Люк Эванс",
      },
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Ли Пейс",
      },
    ],
    description:
      "Бильбо Бэггинс, Гэндальф и гномы продолжают путешествие к Одинокой горе — логову дракона Смауга.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 22,
    posters: 2,
  }, // хоббит: пустошь смауга (2)
  {
    release: new Date("2012-12-14"),
    publication: new Date("2024-12-23"),
    format: "фильм",
    grade: "A",
    title: "Хоббит: Нежданное путешествие",
    original: "The Hobbit: An Unexpected Journey",
    kinopoisk: "https://www.kinopoisk.ru/film/278522/",
    director: [
      {
        name: "Питер Джексон",
      },
    ],
    cast: [
      {
        name: "Мартин Фриман",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Ричард Армитедж",
      },
      {
        name: "Грэм Мактавиш",
      },
      {
        name: "Эйдан Тёрнер",
      },
      {
        name: "Энди Серкис",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Хьюго Уивинг",
      },
    ],
    description:
      "Бильбо Бэггинс сопровождает гномов в поход за золотом к Одинокой горе, захваченной драконом Смаугом.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 40,
    posters: 1,
  }, // хоббит: нежданное путешествие (1)
  {
    release: new Date("2019-08-16"),
    publication: new Date("2020-03-30"),
    format: "фильм",
    grade: "A",
    title: "Хорошие мальчики",
    original: "Good Boys / Хорошие ребята",
    kinopoisk: "https://www.kinopoisk.ru/film/1128984/",
    director: [
      {
        name: "Джин Ступницки",
      },
    ],
    cast: [
      {
        name: "Джейкоб Тремблей",
      },
      {
        name: "Кит Л. Уильямс",
      },
      {
        name: "Брэйди Нун",
      },
      {
        name: "Молли Гордон",
      },
      {
        name: "Мидори Френсис",
      },
      {
        name: "Айзек Ван",
      },
    ],
    description:
      "Шестиклассники сбегают из школы и попадают в переделку с наркотиками.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
    posters: 2,
  }, // хорошие мальчики
  {
    release: new Date("2015-11-25"),
    publication: new Date("2019-09-09"),
    format: "фильм",
    grade: "A+",
    title: "Хороший динозавр",
    original: "The Good Dinosaur",
    kinopoisk: "https://www.kinopoisk.ru/film/596451/",
    director: [
      {
        name: "Питер Сон",
      },
    ],
    cast: [
      {
        name: "Джеффри Райт",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
    ],
    description:
      "История дружбы пугливого динозавра и неразумного первобытного мальчика.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 20,
    posters: 2,
  }, // хороший динозавр
  {
    release: new Date("2023-03-24"),
    publication: new Date("2023-06-02"),
    format: "фильм",
    grade: "B",
    title: "Хороший человек",
    original: "A Good Person",
    kinopoisk: "https://www.kinopoisk.ru/film/4510366/",
    director: [
      {
        name: "Зак Брафф",
      },
    ],
    cast: [
      {
        name: "Флоренс Пью",
      },
      {
        name: "Морган Фриман",
      },
    ],
    description:
      "История Эллисон, чья жизнь разрушена после аварии со смертельным исходом.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // хороший человек
  {
    release: new Date("2014-08-01"),
    publication: new Date("2020-04-26"),
    format: "фильм",
    grade: "A+",
    title: "Хотел бы я быть здесь",
    original: "Wish I Was Here",
    kinopoisk: "https://www.kinopoisk.ru/film/760376/",
    director: [
      {
        name: "Зак Брафф",
      },
    ],
    cast: [
      {
        name: "Зак Брафф",
      },
      {
        name: "Кейт Хадсон",
      },
      {
        name: "Джои Кинг",
      },
      {
        name: "Пирс Гэнон",
      },
      {
        name: "Джош Гэд",
      },
    ],
    description:
      "Актер-неудачник учится быть взрослым с помощью собственных детей.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // хотел бы я быть здесь
  {
    release: new Date("1999-09-25"),
    publication: new Date("2021-03-19"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Хулиганы и ботаны",
    original: "Freaks and Geeks",
    kinopoisk: "https://www.kinopoisk.ru/series/401639/",
    director: [
      {
        name: "Пол Фиг",
      },
    ],
    cast: [
      {
        name: "Линда Карделлини",
      },
      {
        name: "Джон Фрэнсис Дейли",
      },
      {
        name: "Джеймс Франко",
      },
      {
        name: "Сэмм Левин",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Сет Роген",
      },
      {
        name: "Мартин Старр",
      },
      {
        name: "Бизи Филиппс",
      },
    ],
    description:
      "Жизнь обычной школы в Мичигане образца 1980 года и её ученики разных возрастов.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // хулиганы и ботаны 1
  {
    release: new Date("2008-07-02"),
    publication: new Date("2020-03-15"),
    format: "фильм",
    grade: "A+",
    title: "Хэнкок",
    original: "Hancock",
    kinopoisk: "https://www.kinopoisk.ru/film/102151/",
    director: [
      {
        name: "Питер Берг",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Шарлиз Терон",
      },
      {
        name: "Эдди Марсан",
      },
    ],
    description:
      "Хэнкок — герой с суперспособностями, не осознающий ответственности. Спасает людей, но вызывает разрушения.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 15,
    posters: 1,
  }, // хэнкок
  {
    release: new Date("2022-11-23"),
    publication: new Date("2022-12-25"),
    format: "фильм",
    grade: "D",
    title: "Целиком и полностью",
    original: "Bones and All",
    kinopoisk: "https://www.kinopoisk.ru/film/4422719/",
    director: [
      {
        name: "Лука Гуаданьино",
      },
    ],
    cast: [
      {
        name: "Тейлор Расселл",
      },
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Марк Райлэнс",
      },
      {
        name: "Андре Холланд",
      },
    ],
    description:
      "Мэрен - каннибал, она отправляется в путешествие по Америке 1980-х годов в сопровождении Ли, единомышленника, также испытывающего подобные наклонности.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "драма",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 34,
    posters: 1,
  }, // целиком и полностью
  {
    release: new Date("2018-10-05"),
    publication: new Date("2020-02-25"),
    format: "фильм",
    grade: "B",
    title: "Частная жизнь",
    original: "Private Life",
    kinopoisk: "https://www.kinopoisk.ru/film/1028104/",
    director: [
      {
        name: "Тамара Дженкинс",
      },
    ],
    cast: [
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Пол Джаматти",
      },
      {
        name: "Кэйли Картер",
      },
    ],
    description:
      "Ричард и Рэйчел — супружеская пара из Нью-Йорка, которая стремится завести ребёнка.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 17,
    posters: 1,
  }, // частная жизнь
  {
    release: new Date("2025-02-02"),
    publication: new Date("2025-04-05"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Частые побочные явления",
    original: "Common Side Effects",
    kinopoisk: "https://www.kinopoisk.ru/series/6990425/",
    director: [
      {
        name: "Джозеф Беннетт",
      },
      {
        name: "Стив Хели",
      },
    ],
    cast: [
      {
        name: "Дэвид Кинг",
      },
      {
        name: "Эмили Пендергаст",
      },
      {
        name: "Майк Джадж",
      },
      {
        name: "Марта Келли",
      },
      {
        name: "Джозеф Андерсон",
      },
    ],
    description:
      "Два бывших одноклассника расследуют заговор фармкомпаний и властей, скрывающих информацию о чудо-грибе — потенциальном лекарстве от всех болезней.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 36,
    posters: 1,
  }, // частые побочные явления 1
  {
    release: new Date("2001-05-13"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "C",
    title: "Человек, которого не было",
    original: "The Man Who Wasn't There",
    kinopoisk: "https://www.kinopoisk.ru/film/554/",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Билли Боб Торнтон",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Тони Шэлуб",
      },
    ],
    description:
      "Молчаливый парикмахер Эд ведет размеренную жизнь, пока не замечает, что его жена не верна ему.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 47,
    posters: 1,
  }, // человек, которого не было
  {
    release: new Date("2011-09-23"),
    publication: new Date("2023-02-02"),
    format: "фильм",
    grade: "A",
    title: "Человек, который изменил всё",
    original: "Moneyball",
    kinopoisk: "https://www.kinopoisk.ru/film/432791/",
    director: [
      {
        name: "Беннетт Миллер",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Джона Хилл",
      },
      {
        name: "Филип Сеймур Хоффман",
      },
      {
        name: "Крис Пратт",
      },
    ],
    description:
      "Билли Бин меняет подход к подбору игроков в бейсбольном клубе Oakland Athletics с помощью математического анализа.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 24,
    posters: 1,
  }, // человек, который изменил всё
  {
    release: new Date("2004-06-30"),
    publication: new Date("2020-06-18"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук 2",
    original: "Spider-Man 2",
    kinopoisk: "https://www.kinopoisk.ru/film/2898/",
    director: [
      {
        name: "Сэм Рэйми",
      },
    ],
    cast: [
      {
        name: "Тоби Магуайр",
      },
      {
        name: "Кирстен Данст",
      },
      {
        name: "Джеймс Франко",
      },
      {
        name: "Альфред Молина",
      },
    ],
    description:
      "Питера Паркера преследуют неудачи в личной жизни, пока он сражается с бывшим ученым Отто Октавиусом.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 14,
    posters: 1,
  }, // человек-паук 2
  {
    release: new Date("2007-05-04"),
    publication: new Date("2020-06-19"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук 3: Враг в отражении",
    original: "Spider-Man 3",
    kinopoisk: "https://www.kinopoisk.ru/film/82441/",
    director: [
      {
        name: "Сэм Рэйми",
      },
    ],
    cast: [
      {
        name: "Тоби Магуайр",
      },
      {
        name: "Кирстен Данст",
      },
      {
        name: "Джеймс Франко",
      },
      {
        name: "Томас Хейден Чёрч",
      },
      {
        name: "Тофер Грейс",
      },
      {
        name: "Брайс Даллас Ховард",
      },
    ],
    description:
      "Чёрное существо из другого мира вызывает в Питере Паркер внутреннюю борьбу. Он сражается с злодеями и соблазнами.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 13,
    posters: 2,
  }, // человек-паук 3: враг в отражении
  {
    release: new Date("2021-12-17"),
    publication: new Date("2023-07-24"),
    format: "фильм",
    grade: "A",
    title: "Человек-паук: Нет пути домой",
    original: "Spider-Man: No Way Home",
    kinopoisk: "https://www.kinopoisk.ru/film/1309570/",
    director: [
      {
        name: "Джон Уоттс",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Зендея",
      },
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Мариса Томей",
      },
      {
        name: "Уиллем Дефо",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Эндрю Гарфилд",
      },
      {
        name: "Тоби Магуайр",
      },
    ],
    description:
      "Когда личность Человека-паука раскрыта, Питер обращается к Доктору Стрэнджу за помощью.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 22,
    posters: 2,
  }, // человек-паук: нет пути домой (3)
  {
    release: new Date("2019-07-02"),
    publication: new Date("2023-07-21"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук: Вдали от дома",
    original: "Spider-Man: Far from Home",
    kinopoisk: "https://www.kinopoisk.ru/film/1008445/",
    director: [
      {
        name: "Джон Уоттс",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Сэмюэл Л. Джексон",
      },
      {
        name: "Джейк Джилленхол",
      },
      {
        name: "Зендея",
      },
      {
        name: "Мариса Томей",
      },
      {
        name: "Джон Фавро",
      },
    ],
    description:
      "Питер Паркер проводит супергеройские каникулы, спасая Европу.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 26,
    posters: 2,
  }, // человек-паук: вдали от дома (2)
  {
    release: new Date("2017-07-07"),
    publication: new Date("2023-07-19"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук: Возвращение домой",
    original: "Spider-Man: Homecoming",
    kinopoisk: "https://www.kinopoisk.ru/film/690593/",
    director: [
      {
        name: "Джон Уоттс",
      },
    ],
    cast: [
      {
        name: "Том Холланд",
      },
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Майкл Китон",
      },
      {
        name: "Зендея",
      },
      {
        name: "Лора Хэрриер",
      },
    ],
    description:
      "После встречи с Мстителями Питер Паркер возвращается домой и пытается жить обычной, но когда появляется новый злодей, юному супергерою приходится доказать свою силу.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 27,
    posters: 2,
  }, // человек-паук: возвращение домой (1)
  {
    release: new Date("2023-06-02"),
    publication: new Date("2023-08-10"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук: Паутина вселенных",
    original: "Spider-Man: Across the Spider-Verse",
    kinopoisk: "https://www.kinopoisk.ru/film/1219177/",
    director: [
      {
        name: "Жуакин Душ Сантуш",
      },
      {
        name: "Кемп Пауэрс",
      },
      {
        name: "Джастин Томпсон",
      },
    ],
    cast: [
      {
        name: "Шамеик Мур",
      },
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Оскар Айзек",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Джейсон Шварцман",
      },
    ],
    description:
      "Человек-Паук попадает в Мультивселенную, где знакомится с командой Паучков.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 66,
    posters: 2,
  }, // человек-паук: паутина вселенных
  {
    release: new Date("2018-12-14"),
    publication: new Date("2023-07-29"),
    format: "фильм",
    grade: "A+",
    title: "Человек-паук: Через вселенные",
    original: "Spider-Man: Into the Spider-Verse",
    kinopoisk: "https://www.kinopoisk.ru/film/920265/",
    director: [
      {
        name: "Боб Персичетти",
      },
      {
        name: "Питер Рэмзи",
      },
      {
        name: "Родни Ротман",
      },
    ],
    cast: [
      {
        name: "Шамеик Мур",
      },
      {
        name: "Джейк Джонсон",
      },
      {
        name: "Хейли Стайнфелд",
      },
      {
        name: "Махершала Али",
      },
      {
        name: "Брайан Тайри Генри",
      },
      {
        name: "Лив Шрайбер",
      },
    ],
    description:
      "Майлз Моралес, укушенный радиоактивным пауком, становится Человеком-пауком и вместе с другими Пауками из параллельных миров спасает Мультивселенную от угрозы.",
    genres: [
      {
        genre: "мультфильм",
      },
      { genre: "супергероика" },
      {
        genre: "marvel",
      },
    ],
    screenshots: 69,
    posters: 3,
  }, // человек-паук: через вселенные
  {
    release: new Date("2023-08-02"),
    publication: new Date("2023-09-07"),
    format: "фильм",
    grade: "A",
    title: "Черепашки-ниндзя: Погром мутантов",
    original: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    kinopoisk: "https://www.kinopoisk.ru/film/1178862/",
    director: [
      {
        name: "Джефф Роу",
      },
      {
        name: "Кайлер Спирс",
      },
    ],
    cast: [
      {
        name: "Мика Эбби",
      },
      {
        name: "Шэймон Браун мл.",
      },
      {
        name: "Николас Канту",
      },
      {
        name: "Брэйди Нун",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Джеки Чан",
      },
      {
        name: "Айс Кьюб",
      },
      {
        name: "Майя Рудольф",
      },
      {
        name: "Джон Сина",
      },
      {
        name: "Сет Роген",
      },
    ],
    description:
      "Братья черепашки работают над тем, чтобы заслужить любовь жителей Нью-Йорка, сражаясь лицом к лицу с армией мутантов.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
    posters: 2,
  }, // черепашки-ниндзя: погром мутантов
  {
    release: new Date("2018-02-16"),
    publication: new Date("2019-03-31"),
    format: "фильм",
    grade: "A+",
    title: "Чёрная Пантера",
    original: "Black Panther",
    kinopoisk: "https://www.kinopoisk.ru/film/623250/",
    director: [
      {
        name: "Райан Куглер",
      },
    ],
    cast: [
      {
        name: "Чедвик Боузман",
      },
      {
        name: "Майкл Б. Джордан",
      },
      {
        name: "Лупита Нионго",
      },
      {
        name: "Данай Гурира",
      },
      {
        name: "Мартин Фриман",
      },
      {
        name: "Дэниэл Калуя",
      },
      {
        name: "Уинстон Дьюк",
      },
      {
        name: "Анджела Бассетт",
      },
      {
        name: "Летиша Райт",
      },
      {
        name: "Форест Уитакер",
      },
      {
        name: "Энди Серкис",
      },
    ],
    description:
      "Т’Чалла, наследник королевства Ваканда, должен возглавить свой народ и сразиться с противником из прошлого.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
      {
        genre: "супергероика",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 14,
    posters: 3,
  }, // чёрная пантера
  {
    release: new Date("2025-03-14"),
    publication: new Date("2025-04-18"),
    format: "фильм",
    grade: "A",
    title: "Чёрный чемодан – двойная игра",
    original: "Black Bag",
    kinopoisk: "https://www.kinopoisk.ru/film/5449060/",
    director: [
      {
        name: "Стивен Содерберг",
      },
    ],
    cast: [
      {
        name: "Майкл Фассбендер",
      },
      {
        name: "Кейт Бланшетт",
      },
      {
        name: "Том Бёрк",
      },
      {
        name: "Реге-Жан Пейдж",
      },
      {
        name: "Мариса Абела",
      },
      {
        name: "Наоми Харрис",
      },
      {
        name: "Пирс Броснан",
      },
    ],
    description:
      "В разгар шпионского скандала агент должен решить: долг перед страной или любовь к жене.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "детектив",
      },
      {
        genre: "шпионаж",
      },
    ],
    screenshots: 48,
    posters: 1,
  }, // чёрный чемодан – двойная игра
  {
    release: new Date("2010-11-05"),
    publication: new Date("2025-07-19"),
    format: "фильм",
    grade: "A",
    title: "Четыре льва",
    original: "Four Lions / 4 льва",
    kinopoisk: "https://www.kinopoisk.ru/film/448665/",
    director: [
      {
        name: "Кристофер Моррис",
      },
    ],
    cast: [
      {
        name: "Риз Ахмед",
      },
      {
        name: "Кайван Новак",
      },
      {
        name: "Найджел Линдсэй",
      },
      {
        name: "Адиль Ахтар",
      },
    ],
    description: "Четверо террористов из Шеффилда готовят теракт.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // четыре льва
  {
    release: new Date("2022-05-20"),
    publication: new Date("2022-06-08"),
    format: "фильм",
    grade: "B",
    title: "Чрезвычайная ситуация",
    original: "Emergency",
    kinopoisk: "https://www.kinopoisk.ru/film/4483903/",
    director: [
      {
        name: "Кэри Уильямс",
      },
    ],
    cast: [
      {
        name: "АрДжей Сайлер",
      },
      {
        name: "Дональд Уоткинс",
      },
      {
        name: "Себастьян Чакон",
      },
      {
        name: "Сабрина Карпентер",
      },
    ],
    description:
      "Два студента находят в общежитии девушку без сознания и, опасаясь полиции, решают помочь ей сами.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // чрезвычайная ситуация
  {
    release: new Date("2023-01-20"),
    publication: new Date("2023-01-28"),
    format: "фильм",
    grade: "B",
    title: "Что за люди",
    original: "You People",
    kinopoisk: "https://www.kinopoisk.ru/film/4479402/",
    director: [
      {
        name: "Кенья Беррис",
      },
    ],
    cast: [
      {
        name: "Джона Хилл",
      },
      {
        name: "Лорен Лондон",
      },
      {
        name: "Эдди Мерфи",
      },
      {
        name: "Джулия Луи-Дрейфус",
      },
      {
        name: "Ниа Лонг",
      },
      {
        name: "Дэвид Духовны",
      },
    ],
    description:
      "История о молодой паре и их семьях, которые учатся принимать современную любовь через призму культурных различий и поколенческих противоречий.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // что за люди
  {
    release: new Date("2022-02-04"),
    publication: new Date("2022-03-26"),
    format: "фильм",
    grade: "A",
    title: "Чудаки навсегда",
    original: "Jackass Forever",
    kinopoisk: "https://www.kinopoisk.ru/film/1359074/",
    director: [
      {
        name: "Джефф Треймейн",
      },
    ],
    cast: [
      {
        name: "Джонни Ноксвил",
      },
      {
        name: "Стив-О",
      },
      {
        name: "Крис Понтиус",
      },
      {
        name: "Дэвон Уилсон",
      },
      {
        name: "Рэйчел Вульфсон",
      },
    ],
    description:
      "Команда «Чудаков» вернулась с новыми комедийными трюками, в которых участвуют звёздные новички.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "документальный",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // чудаки навсегда
  {
    release: new Date("2023-09-20"),
    publication: new Date("2023-09-29"),
    format: "фильм",
    grade: "C",
    title: "Чудесная история Генри Шугара",
    original: "The Wonderful Story of Henry Sugar",
    kinopoisk: "https://www.kinopoisk.ru/film/4830353/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Рэйф Файнс",
      },
      {
        name: "Бенедикт Камбербэтч",
      },
      {
        name: "Дев Патель",
      },
      {
        name: "Бен Кингсли",
      },
      {
        name: "Ричард Айоади",
      },
    ],
    description:
      "История Генри Шугара, который способен видеть сквозь предметы и предсказывать будущее с помощью украденной им книги.",
    genres: [
      {
        genre: "короткометражка",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 21,
    posters: 1,
  }, // чудесная история генри шугара
  {
    release: new Date("2021-04-02"),
    publication: new Date("2025-08-19"),
    format: "фильм",
    grade: "B",
    title: "Шалом, папик!",
    original: "Shiva Baby",
    kinopoisk: "https://www.kinopoisk.ru/film/1324912/",
    director: [
      {
        name: "Эмма Селигман",
      },
    ],
    cast: [
      {
        name: "Рэйчел Сеннотт",
      },
      {
        name: "Дэнни Деферрари",
      },
      {
        name: "Фред Меламед",
      },
      {
        name: "Полли Дрэйпер",
      },
      {
        name: "Молли Гордон",
      },
      {
        name: "Дианна Агрон",
      },
    ],
    description:
      "Студентка попадает в неловкую ситуацию на похоронах, встретив своего спонсора и бывшую девушку.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 18,
    posters: 1,
  }, // шалом, папик!
  {
    release: new Date("1997-03-28"),
    publication: new Date("2022-03-21"),
    format: "фильм",
    grade: "C",
    title: "Шестой игрок",
    original: "The Sixth Man",
    kinopoisk: "https://www.kinopoisk.ru/film/13085/",
    director: [
      {
        name: "Рэндолл Миллер",
      },
    ],
    cast: [
      {
        name: "Марлон Уайанс",
      },
      {
        name: "Кадим Хардисон",
      },
      {
        name: "Дэвид Пэймер",
      },
      {
        name: "Майкл Мишель",
      },
    ],
    description: "Призрак помогает брату добиться успеха в баскетболе.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фэнтези",
      },
    ],
    screenshots: 16,
    posters: 1,
  }, // шестой игрок
  {
    release: new Date("2022-02-18"),
    publication: new Date("2022-12-19"),
    format: "сериал",
    season: "1-3",
    grade: "B",
    title: "Шоу Чашека!",
    original: "The Cuphead Show!",
    kinopoisk: "https://www.kinopoisk.ru/series/1283374/",
    director: [
      {
        name: "Чад Молденхауэр",
      },
      {
        name: "Джаред Молденхауэр",
      },
    ],
    cast: [
      {
        name: "Тру Валентино",
      },
      {
        name: "Фрэнк Тодаро",
      },
    ],
    description:
      "Приключения импульсивного Чашека и его осторожного брата Кружека.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 50,
    posters: 1,
  }, // шоу чашека 1-3
  {
    release: new Date("2022-01-09"),
    publication: new Date("2022-03-03"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Эйфория",
    original: "Euphoria",
    kinopoisk: "https://www.kinopoisk.ru/series/1178445/",
    director: [
      {
        name: "Сэм Левинсон",
      },
    ],
    cast: [
      {
        name: "Зендея",
      },
      {
        name: "Хантер Шафер",
      },
      {
        name: "Джейкоб Элорди",
      },
      {
        name: "Барби Феррейра",
      },
      {
        name: "Алекса Деми",
      },
      {
        name: "Элджи Смит",
      },
      {
        name: "Сидни Суини",
      },
      {
        name: "Мод Апатоу",
      },
      {
        name: "Ангус Клауд",
      },
      {
        name: "Остин Абрамс",
      },
      {
        name: "Доминик Файк",
      },
    ],
    description:
      "История о группе старшеклассников, которые заблудились среди тусовок, наркотиков и собственных желаний.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 46,
    posters: 1,
  }, // эйфория 2
  {
    release: new Date("2019-06-16"),
    publication: new Date("2022-02-27"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Эйфория",
    original: "Euphoria",
    kinopoisk: "https://www.kinopoisk.ru/series/1178445/",
    director: [
      {
        name: "Сэм Левинсон",
      },
    ],
    cast: [
      {
        name: "Зендея",
      },
      {
        name: "Хантер Шафер",
      },
      {
        name: "Джейкоб Элорди",
      },
      {
        name: "Барби Феррейра",
      },
      {
        name: "Алекса Деми",
      },
      {
        name: "Элджи Смит",
      },
      {
        name: "Сидни Суини",
      },
      {
        name: "Мод Апатоу",
      },
      {
        name: "Ангус Клауд",
      },
      {
        name: "Эрик Дэйн",
      },
      {
        name: "Колман Доминго",
      },
      {
        name: "Сторм Рид",
      },
    ],
    description:
      "История о группе старшеклассников, которые заблудились среди тусовок, наркотиков и собственных желаний.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 57,
    posters: 1,
  }, // эйфория 1
  {
    release: new Date("2023-06-16"),
    publication: new Date("2023-08-17"),
    format: "фильм",
    grade: "D",
    title: "Элементарно",
    original: "Elemental",
    kinopoisk: "https://www.kinopoisk.ru/film/4889667/",
    director: [
      {
        name: "Питер Сон",
      },
    ],
    cast: [
      {
        name: "Леа Льюис",
      },
      {
        name: "Мамуду Ати",
      },
    ],
    description:
      "Огненная Эмбер заводит дружбу с водным инспектором Уэйдом в городе четырёх стихий.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 24,
    posters: 3,
  }, // элементарно
  {
    release: new Date("2025-06-20"),
    publication: new Date("2025-08-30"),
    format: "фильм",
    grade: "B",
    title: "Элио",
    original: "Elio",
    kinopoisk: "https://www.kinopoisk.ru/film/4893253/",
    director: [
      {
        name: "Эдриан Молина",
      },
      {
        name: "Мадлен Шарафьян",
      },
      {
        name: "Доми Ши",
      },
    ],
    cast: [
      {
        name: "Йонас Кибриб",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Брэд Гэррет",
      },
      {
        name: "Джамила Джамил",
      },
    ],
    description: "11-летний Элио случайно становится послом Земли.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 54,
    posters: 1,
  }, // элио
  {
    release: new Date("2022-09-30"),
    publication: new Date("2022-10-08"),
    format: "фильм",
    grade: "B",
    title: "Энтергалактик",
    original: "Entergalactic",
    kinopoisk: "https://www.kinopoisk.ru/film/4477687/",
    director: [
      {
        name: "Флетчер Мулс",
      },
    ],
    cast: [
      {
        name: "Кид Кади",
      },
      {
        name: "Джессика Уильямс",
      },
      {
        name: "Лора Хэрриер",
      },
      {
        name: "Ty Dolla $ign",
      },
      {
        name: "Тимоти Шаламе",
      },
    ],
    description:
      "Молодой артист Джабари пытается найти любовь в современном Нью-Йорке.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 23,
    posters: 1,
  }, // энтергалактик
  {
    release: new Date("2012-05-23"),
    publication: new Date("2024-03-20"),
    format: "фильм",
    grade: "B",
    title: "Эрнест и Селестина: Приключения мышки и медведя",
    original: "Ernest & Celestine / Ernest et Célestine",
    kinopoisk: "https://www.kinopoisk.ru/film/592260/",
    director: [
      {
        name: "Стефани Обье",
      },
      {
        name: "Венсан Патар",
      },
      {
        name: "Бенжамин Реннер",
      },
    ],
    cast: [
      {
        name: "Ламбер Вильсон",
      },
      {
        name: "Полин Брюннер",
      },
    ],
    description:
      "Бесстрашную мышку и голодного медведя связала необычная дружба.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 17,
    posters: 2,
  }, // эрнест и селестина
  {
    release: new Date("2011-07-29"),
    publication: new Date("2022-08-02"),
    format: "фильм",
    grade: "B",
    title: "Эта дурацкая любовь",
    original: "Crazy, Stupid, Love.",
    kinopoisk: "https://www.kinopoisk.ru/film/493992/",
    director: [
      {
        name: "Гленн Фикарра",
      },
      {
        name: "Джон Рекуа",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Райан Гослинг",
      },
      {
        name: "Джулианна Мур",
      },
      {
        name: "Эмма Стоун",
      },
      {
        name: "Лио Типтон",
      },
      {
        name: "Кевин Бейкон",
      },
      {
        name: "Мариса Томей",
      },
    ],
    description:
      "Развод меняет жизнь мужчины. Он восстанавливает мужественность, завоевывая женщин в барах.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 44,
    posters: 3,
  }, // эта дурацкая любовь
  {
    release: new Date("2024-09-18"),
    publication: new Date("2024-11-03"),
    format: "сериал",
    season: "мини–сериал",
    grade: "B",
    title: "Это всё Агата",
    original: "Agatha All Along",
    kinopoisk: "https://www.kinopoisk.ru/series/4707066/",
    director: [
      {
        name: "Жаклин Шеффер",
      },
    ],
    cast: [
      {
        name: "Кэтрин Хан",
      },
      {
        name: "Джо Лок",
      },
      {
        name: "Сашир Замата",
      },
      {
        name: "Али Ан",
      },
      {
        name: "Обри Плаза",
      },
    ],
    description:
      "После освобождения из аномалии Уэствью ослабленная Агата Харкнесс ищет союзников, чтобы вернуть свою силу.",
    genres: [
      {
        genre: "фэнтези",
      },
      {
        genre: "драма",
      },
      {
        genre: "приключения",
      },
      {
        genre: "комедия",
      },
      {
        genre: "marvel",
      },
    ],
    screenshots: 21,
    posters: 2,
  }, // это всё агата
  {
    release: new Date("2022-03-01"),
    publication: new Date("2022-03-13"),
    format: "фильм",
    grade: "C",
    title: "Я краснею",
    original: "Turning Red",
    kinopoisk: "https://www.kinopoisk.ru/film/1238292/",
    director: [
      {
        name: "Доми Ши",
      },
    ],
    cast: [
      {
        name: "Розали Чян",
      },
      {
        name: "Сандра О",
      },
    ],
    description: "Подросток Мэй Ли при волнении становится красной пандой.",
    genres: [
      {
        genre: "мультфильм",
      },
      {
        genre: "pixar",
      },
    ],
    screenshots: 14,
    posters: 2,
  }, // я краснею
  {
    release: new Date("2024-05-24"),
    publication: new Date("2024-07-13"),
    format: "фильм",
    grade: "A",
    title: "Я не киллер",
    original: "Hit Man",
    kinopoisk: "https://www.kinopoisk.ru/film/5051126/",
    director: [
      {
        name: "Ричард Линклейтер",
      },
    ],
    cast: [
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Адриа Архона",
      },
    ],
    description:
      "Гэри Джонсон выдает  себя за наемного убийцу, чтобы поймать настоящих преступников. Все шло по плану, пока в этой истории не появилась женщина.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 42,
    posters: 2,
  }, // я не киллер
  {
    release: new Date("2004-07-15"),
    publication: new Date("2020-08-02"),
    format: "фильм",
    grade: "A+",
    title: "Я, робот",
    original: "I, Robot",
    kinopoisk: "https://www.kinopoisk.ru/film/4886/",
    director: [
      {
        name: "Алекс Пройас",
      },
    ],
    cast: [
      {
        name: "Уилл Смит",
      },
      {
        name: "Бриджет Мойнэхэн",
      },
      {
        name: "Алан Тьюдик",
      },
      {
        name: "Джеймс Кромуэлл",
      },
      {
        name: "Брюс Гринвуд",
      },
    ],
    description:
      "В 2035 году полицейский расследует преступление робота, угрожающее человечеству.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 22,
    posters: 1,
  }, // я, робот
];

// Сортировка films по дате публикации
films.sort((dateA, dateB) => dateA.publication - dateB.publication).reverse();

// Главная ссылка
const location_of_the_images =
  "https://shoneal.github.io/gargantua/images/";

// Функция, которая приводит название в соотвествующий вид
function name_for_link(element) {
  return element
    .toLowerCase()
    .split(" /")[0]
    .trim()
    .replace(/[^a-z0-9\-\s]/g, "")
    .replace(/[_\s-]+/g, "_")
    .slice(0, 250);
}

// Функция, которая приводит имена в соотвествующий вид
function name_for_person(element) {
  return element
    .toLowerCase()
    .replace("$", "s")
    .replace(/[^a-zа-яё0-9\-\.\s]/g, "")
    .replace(/[_\-\.\s]+/g, "_")
    .replace(/_+$/, "")
    .trim();
}

// константа ПОПАПА ФИЛЬМА
const popupFilm = document.querySelector(".popup__film");
const popupScreenshot = document.querySelector(".popup__screenshot");
const popupNavigation = document.querySelector(".popup__navigation");

// функция ДОБАВЛЕНИЯ чего-угодно из темплейта
function addItems({ template, className, data, container, innerClassName }) {
  const itemTemplate = template.querySelector(`.${className}`);

  data.forEach((element) => {
    const clonedElement = itemTemplate.cloneNode(true);

    if (innerClassName) {
      clonedElement.querySelector(`.${innerClassName}`).textContent = element;
    } else {
      clonedElement.textContent = element;
    }

    container.append(clonedElement);
  });
}

// ФОРМАТ в навигацию
const filmsFormats = [...new Set(films.map(({ format }) => format))]
  .sort()
  .reverse();
const navigationFormatTemplate = document.querySelector(
  "#navigation__format-template"
).content;
const navigationFormat = document.querySelector(".navigation__format");
// ЖАНРЫ в навигацию
const ruCollator = new Intl.Collator("ru-RU");
const getGenres = ({ genres }) => genres.map(({ genre }) => genre);
const filmsGenresSorted = [...new Set(films.flatMap(getGenres))].sort(
  ruCollator.compare
);
const navigationGenresTemplate = document.querySelector(
  "#navigation__genres-template"
).content;
const navigationGenres = document.querySelector(".navigation__genres");
// ГОДА в навигацию
const filmsReleases = [
  ...new Set(films.map(({ release }) => release.toString().slice(11, 15))),
].sort((a, b) => b.localeCompare(a));
const navigationReleasesTemplate = document.querySelector(
  "#navigation__releases-template"
).content;
const navigationReleases = document.querySelector(".navigation__releases");
// РЕЖИССЕРЫ в попап
const emptyStrings = new Array(50).fill("");
const filmDirectorTemplate = document.querySelector(
  "#film__director-template"
).content;
const filmDirector = document.querySelector(".film__director");
// КАСТ в попап
const filmCastTemplate = document.querySelector("#film__cast-template").content;
const filmCast = document.querySelector(".film__cast");
// ТОЛЬКО имена режиссеров из ФИЛЬМОВ
const onlyFilmsDirectors = [
  ...new Set(
    films
      .filter((elem) => elem.format === "фильм")
      .flatMap(({ director }) => director.map(({ name }) => name))
      .sort((a, b) => a.localeCompare(b))
  ),
];
// ТОЛЬКО имена режиссеров из СЕРИАЛОВ
const onlySerialsDirectors = [
  ...new Set(
    films
      .filter((elem) => elem.format === "сериал")
      .flatMap(({ director }) => director.map(({ name }) => name))
      .sort((a, b) => a.localeCompare(b))
  ),
];

// Конфигурация всех элементов
const itemsConfiguration = [
  // Навигация
  {
    type: "navigation",
    template: navigationFormatTemplate,
    className: "navigation__format__item",
    data: filmsFormats,
    container: navigationFormat,
  },
  {
    type: "navigation",
    template: navigationGenresTemplate,
    className: "navigation__genres__item",
    data: filmsGenresSorted,
    container: navigationGenres,
  },
  {
    type: "navigation",
    template: navigationReleasesTemplate,
    className: "navigation__releases__item",
    data: filmsReleases,
    container: navigationReleases,
  },

  // Персоны
  {
    type: "persons",
    template: filmDirectorTemplate,
    className: "film__director__case",
    innerClassName: "film__director__name",
    data: emptyStrings,
    container: filmDirector,
  },
  {
    type: "persons",
    template: filmCastTemplate,
    className: "film__cast__case",
    innerClassName: "film__cast__name",
    data: emptyStrings,
    container: filmCast,
  },
];

// Применение конфигурации
itemsConfiguration.forEach((config) => addItems(config));

// разбираемся с жанром "DC"
document
  .querySelectorAll(".navigation__genres__item")
  .forEach(function (element) {
    if (element.textContent.toLowerCase() == "dc") {
      // element.style.textTransform = "uppercase";
      element.style.display = "none";
    }
  });

// Группа оценок
const ratingIcons = {
  love: "https://img.icons8.com/ios-filled/100/FF0000/filled-like.png",
  aPlus: "https://img.icons8.com/fluency-systems-filled/96/increase-font.png",
  a: "https://img.icons8.com/fluency-systems-filled/96/a.png",
  b: "https://img.icons8.com/fluency-systems-filled/96/b.png",
  c: "https://img.icons8.com/fluency-systems-filled/96/c.png",
  d: "https://img.icons8.com/fluency-systems-filled/96/d.png",
};
// Группа логотипов студий
const studioLogos = {
  marvel:
    "https://upload.wikimedia.org/wikipedia/ru/thumb/9/95/Marve_Entertainmentl_Logo.png/250px-Marve_Entertainmentl_Logo.png",
  pixar:
    "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1613495438818-408JDVSTB7NWSHVC20M7/logo.png?format=1500w",
  dc: "https://upload.wikimedia.org/wikipedia/commons/7/71/DC_Comics_2024.svg",
};

// Функция определения оценок и их свойств
const gradeIcons = {
  love: { src: ratingIcons.love, alt: "Иконка Оценки Love" },
  "A+": { src: ratingIcons.aPlus, alt: "Иконка Оценки A+" },
  A: { src: ratingIcons.a, alt: "Иконка Оценки A" },
  B: { src: ratingIcons.b, alt: "Иконка Оценки B" },
  C: { src: ratingIcons.c, alt: "Иконка Оценки C" },
  D: { src: ratingIcons.d, alt: "Иконка Оценки D" },
};
function defineGradeBlack(item, element) {
  const grade = gradeIcons[item];

  if (grade) {
    element.src = grade.src;
    element.alt = grade.alt;
    element.title = item;
  }
}

// Функция добавления оценок в навигацию
function Grades() {
  const filmsGrades = [...new Set(films.map(({ grade }) => grade))].sort(
    (a, b) => a.localeCompare(b)
  );
  // Переставляем элементы в нужном порядке
  filmsGrades.splice(0, 0, filmsGrades.splice(5, 1)[0]);
  filmsGrades.splice(1, 0, filmsGrades.splice(2, 1)[0]);

  const template = document.querySelector(
    "#navigation__grades-template"
  ).content;
  const container = document.querySelector(".navigation__grades");
  const itemTemplate = template.querySelector(".navigation__grades__item");

  function createGradeElement(grade) {
    const element = itemTemplate.cloneNode(true);
    const image = element.querySelector(".navigation__grades__image");
    defineGradeBlack(grade, image);
    return element;
  }

  filmsGrades.forEach((grade) => container.append(createGradeElement(grade)));
}
Grades();

// Функция сброса прокрутки попапа с данными о фильме при открытии
function resetScroll() {
  popupFilm.scrollTop = 0;
}
// функция УДАЛЕНИЯ элементов
function REMOVE(item) {
  item.forEach(function (element) {
    element.remove();
  });
}
// функция ОТКРЫТИЯ ПОПАПА
function openPopup(popupElement) {
  const isScreenshotPopup = popupElement === popupScreenshot;
  popupElement.classList.add("popup_is-opened");
  if (!isScreenshotPopup) {
    const body = document.body;
    const scrollPosition = window.scrollY;
    body.dataset.scrollPosition = scrollPosition;
    body.style.top = `-${scrollPosition}px`;
    body.classList.add("scroll-lock");
    document.querySelector(".header").style.position = "fixed";
    document.querySelector(".main").classList.add("scroll-content");
    document.addEventListener("keydown", closePopupByEsc);
    resetScroll();
  }
}
// функция ЗАКРЫТИЯ ПОПАПА
function closePopup(popupElement) {
  const commonActions = () => {
    const body = document.body;
    const scrollPosition = body.dataset.scrollPosition;
    body.style.top = "";
    body.classList.remove("scroll-lock");
    document.querySelector(".header").style.position = "sticky";
    window.scrollTo(0, scrollPosition);
    document.querySelector(".main").classList.remove("scroll-content");
    document.removeEventListener("keydown", closePopupByEsc);
  };

  const remove = (popup, selectors) => {
    selectors.forEach((selector) => REMOVE(popup.querySelectorAll(selector)));
  };

  if (popupElement == popupScreenshot) {
    simpleClose(popupElement);
    remove(popupScreenshot, [".popup__screenshot__block"]);
  } else if (popupElement == popupFilm) {
    simpleClose(popupElement);
    commonActions();
    resetScroll();
    remove(popupFilm, [".film__poster", ".film__screenshot"]);
  } else if (popupElement == popupNavigation) {
    simpleClose(popupElement);
    commonActions();
  }
}
// функция ЗАКРЫТИЯ попапа СКРИШОТА
function simpleClose(popupElement) {
  popupElement.classList.remove("popup_is-opened");
}
// функция ЗАКРЫТИЯ ПОПАПА по клавише ESC
function closePopupByEsc(evt) {
  if (evt.key !== "Escape" || evt.code !== "Escape") return;

  const handleEscape = (popup, closeFn, selectors) => {
    closeFn(popup);
    selectors.forEach((selector) => REMOVE(popup.querySelectorAll(selector)));
  };

  if (popupScreenshot.classList.contains("popup_is-opened")) {
    handleEscape(popupScreenshot, simpleClose, [".popup__screenshot__block"]);
  } else if (popupFilm.classList.contains("popup_is-opened")) {
    handleEscape(popupFilm, closePopup, [".film__poster", ".film__screenshot"]);
  } else if (popupNavigation.classList.contains("popup_is-opened")) {
    handleEscape(popupNavigation, closePopup, []);
  }
}
// функция ЗАКРЫТИЯ ПОПАПА по клику ВНЕ оверлея
function addCloseOverlayListener(element, closeFn, selector = null) {
  element.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
      closeFn(e.currentTarget);
      if (selector) {
        REMOVE(element.querySelectorAll(selector));
      }
    }
  });
}
// использование закрытия и открытия попапа с НАВИГАЦИЕЙ
const openNavigation = document.querySelector(".header__navigation_button");
const closeNavigation = document.querySelector(".popup__navigation__close");
openNavigation.addEventListener("click", () => openPopup(popupNavigation));
closeNavigation.addEventListener("click", () => closePopup(popupNavigation));
addCloseOverlayListener(popupNavigation, closePopup);

// Константы для элементов поиска
const headerSearch = document.forms["header-search"];
const searchInput = headerSearch.elements.search;
const headerSearchButton = document.querySelector(".header__search__button");
const headerSearchSubmit = document.querySelector(".header__search__submit");
const headerClearButton = document.querySelector(".header__clear__button");
const mainSearch = document.querySelector(".main__search");
// Инициализация состояния
headerSearchSubmit.disabled = true;
// Управление активностью поиска
function toggleSearchState(isActive) {
  headerSearchSubmit.disabled = !isActive;
  headerSearchSubmit.classList.toggle(
    "header__search__submit_is-active",
    isActive
  );
  headerClearButton.classList.toggle(
    "header__clear__button_is-opened",
    isActive
  );
}
// Основная логика поиска
function Search() {
  // Открытие поиска по клику на кнопку
  headerSearchButton.addEventListener("click", () => {
    headerSearch.classList.toggle("header__search_is-opened");
    searchInput.focus();
  });

  // Обработка ввода в поле поиска
  searchInput.addEventListener("input", () => {
    toggleSearchState(searchInput.value.length > 0);
  });

  // Очистка поиска
  headerClearButton.addEventListener("mousedown", (evt) => {
    evt.preventDefault();
    searchInput.value = "";
    toggleSearchState(false);
  });
}
// функция ЗАКРЫТИЯ поиска
function clearSearch() {
  headerSearch.reset();
  headerSearch.classList.remove("header__search_is-opened");
  toggleSearchState(false);
  mainSearch.classList.remove("main__search_is-opened");
}
// Инициализация поиска
Search();

// Константы, переменные и функция перемещения формы поиска при изменении ширины экрана
const navigationItems = document.querySelectorAll(".navigation__item");
const navigationContent = document.querySelector(".popup__navigation__content");
const searchContainer = document.querySelector(".search");
const breakPoint = 1023;
function moveNavigation() {
  // Управление классами элементов навигации
  function toggleNavigationClasses(add = true) {
    navigationItems.forEach((item) => {
      item.classList.toggle("navigation__item_is-hover", add);
    });
  }

  // Перемещение поисковой формы
  function moveSearchForm(toTarget = true) {
    const target = toTarget ? navigationContent : searchContainer;
    target.appendChild(headerSearch);
    toggleNavigationClasses(!toTarget);
  }

  // Обработка клика по элементу навигации
  function handleNavigationClick(event) {
    const target = event.currentTarget;
    target.classList.toggle("navigation__item_is-rotate");
    target
      .querySelector(".navigation__hidden")
      .classList.toggle("navigation__hidden_is-opened");
  }

  // Проверка ширины окна
  function checkViewportWidth() {
    const viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    moveSearchForm(viewportWidth < breakPoint);
  }

  // Инициализация классов
  toggleNavigationClasses();

  // Добавление обработчиков
  navigationItems.forEach((item) => {
    item.addEventListener("click", handleNavigationClick);
  });

  // Инициализация положения поиска
  checkViewportWidth();

  // Обработка изменения размера окна
  window.addEventListener("resize", checkViewportWidth);
}
// Запуск инициализации
moveNavigation();

// Клонирование основного массива
const clonedArray = structuredClone(films);
// функция СОЗДАНИЯ в шапке сайта КАРТИНКИ с сеткой
clonedArray.forEach(function (item) {
  item.screenshots = Array.from(
    { length: item.screenshots },
    (element, index) => {
      var plus = index + 1;
      const basePath = location_of_the_images;
      const imageExtension = ".jpg";
      const linkName = name_for_link(item.original);

      let folder = "";

      if (item.format == "фильм") {
        folder = `films/${item.release.getFullYear()}/${linkName}`;
      } else if (item.season == "мини–сериал") {
        folder = `serials/${linkName}`;
      } else {
        folder = `serials/${linkName}/season__${item.season}`;
      }

      element = `${basePath}${folder}/${plus}${imageExtension}`;

      return element;
    }
  );

  const random = Math.floor(Math.random() * item.screenshots.length);
  const screenshotsRandom = item.screenshots[random];

  item.screenshots = Array.from({ length: 1 }, (element, index) => {
    return (element = screenshotsRandom);
  });
});
function BigImage() {
  // Функция для получения случайных уникальных элементов из массива
  const getRandomUniqueElements = (arr, count) => {
    if (count > arr.length) {
      throw new RangeError(
        "Количество запрашиваемых элементов превышает размер массива"
      );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Количество отображаемых изображений
  const IMAGE_COUNT = 25;

  // Получаем случайные скриншоты
  const selectedScreenshots = getRandomUniqueElements(clonedArray, IMAGE_COUNT);
  const screenshotUrls = selectedScreenshots.map(
    ({ screenshots }) => screenshots
  );

  // Функция для отображения изображений
  const template = document.querySelector("#top__images-template").content;
  const imageContainer = document.querySelectorAll(".top__images");
  function imagesHeader() {
    const template = document.querySelector("#top__images-template").content;
    const imagesContainer = document.querySelectorAll(".top__images");
    const createImageElement = (url) => {
      const imageBlock = template
        .querySelector(".top__images_block")
        .cloneNode(true);
      const image = imageBlock.querySelector(".top__images_image");

      Object.assign(image, {
        src: url,
        alt: "Скриншот",
      });

      image.addEventListener("load", () => {
        image.style.opacity = "1";
      });

      return imageBlock;
    };
    imagesContainer.forEach((container) => {
      screenshotUrls.forEach((url) => {
        container.append(createImageElement(url));
      });
    });
  }
  imagesHeader();

  document
    .querySelector(".main__logo")
    .classList.remove("main__logo_at-the-start");
}
BigImage();

// переключение ТЕМ
const themeButtons = {
  light: document.querySelector(".theme__light"),
  dark: document.querySelector(".theme__dark"),
};
// Функция для определения текущей темы
const getCurrentTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
const toggleTheme = (theme) => {
  document.body.classList.toggle("dark-theme", theme === "dark");
  // Сохраняем выбранную тему в localStorage
  localStorage.setItem("theme", theme);
  // Обновляем состояние кнопок
  themeButtons.light.classList.toggle(
    "theme__button_is-active",
    theme === "light"
  );
  themeButtons.dark.classList.toggle(
    "theme__button_is-active",
    theme === "dark"
  );

  // Блокируем/разблокируем кнопки
  themeButtons.light.disabled = theme === "light";
  themeButtons.dark.disabled = theme === "dark";

  closePopup(popupNavigation);
};
// Обработчики событий
themeButtons.light.addEventListener("click", () => toggleTheme("light"));
themeButtons.dark.addEventListener("click", () => toggleTheme("dark"));
// Функция для инициализации темы при загрузке страницы
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = getCurrentTheme();

  // Если тема не сохранена, используем светлую тему по умолчанию
  const theme = savedTheme || "light";

  toggleTheme(theme);
};
// Инициализируем тему при загрузке
window.addEventListener("load", initTheme);

// константа главного листа
const mainList = document.querySelector(".main__list");

// ПРЕЛОАДЕР
const loader = document.querySelector(".loader");
let loaderTime = 0;
function showLoader() {
  if (
    headerSearch.classList.contains("header__search_is-opened") ||
    mainSearch.classList.contains("main__search_is-opened")
  ) {
    clearSearch();
  } else {
    for (let popup of [popupNavigation, popupFilm]) {
      if (popup.classList.contains("popup_is-opened")) {
        closePopup(popup);
        break;
      }
    }
  }
  document.body.classList.add("no-scrollbar");
  loader.style.display = "flex";
}
function hideLoader() {
  document.querySelector(".main__base").scrollIntoView();
  document.body.classList.remove("no-scrollbar");
  loader.style.display = "none";
}

// функция ДОБАВЛЕНИЯ КАРТ
function addCard(item) {
  const mainListTemplate = document.querySelector(
    "#main__list-template"
  ).content;
  const mainListElement = mainListTemplate
    .querySelector(".main__list__item")
    .cloneNode(true);

  // скрытая информация
  mainListElement.querySelector(".card__grade").textContent = item.grade;
  mainListElement.querySelector(".card__title").textContent = item.title;
  mainListElement.querySelector(".card__year__original").textContent =
    item.release.getTime();
  mainListElement.querySelector(".card__publication__original").textContent =
    item.publication.getTime();

  // постер
  const originalName = mainListElement.querySelector(".card__title__original");
  originalName.textContent = item.original;
  const elementPoster = mainListElement.querySelector(".card__poster");
  const basePath = location_of_the_images + "miniposters/";
  const baseName = name_for_link(originalName.textContent);
  function setPoster() {
    const randomPoster =
      item.posters > 1 ? Math.floor(Math.random() * item.posters) + 1 : 1;
    item.posters = [randomPoster];
    const isSingle = item.format === "фильм" || item.season === "мини–сериал";
    const seasonSuffix = isSingle ? "" : `_${item.season}`;
    const posterSuffix = randomPoster > 1 ? `(${randomPoster})` : "";
    elementPoster.src = `${basePath}${baseName}${seasonSuffix}${posterSuffix}.jpg`;
  }
  setPoster();
  elementPoster.alt = `Постер из «${item.title}»`;
  elementPoster.addEventListener("load", () => {
    elementPoster.style.opacity = "1";
  });

  mainListElement.classList.add("main__list__item_is-opened");

  // Функция для определения падежа
  const getCaseEnding = (num) => {
    const endings = ["результат", "результата", "результатов"];
    num = Math.abs(num);

    if (!Number.isInteger(num)) return endings[1];

    const options = [2, 0, 1, 1, 1, 2];
    const index =
      num % 100 > 4 && num % 100 < 20
        ? 2
        : options[num % 10 < 5 ? num % 10 : 5];

    return endings[index];
  };
  // Обновляем счетчик результатов
  const updateResultsCount = () => {
    const count = document.querySelectorAll(
      ".main__list__item_is-opened"
    ).length;
    const startWord = count === 1 ? "Показан" : "Показано";

    document.querySelector(
      ".main__search__number"
    ).textContent = `${startWord} ${count} ${getCaseEnding(count)}`;
  };
  // Обработка поиска
  const handleSearch = (searchValue) => {
    removeNavigationTitle();
    document.querySelector(".main__search__result").textContent = searchValue;
    mainSearch.classList.add("main__search_is-opened");

    // Функция замены ё на е
    const replaceYo = (str) => {
      return str.replace(/ё/gi, "е");
    };

    const lower = (str) => str.toLowerCase();
    const valueLower = lower(searchValue);

    mainListElement.classList.toggle(
      "main__list__item_is-opened",
      lower(item.title).includes(valueLower) ||
      lower(item.original).includes(valueLower) ||
      lower(replaceYo(item.title)).includes(valueLower)
    );
  };
  // Обработчик формы
  headerSearch.addEventListener("submit", (evt) => {
    evt.preventDefault();

    closePopup(popupNavigation);
    headerSearch.classList.remove("header__search_is-opened");
    loader.style.display = "flex";

    setTimeout(() => {
      handleSearch(searchInput.value);
      setTimeout(() => {
        updateResultsCount();
        headerSearch.reset();
        toggleSearchState(false);
        hideLoader();
      }, 0);
    }, 0);
  });

  // ВСЕ константы шапки
  const descriptionElements = {
    container: document.querySelector(".main__description"),
    block: document.querySelector(".main__description__block"),
    format: document.querySelector(".main__description__format"),
    elements: document.querySelector(".main__description__elements"),
    title: document.querySelector(".main__description__title"),
    grade: document.querySelector(".main__description__grade"),
    names: document.querySelector(".main__description__names"),
    job: document.querySelector(".main__description__job"),
    photobox: document.querySelector(".main__description__photo"),
    photo: document.querySelector(".main__description__photo_img"),
    name: document.querySelector(".main__description__name"),
  };
  // Функция очистки шапки
  function removeNavigationTitle() {
    descriptionElements.block.classList.remove("main__description_is-opened");
    descriptionElements.elements.classList.remove(
      "main__description_is-opened"
    );
    descriptionElements.format.classList.remove(
      "main__description__element_is-opened"
    );
    descriptionElements.names.classList.remove(
      "main__description__names_is-opened"
    );
    descriptionElements.grade.title = "";
    descriptionElements.title.textContent = "";
    descriptionElements.title.classList.remove(
      "main__description__title_is-studio"
    );
    descriptionElements.title.style.backgroundImage = "url()";
  }
  // Успешные действия при нажатии на кнопку в навигации
  function openCard() {
    mainListElement.classList.add("main__list__item_is-opened");
  }
  // Провальные действия при нажатии на кнопку в навигации
  function mistake() {
    mainListElement.classList.remove("main__list__item_is-opened");
    closePopup(popupNavigation);
  }

  // Открыт ли формат
  function isFormatOpen() {
    return descriptionElements.format.classList.contains(
      "main__description__element_is-opened"
    );
  }
  // Соответсвует ли формат
  function isFormatMatch() {
    return descriptionElements.format.textContent.toLowerCase() == item.format;
  }
  // Смена шапки персон на шапку фильтров
  function updatePersonsHeaderToFilter() {
    ["block", "elements"].forEach((key) =>
      descriptionElements[key].classList.add("main__description_is-opened")
    );
    descriptionElements.format.classList.add("main__description__subtitle");
    descriptionElements.names.classList.remove(
      "main__description__names_is-opened"
    );
  }

  // ОБЩАЯ функция для обработки кликов
  function handleClick(element, handler, passElement = true) {
    if (element instanceof NodeList) {
      element.forEach((el) => {
        el.addEventListener("click", function () {
          showLoader();
          setTimeout(() => {
            if (passElement) {
              handler(el);
            } else {
              handler();
            }
            setTimeout(hideLoader, loaderTime);
          }, loaderTime);
        });
      });
    } else {
      element.addEventListener("click", function () {
        showLoader();
        setTimeout(() => {
          if (passElement) {
            handler(element);
          } else {
            handler();
          }
          setTimeout(hideLoader, loaderTime);
        }, loaderTime);
      });
    }
  }

  // ФОРМАТ в навигации
  const formatButtons = document.querySelectorAll(".navigation__format__item");
  function headerFormat(element) {
    descriptionElements.names.classList.remove(
      "main__description__names_is-opened"
    );
    descriptionElements.block.classList.add("main__description_is-opened");
    descriptionElements.format.classList.add(
      "main__description__element_is-opened",
      "main__description__format_is-marked",
      "main__description__subtitle"
    );
    descriptionElements.format.textContent = element.textContent;
  }
  function filteringFormat(element) {
    const format = element.textContent.toLowerCase();
    function isFormatValid() {
      return format == item.format;
    }
    if (isFormatValid()) {
      if (
        descriptionElements.elements.classList.contains(
          "main__description_is-opened"
        )
      ) {
        headerFormat(element);

        for (let i = 0; i < item.genres.length; i++) {
          if (
            descriptionElements.title.textContent.toLowerCase() ==
            item.genres[i].genre &&
            isFormatValid()
          ) {
            openCard();
            break;
          } else if (
            descriptionElements.title.textContent ==
            item.release.toString().slice(11, 15) &&
            isFormatValid()
          ) {
            openCard();
          } else if (
            descriptionElements.grade.title == item.grade &&
            isFormatValid()
          ) {
            openCard();
          }
        }
      } else {
        headerFormat(element);
        descriptionElements.format.classList.remove(
          "main__description__subtitle"
        );
        openCard();
      }
    } else {
      mistake();
    }
  }
  handleClick(formatButtons, filteringFormat);

  // ЖАНРЫ в навигации
  const genreButtons = document.querySelectorAll(".navigation__genres__item");
  // Функция проверки студия ли жанр
  function studioOrNot(item) {
    const studios = {
      pixar: {
        class: "main__description__title_is-pixar",
        logo: studioLogos.pixar,
      },
      marvel: {
        logo: studioLogos.marvel,
      },
      dc: {
        logo: studioLogos.dc,
      },
    };
    const lowerItem = item.toLowerCase();
    const isStudio = studios[lowerItem];
    descriptionElements.title.classList.toggle(
      "main__description__title_is-studio",
      !!isStudio
    );
    if (isStudio) {
      descriptionElements.title.classList.toggle(
        "main__description__title_is-pixar",
        lowerItem === "pixar"
      );
      descriptionElements.title.style.backgroundImage = `url(${isStudio.logo})`;
    } else {
      descriptionElements.title.style.backgroundImage = "";
    }
  }
  function headerGenre(element) {
    updatePersonsHeaderToFilter();
    descriptionElements.title.classList.add(
      "main__description__element_is-opened"
    );

    descriptionElements.title.textContent = element.textContent;
    studioOrNot(element.textContent);

    descriptionElements.grade.classList.remove(
      "main__description__element_is-opened"
    );
    descriptionElements.grade.title = "";
  }
  function filteringGenre(element) {
    for (let i = 0; i < item.genres.length; i++) {
      if (item.genres[i].genre == element.textContent.toLowerCase()) {
        if (isFormatOpen()) {
          headerGenre(element);
          if (isFormatMatch()) {
            openCard();
            break;
          }
        } else {
          headerGenre(element);
          openCard();
          break;
        }
      } else {
        mistake();
      }
    }
  }
  handleClick(genreButtons, filteringGenre);

  // Функция проверки соотвествия года
  function validateYearData(yearElement, itemData) {
    const yearText = yearElement.textContent;
    const releaseYear = itemData.release.toString().slice(11, 15);
    const continuationYear = itemData.continuation?.toString().slice(11, 15);

    return (
      yearText === releaseYear ||
      (continuationYear && yearText === continuationYear)
    );
  }
  // ГОДА в навигации
  const yearButtons = document.querySelectorAll(".navigation__releases__item");
  function headerYear(element) {
    updatePersonsHeaderToFilter();
    descriptionElements.title.classList.add(
      "main__description__element_is-opened"
    );
    descriptionElements.title.textContent = element.textContent;
    descriptionElements.title.classList.remove(
      "main__description__title_is-studio"
    );
    descriptionElements.title.style.backgroundImage = "url()";
    descriptionElements.grade.classList.remove(
      "main__description__element_is-opened"
    );
    descriptionElements.grade.title = "";
  }
  function filteringYear(element) {
    if (validateYearData(element, item)) {
      if (isFormatOpen()) {
        headerYear(element);
        if (isFormatMatch()) {
          openCard();
        }
      } else {
        headerYear(element);
        openCard();
      }
    } else {
      mistake();
    }
  }
  handleClick(yearButtons, filteringYear);

  // ОЦЕНКИ в навигации
  const gradeButtons = document.querySelectorAll(".navigation__grades__item");
  function headerGrade() {
    updatePersonsHeaderToFilter();
    descriptionElements.title.classList.remove(
      "main__description__element_is-opened"
    );
    descriptionElements.title.textContent = "";
    descriptionElements.grade.classList.add(
      "main__description__element_is-opened"
    );

    defineGradeBlack(item.grade, descriptionElements.grade);
    descriptionElements.grade.classList.toggle(
      "main__description__grade_is-loved",
      item.grade === "love"
    );
  }
  function filteringGrade(element) {
    const elementImg = element.querySelector(".navigation__grades__image");
    if (elementImg.title == item.grade) {
      if (isFormatOpen()) {
        headerGrade();
        if (isFormatMatch()) {
          openCard();
        }
      } else {
        headerGrade();
        openCard();
      }
    } else {
      mistake();
    }
  }
  handleClick(gradeButtons, filteringGrade);

  mainListElement.addEventListener("click", function () {
    showFilmCard(item);
    setTimeout(() => {
      popupFilm.scrollTo(0, 0);
    }, 0);
  });

  // Утилита для удаления элементов
  function removeElementsPopup() {
    popupFilm
      .querySelectorAll(".film__screenshot, .film__poster")
      .forEach(REMOVE);
  }

  // Функция обновления шапки по году
  function updateByYear(element) {
    ["block", "elements"].forEach((key) =>
      descriptionElements[key].classList.add("main__description_is-opened")
    );
    ["format", "grade"].forEach((key) =>
      descriptionElements[key].classList.remove(
        "main__description__element_is-opened"
      )
    );
    descriptionElements.names.classList.remove(
      "main__description__names_is-opened"
    );
    descriptionElements.title.classList.add(
      "main__description__element_is-opened"
    );
    descriptionElements.title.textContent = element.textContent;
    descriptionElements.grade.title = "";

    openCard();
    closePopup(popupFilm);
    removeElementsPopup();
  }
  // Константы годов попапе фильма
  const yearElement = popupFilm.querySelector(".film__header__year");
  const continuationYearElement = popupFilm.querySelector(
    ".film__header__continuation_year"
  );
  // Общая функция обработки для обоих годов
  const handleYearClick = (element) => {
    if (validateYearData(element, item)) {
      updateByYear(element);
    } else {
      mainListElement.classList.remove("main__list__item_is-opened");
    }
  };
  // Нажатие на года в попапе фильма
  handleClick(yearElement, handleYearClick);
  handleClick(continuationYearElement, handleYearClick);

  // Нажатие на оценку в попапе фильма
  const gradeWrapper = popupFilm.querySelector(".film__header__grade__wrapper");
  const gradeElement = popupFilm.querySelector(".film__header__grade");
  function filteringGradePopup() {
    if (gradeElement.title === item.grade) {
      ["block", "elements"].forEach((key) =>
        descriptionElements[key].classList.add("main__description_is-opened")
      );
      descriptionElements.names.classList.remove(
        "main__description__names_is-opened"
      );
      ["format", "title"].forEach((key) =>
        descriptionElements[key].classList.remove(
          "main__description__element_is-opened"
        )
      );

      descriptionElements.title.textContent = "";
      descriptionElements.grade.classList.add(
        "main__description__element_is-opened"
      );
      descriptionElements.grade.classList.toggle(
        "main__description__grade_is-loved",
        item.grade === "love"
      );

      defineGradeBlack(item.grade, descriptionElements.grade);
      openCard();
      closePopup(popupFilm);
      removeElementsPopup();
    } else {
      mainListElement.classList.remove("main__list__item_is-opened");
    }
  }
  handleClick(gradeWrapper, filteringGradePopup, false);

  // Смена шапки фильтров на шапку персон
  function updateFilterHeaderToPersons() {
    ["block", "elements"].forEach((key) =>
      descriptionElements[key].classList.remove("main__description_is-opened")
    );
    descriptionElements.format.classList.remove(
      "main__description__element_is-opened"
    );
    descriptionElements.grade.title = "";
    descriptionElements.names.classList.add(
      "main__description__names_is-opened"
    );
  }
  // Функция определения фотографии актеров/режиссеров
  function personsPhoto(element) {
    const photo = descriptionElements.photo;
    const container = descriptionElements.photobox;
    container.style.display = "none";
    const imagePath = `${location_of_the_images}persons/${name_for_person(
      element.textContent
    )}.png`;
    const image = new Image();
    // Обработчик успешного загрузки изображения
    image.onload = () => {
      container.style.display = "block";
      photo.src = image.src;
      photo.alt = element.textContent;
      photo.style.opacity = "1";
    };
    // Обработчик ошибки при загрузке
    image.onerror = () => {
      container.style.display = "none";
    };
    // Начинаем загрузку изображения
    image.src = imagePath;
  }
  function filteringPersonsPopup(element, name, isDirector) {
    descriptionElements.photo.style.opacity = "0";
    for (let i = 0; i < name.length; i++) {
      if (name[i].name == element.textContent) {
        updateFilterHeaderToPersons();
        personsPhoto(element);
        descriptionElements.name.textContent = element.textContent;
        openCard();
        closePopup(popupFilm);
        removeElementsPopup();

        if (isDirector) {
          const isFilmDirector = onlyFilmsDirectors.includes(
            element.textContent
          );
          const isSerialDirector = onlySerialsDirectors.includes(
            element.textContent
          );

          descriptionElements.job.textContent =
            isFilmDirector && isSerialDirector
              ? "Режиссер/Создатель"
              : isFilmDirector
                ? "Режиссер"
                : isSerialDirector
                  ? "Создатель"
                  : "В ролях";
        } else {
          descriptionElements.job.textContent = "В ролях";
        }

        break;
      } else {
        mainListElement.classList.remove("main__list__item_is-opened");
      }
    }
  }
  // Нажатие на актеров
  const castButtons = document.querySelectorAll(".film__cast__name");
  handleClick(castButtons, (el) => filteringPersonsPopup(el, item.cast, false));
  // Нажатие на режиссеров
  const directorButtons = document.querySelectorAll(".film__director__name");
  handleClick(directorButtons, (el) =>
    filteringPersonsPopup(el, item.director, true)
  );

  // функция ПЕРЕЗАГРУЗКИ всей страницы
  function Reset() {
    if (
      descriptionElements.block.classList.contains(
        "main__description_is-opened"
      ) ||
      descriptionElements.names.classList.contains(
        "main__description__names_is-opened"
      )
    ) {
      removeNavigationTitle();
    } else if (mainSortTitle.classList.contains("main__sort_is-opened")) {
      deleteSortTitle();
    } else if (
      headerSearch.classList.contains("header__search_is-opened") ||
      mainSearch.classList.contains("main__search_is-opened")
    ) {
      clearSearch();
    } else if (popupNavigation.classList.contains("popup_is-opened")) {
      closePopup(popupNavigation);
    }

    mainListElement.classList.add("main__list__item_is-opened");
    sortItems("card__publication__original", "desc");
  }

  // использование функции ПЕРЕЗАГРУЗКИ при нажатии на ГЛАВНУЮ КНОПКУ
  const handleScrollToMain = () => {
    showLoader();
    setTimeout(() => {
      Reset();
      setTimeout(() => {
        hideLoader();
      }, 0);
    }, 0);
  };
  const scrollTriggerSelectors = [
    ".navigation__main__item",
    ".header__main__button",
  ];
  scrollTriggerSelectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("click", handleScrollToMain);
    }
  });

  return mainListElement;
}

// Добавление карт
films.forEach(function (element) {
  mainList.append(addCard(element));
});

const popupFilmContent = popupFilm.querySelector(".popup__film__content");
const scrollButton = popupFilm.querySelector(".popup__film__scroll");
// Функция проверки мобильного устройства
const isMobileDevice = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
// Оптимизированная функция проверки прокрутки
const checkScrollAndSetLoaderTime = () => {
  const scrollTop = popupFilm.scrollTop;
  scrollButton.style.display =
    isMobileDevice() && scrollTop > 50 ? "block" : "none";
  if (isMobileDevice()) {
    loaderTime = 100;
  }
};
// Добавляем обработчики событий
popupFilm.addEventListener("scroll", () =>
  requestAnimationFrame(checkScrollAndSetLoaderTime)
);
window.addEventListener("load", checkScrollAndSetLoaderTime);

// функция ПОКАЗА попапа фильма
function showFilmCard(item) {
  // Реализация смены сторон шапки попапа
  const popupFilmCloseImg = document.querySelector(".popup__film__close__img");
  const filmPosters = popupFilm.querySelector(".film__posters");
  const filmHeaderText = popupFilm.querySelector(".film__header__text");
  const toggleReverse = () => {
    const isReverse = filmPosters.classList.toggle(
      "film__posters_is-row-reverse"
    );
    filmHeaderText.classList.toggle(
      "film__header__text_is-row-reverse",
      isReverse
    );
    popupFilmCloseImg.classList.toggle(
      "popup__film__close__img_is-reverse",
      !isReverse
    );
  };
  toggleReverse();

  // Уменьшение шрифта названия фильма, если символов больше 20
  const filmHeaderTitle = popupFilm.querySelector(".film__header__title");
  filmHeaderTitle.textContent = item.title;
  filmHeaderTitle.classList.toggle(
    "film__header__title_is-small",
    filmHeaderTitle.textContent.length > 20
  );

  // Константы информации из главной базы
  const filmData = {
    format: item.format,
    name: name_for_link(item.original),
    year: item.release.getFullYear(),
    season: item.season,
    posterCount: item.posters,
  };

  // ПОСТЕРЫ в попап
  function addPosters() {
    const template = document
      .querySelector("#film__poster-template")
      .content.querySelector(".film__poster");
    const isMovie =
      filmData.format === "фильм" || filmData.season === "мини–сериал";
    const baseUrl = `${location_of_the_images}posters/${filmData.name}`;

    for (let i = 0; i < 12; i++) {
      const poster = template.cloneNode(true);
      const suffix =
        filmData.posterCount > 1 ? `(${filmData.posterCount})` : "";
      const seasonPart = isMovie ? "" : `_${filmData.season}`;

      poster.src = `${baseUrl}${seasonPart}${suffix}.jpg`;
      poster.alt = `Постер из «${filmHeaderTitle.textContent}»`;
      poster.addEventListener("load", () => (poster.style.opacity = "1"));
      filmPosters.append(poster);
    }
  }
  addPosters();
  const filmPoster = popupFilm.querySelectorAll(".film__poster");

  // Добавление оценки в попап
  const filmGrade = popupFilm.querySelector(".film__header__grade");
  defineGradeBlack(item.grade, filmGrade);
  filmGrade.classList.toggle(
    "film__header__grade_is-loved",
    item.grade === "love"
  );

  // Константы текстовых данных шапки попапа
  const headerElements = {
    year: popupFilm.querySelector(".film__header__year"),
    season: popupFilm.querySelector(".film__header__season"),
    dash: popupFilm.querySelector(".film__header__subtitle__dash"),
    continuationYear: popupFilm.querySelector(
      ".film__header__continuation_year"
    ),
  };
  headerElements.year.textContent = item.release.getFullYear();
  headerElements.dash.style.display = "none";
  headerElements.continuationYear.style.display = "none";
  headerElements.season.textContent = "";
  if (item.season) {
    const seasonText =
      item.season === "мини–сериал"
        ? `${item.season}, `
        : item.season.length === 3
          ? `Сезоны ${item.season}, `
          : `Сезон ${item.season}, `;
    headerElements.season.textContent = seasonText;
    if (item.continuation) {
      headerElements.continuationYear.textContent =
        item.continuation.getFullYear();
      headerElements.dash.style.display = "inline-block";
      headerElements.continuationYear.style.display = "inline-block";
    }
  }

  // Константы для персон в шапке попапа
  const filmPersons = {
    director: {
      title: popupFilm.querySelector(".film__director__title"),
      case: popupFilm.querySelectorAll(".film__director__case"),
      names: popupFilm.querySelectorAll(".film__director__name"),
    },
    cast: {
      title: popupFilm.querySelector(".film__cast__title"),
      container: popupFilm.querySelector(".film__cast"),
      case: popupFilm.querySelectorAll(".film__cast__case"),
      names: popupFilm.querySelectorAll(".film__cast__name"),
    },
  };
  // Функция для установки заголовка с учетом формата и количества персон
  function setTitle(titleElement, format, count) {
    if (format === "фильм") {
      titleElement.textContent = `Режиссер${count > 1 ? "ы" : ""}: `;
    } else {
      titleElement.textContent = `Создател${count > 1 ? "и" : "ь"}: `;
    }
  }
  // Функция обработки имен
  function nameVerification(container, name, inside) {
    for (let i = 0; i < container.length; i++) {
      if (i < inside.length) {
        if (!container[i].textContent.includes(",")) {
          container[i].insertAdjacentText("beforeend", ", ");
        }
        container[i].classList.remove("film__name_is-closed");
        name[i].textContent = inside[i].name;
      } else {
        container[i].classList.add("film__name_is-closed");
      }

      const element = name[inside.length - 1];

      if (element) {
        let next = element.nextSibling;
        while (next) {
          const nextElement = next.nextSibling;
          element.parentNode.removeChild(next);
          next = nextElement;
        }
      }
    }
  }

  // Основная логика
  setTitle(filmPersons.director.title, item.format, item.director.length);
  nameVerification(
    filmPersons.director.case,
    filmPersons.director.names,
    item.director
  );

  const castNames = item.cast.flat().map(({ name }) => name);
  if (castNames.join("") === "") {
    filmPersons.cast.container.style.display = "none";
  } else {
    filmPersons.cast.container.style.display = "inline-block";
  }

  filmPersons.cast.title.textContent =
    item.cast.length > 1 ? "В ролях: " : "В главной роли: ";
  nameVerification(
    filmPersons.cast.case,
    filmPersons.cast.names,
    item.cast.flat()
  );

  // Определение описания и ссылки в попапе
  popupFilm.querySelector(".film__description").textContent = item.description;
  popupFilm.querySelector(".film__link").href = item.kinopoisk;
  popupFilm.querySelector(".film__link__name").textContent = item.format;

  // Константы для скриншотов
  const filmScreenshots = document.querySelector(".film__screenshots");
  const filmTemplate = document.querySelector(
    "#film__screenshots-template"
  ).content;
  const screenshotElement = filmTemplate.querySelector(".film__screenshot");
  // Функция для формирования пути к изображению
  function getImagePath(item) {
    const basePath = location_of_the_images;

    switch (true) {
      case filmData.format === "фильм":
        return `${basePath}films/${filmData.year}/${filmData.name}/${item}.jpg`;
      case filmData.season === "мини–сериал":
        return `${basePath}serials/${filmData.name}/${item}.jpg`;
      default:
        return `${basePath}serials/${filmData.name}/season__${filmData.season}/${item}.jpg`;
    }
  }
  // Функция создания скриншота
  function createScreenshot(item) {
    const element = screenshotElement.cloneNode(true);
    const img = element.querySelector(".film__screenshot__img");

    img.src = getImagePath(item);
    img.alt = `Скриншот из «${filmHeaderTitle.textContent}»`;
    img.addEventListener("load", () => {
      img.style.opacity = "1";
    });

    return element;
  }
  // Создание массива скриншотов
  const screenshots = Array.from(
    { length: item.screenshots },
    (_, index) => index + 1
  );
  // Добавление скриншотов на страницу
  screenshots.forEach((item) => {
    filmScreenshots.append(createScreenshot(item));
  });

  // Смена расположения скриншотов
  const isEven = filmScreenshots.classList.contains(
    "film__screenshots_is-even"
  );
  filmScreenshots.classList.toggle("film__screenshots_is-even", !isEven);
  filmScreenshots.classList.toggle("film__screenshots_is-odd", isEven);

  const popupScreenshots = document.querySelector(".popup__screenshots");
  const popupScreenshotsTemplate = document.querySelector(
    "#popup__screenshot-template"
  ).content;
  const filmScreenshot = popupFilm.querySelectorAll(".film__screenshot");
  for (let i = 0; i < filmScreenshot.length; i++) {
    filmScreenshot[i].addEventListener("click", function () {
      // Функция для добавления скриншота
      function addScreenshot(item) {
        const element = popupScreenshotsTemplate
          .querySelector(".popup__screenshot__block")
          .cloneNode(true);

        const img = element.querySelector(".popup__screenshot__img");
        const sourceImg = item.querySelector(".film__screenshot__img");

        img.src = sourceImg.src;
        img.alt = sourceImg.alt;
        img.addEventListener("load", () => {
          img.style.opacity = "1";
        });

        return element;
      }

      // Добавляем все скриншоты в popup
      filmScreenshot.forEach((element) => {
        popupScreenshots.append(addScreenshot(element));
      });

      // Открытие/закрытие попапа
      function managePopup(popup) {
        openPopup(popup);

        function blockKeys(e) {
          // Проверяем, открыт ли попап
          if (popup.classList.contains("popup_is-opened")) {
            // Блокируем клавиши: стрелка вверх (38), стрелка вниз (40), пробел (32)
            if ([38, 40, 32].includes(e.keyCode)) {
              e.preventDefault(); // предотвращаем стандартное действие
              return false;
            }
          }
        }
        document.addEventListener("keydown", blockKeys);

        // Получаем кнопку закрытия и добавляем обработчики
        const closeButton = popup.querySelector(".popup__screenshot__close");

        closeButton.addEventListener("click", () => closePopup(popup));
        addCloseOverlayListener(
          popup,
          simpleClose,
          ".popup__screenshot__block"
        );
      }
      managePopup(popupScreenshot);

      // Получаем необходимые элементы
      const popupScreens = popupScreenshots.querySelectorAll(
        ".popup__screenshot__block"
      );
      const prevButton = document.querySelector(".popup__screenshot__left");
      const nextButton = document.querySelector(".popup__screenshot__right");

      // Константы и переменные
      const INACTIVE_ATTR = "aria-disabled";
      let currentSlide = i;
      const slideCount = popupScreens.length;

      // Функция обновления состояния слайдера
      function updateSlider() {
        popupScreens.forEach((slide, index) => {
          slide.style.display = index === currentSlide ? "block" : "none";
        });

        // Обновляем состояние кнопок в зависимости от позиции
        prevButton.setAttribute(INACTIVE_ATTR, currentSlide === 0);
        nextButton.setAttribute(INACTIVE_ATTR, currentSlide === slideCount - 1);
      }

      // Функция обработки смены слайда
      const handleSlideChange = (direction) => {
        if (direction === "prev" && currentSlide > 0) {
          currentSlide--;
        } else if (direction === "next" && currentSlide < slideCount - 1) {
          currentSlide++;
        }
        updateSlider();
      };

      prevButton.addEventListener("click", () => handleSlideChange("prev"));
      nextButton.addEventListener("click", () => handleSlideChange("next"));

      // Обработка клавиш клавиатуры
      document.addEventListener("keydown", (event) => {
        if (!popupScreenshot.classList.contains("popup_is-opened")) return;

        const isArrowKey =
          event.key === "ArrowLeft" || event.key === "ArrowRight";

        if (isArrowKey) {
          const direction = event.key === "ArrowLeft" ? "prev" : "next";
          handleSlideChange(direction);
        }
      });

      // Инициализация
      updateSlider();
    });
  }

  // закрытие попапа при НАЖАТИИ на кнопку закрытия попапа фильма
  const closeButton = popupFilm.querySelector(".popup__film__close");
  closeButton.addEventListener("click", () => closePopup(popupFilm));

  // Обработчик клика для кнопки прокрутки
  scrollButton.addEventListener("click", () => {
    popupFilmContent.scrollIntoView({ behavior: "smooth" });
  });

  openPopup(popupFilm);
}

const mainSortTitle = document.querySelector(".main__sort");
// функция ДОБАЛЕНИЯ результатов СОРТИРОВКИ
function addSortTitle(element) {
  mainSortTitle.classList.add("main__sort_is-opened");
  mainSortTitle.textContent = element.textContent;
}
// функция УДАЛЕНИЯ результатов СОРТИРОВКИ
function deleteSortTitle() {
  mainSortTitle.classList.remove("main__sort_is-opened");
}

// константы СОРТИРОВОК в навигации
const sortElements = {
  nameAZ: document.querySelector(".sort__name__AZ"),
  nameZA: document.querySelector(".sort__name__ZA"),
  originalNameAZ: document.querySelector(".sort__original_name__AZ"),
  originalNameZA: document.querySelector(".sort__original_name__ZA"),
  yearAZ: document.querySelector(".sort__year__AZ"),
  yearZA: document.querySelector(".sort__year__ZA"),
  publicationAZ: document.querySelector(".sort__publication__AZ"),
  publicationZA: document.querySelector(".sort__publication__ZA"),
};

// Основная функция сортировки
function sortItems(className, direction = "asc", isNumeric = true) {
  const items = document.querySelectorAll(".main__list__item");
  const arr = Array.from(items);
  const compare = (a, b) => {
    const valA = isNumeric
      ? Number(a.querySelector(`.${className}`).innerText)
      : a.querySelector(`.${className}`).innerText;
    const valB = isNumeric
      ? Number(b.querySelector(`.${className}`).innerText)
      : b.querySelector(`.${className}`).innerText;
    return direction === "asc"
      ? (valA > valB) - (valA < valB)
      : (valA < valB) - (valA > valB);
  };
  arr.sort(compare).forEach((item, index) => (item.style.order = index));
  closePopup(popupNavigation);
}
// Функция для обработки сортировки
function handleSort(selector, direction, isNumeric = false, useDelete = false) {
  return function () {
    sortItems(selector, direction, isNumeric);
    if (useDelete) {
      deleteSortTitle();
    } else {
      addSortTitle(this);
    }
    document.querySelector(".main__base").scrollIntoView();
  };
}
// Привязка событий через цикл
const sortConfig = [
  {
    key: "nameAZ",
    selector: "card__title",
    direction: "asc",
    isNumeric: false,
  },
  {
    key: "nameZA",
    selector: "card__title",
    direction: "desc",
    isNumeric: false,
  },
  {
    key: "originalNameAZ",
    selector: "card__title__original",
    direction: "asc",
    isNumeric: false,
  },
  {
    key: "originalNameZA",
    selector: "card__title__original",
    direction: "desc",
    isNumeric: false,
  },
  {
    key: "yearAZ",
    selector: "card__year__original",
    direction: "desc",
    isNumeric: true,
  },
  {
    key: "yearZA",
    selector: "card__year__original",
    direction: "asc",
    isNumeric: true,
  },
  {
    key: "publicationAZ",
    selector: "card__publication__original",
    direction: "desc",
    isNumeric: true,
    useDelete: true,
  },
  {
    key: "publicationZA",
    selector: "card__publication__original",
    direction: "asc",
    isNumeric: true,
  },
];
// Обработчик на кнопки сортировки
sortConfig.forEach((config) => {
  sortElements[config.key].addEventListener(
    "click",
    handleSort(
      config.selector,
      config.direction,
      config.isNumeric,
      config.useDelete || false
    )
  );
});

// Карта состояний сортировки
const sortMap = new Map([
  [
    sortElements.yearAZ.textContent,
    { selector: "card__year__original", reverse: false },
  ],
  [
    sortElements.yearZA.textContent,
    { selector: "card__year__original", reverse: true },
  ],
  [
    sortElements.nameAZ.textContent,
    { selector: "card__title", reverse: true, thirdParam: false },
  ],
  [
    sortElements.nameZA.textContent,
    { selector: "card__title", reverse: false, thirdParam: false },
  ],
  [
    sortElements.originalNameAZ.textContent,
    { selector: "card__title__original", reverse: true, thirdParam: false },
  ],
  [
    sortElements.originalNameZA.textContent,
    { selector: "card__title__original", reverse: false, thirdParam: false },
  ],
]);
// Обработчик на кнопку заголовка сортировки
mainSortTitle.addEventListener("click", () => {
  const currentText = mainSortTitle.textContent;
  const currentState = sortMap.get(currentText);

  if (currentState) {
    const oppositeText = [...sortMap.keys()].find(
      (key) =>
        sortMap.get(key).selector === currentState.selector &&
        sortMap.get(key).reverse !== currentState.reverse
    );
    const params = [
      currentState.selector,
      currentState.reverse ? "desc" : "asc",
    ];
    if ("thirdParam" in currentState) {
      params.push(currentState.thirdParam);
    }
    sortItems(...params);
    mainSortTitle.textContent = oppositeText;
  } else {
    sortItems("card__publication__original", "desc");
    deleteSortTitle();
  }
});

//
//
//
// Название фильма для ссылки
function generateLinkTitle() {
  clonedArray.sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  );

  console.log(name_for_link(clonedArray[MOVIE_INDEX].original));
}
// const MOVIE_INDEX = 145
// generateLinkTitle()

// Количество публикаций
function getMediaStatsSummary() {
  // Создаем объект для хранения результатов
  const stats = {
    total: clonedArray.length,
    films: 0,
    serials: new Set(),
  };

  // Проходим по массиву один раз
  clonedArray.forEach((item) => {
    if (item.format === "фильм") {
      stats.films++;
    } else if (item.format === "сериал") {
      stats.serials.add(item.title);
    }
  });

  // Форматируем вывод
  const result = `Публикаций всего: ${stats.total}, из которых: фильмов — ${stats.films}, сериалов — ${stats.serials.size}.`;

  console.log(result.trim());
}
// getMediaStatsSummary();

// Имена актеров/режиссеров для ссылок
async function displayUniquePersonsList(startIndex = 0, endIndex = 0) {
  const namesSet = new Set();
  films.forEach((film) => {
    [...film.director, ...film.cast].forEach((person) => {
      namesSet.add(person.name);
    });
  });
  let uniqueSortedNames = Array.from(namesSet).sort();
  uniqueSortedNames = uniqueSortedNames.map((name) => name_for_person(name));
  console.log("Длина изначального массива:", uniqueSortedNames.length);

  async function checkImageExists(url) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  const promises = uniqueSortedNames.map(async (name) => {
    const url = location_of_the_images + "persons/" + name + ".png";
    const exists = await checkImageExists(url);
    return { name, exists };
  });

  const results = await Promise.all(promises);

  uniqueSortedNames = results
    .filter((result) => !result.exists)
    .map((result) => result.name);

  console.log("Длина итогового массива:", uniqueSortedNames.length);

  if (startIndex > 0 || endIndex > 0) {
    const slicedArray = uniqueSortedNames.slice(startIndex, endIndex + 1);
    slicedArray.forEach((name) => {
      console.log(name);
    });
  }

  return uniqueSortedNames;
}
async function run() {
  try {
    await displayUniquePersonsList(50, 100);
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
// run();
