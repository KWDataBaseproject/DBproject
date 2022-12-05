/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TapButton from '../../common/TapButton';

const ComponentLayOut = css`
    margin-top:10px;
    display:flex;
    width: 100%;
`

const Tap = css`
    margin-top: 10px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: solid 1px #e0e0e0;
`

const TapButtons = css`
    width: 15%;
    cursor: pointer;
`

function MyTapBar({tapIndex, setTapIndex, auth}){
    return(
        <div css={ComponentLayOut}>
            <div css={Tap}>
                <div css={TapButtons} onClick={()=>{setTapIndex(0);}}>
                    <TapButton content="보유자산" index={0} tapIndex={tapIndex} />
                </div>
                <div css={TapButtons} onClick={()=>{setTapIndex(1);}}>
                    <TapButton content="매매현황" index={1} tapIndex={tapIndex} />
                </div>
                <div css={TapButtons} onClick={()=>{setTapIndex(2);}}>
                    <TapButton content="관심종목" index={2} tapIndex={tapIndex} />
                </div>
                <div css={TapButtons} onClick={()=>{setTapIndex(3);}}>
                    <TapButton content="회원정보 관리" index={3} tapIndex={tapIndex} />
                </div>
                {auth === 2 ?
                    <div css={TapButtons} onClick={()=>{setTapIndex(4);}}>
                        <TapButton content="관리자 기능" index={4} tapIndex={tapIndex} />
                    </div>
                :
                    null                
                }
            </div>
        </div>
    )
}

export default MyTapBar;