import React from 'react'
import * as C from "./style"
import {Item} from "../../types/Item"

type Props = {
  item: Item
}

const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
        <C.TableColumn>...</C.TableColumn>
        <C.TableColumn>{item.category}</C.TableColumn>
        <C.TableColumn>{item.title}</C.TableColumn>
        <C.TableColumn>{item.value}</C.TableColumn>
    </C.TableLine>
  )
}

export default TableItem