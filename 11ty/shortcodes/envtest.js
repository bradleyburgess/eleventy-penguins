const TEST1 = process.env.TEST1 || 'Hello';
const TEST2 = process.env.TEST2 || 'World';

module.exports = () =>
  `<p><code>TEST1</code>: ${TEST1}</p>
<p><code>TEST2</code>: ${TEST2}</p>`;
