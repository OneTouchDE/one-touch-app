import { YouthAttendence } from "./YouthAttendence";
import { youthType } from "../../types";
import format from "date-fns/format";
import { useState } from "react";

interface YouthsAttendence {
  youths: youthType[];
}

interface SelectedYouthType {
  [key: number]: {
    isSelected: boolean;
    youthName: string;
  };
}

const Attendance = ({ youths }: YouthsAttendence) => {
  const [selectedYouths, setSelectedYouths] = useState<SelectedYouthType>({});

  function addSelectedYouth(youth: youthType) {
    setSelectedYouths({
      ...selectedYouths,
      [youth.youthId]: {
        isSelected: selectedYouths[youth.youthId]
          ? !selectedYouths[youth.youthId].isSelected
          : true,
        youthName: `${youth.firstName} ${youth.lastName}`,
      },
    });
  }

  function sendAttendence() {
    // const dataToSend = selectedYouths?.map((selectedYouth)=>)

    console.log(selectedYouths);
    setSelectedYouths({});
    console.log(selectedYouths);
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
      <button type="button" onClick={() => sendAttendence()}>
        Send
      </button>
    </div>
  );
};

export default Attendance;
