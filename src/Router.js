/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './common/Navigation';
import MainPage from './pages/MainPage/MainPage';
import MyPage from './pages/MyPage/MyPage';
import BoardPage from './pages/BoardPage/BoardPage';
import NewsPage from './pages/NewsPage/NewsPage';
import StockPage from './pages/StockPage/StockPage';
import Modal from './common/Modal';

const Font = css`
    font-family: 'Noto Sans KR', sans-serif;
`

const Header = css`
    height: 60px;
    width: 100%;
    position:fixed;
    z-index:20;
`

const Body = css`
    padding-top: 60px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-Y: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
    }
`

const Page = css`
    height: 100%;
    width: 60%;
    background: white;
    padding-left: 15px;
    padding-right: 15px;
`

function Router() {
    const [pageIndex, setPageIndex] = useState(0);
    const [auth, setAuth] = useState(0);
    const [token, setToken] = useState("");
    const [logInModal, setLogInModal] = useState(false);
    return (
        <div css={Font}>
            <BrowserRouter>
                <Modal token={token} setToken={setToken} setAuth={setAuth} logInModal={logInModal} setLogInModal={setLogInModal}/>
                <div css={Header}><Navigation setLogInModal = {setLogInModal} auth = {auth} setAuth = {setAuth} pageIndex={pageIndex} setPageIndex={setPageIndex}/></div>
                <div css={Body}>
                    <div css={Page} id="Page" name="Page">
                        <Routes>
                            <Route exact path ="/" element={<MainPage token={token}/>}/>
                            <Route path ="/DBproject" element={<MainPage token={token}/>}/>
                            <Route path ="/profile" element={<MyPage token={token} setToken={setToken} setAuth={setAuth} auth={auth}/>}/>
                            <Route path ="/news" element={<NewsPage token={token}/>}/>
                            <Route path ="/board" element={<BoardPage token={token}/>}/>
                            <Route path ="/stock" element={<StockPage token={token}/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Router;