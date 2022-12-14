<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>

# Data Management Program

## ๐ฉ ํ๋ก์ ํธ ๊ฐ์

- ์งํ๊ธฐ๊ฐ : 10/07 ~ 10/10
- ๊ณผ์ ์ฃผ๊ด : (์ฃผ)๋ฐ๋ง
- ์ฐธ์ฌ๋ช๋จ : ๊น๋ฏผ์ฑ, ์์ฌํ, ์์ํฌ, ์ ๊ดํ, ์ ํ์กฐ, ์กฐ๋ฏผ์ฌ
- DEMO : [DEMO](https://singular-cajeta-7b6744.netlify.app)

<br/>
<br/>

## ๐  ์๊ตฌ์ฌํญ๊ณผ ํด๊ฒฐ๋ฐฉ๋ฒ

> MISSION 1

### ์ผ์ ๋ชฉ๋ก ํ๋ฉด ๊ตฌํํ๊ธฐ

#### ํน์  ์ด ๊ธฐ์ค์ผ๋ก ์ค๋ฆ/๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ์ด ๊ฐ๋ฅํ๋๋ก ๊ตฌํ<br/>

- #### ํ์ด๋ธ ์ปฌ๋ผ ํค๋ onClick ์ด๋ฒคํธ ๋ฐ์์ ์ค๋ฆ์ฐจ์ โ ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ<br/>
  TypeScript ์ฌ์ฉํจ์ CustomType ์ ์ฉ

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

#### ๊ฐ๊ฐ์ ์ด์ ๋ํด์ ํํฐ๋ง<br/>

- #### ๋๋กญ๋ค์ด ๋ฐฉ์์ผ๋ก ๋ชจ๋  ๊ฐ์ ๋ํด ํํฐ๋ง<br/>
  react-table ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ํํฐ๋ง ๊ด๋ จ ํจ์๋ค์ importํ์ฌ ํํฐ๋ง ๊ธฐ๋ฅ์ ๊ตฌํํ์์ต๋๋ค.<br/>
  ๊ฐ ์ด์ด ํํฐ๋ง์ด ๊ฐ๋ฅํ์ง ์๋์ง ์ฌ๋ถ๋ฅผ ํ๋จํ๊ธฐ ์ํด getCanFilter๋ฅผ ์ฌ์ฉํ์ฌ, ํํฐ๋ง์ด ๋์ง ์๋ ์ด์๋ ๋๋กญ๋ค์ด์ด ๋ณด์ด์ง ์๋๋ก ์ค์ ํ์์ต๋๋ค.

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

#### ๋ฐ์ํ ํ์ด์ง๋ก ๊ตฌํ<br/>

- #### ๋ค์ํ ๋๋ฐ์ด์ค์ ๋ค์ํ ํ๋ฉด ํฌ๊ธฐ์ ์ ์ฐํ๊ฒ ์๋ํ  ์ ์๋๋ก ๋ฐ์ํ์ผ๋ก ๊ตฌํ<br/>
  media queries๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐ์ํ ํ์ด์ง๋ฅผ ๊ตฌํํ์์ต๋๋ค.<br/>
  ``` overflow: scroll``` ์ ์ฌ์ฉํ์ฌ ์คํฌ๋กค๊ธฐ๋ฅ์ผ๋ก mobile, tablet, desktop ๋ฑ ์์ ์ฌ์ฉ๊ฐ๋ฅํ ๋ฐ์ํ ํ์ด์ง๋ก ๊ตฌํํ์์ต๋๋ค.<br/>  

  ์์) tablet ํ๋ฉด  
  <img width="300" height="400" alt="๋ฐแแณแผแแงแผ" src="https://user-images.githubusercontent.com/100933263/194791619-f9496775-54da-4565-a9ba-df6fe8f4dd13.gif">


<br/>
<br/>
<br/>

> MISSION 2

### ๋ฐ์ดํฐ ๊ทธ๋ํ ๋์๋ณด๋ ํ๋ฉด ๊ตฌํํ๊ธฐ

#### ๋ ์ง๋ฅผ ์ ํํ์ฌ ํน์  ๋ ์ง์ ๋ฐ์ดํฐ(24์๊ฐ)์ ํ์ธ<br/>

