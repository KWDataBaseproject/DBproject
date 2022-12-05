/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MyAccountSetting from './MyAccountSetting';
import MyFavStock from './MyFavStock';
import MyOwnedList from './MyOwnedList';
import MyTradeList from './MyTradeList';
import Admin from './Admin';

const ComponentLayOut = css`
    width: 100%;
    margin-top: 10px;
`

function MyDetail({tapIndex}){
    return(
        <div css={ComponentLayOut}>
            {tapIndex === 0 ?
                <MyOwnedList/>
            :
                (tapIndex === 1 ? 
                    <MyTradeList/>
                :
                    (tapIndex === 2 ?
                        <MyFavStock/>
                    :
                        (tapIndex === 3 ?
                            <MyAccountSetting/>
                        :
                            (tapIndex === 4 ?
                                <Admin/>
                            :
                                "ERROR"
                            )
                        )
                    )
                )
            }
        </div>
    )
}

export default MyDetail;