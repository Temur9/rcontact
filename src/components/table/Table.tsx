import React from "react";
import "./table.css";
const Table = () => {
  return (
    <>
      <div className="table">
        <table>
          <tr>
            <th>Ф.И.О.</th>
            <th>Номер телефона</th>
            <th>Электронная почта</th>
            <th>Теги</th>
            <th></th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>family</td>
            <td>
              <span>
                <i className="fa-regular fa-pen-to-square"></i>
              </span>
              <span>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>family</td>
            <td>
              <span>
                <i className="fa-regular fa-pen-to-square"></i>
              </span>
              <span>
                <i className="fa-solid fa-trash-can"></i>
              </span>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Table;
