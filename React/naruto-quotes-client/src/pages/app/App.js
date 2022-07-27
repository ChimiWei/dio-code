import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png';
import { Quotes } from '../../components/quotes/Quotes';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(jutsoSound);

function App() {
  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
     quote: 'loading...', 
     speaker: 'loading speaker...'
    });
  console.log(quoteState);

  const onUpdate = async () => {
      const quote = await getQuote();
      audio.play()
      setQuoteState(quote)
  }; 

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false
    }
  }, []);
  
  return (
    <Content className="App">
      <Quotes {...quoteState} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto holding kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NarutoImg = styled.img`
  max-width: 40vw;
  align-self: flex-end;
`


export default App;
