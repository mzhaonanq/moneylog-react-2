import Layout from '../Components/Layout';
import React from 'react';

const Money =()=> {
  return (
    <Layout>
      <section>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </section>
      <section>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </section>
      <section>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </section>
    </Layout>
  );
}

export default Money