function sendEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("a"); //check the sheet name and replace it
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  for (let i = 1; i < values.length; i++) {
    // Skip header row (i=1)
    const var1 = values[i]; //refers to the ith row
    const email = "placeholder_email@mail.com"; //the recievers mail
    const subject = "...email Subject to be sent"; //subjec t content for email
    const var2 = row[0]; // though it is listed as row it is infact for elements of the column
    const var3 = row[3];
    const body = `placeholdertext: ${var2} \n\n placeholdertext2: ${var3}`; //body part in email

    // Send the email
    GmailApp.sendEmail(email, subject, body); //send mail through the email logged in to google sheet
    //may need to authorize access to google sheet
  }
}
