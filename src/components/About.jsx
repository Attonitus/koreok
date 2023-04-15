import styled from 'styled-components'
import pochita from '../../assets/pochita-unscreen.gif'

const AboutStyled = styled.div`
    display: flex;
    justify-content: center;

    .margin{
        display: flex;
        max-inline-size: 75rem;
        margin-block: 1.5rem;
        margin-inline: 1rem;
        border: 1px solid #fff;
    }
    .about-title{
        padding-inline: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .about-title h1{
        font-weight: 300;
        font-size: 2rem;
    }
    .imgDiv{
        position: relative;
        max-inline-size: 20rem;
    }
    .imgDiv img{
        display: block;
        max-inline-size: 100%;
    }
    .hot{
        position: absolute;
        background-color: black;
        top: 1rem;
        left: 1rem;
        padding-block: .75rem;
        padding-inline: 1rem;
        border: 1px solid white;
    }
    span{
        text-align: center;
    }
    .about-title span{
        padding-block-end: 1rem;
    }
    .red-social{
        font-weight: 900;
        font-size: 1.2rem;
    }
    .redes{
        display: flex;
        gap: 1.5rem;
        padding-block-end: 1rem;
    }
    .gif-pochita{
        position: absolute;
        top: -2rem;
        right: 0;
    }
    @media screen and (max-width: 764px){
        .margin{
            flex-direction: column;
            align-items: center;
        }
        .gif-pochita{
            position: absolute;
            inline-size: 10rem;
            top: 6rem;
            right: -1rem;
        }
    }

    @media screen and (max-width: 500px){
        .margin{
            flex-direction: column;
            align-items: center;
        }
        .gif-pochita{
            position: absolute;
            inline-size: 10rem;
            top: 7rem;
            right: -1rem;
        }
    }

    @media screen and (max-width: 375px){
        .margin{
            flex-direction: column;
            align-items: center;
        }
        .gif-pochita{
            position: absolute;
            inline-size: 8rem;
            top: 12rem;
            right: -1rem;
        }
    }
`

function About() {
    return (
        <AboutStyled>
            <div className="margin">
                <div className="imgDiv">
                    <img src="https://i.ebayimg.com/images/g/v8AAAOxyYANTXR4i/s-l1600.jpg" alt="Muñeca" title='Muñeca' />
                    <div className="hot">
                        Hot 🔥
                    </div>
                </div>
                <div className="about-title">
                    <img src={pochita} alt="Pochita" title='Pochita' width="200" className='gif-pochita' />
                    <h1>¡Bienvenid@ a Kore OK!</h1>
                    <span>Disponemos de una gran variedad de muñecas para aumentar tu cole (❁´◡`❁)</span>
                    <span className='red-social'>Puedes encontrarme en:</span>
                    <div className="redes">
                        <a href="https://www.facebook.com/ruuthpiedad.olivazztorrez" target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/1400/1400477.png" width="32" alt="Facebook" title="Facebook" /></a>
                        <a href="https://www.twitter.com" target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/2525/2525779.png" width="32" alt="Twitter" title="Twitter" /></a>
                        <a href="https://www.instagram.com" target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/3820/3820301.png" width="32" alt="Instagram" title="Instagram" /></a>
                    </div>
                </div>
            </div>
        </AboutStyled>
    )
}

export default About
