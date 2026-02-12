const movies = [
  {
    title: "Медведь",
    original: ["The Bear"],
    release: "2025-06-25",
    publish: "2025-09-06T19:31:46",
    format: "сериал",
    season: "4",
    isMiniSeries: false,
    liked: "like",
    screenshots: 78,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/4481731/",
  }, // медведь 4
  {
    title: "Голый пистолет",
    original: ["The Naked Gun"],
    release: "2025-08-01",
    publish: "2025-09-06T16:11:52",
    directors: ["Акива Шаффер"],
    format: "фильм",
    liked: "like",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/817971/",
  }, // голый пистолет (2025)
  {
    title: "Элио",
    original: ["Elio"],
    release: "2025-06-20",
    publish: "2025-08-30T14:54:55",
    directors: ["Эдриан Молина", "Мадлен Шарафьян", "Доми Ши"],
    format: "фильм",
    liked: "dislike",
    screenshots: 54,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4893253/",
  }, // элио
  {
    title: "Рик и Морти",
    original: ["Rick and Morty"],
    release: "2025-05-25",
    publish: "2025-08-30T11:38:41",
    creators: ["Дэн Хармон", "Джастин Ройланд"],
    format: "сериал",
    season: "8",
    isMiniSeries: false,
    liked: "like",
    screenshots: 36,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/685246/",
  }, // рик и морти 8
  {
    title: "Супермен",
    original: ["Superman"],
    release: "2025-07-11",
    publish: "2025-08-26T07:46:23",
    directors: ["Джеймс Ганн"],
    format: "фильм",
    liked: "like",
    screenshots: 50,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/997647/",
  }, // супермен
  {
    title: "Стерилизован",
    original: ["Fixed"],
    release: "2025-08-13",
    publish: "2025-08-24T07:35:20",
    directors: ["Генндий Тартаковский"],
    format: "фильм",
    liked: "dislike",
    screenshots: 20,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4695962/",
  }, // стерилизован
  {
    title: "Миссия невыполнима: Финальная расплата",
    original: ["Mission: Impossible - The Final Reckoning"],
    release: "2025-05-23",
    publish: "2025-08-21T20:42:26",
    directors: ["Кристофер Маккуорри"],
    format: "фильм",
    liked: "like",
    screenshots: 33,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1229683/",
  }, // миссия невыполнима: финальная расплата
  {
    title: "Шалом, папик!",
    original: ["Shiva Baby"],
    release: "2021-04-21",
    publish: "2025-08-19T07:11:31",
    directors: ["Эмма Селигман"],
    format: "фильм",
    liked: "like",
    screenshots: 18,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1324912/",
  }, // шалом, папик!
  {
    title: "Прости, детка",
    original: ["Sorry, Baby"],
    release: "2025-07-25",
    publish: "2025-08-17T13:43:40",
    directors: ["Ева Виктор"],
    format: "фильм",
    liked: "like",
    screenshots: 57,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/7092649/",
  }, // прости, детка
  {
    title: "Жизнь Чака",
    original: ["The Life of Chuck"],
    release: "2025-06-13",
    publish: "2025-08-16T16:28:55",
    directors: ["Майк Флэнаган"],
    format: "фильм",
    liked: "dislike",
    screenshots: 27,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5406956/",
  }, // жизнь чака
  {
    title: "Главы государств",
    original: ["Heads of State"],
    release: "2025-07-02",
    publish: "2025-08-16T13:07:36",
    directors: ["Илья Найшуллер"],
    format: "фильм",
    liked: "dislike",
    screenshots: 18,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5278126/",
  }, // главы государств
  {
    title: "Приключения Тинтина: Тайна единорога",
    original: ["The Adventures of Tintin"],
    release: "2011-12-21",
    publish: "2025-08-06T07:41:41",
    directors: ["Стивен Спилберг"],
    format: "фильм",
    liked: "like",
    screenshots: 44,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/406186/",
  }, // приключения тинтина
  {
    title: "Младший брат",
    original: ["Didi", "Dìdi", "弟弟"],
    release: "2024-08-16",
    publish: "2025-08-03T09:52:57",
    directors: ["Шон Ван"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5448457/",
  }, // младший брат
  {
    title: "Джон Кью",
    original: ["John Q"],
    release: "2002-02-15",
    publish: "2025-07-29T07:27:31",
    directors: ["Ник Кассаветис"],
    format: "фильм",
    liked: "dislike",
    screenshots: 45,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/720/",
  }, // джон кью
  {
    title: "Голубой байу",
    original: ["Blue Bayou", "Синий залив"],
    release: "2021-09-17",
    publish: "2025-07-28T07:05:34",
    directors: ["Джастин Чон"],
    format: "фильм",
    liked: "like",
    screenshots: 75,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1313196/",
  }, // голубой байу
  {
    title: "Слоеный торт",
    original: ["Layer Cake"],
    release: "2004-10-01",
    publish: "2025-07-24T14:58:18",
    directors: ["Мэттью Вон"],
    format: "фильм",
    liked: "like",
    screenshots: 51,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/47250/",
  }, // слоеный торт
  {
    title: "Последний самурай",
    original: ["The Last Samurai"],
    release: "2003-12-05",
    publish: "2025-07-24T11:03:09",
    directors: ["Эдвард Цвик"],
    format: "фильм",
    liked: "like",
    screenshots: 90,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/6764/",
  }, // последний самурай
  {
    title: "Мармелад",
    original: ["Marmalade"],
    release: "2024-02-12",
    publish: "2025-07-24T17:53:33",
    directors: ["Кейр О’Доннелл"],
    format: "фильм",
    liked: "like",
    screenshots: 42,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5071324/",
  }, // мармелад
  {
    title: "Соучастник",
    original: ["Collateral"],
    release: "2004-08-06",
    publish: "2025-07-23T19:11:54",
    directors: ["Майкл Манн"],
    format: "фильм",
    liked: "like",
    screenshots: 18,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/61325/",
  }, // соучастник
  {
    title: "Пиджак",
    original: ["The Jacket", "Пиджмак"],
    release: "2005-03-04",
    publish: "2025-07-23T12:03:25",
    directors: ["Джон Мэйбери"],
    format: "фильм",
    liked: "dislike",
    screenshots: 32,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/47382/",
  }, // пиджак
  {
    title: "Поезд на Дарджилинг. Отчаянные путешественники",
    original: ["The Darjeeling Limited"],
    release: "2007-10-26",
    publish: "2025-07-20T11:42:43",
    directors: ["Уэс Андерсон"],
    format: "фильм",
    liked: "like",
    screenshots: 63,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/278185/",
  }, // поезд на дарджилинг
  {
    title: "Братья Супер Марио в кино",
    original: ["The Super Mario Bros. Movie"],
    release: "2023-04-05",
    publish: "2025-07-20T18:05:35",
    directors: ["Аарон Хорват", "Михаэль Еленик", "Пьер Ледюк"],
    format: "фильм",
    liked: "like",
    screenshots: 33,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1111005/",
  }, // братья супер марио в кино
  {
    title: "Четыре льва",
    original: ["Four Lions", "4 Lions"],
    release: "2010-05-07",
    publish: "2025-07-19T23:45:24",
    directors: ["Кристофер Моррис"],
    format: "фильм",
    liked: "like",
    screenshots: 14,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/448665/",
  }, // четыре льва
  {
    title: "Фантастическая четверка",
    original: ["Fantastic Four"],
    release: "2005-07-08",
    publish: "2025-07-14T23:00:34",
    directors: ["Тим Стори"],
    format: "фильм",
    liked: "like",
    screenshots: 42,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/23263/",
  }, // фантастическая четверка (2005)
  {
    title: "Хищник: Убийца убийц",
    original: ["Predator: Killer of Killers"],
    release: "2025-06-06",
    publish: "2025-07-13T13:51:14",
    directors: ["Дэн Трахтенберг", "Джошуа Вассунг"],
    format: "фильм",
    liked: "like",
    screenshots: 51,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/7596122/",
  }, // хищник: убийца убийц
  {
    title: "Король Ричард",
    original: ["King Richard"],
    release: "2021-11-19",
    publish: "2025-07-12T10:13:10",
    directors: ["Рейнальдо Маркус Грин"],
    operator: "Роберт Элсвит",
    format: "фильм",
    liked: "like",
    screenshots: 26,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1272469/",
  }, // король ричард
  {
    title: "Громовержцы*",
    original: ["Thunderbolts*", "New Avengers", "Новые Мстители"],
    release: "2025-05-02",
    publish: "2025-07-23T16:20:14",
    directors: ["Джейк Шрейер"],
    format: "фильм",
    liked: "like",
    screenshots: 66,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5001443/",
  }, // громовержцы*
  {
    title: "Грешники",
    original: ["Sinners"],
    release: "2025-04-18",
    publish: "2025-07-08T07:17:58",
    directors: ["Райан Куглер"],
    format: "фильм",
    liked: "like",
    screenshots: 51,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5499518/",
  }, // грешники
  {
    title: "Кто угодно, кроме тебя",
    original: ["Anyone But You"],
    release: "2023-12-22",
    publish: "2025-06-29T18:02:03",
    directors: ["Уилл Глак"],
    format: "фильм",
    liked: "like",
    screenshots: 32,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5305423/",
  }, // кто угодно, кроме тебя
  {
    title: "На вершине горы",
    original: ["Mountainhead"],
    release: "2025-05-31",
    publish: "2025-06-21T13:03:14",
    directors: ["Джесси Армстронг"],
    format: "фильм",
    liked: "dislike",
    screenshots: 27,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/7770979/",
  }, // на вершине горы
  {
    title: "Киностудия",
    original: ["The Studio"],
    release: "2025-03-26",
    publish: "2025-06-21T10:18:31",
    directors: ["Эван Голдберг", "Сет Роген"],
    format: "сериал",
    season: "1",
    isMiniSeries: false,
    liked: "like",
    screenshots: 23,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/6579800/",
  }, // киностудия 1
  {
    title: "Уимблдон",
    original: ["Wimbledon"],
    release: "2004-09-17",
    publish: "2025-06-14T15:36:43",
    directors: ["Ричард Лонкрэйн"],
    format: "фильм",
    liked: "dislike",
    screenshots: 17,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/19174/",
  }, // уимблдон
  {
    title: "Лило и Стич",
    original: ["Lilo & Stitch"],
    release: "2002-06-21",
    publish: "2025-06-08T11:08:27",
    directors: ["Дин ДеБлуа", "Крис Сандерс"],
    format: "фильм",
    liked: "like",
    screenshots: 42,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/740/",
  }, // лило и стич (2002)
  {
    title: "Опус",
    original: ["Opus"],
    release: "2025-03-14",
    publish: "2025-06-01T11:34:14",
    directors: ["Марк Энтони Грин"],
    format: "фильм",
    liked: "dislike",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/6718282/",
  }, // опус
  {
    title: "Любовь. Смерть. Роботы",
    original: ["Love, Death & Robots"],
    release: "2025-05-15",
    publish: "2025-06-01T15:45:35",
    creators: ["Тим Миллер"],
    format: "сериал",
    season: "4",
    isMiniSeries: false,
    liked: "like",
    screenshots: 20,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1228254/",
  }, // любовь, смерть и роботы 4
  {
    title: "Смерть единорога",
    original: ["Death of a Unicorn"],
    release: "2025-03-14",
    publish: "2025-05-31T11:37:25",
    directors: ["Алекс Шарфман"],
    format: "фильм",
    liked: "dislike",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5445197/",
  }, // смерть единорога
  {
    title: "Оценка",
    original: ["The Assessment"],
    release: "2024-09-08",
    publish: "2025-05-31T13:57:00",
    directors: ["Флёр Форчун"],
    format: "фильм",
    liked: "dislike",
    screenshots: 63,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/6042919/",
  }, // оценка
  {
    title: "Маленькая барабанщица",
    original: ["The Little Drummer Girl"],
    release: "2018-10-18",
    publish: "2025-05-28T08:07:07",
    directors: ["Пак Чхан-ук"],
    format: "сериал",
    isMiniSeries: true,
    liked: "dislike",
    screenshots: 18,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1100408/",
  }, // маленькая барабанщица
  {
    title: "Недруги",
    original: ["Hostiles"],
    release: "2017-09-02",
    publish: "2025-05-25T13:52:44",
    directors: ["Скотт Купер"],
    format: "фильм",
    liked: "dislike",
    screenshots: 30,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/963016/",
  }, // недруги
  {
    title: "Как трусливый Роберт Форд убил Джесси Джеймса",
    original: ["The Assassination of Jesse James by the Coward Robert Ford"],
    release: "2007-10-19",
    publish: "2025-05-25T09:20:23",
    directors: ["Эндрю Доминик"],
    operator: "Роджер Дикинс",
    format: "фильм",
    liked: "dislike",
    screenshots: 30,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/102127/",
  }, // как трусливый роберт форд убил джесси джеймса
  {
    title: "Быстрый и мертвый",
    original: ["The Quick and the Dead"],
    release: "1995-02-10",
    publish: "2025-05-23T21:02:13",
    directors: ["Сэм Рэйми"],
    format: "фильм",
    liked: "like",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/2273/",
  }, // быстрый и мертвый
  {
    title: "Омерзительная восьмерка",
    original: ["The Hateful Eight", "The Hateful 8"],
    release: "2015-12-30",
    publish: "2025-05-17T10:17:07",
    directors: ["Квентин Тарантино"],
    operator: "Роберт Ричардсон",
    format: "фильм",
    liked: "like",
    screenshots: 77,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/819101/",
  }, // омерзительная восьмерка
  {
    title: "Поезд на Юму",
    original: ["3:10 to Yuma"],
    release: "2007-09-07",
    publish: "2025-05-11T12:04:39",
    directors: ["Джеймс Мэнголд"],
    format: "фильм",
    liked: "like",
    screenshots: 27,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/78240/",
  }, // поезд на юму
  {
    title: "Падение империи",
    original: ["Civil War"],
    release: "2024-04-12",
    publish: "2025-05-09T12:30:23",
    directors: ["Алекс Гарленд"],
    format: "фильм",
    liked: "like",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4968810/",
  }, // падение империи
  {
    title: "Друзья навсегда",
    original: ["Our Friend"],
    release: "2019-09-06",
    publish: "2025-05-06T17:14:38",
    directors: ["Габриэла Каупертуэйт"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1231105/",
  }, // друзья навсегда
  {
    title: "Нарковоры",
    original: ["Dope Thief"],
    release: "2025-03-14",
    publish: "2025-05-04T17:02:47",
    format: "сериал",
    season: "1",
    isMiniSeries: false,
    liked: "dislike",
    screenshots: 42,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/5138508/",
  }, // нарковоры 1
  {
    title: "Железная хватка",
    original: ["True Grit"],
    release: "2010-12-22",
    publish: "2025-05-04T21:26:56",
    directors: ["Джоэл Коэн", "Итан Коэн"],
    operator: "Роджер Дикинс",
    format: "фильм",
    liked: "like",
    screenshots: 41,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/462553/",
  }, // железная хватка
  {
    title: "Стальная хватка",
    original: ["The Iron Claw"],
    release: "2023-12-22",
    publish: "2025-05-03T18:53:41",
    directors: ["Шон Дуркин"],
    format: "фильм",
    liked: "like",
    screenshots: 63,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5005446/",
  }, // стальная хватка
  {
    title: "Формула 1. Драйв выживания",
    original: ["Formula 1: Drive to Survive"],
    release: "2025-03-07",
    publish: "2025-05-03T15:36:46",
    format: "сериал",
    season: "7",
    isMiniSeries: false,
    liked: "like",
    screenshots: 47,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1240162/",
  }, // формула 1. драйв выживания 7
  {
    title: "Тот самый день",
    original: ["One of Them Days", "Один из этих дней"],
    release: "2025-01-17",
    publish: "2025-04-29T09:02:30",
    directors: ["Лоуренс Ламонт"],
    format: "фильм",
    liked: "dislike",
    screenshots: 15,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/7002807/",
  }, // тот самый день
  {
    title: "Жажда славы",
    original: ["Magazine Dreams"],
    release: "2023-01-20",
    publish: "2025-04-28T20:31:55",
    directors: ["Элайджа Байнум"],
    format: "фильм",
    liked: "dislike",
    screenshots: 60,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4704816/",
  }, // жажда славы
  {
    title: "Чёрный чемодан – двойная игра",
    original: ["Black Bag"],
    release: "2025-03-14",
    publish: "2025-04-18T20:42:38",
    directors: ["Стивен Содерберг"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5449060/",
  }, // чёрный чемодан – двойная игра
  {
    title: "Фримонт. Американская мечта",
    original: ["Fremont"],
    release: "2023-10-10",
    publish: "2025-04-13T10:55:46",
    directors: ["Бабак Джалали"],
    format: "фильм",
    liked: "like",
    screenshots: 60,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5108082/",
  }, // фримонт
  {
    title: "Подземелья и драконы: Честь среди воров",
    original: ["Dungeons & Dragons: Honor Among Thieves"],
    release: "2023-03-31",
    publish: "2025-04-06T10:30:32",
    directors: ["Джон Фрэнсис Дейли", "Джонатан М. Голдштейн"],
    format: "фильм",
    liked: "like",
    screenshots: 18,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/762646/",
  }, // подземелья и драконы: честь среди воров
  {
    title: "Микки 17",
    original: ["Mickey 17"],
    release: "2025-03-07",
    publish: "2025-04-06T23:17:48",
    directors: ["Пон Джун-хо"],
    operator: "Дариус Хонджи",
    format: "фильм",
    liked: "dislike",
    screenshots: 66,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1320476/",
  }, // микки 17
  {
    title: "Любой ценой",
    original: ["Hell or High Water"],
    release: "2016-08-26",
    publish: "2025-04-06T19:22:27",
    directors: ["Дэвид Маккензи"],
    format: "фильм",
    liked: "like",
    screenshots: 33,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/726794/",
  }, // любой ценой
  {
    title: "Варвар",
    original: ["Barbarian"],
    release: "2022-09-09",
    publish: "2025-04-06T11:47:45",
    directors: ["Зак Креггер"],
    format: "фильм",
    liked: "like",
    screenshots: 50,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4749790/",
  }, // варвар
  {
    title: "Частые побочные явления",
    original: ["Common Side Effects", "Обычные побочки"],
    release: "2025-02-02",
    publish: "2025-04-05T16:52:19",
    format: "сериал",
    season: "1",
    isMiniSeries: false,
    liked: "like",
    screenshots: 36,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/6990425/",
  }, // частые побочные явления 1
  {
    title: "Голый пистолет",
    original: ["The Naked Gun: From the Files of Police Squad!"],
    release: "1988-12-02",
    publish: "2025-04-05T09:24:15",
    directors: ["Дэвид Цукер"],
    format: "фильм",
    liked: "like",
    screenshots: 23,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4067/",
  }, // голый пистолет (1988)
  {
    title: "Разделение",
    original: ["Severance"],
    release: "2025-01-17",
    publish: "2025-04-04T23:10:03",
    creators: ["Бен Стиллер", "Дэн Эриксон"],
    format: "сериал",
    season: "2",
    isMiniSeries: false,
    liked: "like",
    screenshots: 237,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1343318/",
  }, // разделение 2
  {
    title: "Суперсемейка 2",
    original: ["Incredibles 2"],
    release: "2018-06-15",
    publish: "2025-03-30T20:46:55",
    directors: ["Брэд Бёрд"],
    format: "фильм",
    liked: "like",
    screenshots: 87,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/839650/",
  }, // суперсемейка 2
  {
    title: "Суперсемейка",
    original: ["The Incredibles"],
    release: "2004-11-05",
    publish: "2025-03-30T17:28:07",
    directors: ["Брэд Бёрд"],
    format: "фильм",
    liked: "like",
    screenshots: 27,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/38903/",
  }, // суперсемейка
  {
    title: "Мегамозг",
    original: ["Megamind"],
    release: "2010-11-05",
    publish: "2025-03-29T18:21:19",
    directors: ["Том МакГрат"],
    format: "фильм",
    liked: "like",
    screenshots: 30,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/405608/",
  }, // мегамозг
  {
    title: "Кровью и потом: Анаболики",
    original: ["Pain & Gain", "Анатолики"],
    release: "2013-04-26",
    publish: "2025-03-29T16:06:51",
    directors: ["Майкл Бэй"],
    format: "фильм",
    liked: "like",
    screenshots: 69,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/596227/",
  }, // кровью и потом: анаболики
  {
    title: "Жаркие летние ночи",
    original: ["Hot Summer Nights"],
    release: "2018-07-27",
    publish: "2025-03-29T22:05:00",
    directors: ["Элайджа Байнум"],
    format: "фильм",
    liked: "like",
    screenshots: 42,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/928993/",
  }, // жаркие летние ночи
  {
    title: "Проект Флорида",
    original: ["The Florida Project"],
    release: "2017-11-10",
    publish: "2025-03-28T15:50:29",
    directors: ["Шон Бэйкер"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/998317/",
  }, // проект флорида
  {
    title: "Маяк",
    original: ["The Lighthouse"],
    release: "2019-11-01",
    publish: "2025-03-26T17:22:10",
    directors: ["Роберт Эггерс"],
    format: "фильм",
    liked: "like",
    screenshots: 81,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1114927/",
  }, // маяк
  {
    title: "Лига справедливости Зака Снайдера: Черно-белая версия",
    original: ["Zack Snyder's Justice League: Justice Is Gray"],
    release: "2021-03-18",
    publish: "2025-03-26T11:03:58",
    directors: ["Зак Снайдер"],
    format: "фильм",
    liked: "dislike",
    screenshots: 126,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/4404112/",
  }, // лига справедливости зака снайдера
  {
    title: "Безумный Макс: Дорога ярости. Чёрно-белое издание",
    original: ["Mad Max: Fury Road Black And Chrome Edition"],
    release: "2016-12-01",
    publish: "2025-03-25T11:43:01",
    directors: ["Джордж Миллер"],
    format: "фильм",
    liked: "like",
    screenshots: 54,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/453406/",
  }, // безумный макс. чёрно-белое издание
  {
    title: "Синг-Синг",
    original: ["Sing Sing"],
    release: "2024-08-02",
    publish: "2025-03-21T20:44:06",
    directors: ["Грег Куидар"],
    format: "фильм",
    liked: "like",
    screenshots: 54,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5378058/",
  }, // синг-синг
  {
    title: "Отряд самоубийц: Миссия навылет",
    original: ["The Suicide Squad"],
    release: "2021-08-05",
    publish: "2025-03-21T18:13:46",
    directors: ["Джеймс Ганн"],
    format: "фильм",
    liked: "like",
    screenshots: 57,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1008477/",
  }, // отряд самоубийц: миссия навылет
  {
    title: "Книга джунглей",
    original: ["The Jungle Book"],
    release: "2016-04-15",
    publish: "2025-03-21T12:53:18",
    directors: ["Джон Фавро"],
    format: "фильм",
    liked: "like",
    screenshots: 36,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/779024/",
  }, // книга джунглей
  {
    title: "Присутствие",
    original: ["Presence"],
    release: "2024-01-19",
    publish: "2025-03-20T21:35:43",
    directors: ["Стивен Содерберг"],
    format: "фильм",
    liked: "like",
    screenshots: 21,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5445463/",
  }, // присутствие
  {
    title: "Логан: Нуар",
    original: ["Logan: Noir"],
    release: "2017-05-16",
    publish: "2025-03-20T15:44:28",
    directors: ["Джеймс Мэнголд"],
    format: "фильм",
    liked: "like",
    screenshots: 90,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/807682/",
  }, // логан: нуар
  {
    title: "Город воров",
    original: ["The Town"],
    release: "2010-09-17",
    publish: "2025-03-20T10:08:57",
    directors: ["Бен Аффлек"],
    operator: "Роберт Элсвит",
    format: "фильм",
    liked: "like",
    screenshots: 47,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/462732/",
  }, // город воров
  {
    title: "Непобедимый",
    original: ["Invincible"],
    release: "2025-02-06",
    publish: "2025-03-18T14:56:33",
    creators: ["Роберт Киркман"],
    format: "сериал",
    season: "3",
    isMiniSeries: false,
    liked: "like",
    screenshots: 57,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1171895/",
  }, // непобедимый 3
  {
    title: "Бегущий по лезвию 2049",
    original: ["Blade Runner 2049"],
    release: "2017-10-06",
    publish: "2025-03-17T13:03:52",
    directors: ["Дени Вильнёв"],
    operator: "Роджер Дикинс",
    format: "фильм",
    liked: "like",
    screenshots: 81,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/589290/",
  }, // бегущий по лезвию 2049
  {
    title: "Враг",
    original: ["Enemy"],
    release: "2013-09-08",
    publish: "2025-03-13T19:01:45",
    directors: ["Дени Вильнёв"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/673910/",
  }, // враг
  {
    title: "Мстители: Эра Альтрона",
    original: ["Avengers: Age of Ultron"],
    release: "2015-05-01",
    publish: "2025-03-08T00:37:12",
    directors: ["Джосс Уидон"],
    format: "фильм",
    liked: "like",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/679830/",
  }, // мстители: эра альтрона
  {
    title: "Топ Ган: Мэверик",
    original: ["Top Gun: Maverick"],
    release: "2022-05-27",
    publish: "2025-03-02T17:10:20",
    directors: ["Джозеф Косински"],
    format: "фильм",
    liked: "like",
    screenshots: 96,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/572032/",
  }, // топ ган: мэверик
  {
    title: "Вавилон",
    original: ["Babel"],
    release: "2006-11-10",
    publish: "2025-03-02T11:52:15",
    directors: ["Алехандро Гонсалес Иньярриту"],
    format: "фильм",
    liked: "dislike",
    screenshots: 27,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/102125/",
  }, // вавилон (2006)
  {
    title: "Белфаст",
    original: ["Belfast"],
    release: "2021-11-12",
    publish: "2025-03-01T19:08:31",
    directors: ["Кеннет Брана"],
    format: "фильм",
    liked: "like",
    screenshots: 69,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1397888/",
  }, // белфаст
  {
    title: "Пожары",
    original: ["Incendies"],
    release: "2010-09-03",
    publish: "2025-03-01T23:24:09",
    directors: ["Дени Вильнёв"],
    format: "фильм",
    liked: "like",
    screenshots: 53,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/425400/",
  }, // пожары
  {
    title: "Мстители: Финал",
    original: ["Avengers: Endgame"],
    release: "2019-04-26",
    publish: "2025-03-01T02:36:12",
    directors: ["Джо Руссо", "Энтони Руссо"],
    format: "фильм",
    liked: "like",
    screenshots: 69,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/843650/",
  }, // мстители: финал
  {
    title: "Мстители: Война бесконечности",
    original: ["Avengers: Infinity War"],
    release: "2018-04-27",
    publish: "2025-02-28T22:25:17",
    directors: ["Джо Руссо", "Энтони Руссо"],
    format: "фильм",
    liked: "like",
    screenshots: 89,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/843649/",
  }, // мстители: война бесконечности
  {
    title: "Вершина богов",
    original: ["The Summit of the Gods", "Le sommet des dieux"],
    release: "2021-11-30",
    publish: "2025-02-28T18:40:01",
    directors: ["Патрик Имбер"],
    format: "фильм",
    liked: "like",
    screenshots: 57,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1090932/",
  }, // вершина богов
  {
    title: "Ущелье",
    original: ["The Gorge"],
    release: "2025-02-14",
    publish: "2025-02-22T17:06:54",
    directors: ["Скотт Дерриксон"],
    format: "фильм",
    liked: "dislike",
    screenshots: 48,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/5098653/",
  }, // ущелье
  {
    title: "Трансформеры: Начало",
    original: ["Transformers One"],
    release: "2024-09-20",
    publish: "2025-02-22T13:07:42",
    directors: ["Джош Кули"],
    format: "фильм",
    liked: "like",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1229682/",
  }, // трансформеры: начало
  {
    title: "Бруталист",
    original: ["The Brutalist"],
    release: "2024-09-01",
    publish: "2025-02-21T21:52:44",
    directors: ["Брэйди Корбе"],
    format: "фильм",
    liked: "dislike",
    screenshots: 72,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1405331/",
  }, // бруталист
  {
    title: "Рома",
    original: ["Roma"],
    release: "2018-12-14",
    publish: "2025-02-17T07:35:43",
    directors: ["Альфонсо Куарон"],
    format: "фильм",
    liked: "like",
    screenshots: 39,
    kinopoiskUrl: "https://www.kinopoisk.ru/film/1008486/",
  }, // рома

  {
    title: "Формула 1. Драйв выживания",
    original: ["Formula 1: Drive to Survive"],
    release: "2024-02-23",
    publish: "2024-07-21T23:42:09",
    format: "сериал",
    season: "6",
    isMiniSeries: false,
    liked: "like",
    screenshots: 24,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1240162/",
  }, // формула 1. драйв выживания 6
  {
    title: "Формула 1. Драйв выживания",
    original: ["Formula 1: Drive to Survive"],
    release: "2023-02-24",
    publish: "2024-07-14T11:36:49",
    format: "сериал",
    season: "5",
    isMiniSeries: false,
    liked: "like",
    screenshots: 23,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1240162/",
  }, // формула 1. драйв выживания 5
  {
    title: "Непобедимый",
    original: ["Invincible"],
    release: "2023-11-03",
    publish: "2024-04-16T20:44:08",
    creators: ["Роберт Киркман"],
    format: "сериал",
    season: "2",
    isMiniSeries: false,
    liked: "like",
    screenshots: 29,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1171895/",
  }, // непобедимый 2
  {
    title: "Харли Квинн",
    original: ["Harley Quinn"],
    release: "2023-07-27",
    publish: "2023-10-07T22:51:54",
    format: "сериал",
    season: "1-4",
    releaseDates: ["2019-11-29", "2020-04-03", "2022-07-28", "2023-07-27"],
    isMiniSeries: false,
    liked: "like",
    screenshots: 22,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1112514/",
  }, // харли квинн 1-4
  {
    title: "Разделение",
    original: ["Severance"],
    release: "2022-02-18",
    publish: "2022-04-27T21:06:25",
    creators: ["Бен Стиллер", "Дэн Эриксон"],
    format: "сериал",
    season: "1",
    isMiniSeries: false,
    liked: "like",
    screenshots: 74,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1343318/",
  }, // разделение 1
  {
    title: "Непобедимый",
    original: ["Invincible"],
    release: "2021-03-26",
    publish: "2021-05-09T22:03:03",
    creators: ["Роберт Киркман"],
    format: "сериал",
    season: "1",
    isMiniSeries: false,
    liked: "like",
    screenshots: 21,
    kinopoiskUrl: "https://www.kinopoisk.ru/series/1171895/",
  }, // непобедимый 1
]; // ГЛАВНЫЙ МАССИВ

const basicLink = "https://shoneal.github.io/gargantua/images/"; // Главная ссылка

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark")
    document.body.classList.add("dark-theme"); // Смена темы

  updateHeader(); // Border у шапки
  handleFilterUpdate(); // Первоначальная фильтрация и рендер
});
document.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.closest(".dropdown-list")) {
    document.querySelectorAll(".dropdown-list").forEach((list) => {
      list.style.display = "none";
    });
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (openPopups.length) {
    e.preventDefault();
    closePopup(openPopups[openPopups.length - 1]);
    return;
  } // Закрытие попапов по Esc

  document.querySelectorAll(".dropdown-list").forEach((list) => {
    if (getComputedStyle(list).display === "block") {
      list.style.display = "none";
    }
  }); // Закрытие видимых dropdown-list
});
window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    handleScroll();
  },
  { passive: true },
);

