const showList = (root, list) => {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
  list.forEach(item => {
    const listElem = document.createElement('li')
    const anchorElem = document.createElement('a')
    anchorElem.setAttribute('href', `?filename=${item}`)
    anchorElem.innerHTML = `${item.slice(0, 2)}月${item.slice(2, 4)}日マネミ`
    listElem.appendChild(anchorElem)
    root.appendChild(listElem)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  const mainListElement = document.getElementById('fileListMain')
  const mainList = JSON.parse(mainListElement.innerHTML)

  const subListElement = document.getElementById('fileListSub')
  const subList = JSON.parse(subListElement.innerHTML)

  const showListElement = document.getElementById('showList')
  showList(showListElement, mainList)

  const listBtn = document.getElementById('listBtn')
  let isLatest = false

  listBtn.addEventListener('click', function() {
    showList(showListElement, isLatest ? mainList : subList)
    this.innerHTML = isLatest ? 'これ以前の議事録' : '最新の議事録'
    isLatest = !isLatest
  })
})
