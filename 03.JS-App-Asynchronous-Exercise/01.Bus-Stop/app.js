async function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const timeTableElement = document.getElementById('buses')
    const stopNameElement = document.getElementById('stopName')

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren();

        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('Station Id not found')
        }
        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`

            timeTableElement.appendChild(liElement);
        });

    } catch (error) {
        stopNameElement.textContent = 'Error';
    }

}