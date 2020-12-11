import {Layout} from '../Components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordType, useResultRecord} from '../hooks/useResultRecord';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

const Wrapper = styled.div`
  background: #ffffff;
`;

const Header =styled.h3`
font-size: 18px;
  line-height: 20px;
  padding:10px 16px;
`

const Main = styled.main`
  background: #ffffff;
  display:flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
  } 
`

const Statistics: React.FunctionComponent = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {resultRecord} = useResultRecord();
  const {getTagNameById} = useTags();
  const selectedRecord = resultRecord.filter(r => r.selectedCategory === category);
  const hash: { [K: string]: RecordType[] } = {};
  selectedRecord.map(r => {
    const key = dayjs(r.createAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    } else {
      hash[key].push(r);
    }
  });
  console.log(hash);
  console.log(Object.entries(hash));
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {return 0;}
    if (a[0] > b[0]) {return -1;}
    if (a[0] < b[0]) {return 1;}
    return 0;
  });
  return (
    <Layout>
      <Wrapper>
        <CategorySection
          valueForCategory={category}
          onChangeValue={(categoryType) => setCategory(categoryType)}
        />
      </Wrapper>
      {array.map(([date,record])=> <div>
          <Header>
            {date}
          </Header>
          <div>
            {record.map(item => {
              return <Main>
                <div className='tags'>
                  {item.selectedTagsId.map(id => <span>{getTagNameById(id).name}</span>)}
                </div>
                {item.note && <div className='note'>
                  {item.note}
                </div>}
                <div className='amount'>
                  ￥{item.amount}
                </div>
              </Main>;
            })}
          </div>
        </div>
      )
      }
    </Layout>
  );
}
export {Statistics}