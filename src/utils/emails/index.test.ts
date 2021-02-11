import sortEmails from 'utils/emails';

describe('sortEmails', () => {
  it('returns an array copy', () => {
    const emails = ['a@a.aa'];
    Object.freeze(emails);
    const expected = ['a@a.aa'];
    expect(sortEmails(emails)).toEqual(expected);
  });

  it('returns an already sorted array', () => {
    const emails = ['aa@aa.aa', 'ab@aa.aa', 'ab@ab.aa', 'aaa@aa.aa'];
    Object.freeze(emails);
    const expected = ['aa@aa.aa', 'aaa@aa.aa', 'ab@aa.aa', 'ab@ab.aa'];
    expect(sortEmails(emails)).toEqual(expected);
  });

  it('sorts the emails first on the domain name', () => {
    const emails = ['zz@aa.az', 'cc@aa.aa', 'aa@az.aa'];
    Object.freeze(emails);
    const expected = ['cc@aa.aa', 'zz@aa.az', 'aa@az.aa'];
    expect(sortEmails(emails)).toEqual(expected);
  });

  it('sorts the emails second on the name part of the email', () => {
    const emails = ['zz@aa.aa', 'cc@aa.aa', 'aa@aa.aa'];
    Object.freeze(emails);
    const expected = ['aa@aa.aa', 'cc@aa.aa', 'zz@aa.aa'];
    expect(sortEmails(emails)).toEqual(expected);
  });

  it('sorts the emails first by domain and second by name', () => {
    const emails = [
      'beawesome@theventury.com',
      'thatsawesome@theventury.com',
      'evenmoreawesome@theventury.com',
      'awesome.awesomness@theventury.com',
      'aaaaawesome.awesomness@theventury.com',
      'john.doe@gm.com',
      'chucknorris123@chuck.rocks',
      'bruce.lee.is.the.best@wtf.at',
    ];
    Object.freeze(emails);
    const expected = [
      'chucknorris123@chuck.rocks',
      'john.doe@gm.com',
      'aaaaawesome.awesomness@theventury.com',
      'awesome.awesomness@theventury.com',
      'beawesome@theventury.com',
      'evenmoreawesome@theventury.com',
      'thatsawesome@theventury.com',
      'bruce.lee.is.the.best@wtf.at',
    ];
    expect(sortEmails(emails)).toEqual(expected);
  });

  it('sorts as expected, just to make sure', () => {
    const emails = [
      'Sarina_Nikolaus40@hotmail.com',
      'Gordon_Abshire76@gmail.com',
      '11johnsmith@gmail.com',
      '11john.smith@gmail.com',
      'Lonzo.Cremin25@yahoo.com',
      'Stephan6@hotmail.com',
      '11johnsmith@hotmail.com',
      'Sofia.Jacobi76@gmail.com',
      'Caroline.Bergstrom89@yahoo.com',
      'Martin.Botsford98@hotmail.com',
      'Mia95@gmail.com',
      'Vida.Wilderman56@gmail.com',
    ];
    Object.freeze(emails);
    const expected = [
      '11john.smith@gmail.com',
      '11johnsmith@gmail.com',
      'Gordon_Abshire76@gmail.com',
      'Mia95@gmail.com',
      'Sofia.Jacobi76@gmail.com',
      'Vida.Wilderman56@gmail.com',
      '11johnsmith@hotmail.com',
      'Martin.Botsford98@hotmail.com',
      'Sarina_Nikolaus40@hotmail.com',
      'Stephan6@hotmail.com',
      'Caroline.Bergstrom89@yahoo.com',
      'Lonzo.Cremin25@yahoo.com',
    ];
    expect(sortEmails(emails)).toEqual(expected);
  });
});
