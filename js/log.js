function intervalControl() {
  const plawStyle = `
  font-weight: bold;
  font-size: 50px;
  color: red;
  text-shadow: 3px 3px 0 rgb(217,31,38),
    6px 6px 0 rgb(226,91,14),
    9px 9px 0 rgb(245,221,8),
    12px 12px 0 rgb(5,148,68),
    15px 15px 0 rgb(2,135,206),
    18px 18px 0 rgb(4,77,145),
    21px 21px 0 rgb(42,21,113)
`;

  const theRockBackground = `
  display: inline-block;
  background-image: url( 'https://bennadel.github.io/JavaScript-Demos/demos/console-log-css/rock.png' );
  background-size: cover;
  padding: 10px 175px 158px 10px;
`;

  let count = 0;
  const colors = ['#e67e22', '#8e44ad', '#27ae60', '#f1c40f', '#2980b9'];

  setInterval(() => {
    let pancadaStyle = `
      color: ${colors[count]};
      font-size: 40px;
      font-weight: bold;
      animation: colors 2s infinite;
    `;

    console.clear();
    console.log('%c Aqui tem , Plaw!!!', plawStyle);
    console.log(' ');
    console.log('%c Escuta a pancada do console!!! ', pancadaStyle);
    console.log("%c ----------------------", theRockBackground);

    ++count;
    if (!colors[count]) count = 0;
  }, 1000);

}

intervalControl();