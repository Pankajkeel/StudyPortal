import { container } from './style.js';

const Header = ()=>{

    return(
        <header className={container}>
            <div class="container">
                <div class="headMain">
                    <div class="logoKeel">
                        <img class="img-fluid" src="https://staging.getkeel.com/assets/images/common/keelIcon.svg" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;