import styled from "styled-components"
import { Link } from "react-router-dom"

import { Card, PageTitle } from "../styles/common"
import { useTodoStore } from "../store/useTodoStore"
import { CATEGORIES } from "../constants"
import TodoList from "../components/TodoList"

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4f6ef7;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  margin: 24px 0 12px;
`

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

// CategoryCard는 styled(Link)라서 클릭하면 to 주소로 이동함
// (위의 숫자 카드는 Card = styled.div 라서 클릭 이동 없음)
const CategoryCard = styled(Link)`
  display: block;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
  }
`

function DashboardPage() {
    // store에서 todos 상태를 선택하여 가져옴 (셀렉터)
    // - 같은 store를 구독하므로 다른 화면에서 체크/삭제하면 여기 숫자도 자동으로 다시 계산됨
    const todos = useTodoStore((state) => state.todos)

    // 전체 개수 : 배열.length = 항목 개수
    const total = todos.length

    // 완료 개수 : filter로 done이 true인 것만 남긴 새 배열 → .length로 개수
    const doneCount = todos.filter((todo) => todo.done).length

    // 남은 일 개수 : ! 는 true/false를 뒤집음 → done이 false인 것만 남김
    const activeCount = todos.filter((todo) => !todo.done).length

    // 최근 할 일
    // 1) [...todos]  : 전개 연산자로 복사 (sort는 원본을 직접 바꾸므로, store 원본을 지키기 위해 = 불변성)
    // 2) .sort(...)  : 날짜b - 날짜a → 양수면 b가 앞으로 → 최신순(내림차순)
    //                  (날짜a - 날짜b 로 쓰면 오래된 순 = 오름차순)
    //                  new Date(...) : 날짜 문자열을 날짜로 바꿔서 빼기 계산이 가능하게 함
    // 3) .slice(0, 5): 0번부터 5번 '바로 앞'까지 → 앞에서 5개 (끝 번호는 포함 안 함, 원본 안 바뀜)
    const recentTodos = [...todos]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)

    return (
        <>
            <PageTitle>대시보드</PageTitle>

            {/* 숫자 카드 3개 : 위에서 계산한 값을 { } 안에 넣어 표시 */}
            <Stats>
                <Card>
                    <div>전체</div>
                    <StatNumber>{total}</StatNumber>
                </Card>
                <Card>
                    <div>완료</div>
                    <StatNumber>{doneCount}</StatNumber>
                </Card>
                <Card>
                    <div>남은 일</div>
                    <StatNumber>{activeCount}</StatNumber>
                </Card>
            </Stats>

            <SectionTitle>카테고리별</SectionTitle>
            <CategoryGrid>
                {
                    // Object.entries(CATEGORIES)
                    // → [['study', { label: '공부' }], ['work', { label: '업무' }], ['life', { label: '생활' }]]
                    // map이 하나씩 꺼내서 [key, { label }] 로 구조 분해
                    // 예) 첫 바퀴 : key = 'study', label = '공부'
                    Object.entries(CATEGORIES).map(([key, { label }]) => {
                        // 카테고리별 개수 : category가 지금 key와 같은 할 일만 세기
                        const count = todos.filter((todo) => todo.category === key).length

                        return (
                            // 클릭하면 /category/study 같은 카테고리 페이지로 이동
                            <CategoryCard key={key} to={`/category/${key}`}>
                                <div>{label}</div>
                                <StatNumber>{count}</StatNumber>
                            </CategoryCard>
                        )
                    })
                }
            </CategoryGrid>

            <SectionTitle>최근 할 일</SectionTitle>
            {/* 만들어 둔 TodoList 재사용
                - TodoItem이 store에서 toggleTodo / deleteTodo를 직접 가져와 쓰므로
                  여기서도 체크·삭제가 그대로 동작함 */}
            <TodoList todos={recentTodos} />
        </>
    )
}

export default DashboardPage