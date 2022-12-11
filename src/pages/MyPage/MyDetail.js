/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MyAccountSetting from './MyAccountSetting';
import MyFavStock from './MyFavStock';
import MyOwnedList from './MyOwnedList';
import MyTradeList from './MyTradeList';
import Admin from './Admin';
import AdminAccountSetting from './AdminAccountSetting';

const ComponentLayOut = css`
    width: 100%;
    margin-top: 10px;
`

function MyDetail({token, tapIndex, auth}){
    return(
        <div css={ComponentLayOut}>
            {tapIndex === 0 ?
                <MyOwnedList token={token}/>
            :
                (tapIndex === 1 ? 
                    <MyTradeList token={token}/>
                :
                    (tapIndex === 2 ?
                        <MyFavStock token={token}/>
                    :
                        (tapIndex === 3 ?
                            ( auth === 1 ? 
                                <MyAccountSetting token={token}/>
                            :
                                <AdminAccountSetting/>
                            )
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