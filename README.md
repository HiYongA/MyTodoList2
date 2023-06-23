# 개인과제 프로젝트 "My Todo List Lv.2"

이 프로젝트는 간단한 Todo List 웹 애플리케이션입니다.
기존 프로젝트에서 react-router-dom, styled-components, redux를 활용하여 새로운 버전인 My Todo List를 구현하였습니다.
<br>
<br>

![Jun-23-2023 06-01-54](https://github.com/HiYongA/MyTodoList2/assets/120562771/a4e13b8b-c6fd-459a-a402-67c9b2642f8e)

## 배포 주소

[https://my-todo-list2.vercel.app/](https://my-todo-list2.vercel.app/)

## 필수 요구 사항

- todos 데이터는 리덕스를 사용해서 전역으로 상태 관리하기

- todos 모듈은 `**Ducks 패턴**`으로 구현하기

- Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현

- Todo를 추가하면  제목 input과 내용 input은 다시 빈 값이 되도록 구현

- input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화되도록 구현

- Todo의 완료상태가 true이면, 상태 버튼의 라벨을 “취소”,  false 이면 라벨을 “완료” 로 보이도록 구현

- 전체 화면의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 컨텐츠를 화면의 가운데로 배치

- 상세보기 클릭하면 Todo의 상세 페이지로 이동

- 상세 페이지에 "이전으로" 버튼을 구현하고, 버튼을 클릭하면 리스트 화면으로 돌아갈 수 있도록 구현

## 컴포넌트 구조

- components폴더 ->
  - AddTodo.jsx : Todo를 추가하는 기능을 담당
  - Todo.jsx : 각 Todo 항목을 표시하고 삭제 및 완료 상태 변경을 처리하는 컴포넌트

- pages 폴더 ->
  -  Home.js : 메인페이지를 담당하는 컴포넌트
  -  TodoDetail.js : 상세 페이지를 담당하는 컴포넌트

- shared 폴더 ->
  - Layout.jsx : 애플리케이션의 레이아웃을 정의하는 컴포넌트
  -  Router.js : 애플리케이션의 라우팅을 관리하는 파일

- styles 폴더 ->
  -  GlobalStyle.jsx : 애플리케이션의 전역 스타일을 설정하는 컴포넌트
  -  reset.css : 브라우저의 기본 스타일을 재정의하거나 초기화하는 CSS 파일

- redux 폴더 ->
  - configStore.js : 중앙 데이터 관리소(store)
  - modules/todos.js : 전역 state 관리하는 파일

## 기술 스택

- React
- HTML
- CSS
- JavaScript
- Vercel (배포 플랫폼)

## 덕스 모듈 작성방법 (Ducks 패턴)

- Reducer 함수를 `export default` 한다.

- Action creator 함수들을 `export` 한다.

- Action type은 `app/reducer/ACTION_TYPE` 형태로 작성한다.<br/>
  (`모듈 이름/리듀서 이름/액션 타입`)

## 리듀서가 액션객체를 받아 상태를 바꾸는 원리

1. 컴포넌트로부터 dispatch를 통해 액션객체를 전달 받는다.
2. action 안에 있는 type을 스위치문을 통해 하나씩 검사해서, 일치하는 case를 찾는다.
3. type과 case가 일치하는 경우에, 해당 코드가 실행되고 새로운 state를 반환(return) 한다.
4. 리듀서가 새로운 state를 반환하면, 그게 새로운 모듈의 state가 된다.
