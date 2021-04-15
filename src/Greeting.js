// function getLanguage(language) {
//   switch (language) {
//     case 'de':
//       return 'Hallo';
//     case 'en':
//       return 'Hello';
//     case 'fr':
//       return 'Bonjour';
//     case 'es':
//       return 'Hola';
//     default:
//       return 'Hello';
//   }
// }

function Greeting(props) {
  return (
    <div>
      <span className="border">{props.language}</span>
    </div>
  );
}

export default Greeting;
