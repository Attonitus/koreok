import styled from 'styled-components'

const FooterStyled = styled.div`
    border-block-start: 1px solid white;
    .imgDiv{
        max-inline-size: 25rem;
    }
    img{
        display: block;
        max-inline-size: 100%;
    }
    footer{
        background: #0000007f;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-block-end: 2rem;
    }
    .end{
        padding-block-start: 1rem;
        a{
            color: white;
        }
    }
`

function Footer() {
    return (
        <FooterStyled>
            <footer>
                <h3>¡Muchas gracias por visitarnos!</h3>
                <div className="imgDiv">
                    <img src="https://media.tenor.com/no01nqqz-TYAAAAC/pochita-chainsaw-man.gif" alt="Pochita" title="Pochita" />
                </div>
                <div className="end">
                    Página hecha con 💖 por <a href="https://github.com/Attonitus" target='_blank'>Atto</a>
                </div>
            </footer>
        </FooterStyled>
    )
}

export default Footer
