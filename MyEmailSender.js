var nodemailer = require('nodemailer');
 
 class MyEmailSender {
  
  static MyStaticMethod(){
    console.log("My static method");
  }
 hello() {
  console.log("email sender");  
}

constructor(){

  this.mailOptions = {
    from: 'jainnik1491@gmail.com',
    to: 'jainnik1491@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
 
  this.transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jainnik1491@gmail.com',
      pass: 'Freedom@nik781'
    }
  });

}
 
send(){
  this.transporter.sendMail(this.mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}





}

module.exports =MyEmailSender
