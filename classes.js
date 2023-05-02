// Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
class Car {
    constructor(make, model, year, isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
    };
    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
      };
    }
    const car1 = new Car("Toyota", "Camry", 2020, true);
    console.log(car1);

    class Rental {
        constructor(car, renterName, rentalStartDate, rentalEndDate) {
          this.car = car;
          this.renterName = renterName;
          this.rentalStartDate = rentalStartDate;
          this.rentalEndDate = rentalEndDate;
        }
        calculateRentalDuration() {
            const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
            const startDate = new Date(this.rentalStartDate);
            const endDate = new Date(this.rentalEndDate);
            const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
            return diffDays;
          }
        }
      
const car = new Car("Toyota", "Camry", 2020, true);
const rental = new Rental(car, "Milcah Nkatha", "2023-05-01", "2023-05-05");
const rentalDuration = rental.calculateRentalDuration();
console.log(rentalDuration);

class Question {
    constructor(text, options, correctAnswer){
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer
    }
    checkAnswer(userAnswer){
        return userAnswer === this.correctAnswer;
    }
}

const question = new Question("Who was the first president of Kenya", ["Mwai Kibaki", "Uhuru Kenyatta", "Dedan Kimathi", "Jomo Kenyatta"], "Jomo Kenyatta");
const userAnswer = "Mwai Kibaki";
const isCorrect = question.checkAnswer(userAnswer);
console.log(isCorrect); 

// / qq2. Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:
// ● addQuestion: Takes a Question object as a parameter and adds it to the
// questions array.
// ● nextQuestion: Advances to the next question in the quiz by incrementing the
// currentQuestionIndex.
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is
// correct using the checkAnswer method of the Question class, and updates the
// score if the answer is correct.


class Quiz{
    constructor(){
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question){
        this.questions.push(question);
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(userAnswer)) {
          this.score++;
        }
    }
}