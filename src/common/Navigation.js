/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'

const Nav = css`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #0F0E17;
`

const NavigationBar = css`
    width: 95%;
    height: 60px;
    display: flex;
    justify-content: space-around;
`

const LOGO = css`
    height: 100%;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #a7a9be;
    &:hover{
        color: #fffffe;
        transform: translateY(0px);
        transition: 1s;
    }
`

const ActiveLOGO = css`
    height: 100%;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #ff8906;
`

const NavigationButton = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const ButtonInner = css`
    width: 200px;
    height: 40px;
    font-size: 22px;
    color: #a7a9be;
    text-align:center;
    line-height: 40px;
    border-radius: 10px;
    &:hover{
        background: #ff8906;
        color: #fffffe;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const ActiveButton = css`
    width: 200px;
    height: 40px;
    font-size: 22px;
    color: #ff8906;
    text-align:center;
    line-height: 40px;
`

function Navigation({setLogInModal, auth, pageIndex, setPageIndex}){
    
    return(
        <div css={Nav}>
            <div css={NavigationBar}>
                <NavLink to ="/"
                style={{ textDecoration: 'none' }}
                onClick={()=>{setPageIndex(0);}}>
                    <div css={pageIndex === 0 ? ActiveLOGO : LOGO}>
                        LOGO
                    </div>
                </NavLink>
                <NavLink to ="/stock"
                style={{ textDecoration: 'none' }}
                onClick={()=>{setPageIndex(1);}}>
                    <div css={NavigationButton}>
                        <div css={pageIndex === 1 ? ActiveButton : ButtonInner}>
                        거래소
                        </div>
                    </div>
                </NavLink>
                <NavLink to ="/board"
                style={{ textDecoration: 'none' }}
                onClick={()=>{setPageIndex(2);}}>
                    <div css={NavigationButton}>
                        <div css={pageIndex === 2 ? ActiveButton : ButtonInner}>
                        게시판
                        </div>
                    </div>
                </NavLink>
                <NavLink to ="/news"
                style={{ textDecoration: 'none' }}
                onClick={()=>{setPageIndex(3);}}>
                    <div css={NavigationButton}>
                        <div css={pageIndex === 3 ? ActiveButton : ButtonInner}>
                        뉴스
                        </div>
                    </div>
                </NavLink>
                {auth?
                <NavLink to ="/profile"
                style={{ textDecoration: 'none' }}
                onClick={()=>{setPageIndex(4);}}>
                    <div css={NavigationButton}>
                        <div css={pageIndex === 4 ? ActiveButton : ButtonInner}>
                        프로필
                        </div>
                    </div>
                </NavLink>
                :
                <NavLink
                style={{ textDecoration: 'none' }}
                onClick={()=>{setLogInModal(true);}}>
                    <div css={NavigationButton}>
                        <div css={ButtonInner}>
                        로그인
                        </div>
                    </div>
                </NavLink>
                }
            </div>
        </div>
    )
}

export default Navigation;