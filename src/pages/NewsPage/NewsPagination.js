/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    position: fixed;
    left: 45%;
    top: 93%;
    width: 10%;
`

const Bar = css`
    display: flex;
    width:100%;
    justify-content: space-between;
`
const RightButton = css`
    width:0;
    height:0;
    margin-left: 3px;
    margin-top: 8px;
    border:6px solid grey;
    border-bottom-color: white;
    border-top-color: white;
    border-right-color: white;
    &:hover{
        border-left-color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor:pointer;
`

const LeftButton = css`
    width:0;
    height:0;
    margin-left: 3px;
    margin-top: 8px;
    border:6px solid grey;
    border-bottom-color: white;
    border-left-color: white;
    border-top-color: white;
    &:hover{
        border-right-color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor:pointer;
`

const Button = css`
    line-height: 26px;
    cursor:pointer;
    color: grey;
    &:hover{
        color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`


function NewsPagination(){
    return(
        <div css={ComponentLayOut}>
            <div css={Bar}>
                <div css={LeftButton}/>
                <div css={Button}>1</div>
                <div css={Button}>2</div>
                <div css={Button}>3</div>
                <div css={Button}>4</div>
                <div css={Button}>5</div>
                <div css={RightButton}/>
            </div>
        </div>

    )
}


export default NewsPagination;