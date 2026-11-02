import { useParams } from "react-router-dom"

import { getPost } from "../api/postApi"
import { useEffect, useState } from "react"

function EditPostPage() {
    const { id } = useParams()

    const [post, setPost] = useState(null)

    useEffect(()=>{
        getPost(id).then((data)=>{
            console.log(data)
            setPost(data)
        })
    }, [])


    return (
        <>
            EditPost

            <input type="text"
                   placeholder="닉네임 입력"
                   value={post?.userId} onChange={(e)=>setPost((s)=>({...s, userId: e.target.value}))} />
            <br />

            <input type="text" 
                   placeholder="제목 입력"
                   value={post?.title} onChange={(e)=>setPost((s)=>({...s, title: e.target.value}))} />
            <br />

            <input type="text"
                   placeholder="내용 입력"
                   value={post?.body} onChange={(e)=>setPost((s)=>({...s, body: e.target.value}))} />
            <br />

            <button>수정</button>
        </>
    )
}

export default EditPostPage