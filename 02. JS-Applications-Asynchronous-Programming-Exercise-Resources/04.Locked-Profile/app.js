function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    fetch(url)
        .then(res => {
            if (res.status !== 200) {
                throw new Error()
            }
            return res.json()
        })
        .then(createProfiles)
        .catch()

    function createProfiles(data) {
        let values = Object.values(data);

        for (let element of values) {
            let profileDivEl = document.querySelector('.profile')
            let cloneDiv = profileDivEl.cloneNode(true)

            cloneDiv.querySelector('input[name="user1Username"]').value = element.username;
            cloneDiv.querySelector('input[name="user1Email"]').value = element.email;
            cloneDiv.querySelector('input[name="user1Age"]').value = element.age;

            const mainEl = document.getElementById('main');
            mainEl.appendChild(cloneDiv)

            cloneDiv.addEventListener('click', unlockProfile);

            function unlockProfile(ev) {
                if (ev.target.value === 'unlock') {
                    ev.currentTarget.querySelector('button').addEventListener('click', showMore)
                }

                function showMore(ev) {

                    let hidenInfo = ev.currentTarget.parentNode.querySelectorAll('.hiddenInfo > input, label')

                    if (ev.currentTarget.textContent === 'Show more') {
                        for (let info of hidenInfo) {
                            info.style.display = 'inline'
                        }
                        ev.currentTarget.textContent = "Hide it"
                    } else if (ev.currentTarget.textContent === 'Hide it') {
                        for (let info of hidenInfo) {
                            info.style.display = 'none';


                        }
                    }
                }
            }
        }
    }
}