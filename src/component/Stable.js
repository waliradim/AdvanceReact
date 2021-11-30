import React, { useEffect, useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import axios from "axios";

export default function Stable() {
  //React Table with Data Sort
  const [adata, setadata] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((Response) => {
        setadata(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = useMemo(() => adata, [adata]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name.common",
      },
      {
        Header: "City",
        accessor: "capital",
      },
      {
        Header: "Region",
        accessor: "region",
      },
      {
        Header: "Subregion",
        accessor: "subregion",
      },
      {
        Header: "Area",
        accessor: "area",
      },
      {
        Header: "Population",
        accessor: "population",
      },
      {
        Header: "StartOfWeek",
        accessor: "startOfWeek",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 300);

  return (
    <>
      <table {...getTableProps()} style={{ border: "solid 1px red" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ border: "solid 1px red" }}
                >
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{ border: "solid 1px red" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}
