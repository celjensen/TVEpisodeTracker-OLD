
class User {

    //VARIABLES
    //# indicates a private variable

    #username;
    #password;
    #shows;

    //Private set to store unique usernames
    static #usernames = new Set();

    //CONSTRUCTOR

    constructor(username, password) {

        //Ensure username is unique
        if (User.#usernames.has(username)) {
            throw new Error("Username already in use!");
        }

        this.#username = username;
        this.#password = password;
        this.#shows = [];

        //Add username to usernames array
        User.#usernames.add(username);
    }

    //GETTERS

    get username() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    //3 dots (spread) returns a copy of the array
    //ensures external code could not modify it directly
    get trackedShows() {
        return [...this.#trackedShows];
    }

    //SETTERS

    //Don't need setter for username and password because can't be changed once set

    set shows(newShows) {
        if (Array.isArray(newShows)) {
            //Assigns a copy of newShows
            this.#trackedShows = [...newShows];
        } else {
            console.log("Invalid. Must be an array");
        }
    }

    //METHODS

    //Adds show to shows array
    addShow(show) {
        this.#shows.push(show);
    }

    //Static method to check if username is taken
    static isUsernameTaken(username) {
        return User.#usernames.has(username);
    }

}


