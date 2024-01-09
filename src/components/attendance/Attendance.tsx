import { YouthAttendence } from "./YouthAttendence";
import { youthType } from "../../types";
import format from "date-fns/format";
import { useState } from "react";

interface YouthsAttendence {
  youths: youthType[];
}

const Attendance = ({ youths }: YouthsAttendence) => {
  const [selectedYouths, setSelectedYouths] = useState([]);

  console.log(selectedYouths);

  function addSelectedYouth(youth) {
    setSelectedYouths([
      ...selectedYouths,
      {
        isSelected: selectedYouths[youth.youthId]
          ? !selectedYouths[youth.youthId]
          : true,
        youth,
      },
    ]);
  }
  return (
    <div>
      <h3>Attendence</h3>
      <h3>Friday Sabha</h3>
      <h3> {format(new Date(), "dd-MM-yy")}</h3>
      {youths?.map((youth, idx) => (
        <YouthAttendence
          youth={youth}
          key={idx}
          addSelectedYouth={addSelectedYouth}
        />
      ))}
      <button type="button">Send</button>
    </div>
  );
};

export default Attendance;
