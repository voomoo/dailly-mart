import React, {useState} from 'react'

export default function index() {
    const [formValues, setFormValues] = useState({
        productName: "",
        porductImage: "",
        productDescription: "",
        productPrice: 0
    })
    async function addNewProduct() {
        const response = await fetch("/api/products/create-product", {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
  return (
    <div>
        <input type="text" placeholder='product name' value={formValues.productName} onChange={e=>setFormValues({...formValues, productName: e.target.value})}/>
        <br />
        <input type="text" placeholder='product image url' value={formValues.porductImage} onChange={e=>setFormValues({...formValues, porductImage: e.target.value})}/>
        <br />
        <textarea cols="30" rows="10" placeholder='product description' value={formValues.productDescription} onChange={e=>setFormValues({...formValues, productDescription: e.target.value})}></textarea>
        <br />
        <input type="number" placeholder='product price' value={formValues.productPrice} onChange={e=>setFormValues({...formValues, productPrice: e.target.value})}/>
        <br />
        <button onClick={addNewProduct}>Submit</button>
    </div>
  )
}
