function attachEvents() {
    const symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'

    }
    const location = document.getElementById('location')
    const forecast = document.getElementById('forecast');

    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.addEventListener('click', getWeather);

    async function getWeather() {
        try {
            const url = `http://localhost:3030/jsonstore/forecaster/locations`
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(`${res.status} ${res.statusText}`)
            }

            const town = data.find(x => x.name.toLowerCase() == location.value.toLowerCase());

            if (!town) {
                throw new Error('Error (Invalid town name)!')
            }
            forecast.style.display = 'block';


            if (town) {
                getWeatherToday(town.code);
                getWeatherUpcoming(town.code);

                location.value = '';
            }
        } catch (error) {
            forecast.style.display = 'block';
            const p = createElement('p', error.message, ['id', 'errorMessage']);
            forecast.appendChild(p)
        }

    }

    async function getWeatherToday(code) {
        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove()
        }

        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const res = await fetch(url);
        const data = await res.json();

        const currentEl = document.getElementById('current');

        if (document.querySelector('div.forecasts')) {
            document.querySelector('div.forecasts').remove()
        }
        const divForecasts = createElement('div', '', ['class', 'forecasts'])
        const symbol = createElement('span', symbols[data.forecast.condition], ['class', 'condition symbol'])
        const span = createElement('span', '', ['class', 'condition']);
        const townName = createElement('span', data.name, ['class', 'forecast-data']);
        const degreeText = `${data.forecast.low}°/${data.forecast.high}°`
        const degreeEl = createElement('span', degreeText, ['class', 'forecast-data']);
        const condition = createElement('span', data.forecast.condition, ['class', 'forecast-data'])

        span.appendChild(townName);
        span.appendChild(degreeEl)
        span.appendChild(condition)
        divForecasts.appendChild(symbol)
        divForecasts.appendChild(span);
        currentEl.appendChild(divForecasts)
    }
    async function getWeatherUpcoming(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`

        const res = await fetch(url);
        const data = await res.json();

        const upcoming = document.getElementById('upcoming');

        // if (document.querySelector('div.forecast-info')) {
        //     document.querySelector('div.forecast-info').remove();
        // }
        const divForecastsInfo = document.createElement('span', '', ['class', 'forecast-info'])

        for (let forecast of data.forecast) {
            const upcomingSpan = createElement('span', '', ['class', 'upcoming'])
            const symbol = createElement('span', symbols[forecast.condition], ['class', 'symbol']);
            const degreeText = `${forecast.low}°/${forecast.high}°`;
            const degreeEl = createElement('span', degreeText, ['class', 'forecast-data'])
            const condition = createElement('span', forecast.condition, ['class', 'forecast-data'])

            upcomingSpan.appendChild(symbol);
            upcomingSpan.appendChild(degreeEl);
            upcomingSpan.appendChild(condition);

            divForecastsInfo.appendChild(upcomingSpan)
        }
        upcoming.appendChild(divForecastsInfo)
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }
        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1])
        }
        return element
    }
}
attachEvents();