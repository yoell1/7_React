import { useEffect } from "react"
import styled from "styled-components"
import usePostStore from "../store/usePostStore"
import { useNavigate } from "react-router-dom"

// ===== 스타일 =====
const List = styled.ul`
  list-style: none;      /* 앞의 점(•) 없애기 */
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;             /* 카드 사이 간격 */
`

const Card = styled.li`
  display: flex;
  justify-content: space-between;   /* 제목은 왼쪽, 버튼은 오른쪽 */
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
`

const Title = styled.span`
  flex: 1;                /* 남는 공간 다 차지 */
  color: #222;
  font-weight: 500;
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  background: ${(props) => (props.$variant === 'delete' ? '#e5484d' : '#3b82f6')};

  &:hover {
    opacity: 0.85;
  }
`

function PostListPage() {
    const navigate = useNavigate()

    const posts = usePostStore((state)=>state.posts)
    const fetchPosts = usePostStore((state)=>state.fetchPosts)
    const error = usePostStore((state)=>state.error)
    const removePost = usePostStore((state)=>state.removePost)

    useEffect(()=>{
        fetchPosts()
    }, [])

    // 삭제 버튼
    const handleDelete = async (id) => {
        try{
            await removePost(id)
        } catch (e){
            alert(`삭제 실패 : ${e.message}`)
        }
    }

    if (error) return <p>오류: {error}</p>

    return (
        <>
            <List>
                {
                    posts.map((data)=>(
                        <Card key={data.id}>
                            <Title>{data?.title}</Title>
                            <Buttons>
                                {/* 수정 버튼 클릭 시 해당 게시글의 상세 페이지 (EditPostPage) */}
                                <Button onClick={()=>{ navigate(`/posts/${data.id}/edit`) }}>수정</Button>
                                <Button $variant="delete" onClick={()=>handleDelete(data.id)}>삭제</Button>
                            </Buttons>
                        </Card>
                    ))
                }
            </List>
        </>
    )
}

export default PostListPage