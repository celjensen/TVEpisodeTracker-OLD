class Season {

    #seasonNumber;


    constructor(seasonNumber, numberOfEpisodes) {

        this.#seasonNumber = seasonNumber;

        // Store episodes in an object
        this.#episodes = {};

        for (let i = 1; i <= numberOfEpisodes; i++) {
            this.episodes[i] = new Episode(i);
        }
    }

    //GETTERS

    get #seasonNumber() {
        return this.#seasonNumber;
    }

    //METHODS

    markEpisodeWatched(episodeNumber) {
        if (!this.episodes[episodeNumber]) {
            return;
        }
        this.episodes[episodeNumber].markWatched();
    }

    setEpisodeTimestamp(episodeNumber, timestamp) {
        if (!this.episodes[episodeNumber]) {
            return;
        }
        this.episodes[episodeNumber].setTimestamp(timestamp);
    }
}