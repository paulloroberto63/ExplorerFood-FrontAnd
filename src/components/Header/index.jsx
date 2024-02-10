import { PiReceipt } from 'react-icons/pi';
import { FiSearch } from "react-icons/fi";
import { Brand, Container, Search, Requests, Logaout } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { PiSignOutFill } from 'react-icons/pi'

export function Header() {
    return (
        <Container>
            <Brand>
            <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
</svg> <h1>Food Explorer</h1>
</Brand>
        
       <Search>
        <Input placeholder="Busque por pratos ou ingredientes"
               icon={FiSearch}/>
       </Search>
         
       <Requests>
        <Button  title="Pedidos (0)"
                 icon={PiReceipt}/>
        </Requests>   
          
        <Logaout>
        <PiSignOutFill />
        </Logaout>

        

        </Container>
    )
}