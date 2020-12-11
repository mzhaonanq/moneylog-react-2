import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper =styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected{
        ::after{
          content:'';
          display:block;
          height: 3px;
          background: #333333;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
`

type Props = {
  valueForCategory: ('-'|'+'),
  onChangeValue: (categoryType: '-'|'+')=>void
}

const CategorySection: React.FunctionComponent<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'}
  type categoryMapType = typeof categoryMap
  type categoryMapTypeKey = keyof categoryMapType
  const [categoryList] = useState<categoryMapTypeKey[]>(['-', '+']);
  const category = props.valueForCategory
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => <li
          key={c}
          onClick={() => props.onChangeValue(c)}
          className={c === category ? 'selected' : ''}
        >
          {categoryMap[c]}
        </li>)}
      </ul>
    </Wrapper>
  );
}

export {CategorySection}