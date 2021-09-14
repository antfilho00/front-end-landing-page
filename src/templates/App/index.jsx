import { theme } from '../../styles/theme';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper theme={theme}>
        <h1>Hello</h1>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
