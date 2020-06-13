import React,{ useState }  from 'react'
import Aside from './Aside'
import Timeline from './Timeline'

function Main() {
    const [asideActive, setAsideActive] = useState(true);
    return (
        <main className="main-section mt-5">
            <div className="container-custom d-flex">
                <Aside active={asideActive}/>
                <Timeline active={asideActive} activeAside={setAsideActive}/>
            </div>
        </main>
    )
}

export default Main
