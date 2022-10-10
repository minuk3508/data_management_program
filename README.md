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

- #### 테이블 컬럼 헤더 onClick 이벤트 발생시 오름차순 → 내림차순 정렬<br/>
  TypeScript 사용함에 CustomType 적용

```js

//TableHeader.tsx

<Sorter
    width={header.getSize()}
    isSortable={header.column.getCanSort()}
    onClick={header.column.getToggleSortingHandler()}
    >
     {header.isPlaceholder
      ? null
      : flexRender(header.column.columnDef.header, header.getContext())}
     {
      {
        asc: <FaSortUp />,
        desc: <FaSortDown />,
      }[header.column.getIsSorted() as SortDirection]
     }
</Sorter>

...
const Sorter = styled.div<CustomSorter>`
  width: ${({ width }) => width};
  cursor: ${({ isSortable }) => (isSortable ? "pointer" : "default")};
```

#### 각각의 열에 대해서 필터링<br/>

- #### 드롭다운 방식으로 모든 값에 대해 필터링<br/>
  react-table 라이브러리의 필터링 관련 함수들을 import하여 필터링 기능을 구현하였습니다.<br/>
  각 열이 필터링이 가능한지 아닌지 여부를 판단하기 위해 getCanFilter를 사용하여, 필터링이 되지 않는 열에는 드롭다운이 보이지 않도록 설정하였습니다.

```js
<ColumnFilter>
  {header.column.getCanFilter() ? (
    <select onChange={({ currentTarget: { value } }) => onFilterChange(value)}>
      <option value='null'>All</option>
      {sortedUniqueValues.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </select>
  ) : null}
</ColumnFilter>
```

<br/>

#### 반응형 페이지로 구현<br/>

- #### 다양한 디바이스의 다양한 화면 크기에 유연하게 작동할 수 있도록 반응형으로 구현<br/>
  media queries를 사용하여 반응형 페이지를 구현하였습니다.<br/>
  ``` overflow: scroll``` 을 사용하여 스크롤기능으로 mobile, tablet, desktop 등 에서 사용가능한 반응형 페이지로 구현하였습니다.<br/>  

  예시) tablet 화면  
  <img width="300" height="400" alt="반응형" src="https://user-images.githubusercontent.com/100933263/194791619-f9496775-54da-4565-a9ba-df6fe8f4dd13.gif">


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
  ['Channer'],
  ['Created at', weatherData?.channel.created_at],
  ['Description', weatherData?.channel.description],
  ['Latitude', weatherData?.channel.latitude],
  ['Longitude', weatherData?.channel.longitude],
  ['Name', weatherData?.channel.name],
  ['Updated at', weatherData?.channel.updated_at],
  [''],
  ['Feeds'],
  ['Created at', 'Entry ID', 'Temp', 'Humidity', 'Pressure'],
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

- [x] 날짜 선택 시 캘린더 UI 적용
- [x] TypeScript 사용

<br/>
<br/>

## ⚙ 프로젝트 관리 및 설계와 관련된 사항들

<br/>

- ##### 📍Meeting Log [내용보기!](https://www.notion.so/wecode/2-Meeting-Log-1371058a4a2742c7b3dcabaae408d2a8)

- ##### 📍Task [내용보기!](https://www.notion.so/wecode/2-Task-19eafcebfdea4167a0e65df8522605f9)

- ##### 📍Conventions [내용보기!](https://www.notion.so/wecode/Team-Conventions-6dc83f662105424a860339fadc72066f)
