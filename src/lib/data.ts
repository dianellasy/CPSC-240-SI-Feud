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
    prompt: "What can a student do to better prepare himself/herself before the CPSC 240 midterm?",
    answers: [
      { text: "Study the GDB lecture notes", points: 40, revealed: false },
      { text: "Eat breakfast", points: 30, revealed: false },
      { text: "Study with your classmates", points: 15, revealed: false },
      { text: "Volunteer to try to debug Assignment 3 written by a struggling classmate", points: 8, revealed: false },
      { text: "Set up your exam environment before the exam", points: 5, revealed: false },
      { text: "Create a draft of your email", points: 2, revealed: false }
    ]
  },
  {
    id: 3,
    prompt: "What are some potential questions that will show up on the CPSC 240 concept midterm?",
    answers: [
      { text: "Kings and queens", points: 95, revealed: false },
      { text: "Distance between a decimal and its next highest neighbor", points: 90, revealed: false },
      { text: "IEEE754 (normal & subnormal)", points: 85, revealed: false },
      { text: "GDB", points: 80, revealed: false },
      { text: "LSB, MSB, Big/Little Endian", points: 75, revealed: false },
      { text: "If a register has only # bits, what is the largest two's complement signed/unsigned register possible?", points: 70, revealed: false },
      { text: "How do you find positive infinity in IEEE and base 10 form?", points: 65, revealed: false },
      { text: "What is the smallest normal number?", points: 60, revealed: false },
      { text: "Chapters 1-2: Why should we use assembly programming?", points: 55, revealed: false },
      { text: "Licenses", points: 50, revealed: false },
      { text: "What is activation record (AR)? What is its purpose and where is it?", points: 45, revealed: false },
      { text: "Arrays: What is the block of assembly that wil add all the numbers stored in r15?", points: 40, revealed: false },
      { text: "How do you remove the newline character that was recently used by fgets?", points: 35, revealed: false },
      { text: "How do you make a block that outputs two floats in one call to printf?", points: 30, revealed: false },
      { text: "How do you swap the value in registers r8 and r9?", points: 25, revealed: false }
    ]
  }
];