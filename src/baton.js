// Do not touch these constants.
// But it would be wise to use them somewhere in the class...
const SEASON_START_DATE = "2022-08-05";
const SEASON_END_DATE = "2023-06-04";

/**
 * @typedef {Object} Club - Club
 * @property {string} id - club ID
 * @property {string} name - club name
 */

/**
 * @typedef {Object} ClubRanking - Club ranking object - basically a club, plus the number of days
 * @property {string} id - club ID
 * @property {string} name - club name
 * @property {number} days - days with baton
 */

/**
 * @typedef {Object} Match - Match object
 * @property {number} id - The ID of the match
 * @property {string} date - The date of the match
 * @property {string} homeTeam - The ID of the home team
 * @property {string} awayTeam - The ID of the away team
 * @property {number} homeScore - The score of the home team
 * @property {number} awayScore - The score of the away team
 */

class BatonBourbotte {
  /**
   * @type {Club[]}
   */
  clubs;

  /**
   * @type {Match[]}
   */
  matches;

  /**
   * @type {string}
   */
  firstClubWithBatonId;

  /**
   *
   * @param {Club[]} clubs - The list of clubs involved in the season
   * @param {Match[]} matches - The list of the season matches
   * @param {string} firstClubWithBatonId - The ID of the club which gets the baton at the beginning
   */
  constructor(clubs, matches, firstClubWithBatonId) {
    this.clubs = clubs;
    this.matches = matches;
    this.firstClubWithBatonId = firstClubWithBatonId;
  }

  /**
   * @param {string} date
   * @returns {Club}
   */
  batonHolderAtGivenDate = (date) => {
    return {
      id: "WRONG_CLUB",
      name: "Not the good club",
    };
  };

  /**
   * @param {string} clubId
   * @returns {number}
   */
  numberOfBatonPossessionsForClub = (clubId) => {
    return 0;
  };

  /**
   * @param {string} clubId
   * @returns {number}
   */
  numberOfDaysWithBatonForClub = (clubId) => {
    return 0;
  };

  /**
   * Returns the club ranking based on possession days.
   * If two clubs have the same number of days, they must be sorted by alphabetical order.
   * @returns {ClubRanking[]}
   */
  clubRankingByPossessionDays = () => {
    return [
      { id: "CLUB1", name: "Best club", days: 200 },
      { id: "CLUB2", name: "Second best club", days: 50 },
    ];
  };
}

module.exports = { BatonBourbotte };
