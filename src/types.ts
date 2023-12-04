export interface youthType {
  name: string;
  birthdate: Date;
  number: number;
}

export interface sabhaType {
  title: string;
  date: Date;
  topic: string;
  speaker: {
    speakerOne: string;
    speakerTwo: string;
  };
}
