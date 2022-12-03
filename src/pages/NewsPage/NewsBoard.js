/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import image from './image.png';

const ComponentLayOut = css`
    position: fixed;
    width: 800px;
    height: 800px;
    display: flex;
    flex-direction: column;
    overflow-Y: auto;
    &::-webkit-scrollbar {
        width: 5px;
      }
    &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    }
`

const Title = css`
    height: 38px;
    font-size: 24px;
    margin-left: 5px;
    width: 100%;
    color: #ff8906;
`

const HLineBold = css`
    border: 1px solid black;
    width: 100%;
    height: 0px;
`

const HLine = css`
    border: 1px solid grey;
    height: 0px;
    width: 100%;
`

const RowLine = css`
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
`

const NewsBox = css`
    width: 399px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const ImageBox = css`
    width: 40%;
    margin: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const TitleBox = css`
    width: 50%;
    margin: 10px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const Image = css`
    width: 100%;
    height: 50%;
`

const VLine = css`
    border-right: 1px solid black;
    width: 0px;
    height: 100%;
`


const PostTitle = css`
    font-size: 18px;
    width: 100%;
    line-height: 26px;
`

const PostWriter = css`
    font-size: 13px;
    width: 100%;
    line-height: 26px;
    text-align: center;
`

const PostContent = css`
    overflow: hidden;  		// 을 사용해 영역을 감출 것
    text-overflow: ellipsis;  	// 로 ... 을 만들기 
    white-space: nowrap;
    font-size: 13px;
    margin-top: 10px;
    width: 100%;
    height: 50%;
    line-height: 26px;
    text-align: center;
`

const PostTime = css`
    font-size: 15px;
    width: 100%;
    line-height: 26px;
    text-align: center;
`

function NewsBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>뉴스</div>
            <div css={HLineBold}></div>
            <div css={RowLine}>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>
                <div css={VLine}></div>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>           
            </div>
            <div css={HLine}></div>
            <div css={RowLine}>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>
                <div css={VLine}></div>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>           
            </div>
            <div css={HLine}></div>
            <div css={RowLine}>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>
                <div css={VLine}></div>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>           
            </div>
            <div css={HLine}></div>
            <div css={RowLine}>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>
                <div css={VLine}></div>
                <div css={NewsBox}>
                    <div css={ImageBox}>
                        <img css={Image} src={image}></img>
                        <div css={PostWriter}>서울경제</div>
                        <div css={PostTime}>2022.10.20</div>
                    </div>
                    <div css={TitleBox}>
                        <div css={PostTitle}>달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
                        </div>
                        <div css={PostContent}>미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서 7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목</div>
                    </div>
                </div>           
            </div>
            <div css={HLine}></div>
            
            <div css={HLineBold}></div>
        </div>
    )
}

export default NewsBoard;