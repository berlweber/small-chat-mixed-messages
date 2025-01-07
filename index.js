/*the program will print a mock-up small chat, with 4 part put together;
1. An opening greeting. 2. An opening question. 3  An answer from ‘me’. 4. A closing greeting.
every time it is run it uses randomly chosen something different for each part.*/

//arrays to store multiple choices for each of the conversation parts
const lsOfOpeningGreetings = [
    "Hi there, ",
    "Hello, ",
    "Dear Mr. or Mrs., ",
    "Good morning, ",
    "Good afternoon, ",
    "Good evening, ",
  ];
  const lsOfQuestions = [
    "How are you? ",
    "How is it going? ",
    "How are you feeling today? ",
    "What's up? ",
    "What's going on with you? Long time didn't see you! ",
    "are things moving in a good direction? ",
  ];
  const lsOfAnswers = [
    "Fine. ",
    "Not much. ",
    "Things are getting better rapidly. ",
    "I am so happy today!!!! ",
    "It's the same as yesterday. ",
    "Yeah, you know…. Thats life.",
  ];
  const lsOfClosingGreetings = [
    "Have a nice day. ",
    "Good evening. ",
    "Was great meeting you. ",
    "I enjoyed talking to you. ",
    "by by. ",
  ];
  
  //Function to choose a random element of an array not depending on a specific array length.
  const getRandomArrayElement = (array) =>
    array[Math.floor(Math.random() * array.length)];
  
  console.log(
    getRandomArrayElement(lsOfOpeningGreetings) +
      "\n" +
      getRandomArrayElement(lsOfQuestions) +
      "\n" +
      getRandomArrayElement(lsOfAnswers) +
      "\n" +
      "Nice to hear! " +
      "\n" +
      getRandomArrayElement(lsOfClosingGreetings),
  );
  