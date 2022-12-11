/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import BoardStockList from './BoardStockList';
import Board from './Board';

const PageRender = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const PageLayOut = css`
    padding-top: 20px;
    height: 100%;
    animation: ${PageRender} 1s;
`

function BoardPage({token}){
    return(
        <div css={PageLayOut}>
            <BoardStockList/>
            <Board/>
        </div>
    );
}

export default BoardPage;