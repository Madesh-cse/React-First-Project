import ReactImg from './logo.svg';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

    let desscription = reactDescriptions[genRandomInt(2)];
    return (
      <header className='main'>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desscription} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }