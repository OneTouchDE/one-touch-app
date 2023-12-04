import { youthType } from "../../types";
import { sabhaType } from "../../types";
export const youthdata: youthType[] = [
  {
    name: "John Doe",
    birthdate: new Date("2023-12-04"),
    number: 1234567890,
  },
  {
    name: "Jane Smith",
    birthdate: new Date("1985-08-22"),
    number: 9876543210,
  },
  {
    name: "Alice Johnson",
    birthdate: new Date("2023-12-5"),
    number: 5551234567,
  },
  {
    name: "Bob Brown",
    birthdate: new Date("1988-11-28"),
    number: 5559876543,
  },
  {
    name: "Eva White",
    birthdate: new Date("1995-06-03"),
    number: 7894561230,
  },
  {
    name: "Charlie Green",
    birthdate: new Date("2023-12-04"),
    number: 1237894560,
  },
  {
    name: "David Black",
    birthdate: new Date("1998-12-05"),
    number: 3216540987,
  },
  {
    name: "Grace Miller",
    birthdate: new Date("1989-04-20"),
    number: 4567890123,
  },
  {
    name: "Frank Wilson",
    birthdate: new Date("1991-07-15"),
    number: 9870123456,
  },
  {
    name: "Sophie Davis",
    birthdate: new Date("1984-02-08"),
    number: 6543217890,
  },
];

export const sabhaData: sabhaType[] = [
  {
    title: "Event 1",
    date: new Date("2023-12-01"),
    topic: "Introduction to JavaScript",
    speaker: {
      speakerOne: "John Doe",
      speakerTwo: "Jane Smith",
    },
  },
  {
    title: "Event 2",
    date: new Date("2023-12-08"),
    topic: "React Basics",
    speaker: {
      speakerOne: "Alice Johnson",
      speakerTwo: "Bob Brown",
    },
  },
  {
    title: "Event 3",
    date: new Date("2023-12-15"),
    topic: "Node.js Fundamentals",
    speaker: {
      speakerOne: "Charlie Green",
      speakerTwo: "David Black",
    },
  },
  {
    title: "Event 4",
    date: new Date("2023-12-22"),
    topic: "Vue.js Workshop",
    speaker: {
      speakerOne: "Grace Miller",
      speakerTwo: "Frank Wilson",
    },
  },
];
