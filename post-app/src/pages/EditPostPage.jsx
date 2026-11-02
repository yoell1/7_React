import { useNavigate, useParams } from "react-router-dom"

import { getPost } from "../api/postApi"
import { useEffect, useState } from "react"
import usePostStore from "../store/usePostStore"
import { Form, Heading, Input, Textarea, Button } from "../components/FormStyles"

function EditPostPage() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [post, setPost] = useState({ userId: '', title: '', body: '' })

    const editPost = usePostStore((s)=>s.editPost)

    useEffect(()=>{
        getPost(id).then((data)=>{
            console.log(data)
            setPost(data)
        })
    }, [])

    const handleClick = async () => {
        try{
            await editPost(Number(id), post)
            navigate('/posts')
        } catch (e){
            alert(`수정 실패 : ${e.message}`)
        }
    }


    return (
        <Form>
            <Heading>게시글 수정</Heading>

            <Input type="text"
                   placeholder="닉네임 입력"
                   value={post?.userId} onChange={(e)=>setPost((s)=>({...s, userId: e.target.value}))} />

            <Input type="text" 
                   placeholder="제목 입력"
                   value={post?.title} onChange={(e)=>setPost((s)=>({...s, title: e.target.value}))} />

            <Textarea placeholder="내용 입력"
                   value={post?.body} onChange={(e)=>setPost((s)=>({...s, body: e.target.value}))} />

            <Button onClick={handleClick}>수정</Button>
        </Form>
    )
}

export default EditPostPage