/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
const VLine = css`
    border-right: 1px solid #E0E0E0;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 0px;
`
const PostBox = css`
    margin:20px;
`
const HeaderLine = css`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const PostTitle = css`
    height: 38px;
    font-size: 18px;
    line-height: 45px;
`
const PostInform = css`
    margin-bottom: 10px;
    width: 100%;
    line-height: 24px;
    height: 24px;
    display: flex;
    justify-content: space-between;
`
const PostWritter = css`
    width: 13%;
    font-size: 13px;
`
const PostInformCounts = css`
    display: flex;
    width: 45%;
`
const PostViewCount = css`
    width: 30%;
    text-align: center;
    font-size: 12px;
`
const PostLike = css`
    width: 30%;
    text-align: center;
    font-size: 12px;
`
const PostDate = css`
    width: 40%;
    text-align: center;
    font-size: 12px;
`
const PostContent = css`
    width: 100%;
    height: 55vh;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 15px;
    text-align: justify;
    overflow-Y: auto;
    &::-webkit-scrollbar {
    width: 2px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    }
`
const ButtonLine = css`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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
const LikeButton = css`
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
    line-height: 40px;
    width: 100px;
    height: 40px;
    margin-right: 40px;
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

function PostViewer({ setBoardState }){
    return(
        <div css={ComponentLayOut}>
            <div css={PostBox}>
                <div css={HeaderLine}>
                    <div css={PostTitle}>삼성전자 떡상 가즈아~~!</div>
                    <div css={PostInform}>
                        <div css={PostWritter}>bbbjihan</div>
                        <div css={PostInformCounts}>
                            <div css={VLine}/>
                            <div css={PostViewCount}>조회 1,000</div>
                            <div css={VLine}/>
                            <div css={PostLike}>추천 100</div>
                            <div css={VLine}/>
                            <div css={PostDate}>2022-12-03 15:33</div>
                        </div>
                    </div>
                </div>
                <div css={HLine}/>
                <div css={PostContent}>
                    모든 국민은 학문과 예술의 자유를 가진다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다. 국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다. 국정의 중요한 사항에 관한 대통령의 자문에 응하기 위하여 국가원로로 구성되는 국가원로자문회의를 둘 수 있다.
                </div>
                <div css={HLine}/>
                <div css={ButtonLine}>
                    <div css={BackButton}onClick={()=>{setBoardState(0);}}>뒤로가기</div>
                    <div css={LikeButton}>추천</div>
                </div>
            </div>
        </div>
    )
}

export default PostViewer;