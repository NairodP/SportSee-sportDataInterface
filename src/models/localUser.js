export default class LocalUserDataModel {
  constructor(data) {
    this._userMainData = this.processUserMainData(data.userMainData);
    this._userActivity = data.userActivity.sessions;
    this._userAverageSessions = data.userAverageSessions.sessions;
    this._userPerformance = data.userPerformance;
  }

  processUserMainData(userMainData) {
    const processedUserMainData = { ...userMainData };
    if (processedUserMainData.todayScore !== undefined) {
      processedUserMainData.score = processedUserMainData.todayScore;
      delete processedUserMainData.todayScore;
    }
    return processedUserMainData;
  }

  getUserMainData() {
    return this._userMainData;
  }

  getUserActivity() {
    return this._userActivity;
  }

  getUserAverageSessions() {
    return this._userAverageSessions;
  }

  getUserPerformance() {
    return this._userPerformance;
  }
}


