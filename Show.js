
class Show {

    #showName;
    #seasons;

    constructor(showName) {

        this.#showName = showName;
        this.#seasons = [];
    }

    get showName() {
        return this.#showName;
    }

}