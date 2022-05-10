import { async } from "@firebase/util";
import { createContext,useState, useEffect} from "react";

//imported when data lived inside shop-data.json as json object. 
//import PRODUCTS from "../shop-data.json";

//imported for bulk insert
//import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//the actual value you want to access. 
export const ProductsContext = createContext({
    products: [],
});


export const ProductsProvider = ({children}) => {
    //const [products, setProducts ] = useState(PRODUCTS);
    const [products, setProducts ] = useState([]);

    //used to insert the collection data into firebase as one time operation. 
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[]);
    useEffect(()=>{
        const getCategoresMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
        }
        getCategoresMap();
    },[]);
    const value = {products}
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}