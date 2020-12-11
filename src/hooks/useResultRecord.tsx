import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordType = {
  selectedTagsId: number[],
  note: string,
  selectedCategory: '-'|'+',
  amount: number,
  createAt?: string,
}

const useResultRecord=()=>{
  const [resultRecord,setResultRecord]= useState<RecordType[]>([])
  useEffect(()=>{
     setResultRecord(JSON.parse(window.localStorage.getItem('recordLocalStorage')||'[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('recordLocalStorage',JSON.stringify(resultRecord))
      console.log('数据存入了');
  },[resultRecord])
  const saveResultRecord =(record: RecordType)=>{
    if (record.amount <= 0) {
      alert('请输入金额');
      return false;
    } else if (record.selectedTagsId.length === 0) {
      alert('请选择标签');
      return false;
    } else {
      setResultRecord([...resultRecord, {...record, createAt: (new Date()).toISOString()}]);
      return true
    }
  }
  return {saveResultRecord}
}
export {useResultRecord}