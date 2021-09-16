import { Heading } from '../../components/Heading';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper theme={theme}>
        <Heading>Olá Mundo</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
