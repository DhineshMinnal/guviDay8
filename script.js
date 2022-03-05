// //// Class movie


// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating) {
        this.title = title
        this.studio = studio
        this.rating = "PG"
    }

    getPG(movies) {
        let result = movies.filter(movie => movie.rating === "PG")
    }
}

const movie1 = new Movie()

movie1.title = "Casino Royale"
movie1.studio = "Eon Productions"
movie1.rating = "PG13"

console.log(movie1)


/// person class

class Person {
    constructor(obj) {
        this.firstName = obj.firstName
        this.lastName = obj.lastName
        this.age = obj.age
        this.email = obj.email
        this.mobile = obj.mobile
    }
}

const person1 = new Person({
    firstName: "Kumar",
    lastName: "Dhoni",
    age: 29,
    email: "dhoni.kumar98@gmail.com",
    mobile: 7418786698

})


console.log(person1)


// // uber price

class Uber {
    constructor(kms) {
        this.kms = kms
    }
    price(kms) {
        return kms * 15
    }
}

const ride1 = new Uber()

console.log(ride1.price(100))



