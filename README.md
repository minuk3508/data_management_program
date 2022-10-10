<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>

# Data Management Program


## 🚩 프로젝트 개요

- 진행기간 : 10/07 ~ 10/10
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

- #### 드롭다운 방식으로 모든 값에 대해 필터링<br/>
  react-table 라이브러리의 필터링 관련 함수들을 import하여 필터링 기능을 구현하였습니다.<br/>
  각 열이 필터링이 가능한지 아닌지 여부를 판단하기 위해 getCanFilter를 사용하여, 필터링이 되지 않는 열에는 드롭다운이 보이지 않도록 설정하였습니다. 

```js
        <ColumnFilter>
          {header.column.getCanFilter() ? (
            <select
              onChange={({ currentTarget: { value } }) => onFilterChange(value)}
            >
              <option value="null">All</option>
              {sortedUniqueValues.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ) : null}
        </ColumnFilter>
```



<br/>
<br/>
<br/>

> MISSION 2

### 데이터 그래프 대시보드 화면 구현하기

#### 날짜를 선택하여 특정 날짜의 데이터(24시간)을 확인<br/>

- #### 날짜정보의 부족 문제와 해결방법 <br/>
 &nbsp;&nbsp; 제시된 API는 총 100개의 배열로 데이터를 제공함으로써 많아야 이틀치 분량의 데이터만 제공해줍니다. 24시간을 온전히 가지고 있지 않는 경우도 있어서 따로 데이터 가공을 거쳤습니다.

```js

```
<br/>

#### 데이터를 csv로 export<br/>

- #### csv데이터 다운로드 관련 코드 <br/>

```js

 const CSVdata: Array<Object | undefined[] | any> = [
    ["Channer"],
    ["Created at", weatherData?.channel.created_at],
    ["Description", weatherData?.channel.description],
    ["Latitude", weatherData?.channel.latitude],
    ["Longitude", weatherData?.channel.longitude],
    ["Name", weatherData?.channel.name],
    ["Updated at", weatherData?.channel.updated_at],
    [""],
    ["Feeds"],
    ["Created at", "Entry ID", "Temp", "Humidity", "Pressure"],
    ...(weatherData?.feeds.map((i) => {
      const { created_at, entry_id, field1, field2, field3 } = i;
      const arrayData = [created_at, entry_id, field1, field2, field3];
      return arrayData;
    }) || []),
  ];
```
<br/>

#### x축 확대/축소 기능을 구현합니다.<br/>

- #### +,- 확대 축소 버튼 구현 <br/>
 &nbsp;&nbsp; 사용자의 편의성을 고려하여 +, - 버튼이 아닌 마우스 휠로 확대 축소가 가능하도록 구현

<br/>
<br/>
<br/>

> MISSION 3

### 선택 구현 사항

-  [x] 날짜 선택 시 캘린더 UI 적용
-  [x] TypeScript 사용

<br/>
<br/>

## ⚙ 프로젝트 관리 및 설계와 관련된 사항들

<br/>

- ##### 📍Meeting Log [내용보기!](https://www.notion.so/wecode/2-Meeting-Log-1371058a4a2742c7b3dcabaae408d2a8)

- ##### 📍Task [내용보기!](https://www.notion.so/wecode/2-Task-19eafcebfdea4167a0e65df8522605f9)

- ##### 📍Conventions [내용보기!](https://www.notion.so/wecode/Team-Conventions-6dc83f662105424a860339fadc72066f)
