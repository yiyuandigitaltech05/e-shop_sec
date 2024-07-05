import React,{ useState } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import "../Style/AddProduct.css"
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'
import { db, storage } from "../firebase.config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const addProduct = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const docRef = collection(db, 'products')
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      uploadTask.on('state_changed', 
        () => {
          // handle upload progress here if needed
        }, 
        (error) => {
          toast.error('Image upload failed!')
          setLoading(false)
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
          await addDoc(docRef, {
            title: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL // Save the download URL to Firestore
          })
          toast.success("Product successfully added")
          navigate('/dashboard/all-products')
          // /dashboard/all-products and dashboard/all-products is totally different
          setLoading(false)
        }
      )

    } catch (error) {
      toast.error('Failed to add product!')
      setLoading(false)
    }
  }

  return (
    <section className='py-16'>
      <Container>
        <Row>
          <Col lg='12'>
            <h4>Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='Form_group'>
                <span className='text-amber-500'>Product title</span>
                <input type="text" placeholder='Title' value={enterTitle} onChange={(e) => setEnterTitle(e.target.value)} required />
              </FormGroup>
              <FormGroup className='Form_group'>
                <span className='text-amber-500'>Short Description</span>
                <input type="text" placeholder='lorem...' value={enterShortDesc} onChange={(e) => setEnterShortDesc(e.target.value)} required />
              </FormGroup>
              <FormGroup className='Form_group'>
                <span className='text-amber-500'>Description</span>
                <input type="text" placeholder='Description...' value={enterDescription} onChange={(e) => setEnterDescription(e.target.value)} required />
              </FormGroup>
              <div>
                <FormGroup className='Form_group'>
                  <span className='text-amber-500'>Price</span>
                  <input type="number" placeholder='Price' value={enterPrice} onChange={(e) => setEnterPrice(e.target.value)} required />
                </FormGroup>
                <FormGroup className='Form_group'>
                  <span className='text-amber-500'>Category</span>
                  <select className='w-fit' value={enterCategory} onChange={(e) => setEnterCategory(e.target.value)} required>
                    <option value="">--Pick one--</option>
                    <option value="Couch">Couch</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Beach">Beach</option>
                  </select>
                </FormGroup>
              </div>
              <div>
                <FormGroup className='Form_group'>
                  <span className='text-amber-500'>Product Image</span>
                  <input type="file" accept='.jpg,.png' onChange={(e) => setEnterProductImg(e.target.files[0])} required />
                </FormGroup>
              </div>
              <Button className='clock_buy bg-blue-950' type='submit' disabled={loading}>
                {loading ? 'Adding...' : 'Add Product'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts
