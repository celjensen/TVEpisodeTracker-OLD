
class Show {

    #showName;
    #numberOfSeasons;

    constructor(showName) {

        this.#showName = showName;
        this.#numberOfSeasons;
        this.seasons = {};

        //Initialize seasons
        for (let i = 1; i <= totalSeasons; i++) {
            this.seasons[i] = { numberOfEpisodes: 0, watchedEpisodes: {} };
        }

    }

    get #showName() {
        return this.#showName;
    }

    //METHODS

    //Add season
    addSeason(seasonNumber, totalEpisodes) {
        this.seasons[seasonNumber] = new Season(seasonNumber, totalEpisodes);
    }

    //Mark as watched
    markEpisodeWatched(seasonNumber, episodeNumber) {
        this.seasons[seasonNumber]?.markEpisodeWatched(episodeNumber);
    }

    //Change timestamp
    setEpisodeTimestamp(seasonNumber, episodeNumber, timestamp) {
        this.seasons[seasonNumber]?.setEpisodeTimestamp(episodeNumber, timestamp);
    }


}