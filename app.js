const containerEl = document.querySelector('.container')
const gridLength = 16
for (let rowId = 0; rowId < gridLength; rowId++) {
    const rowEl = document.createElement("div")
    rowEl.classList.add('row')
    for (let cellId = 0; cellId < gridLength; cellId++) {
        rowEl.innerHTML += '<div class="cell"></div>'
    }
    containerEl.appendChild(rowEl)
}
