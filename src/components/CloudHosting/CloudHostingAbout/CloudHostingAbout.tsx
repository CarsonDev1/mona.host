import Link from "next/link";
import Image from "next/image";

function CloudHostingAbout() {
  return ( 
    <div className="ch-about">
      <div className="ch-about-list">
        <div className="ch-about-item sec-com">
          <div className="container">
            <div className="ch-about-ctn d-flex f-ctn">
              <div className="ch-about-col col col-6">
                <div className="ch-about-content">
                  <div className="logo">
                    <Link href={'/'} className="link">
                      <Image
                        src="./logo/logo-pri.svg"
                        width={209}
                        height={31}
                        alt="logo host"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title fw-700 txt-host sec-com-tt">XÓA BỎ RANH GIỚI <br /> GIỮA IT VÀ DOANH NGHIỆP</div>
                    <div className="desc">
                      <p className="desc-item">Doanh nghiệp muốn thực hiện digital transform nhưng :</p>
                      <div className="desc-check desc-item">
                        <span className="fw-700 txt-nhtq">Không biết</span> bắt đầu từ đâu?
                      </div>
                      <div className="desc-check desc-item">
                        <span className="fw-700 txt-nhtq">Bị bao vây</span> giữa ma trận giá và cấu hình
                      </div>
                      <div className="desc-check desc-item">
                        <span className="fw-700 txt-nhtq">Không có IT</span> để tư vấn, sửa lỗi và phát triển website
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ch-about-col col col-6">
                <div className="ch-about-img">
                  <div className="img">
                    <Image
                      src="/cloud-hosting/ch-about-img-01.png"
                      width={700}
                      height={427}
                      alt="ch-about-img-01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ch-about-item sec-com">
          <div className="container">
            <div className="ch-about-ctn d-flex f-ctn">
              <div className="ch-about-col col col-6">
                <div className="ch-about-content">
                  <div className="logo">
                    <Link href={'/'} className="link">
                      <Image
                        src="./logo/logo-pri.svg"
                        width={209}
                        height={31}
                        alt="logo host"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title fw-700 txt-host sec-com-tt">XÓA BỎ MA TRẬN <br /> GIÁ VÀ CẤU HÌNH</div>
                    <div className="desc">
                      <p className="desc-item">Bạn sẽ không cần quan tâm tới:</p>
                      <div className="desc-check desc-item">
                        Gói <span className="fw-700 txt-nhtq"> hosting SSD </span> hơn gói <span className="fw-700 txt-nhtq"> hosting HHD </span> như thế nào?
                      </div>
                      <div className="desc-check desc-item">
                        Tại sao <span className="fw-700 txt-nhtq"> cùng dung lượng </span> mà có gói lại <span className="fw-700 txt-nhtq"> rẻ hơn</span>?
                      </div>
                      <div className="desc-check desc-item">
                        Nên lấy <span className="fw-700 txt-nhtq"> bao nhiêu CPU, RAM</span>?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ch-about-col col col-6">
                <div className="ch-about-img">
                  <div className="img">
                    <Image
                      src="/cloud-hosting/ch-about-img-02.png"
                      width={700}
                      height={427}
                      alt="ch-about-img-01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ch-about-item sec-com">
          <div className="container">
            <div className="ch-about-ctn d-flex f-ctn">
              <div className="ch-about-col col col-6">
                <div className="ch-about-content">
                  <div className="logo">
                    <Link href={'/'} className="link">
                      <Image
                        src="./logo/logo-pri.svg"
                        width={209}
                        height={31}
                        alt="logo host"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="title fw-700 txt-host sec-com-tt">KHÔNG CẦN KIẾN THỨC IT, GIẢI PHÓNG SỨC MẠNH DOANH NGHIỆP</div>
                    <div className="desc">
                      <div className="desc-check desc-item">
                        Chúng tôi cam kết <span className="fw-700 txt-nhtq"> xử lý 100% vấn đề </span>.
                      </div>
                      <div className="desc-check desc-item">
                        Doanh nghiệp <span className="fw-700 txt-nhtq"> không tốn thời gian </span> liên hệ nhiều bên.
                      </div>
                      <div className="desc-check desc-item">
                        Dành thời gian <span className="fw-700 txt-nhtq"> phát triển kinh doanh </span> với hệ sinh thái The MONA.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ch-about-col col col-6">
                <div className="ch-about-img">
                  <div className="img">
                    <Image
                      src="/cloud-hosting/ch-about-img-03.png"
                      width={700}
                      height={427}
                      alt="ch-about-img-01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ch-why sec-com">
        <div className="container">
          <div className="ch-why-wrap col-10 mg-auto">
            <div className="title sec-com-tt fw-700">Tại sao MONA Cloud Hosting làm được điều đó?</div>
            <div className="list">
              <div className="item">
                <div className="icon">
                  <Image
                    src="./cloud-hosting/cloud-hosting-icon-01.svg"
                    width={65}
                    height={65}
                    alt="cloud-hosting-icon-01"
                  />
                </div>
                <div className="name fw-600">
                  High speed connection
                </div>
                <div className="desc">
                  Kết nối nội bộ 80Gbps, kết nối internet 20Gbps mang lại trải nghiệm liền mạch và mượt mà cho tất cả user.
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <Image
                    src="./cloud-hosting/cloud-hosting-icon-02.svg"
                    width={65}
                    height={65}
                    alt="cloud-hosting-icon-01"
                  />
                </div>
                <div className="name fw-600">
                  Built-in security
                </div>
                <div className="desc">
                  Hosting MONA được tích hợp wordpress firewall miễn phí, giảm đến 99% các cuộc tấn công thay đổi thông tin trên wordpress.
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <Image
                    src="./cloud-hosting/cloud-hosting-icon-03.svg"
                    width={65}
                    height={65}
                    alt="cloud-hosting-icon-01"
                  />
                </div>
                <div className="name fw-600">
                  Unique & simple management interface
                </div>
                <div className="desc">
                  Bạn có thể quản lý tất cả các dịch vụ của MONA Host trên một giao diện duy nhất, đơn giản và tiện lợi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default CloudHostingAbout;