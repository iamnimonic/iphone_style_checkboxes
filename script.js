const checkboxes = document.querySelectorAll('.input')
const good_el = document.querySelector('#good')
const fast_el = document.querySelector('#fast')
const cheap_el = document.querySelector('#cheap')



checkboxes.forEach(el => el.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good_el.checked && cheap_el.checked && fast_el.checked) {
        if (good_el === theClickedOne) {
            console.log('fast needs to go')
            fast_el.checked = false
        }
        if (cheap_el === theClickedOne) {
            console.log('good needs to go')
            good_el.checked = false
        }
        if (fast_el === theClickedOne) {
            cheap_el.checked = false
        }
    }
}