import { compose, withState, withHandlers } from 'recompose'
import SideMenu from './presenter'
import { Item, ListMenuItem } from './types'

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

interface OuterProps {
  listMenuList: Array<ListMenuItem>
}

interface State {
  contentList: Array<Item>
  isClosing: boolean
}

interface Handlers {
  handleClick: (menuItem: ListMenuItem) => () => void
}

export type Props = OuterProps & State & Handlers

export default compose<Props, OuterProps>(
  withState('contentList', 'setContentList', []),
  withState('isClosing', 'toggleClose', false),
  withHandlers({
    handleClick: ({ contentList, setContentList, toggleClose }) => (
      menuItem: ListMenuItem
    ) => () => {
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
    },
  })
)(SideMenu)
