document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function (event) {
        const query = event.target.value.toLowerCase();
        // Implement search functionality
        console.log(query);
    });

    // Dynamic content loading
    const trendingMovies = [
        { title: 'A Silent Voice', image: 'ASV.jpg', link: 'https://www.crunchyroll.com/series/GP5HJ84XV/a-silent-voice' },
        { title: 'Justice League', image: 'JL1.jpg', link: 'https://www.dc.com/movies/zack-snyders-justice-league-2021' },
    ];

    const series = [
        { title: 'Alice In Borderland', image: 'AIBL.jpg', link: 'https://www.netflix.com/in/title/80200575' },
        { title: 'Family Guy', image: 'FG.jpg', link: 'https://www.fox.com/family-guy/' },
    ];

    const recommended = [
        { title: 'Squid Game', image: 'SG.jpg', link: 'https://www.netflix.com/in/title/81040344' },
        { title: 'The Simpsons', image: 'TS.jpg', link: 'https://www.hotstar.com/in/home?ref=%2Fin' },
    ];

    function loadContent() {
        const trendingContainer = document.querySelector('#trending .swiper-wrapper');
        const seriesContainer = document.querySelector('#series .content-grid');
        const recommendedContainer = document.querySelector('#recommended .content-grid');

        trendingMovies.forEach(movie => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.innerHTML = `<a href="${movie.link}" target="_blank"><img src="${movie.image}" alt="${movie.title}"><h3>${movie.title}</h3></a>`;
            trendingContainer.appendChild(slide);
        });

        series.forEach(serie => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="${serie.link}" target="_blank"><img src="${serie.image}" alt="${serie.title}"><h3>${serie.title}</h3></a>`;
            seriesContainer.appendChild(card);
        });

        recommended.forEach(recommend => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<a href="${recommend.link}" target="_blank"><img src="${recommend.image}" alt="${recommend.title}"><h3>${recommend.title}</h3></a>`;
            recommendedContainer.appendChild(card);
        });
    }

    loadContent();
});
