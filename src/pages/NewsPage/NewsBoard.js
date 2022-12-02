/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import image from './image.png';

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 24px;
    margin-left: 5px;
    color: #ff8906;
`

const HLineBold = css`
    border: 1px solid black;
    height: 0px;
`

const HLine = css`
    border: 1px solid grey;
    height: 0px;
    width: 100%;
`

const TextLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const PostTitle = css`
    font-size: 15px;
    width: 20%;
    line-height: 26px;
`

const PostWriter = css`
    font-size: 13px;
    width: 50%;
    line-height: 26px;
    text-align: center;
`

const PostTime = css`
    margin-right: 5px;
    font-size: 15px;
    width: 20%;
    line-height: 26px;
    text-align: right;
`
const ChartBox = css`
    width: 50%;
    margin: 10px;
    height: 78%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Chart = css`
    margin-top: 30px;
    width: 50%;
    height: 80%;
`

const BoxRow = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const VLineBold = css`
    border-right: 1px solid black;
    width: 0px;
    height: 100%;
`

const newBox = css`
    width: 47%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5px;
`

function NewsBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>뉴스</div>
            <div css={HLineBold}></div>
            <div css={TextLine}>
                <div css={BoxRow}>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                    <div css={VLineBold}></div>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>                             
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
                <div css={BoxRow}>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                    <div css={VLineBold}></div>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>                             
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
                <div css={BoxRow}>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                    <div css={VLineBold}></div>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>                             
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
                <div css={BoxRow}>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                    <div css={VLineBold}></div>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>                             
            </div>
            <div css={HLine}></div>
            <div css={TextLine}>
                <div css={BoxRow}>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                    <div css={VLineBold}></div>
                    <div css={newBox}>
                        <div css={ChartBox}>
                            <img css={Chart} src={image}></img>
                            <div css={PostWriter}>서울경제</div>
                            <div css={PostTime}>2022.10.20</div>
                        </div>
                        <div css={PostWriter}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>                             
            </div>
            <div css={HLineBold}></div>
        </div>
    )
}

export default NewsBoard;