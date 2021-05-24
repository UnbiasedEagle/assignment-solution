import React from 'react';

const TableRow = ({ name, email, id, contact }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{email}</td>
      <td>{contact}</td>
    </tr>
  );
};

export default TableRow;
