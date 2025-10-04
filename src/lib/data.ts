export interface Answer {
  text: string;
  points: number;
  revealed: boolean;
}

export interface Question {
  id: number;
  prompt: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    prompt: "What are some topics that will be on the midterm?",
    answers: [
      { text: "IEEE", points: 35, revealed: false },
      { text: "GDB", points: 25, revealed: false },
      { text: "Macros", points: 20, revealed: false },
      { text: "Why and when to use 'C' in some prototype", points: 10, revealed: false },
      { text: "Array of ints and floats passed to a function using GPRS and not xmmm registers", points: 6, revealed: false },
      { text: "Kings & Queens", points: 4, revealed: false }
    ]
  },
  {
    id: 2,
    prompt: "What can a student do to better prepare himself/himself before the CPSC 240 midterm?",
    answers: [
      { text: "Study the GDB lecture notes", points: 40, revealed: false },
      { text: "Eat breakfast", points: 30, revealed: false },
      { text: "Study with your classmates", points: 15, revealed: false },
      { text: "Volunteer to try to debug Assignment 3 written by a struggling classmate", points: 8, revealed: false },
      { text: "Set up your exam environment before the exam", points: 5, revealed: false },
      { text: "Create a draft of your email", points: 2, revealed: false }
    ]
  }
];