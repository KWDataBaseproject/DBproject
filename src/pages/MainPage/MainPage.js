/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import UserInform from './UserInform';
import UserFavStock from './UserFavStock';
import NoticeBoard from './NoticeBoard';
import MajorStock from './MajorStock';
import ExchangeBoard from './ExchangeBoard';
import NewsBoard from './NewsBoard';

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
    margin-top: 15px;
    width = 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 35px;
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