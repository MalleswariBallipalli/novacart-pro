import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import "./Products.css";


function Products() {


  const [products,setProducts] = useState([]);

  const [loading,setLoading] = useState(true);


  const [searchParams,setSearchParams] = useSearchParams();


  const search = searchParams.get("search") || "";

  const category = searchParams.get("category") || "all";

  const sort = searchParams.get("sort") || "";



  useEffect(()=>{


    const getProducts = async()=>{


      try{


        const res = await fetch(
          "https://fakestoreapi.com/products"
        );


        const data = await res.json();


        setProducts(data);


      }

      catch(error){

        console.log(error);

      }

      finally{

        setLoading(false);

      }


    };


    getProducts();


  },[]);





  const updateFilter=(key,value)=>{


    const params =
    Object.fromEntries(searchParams);



    if(value && value !== "all"){

      params[key]=value;

    }

    else{

      delete params[key];

    }


    setSearchParams(params);


  };





  const filteredProducts = useMemo(()=>{


    let result=[...products];



    if(search){

      result=result.filter(product=>

        product.title
        .toLowerCase()
        .includes(search.toLowerCase())

      );

    }




    if(category !== "all"){


      result=result.filter(product=>

        product.category === category

      );

    }




    if(sort==="low-high"){


      result.sort(
        (a,b)=>a.price-b.price
      );


    }



    if(sort==="high-low"){


      result.sort(
        (a,b)=>b.price-a.price
      );


    }



    return result;



  },[
    products,
    search,
    category,
    sort
  ]);






return (

<div className="products-page">



{/* HERO */}

<section className="products-hero">


<h1>

🛍 Explore Premium Collection

</h1>


<p>

Discover latest products with amazing quality and best prices.

</p>


</section>






{/* FILTER AREA */}

<div className="container">


<div className="filter-box">



<div className="search-box">


<input

type="text"

placeholder="🔍 Search products..."

value={search}

onChange={(e)=>
updateFilter(
"search",
e.target.value
)
}

/>


</div>





<select

value={category}

onChange={(e)=>
updateFilter(
"category",
e.target.value
)
}

>


<option value="all">
All Categories
</option>


<option value="electronics">
Electronics
</option>


<option value="jewelery">
Jewellery
</option>


<option value="men's clothing">
Men's Clothing
</option>


<option value="women's clothing">
Women's Clothing
</option>



</select>





<select

value={sort}

onChange={(e)=>
updateFilter(
"sort",
e.target.value
)
}

>


<option value="">
Sort Products
</option>


<option value="low-high">
Price Low → High
</option>


<option value="high-low">
Price High → Low
</option>


</select>



</div>





<div className="product-header">


<h4>

Products Found

<span>

 {filteredProducts.length}

</span>

</h4>


</div>





{/* PRODUCTS */}


{
loading ?


<div className="loader">

Loading Products...

</div>


:


filteredProducts.length===0 ?


<div className="empty">


<h2>
😕
</h2>

<h3>
No Products Found
</h3>


</div>



:


<div className="products-grid">


{

filteredProducts.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}


</div>



}



</div>


</div>


);


}


export default Products;