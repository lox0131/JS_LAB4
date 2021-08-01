const host = 'http://localhost:3000/api'

export const getMethods = () => {
    return fetch(`${host}/general`)
        .then(response => response.json())
}

export const getSaved = () => {
    return fetch(`${host}/personalMethods`)
        .then(response => response.json())
}