const VisitHistory = require("../models/visitHistory");

describe("Visit History", () => {
  it("keeps a log of the user visit data", () => {
    const date = new Date();
    const visitHistory = new VisitHistory();
    visitHistory.addVisit("test user agent string", date);
    expect(visitHistory.getVisitHistory()).toEqual([
      {
        userAgentString: "test user agent string",
        timestamp: date,
      },
    ]);
  });
});
