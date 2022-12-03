/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import TapButton from '../../common/TapButton';

const ComponentLayOut = css`
    width: 270px;
    height: 90vh;
    position: fixed;
`

const SearchBar = css`
    display: flex; 
    justify-content: space-between;
    height: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const SearchTitle = css`
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    width: 30%;
    margin-right: 10px;
`

const SearchInput = css`
    width: 45%;
    font-size:12px;
    text-align:right;
`

const SearchButton = css`
    width: 10%;
    background: grey;
    margin-right: 10px;
    line-height: 18px;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
`

const Tap = css`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px grey;
`

const TapButtons = css`
    width: 30%;
`


const List = css`
    width: 100%;
    height: 80vh;
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

const HLineBold = css`
    border-bottom: 1px solid black;
    height: 0px;
`

const HLine = css`
    border-bottom: 1px solid #E0E0E0;
    height: 0px;
    width: 100%;
`

const HeaderLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const HeaderName = css`
    margin-left: 5px;
    width: 35%;
    font-size:15px;
    display: flex;
    justify-content: center;
`

const HeaderPrice = css`
    margin-left: 5px;
    width: 25%;
    text-align:center;
    font-size:15px;
    display: flex;
    justify-content: center;
`

const HeaderChange = css`
    margin-left: 5px;
    width: 30%;
    text-align:center;
    font-size:15px;
    display: flex;
    justify-content: center;
`

const AlignButtonDesc = css`
    width:0;
    height:0;
    margin-left: 3px;
    margin-top:3px;
    border:6px solid grey;
    border-top-color: white;
    border-left-color: white;
    border-right-color: white;
    &:hover{
        border-bottom-color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const AlignButtonAsc = css`
    width:0;
    height:0;
    margin-left: 3px;
    margin-top: 8px;
    border:6px solid grey;
    border-bottom-color: white;
    border-left-color: white;
    border-right-color: white;
    &:hover{
        border-top-color: black;
        transform: translateY(0px);
        transition: 0.3s;
    }
`

const TextLine = css`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 21px;
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
    width: 42%;
    display: flex;
`

const StockName = css`
    font-size: 13px;
    line-height: 21px;
`

const StockCode = css`
    margin-left: 3px;
    font-size: 10px;
    line-height: 25px;
    color:grey;
`

const StockPrice = css`
    font-size: 10px;
    width: 20%;
    line-height: 21px;
`

const StockChange = css`
    margin-right: 5px;
    font-size: 10px;
    width: 30%;
    line-height: 21px;
    text-align: right;
`


function BoardStockList(){
    const [tapIndex, setTapIndex] = useState(0);
    const [nameAlignDesc, setNameAlignDesc] = useState(true);
    const [priceAlignDesc, setPriceAlignDesc] = useState(false);
    const [changeAlignDesc, setChangeAlignDesc] = useState(false);
    return(
        <div css={ComponentLayOut}>
            <div css={SearchBar}>
                <div css={SearchTitle}>
                    종목 리스트
                </div>
                <input css={SearchInput} type="text"/>
                <div css={SearchButton}>검색</div>
            </div>
            <div css={Tap}>
                <a css={TapButtons} onClick={()=>{setTapIndex(0);}}>
                    <TapButton content={"전체종목"} index={0} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(1);}}>
                    <TapButton content={"보유종목"} index={1} tapIndex={tapIndex}/>
                </a>
                <a css={TapButtons} onClick={()=>{setTapIndex(2);}}>
                    <TapButton content={"관심종목"} index={2} tapIndex={tapIndex}/>
                </a>
            </div>
            <div css={List}>
                <div css={HeaderLine}>
                    <div css={HeaderName}>
                        종목명<div css={nameAlignDesc ? AlignButtonDesc : AlignButtonAsc} onClick={() => {setNameAlignDesc((prev) => {return !prev;})}}/>
                    </div>
                    <div css={HeaderPrice}>
                        현재가<div css={priceAlignDesc ? AlignButtonDesc : AlignButtonAsc} onClick={() => {setPriceAlignDesc((prev) => {return !prev;})}}/>
                    </div>
                    <div css={HeaderChange}>
                        전일대비<div css={changeAlignDesc ? AlignButtonDesc : AlignButtonAsc} onClick={() => {setChangeAlignDesc((prev) => {return !prev;})}}/>
                    </div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLine}></div>
                <div css={TextLine}>
                    <div css={StockNameBox}>
                        <div css={StockName}>카카오</div>
                        <div css={StockCode}>KRX: 035720</div>
                    </div>
                    <div css={StockPrice}>47,750 ￦</div>
                    <div css={StockChange}>-2,050 ￦(4.12%)</div>
                </div>
                <div css={HLineBold}></div>
            </div>
        </div>
    )
}

export default BoardStockList;