import {Layout} from '../Components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useResultRecord} from '../hooks/useResultRecord';
import {useTags} from '../hooks/useTags';

const Wrapper = styled.div`
  background: #ffffff;
`;

const Item = styled.div`
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
  return (
    <Layout>
      <Wrapper>
        <CategorySection
          valueForCategory={category}
          onChangeValue={(categoryType) => setCategory(categoryType)}
        />
      </Wrapper>
      <div>
        {resultRecord.map(item => {
          return <Item>
            <div className='tags'>
            {item.selectedTagsId.map(id => <span>{getTagNameById(id).name}</span>)}
            </div>
            { item.note &&  <div className='note'>
              {item.note}
            </div> }
            <div className='amount'>
            ￥{item.amount}
            </div>
          </Item>;
        })}
      </div>
    </Layout>
  );
}
export {Statistics}