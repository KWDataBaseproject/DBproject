/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';

const ComponentLayOut = css`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction:column;
`

const HLine = css`
    border-bottom: 1px solid #e0e0e0;
    height: 0px;
`

const HeaderLine = css`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-bottom: 10px;
`

const HeaderDataBox = css`
    width:25%;
    display:flex;
    flex-direction: column;
`

const HeaderDataName = css`
    width:100%;
    text-align:center;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
`

const HeaderValueBox = css`
    width:100%;
    display:flex;
    justify-content:center;
    height: 40px;
    line-height: 40px;
`

const HeaderDataValue = css`
    font-size: 24px;
`

const HeaderDataUnit = css`
    margin-left:5px;
    font-size: 15px;
    line-height: 45px;
`

const SecondaryData = css`
    width: 100%;
    display:flex;
    justify-content:space-between;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SecondaryDataBox = css`
    width: 20%;
    display:flex;
    justify-content:center;
`

const SecondaryDataName = css`
    width: 50%;
`

const SecondaryDataValue = css`
    width: 30%;
    text-align:right;
`

function MyUserInform({token}){
    return(
        <div css={ComponentLayOut}>
            <div css={HeaderLine}>
                <div css={HeaderDataBox}>
                    <div css={HeaderDataName}>총 매수 금액</div>
                    <div css={HeaderValueBox}>
                        <div css={HeaderDataValue}>0</div>
                        <div css={HeaderDataUnit}>원</div>
                    </div>
                </div>
                <div css={HeaderDataBox}>
                    <div css={HeaderDataName}>총 평가 금액</div>
                    <div css={HeaderValueBox}>
                        <div css={HeaderDataValue}>0</div>
                        <div css={HeaderDataUnit}>원</div>
                    </div>
                </div>
                <div css={HeaderDataBox}>
                    <div css={HeaderDataName}>평가 손익</div>
                    <div css={HeaderValueBox}>
                        <div css={HeaderDataValue}>0</div>
                        <div css={HeaderDataUnit}>원</div>
                    </div>
                </div>
                <div css={HeaderDataBox}>
                    <div css={HeaderDataName}>평가 수익률</div>
                    <div css={HeaderValueBox}>
                        <div css={HeaderDataValue}>0.00</div>
                        <div css={HeaderDataUnit}>%</div>
                    </div>
                </div>
            </div>
            <div css={HLine}/>
            <div css={SecondaryData}>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>상한가</div>
                    <div css={SecondaryDataValue}>0</div>
                </div>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>상승</div>
                    <div css={SecondaryDataValue}>0</div>
                </div>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>보합</div>
                    <div css={SecondaryDataValue}>0</div>
                </div>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>하락</div>
                    <div css={SecondaryDataValue}>0</div>
                </div>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>하한가</div>
                    <div css={SecondaryDataValue}>0</div>
                </div>
                <div css={SecondaryDataBox}>
                    <div css={SecondaryDataName}>평균등락률</div>
                    <div css={SecondaryDataValue}>0.00%</div>
                </div>
            </div>
        </div>
    )
}

export default MyUserInform;