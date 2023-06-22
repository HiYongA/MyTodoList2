# 개인과제 프로젝트 "My Todo List"

간단한 Todo List 웹 애플리케이션입니다.
<br>
<br>

![Jun-17-2023 15-56-36](https://github.com/HiYongA/MyTodoList/assets/120562771/95b025a9-d1c9-49bd-b342-61b1329dc0bd)

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

- Todo.jsx : 각각의 Todo 항목을 표시하고 삭제 및 완료 상태 변경을 처리하는 컴포넌트

- TodoList.jsx : Todo 항목들을 관리하고 보여주는 역할을 담당

## 기술 스택

- React
- HTML
- CSS
- JavaScript
- Vercel (배포 플랫폼)

## 덕스 모듈 작성방법 (Ducks 패턴)

- Reducer 함수를 `export default` 한다.

- Action creator 함수들을 `export` 한다.

- Action type은 `app/reducer/ACTION_TYPE` 형태로 작성한다.
  (`모듈 이름/리듀서 이름/액션 타입`)

## 리듀서가 액션객체를 받아 상태를 바꾸는 원리

1. 컴포넌트로부터 dispatch를 통해 액션객체를 전달 받는다.
2. action 안에 있는 type을 스위치문을 통해 하나씩 검사해서, 일치하는 case를 찾는다.
3. type과 case가 일치하는 경우에, 해당 코드가 실행되고 새로운 state를 반환(return) 한다.
4. 리듀서가 새로운 state를 반환하면, 그게 새로운 모듈의 state가 된다.
