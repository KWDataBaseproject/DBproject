/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import test from './test.png';

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftContent = css`
    width: 63%;
    display: flex;
    flex-direction: column;
`

const RightContent = css`
    width: 30%;
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
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const StockNameBox = css`
    margin-left: 5px;
    width: 30%;
    display: flex;
`

const StockName = css`
    font-size: 20px;
    line-height: 40px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 12px;
    line-height: 50px;
    color:grey;
`

const StockPrice = css`
    font-size: 15px;
    width: 15%;
    line-height: 40px;
`

const StockChange = css`
    font-size: 15px;
    width: 20%;
    line-height: 40px;
    text-align: right;
`

const StockTotal = css`
    margin-right: 5px;
    font-size: 15px;
    width: 30%;
    line-height: 40px;
    text-align: right;
`

const VLine = css`
    border-right: 1px solid black;
    width: 0px;
`

const ChartBox = css`
    margin: 10px;
    height: 78%;
    display: flex;
    justify-content: center;
`

const Chart = css`
    margin-top: 30px;
    width: 100%;
    height: 80%;
`

function MajorStock(){
    return(
        <div css={ComponentLayOut}>
            <div css={LeftContent}>
                <div css={Title}>인기종목 TOP 5</div>
                <div css={HLineBold}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>삼성전자</div>
                        <div css={StockCode}>KRX: 005930</div>
                    </div>
                    <div css={StockPrice}>55,500 ￦</div>
                    <div css={StockChange}>- 300 ￦(0.54%)</div>
                    <div css={StockTotal}>331조 3,229억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>- 2,050 ￦(4.12%)</div>
                    <div css={StockTotal}>21조 2,641억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLineBold}></div>
            </div>
            <div css={RightContent}>
                <div css={Title}>삼성전자</div>
                <div css={HLineBold}></div>
                <div css={ChartBox}>
                    <img css={Chart} src={test}/>
                </div>
                <div css={HLineBold}></div>
            </div>
        </div>
    )
}

export default MajorStock;