const { matches, clubs } = require("../src/fixtures.js");
const { BatonBourbotte } = require("../src/baton.js");

describe("BatonBourbotte", () => {
  let seasonWithLyonAsFirstHolder;
  let seasonWithParisAsFirstHolder;

  describe("batonHolderAtGivenDate", () => {
    beforeAll(() => {
      seasonWithLyonAsFirstHolder = new BatonBourbotte(clubs, matches, "OL");
      seasonWithParisAsFirstHolder = new BatonBourbotte(clubs, matches, "PSG");
    });

    it("should return an id and a name only", () => {
      expect(
        seasonWithLyonAsFirstHolder.batonHolderAtGivenDate("2022-08-06")
      ).toStrictEqual({
        id: expect.anything(),
        name: expect.anything(),
      });
    });

    it("should give the correct first holder club IDs", () => {
      expect(
        seasonWithLyonAsFirstHolder.batonHolderAtGivenDate("2022-08-06")
      ).toHaveProperty("id", "OL");

      expect(
        seasonWithParisAsFirstHolder.batonHolderAtGivenDate("2022-08-06")
      ).toHaveProperty("id", "PSG");
    });

    it("should give the correct first holder club names", () => {
      expect(
        seasonWithLyonAsFirstHolder.batonHolderAtGivenDate("2022-08-06")
      ).toHaveProperty("name", "Lyon");

      expect(
        seasonWithParisAsFirstHolder.batonHolderAtGivenDate("2022-08-06")
      ).toHaveProperty("name", "Paris SG");
    });

    it("should give the correct mid-season holder club IDs", () => {
      expect(
        seasonWithLyonAsFirstHolder.batonHolderAtGivenDate("2023-01-10")
      ).toHaveProperty("id", "SRFC");

      expect(
        seasonWithParisAsFirstHolder.batonHolderAtGivenDate("2023-01-10")
      ).toHaveProperty("id", "RCL");
    });
  });

  describe("numberOfBatonPossessionsForClub", () => {
    beforeAll(() => {
      seasonWithLyonAsFirstHolder = new BatonBourbotte(clubs, matches, "OL");
      seasonWithParisAsFirstHolder = new BatonBourbotte(clubs, matches, "PSG");
    });

    it("should return a number", () => {
      expect(
        typeof seasonWithLyonAsFirstHolder.numberOfBatonPossessionsForClub("OL")
      ).toBe("number");
    });

    it("should return the correct data", () => {
      expect(
        seasonWithLyonAsFirstHolder.numberOfBatonPossessionsForClub("OL")
      ).toEqual(1);

      expect(
        seasonWithParisAsFirstHolder.numberOfBatonPossessionsForClub("PSG")
      ).toEqual(2);

      expect(
        seasonWithParisAsFirstHolder.numberOfBatonPossessionsForClub("SB29")
      ).toEqual(0);
    });
  });

  describe("numberOfDaysWithBatonForClub", () => {
    beforeAll(() => {
      seasonWithLyonAsFirstHolder = new BatonBourbotte(clubs, matches, "OL");
      seasonWithParisAsFirstHolder = new BatonBourbotte(clubs, matches, "PSG");
    });

    it("should return a number", () => {
      expect(
        typeof seasonWithLyonAsFirstHolder.numberOfDaysWithBatonForClub("OL")
      ).toBe("number");
    });

    it("should return the correct data", () => {
      expect(
        seasonWithLyonAsFirstHolder.numberOfDaysWithBatonForClub("OL")
      ).toEqual(34);

      expect(
        seasonWithParisAsFirstHolder.numberOfDaysWithBatonForClub("PSG")
      ).toEqual(173);

      expect(
        seasonWithParisAsFirstHolder.numberOfDaysWithBatonForClub("SB29")
      ).toEqual(0);
    });
  });

  describe("clubRankingByPossessionDays", () => {
    let ranking;

    beforeAll(() => {
      seasonWithLyonAsFirstHolder = new BatonBourbotte(clubs, matches, "OL");
      ranking = seasonWithLyonAsFirstHolder.clubRankingByPossessionDays();
    });

    it("should return an array", () => {
      expect(Array.isArray(ranking)).toBe(true);
    });

    it("should have 20 items", () => {
      expect(ranking?.length).toBe(20);
    });

    it("should return an ID, a name and the number of days for each club", () => {
      expect(ranking[0]).toStrictEqual({
        id: expect.any(String),
        name: expect.any(String),
        days: expect.any(Number),
      });
    });

    it("should return the best club", () => {
      expect(ranking[0]).toHaveProperty("id", "OGCN");
    });

    it("should sort the clubs with the same number of days by alphabetical order", () => {
      expect(ranking[8]).toHaveProperty("id", "ACA");
      expect(ranking[18]).toHaveProperty("id", "TFC");
    });
  });
});
