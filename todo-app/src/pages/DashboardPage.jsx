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
    // store에서 todos 상태를 선택하여 가져옴
    const todos = useTodoStore((state) => state.todos)

    // 전체 / 완료 / 남은 일 개수
    const total = todos.length
    const doneCount = todos.filter((todo) => todo.done).length
    const activeCount = todos.filter((todo) => !todo.done).length

    // 최근 할 일 : 생성일 최신순으로 정렬 후 5개만
    const recentTodos = [...todos]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 5)

    return (
        <>
            <PageTitle>대시보드</PageTitle>

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
                    Object.entries(CATEGORIES).map(([key, { label }]) => {
                        // 카테고리별 할 일 개수
                        const count = todos.filter((todo) => todo.category === key).length

                        return (
                            <CategoryCard key={key} to={`/category/${key}`}>
                                <div>{label}</div>
                                <StatNumber>{count}</StatNumber>
                            </CategoryCard>
                        )
                    })
                }
            </CategoryGrid>

            <SectionTitle>최근 할 일</SectionTitle>
            <TodoList todos={recentTodos} />
        </>
    )
}

export default DashboardPage