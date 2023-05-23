/* eslint-disable react/no-unescaped-entities */
import './Aboutme.css'

function Aboutme() {
    return(
        <>
            <div className="AboutMe_Main">
                <div className="left">
                    <p className='questions'>favorite cartoon? </p>
                    <p className='answers'>courage the coward</p>
                    <p className='questions'>pets?</p>
                    <p className='answers'>7 and counting</p>
                    <p className='questions'>stress level </p>
                    <p className='answers'>(Un)stable</p>
                    <p className='questions'>favorite tattoo of mine</p>
                    <p className='answers'>„playful” dinosaurs</p>
                </div>
                <div className="right">
                    <div className='top_text'>
                        <p>Hi! I'm Kacper</p>
                    </div>
                    <div className='about_photo'>
                        <img src='../pictures/aboutMe.jpg'></img>
                    </div>
                    <div className='bottom_text'>
                        <p>
                            I'M AN ILLUSTRATOR FROM POLAND CURRENTLY
                            STUDYING GRAPHIC DESIGN AT WSTI IN
                            KATOWICE.<n/>
                            I MAINLY FOCUS ON ILLUSTRATIONS AND
                            ANIMATIONS BUT I'M NOT LIMITED TO THAT.
                            STYLES I'M WORKING IN ARE: RUBBER
                            HOSE (CLASSIC 1930'S CARTOONS), OLD
                            SCHOOL AND NONTRADITIONAL TATTOO STYLE
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutme;