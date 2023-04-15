import styled from 'styled-components'

const ProductStyled = styled.div`
    .card{
        max-inline-size: 12rem;
    }
    img{
        max-inline-size: 100%;
        border: 1px solid #ab21ab;
    }
    .imgDiv{
        display: block;
        position: relative;
    }
    .infoCard{
        font-size: .9rem;
        text-align: center;
        padding-block: .5rem;
    }
    .price{
        position: absolute;
        background: black;
        border: 1px solid white;
        top: .5rem;
        left: .5rem;
        padding-block: .5rem;
        padding-inline: .75rem;
        font-size: .9rem;
    }
`

function Product() {
    return (
        <ProductStyled>
            <div className="card">
                <div className="imgDiv">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_731894-MLM49901463996_052022-O.webp" alt="" />
                    <span className='price'>$950</span>
                </div>
                <div className="infoCard">
                    Muñeca edicion especial de los años 1600
                </div>
            </div>
        </ProductStyled>
    )
}

export default Product
