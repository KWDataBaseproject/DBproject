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

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: ${PageRender} 1s;
`

function MyAccountSetting(){
    return(
        <div css={ComponentLayOut}>
            MyAccountSetting
        </div>
    )
}

export default MyAccountSetting;