import React from "react";
import { Link } from "react-router-dom";
import product1 from '../images/category-baby-care.jpg'
import product2 from '../images/category-atta-rice-dal.jpg'
import product3 from '../images/category-bakery-biscuits.jpg'
import product4 from '../images/category-chicken-meat-fish.jpg'
import product5 from '../images/category-cleaning-essentials.jpg'
import product6 from '../images/category-dairy-bread-eggs.jpg'
import product7 from '../images/category-instant-food.jpg'
import product8 from '../images/category-pet-care.jpg'
import product9 from '../images/category-snack-munchies.jpg'
import product10 from '../images/category-tea-coffee-drinks.jpg'
import Swal from 'sweetalert2';

const ProductItem = () => {


  const handleAddClick = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: "Product has been added to your cart!",
      showConfirmButton: true,
      timer: 3000,
    });
  };
  return (
    <div>
      {/* Popular Products Start*/}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
            <div className="section-head text-center mt-8" >
              <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
              <div className="wt-separator bg-primarys">
              </div>
              <div className="wt-separator2 bg-primarys">
              </div>
              {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
            </div>
            </div>
          </div>
         
        </div>
      </section>
      {/* Popular Products End*/}
    </div>
  );
};

export default ProductItem;
