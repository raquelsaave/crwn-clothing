// import { useContext } from "react";

// import CategoryPreview from "../../components/category-preview/category-preview.component";

// import { CategoriesContext } from "../../contexts/categories.context";

// import "./shop.styles.scss";

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((key) => {
//         const products = categoriesMap[key];
//         return <CategoryPreview key={key} title={key} products={products} />;
//       })}
//     </div>
//   );
// };

// export default Shop;

import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
