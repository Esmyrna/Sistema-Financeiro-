import { useEffect, useState } from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import * as C from './App.style';


const App = () => {

  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  // Adicionando ou alterando currentMonth ou list para conseguir filtrar a lista novamente

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth));
   
  }, [list, currentMonth]);

  
  
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
      
          <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;