const mainHeader = document.querySelector("header");
const updateHeader = () => {
  mainHeader.classList.toggle(
    "sticky-header",
    window.scrollY > 0 && !openPopups.includes(moviePopup),
  );
}; // Border у шапки
function toUrlFormat(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s\-:&]/g, "")
    .replace(/[\s:\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/&/g, "and");
} // Названия в URL-формат
function buildImageUrl({ type, title, season, screenshot, release, size }) {
  const dir = type === "poster" ? "posters" : type;
  const yearPart =
    type === "movie" && release ? `/${new Date(release).getFullYear()}` : "";
  const seasonPart =
    type === "series" && season
      ? `/season-${season}`
      : type === "poster" && season
        ? `-${season}`
        : "";

  return screenshot
    ? `${basicLink}${dir}${yearPart}/${toUrlFormat(
        title,
      )}${seasonPart}/${screenshot}.jpg`
    : `${basicLink}${dir}/${size}/${toUrlFormat(title)}${seasonPart}.jpg`;
} // Построение URL изображения
const setupImageWithContainer = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError, { once: true });
    img.addEventListener("error", onLoadOrError, { once: true });
  }
}; // Функция для настройки прозрачности изображения
const getResultPhrase = (count) => {
  const n = Math.abs(count) % 100;
  const lastDigit = n % 10;
  if (lastDigit === 1 && n !== 11) {
    return "результата";
  }
  return "результатов";
}; // Склонение слова "результат"

