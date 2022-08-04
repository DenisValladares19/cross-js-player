import styled from 'styled-components'

const Header = () => {
    return (
        <Wrapper>
            <div className="name-app">Cross Js</div>

            <div className="container-avatar">
                <div className="search">search</div>
                <div className="avatar">avatar</div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;

    .name-app {
        font-size: 24px;
        font-weight: 600;
    }

    .container-avatar {
        display: flex;
        align-items: center;
    }
`

export default Header
