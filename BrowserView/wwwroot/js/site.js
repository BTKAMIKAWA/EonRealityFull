const app = document.getElementById('root')

const container = document.createElement('div')
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://localhost:44331/api/user', true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(user => {
            const row = document.createElement('tr')
            row.setAttribute('class', 'row')

            const nametd = document.createElement('td')
            nametd.textContent = user.name

       

            container.appendChild(row)
            row.appendChild(nametd)
            
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()