//
//
// АНИМИРОВАННАЯ ШАПКА СО СКРИНШОТАМИ
//
//
const figures = document.querySelectorAll(".figure");
function getRandomItems(arr, count) {
  const result = [];
  const indices = Array.from({ length: arr.length }, (_, i) => i);

  for (let i = 0; i < count && i < arr.length; i++) {
    const j = Math.floor(Math.random() * (arr.length - i)) + i;
    [indices[i], indices[j]] = [indices[j], indices[i]];
    result.push(arr[indices[i]]);
  }

  return result;
}
const randomMovies = getRandomItems(movies, 25); // 25 случайных элементов
function createImageBlock(image) {
  const block = document.createElement("div");
  const img = document.createElement("img");
  img.src = image;
  block.appendChild(img);
  return block;
}
const handleFigureLoad = (figure) => {
  const images = figure.querySelectorAll("img");
  let loaded = 0;
  const onDone = () => {
    if (++loaded === images.length) figure.style.opacity = "1";
  };

  images.forEach((img) => {
    img.complete
      ? onDone()
      : ["load", "error"].forEach((event) =>
          img.addEventListener(event, onDone, { once: true }),
        );
  });
};
randomMovies.forEach((movie) => {
  const image = buildImageUrl({
    type: movie.format === "фильм" ? "movie" : "series",
    title: movie.original[0],
    season: movie.season,
    screenshot: Math.floor(Math.random() * movie.screenshots) + 1,
    release: movie.release,
  });

  figures.forEach((figure) => figure.appendChild(createImageBlock(image)));
});
figures.forEach(handleFigureLoad); // Создание анимационного блока с изображениями в верхнюю часть сайта

