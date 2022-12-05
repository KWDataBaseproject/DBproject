/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BoardList from './BoardList';
import PostViewer from './PostViewer';
import WritePost from './WritePost';

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
    height: 40px;
    display: flex;
    justify-content: space-between;
`
const BoardTitle = css`
    font-size: 24px;
    height: 40px;
    line-height: 40px;
    color: #ff8906;
`
const WholeBoardButton = css`
    font-size: 20px;
    height: 40px;
    line-height: 50px;
    cursor: pointer;
    color: grey;
    &:hover{
        color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
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
    const [boardState, setBoardState] = useState(0); // 0 = BoardList, 1 = WritePost, 2 = PostViewer
    return(
        <div css={ComponentLayOut}>
            <div css={BoardHeader}>
                <div css={BoardTitle}>토론게시판</div>
                <div css={WholeBoardButton}>전체게시판 보기</div>
            </div>
            <div css={HLineBold}/>
            <div css={BoardStock}>
                <div css={BoardStockName}>카카오</div>
                <div css={BoardStockCode}>035720</div>
            </div>
            {
                boardState === 0?
                    <BoardList setBoardState={setBoardState}/>
                :
                    boardState === 1?
                        <WritePost setBoardState={setBoardState}/>
                    :
                        boardState === 2?
                            <PostViewer setBoardState={setBoardState}/>
                        :
                            "ERROR"
            }
        </div>
    )
}

export default Board;