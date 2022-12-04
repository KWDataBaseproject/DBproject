/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import UserInform from '../../common/UserInform';
import UserFavStock from '../../common/UserFavStock';
import NoticeBoard from '../../common/NoticeBoard';
import MyOwnedList from './MyOwnedList';
import MyTradeList from './MyTradeList';
import MyStockInform from './MyStockInform';
import { NavLink } from 'react-router-dom';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PageLayOut = css`
    position: fixed;
    width: 60%;
    height: 88vh;
    animation: ${PageRender} 1s;
    display: flex;
    flex-direction: column;
`

const PageRow = css`
    margin-top: 15px;
    width = 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 5px;
`

const TestButton = css`
    position: fixed;
    left: 85%;
    top: 8%;
`

function MyPage(setAuth){
    return(
        <div css={PageLayOut}>
            <div css={PageRow}>
                <UserInform/>
                <UserFavStock/>
            </div>
            <div css={PageRow}>
                <MyStockInform/>
            </div>
            <div css={PageRow}>
                <MyOwnedList/>
            </div>
            <div css={PageRow}>
                <MyTradeList/>
            </div>
            <NavLink to ="/" onClick={()=>{setAuth(false);}}><button css={TestButton}>LOG OUT TEST</button></NavLink>
        </div>
    );
}

export default MyPage;