//
//
// ФОРМИРОВАНИЕ ФИЛЬТРОВ ИЗ ГЛАВНОГО МАССИВА
//
//
const forms = document.querySelector(".forms");
const buttons = forms.querySelectorAll(".search-multiselect-button");
const createFilterItem = (text, value, type, isBase) => {
  const li = document.createElement("li");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const valueSpan = document.createElement("span");
  input.type = "radio";
  input.name = type;
  input.value = value;
  label.appendChild(input);
  valueSpan.className = "input-value";
  valueSpan.textContent = text;
  label.appendChild(valueSpan);
  if (!isBase) {
    const counterSpan = document.createElement("span");
    counterSpan.className = "input-counter";
    label.appendChild(counterSpan);
  }
  li.appendChild(label);
  return li;
};
buttons.forEach((button) => {
  button
    .querySelector("span")
    .after(
      document.querySelector(".select-wrapper .checkmark").cloneNode(true),
    );

  const list = document.createElement("ul");
  list.classList.add("dropdown-list");
  list.style.display = "none";

  const filterType = button.closest(".form").classList[1].replace(/-.*$/, "");

  const base = createFilterItem("все", "все", filterType, true);
  base.querySelector("input").checked = true;
  list.prepend(base);

  switch (filterType) {
    case "format":
      ["фильм", "сериал"].forEach((format) => {
        list.appendChild(createFilterItem(format, format, filterType));
      });
      break;

    case "year":
      const years = new Set(
        movies.flatMap((movie) => [
          new Date(movie.release).getFullYear(),
          ...(movie.releaseDates?.map((d) => new Date(d).getFullYear()) || []),
        ]),
      );
      const sortedYears = [...years].sort((a, b) => b - a);
      sortedYears.forEach((year) =>
        list.appendChild(createFilterItem(year, year, filterType)),
      );
      break;

    case "liked":
      ["like", "dislike"].forEach((liked) => {
        list.appendChild(createFilterItem(liked, liked, filterType));
      });
      break;
  }

  button.after(list);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = list.style.display === "block";
    document.querySelectorAll(".dropdown-list").forEach((el) => {
      if (el !== list) el.style.display = "none";
    });
    list.style.display = isOpen ? "none" : "block";
  });
}); // Добавление фильтров формат, год и оценка

