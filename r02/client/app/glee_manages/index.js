import React from 'react'
import { render } from 'react-dom'

const ArticleBox = ({ title, list }) => {
  return (
    <div className="articles">
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const ArticleListBox = ({ articles }) => {
  return articles.map((article, index) => (
    <ArticleBox key={index} {...article} />
  ))
}

const MenuList = ({ list }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {list.map((item, index) => (
        <li key={index}>
          <a href={`?filename=${item}`}>
            {`${item.slice(0, 2)}月${item.slice(2, 4)}日マネミ`}
          </a>
        </li>
      ))}
    </ul>
  )
}

const TitleBox = () => {
  return (
    <div id="titleBox">
      <h1>マネミ議事録</h1>
    </div>
  )
}

const Menu = ({ mainList, subList }) => {
  const [isLatest, toggle] = React.useState(false)

  const handleClick = () => {
    toggle(!isLatest)
  }

  return (
    <div id="menu">
      <center>
        <h3>議事録一覧</h3>
      </center>
      <MenuList list={isLatest ? mainList : subList} />
      <a id="listBtn" href="#" onClick={handleClick}>
        {isLatest ? 'これ以前の議事録' : '最新の議事録'}
      </a>
      <hr />
      <a href="index_old.php">前期議事録</a>
    </div>
  )
}

const App = ({ content, mainList, subList }) => {
  return (
    <>
      <TitleBox />
      <Menu mainList={mainList} subList={subList} />
      <ArticleListBox articles={content} />
    </>
  )
}

document.addEventListener('DOMContentLoaded', function() {
  const mainListElement = document.getElementById('fileListMain')
  const mainList = JSON.parse(mainListElement.innerHTML)
  const subListElement = document.getElementById('fileListSub')
  const subList = JSON.parse(subListElement.innerHTML)
  const content = JSON.parse(document.getElementById('content-json').innerHTML)

  render(
    <App content={content} mainList={mainList} subList={subList} />,
    document.getElementById('root')
  )
})
