/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
`

function WritePost({ setBoardState }){
    return(
        <div css={ComponentLayOut}>
            <button onClick={()=>{setBoardState(0);}}>뒤로가기</button>
            WritePost
        </div>
    )
}

export default WritePost;