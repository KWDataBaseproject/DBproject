/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    position: fixed;
    left: 45%;
    top: 90%;
    width: 10%;
`


function NewsPagination(){
    return(
        <div css={ComponentLayOut}>
            <ul>
                <li><a href="#">1</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">1</a></li>

            </ul>
        </div>

    )
}


export default NewsPagination;