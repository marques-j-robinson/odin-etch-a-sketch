const containerEl = document.querySelector('.container')
const gridLength = 16
for (let rowId = 0; rowId < gridLength; rowId++) {
    const rowEl = document.createElement("div")
    rowEl.classList.add('row')
    for (let cellId = 0; cellId < gridLength; cellId++) {
        const cellEl = document.createElement("div")
        cellEl.classList.add('cell')
        cellEl.addEventListener('mouseover', () => {
            changeColor(cellEl)
        })
        rowEl.appendChild(cellEl)
    }
    containerEl.appendChild(rowEl)
}

const changeColor = el => {
    let hexNumbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
    let hexColorCode = "";
      for (var i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        hexColorCode += hexNumbers[randomIndex];
      }
    el.style.backgroundColor = `#${hexColorCode}`
}
