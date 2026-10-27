import { NavLink, Outlet } from "react-router-dom"
import styled from "styled-components"
import { CATEGORIES } from "../constants"   // ← CATEGORIES가 있는 파일 경로로 맞추기

const Header = styled.header`
    background: #fff;
    border-bottom: 1px solid #e3e7ee;
`

const Nav = styled.nav`
    max-width: 800px;
    margin: 0 auto;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
`

const StyledNavLink = styled(NavLink)`
    color: #6b7280;
    padding: 4px 2px;

    &.active {
        color: #4f6ef7;
        font-weight: 600;
        border-bottom: 2px solid #4f6ef7;
    }
`

const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 20px 60px;
`

function Layout(){
    return (
        <>
            <Header>
                <Nav>
                    <StyledNavLink to="/" end>대시보드</StyledNavLink>
                    <StyledNavLink to="/todos" end>할 일 목록</StyledNavLink>
                    {
                        Object.entries(CATEGORIES).map(([key, { label }]) => {
                            return (
                                <StyledNavLink key={key} to={`/category/${key}`}>
                                    {label}
                                </StyledNavLink>
                            )
                        })
                    }
                </Nav>
            </Header>
            <Main>
                <Outlet />
            </Main>
        </>
    )
}

export default Layout