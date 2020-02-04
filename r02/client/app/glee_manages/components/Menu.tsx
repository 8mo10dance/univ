import * as React from 'react'
import { ArticleGroup } from 'types/models'
import MenuList from 'components/MenuList'

interface Props {
  articleGroups: ArticleGroup[]
}

const MENU_LIST_SIZE = 5

export default ({ articleGroups }: Props) => {
  const [isLatest, toggle] = React.useState(true)

  const handleClick = () => {
    toggle(!isLatest)
  }

  const mainList = articleGroups.slice(0, MENU_LIST_SIZE)
  const subList = articleGroups.slice(MENU_LIST_SIZE)

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
