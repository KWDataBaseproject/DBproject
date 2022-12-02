/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';

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
    animation: ${PageRender} 1s;
`

function PageName(){
    return(
        <div css={PageLayOut}>
            PageName
        </div>
    );
}

export default PageName;