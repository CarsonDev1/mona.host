import Image from "next/image";

function ContactSales() {
  return ( 
    <div className="contact-sales sec-com txt-center bg-host-700">
      <div className="bg">
        <Image
          src="/cloud-hosting/contact-sales-bg.png"
          width={1728}
          height={457}
          alt="ch-about-img-01"
        />
      </div>
      <div className="container">
        <div className="box col-10 mg-auto">
          <div className="title sec-com-tt fw-700">
            Giải pháp dành cho doanh nghiệp
          </div>
          <div className="desc">
            Giải pháp đơn giản, tiện lợi và mạnh mẽ dành cho doanh nghiệp trong công cuộc <span className="fw-700 txt-nhtq">digital venture</span>
          </div>
          <div className="contact-sales-btn">
            <div className="btn-group btn-center">
              <a href="#" className="btn btn-host">
                <span className="txt">Contact sales</span>
              </a>
              <a href="#" className="btn">
                <span className="txt">Explore more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSales;