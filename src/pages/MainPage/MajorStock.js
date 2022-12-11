/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import test from './test.png';
import ApexCharts from "react-apexcharts";

const ComponentLayOut = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftContent = css`
    width: 65%;
    display: flex;
    flex-direction: column;
`

const RightContent = css`
    width: 32%;
    display: flex;
    flex-direction: column;
`

const Title = css`
    height: 38px;
    font-size: 18px;
    line-height: 45px;
    color: #ff8906;
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

const ActiveTextLine = css`
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #E0E0E0;
    cursor: pointer;
    font-weight: bold;
`

const TextLine = css`
    padding-top: 5px;
    padding-bottom: 5px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &:hover{
        background: #E0E0E0;
        transform: translateY(0px);
        transition: 0.3s;
    }
    cursor: pointer;
`

const StockNameBox = css`
    margin-left: 5px;
    width: 30%;
    display: flex;
`

const StockName = css`
    font-size: 15px;
    line-height: 30px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 10px;
    line-height: 37px;
    color:grey;
`

const StockPrice = css`
    font-size: 13px;
    width: 15%;
    line-height: 30px;
`

const StockChange = css`
    font-size: 13px;
    width: 20%;
    line-height: 30px;
    text-align: right;
`

const StockTotal = css`
    margin-right: 5px;
    font-size: 13px;
    width: 30%;
    line-height: 30px;
    text-align: right;
`
const Header = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const DetailButton = css`
    fonst-size: 12px;
    margin-right: 5px;
    line-height: 38px;
    cursor: pointer;
`
const ChartBox = css`
    margin: 10px;
    height: 78%;
    display: flex;
    justify-content: center;
    flex-direction:column;
`
const Chart = css`
    margin-top: 30px;
    width: 100%;
    height: 80%;
`
const Content = css`
    display: flex;
    justify-content: space-between;
    height: 23px;
    line-height: 23px;
    font-size: 13px;
`
const ChartName = css`
    font-size: 15px;
`
const ChartPrice = css`
`
const ChartChange = css`
`
const ChartTotal = css`
    margin-right: 5px;
`

function MajorStock(){
    const [listIndex, setListIndex] = useState(0);

    return(
        <div css={ComponentLayOut}>
            <div css={LeftContent}>
                <div css={Title}>인기종목 TOP 5</div>
                <div css={HLineBold}></div>
                <div css={listIndex === 1 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(1);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>삼성전자</div>
                        <div css={StockCode}>KRX: 005930</div>
                    </div>
                    <div css={StockPrice}>55,500 ￦</div>
                    <div css={StockChange}>- 300 ￦(0.54%)</div>
                    <div css={StockTotal}>331조 3,229억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 2 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(2);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>- 2,050 ￦(4.12%)</div>
                    <div css={StockTotal}>21조 2,641억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 3 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(3);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 4 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(4);}}>
                    <div css={StockNameBox}>
                        <div css={StockName}>이엔플러스</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>4,920 ￦</div>
                    <div css={StockChange}>+ 1,050 ￦(27.13%)</div>
                    <div css={StockTotal}>2,870억 원</div>
                </div>
                <div css={HLine}></div>
                <div css={listIndex === 5 ? ActiveTextLine : TextLine} onClick={()=>{setListIndex(5);}}>
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
                <div css={Header}>
                    <div css={Title}>미니차트</div>
                    <div css={DetailButton}>더보기 +</div>
                </div>
                <div css={HLineBold}></div>
                <div css={ChartBox}>
                    <div css={Content}>
                        <div css={ChartName}>삼성전자</div>
                        <div css={ChartPrice}>55,500 ￦</div>
                        <div css={ChartChange}>- 300 ￦(0.54%)</div>
                        <div css={ChartTotal}>331조 3,229억 원</div>
                    </div>
                    
                    <ApexCharts 
                        type='candlestick'
                        series={ [
                        { 
                            data: [{x: new Date(1538778600000),
                            y: [6629.81, 6650.5, 6623.04, 6633.33]
                            },
                            {
                            x: new Date(1538780400000),
                            y: [6632.01, 6643.59, 6620, 6630.11]
                            },
                            {
                            x: new Date(1538782200000),
                            y: [6630.71, 6648.95, 6623.34, 6635.65]
                            },
                            {
                            x: new Date(1538784000000),
                            y: [6635.65, 6651, 6629.67, 6638.24]
                            },
                            {
                            x: new Date(1538785800000),
                            y: [6638.24, 6640, 6620, 6624.47]
                            },
                            {
                            x: new Date(1538787600000),
                            y: [6624.53, 6636.03, 6621.68, 6624.31]
                            },
                            {
                            x: new Date(1538789400000),
                            y: [6624.61, 6632.2, 6617, 6626.02]
                            },
                            {
                            x: new Date(1538791200000),
                            y: [6627, 6627.62, 6584.22, 6603.02]
                            },
                            {
                            x: new Date(1538793000000),
                            y: [6605, 6608.03, 6598.95, 6604.01]
                            },
                            {
                            x: new Date(1538794800000),
                            y: [6604.5, 6614.4, 6602.26, 6608.02]
                            },
                            {
                            x: new Date(1538796600000),
                            y: [6608.02, 6610.68, 6601.99, 6608.91]
                            },
                            {
                            x: new Date(1538798400000),
                            y: [6608.91, 6618.99, 6608.01, 6612]
                            },
                            {
                            x: new Date(1538800200000),
                            y: [6612, 6615.13, 6605.09, 6612]
                            },
                            {
                            x: new Date(1538802000000),
                            y: [6612, 6624.12, 6608.43, 6622.95]
                            },
                            {
                            x: new Date(1538803800000),
                            y: [6623.91, 6623.91, 6615, 6615.67]
                            },
                            {
                            x: new Date(1538805600000),
                            y: [6618.69, 6618.74, 6610, 6610.4]
                            },
                            {
                            x: new Date(1538807400000),
                            y: [6611, 6622.78, 6610.4, 6614.9]
                            },
                            {
                            x: new Date(1538809200000),
                            y: [6614.9, 6626.2, 6613.33, 6623.45]
                            },
                            {
                            x: new Date(1538811000000),
                            y: [6623.48, 6627, 6618.38, 6620.35]
                            },
                            {
                            x: new Date(1538812800000),
                            y: [6619.43, 6620.35, 6610.05, 6615.53]
                            },
                            {
                            x: new Date(1538814600000),
                            y: [6615.53, 6617.93, 6610, 6615.19]
                            },
                            {
                            x: new Date(1538816400000),
                            y: [6615.19, 6621.6, 6608.2, 6620]
                            },
                            {
                            x: new Date(1538818200000),
                            y: [6619.54, 6625.17, 6614.15, 6620]
                            },
                            {
                            x: new Date(1538820000000),
                            y: [6620.33, 6634.15, 6617.24, 6624.61]
                            },
                            {
                            x: new Date(1538821800000),
                            y: [6625.95, 6626, 6611.66, 6617.58]
                            },
                            {
                            x: new Date(1538823600000),
                            y: [6619, 6625.97, 6595.27, 6598.86]
                            },
                            {
                            x: new Date(1538825400000),
                            y: [6598.86, 6598.88, 6570, 6587.16]
                            },
                            {
                            x: new Date(1538827200000),
                            y: [6588.86, 6600, 6580, 6593.4]
                            },
                            {
                            x: new Date(1538829000000),
                            y: [6593.99, 6598.89, 6585, 6587.81]
                            },
                            {
                            x: new Date(1538830800000),
                            y: [6587.81, 6592.73, 6567.14, 6578]
                            },
                            {
                            x: new Date(1538832600000),
                            y: [6578.35, 6581.72, 6567.39, 6579]
                            },
                            {
                            x: new Date(1538834400000),
                            y: [6579.38, 6580.92, 6566.77, 6575.96]
                            },
                            {
                            x: new Date(1538836200000),
                            y: [6575.96, 6589, 6571.77, 6588.92]
                            },
                            {
                            x: new Date(1538838000000),
                            y: [6588.92, 6594, 6577.55, 6589.22]
                            },
                            {
                            x: new Date(1538839800000),
                            y: [6589.3, 6598.89, 6589.1, 6596.08]
                            },
                            {
                            x: new Date(1538841600000),
                            y: [6597.5, 6600, 6588.39, 6596.25]
                            },
                            {
                            x: new Date(1538843400000),
                            y: [6598.03, 6600, 6588.73, 6595.97]
                            },
                            {
                            x: new Date(1538845200000),
                            y: [6595.97, 6602.01, 6588.17, 6602]
                            },
                            {
                            x: new Date(1538847000000),
                            y: [6602, 6607, 6596.51, 6599.95]
                            },
                            {
                            x: new Date(1538848800000),
                            y: [6600.63, 6601.21, 6590.39, 6591.02]
                            },
                            {
                            x: new Date(1538850600000),
                            y: [6591.02, 6603.08, 6591, 6591]
                            },
                            {
                            x: new Date(1538852400000),
                            y: [6591, 6601.32, 6585, 6592]
                            },
                            {
                            x: new Date(1538854200000),
                            y: [6593.13, 6596.01, 6590, 6593.34]
                            },
                            {
                            x: new Date(1538856000000),
                            y: [6593.34, 6604.76, 6582.63, 6593.86]
                            },
                            {
                            x: new Date(1538857800000),
                            y: [6593.86, 6604.28, 6586.57, 6600.01]
                            },
                            {
                            x: new Date(1538859600000),
                            y: [6601.81, 6603.21, 6592.78, 6596.25]
                            },
                            {
                            x: new Date(1538861400000),
                            y: [6596.25, 6604.2, 6590, 6602.99]
                            },
                            {
                            x: new Date(1538863200000),
                            y: [6602.99, 6606, 6584.99, 6587.81]
                            },
                            {
                            x: new Date(1538865000000),
                            y: [6587.81, 6595, 6583.27, 6591.96]
                            },
                            {
                            x: new Date(1538866800000),
                            y: [6591.97, 6596.07, 6585, 6588.39]
                            },
                            {
                            x: new Date(1538868600000),
                            y: [6587.6, 6598.21, 6587.6, 6594.27]
                            },
                            {
                            x: new Date(1538870400000),
                            y: [6596.44, 6601, 6590, 6596.55]
                            },
                            {
                            x: new Date(1538872200000),
                            y: [6598.91, 6605, 6596.61, 6600.02]
                            },
                            {
                            x: new Date(1538874000000),
                            y: [6600.55, 6605, 6589.14, 6593.01]
                            },
                            {
                            x: new Date(1538875800000),
                            y: [6593.15, 6605, 6592, 6603.06]
                            },
                            {
                            x: new Date(1538877600000),
                            y: [6603.07, 6604.5, 6599.09, 6603.89]
                            },
                            {
                            x: new Date(1538879400000),
                            y: [6604.44, 6604.44, 6600, 6603.5]
                            },
                            {
                            x: new Date(1538881200000),
                            y: [6603.5, 6603.99, 6597.5, 6603.86]
                            },
                            {
                            x: new Date(1538883000000),
                            y: [6603.85, 6605, 6600, 6604.07]
                            },
                            {
                            x: new Date(1538884800000),
                            y: [6604.98, 6606, 6604.07, 6606]
                            },]
                        }              
                        ]
                        }
                        
                        options={{
                            chart: {   
                                width: '100%',
                                height: '100%',
                                toolbar: {
                                    show: true,
                                    offsetX: 0,
                                    offsetY: 0,
                                    tools: {
                                    download: true,
                                    selection: true,
                                    zoom: true,
                                    zoomin: true,
                                    zoomout: true,
                                    pan: true,
                                    reset: true | '<img src="/static/icons/reset.png" width="20">',
                                    customIcons: []
                                    },
                                    export: {
                                    csv: {
                                        filename: undefined,
                                        columnDelimiter: ',',
                                        headerCategory: 'category',
                                        headerValue: 'value',
                                        dateFormatter(timestamp) {
                                        return new Date(timestamp).toDateString()
                                        }
                                    },
                                    svg: {
                                        filename: undefined,
                                    },
                                    png: {
                                        filename: undefined,
                                    }
                                    },
                                    autoSelected: 'zoom' 
                                },
                        },
            
                        xaxis: {
                        type: 'datetime'
                        },
                        yaxis: {
                        tooltip: {
                            enabled: true
                        }
                        }
                    }
                        }
                    >
                    </ApexCharts>

                </div>
                <div css={HLineBold}></div>
            </div>
        </div>
    )
}

export default MajorStock;