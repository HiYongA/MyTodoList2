# 개인과제 프로젝트 "My Todo List"
간단한 Todo List 웹 애플리케이션입니다.
<br>
<br>

![Jun-15-2023 19-28-34](https://github.com/HiYongA/MyTodoList/assets/120562771/0b161e1b-4312-4dcf-b13b-ac5697a7e278)

## 배포 주소
 [https://my-todo-list-iota.vercel.app](https://my-todo-list-iota.vercel.app)


## 필수 요구 사항

- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input 과 내용 input은 다시 빈 값으로 바뀌도록 구성하기

- Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false이면 라벨을 완료로 조건부 렌더링하기

- Todo의 상태가 Working이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현하기

- Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주기

- 컴포넌트 구조는 자유롭게 구현해보기
  반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보고, 분리한 컴포넌트를 readme에 작성하기

## 컴포넌트 구조

- common폴더 -> Header.jsx : 상단 부분을 담당
               Layout.jsx : 전체 레이아웃을 담당

- AddTodo.jsx : Todo를 추가하는 기능을 담당

- Todo.jsx : 각각의 Todo항목을 표시하고 삭제 및 완료 상태 변경을 처리하는 컴포넌트


## 기술 스택

- React
- HTML
- CSS
- JavaScript
- Vercel (배포 플랫폼)
