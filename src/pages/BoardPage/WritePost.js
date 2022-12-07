/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const ComponentLayOut = css`
    width: 100%;
    height: 100%;
`
const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`
const HLine = css`
    border-bottom: 1px solid #E0E0E0;
    height: 0px;
    width: 100%;
`
const PostBox = css`
    border: 1px solid black;
    margin-top: 20px;
`
const WriteBox = css`
    display: flex;
    flex-direction: column;
    margin:20px;
    margin-left: 40px;
    margin-right: 40px;
`
const InputTitle = css`
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
`
const InputContent = css`
    width: 100%;
    border: 0px;
    height: 45vh;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: 0.5px;
    resize: none;
`
const ButtonLine = css`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`
const WriteButton = css`
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
    line-height: 40px;
    width: 100px;
    height: 40px;
    margin-right: 40px;
    border: 1px solid #E0E0E0;
    text-align: center;
    color: white;
    background: #ff8906;
    &:hover{
        background: #ff8906;
        color: grey;
        transform: translateY(0px);
        transition: 0.3s;
    }
`
const BackButton = css`
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
    line-height: 40px;
    width: 100px;
    height: 40px;
    margin-left: 40px;
    border: 1px solid #E0E0E0;
    text-align: center;
    color: grey;
    &:hover{
        background: #ff8906;
        color: white;
        transform: translateY(0px);
        transition: 0.3s;
    }
`
const Comment = css`
    font-size:13px;
    margin-bottom: 20px;
    text-align: justify;
    color: grey;
`
function WritePost({ setBoardState }){
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const onChangeTitle = (e) => {
        setInputTitle(e.target.value);
    }
    const onChangeContent = (e) => {
        setInputContent(e.target.value);
    }
    const PostButtonOnClick = () => {
        console.log("title: " + inputTitle);
        console.log("content: " + inputContent);
    }
    return(
        <div css={ComponentLayOut}>
            <div css={PostBox}>
                <div css={WriteBox}>
                <input onChange={onChangeTitle} css={InputTitle} type="text" placeholder="제목을 입력해 주세요"/>
                <div css={HLine}/>
                <textarea onChange={onChangeContent} css={InputContent} type="text" placeholder="광고, 도배 등 게시판 운영원칙에 위배되는 경우, 관련 근거에 따라 게시물 삭제 및 제재 조치를 받으실 수 있습니다."/>
                <div css={Comment}>
                    * 게시판 운영원칙에 맞지 않는 게시물은 운영자에 의해 경고조치 없이 삭제되거나, 커뮤니티 사용이 일부 제한될 수 있습니다.
                <br/>
                <br/>    ※ 허위사실 유포는 자본시장과 금융투자업에 관한 법률 제176조 제2항에 해당하는 시세조종행위로써 1년 이상의 유기징역
                <br/>    또는 그 위반행위로 얻은 이익 또는 회피한 손실액의 3배 이상 5배 이하에 상당하는 벌금에 처할 수 있습니다.
                <br/>    ※ 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은 이용약관 및 관련법률에 의해 제재를 받으실 수 있습니다.
                </div>
                <div css={HLine}/>
                <div css={ButtonLine}>
                    <div css={WriteButton} onClick={()=>{PostButtonOnClick();setBoardState(0);}}>등록</div>
                    <div css={BackButton} onClick={()=>{setBoardState(0);}}>취소</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default WritePost;