//
//
//
//
//
const homepageButton = document.querySelector(".homepage");
const statusMessage = document.querySelector(".search-form-status");
const searchWrapper = document.querySelector(".input-wrapper");
const searchLabel = searchWrapper.querySelector(".input-wrapper label");
const searchInput = document.getElementById("searchTextField");
const searchButton = searchInput.parentElement.nextElementSibling;
const sortSelect = document.querySelector(".search-form-sort-by");
const filters = forms.querySelectorAll('input[type="radio"]');
const moviesContainer = document.querySelector(".movies");

let currentFilteredMovies = movies;
let currentIndex = 0;
let moviesPerPage = window.innerWidth > 940 ? 18 : 12;
let isFiltering = false;
const defaultSortType = sortSelect.options[0].value;
let currentSortType = sortSelect.value;

//
//
// ФИЛЬТРАЦИЯ И СОРТИРОВКА
//
//
function getFiltersValues() {
  const values = {};
  filters.forEach((filter) => {
    if (filter.checked) values[filter.name] = filter.value;
  });
  return values;
} // Получение значений фильтров
const applyFiltersAndSort = (movies, query, sortType, overrideFilters) => {
  let filtered = [...movies];
  const filterValues = overrideFilters || getFiltersValues();

  if (filterValues.format !== "все") {
    filtered = filtered.filter((movie) => movie.format === filterValues.format);
  }

  if (filterValues.year !== "все") {
    const targetYear = parseInt(filterValues.year, 10);
    filtered = filtered.filter((movie) => {
      if (new Date(movie.release).getFullYear() === targetYear) return true;
      return (
        movie.releaseDates?.some(
          (date) => new Date(date).getFullYear() === targetYear,
        ) || false
      );
    });
  }

  if (filterValues.liked !== "все") {
    filtered = filtered.filter((movie) => movie.liked === filterValues.liked);
  }

  if (query.trim() !== "") {
    filtered = filtered.filter((movie) => {
      const searchTerms = [
        movie.title.toLowerCase(),
        movie.operator?.toLowerCase() || "",
        ...movie.original.map((title) => title.toLowerCase()),
        ...(movie.directors || []).map((d) => d.toLowerCase()),
        ...(movie.creators || []).map((c) => c.toLowerCase()),
      ];
      return searchTerms.some((term) => term.includes(query.toLowerCase()));
    });
  }

  switch (sortType) {
    case "publish":
      return filtered.sort((a, b) => new Date(b.publish) - new Date(a.publish));
    case "release":
      return filtered.sort((a, b) => new Date(b.release) - new Date(a.release));
    case "title":
      return filtered.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return filtered;
  }
}; // Фильтрация и сортировка

