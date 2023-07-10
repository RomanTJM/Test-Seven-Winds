import React from 'react';


const rowData = {
  equipmentCosts: 1,
  estimatedProfit: 2,
  machineOperatorSalary: 3,
  mainCosts: 4,
  materials: 5,
  mimExploitation: 6,
  overheads: 7,
  // вот это поле должно ссылаться на родителя или быть null
  parentId: null,
  // а вот это вроде похуй какое
  rowName: "Строка",
  salary: 6,
  supportCosts: 5,
};


export default function Table({ list, setRow }) {
  if (!list) {
    return <>хуй</>;
  }
  return (
    <ul>
      {list &&
        list.map((item) => <Row key={item.id} setRow={setRow} row={item} />)}
    </ul>
  );
}

export function Row({ row, setRow, deleteHandler }) {

  return (
    <li>

      <button onClick={() => setRow({ ...rowData, parentId: row.id })}>
        создать подстроку
      </button>

      <button
        onClick={() => deleteHandler()}
      >
        Удалить подстроку
      </button>

      {row.rowName}-{row.id}-{row.machineOperatorSalary}-{row.overheads}
      {row.child?.map((item) => (
        <ul key={item.id}>
          <Row setRow={setRow} row={item} />
        </ul>
      ))}
    </li>
  );
}







