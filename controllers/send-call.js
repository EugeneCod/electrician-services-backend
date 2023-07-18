const nodemailer = require('nodemailer');
require('dotenv').config();
const { SMPT_HOST, SMPT_PORT, SMPT_MAIL, SMPT_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: SMPT_HOST,
  port: SMPT_PORT,
  secure: true,
  auth: {
    user: SMPT_MAIL,
    pass: SMPT_PASSWORD,
  },
});

module.exports.sendCall = (req, res) => {
  const { name, phone, message } = req.body;
  console.log(name, phone, message, SMPT_HOST);

  const mailOptions = {
    from: SMPT_MAIL,
    to: SMPT_MAIL,
    subject: 'Заказ звонка из Electrician Services',
    html: `<h1>Заявка</h1><p>Имя: <b>${name}<b/></p><p>Телефон: <b>${phone}<b/></p><p>Сообщение: <b>${message}<b/></p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send({
        message: 'На сервере произошла ошибка!',
        error,
      });
    } else {
      res.send({ message: 'Заявка на совершение звонка успешно отправлена!' });
    }
  });
};
