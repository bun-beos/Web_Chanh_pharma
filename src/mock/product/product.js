const mockData = [
  {
    productId: "1",
    name: "Daily Queen hỗ trợ chống oxi hóa, bổ huyết",
    sku: "22ADKE194T",
    description: "Đầm dài phom dáng ôm, chi tiết trễ vai nữ tính ",
    price: "290,000đ/hộp",
    ogPrice: "",
    category: "dress",
    congdung: "  Hỗ trợ chống oxy hóa, giúp bổ huyết, hỗ trợ tăng tiết nội tiết tố nữ. Hỗ trợ làm đẹp da, giảm nguy cơ lão hóa da, giảm triệu chứng bốc hỏa, mất ngủ, đổ mồ hôi, suy giảm sinh lý, sạm da, nhăn da do thiếu hụt nội tiết tố.",
    doituong: "Phụ nữ trên 18 tuổi, phụ nữ tuổi tiền mãn kinh, mãn kinh có triệu chứng: bốc hỏa, mất ngủ, đổ mồ hôi, suy giảm sinhh lý, nám sạm da, nhăn da, da xấu, lão hóa sớm do thiếu hụt nội tiết tố nữ",
    thuonghieu: "CÔNG TY CỔ PHẦN DƯỢC PHẨM  QUỐC TẾ ECOSUN",
    nhasanxuat: "CÔNG TY TNHH DƯỢC PHẨM SMARD",
    noisanxuat: "Việt Nam",
    dangbaoche: "Viên nang mềm",
    cachdonggoi: "Hộp 12 vỉ x 5 viên",
    hansudung: "36 tháng kể từ ngày sản xuất",
    thumbImages: [
      "https://cf.shopee.vn/file/b7a99a6bc0a703f33eb4de0630f7a369",
      // "https://cdn.tgdd.vn/Products/Images/7027/246313/arginine-500-hop-60vien-thumb-1-1-600x600.jpg",
    ],
    detailImages: [
      "https://cf.shopee.vn/file/b7a99a6bc0a703f33eb4de0630f7a369",
      // "https://cdn.tgdd.vn/Products/Images/7027/246313/arginine-500-hop-60vien-thumb-1-1-600x600.jpg"
    ],
  },
  {
    productId: "6",
    name: "Bổ sung vitamin E, hỗ trợ tăng cường khả năng chống oxy hóa",
    sku: "22AOTE011K",
    description: "Ctt Beliver hỗ trợ giải độc, tăng cường chức năng gan",
    price: "230,000đ/hộp",
    ogPrice: "",
    category: "shirt",
    congdung: " Hỗ trợ giải độc gan, bảo vệ, tăng cường chức năng gan, hạ men gan.",
    doituong: "Người lớn và trẻ em",
    thuonghieu: "Dược Phẩm Quốc Tế CTT (Việt Nam)",
    nhasanxuat: "Dược Phẩm Hà Tây",
    noisanxuat: "Việt Nam",
    dangbaoche: "Viên nang mềm",
    cachdonggoi: "Hộp 12 vỉ x 5 viên",
    hansudung: "36 tháng kể từ ngày sản xuất",
    thumbImages: [
      "https://web-b-n-b-o.vercel.app/assets/image/member/skin-E-do%20copy.jpg",
    ],
    detailImages: [
      "https://web-b-n-b-o.vercel.app/assets/image/member/skin-E-do%20copy.jpg",
    ],
  },
  {
    productId: "2",
    name: "Growskin hạn chế lão hóa, làm đẹp da hộp 30 viên",
    sku: "21AQQE029R",
    description: "Quần suông kẻ, phom dáng basic, có khóa kéo và cúc cài.",
    price: "107,000đ/hộp",
    ogPrice: "",
    category: "pant",
    congdung: "  Giúp thanh nhiệt, giải độc, tăng sức đề kháng của cơ thể giúp giảm nguy cơ nhiễm khuẩn.",
    doituong: "Người lớn và trẻ em trên 6 tuổi",
    thuonghieu: "Sari Enesis (Indonesia)",
    nhasanxuat: "Sari Enesis",
    noisanxuat: "Sari Enesis",
    dangbaoche: " Bột sủi",
    cachdonggoi: " Hộp 6 gói x 7g",
    hansudung: "36 tháng kể từ ngày sản xuất",
    thumbImages: [
      // "https://cdn.tgdd.vn/Products/Images/7027/152757/bot-sui-thanh-nhiet-sensa-cools-6-goi-thumb-1-600x600.jpg"
      "https://cdn.tgdd.vn/Products/Images/7004/282943/growskin-han-che-lao-hoa-lam-dep-da-thumb-1-600x600.jpg",

    ],
    detailImages: [
      // "https://cdn.tgdd.vn/Products/Images/7027/152757/bot-sui-thanh-nhiet-sensa-cools-6-goi-thumb-1-600x600.jpg"
      "https://cdn.tgdd.vn/Products/Images/7004/282943/growskin-han-che-lao-hoa-lam-dep-da-thumb-1-600x600.jpg",
    ],
  },
  {
    productId: "3",
    name: "Acnacare hỗ trợ trị mụn, viêm tuyến bã nhờn hộp 30 viên",
    sku: "22SAWE001T",
    description: "Áo hai dây lụa cao cấp, cổ đổ, kết hợp cùng áo blazer.",
    price: "117,000đ/hộp",
    ogPrice: "",
    category: "shirt",
    congdung: "Thanh nhiệt, giải khát, mát gan, lợi tiểu, tăng cường sức đề kháng, giảm nhiệt miệng.",
    doituong: "Người lớn và trẻ em",
    thuonghieu: " Datino (Việt Nam)",
    nhasanxuat: "Công Ty Cổ Phần Thực Phẩm Dinh Dưỡng Đà Lạt",
    noisanxuat: "Việt Nam",
    dangbaoche: "Dạng bột",
    cachdonggoi: "Hộp 10 gói x 8g",
    hansudung: "Dạng bột",
    thumbImages: [
      // 
      "https://cdn.tgdd.vn/Products/Images/7004/130785/vien-uong-acnacare-30-vien-thumb-1-600x600.jpg",
    ],
    detailImages: [
      // "https://cdn.tgdd.vn/Products/Images/7027/291730/bot-thanh-nhiet-datino-ho-tro-thanh-nhiet-mat-gan-loi-tieu-hop-10-goi-thumb-1-1-600x600.jpg"
      "https://cdn.tgdd.vn/Products/Images/7004/130785/vien-uong-acnacare-30-vien-thumb-1-600x600.jpg",
    ],
  },
  {
    productId: "4",
    name: "Glutathione DK500 hỗ trợ trắng da, giảm nám hộp 30 viên",
    sku: "21AQDE072X",
    description:
      "Quần suông ống đứng, có chi tiết khuy cài và dập li dọc thân quần.",
    price: "339,000đ/hộp",
    ogPrice: "",
    category: "pant",
    congdung: "Hỗ trợ giải độc gan, bảo vệ gan và tăng cường chức năng gan.",
    doituong: " Người trưởng thành",
    thuonghieu: "TV.Pharm (Việt Nam)",
    nhasanxuat: "TV.Pharm",
    noisanxuat: "Việt Nam",
    dangbaoche: "Viên nang mềm",
    cachdonggoi: "Hộp 3 vỉ x 10 viên",
    hansudung: "Hộp 3 vỉ x 10 viên",
    thumbImages: [
      // "https://cdn.tgdd.vn/Products/Images/7027/152757/bot-sui-thanh-nhiet-sensa-cools-6-goi-thumb-1-600x600.jpg"
      "https://cdn.tgdd.vn/Products/Images/7004/243292/glutathion-h-2lox15v-mac-dinh-2.jpg",
    ],
    detailImages: [
      // "https://cdn.tgdd.vn/Products/Images/7027/212767/phariton-bo-gan-hop-30vien-thumb-1-1-600x600.jpg"
      "https://cdn.tgdd.vn/Products/Images/7004/243292/glutathion-h-2lox15v-mac-dinh-2.jpg",
    ],
  },
  {
    productId: "5",
    name: "Nước uống Collagen TKK làm đẹp da hộp 10 chai x 50ml",
    sku: "23SDKE085F",
    description:
      "Đầm tay tay ngắn, dáng thắt eo, phần chân váy xòe bồng, họa tiết hoa bắt mắt.",
    price: "711,000đ/hộp",
    ogPrice: "",
    category: "dress",
    congdung: "Hỗ trợ giải độc gan, tăng cường chức năng gan, hạn chế tác hại của rượu bia đối với gan.",
    doituong: "Trẻ trên 6 tuổi và người lớn",
    thuonghieu: "Dược Phẩm Trang Ly (Việt Nam)",
    nhasanxuat: "Dược Phẩm Trang Ly",
    noisanxuat: "Việt Nam",
    dangbaoche: "Viên nang",
    cachdonggoi: " Hộp 10 vỉ x 10 viên",
    hansudung: "3 năm kể từ ngày sản xuất.",
    thumbImages: [
      "https://cdn.tgdd.vn/Products/Images/7004/195141/nuoc-uong-collagen-glucosamin-toyo-10-lo-hop-mac-dinh-2.jpg",
    ],
    detailImages: [
      "https://cdn.tgdd.vn/Products/Images/7004/195141/nuoc-uong-collagen-glucosamin-toyo-10-lo-hop-mac-dinh-2.jpg",
    ],
  },
];

console.log(mockData.find(product => product.productId === "1"))
export default mockData;
