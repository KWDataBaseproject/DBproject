/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    display: flex;
    flex-direction: column;
    overflow-Y: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
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
function BoardList(){
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
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLine}/>
            <div css={ListLine}>
                <div css={ListLineName}>삼성전자 떡상 가즈아~~!</div>
                <div css={ListLineWriter}>bbbjihan</div>
                <div css={ListLineTime}>2022-12-03 15:33</div>
                <div css={ListLineViewCount}>105</div>
                <div css={ListLineLiked}>5</div>
            </div>
            <div css={HLineBold}/>
        </div>
    )
}

export default BoardList;