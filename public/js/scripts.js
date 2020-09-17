fetch(`/request?firstName=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            message.textContent = data.error
        } else {
            console.log(data)
            console.log(data.forecast)
            console.log(data.location)
            message.textContent = data.location + ' ' + data.forecast
        }
    })
})