//
//
// ВЫВОД ПОСТЕРОВ НА СТРАНИЦУ
//
//
const movieElementMap = new WeakMap();
const renderMovies = (moviesToRender, startIndex, endIndex) => {
  if (startIndex === 0) moviesContainer.innerHTML = "";

  for (let i = startIndex; i < endIndex && i < moviesToRender.length; i++) {
    const movie = moviesToRender[i];
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add("movie");
    img.classList.add("movie-poster");
    img.style.opacity = "0";
    img.src = buildImageUrl({
      type: "poster",
      title: movie.original[0],
      season: movie.season,
      size: "thumb",
    });
    img.alt = `Постер "${movie.title}"`;
    setupImageWithContainer(img);

    div.appendChild(img);
    moviesContainer.appendChild(div);
    movieElementMap.set(div, movie);
  }
}; // Рендер фильмов
moviesContainer.addEventListener(
  "click",
  (e) => {
    const movieElement = e.target.closest(".movie");
    if (!movieElement) return;

    const movie = movieElementMap.get(movieElement);
    if (movie) openMoviePopup(movie);
  },
  { passive: true },
); // Клик по постерам

function handleFilterUpdate() {
  const currentFilters = getFiltersValues();
  const searchQuery = searchInput.value.trim();

  filters.forEach((input) => {
    const label = input.closest("label");
    const { name: filterName, value: filterValue } = input;
    const counter = label.querySelector(".input-counter");

    if (input.checked || filterValue === "все") {
      label.classList.remove("disabled");
      if (counter) {
        const result = applyFiltersAndSort(
          movies,
          searchQuery,
          currentSortType,
          currentFilters,
        );
        counter.textContent = result.length;
      }
      return;
    }

    const result = applyFiltersAndSort(movies, searchQuery, currentSortType, {
      ...currentFilters,
      [filterName]: filterValue,
    });

    label.classList.toggle("disabled", !result.length);
    if (counter) counter.textContent = result.length || "";
  });

  updateMoviesDisplay();
  updateButtonState();
} // Функция активных/неактивных фильтров и обновления счётчиков
const updateHiddenFiltersUI = () => {
  const searchForm = document.querySelector(".search-form");
  const filterValues = getFiltersValues();
  const activeFilters = Object.entries(filterValues).filter(
    ([_, value]) => value !== "все",
  );

  let section = searchForm.querySelector(".section-hidden");
  if (!section) {
    section = document.createElement("div");
    section.className = "section-hidden";
    searchForm.appendChild(section);
  }

  if (activeFilters.length === 0) {
    section.remove();
    return;
  }

  section.textContent = "";
  const queryFacets = document.createElement("div");
  queryFacets.className = "query-facets";
  section.appendChild(queryFacets);

  activeFilters.forEach(([type, value]) => {
    const queryFacet = document.createElement("div");
    queryFacet.className = "query-facet";

    const label = document.querySelector(
      `.form.${type}-range .search-multiselect-button`,
    );
    const labelText = label ? label.textContent.trim() : type;
    const labelSpan = document.createElement("span");
    labelSpan.textContent = `${labelText}: `;
    queryFacet.appendChild(labelSpan);

    const button = document.createElement("button");
    button.dataset.type = type;
    button.textContent = value;

    queryFacet.appendChild(button);
    queryFacets.appendChild(queryFacet);
  });

  queryFacets.addEventListener(
    "click",
    (e) => {
      if (e.target.tagName === "BUTTON") {
        const type = e.target.dataset.type;
        const input = document.querySelector(
          `.form.${type}-range input[value="все"]`,
        );
        if (input) {
          input.checked = true;
          input.dispatchEvent(new Event("change"));
        }
      }
    },
    { passive: true },
  );
}; // Создание/удаление скрытого блока для промежуточных результатов фильтров
const applyFiltersAndRender = () => {
  currentIndex = 0;
  renderMovies(
    currentFilteredMovies,
    currentIndex,
    currentIndex + moviesPerPage,
  );
};
const updateMoviesDisplay = () => {
  statusMessage.textContent = "Загрузка...";

  const query = searchInput.value.trim();
  isFiltering = true;

  currentFilteredMovies = applyFiltersAndSort(movies, query, currentSortType);

  applyFiltersAndRender();
  updateHiddenFiltersUI();

  if (query) {
    const count = currentFilteredMovies.length;
    const word = getResultPhrase(count);
    statusMessage.textContent = `Отображение ${count} ${word} для:`;
  } else {
    statusMessage.textContent = "";
  }

  isFiltering = false;
}; // Основной рендер + обновление
const loadMoreMovies = () => {
  const endIndex = currentIndex + moviesPerPage;

  if (currentIndex < currentFilteredMovies.length) {
    renderMovies(currentFilteredMovies, currentIndex, endIndex);
    currentIndex = endIndex;
  }
}; // Подгрузка дополнительных фильмов
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 100 && !isFiltering) {
    loadMoreMovies();
  }
}; // Подгрузка при приближении к концу страницы (зазор 100px)