- #### ๋ ์ง์ ๋ณด์ ๋ถ์กฑ ๋ฌธ์ ์ ํด๊ฒฐ๋ฐฉ๋ฒ <br/>
  &nbsp;&nbsp; ์ ์๋ API๋ ์ด 100๊ฐ์ ๋ฐฐ์ด๋ก ๋ฐ์ดํฐ๋ฅผ ์ ๊ณตํจ์ผ๋ก์จ ๋ง์์ผ ์ดํ์น ๋ถ๋์ ๋ฐ์ดํฐ๋ง ์ ๊ณตํด์ค๋๋ค. 24์๊ฐ์ ์จ์ ํ ๊ฐ์ง๊ณ  ์์ง ์๋ ๊ฒฝ์ฐ๋ ์์ด์ ๋ฐ๋ก ๋ฐ์ดํฐ ๊ฐ๊ณต์ ๊ฑฐ์ณค์ต๋๋ค.

```js
const defaultDate = useMemo(() => {
    return moment(
      weatherData?.feeds.slice(-1)[0].created_at.slice(0, -1)
    ).format("DD");
  }, [weatherData]);

  const availableDates = useMemo(() => {
    const result = weatherData?.feeds.map((feed) =>
      moment(feed.created_at.slice(0, -1)).format("DD")
    );
    return [...new Set(result)];
  }, [weatherData]);
```
์ฆ, ์ฌ์ฉ์๋ ์ดํ์น ๋ถ๋์ ๋ฐ์ดํฐ๋ง ํ์ธํ  ์ ์์ผ๋ฏ๋ก ์ฌ์ฉ์๊ฐ ๋ฌ๋ ฅUI์์ ๋ ์ง๋ฅผ ํด๋ฆญํ์ ๋, ์ฌ์ฉ์๊ฐ ์ ํํ ๋ ์ง๊ฐ ์ฌ์ฉ๊ฐ๋ฅํ ๋ ์ง์ธ์ง ํ๋ณํ๋ ๋ก์ง์ด ํ์ํ์ต๋๋ค.
์์ ์ฝ๋์ avaliableDates๋ ์ฌ์ฉ์๊ฐ ์ ํ๊ฐ๋ฅํ ๋ ์ง๋ฅผ ๋ด์ ๋ฐฐ์ด์๋๋ค.<br />
์ฌ์ฉ์๊ฐ ์ ํํ ๋ ์ง๊ฐ avaliableDates์ element ์ค ํ๋๋ผ๋ฉด ํด๋น ๋ ์ง๋ฅผ ๋ณด์ฌ์ฃผ๊ณ , ๊ทธ๋ ์ง ์๋ค๋ฉด defaultDate๋ฅผ ๋ณด์ฌ์ฃผ๋๋ก ์ค๊ณํ์ต๋๋ค.
<br/>
#### ๋ฐ์ดํฐ๋ฅผ csv๋ก export<br/>

- #### csv๋ฐ์ดํฐ ๋ค์ด๋ก๋ ๊ด๋ จ ์ฝ๋ <br/>

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

#### x์ถ ํ๋/์ถ์ ๊ธฐ๋ฅ์ ๊ตฌํํฉ๋๋ค.<br/>

- #### +,- ํ๋ ์ถ์ ๋ฒํผ ๊ตฌํ <br/>
  &nbsp;&nbsp; ์ฌ์ฉ์์ ํธ์์ฑ์ ๊ณ ๋ คํ์ฌ +, - ๋ฒํผ์ด ์๋ ๋ง์ฐ์ค ํ ๋ก ํ๋ ์ถ์๊ฐ ๊ฐ๋ฅํ๋๋ก ๊ตฌํ

<br/>
<br/>
<br/>

> MISSION 3

### ์ ํ ๊ตฌํ ์ฌํญ

- [x] ๋ ์ง ์ ํ ์ ์บ๋ฆฐ๋ UI ์ ์ฉ
- [x] TypeScript ์ฌ์ฉ

<br/>
<br/>

## โ ํ๋ก์ ํธ ๊ด๋ฆฌ ๋ฐ ์ค๊ณ์ ๊ด๋ จ๋ ์ฌํญ๋ค

<br/>

- ##### ๐Meeting Log [๋ด์ฉ๋ณด๊ธฐ!](https://www.notion.so/wecode/2-Meeting-Log-1371058a4a2742c7b3dcabaae408d2a8)

- ##### ๐Task [๋ด์ฉ๋ณด๊ธฐ!](https://www.notion.so/wecode/2-Task-19eafcebfdea4167a0e65df8522605f9)

- ##### ๐Conventions [๋ด์ฉ๋ณด๊ธฐ!](https://www.notion.so/wecode/Team-Conventions-6dc83f662105424a860339fadc72066f)
