function Practice() {
    /*
        아래 TODO 주석을 참고하여 코드를 작성해보세요.
    */
   const name= '이우진'
   const hobbies = ["운동","게임","독서"]
    return (
        
        <>
            {/* TODO : h2 태그를 사용하여 "내 이름은 ... 입니다" 표시 */}
            <h2>내 이름은 {name} 입니다.</h2>
            {/* TODO : 이곳에 p 태그를 사용하여 한 줄 자기 소개 작성 */}
            <p>나는 {name}이고, 취미는 {hobbies.join(', ')} 입니다.</p>
            {/* TODO : 이곳에 구분선 hr 태그 표시 */}
            <hr/>
            {/* 
                TODO : h3 태그로 "내 취미"를 표시하고, 
                       ul/li 태그로 취미를 3개 작성
            */}
            <h3>내 취미</h3>
            <ul>
                <li>운동</li>
                <li>게임</li>
                <li>독서</li>
            </ul>
        
        </>
    )
}

export default Practice
