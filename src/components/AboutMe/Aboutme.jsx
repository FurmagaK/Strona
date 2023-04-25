/* eslint-disable react/no-unescaped-entities */
import './Aboutme.css'

function Aboutme() {
    return(
        <>
            <div className="AboutMe_Main">
                <div className="left">
                    <p className='questions'>favourite cartoon? </p>
                    <p className='answers'>courage the cowar</p>
                    <p className='questions'>pets?</p>
                    <p className='answers'>7 and counting</p>
                    <p className='questions'>stress level </p>
                    <p className='answers'>(Un)stable</p>
                    <p className='questions'>favorite tattoo of mine</p>
                    <p className='answers'>„playful” dinosaurs</p>
                </div>
                <div className="right">
                    <div className='top_text'>
                        <p>hi! I'm Kacper</p>
                    </div>
                    <div className='about_photo'>
                        <img src='/src/assets/aboutMe.jpg'></img>
                    </div>
                    <div className='bottom_text'>
                        <p>
                            I'M AN ILLUSTRATOR FROM POLAND CURRENTLY
                            STUDYING GRAPHIC DESIGN AT WSTI IN
                            KATOWICE.<n/>
                            I MAINLY FOCUS ON ILLUSTRIONS AND
                            ANIMATIONS BUT I'M NOT LIMITED TO THAT.
                            SYLES I'M WORKING IN ARE: RUBBER
                            HOSE (CLASSIC 1930'S CARTOONS), OLD
                            SCHOOL AND NEOTRADITIONAL TATTOO STYLE
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutme;