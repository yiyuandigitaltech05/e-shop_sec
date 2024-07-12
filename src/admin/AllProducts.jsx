import React from 'react'
import { Container ,Row , Col } from 'reactstrap'
import UseGetData from '@/custom-hook/UseGetData'
import { db } from '@/firebase.config'
import { doc , deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'




const AllProducts = () => {

  const {data:productsData , loading} = UseGetData('products')
  const deleteProduct = async(id)=>{
    await deleteDoc(doc(db,'products' , id))
    toast.success('Deleted!!')
    // location.reload()
  }


  console.log(productsData)



  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? <h3 className='py-4 fw-bold'>Loading...</h3> : productsData.map((item,index)=>(
                    <tr key={index}>
                    <td><img src={item.imgUrl} alt="" width='60px' /></td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td><button className='btn btn-danger' onClick={()=>{deleteProduct(item.id)}}>Delete</button></td>
                  </tr>
                ))}
               
                
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AllProducts