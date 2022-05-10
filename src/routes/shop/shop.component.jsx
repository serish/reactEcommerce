//import { useContext, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
//replaced by categoriesContext after using firebase. 
//import { ProductsContext } from "../../context/products.context";
//import { CategoriesContext } from "../../context/categories.context";
//import ProductCard from "../../components/product-card/product-card.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";

const Shop = () => {
    //const {products} = useContext(ProductsContext);
    //const {categoriesMap} = useContext(CategoriesContext);
 return(
     <Routes>
         <Route index element={<CategoriesPreview />} />
         <Route path=":category" element={<Category />} />
     </Routes>
     //replaced after using categories context. 
     /*
     <div className="products-container">
         {products.map(
             (product) => (<ProductCard key={product.id} product={product} />)
         )}
     </div>
     */
    /*
    <Fragment>
        {Object.keys(categoriesMap).map((title)=>(
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                    {categoriesMap[title].map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    </div>
                </Fragment>
        ))}
    </Fragment>
    */
   /*
   <div className="shop-container">
       {Object.keys(categoriesMap).map(title=>{
           const products = categoriesMap[title];
           return(
               <CategoryPreview key={title} title={title} products={products} />
           )
       })}
   </div>
   */
 );
};

export default Shop;