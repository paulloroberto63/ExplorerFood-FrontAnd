import  Macarons  from '../../assets/Macarons.png'
import { Header } from '../../components/Header'
import { Container, Introduction, IntroductionText } from './style'

export function Home() {
    return(
        <Container>
            <main>
                <Header />
     <Introduction>
      <img src={Macarons} alt="Macarons de frutas vermelhas" />
     
     <IntroductionText>
         <h1>Sabores inigualáveis</h1>
         <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
     </IntroductionText>
     
</Introduction>

    
            
            </main>
        </Container>
    )
}