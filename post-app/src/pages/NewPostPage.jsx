import { useState } from "react"
import { useNavigate } from "react-router-dom"

import usePostStore from "../store/usePostStore"
import { Form, Heading, Input, Textarea, Button } from "../components/FormStyles"

function NewPostPage() {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const addPost = usePostStore((state)=>state.addPost)


    const handleClick = async () => {

        try {
            await addPost({ title, body, userId })
            navigate("/posts")
        } catch (e) {
            alert(`추가 실패 : ${e.message}`)
        }
    }

    return (
        <Form>
            <Heading>게시글 추가</Heading>

            <Input type="text"
                   placeholder="닉네임 입력"
                   value={userId} onChange={(e)=>setUserId(e.target.value)} />

            <Input type="text" 
                   placeholder="제목 입력"
                   value={title} onChange={(e)=>setTitle(e.target.value)} />

            <Textarea placeholder="내용 입력"
                   value={body} onChange={(e)=>setBody(e.target.value)} />

            <Button onClick={handleClick}>추가</Button>
        </Form>
    )
}

export default NewPostPage