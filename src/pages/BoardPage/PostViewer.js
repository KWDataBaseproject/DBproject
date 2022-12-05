/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
`

function PostViewer({ setBoardState }){
    return(
        <div css={ComponentLayOut}>
            <button onClick={()=>{setBoardState(0);}}>뒤로가기</button>
            PostViewer
        </div>
    )
}

export default PostViewer;