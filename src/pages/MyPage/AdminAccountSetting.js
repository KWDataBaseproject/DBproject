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

function AdminAccountSetting(){
    return(
        <div css={ComponentLayOut}>
            AdminAccountSetting
        </div>
    )
}

export default AdminAccountSetting;