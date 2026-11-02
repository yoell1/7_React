import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrap = styled.div`
  text-align: center;
  padding: 60px 0;
`

const Code = styled.h1`
  font-size: 64px;
  color: #e5484d;
  margin: 0;
`

const Desc = styled.p`
  color: #666;
  margin: 12px 0 24px;
`

const HomeLink = styled(Link)`
  color: #3b82f6;
`

function NotFoundPage() {
    return (
        <Wrap>
            <Code>404</Code>
            <Desc>페이지를 찾을 수 없어요.</Desc>
            <HomeLink to="/">홈으로 돌아가기</HomeLink>
        </Wrap>
    )
}

export default NotFoundPage