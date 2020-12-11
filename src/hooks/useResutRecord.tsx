import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordType = {
  selectedTagsId: number[],
  note: string,
  selectedCategory: '-'|'+',
  amount: number
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
    setResultRecord([...resultRecord,record])
  }
  return {saveResultRecord}
}
export {useResultRecord}