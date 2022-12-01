/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 25%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 24px;
    margin-left: 5px;
    color: #ff8906;
`

const HLineBold = css`
    border: 1px solid black;
    height: 0px;
`

const HLine = css`
    border: 1px solid grey;
    height: 0px;
    width: 100%;
`

const TextLine = css`
    height: 36px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

function ExchangeBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>시장자료</div>
        <div css={HLineBold}></div>
        </div>
    )
}

export default ExchangeBoard;