function Practice() {
    const user = {
        name: "홍길동",
        birthYear: 2007,
        city: "서울",
        score: 88
    }
    const thisYear = 2026

    /*
        아래 TODO 주석을 참고하여 코드를 작성해보세요.
    */
    return (
        <>
            <h2>{user.name}님의 프로필</h2>
            <p>올해는 {thisYear}년이에요.</p>

            {/* TODO : "사는 곳: 서울"을 표시 */}
            <p>사는 곳: {user.city}</p>
            {/* TODO : 나이를 계산하여 표시 */}
            <p>나이: {thisYear - user.birthYear}</p>
            {/* TODO : 점수(score)에 10점을 더한 "보너스 점수" 표시 */}
            <p>보너스 점수: {user.score + 10}</p>
            {/* TODO : 이름 글자 수 표시 */}
            <p>이름 글자 수: {user.name.length}</p>
        </>
    )
}

export default Practice
