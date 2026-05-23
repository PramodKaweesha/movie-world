/* ============================================
   MOVIE WORLD - Original Streaming Platform JS
   ============================================ */

const moviesData = [
    {
        id: 0, title: "The Dark Knight", year: 2008, rating: 9.0,
        duration: "2h 32m", genre: ["Action", "Crime", "Drama"],
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80",
        type: "movie", trending: true, popular: true
    },
    {
        id: 1, title: "Inception", year: 2010, rating: 8.8,
        duration: "2h 28m", genre: ["Action", "Sci-Fi", "Thriller"],
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
        type: "movie", trending: true, popular: true
    },
    {
        id: 2, title: "Interstellar", year: 2014, rating: 8.6,
        duration: "2h 49m", genre: ["Sci-Fi", "Drama", "Adventure"],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80",
        type: "movie", trending: true, popular: true
    },
    {
        id: 3, title: "Stranger Things", year: 2016, rating: 8.7,
        duration: "4 Seasons", genre: ["Sci-Fi", "Horror", "Drama"],
        description: "When a young boy disappears, his mother and friends must confront terrifying supernatural forces to get him back.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
        type: "tv", trending: true, popular: true
    },
    {
        id: 4, title: "The Mandalorian", year: 2019, rating: 8.7,
        duration: "3 Seasons", genre: ["Sci-Fi", "Action", "Adventure"],
        description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        image: "https://images.unsplash.com/photo-1614726365723-49cfae9278b7?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1614726365723-49cfae9278b7?w=1920&q=80",
        type: "tv", trending: true, popular: true
    },
    {
        id: 5, title: "Breaking Bad", year: 2008, rating: 9.5,
        duration: "5 Seasons", genre: ["Crime", "Drama", "Thriller"],
        description: "A high school chemistry teacher turned methamphetamine manufacturing drug dealer navigates the criminal underworld.",
        image: "https://images.unsplash.com/photo-1598899132519-587156c92b58?w=400&q=80",
        heroImage: "https://images.unsplash.com/photo-1598899132519-587156c92b58?w=1920&q=80",
        type: "tv", trending: true, popular: true
    },
    {
        id: 6, title: "Mad Max: Fury Road", year: 2015, rating: 8.1,
        duration: "2h", genre: ["Action", "Adventure", "Sci-Fi"],
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        image: "https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 7, title: "John Wick", year: 2014, rating: 7.4,
        duration: "1h 41m", genre: ["Action", "Crime", "Thriller"],
        description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        image: "https://images.unsplash.com/photo-1550100136-e074fa714874?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 8, title: "Gladiator", year: 2000, rating: 8.5,
        duration: "2h 35m", genre: ["Action", "Adventure", "Drama"],
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 9, title: "The Witcher", year: 2019, rating: 8.0,
        duration: "3 Seasons", genre: ["Action", "Adventure", "Fantasy"],
        description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 10, title: "The Conjuring", year: 2013, rating: 7.5,
        duration: "1h 52m", genre: ["Horror", "Mystery", "Thriller"],
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 11, title: "A Quiet Place", year: 2018, rating: 7.5,
        duration: "1h 30m", genre: ["Horror", "Drama", "Sci-Fi"],
        description: "A family must live their lives in silence to hide from creatures that hunt by sound.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 12, title: "Hereditary", year: 2018, rating: 7.3,
        duration: "2h 7m", genre: ["Horror", "Drama", "Mystery"],
        description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 13, title: "The Haunting of Hill House", year: 2018, rating: 8.6,
        duration: "1 Season", genre: ["Horror", "Drama", "Mystery"],
        description: "A fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
        image: "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 14, title: "The Office", year: 2005, rating: 9.0,
        duration: "9 Seasons", genre: ["Comedy"],
        description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes and inappropriate behavior.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 15, title: "Brooklyn Nine-Nine", year: 2013, rating: 8.4,
        duration: "8 Seasons", genre: ["Comedy", "Crime"],
        description: "Jake Peralta, an immature but talented NYPD detective, comes into conflict with his new commanding officer.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 16, title: "Superbad", year: 2007, rating: 7.6,
        duration: "1h 53m", genre: ["Comedy"],
        description: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan goes awry.",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 17, title: "Parks and Recreation", year: 2009, rating: 8.6,
        duration: "7 Seasons", genre: ["Comedy"],
        description: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city better.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 18, title: "Blade Runner 2049", year: 2017, rating: 8.0,
        duration: "2h 44m", genre: ["Sci-Fi", "Drama", "Action"],
        description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
        image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 19, title: "Dune", year: 2021, rating: 8.0,
        duration: "2h 35m", genre: ["Sci-Fi", "Adventure", "Drama"],
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80",
        type: "movie", trending: false, popular: true
    },
    {
        id: 20, title: "The Expanse", year: 2015, rating: 8.5,
        duration: "6 Seasons", genre: ["Sci-Fi", "Drama", "Mystery"],
        description: "In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the system's fragile state.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 21, title: "Black Mirror", year: 2011, rating: 8.7,
        duration: "6 Seasons", genre: ["Sci-Fi", "Drama", "Thriller"],
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
        type: "tv", trending: false, popular: true
    },
    {
        id: 22, title: "Parasite", year: 2019, rating: 8.5,
        duration: "2h 12m", genre: ["Drama", "Thriller", "Comedy"],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
        type: "movie", trending: true, popular: true
    },
    {
        id: 23, title: "Game of Thrones", year: 2011, rating: 9.2,
        duration: "8 Seasons", genre: ["Drama", "Fantasy", "Action"],
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&q=80",
        type: "tv", trending: true, popular: true
    },
    {
        id: 24, title: "Oppenheimer", year: 2023, rating: 8.4,
        duration: "3h", genre: ["Drama", "Biography", "History"],
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80",
        type: "movie", trending: true, popular: true
    },
    {
        id: 25, title: "The Boys", year: 2019, rating: 8.7,
        duration: "4 Seasons", genre: ["Action", "Crime", "Drama"],
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80",
        type: "tv", trending: true, popular: true
    }
];

