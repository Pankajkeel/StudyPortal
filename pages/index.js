
import { css } from '@emotion/css';

const container = css`
    background: yellow;
    min-height: 100px;
    min-width: 200px;
`

const HomeView = ()=>{
    return (
        <div className={container}>Hellow world</div>
    )
}

export default HomeView;