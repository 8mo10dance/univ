import * as React from 'react'
import { ArticleGroup } from 'types/models'
import MenuList from 'components/MenuList'

interface Props {
  mainList: ArticleGroup[]
  subList: ArticleGroup[]
}

export default ({ mainList, subList }: Props) => {
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
