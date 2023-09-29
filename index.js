const goodbye = (name) => {
  const emailClosing = document.querySelector('.email__closing');
  emailClosing.textContent = `S pozdravem ${name}`;
};

goodbye('Pavel Ovesny');

const fillSubject = (subject) => {
  const subjectElement = document.querySelector('.email__subject');
  subjectElement.textContent = subject;
};
fillSubject('new notification');

const fillBody = (body, name) => {
  const emailElement = document.querySelector('.email__body');
  emailElement.textContent = body;
  goodbye(name);
};
fillBody(
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, doloremque ipsa fugiat quibusdam placeat consectetur nesciunt sed? Voluptas, totam consequuntur minima tempore quaerat quasi repellendus, corrupti maiores est autem mollitia?',
  'Jan Novak',
);
