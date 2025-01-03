import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { ProductData } from '../../data/ProductData';
import './SinglePage.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function SinglePage() {
  const { id } = useParams(); 
  const product = ProductData.find((item) => item.id === parseInt(id)); 

  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const my_text = `Mahsulot nomi: <i>${product.name}</i> :\n<b>Ismi:</b> <i>${formData.name}</i>\n<b>Telefon raqami:</b> <i>${formData.phone}</i>`;
    const token = "7690321369:AAE2PCkOSrLjYphms_7vCzNFB8JqJAcf9D4";
    const chat_id = "722146740";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=HTML&text=${encodeURIComponent(
      my_text
    )}`;

    try {
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        toast.success("Xaridingiz uchun tashakkur! Siz bilan tez orada operatorlarimiz bog'lanishadi");
      } else {
        toast.error("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      toast.error("Serverga ulanishda xatolik yuz berdi.");
    }
  };

  if (!product) {
    return <p>Mahsulot topilmadi.</p>; 
  }

  return (
    <div className="products-container">
    <div className="product_box">
      <div className="product-header">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price},000 so'm</p>
      </div>

      <div className="product-content">
        <div className="product-image-section">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="product-swiper"
          >
            {product.img.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="product-image-container">
                  <img src={image} alt="" className="product-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <form className="order-form" onSubmit={handleSubmit}>
          <h3>Buyurtma berish</h3>
          <div className="form-group">
            <label>Ismingiz</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Telefon raqamingiz</label>
            <input
              type="tel"
              placeholder="+998 (__) ___-__-__"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Buyurtma berish
          </button>
        </form>
      </div>

      <div className="product-info">
        <p className="product-copy">{product.copy}</p>
        <div className="product-details">
          {product.info.map((info, index) => (
            <p key={index} className="info-item">{info}</p>
          ))}
        </div>
        <div className="product-footer">
          <h3 className="product-price-info">💰 Mahsulot narxi {product.price},000 so'm</h3>
          <h3 className="payment-info">{product.payment}</h3>
          <h3 className="order-info">{product.order}</h3>
        </div>
      </div>

      <ToastContainer />
    </div>
    </div>

  );
}

export default SinglePage;
