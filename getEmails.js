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
 // Logger.log(emailArray);
  var csvFile = emailArray.join("\n");
  var file = DriveApp.createFile("email_addresses.csv", csvFile, MimeType.CSV);
  Logger.log("File URL: " + file.getUrl());
}



