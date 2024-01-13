import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPatients } from "../patient/patientSlice";
import { fetchWards } from "../ward/wardSlice";

const Hospital = () => {
  const dispatch = useDispatch();
  const { patients } = useSelector(({ patients }) => patients);
  const { wards } = useSelector(({ wards }) => wards);

  const totalPatients = patients.length;

  const totalCapacity = wards.reduce((acc, curr) => acc + curr.capacity, 0);

  const currentOccupancy = (totalPatients / totalCapacity).toFixed(2);

  //  const wardCount = patients.reduce((acc, { ward: { assignedWard } }) => {
  //   acc[assignedWard] = (acc[assignedWard] || 0) + 1;
  //   return acc;
  // }, {});

  // const topWard = Object.keys(wardCount).reduce((top, ward) => {
  //   if (wardCount[top]) {
  //     if (wardCount[ward] > wardCount[top]) {
  //       return ward;
  //     }
  //   } else {
  //     return ward;
  //   }
  //   return top;
  // }, "NA");

  // console.log("top Ward",topWard);

  useEffect(() => {
    dispatch(fetchPatients());
    dispatch(fetchWards());
  }, [dispatch]);

  return (
    <div>
      <h2>Hospital</h2>
      <div className="hospital-container">
        <p>
          <strong>Total Patients: </strong>
          {totalPatients}
        </p>
        <p>
          <strong>Current Occupancy Rate: </strong>
          {currentOccupancy} %
        </p>
        <p>
          <strong>Top Ward</strong>
        </p>
      </div>
    </div>
  );
};

export default Hospital;
