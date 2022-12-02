/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 35%;
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
    border-bottom: 1px solid black;
    height: 0px;
`

const HLine = css`
    border-bottom: 1px solid #E0E0E0;
    height: 0px;
    width: 100%;
`

const TextLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const PostTitle = css`
    font-size: 15px;
    width: 40%;
    line-height: 26px;
`

const PostWriter = css`
    font-size: 13px;
    width: 20%;
    line-height: 26px;
    text-align: center;
`

const PostStock = css`
    font-size: 13px;
    width: 20%;
    line-height: 26px;
    text-align: center;
`

const PostTime = css`
    margin-right: 5px;
    font-size: 15px;
    width: 20%;
    line-height: 26px;
    text-align: right;
`

function NoticeBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>게시판</div>
            <div css={HLineBold}></div>
            <div css={TextLine}>
                <div css={PostTitle}>가즈아~~!</div>
                <div css={PostWriter}>bbbjihan</div>
                <div css={PostStock}>삼성전자</div>
                <div css={PostTime}>AM 5:22</div>
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
                <div css={PostTitle}>졸리다잉</div>
                <div css={PostWriter}>bbbjihan</div>
                <div css={PostStock}>이엔플러스</div>
                <div css={PostTime}>AM 5:10</div>
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
            </div>
            <div css={HLineBold}></div>
        </div>
    )
}

export default NoticeBoard;