export default class UserDataModel {
  constructor(data) {
    this.userMainData = this.processUserMainData(data.userMainData);
    this.userActivity = data.userActivity;
    this.userAverageSessions = data.userAverageSessions;
    this.userPerformance = data.userPerformance;
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
    return this.userMainData;
  }

  getUserActivity() {
    return this.userActivity;
  }

  getUserAverageSessions() {
    return this.userAverageSessions;
  }

  getUserPerformance() {
    return this.userPerformance;
  }
}
