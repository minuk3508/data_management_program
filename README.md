<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>

# Data Management Program


## 🚩 프로젝트 개요

- 진행기간 : 10/04 ~ 10/07
- 과제주관 : (주)바딧
- 참여명단 : 김민욱, 소재현, 손소희, 유광현, 정훈조, 조민재
- DEMO : [DEMO](https://singular-cajeta-7b6744.netlify.app)

<br/>
<br/>

## 🛠 요구사항과 해결방법

> MISSION 1

### 센서 목록 화면 구현하기

#### 특정 열 기준으로 오름/내림차순 정렬이 가능하도록 구현<br/>

- #### (제목입력)<br/>
  &nbsp;&nbsp;내용입력

```js
//필요시 코드 입력
```

<br/>

#### 각각의 열에 대해서 필터링<br/>

- #### (제목입력)<br/>

```js
//코드
```



<br/>
<br/>
<br/>

> MISSION 2

### 데이터 그래프 대시보드 화면 구현

- #### 키보드 체험시 사용자 경험 향상을 위한 애니메이션 적용 <br/>
  체험 종료 시 언마운트로 화면 깜빡임 발생하여 불쾌한 경험을 맞이할것으로 예상되어 점진적 언마운트

```js
//Keyboard.organism.js

return (
  <Overlay>
    <Wapper toggle={state ? 'fadeIn' : 'fadeOut'} />
  </Overlay>
);

const Wapper = styled.div`
  ...
  animation: ${(props) => props.toggle} 0.9s;
`;
```

<br/>
<br/>

## ⚙ 프로젝트 관리 및 설계와 관련된 사항들

<br/>

- ##### 📍Meeting Log [내용보기!](https://www.notion.so/wecode/1-Meeting-Log-3e78770757bd4b1980c38dd7cd5b85d0)

- ##### 📍Task [내용보기!](https://www.notion.so/wecode/1-Task-0929fa9d611343d1b74757c36ceb0aca)

- ##### 📍Conventions [내용보기!](https://www.notion.so/wecode/Team-Conventions-6dc83f662105424a860339fadc72066f)
