class visitHistory {
  constructor() {
    this.log = [];
  }
  getVisitHistory() {
    return this.log;
  }
  addVisit(userAgent, date = new Date()) {
    // add the userVisit, with user-agent string and timestamp to the log array
    const userVisit = {
      userAgentString: userAgent,
      timestamp: date,
    };
    this.log.push(userVisit);
    console.log(this.log);
    return userVisit;
  }
}

module.exports = visitHistory;
