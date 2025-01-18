import MainHeader from "./MainHeader/MainHeader"
import Navigation from "./Navigation/Navigation"
import TopBar from "./TopBar/TopBar"

const header = () => {
    return (
        <>
            <TopBar/>
            <MainHeader/>
            <Navigation/>
        </>
    )
}

export default header