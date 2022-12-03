/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    font-size: 15px;
    text-align: center;
    width: 100%;
`

const NonActive = css`
    color: #7C7B7B;
    &:hover{
        color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
    width: 100%;
`

const Active = css`
    color: #ff8906;
    border-bottom: solid 2px black;
    width: 100%;
`

function TapButton({content, index, tapIndex}){
    return(
        <div css={ComponentLayOut}>
            <div css={index === tapIndex? Active : NonActive}>
            {content}
            </div>
        </div>
    )
}

export default TapButton;