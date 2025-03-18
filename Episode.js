class Episode {

    //Timestamp in seconds
    #timestamp;
    #watched;
    #episodeNumber;

    constructor(episodeNumber) {

        this.#episodeNumber = episodeNumber;
        this.#watched = false;
        this.#timestamp = null;
    }

    //GETTERS

    get #timestamp() {
        return this.#seconds;
    }

    get #watched() {
        return this.#watched;
    }

    //SETTERS

    set #timestamp(timestamp) {
        if (this.watched) {
            return;
        }
        this.timestamp = timestamp;

    }

    //METHODS

    markWatched() {
        this.watched = true;
        this.timestamp = "DONE";
    }


}