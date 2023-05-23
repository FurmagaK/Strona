import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu'

function Sidebar ()  {

    return ( 
        <>
            <Menu className={"Sidebar"} >
                <a href='/'><img src="../pictures/logo.png" className='logo'></img></a>
                <div className='links' style={{position: "absolute", bottom: "0", display: "flex", flexDirection:"column"}}>
                    <a href='/Strona/aboutMe'>About Me</a>
                    <a href='https://www.instagram.com/hosehoundart/' target="_blank" rel="noreferrer">Instagram</a>
                    <a href='mailto:kacperfurmaga@gmail.com'>Email</a>
                </div>
            </Menu>

        </>
    )
}
export default Sidebar;