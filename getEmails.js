//Apps Script tool to fetch all email addresses in inbox
//Context: I'm deleting a Gmail account bc I've reached max storage
//         and I don't want to lose 3 yrs worth of contacts!

function getEmails() {
  var emailAddresses = {};
  var threads = GmailApp.search("is:inbox OR is:sent");
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var from = messages[j].getFrom();
      emailAddresses[from] = true;
      var to = messages[j].getTo();
      for (var k = 0; k < to.length; k++) {
        emailAddresses[to[k]] = true;
      }
    }
  }
  var emailArray = [];
  for (var key in emailAddresses) {
    emailArray.push(key);
  }
  Logger.log(emailArray);
}
