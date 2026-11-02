import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrap = styled.div`
  text-align: center;
  padding: 60px 0;
`

const Title = styled.h1`
  font-size: 32px;
  color: #222;
  margin-bottom: 12px;
`

const Desc = styled.p`
  color: #666;
  margin-bottom: 24px;
`

const GoButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  background: #3b82f6;
  color: #fff;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`

function Home() {
    return (
        <Wrap>
            <Title>게시판</Title>
            <Desc>게시글을 조회하고 추가 · 수정 · 삭제할 수 있어요.</Desc>
            <GoButton to="/posts">게시글 보러 가기</GoButton>
        </Wrap>
    )
}

export default Home