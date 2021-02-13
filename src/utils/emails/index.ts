export default function sort(emails: string[]): string[] {
  const sorteds = emails
    .map(email => {
      const parts = email.split('@');
      return parts.reverse().join('@');
    })
    .sort();
  return sorteds.map(email => {
    const parts = email.split('@');
    return parts.reverse().join('@');
  });
}
