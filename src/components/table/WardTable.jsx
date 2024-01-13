import React from "react";
import { useNavigate } from "react-router";
const WardTable = ({ data }) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <td>Ward Number</td>
          <td>Capacity</td>
          <td>Specialization</td>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ _id, wardNumber, capacity, specialization }) => (
          <tr
            style={{ cursor: "pointer" }}
            key={_id}
            onClick={() => navigate(`/ward/${_id}`)}
          >
            <td>{wardNumber}</td>
            <td>{capacity}</td>
            <td>{specialization}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WardTable;