//
//
// ОБРАБОТЧИКИ СОБЫТИЙ НА ФИЛЬТРЫ И ПОИСК
//
//
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleFilterUpdate();
});
searchInput.addEventListener("focus", () =>
  searchButton.classList.add("is-active"),
);
searchInput.addEventListener("blur", () =>
  searchButton.classList.remove("is-active"),
);
const updateResetButton = (onClearAction) => {
  const resetBtn = searchWrapper.querySelector(".search-reset");

  if (searchInput.value) {
    if (!resetBtn) {
      const btn = document.createElement("input");
      btn.type = "reset";
      btn.className = "search-reset";
      btn.value = "Очистить";
      btn.onclick = () => onClearAction(btn);
      searchWrapper.appendChild(btn);
    }
  } else if (resetBtn) {
    resetBtn.remove();
  }
};
const clearAndUpdate = (btn) => {
  searchInput.value = "";
  setTimeout(() => searchInput.blur(), 0);
  btn.remove();
  handleFilterUpdate();
};
const clearAndRefocus = (btn) => {
  searchInput.value = "";
  btn.remove();
  searchInput.focus();
};
searchInput.addEventListener("input", () => updateResetButton(clearAndRefocus)); // "Очистить" поиск
filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    const dropdownList = filter.closest(".dropdown-list");
    if (dropdownList) dropdownList.style.display = "none";
    handleFilterUpdate();
  });
}); // Фильтры
sortSelect.addEventListener("change", (e) => {
  currentSortType = e.target.value;
  handleFilterUpdate();
}); // Сортировка

//
//
// КЛИК ПО ГЛАВНОЙ КНОПКЕ
//
//
const isInDefaultState = () => {
  if (searchInput.value.trim()) return false;
  if (sortSelect.value !== defaultSortType) return false;
  for (const filter of filters) {
    if (filter.value === "все" && !filter.checked) return false;
  }
  return true;
}; // Все ли элементы в базовом состоянии?
const updateButtonState = () => {
  const isDefault = isInDefaultState();
  homepageButton.classList.toggle("disabled", isDefault);
}; // Обновление состояния главной кнопки
const resetFiltersAndSearch = (searchValue) => {
  searchInput.value = searchValue;
  sortSelect.value = defaultSortType;
  currentSortType = defaultSortType;
  filters.forEach((f) => f.value === "все" && (f.checked = true));
  handleFilterUpdate();
}; // Сброс фильтров и поиска
homepageButton.addEventListener("click", (e) => {
  e.preventDefault();
  resetFiltersAndSearch("");
  requestAnimationFrame(() => window.scrollTo(0, 0));
}); // Обработчик сброса по главной кнопке

//
//
// ФУНКЦИИ ОТКРЫТИЯ/ЗАКРЫТИЯ ПОПАПА
//
//
const openPopups = []; // Стек открытых попапов
function openPopup(popup) {
  if (openPopups.includes(popup)) return;
  openPopups.push(popup);

  popup.classList.add("is-opened");

  if (popup === moviePopup) {
    const body = document.body;
    const scrollPosition = window.scrollY;
    body.dataset.scrollPosition = scrollPosition;
    body.style.top = `-${scrollPosition}px`;
    body.classList.add("scroll-lock");
    updatePopupHeader();
    moviePopup.addEventListener("scroll", updatePopupHeader);
    requestAnimationFrame(() => (moviePopup.scrollTop = 0));
  }
} // Открыть попап
function closePopup(popup) {
  const index = openPopups.indexOf(popup);
  if (index === -1) return;
  openPopups.splice(index, 1);

  popup.classList.remove("is-opened");

  if (popup === moviePopup) {
    const body = document.body;
    const scrollPosition = body.dataset.scrollPosition;
    body.style.top = "";
    body.classList.remove("scroll-lock");
    window.scrollTo(0, scrollPosition);
    popupContent.removeEventListener("scroll", updatePopupHeader);
  }
} // Закрыть попап

//
//
// ПОПАП ФИЛЬМА
//
//
const moviePopup = document.querySelector(".movie-popup");
const popupContent = moviePopup.querySelector(".popup-content");
const popupElements = {
  header: popupContent.querySelector(".header-container"),
  opinion: popupContent.querySelector(".opinion"),
  title: popupContent.querySelector(".heading"),
  year: popupContent.querySelector(".timestamp"),
  by: popupContent.querySelector(".byline"),
  publish: popupContent.querySelector("time"),
  link: popupContent.querySelector(".article-link"),
  poster: popupContent.querySelector(".media"),
  figcaption: popupContent.querySelector("figcaption"),
  body: popupContent.querySelector(".article-body"),
}; // Все элементы попапа с фильмом
const popupHeader = document.createElement("header");
popupHeader.appendChild(homepageButton.cloneNode(true));
popupContent.insertBefore(popupHeader, popupElements.header);
popupHeader.addEventListener("click", (e) => {
  if (e.target.closest(".homepage")) {
    e.preventDefault();
    closePopup(moviePopup);
    return;
  }
  if (moviePopup.scrollTop) moviePopup.scrollTop = 0;
}); // Добавление обработчика закрытия попапа и скролла наверх попапа на скопированный header
const updatePopupHeader = () => {
  popupHeader.classList.toggle("sticky-header", moviePopup.scrollTop > 0);
}; // Border у шапки попапа

