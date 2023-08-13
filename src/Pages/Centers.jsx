import React from "react";
import Stars from "../UI/Stars";
import doctorImg1 from "../Assets/Img/Home/partners1.svg";
import doctorImg2 from "../Assets/Img/Home/partners2.svg";
import doctorImg3 from "../Assets/Img/Home/partners3.svg";
import img1 from "../Assets/Img/Home/img1.svg";
import img2 from "../Assets/Img/Home/img2.svg";

import Card from "../UI/Card";

const Centers = (props) => {
  const centers = [
    {
      img: doctorImg1,
      spec: "The Saudi German Health Group is the largest private group providing health services in the Middle East and North Africa. The group is a multi-service health care company and a health care developer, not just a provider.      ",
      rate: 5,
      ad: {
        country: "Egypt",
        price: "50",
      },
    },
    {
      img: doctorImg2,
      spec: "The Magdi Yacoub Foundation for Cardiac Diseases and Research has been committed to building and developing the most modern heart care and treatment centers in Aswan Governorate in Egypt, to provide advanced and high-quality treatment to the disadvantaged and less fortunate groups",
      rate: 5,
      ad: {
        country: "Egypt",
        price: "50",
      },
    },
    {
      img: doctorImg3,
      spec: "The vision of Dar Al Fouad Hospital is to be the leader in providing health care services by adhering to the best international quality standards of the Joint Accreditation Committee for Egypt and the Middle East and to be recognized as the best hospital among patients, doctors, employees and shareholders.",
      rate: 5,
      ad: {
        country: "Egypt",
        price: "50",
      },
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="hospital__holder flex-wrap cards__holder justify-content-between d-flex">
          {centers.map((center) => {
            return (
              <Card className={"col-12"}>
                <a href="/hospitaldetails">
                  <div className="d-flex justify-content-between mt-5">
                    <img src={center.img} alt="" />
                    <div>
                      <div className="d-flex">
                        <h1 className="ad">
                          <img src={img2} alt="" className="whiteSvg" />{" "}
                          {center.ad.country}
                        </h1>
                        <h1 className="ad price px-2">{center.ad.price}$</h1>
                      </div>
                      <Stars rate={5} />
                    </div>
                  </div>
                  <p className="mt-4" style={{ fontSize: "20px" }}>
                    {center.spec}
                  </p>
                  <a
                    href="/hospitaldetails"
                    style={{
                      display: "block",
                      direction: "rtl",
                      fontSize: "14px",
                      color: "#4A94FC",
                    }}
                  >
                    View Profile
                  </a>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Centers;
