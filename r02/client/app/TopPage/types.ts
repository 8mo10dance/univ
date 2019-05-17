export interface Item {
    name: string
    url: string
}

export interface ListMenuItem {
    name: string
    items: Array<Item>
}