const getScreenshotUrl = (movie, index) =>
  buildImageUrl({
    type: movie.format === "фильм" ? "movie" : "series",
    title: movie.original[0],
    season: movie.season,
    screenshot: index,
    release: movie.release,
  });
window.currentSlideshow = null;
const openMoviePopup = (movie) => {
  popupElements.opinion.textContent = movie.liked;
  popupElements.title.textContent = movie.title;
  popupElements.title.classList[movie.title.length > 20 ? "add" : "remove"](
    "smaller",
  );

  const year = new Date(movie.release).getFullYear();
  let yearText = year;
  if (movie.format === "сериал") {
    if (movie.isMiniSeries) {
      yearText = `Мини-сериал, ${year}`;
    } else if (movie.releaseDates) {
      const firstYear = new Date(movie.releaseDates[0]).getFullYear();
      const lastYear = new Date(movie.releaseDates.at(-1)).getFullYear();
      yearText = `Сезоны ${movie.season}, ${firstYear}–${lastYear}`;
    } else {
      yearText = `Сезон ${movie.season}, ${year}`;
    }
  }
  popupElements.year.textContent = yearText;

  popupElements.by.innerHTML = "";
  const renderPersons = (list, label) => {
    const span = document.createElement("span");
    span.textContent =
      list.length > 1
        ? label === "Создатель"
          ? "Создатели: "
          : `${label}ы: `
        : `${label}: `;

    list.forEach((person, i) => {
      if (i > 0) span.append(", ");

      const a = document.createElement("a");
      a.textContent = person;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        closePopup(moviePopup);
        resetFiltersAndSearch(person);
        updateResetButton(clearAndUpdate); // Вызываем с нужной стратегией
      });
      span.appendChild(a);
    });

    popupElements.by.appendChild(span);
  };
  if (movie.directors) renderPersons(movie.directors, "Режиссёр");
  if (movie.creators) renderPersons(movie.creators, "Создатель");
  if (movie.operator) renderPersons([movie.operator], "Оператор");

  popupElements.publish.dateTime = movie.publish;
  const date = new Date(movie.publish);
  const month = date.toLocaleString("ru-RU", { month: "long" });
  popupElements.publish.textContent = `${date.getDate()} ${
    month === "март" || month === "август"
      ? month + "а"
      : month.slice(0, -1) + "я"
  } ${date.getFullYear()}`;

  popupElements.link.href = movie.kinopoiskUrl;

  popupElements.poster.style.opacity = "0";
  popupElements.poster.src = buildImageUrl({
    type: "poster",
    title: movie.original[0],
    season: movie.season,
    size: "full",
  });
  popupElements.poster.alt = `Постер "${movie.title}"`;
  setupImageWithContainer(popupElements.poster);

  const count = movie.screenshots;
  const text =
    count % 100 >= 11 && count % 100 <= 19
      ? "скриншотов"
      : [1].includes(count % 10)
        ? "скриншот"
        : [2, 3, 4].includes(count % 10)
          ? "скриншота"
          : "скриншотов";
  popupElements.figcaption.textContent = `${count} ${text}`;

  popupElements.body.replaceChildren();
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= movie.screenshots; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");

    img.style.opacity = "0";
    img.src = getScreenshotUrl(movie, i);
    img.loading = "lazy";
    setupImageWithContainer(img);

    div.appendChild(img);
    fragment.appendChild(div);
  }

  popupElements.body.appendChild(fragment);

  if (window.currentSlideshow) {
    window.currentSlideshow.close(); // Закрываем старый слайдер
  }
  window.currentSlideshow = initSlideshow(
    slideshowPopup,
    movie.screenshots,
    (index) => getScreenshotUrl(movie, index + 1),
  );
  popupElements.body.addEventListener(
    "click",
    (e) => {
      const thumb = e.target.closest("div");
      if (!thumb) return;

      const index = Array.from(popupElements.body.children).indexOf(thumb);
      window.currentSlideshow.open(index);
    },
    { passive: true },
  );
  const reverse = popupElements.body.classList.contains("odd");
  popupElements.body.classList.remove("odd", "even");
  popupElements.body.classList.add(reverse ? "even" : "odd");

  openPopup(moviePopup);
}; // Открытие попапа с фильмом

//
//
// ПОПАП С СЛАЙДЩОУ
//
//
const slideshowPopup = document.querySelector(".slideshow-popup");
const slideshowElements = {
  close: slideshowPopup.querySelector(".close-popup"),
  prev: slideshowPopup.querySelector(".previous-slide"),
  next: slideshowPopup.querySelector(".next-slide"),
  container: slideshowPopup.querySelector("div"),
  counter: slideshowPopup.querySelector("p"),
  span: slideshowPopup.querySelector("span"),
}; // Все элементы попапа с фильмом
function initSlideshow(popupSelector, totalCount, urlGetter) {
  const img = slideshowElements.container.querySelector("img");
  let currentIndex = 0;
  let controller = null;

  const updateSlide = () => {
    img.src = urlGetter(currentIndex); // Получаем URL по текущему индексу
    slideshowElements.span.textContent = `${currentIndex + 1}`;
    slideshowElements.counter.innerHTML =
      slideshowElements.span.outerHTML + ` / ${totalCount}`;
    slideshowElements.prev.disabled = currentIndex === 0;
    slideshowElements.next.disabled = currentIndex === totalCount - 1;
  };

  const closeSlideshow = () => {
    closePopup(slideshowPopup);
    if (controller) {
      controller.abort();
      controller = null;
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) (currentIndex--, updateSlide());
  };

  const goNext = () => {
    if (currentIndex < totalCount - 1) (currentIndex++, updateSlide());
  };

  const onTouchStart = (e) => {
    if (!controller) return;
    controller.touchStartX = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (!controller || !controller.touchStartX) return;
    const diff = controller.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 30) diff > 0 ? goNext() : goPrev();
  };

  const setupHandlers = () => {
    if (controller) controller.abort();

    controller = new AbortController();
    const { signal } = controller;
    slideshowElements.close.addEventListener("click", closeSlideshow, {
      signal,
    });
    slideshowElements.prev.addEventListener("click", goPrev, { signal });
    slideshowElements.next.addEventListener("click", goNext, { signal });
    slideshowElements.container.addEventListener("touchstart", onTouchStart, {
      signal,
      passive: true,
    });
    slideshowElements.container.addEventListener("touchend", onTouchEnd, {
      signal,
    });
    slideshowPopup.addEventListener(
      "click",
      (e) => {
        if (e.target === e.currentTarget) closeSlideshow();
      },
      { signal },
    );
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      },
      { signal },
    );
  };

  return {
    open: (index) => {
      currentIndex = index;
      openPopup(slideshowPopup);
      updateSlide();
      setupHandlers();
    },
    close: closeSlideshow,
  };
} // Открытие слайдшоу
