import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Contact
        photo="https://www.ufrgs.br/enigma/wp-content/uploads/2021/02/marg-1024x1024.jpg"
        name="Margaret Hamilton"
        description="Don’t let fear get in the way and don’t be afraid to say 'I don’t know' or 'I don’t understand' - No question is a dumb question."
        status='online'
      />
      <Contact
        photo="https://i.pinimg.com/564x/5e/ff/9d/5eff9d6f7d459aa4c11e0660f1377824.jpg"
        name="Gladys West"
        description="Always doing things just right, to set an example for other people who were coming behind me, especially women."
        status='busy'
      />
      <Contact
        photo="https://i.pinimg.com/564x/89/94/0e/89940e93486a06f15ecd9eebb70ed69b.jpg"
        name="Ada Lovelace"
        description="Your best and wisest refuge from all troubles is in your science."
        status='offline'
      /> 
      <Contact
        photo="https://i.pinimg.com/564x/dc/a1/82/dca1824680f350072e7e10d3f1c9f5e4.jpg"
        name="Katherine Johnson"
        description="You will do better if you cause other people to want to learn."
        status='offline'
      />
      <Contact
        photo="https://i.pinimg.com/736x/b8/82/95/b88295ca4bc12e5087734725a280a1fc.jpg"
        name="Grace Hopper"
        description="A ship in port is safe, but that's not what ships are built for."
        status='offline'
      />
      
    </>
  );
}

export default App;
