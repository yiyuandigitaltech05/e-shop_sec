import { useEffect, useState } from 'react'
import { db } from '@/firebase.config'
import { collection, onSnapshot } from 'firebase/firestore'
const UseGetData = (collectionName) => {

    const [data ,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const collectionRef = collection(db,collectionName)

    useEffect(()=>{
        const getData = async()=>{
            await onSnapshot(collectionRef, (snapshot)=>{
                setData(snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
                setLoading(false);
            })
            // const data = await getDocs(collectionRef)
            // console.log(data)
            
        }

        getData()
    },[])
  return { data , loading }
}

export default UseGetData