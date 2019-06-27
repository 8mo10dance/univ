import { compose, withState, withHandlers, lifecycle } from 'recompose'
import SideMenu from './presenter'
import { Item, ListMenuItem } from './types'

const getListMenuList = () =>
  fetch('/api/v1/list_menus').then(response => response.json())

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

interface State {
  listMenuList: Array<ListMenuItem>
  isFetching: boolean
  contentList: Array<Item>
  isClosing: boolean
}

interface Handlers {
  handleClick: (menuItem: ListMenuItem) => () => void
}

export type Props = State & Handlers

export default compose<Props, {}>(
  withState('listMenuList', 'setListMenuList', []),
  withState('isFetching', 'toggleFetching', true),
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
    fetchListMenuList: ({ setListMenuList, toggleFetching }) => () => {
      getListMenuList()
        .then(data => {
          setListMenuList(data['list_menu_list'])
          toggleFetching(false)
        })
        .catch(error => {
          console.log(error)
        })
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.fetchListMenuList()
    },
  })
)(SideMenu)
