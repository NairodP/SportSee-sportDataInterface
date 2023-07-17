export default class UserDataModel {
  constructor(data) {
    this._userMainData = this.processUserMainData(data.user);
    this._userActivity = data.activity;
    this._userAverageSessions = data.averageSessions;
    this._userPerformance = data.performance;
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