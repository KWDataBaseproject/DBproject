/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import UserInform from './UserInform';
import MajorStock from './MajorStock';
import ExchangeBoard from './ExchangeBoard';
import NoticeBoard from './NoticeBoard';
import NewsBoard from './NewsBoard';
import UserFavStock from './UserFavStock';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PageLayOut = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    animation: ${PageRender} 1s;
`

const PageRow = css`
    margin-top: 30px;
    width = 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 40px;
`

const VLine = css`
    border-right: 1px solid black;
    width: 0px;
`

function MainPage(){
    return(
        <div css={PageLayOut}>
            <div css={PageRow}>
                <UserInform/>
                <UserFavStock/>
            </div>
            <div css={PageRow}>
                <MajorStock/>
            </div>
            <div css={PageRow}>
                <NoticeBoard/>
                <NewsBoard/>
                <ExchangeBoard/>
            </div>
        </div>
    );
}

export default MainPage;