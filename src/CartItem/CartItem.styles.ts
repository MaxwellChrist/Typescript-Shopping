import styled from 'styled-components'

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Helvetica, sans-serif;
    border-bottom: 1px solid red;
    padding-bottom: 20px;

    div {
        flex: 1
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between
    }

    img {
        max-width: 80%;
        object-fit: cover;
        margin-left: 40px;
    }
`