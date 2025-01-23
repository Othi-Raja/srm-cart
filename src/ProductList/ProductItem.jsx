import React from "react"; 

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
