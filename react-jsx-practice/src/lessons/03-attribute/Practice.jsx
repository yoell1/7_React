function Practice() {
    const docUrl = "https://react.dev"
    const imageUrl = "https://url.kr/xu2ll8"

    /*
        아래 TODO 주석을 참고하여 코드를 작성해보세요.
    */
    return (
        <>
            {/* TODO : 아래 제목에 highlight 클래스를 추가 */}
            <h2 className="highlight">속성 연습</h2>

            {/* TODO : 아래 문장에 글자색은 'tomato', 글자 크기는 20 적용 */}
            <p style={{ color: 'tomato', fontSize: 20 }}>이 글자를 빨갛고 크게 만들어 주세요.</p>

            {/* TODO : 아래 입력 태그에 label 태그 연결  */}
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" placeholder="이메일을 입력하세요..." />
            <br/>

            {/* TODO : a 태그에 docUrl 변수 값을 href 속성으로 추가 */}
            <p>링크 주소: {docUrl}</p>
            <a href={docUrl}>React 공식 문서</a>
            <br />

            {/* TODO : img 태그에 imageUrl 변수 값을 src 속성으로 추가 */}
            <p>이미지 주소 : {imageUrl}</p>
            <img src={imageUrl} width={80} alt="어떤 이미지가 나올까요?" />
        </>
    )
}

export default Practice
