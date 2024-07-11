import React from 'react'
import { Container ,Row , Col } from 'reactstrap'
import imagePic from "../../public/image/apple1.png"
import UseGetData from '@/custom-hook/UseGetData'


const AllProducts = () => {

  const {data:productsData} = UseGetData('products')

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
                {productsData.map((item,index)=>(
                    <tr key={index}>
                    <td><img src={item.imgUrl} alt="" width='60px' /></td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td><button className='btn btn-danger'>Delete</button></td>
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