/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardList from './BoardList';

const ComponentLayOut = css`
    position: fixed;
    margin-left: 300px;
    width: 760px;
    height: 86vh;
    display: flex;
    flex-direction: column;
`
const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`
const BoardHeader = css`  
    font-size: 24px;
    height: 40px;
    line-height: 40px;
`
const BoardStock = css`
    display: flex;
    height: 30px;
`
const BoardStockName = css`
    margin-left: 5px;
    font-size: 18px;
`
const BoardStockCode = css`
    font-size: 13px;
    line-height: 32px;
    color: grey;
    margin-left: 5px;
`

function Board(){
    return(
        <div css={ComponentLayOut}>
            <div css={BoardHeader}>토론게시판</div>
            <div css={HLineBold}/>
            <div css={BoardStock}>
                <div css={BoardStockName}>카카오</div>
                <div css={BoardStockCode}>035720</div>
            </div>
            <BoardList/>
        </div>
    )
}

export default Board;