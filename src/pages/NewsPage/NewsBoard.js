/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import image from "./image.png";

const ComponentLayOut = css`
  display: flex;
  width: 100%;
  height: 88vh;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Title = css`
  height: 5vh;
  line-height: 5vh;
  font-size: 24px;
  width: 100%;
  color: #ff8906;
`;

const HLineBold = css`
  border-bottom: 1px solid black;
  height: 0px;
`;

const HLine = css`
  border-bottom: 1px solid #e0e0e0;
  height: 0px;
  width: 100%;
`;

const RowLine = css`
  height: 25%;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const NewsBox = css`
  width: 49.9%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    background: #e0e0e0;
    transform: translateY(0px);
    transition: 0.3s;
  }
`;

const ImageBox = css`
  width: 50%;
  height: 100%;
  margin: 10px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Image = css`
  width: 100%;
  height: 66%;
  border-radius: 5px;
`;

const PostInform = css`
  display: flex;
  justify-content: space-between;
`;

const PostWriter = css`
  font-size: 18px;
  width: 60%;
  height: 20px;
  line-height: 26px;
`;

const PostTime = css`
  font-size: 18px;
  width: 40%;
  height: 20px;
  line-height: 26px;
  text-align: right;
`;

const TitleBox = css`
  width: 50%;
  height: 100%;
  margin: 10px;
  margin-top: 23px;
  margin-right: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const VLine = css`
  border-right: 1px solid #e0e0e0;
  width: 0px;
  height: 100%;
`;

const PostTitle = css`
  font-size: 18px;
  width: 100%;
  line-height: 26px;
`;

const PostContent = css`
  font-size: 13px;
  margin-top: 10px;
  width: 100%;
  height: 50%;
  line-height: 26px;
`;

function NewsBoard() {
  return (
    <div css={ComponentLayOut}>
      <div css={Title}>뉴스</div>
      <div css={HLineBold}></div>
      <div css={RowLine}>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
        <div css={VLine}></div>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
      </div>
      <div css={HLine}></div>
      <div css={RowLine}>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
        <div css={VLine}></div>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
      </div>
      <div css={HLine}></div>
      <div css={RowLine}>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
        <div css={VLine}></div>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
      </div>
      <div css={HLine}></div>
      <div css={RowLine}>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
        <div css={VLine}></div>
        <div css={NewsBox}>
          <div css={ImageBox}>
            <img css={Image} src={image}></img>
            <div css={PostInform}>
              <div css={PostWriter}>서울경제</div>
              <div css={PostTime}>2022.10.20</div>
            </div>
          </div>
          <div css={TitleBox}>
            <div css={PostTitle}>
              달러 약세 vs 저가 매수…환율, 1300원선 출발 예상[외환브리핑]
            </div>
            <div css={PostContent}>
              미국 달러인덱스 고용 지표 대기, 104선 하락 중국 위안화 역외서
              7.03위안대 등락, 보합권 뉴욕증시 혼조세 마감, 국내증시 외국인 주목
            </div>
          </div>
        </div>
      </div>
      <div css={HLineBold}></div>
    </div>
  );
}

export default NewsBoard;
