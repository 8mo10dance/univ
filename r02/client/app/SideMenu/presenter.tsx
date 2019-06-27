import * as React from 'react'
import styled from 'styled-components'
import { Item, ListMenuItem } from './types'
import { Props } from './container'

const SideMenuItem = styled.li`
  height: 50px;
  text-align: center;
  font-size: 30px;
  color: #f0f8ff;
  font-family: serif;
  text-shadow: 1px 3px 3px;
  background-color: rgba(103, 65, 49, 0);
  &:hover {
    background-color: rgba(103, 65, 49, 0.5);
    cursor: pointer;
  }
`

const SideMenuDetailList = styled.ul`
  list-style: none;
  overflow: hidden;
  li {
    line-height: 2;
    font-size: 18px;
    a {
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

const SideMenuDetail = styled.div`
  width: ${props => (props.isClosing ? '0' : 'calc(100% - 300px);')};
  height: 100%;
  background-color: rgba(103, 65, 49, 0.6);
  animation-duration: 1s;
  animation-name: ${props => (props.isClosing ? 'fadeOut' : 'fadeIn')};
  @keyframes fadeIn {
    0% {
      width: 0;
    }
    100% {
      width: calc(100% - 300px);
    }
  }
  @keyframes fadeOut {
    0% {
      width: calc(100% - 300px);
    }
    100% {
      width: 0;
    }
  }
`

const SideMenuBox = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`

const SideMenuList = styled.ul`
  width: 200px;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: rgba(103, 65, 49, 0.6);
`

export default ({
  listMenuList,
  isFetching,
  contentList,
  isClosing,
  handleClick,
}: Props) => (
  <SideMenuBox>
    <SideMenuList>
      {listMenuList.map((menuItem, i) => (
        <SideMenuItem key={i} onClick={handleClick(menuItem)}>
          {menuItem.name}
        </SideMenuItem>
      ))}
    </SideMenuList>
    {(contentList.length > 0 || isClosing) && (
      <SideMenuDetail isClosing={isClosing}>
        <SideMenuDetailList>
          {contentList.map((item, i) => (
            <li key={i}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </SideMenuDetailList>
      </SideMenuDetail>
    )}
  </SideMenuBox>
)