// State
let watchlist = JSON.parse(localStorage.getItem('movieWorld_watchlist')) || [];
let currentModalMovie = null;
let currentWatchId = null;
let isSignUp = false;

// Init
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2200);

    initHome();
    initMoviesPage();
    initTVShowsPage();
    initTrendingPage();
    initWatchlistPage();

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Horizontal scroll with mouse wheel
    document.querySelectorAll('.scroll-row').forEach(row => {
        row.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                row.scrollLeft += e.deltaY;
            }
        });
    });
});

// Page Navigation
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${pageName}`);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`);
    if (activeLink) activeLink.classList.add('active');

    window.scrollTo(0, 0);

    const footer = document.getElementById('siteFooter');
    footer.style.display = (pageName === 'login' || pageName === 'watch') ? 'none' : 'block';

    if (pageName === 'watchlist') initWatchlistPage();
    if (pageName === 'trending') initTrendingPage();
}

function toggleMenu() {
    document.getElementById('navToggle').classList.toggle('active');
    document.getElementById('mobileNav').classList.toggle('active');
}

// Home Page
function initHome() {
    const heroMovie = moviesData[0];
    document.getElementById('heroBg').style.backgroundImage = `url('${heroMovie.heroImage}')`;

    renderScrollRow('trendingRow', moviesData.filter(m => m.trending).slice(0, 8), true);
    renderScrollRow('popularRow', moviesData.filter(m => m.popular).slice(0, 8));
    renderScrollRow('tvRow', moviesData.filter(m => m.type === 'tv').slice(0, 8));
    renderScrollRow('actionRow', moviesData.filter(m => m.genre.includes('Action')).slice(0, 8));
    renderScrollRow('horrorRow', moviesData.filter(m => m.genre.includes('Horror')).slice(0, 8));
    renderScrollRow('comedyRow', moviesData.filter(m => m.genre.includes('Comedy')).slice(0, 8));
    renderScrollRow('scifiRow', moviesData.filter(m => m.genre.includes('Sci-Fi')).slice(0, 8));
}

