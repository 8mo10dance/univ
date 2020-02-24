import * as React from 'react'
import SideMenu from './presenter'
import { Item, ListMenuItem } from 'types/models'
import { useListMenuItems } from 'hooks/listMenuItems'
import { useLinks } from 'hooks/links'
import Loading from './Loading'

const deepEqual = (a1: Array<Item>, a2: Array<Item>): boolean => {
  if (a1.length != a2.length) {
    return false
  }
  if (a1.length === 0 && a2.length === 0) {
    return true
  }
  const [head1, ...rest1] = a1
  const [head2, ...rest2] = a2
  if (head1.name === head2.name && head1.url === head2.url) {
    return deepEqual(rest1, rest2)
  }
  return false
}

export default () => {
  const [contentList, setContentList] = React.useState<Item[]>([])
  const [isClosing, toggleClose] = React.useState(false)

  const handleClick = (menuItem: ListMenuItem) => () => {
    if (deepEqual(contentList, menuItem.items)) {
      setContentList([])
      toggleClose(true)

      setTimeout(() => {
        setContentList([])
        toggleClose(false)
      }, 1000)
    } else {
      setContentList(menuItem.items)
    }
  }

  const { listMenuItems, isFetching } = useListMenuItems()
  const { links } = useLinks()

  if (isFetching) return <Loading />

  return (
    <SideMenu
      listMenuList={listMenuItems}
      contentList={contentList}
      isClosing={isClosing}
      handleClick={handleClick}
    />
  )
}
