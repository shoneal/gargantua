import { movies } from "./movies.js";

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
const regex = /\b(?:part\s+(?:ii|iii)|ii|iii)\b/gi;
const romanMap = {
  "part ii": "2",
  "part iii": "3",
  ii: "2",
  iii: "3",
}; // Римские цифры
function toUrlFormat(str) {
  return str
    .toLowerCase()
    .replace(regex, (match) => romanMap[match.toLowerCase()] || match)
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
function createImageBlock(image, alt) {
  const block = document.createElement("div");
  const img = document.createElement("img");
  img.style.opacity = "0";
  img.src = image;
  img.alt = alt;
  block.appendChild(img);
  return block;
}
const handleFigureLoad = (figure) => {
  const images = figure.querySelectorAll("img");
  let loaded = 0;
  const onDone = () => {
    if (++loaded === images.length) {
      images.forEach((img) => (img.style.opacity = "1"));
    }
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
  const screenshot = Math.floor(Math.random() * movie.screenshots) + 1;

  const image = buildImageUrl({
    type: movie.format === "фильм" ? "movie" : "series",
    title: movie.original[0],
    season: movie.season,
    screenshot: screenshot,
    release: movie.release,
  });

  const altParts = [
    movie.title,
    movie.release?.split("-")[0],
    movie.season && `сезон ${movie.season}`,
    `скр. ${screenshot}`,
  ].filter(Boolean);

  const alt = altParts.join(" | ");

  figures.forEach((figure) => figure.appendChild(createImageBlock(image, alt)));
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
  const checkmark = document.querySelector(".select-wrapper .checkmark");
  button.querySelector("span").after(checkmark.cloneNode(true));

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

    case "year": {
      const years = new Set(
        movies.flatMap((movie) => [
          new Date(movie.release).getFullYear(),
          ...(movie.releaseDates?.map((d) => new Date(d).getFullYear()) || []),
        ]),
      );

      const minDecade = Math.floor(Math.min(...years) / 10) * 10;
      const maxDecade = Math.floor(Math.max(...years) / 10) * 10;

      for (let decade = maxDecade; decade >= minDecade; decade -= 10) {
        const decadeYears = [...years].filter(
          (year) => year >= decade && year <= decade + 9,
        );

        if (decadeYears.length === 0) continue;

        decadeYears.sort((a, b) => b - a);

        const periodName = `${decade}‑е`;

        const li = document.createElement("li");
        li.className = "submenu";

        const button = document.createElement("button");
        button.type = "button";
        button.className = "submenu-button";

        const span = document.createElement("span");
        span.textContent = periodName;

        button.appendChild(span);
        span.after(checkmark.cloneNode(true));
        li.appendChild(button);

        const ul = document.createElement("ul");
        decadeYears.forEach((year) =>
          ul.appendChild(createFilterItem(year, year, filterType)),
        );
        li.appendChild(ul);
        list.appendChild(li);
      }
      break;
    }

    case "liked":
      ["like", "dislike"].forEach((liked) => {
        list.appendChild(createFilterItem(liked, liked, filterType));
      });
      break;
  }

  button.after(list);

  list.addEventListener("click", (e) => {
    const button = e.target.closest("li.submenu > .submenu-button");
    if (!button) return;

    e.preventDefault();

    const parent = button.parentElement;
    const ul = parent.querySelector("ul");
    const isAlreadyOpen = ul.classList.contains("is-open");

    list.querySelectorAll("ul").forEach((ul) => ul.classList.remove("is-open"));

    if (!isAlreadyOpen) ul.classList.add("is-open");
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = list.style.display === "block";

    document.querySelectorAll(".dropdown-list").forEach((el) => {
      if (el !== list) el.style.display = "none";
    });

    list.style.display = isOpen ? "none" : "block";

    if (isOpen) return;

    const uls = list.querySelectorAll("ul");

    if (uls.length === 0) return;

    uls.forEach((ul) => {
      const labels = ul.querySelectorAll("label");

      const allLabelsDisabled = [...labels].every((label) =>
        label.classList.contains("disabled"),
      );

      const button = ul.closest("li.submenu")?.querySelector(".submenu-button");

      button.disabled = allLabelsDisabled;

      if (allLabelsDisabled) ul.classList.remove("is-open");
    });
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

  function normalizeText(text) {
    if (!text) return "";
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/ё/g, "е");
  }

  const moviesWithCache = movies.map((movie) => {
    const normalizedTerms = [
      normalizeText(movie.title),
      normalizeText(movie.operator) || "",
      ...movie.original.map(normalizeText),
      ...(movie.directors || []).map(normalizeText),
      ...(movie.creators || []).map(normalizeText),
    ];
    return { ...movie, _normalizedSearch: normalizedTerms };
  });

  filtered = [...moviesWithCache];

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
    const normalizedQuery = normalizeText(query);

    filtered = filtered.filter((movie) => {
      return movie._normalizedSearch.some((term) =>
        term.includes(normalizedQuery),
      );
    });
  }

  switch (sortType) {
    case "publish":
      return filtered.sort((a, b) => new Date(b.publish) - new Date(a.publish));
    case "release":
      return filtered.sort((a, b) => {
        const dateA = new Date(a.release);
        const dateB = new Date(b.release);

        if (dateA.getTime() !== dateB.getTime()) return dateB - dateA;

        return a.title.localeCompare(b.title);
      });
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
    } else {
      resetBtn.onclick = () => onClearAction(resetBtn);
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
searchButton.addEventListener("click", handleSearchButtonClick);
searchButton.addEventListener("touchstart", handleSearchButtonClick);
function handleSearchButtonClick(e) {
  e.preventDefault();
  handleFilterUpdate();
}
searchInput.addEventListener("focus", () =>
  searchButton.classList.add("is-active"),
);
searchInput.addEventListener("blur", () =>
  searchButton.classList.remove("is-active"),
);
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
  if (movie.creators) renderPersons(movie.creators, "Создатель");
  if (movie.directors) renderPersons(movie.directors, "Режиссёр");
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
  popupElements.poster.addEventListener(
    "load",
    function onPosterLoad() {
      popupElements.poster.removeEventListener("load", onPosterLoad);
      setupImageWithContainer(popupElements.poster);
      loadScreenshots(movie);
    },
    { once: true },
  );
  if (popupElements.poster.complete) {
    setupImageWithContainer(popupElements.poster);
    loadScreenshots(movie);
  }

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

  openPopup(moviePopup);
}; // Открытие попапа с фильмом
const loadScreenshots = (movie) => {
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
    window.currentSlideshow.close();
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
}; // Функция для загрузки скриншотов (вызывается после загрузки постера)

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