// Card Creator
function createCard(movie, rank = null) {
    const inList = watchlist.includes(movie.id);
    const rankHtml = rank ? `<div class="card-rank">${rank}</div>` : '';

    return `
        <div class="card" onclick="showTrailer(${movie.id})">
            ${rankHtml}
            <img src="${movie.image}" alt="${movie.title}" class="card-img" loading="lazy">
            <div class="card-overlay">
                <div class="card-title">${movie.title}</div>
                <div class="card-meta">
                    <span class="card-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span>${movie.year}</span>
                    <span>${movie.duration}</span>
                </div>
                <div class="card-actions">
                    <button class="card-btn" onclick="event.stopPropagation(); playMovie(${movie.id})">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="card-btn save ${inList ? 'saved' : ''}" onclick="event.stopPropagation(); toggleWatchlist(${movie.id})">
                        <i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render Scroll Row
function renderScrollRow(containerId, movies, showRank = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = movies.map((m, i) => createCard(m, showRank ? i + 1 : null)).join('');
}

// Render Grid
function renderGrid(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const empty = container.querySelector('.empty-box');
    if (movies.length === 0) {
        if (empty) empty.style.display = 'flex';
        container.querySelectorAll('.card').forEach(c => c.remove());
        return;
    }

    if (empty) empty.style.display = 'none';
    container.querySelectorAll('.card').forEach(c => c.remove());

    movies.forEach(movie => {
        const div = document.createElement('div');
        div.innerHTML = createCard(movie);
        container.appendChild(div.firstElementChild);
    });
}

// Movies Page
function initMoviesPage() {
    renderGrid('moviesGrid', moviesData.filter(m => m.type === 'movie'));
}

function filterMovies(genre, btn) {
    document.querySelectorAll('#page-movies .genre-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    let movies = moviesData.filter(m => m.type === 'movie');
    if (genre !== 'all') {
        movies = movies.filter(m => m.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
    }
    renderGrid('moviesGrid', movies);
}

// TV Shows Page
function initTVShowsPage() {
    renderGrid('tvshowsGrid', moviesData.filter(m => m.type === 'tv'));
}

function filterTVShows(genre, btn) {
    document.querySelectorAll('#page-tvshows .genre-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    let shows = moviesData.filter(m => m.type === 'tv');
    if (genre !== 'all') {
        shows = shows.filter(m => m.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
    }
    renderGrid('tvshowsGrid', shows);
}

// Trending Page
function initTrendingPage() {
    const trending = [...moviesData].filter(m => m.trending).sort((a, b) => b.rating - a.rating);
    const container = document.getElementById('trendingList');
    if (!container) return;

    container.innerHTML = trending.map((movie, index) => `
        <div class="rank-item" onclick="showTrailer(${movie.id})">
            <div class="rank-num">${index + 1}</div>
            <img src="${movie.image}" alt="${movie.title}" class="rank-img" loading="lazy">
            <div class="rank-info">
                <h3>${movie.title}</h3>
                <div class="rank-meta">
                    <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span>${movie.year}</span>
                    <span>${movie.duration}</span>
                    <span>${movie.genre.join(', ')}</span>
                </div>
                <p>${movie.description}</p>
            </div>
            <div class="rank-actions">
                <button class="card-btn" onclick="event.stopPropagation(); playMovie(${movie.id})" style="width:40px;height:40px;">
                    <i class="fas fa-play"></i>
                </button>
                <button class="card-btn save ${watchlist.includes(movie.id) ? 'saved' : ''}" onclick="event.stopPropagation(); toggleWatchlist(${movie.id})" style="width:40px;height:40px;">
                    <i class="fas ${watchlist.includes(movie.id) ? 'fa-check' : 'fa-plus'}"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Watchlist
function initWatchlistPage() {
    const container = document.getElementById('watchlistGrid');
    const empty = document.getElementById('watchlistEmpty');
    if (!container || !empty) return;

    const saved = moviesData.filter(m => watchlist.includes(m.id));

    if (saved.length === 0) {
        empty.style.display = 'flex';
        container.querySelectorAll('.card').forEach(c => c.remove());
    } else {
        empty.style.display = 'none';
        container.querySelectorAll('.card').forEach(c => c.remove());
        saved.forEach(movie => {
            const div = document.createElement('div');
            div.innerHTML = createCard(movie);
            container.appendChild(div.firstElementChild);
        });
    }
}

// Watchlist Toggle
function toggleWatchlist(movieId) {
    const idx = watchlist.indexOf(movieId);
    const movie = moviesData.find(m => m.id === movieId);

    if (idx > -1) {
        watchlist.splice(idx, 1);
        showToast(`Removed "${movie.title}"`);
    } else {
        watchlist.push(movieId);
        showToast(`Added "${movie.title}" to list`);
    }

    localStorage.setItem('movieWorld_watchlist', JSON.stringify(watchlist));
    refreshAll();
}

function toggleWatchlistFromModal() {
    if (currentModalMovie !== null) {
        toggleWatchlist(currentModalMovie);
        updateModalBtn(currentModalMovie);
    }
}

function updateModalBtn(movieId) {
    const btn = document.getElementById('modalWatchBtn');
    const inList = watchlist.includes(movieId);
    btn.innerHTML = `<i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i> ${inList ? 'Saved' : 'My List'}`;
}

function refreshAll() {
    const pages = ['home', 'movies', 'tvshows', 'trending', 'watchlist'];
    pages.forEach(page => {
        const el = document.getElementById(`page-${page}`);
        if (el && el.classList.contains('active')) {
            if (page === 'home') initHome();
            if (page === 'movies') initMoviesPage();
            if (page === 'tvshows') initTVShowsPage();
            if (page === 'trending') initTrendingPage();
            if (page === 'watchlist') initWatchlistPage();
        }
    });
}

// Search
function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!query) return;

    const results = moviesData.filter(m =>
        m.title.toLowerCase().includes(query) ||
        m.genre.some(g => g.toLowerCase().includes(query)) ||
        m.description.toLowerCase().includes(query)
    );

    document.getElementById('searchQueryText').textContent = `"${query}" — ${results.length} results`;

    const container = document.getElementById('searchGrid');
    const empty = document.getElementById('searchEmpty');

    if (results.length === 0) {
        empty.style.display = 'flex';
        container.querySelectorAll('.card').forEach(c => c.remove());
    } else {
        empty.style.display = 'none';
        container.querySelectorAll('.card').forEach(c => c.remove());
        results.forEach(movie => {
            const div = document.createElement('div');
            div.innerHTML = createCard(movie);
            container.appendChild(div.firstElementChild);
        });
    }

    showPage('search');
}

