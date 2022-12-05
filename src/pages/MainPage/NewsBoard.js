/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 35%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 18px;
    line-height: 45px;
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
    padding-top: 5px;
    padding-bottom: 5px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor: pointer;
`

const EmptyLine = css`
    padding-top: 5px;
    padding-bottom: 5px;
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const PostTitle = css`
    font-size: 13px;
    width: 60%;
    line-height: 20px;
`

const PostWriter = css`
    font-size: 13px;
    width: 20%;
    line-height: 20px;
    text-align: center;
`

const PostTime = css`
    margin-right: 5px;
    font-size: 13px;
    width: 20%;
    line-height: 20px;
    text-align: right;
`

function NewsBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>주요뉴스</div>
            <div css={HLineBold}></div>
            <div css={TextLine}>
                <div css={PostTitle}>美 10년 국채 4.18%...</div>
                <div css={PostWriter}>서울경제</div>
                <div css={PostTime}>2022.10.20</div>
            </div>
            <div css={HLine}></div>
            <div css={EmptyLine}>
            </div>
            <div css={HLine}></div>
            <div css={EmptyLine}>
            </div>
            <div css={HLine}></div>
            <div css={EmptyLine}>
            </div>
            <div css={HLine}></div>
            <div css={EmptyLine}>
            </div>
            <div css={HLineBold}></div>
        </div>
    )
}

export default NewsBoard;