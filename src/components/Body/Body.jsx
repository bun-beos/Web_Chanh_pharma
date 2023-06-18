import React from 'react'
import Data from './List'
import Topsells from './Topsells'
import {AiFillGift} from 'react-icons/ai'
import './Body.css'
// import image_danasa from '../../assets/images/danasa_ginseng.jpg'
const Body = () => {
    var image_danasa = require('../../assets/images/danasa_ginseng.jpg')
    var image_Slider = require('../../assets/images/anh_hong_hong.png')
    var image_Slider_1 = require('../../assets/images/slider_1_image_1.png')
    var image_Slider_2 = require('../../assets/images/Banner-Slide---Trang-TBYT---592182-592x182.png')
    var image_Slider_3 = require('../../assets/images/slider-3.png')
    var image_Slider_4 = require('../../assets/images/slider-4.png')
    var image_Slider_5 = require('../../assets/images/slider-5.png')
    var image_Slider_6 = require('../../assets/images/slider-6.png')
    var image_Deal = require('../../assets/images/deal.png')
    var thuc_pham_chuc_nang = require('../../assets/images/AK----Thuc-Pham-Chuc-Nang---1200x200-copy-4-1200x200.png')
    var image_hauora = require('../../assets/images/hauora-maxi-white-30-vien-mac-dinh-2.jpg')
  
    let slideIndex = 0;
    function showSlides(n) {
    //     let i;
        let slides = document.getElementsByClassName("slider_double_image")
    //     // if (n > slides.length) slideIndex = 1 
    //     // if (n < 1) { slideIndex = slides.length }
    //     // for (i = 0; i < slides.length; i++) {
    //     //     slides[i].style.display = "none";
    //     // }
    //     // slides[slideIndex].style.display = "block";
        console.log(slides)
    }
    showSlides(slideIndex);
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

return (
    <div className='body'>

        <div className='body_slider'>
            <img src={image_Slider} alt="" />
        </div>
        
        {/* Begin Slider  */}
        <div className='slider'>
            <div className='slider_double_image'>
                <img src={image_Slider_1} alt="" />
                <img src={image_Slider_2} alt="" />
            </div>
            {/* <div className='slider_double_image'>
                <img src={image_Slider_3} alt="" />
                <img src={image_Slider_4} alt="" />
            </div>
            <div className='slider_double_image'>
                <img src={image_Slider_5} alt="" />
                <img src={image_Slider_6} alt="" />
            </div> */}

            <button class="prev" >❮</button>
            <button class="next" >❯</button>
        </div>
        {/* End Slider */}

        {/* An khang luôn đủ thuốc */}
        <img src={thuc_pham_chuc_nang} alt="" id='an_khang'/>

        {/* Begin Deal */}
        <div className='body_container'>
            <div className='body_deal'>
                <img src={image_Deal} alt="" />
                {/* List thuốc */}
                <div className='body_deal_list'>
                    {Data.map((data) => {
                        return (
                        <div className='list_item' key={data.id}>
                            <div className='list_item_image'>
                                <img src={image_danasa} alt="" />
                                <div className='list_item_sales'>
                                    <AiFillGift className="gift"/>
                                    <div className="sale_desc">{data.sale}</div>
                                </div>
                            </div>
                            <div className="list_item_desc">
                                <div className="item_desc">{data.decription}</div>
                                <p className="item_name">{data.name}</p>
                                <div className="item_price">{data.price}</div>
                                <a href="#" className="list_item_buy">Chọn mua</a>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
        {/* End Deal */}
        
        <div className='sells_container'>
                <h1>SẢN PHẨM BÁN CHẠY</h1>    
                <div className='body_deal_list'>
                        {Topsells.map((topsell) => {
                            return (
                            <div className='list_item' key={topsell.id}>
                                <div className='list_item_image'>
                                    <img src={image_hauora} alt="" />
                                    <div className='list_item_sales'>
                                        <AiFillGift className="gift"/>
                                        <div className="sale_desc">{topsell.sale}</div>
                                    </div>
                                </div>
                                <div className="list_item_desc">
                                    <div className="item_desc">{topsell.decription}</div>
                                    <p className="item_name">{topsell.name}</p>
                                    <div className="item_price">{topsell.price}</div>
                                    <a href="#" className="list_item_buy">Chọn mua</a>
                                </div>
                            </div>)
                        })}
                </div>
        </div>            
        {/* Top sell */}
    </div>
  )
}

export default Body