// Video Player
function playMovie(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    currentWatchId = movieId;
    document.getElementById('watchTitle').textContent = movie.title;
    document.getElementById('watchInfoBar').innerHTML = `
        <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
        <span>${movie.genre.join(', ')}</span>
    `;
    document.getElementById('watchSummary').textContent = movie.description;

    const video = document.getElementById('mainVideo');
    video.poster = movie.image;
    video.querySelector('source').src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    video.load();

    document.getElementById('videoCover').classList.remove('hidden');
    showPage('watch');
}

function playVideo() {
    const video = document.getElementById('mainVideo');
    document.getElementById('videoCover').classList.add('hidden');
    video.play();
}

function closeWatch() {
    const video = document.getElementById('mainVideo');
    video.pause();
    video.currentTime = 0;
    showPage('home');
}

// Modal
function showTrailer(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    currentModalMovie = movieId;
    document.getElementById('modalImg').src = movie.image;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalStats').innerHTML = `
        <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        <span>${movie.year}</span>
        <span>${movie.duration}</span>
        <span>${movie.type === 'tv' ? 'TV Show' : 'Movie'}</span>
    `;
    document.getElementById('modalDesc').textContent = movie.description;
    document.getElementById('modalTags').innerHTML = movie.genre.map(g =>
        `<span class="modal-tag">${g}</span>`
    ).join('');

    updateModalBtn(movieId);
    document.getElementById('movieModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('movieModal').classList.remove('active');
    document.body.style.overflow = '';
    currentModalMovie = null;
}

function playFromModal() {
    if (currentModalMovie !== null) {
        closeModal();
        playMovie(currentModalMovie);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Auth
function toggleAuthMode() {
    isSignUp = !isSignUp;
    document.getElementById('loginTitle').textContent = isSignUp ? 'Create Account' : 'Welcome Back';
    document.getElementById('loginSubmit').textContent = isSignUp ? 'Sign Up' : 'Sign In';
    document.getElementById('nameWrap').style.display = isSignUp ? 'block' : 'none';
    document.getElementById('loginToggle').innerHTML = isSignUp
        ? 'Already have an account? <a href="#" class="login-link" onclick="toggleAuthMode()">Sign in</a>'
        : 'New here? <a href="#" class="login-link" onclick="toggleAuthMode()">Create account</a>';
}

function handleAuth(e) {
    e.preventDefault();
    showToast(isSignUp ? 'Account created!' : 'Welcome back!');
    setTimeout(() => showPage('home'), 1000);
}

function togglePassword() {
    const input = document.getElementById('loginPassword');
    const eye = document.getElementById('eyeIcon');
    if (input.type === 'password') {
        input.type = 'text';
        eye.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        eye.className = 'fas fa-eye';
    }
}

// Toast
function showToast(message) {
    const toast = document.getElementById('toastMsg');
    document.getElementById('toastText').textContent = message;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}
