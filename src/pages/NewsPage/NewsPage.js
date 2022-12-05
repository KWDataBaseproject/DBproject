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

function NewsPage(){
    return(
        <div css={PageLayOut}>
            <NewsBoard/>
            <NewsPagination/>
        </div>
    );
}


export default NewsPage;