/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    display: flex;
    flex-direction: column;
`
const BoardListHeader = css`
    display: flex;
    justify-content: space-between;
`
const BoardListHeaderName = css`
    width: 43%;
    text-align: center;
`
const BoardListHeaderWriter = css`
    width: 15%;
    text-align: center;
`
const BoardListHeaderTime = css`
    width: 20%;
    text-align: center;
`
const BoardListHeaderViewCount = css`
    width: 10%;
    text-align: center;
`
const BoardListHeaderLiked = css`
    width: 10%;
    text-align: center;
`

const List = css`
    display: flex;
    flex-direction: column;
    height: 650px;
    overflow-Y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
    border-bottom: solid 1px black;
`

const ListLine = css` 
    display: flex;
    height: 35px;
    line-height: 35px;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor: pointer;
`

const EmptyLine = css`
    height: 35px;
`
const ListLineName = css`
    width: 43%;
    text-align: left;
`
const ListLineWriter = css`
    width: 15%;
    text-align: left;
`
const ListLineTime = css`
    width: 20%;
    text-align: center;
`
const ListLineViewCount = css`
    width: 10%;
    text-align: center;
`
const ListLineLiked = css`
    width: 10%;
    text-align: center;
`
const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`
const HLine = css`
    border-bottom: 1px solid #E0E0E0;
    height: 0px;
    width: 100%;
`

const BoardFooter = css`
    display: flex;
    height: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const ButtonBar = css`
    display: flex;
    width: 20%;
    justify-content: space-between;
    margin-left: 40px;
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

const FooterBox = css`
`

const WriteButton = css`
    cursor: pointer;
`
function BoardList({ setBoardState }){
    return(
        <div css={ComponentLayOut}>
            <div css={BoardListHeader}>
                <div css={BoardListHeaderName}>제목</div>
                <div css={BoardListHeaderWriter}>작성자</div>
                <div css={BoardListHeaderTime}>작성일시</div>
                <div css={BoardListHeaderViewCount}>조회수</div>
                <div css={BoardListHeaderLiked}>추천</div>
            </div>
            <div css={HLineBold}/>
            <div css={List}>
                <div css={ListLine} onClick={()=>{setBoardState(2);}}>
                    <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                    <div css={ListLineWriter}>bbbjihan</div>
                    <div css={ListLineTime}>2022-12-03 15:33</div>
                    <div css={ListLineViewCount}>105</div>
                    <div css={ListLineLiked}>5</div>
                </div>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
                <div css={HLine}/>
                <div css={EmptyLine}/>
            </div>
            <div css={BoardFooter}>
                <div css={FooterBox}/>
                <div css={ButtonBar}>
                    <div css={LeftButton}/>
                    <div css={Button}>1</div>
                    <div css={Button}>2</div>
                    <div css={Button}>3</div>
                    <div css={Button}>4</div>
                    <div css={Button}>5</div>
                    <div css={RightButton}/>
                </div>
                <div css={FooterBox}>
                    <div css={WriteButton} onClick={()=>{setBoardState(1);}}>글쓰기</div>
                </div>
            </div>
        </div>
    )
}

export default BoardList;