import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am Web Devloper',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am Web Design',
        1000,
        'I am Graphic Design',
        1000,
        'I am Full Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default ExampleComponent 