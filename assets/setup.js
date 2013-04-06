function gotIssues(issuesResponse) {
  var issues = issuesResponse["data"];
  var issuesHTML = ""
  for (var i = 0; i < Math.min(issues.length, 5); i++ ){
    issue = issues[i]
    issuesHTML += "<li><a href='" + issue["html_url"] + "'>" + issue["title"] + "</a></li>"
  }
  
  document.getElementById("upcoming_topics").innerHTML = issuesHTML
}

// Setup the next meetup
var nextWed = Date.today().final().wednesday()
document.getElementById("meetup_date").innerHTML = "Next meeting is " +  nextWed.toString("MMMM dS")