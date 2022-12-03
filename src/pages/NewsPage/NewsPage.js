/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import NewsBoard from './NewsBoard';
import NewsPagination from './NewsPagination';
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

function NewsPage(){
    return(
        <div css={PageLayOut}>
            <div css={PageRow}>
                <NewsBoard/>
            </div>
            <div css={PageRow}>
                <NewsPagination/>
            </div>
        </div>
    );
}


export default NewsPage;