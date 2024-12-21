function sendEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("a"); //check the sheet name and replace it
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  for (let i = 1; i < values.length; i++) {
    // Skip header row (i=1)
    const row = values[i];
    const rollNo = row[0]; // Assuming roll no is in the first column (index 0)
    const email = row[3];
    const studentEmail = row[2]; // Assuming student email is in the third column (index 2)
    const password = row[4];
    const subject = "PU 2023 Batch Student email";
    const body = `Roll no: ${rollNo}\nStudent email: ${studentEmail}\nPassword: ${password}\n\nPlease note: Login with the email using outlook.com, mail providers like gmail will not work.`;

    // Send the email (remove password)
    GmailApp.sendEmail(email, subject, body);
  }
}
