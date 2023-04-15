import styled from 'styled-components'

const HeaderStyled = styled.header`
    border-block-end: 1px solid #ffffff;
    padding-inline: .5rem;

    nav{
        display: flex;
        justify-content: space-between;
    }
    ol{
        margin: 0;
        padding: 0;
        padding-inline: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-inline-start: 1px solid #ffffff;
    }
    a{
        color: white;
        text-decoration: none;
        font-size: .75rem;
    }
    .sign_in_button{
        padding-block: .5rem;
        padding-inline: 1rem;
        border: 1px solid #be3bb7;
        background: #8e1c771e;
        font-size: .75rem;
        color: #be3bb7;
        font-weight: 900;
        cursor: pointer;
    }
    .title{
        display: flex;
        align-items: center;
    }
    .title span{
        font-weight: 900;
        font-size: 1rem;
    }
    .img_header{
        object-fit: cover;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <nav>
                <div className="title">
                    <img className='img_header' src="https://dthezntil550i.cloudfront.net/7w/latest/7w2211240415457960023971500/1280_960/eb2a6abb-df2c-468d-ac41-ce5e43754f61.png" alt="Kore ok" width="150" height="75" />
                    <span>KORE OK</span>
                </div>
                <ol>
                    <a href="#">LOG IN</a>
                    <button className='sign_in_button'>SIGN IN</button>
                </ol>

            </nav>
        </HeaderStyled>
    )
}

export default Header
