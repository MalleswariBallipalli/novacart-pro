import { useEffect, useState } from "react";

import "./AdminProducts.css";


function AdminProducts() {


  const [products,setProducts] = useState([]);


  const [form,setForm] = useState({

    title:"",
    price:"",
    category:"",
    image:""

  });


  const [editId,setEditId] = useState(null);



  // READ PRODUCTS

  useEffect(()=>{


    fetchProducts();


  },[]);





  const fetchProducts = async()=>{


    const response = await fetch(
      "https://fakestoreapi.com/products"
    );


    const data = await response.json();


    setProducts(data);


  };





  // INPUT CHANGE

  const handleChange=(e)=>{


    setForm({

      ...form,

      [e.target.name]:e.target.value

    });


  };





  // CREATE + UPDATE

  const saveProduct=(e)=>{


    e.preventDefault();



    if(editId){


      setProducts(

        products.map(product=>

          product.id===editId

          ?

          {
            ...product,
            ...form,
            price:Number(form.price)
          }

          :

          product

        )

      );

      setEditId(null);


    }


    else{


      const newProduct={


        id:Date.now(),

        ...form,

        price:Number(form.price)


      };



      setProducts([

        newProduct,

        ...products

      ]);


    }




    setForm({

      title:"",
      price:"",
      category:"",
      image:""

    });



  };







  // EDIT

  const editProduct=(product)=>{


    setEditId(product.id);


    setForm({

      title:product.title,

      price:product.price,

      category:product.category,

      image:product.image

    });


  };





  // DELETE

  const deleteProduct=(id)=>{


    const updatedProducts =

    products.filter(

      product=>product.id!==id

    );


    setProducts(updatedProducts);


  };






return (

<div className="admin-page">


<div className="container py-5">


<h1 className="text-center mb-5">

⚡ Admin Product Management

</h1>





{/* FORM */}



<div className="admin-form">


<h3>

{
editId

?

"Update Product"

:

"Add New Product"

}

</h3>



<form onSubmit={saveProduct}>


<input

name="title"

placeholder="Product Title"

value={form.title}

onChange={handleChange}

/>



<input

name="price"

placeholder="Price"

value={form.price}

onChange={handleChange}

/>




<input

name="category"

placeholder="Category"

value={form.category}

onChange={handleChange}

/>





<input

name="image"

placeholder="Image URL"

value={form.image}

onChange={handleChange}

/>




<button>

{

editId

?

"Update Product"

:

"Add Product"

}

</button>



</form>


</div>








{/* PRODUCT TABLE */}



<div className="admin-table">


<table>


<thead>


<tr>

<th>
Image
</th>


<th>
Name
</th>


<th>
Price
</th>


<th>
Category
</th>


<th>
Actions
</th>


</tr>


</thead>





<tbody>


{

products.map(product=>(


<tr key={product.id}>


<td>

<img

src={product.image}

alt=""

/>

</td>



<td>

{product.title.substring(0,40)}

</td>



<td>

${product.price}

</td>



<td>

{product.category}

</td>



<td>


<button

className="edit"

onClick={()=>editProduct(product)}

>

✏ Edit

</button>




<button

className="delete"

onClick={()=>deleteProduct(product.id)}

>

🗑 Delete

</button>



</td>


</tr>


))

}


</tbody>



</table>



</div>



</div>


</div>


);


}


export default AdminProducts;