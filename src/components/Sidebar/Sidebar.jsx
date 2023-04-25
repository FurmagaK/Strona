import './Sidebar.css'
import { slide as Menu } from 'react-burger-menu'

function Sidebar ()  {

    return ( 
        <>
            <Menu className={"Sidebar"} >
                <a href='/'><img src="/src/assets/logo.png" className='logo'></img></a>
                <div className='links' style={{position: "absolute", bottom: "0", display: "flex", flexDirection:"column"}}>
                    <a href='/aboutMe'>About Me</a>
                    <a href='https://www.instagram.com/hosehoundart/'>Instagram</a>
                    <a href='mailto:kacperfurmaga@gmail.com'>Email</a>
                </div>
            </Menu>

        </>
    )
}
export default Sidebar;