import React from 'react';
const Header = () => {
    return (
        <header>
            <div className={"menu-header"}>
                <img src="/image/asu-logo-t.png"/>
                <div className={'account'}>
                    <div className={"account-username"}>
                        <p>Вы вошли как: </p>
                        <span>Ekazhev K.Z.</span>
                        <img src="/image/user.png"/>
                    </div>
                    <div className={"account-settings"}>
                        <img src="/image/setting.png"/>
                    </div>
                    <div className={"account-logout"}>
                        <img src="/image/power-on.png"/>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;