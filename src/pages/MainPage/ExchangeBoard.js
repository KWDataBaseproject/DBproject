/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const ComponentLayOut = css`
    width: 25%;
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

const Board = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const BoxRow = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 49%;
`

const TextBox = css`
    width: 47%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5px;
`

const VLineBold = css`
    border-right: 1px solid black;
    width: 0px;
`

const NameLine = css`
    margin-left: 5px;
    margin-top: 5px;
    height: 33%;
    font-size: 20px;
    width: 100%;
`

const PriceLine = css`
    height: 33%;
    font-size: 20px;
    width: 100%;
    text-align: right;
`

const ChangeLine = css`
    height: 33%;
    font-size: 20px;
    width: 100%;
    text-align: right;
    margin-bottom: 5px;
`

function ExchangeBoard(){
    return(
        <div css={ComponentLayOut}>
            <div css={Title}>시장자료</div>
        <div css={HLineBold}></div>
        <div css={Board}>
            <div css={BoxRow}>
                <div css={TextBox}>
                    <div css={NameLine}>
                        USD
                    </div>
                    <div css={PriceLine}>
                        1,427.00
                    </div>
                    <div css={ChangeLine}>
                        - 7.00(0.49%)
                    </div>
                </div>
                <div css={VLineBold}></div>
                <div css={TextBox}>
                    <div css={NameLine}>
                        USD
                    </div>
                    <div css={PriceLine}>
                        1,427.00
                    </div>
                    <div css={ChangeLine}>
                        - 7.00(0.49%)
                    </div>
                </div>
            </div>
            <div css={HLineBold}></div>
            <div css={BoxRow}>
                <div css={TextBox}>
                    <div css={NameLine}>
                        USD
                    </div>
                    <div css={PriceLine}>
                        1,427.00
                    </div>
                    <div css={ChangeLine}>
                        - 7.00(0.49%)
                    </div>
                </div>
                <div css={VLineBold}></div>
                <div css={TextBox}>
                    <div css={NameLine}>
                        USD
                    </div>
                    <div css={PriceLine}>
                        1,427.00
                    </div>
                    <div css={ChangeLine}>
                        - 7.00(0.49%)
                    </div>
                </div>
            </div>
        </div>
        <div css={HLineBold}></div>
        </div>
    )
}

export default ExchangeBoard;