document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#copy').hidden = true

    document.querySelector('#submit').addEventListener('click', () => {
        var text = document.querySelector('#text').value

        var uperText = uper(text)

        document.querySelector('#result').innerHTML = `<p>${uperText}</p>`
        document.querySelector('#copyfrom').value = `${uperText}`
        document.querySelector('#copy').hidden = false

    })

    document.querySelector('#copy').addEventListener('click', () => {
        document.querySelector('#copyfrom').select()
        document.execCommand('copy')
        alert('Copy to clib')
    })

    function uper(text){
        return text.toUpperCase()
    }

}) 