const noReplySender = {
  sender: 'noreply@pleez.com.br>',
  create(title) {
    return `${title} ${this.sender}`;
  }
};

export { noReplySender };
