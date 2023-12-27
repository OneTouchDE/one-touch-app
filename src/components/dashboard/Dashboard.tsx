import { youthType } from "../../types";
import { youthdata } from "../assets/dummydata";
import { sabhaType } from "../../types";
import { sabhaData } from "../assets/dummydata";
import { startOfWeek, endOfWeek, isWithinInterval, format } from "date-fns";

// console.log(youthdata);
// console.log("sabha Data", sabhaData);

const todayDate: Date = new Date();
const startOfTheWeekDate = startOfWeek(todayDate);
const endOfTheWeekDate = endOfWeek(todayDate);
const todayInString = format(todayDate, "dd-MM-yyyy");
// console.log("today's date is", today);
// console.log("Start", startOfTheWeek);
// console.log("End", endOfTheWeek);

const youthsWithBirthdayThisWeek = youthdata.filter((youth: youthType) => {
  const userBirthDate = youth.birthdate;
  return isWithinInterval(userBirthDate, {
    start: startOfTheWeekDate,
    end: endOfTheWeekDate,
  });
});

function Dashboard() {
  return (
    <>
      <div>
        <h3>Birthdays</h3>
        {youthsWithBirthdayThisWeek?.map((youth: youthType) => {
          const youthBirthdayToday = format(youth.birthdate, "dd-MM-yyyy");
          if (youthBirthdayToday === todayInString) {
            return (
              <div
                key={youth.youthId}
                style={{ color: "red" }}
              >{`Today is Yours ${youth.firstName} ${youth.lastName}`}</div>
            );
          }
          return (
            <div
              key={youth.youthId}
            >{`${youth.firstName} ${youth.lastName}`}</div>
          );
        })}
      </div>
      <div>
        <h3>Upcoming Events</h3>
        {sabhaData?.map((sabha: sabhaType, index: number) => {
          return (
            <div key={index}>
              <h3>{sabha.title}</h3>

              <p>Date: {format(sabha.date, "dd-MM-yyyy")}</p>
              <p>Topic: {sabha.topic}</p>
              <h5>Speaker(s)</h5>
              <p>{sabha.speaker.speakerOne}</p>
              <p>{sabha.speaker.speakerTwo}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
