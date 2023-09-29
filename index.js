const goodbye = (name) => {
  const emailClosing = document.querySelector('.email__closing');
  emailClosing.textContent = `S pozdravem ${name}`;
};

goodbye('Pavel Ovesny');
