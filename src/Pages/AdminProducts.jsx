import { useEffect, useState } from "react";


function AdminProducts(){


const [products,setProducts] = useState([]);


const [title,setTitle] = useState("");

const [price,setPrice] = useState("");

const [editId,setEditId] = useState(null);





// READ - GET API

useEffect(()=>{


fetch("https://fakestoreapi.com/products")

.then(res=>res.json())

.then(data=>{

setProducts(data);

});


},[]);







// CREATE + UPDATE

const handleSubmit=(e)=>{


e.preventDefault();



if(!title || !price){

alert("All fields required");

return;

}





if(editId){



setProducts(

products.map((product)=>

product.id === editId

?

{

...product,

title:title,

price:Number(price)

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

title:title,

price:Number(price)


};




setProducts([

newProduct,

...products

]);


}






setTitle("");

setPrice("");

};









// EDIT

const handleEdit=(product)=>{


setTitle(product.title);

setPrice(product.price);

setEditId(product.id);


};








// DELETE

const handleDelete=(id)=>{


setProducts(

products.filter(

(product)=>product.id !== id

)

);


};









return(


<div className="container mt-5">



<h2 className="text-center mb-4">

Admin Product Management

</h2>







<div className="card shadow p-4 mb-4">



<form onSubmit={handleSubmit}>


<input


className="form-control mb-3"


placeholder="Product Title"


value={title}


onChange={(e)=>setTitle(e.target.value)}


/>





<input


className="form-control mb-3"


placeholder="Product Price"


type="number"


value={price}


onChange={(e)=>setPrice(e.target.value)}


/>







<button className="btn btn-primary">


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









<div className="row">



{


products.map((product)=>(


<div

className="col-md-4 mb-4"

key={product.id}

>


<div className="card shadow p-3">



<h5>

{product.title}

</h5>



<p>

Price: ${product.price}

</p>




<button


className="btn btn-warning me-2"


onClick={()=>handleEdit(product)}

>

Edit

</button>





<button


className="btn btn-danger"


onClick={()=>handleDelete(product.id)}

>

Delete

</button>




</div>


</div>


))


}



</div>






</div>


);


}


export default AdminProducts;