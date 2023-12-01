import React from "react";
import read from "../Conponent/HomeImage/pg1.jpg";
import video from "../Conponent/HomeImage/vide.png";
// import thumb from "../Conponent/HomeImage/thum.jpg"
import rat from "../Conponent/HomeImage/thumb2.png";
import cat from "../Conponent/HomeImage/product1.png";
import cat2 from "../Conponent/HomeImage/product2.png";
import cat3 from "../Conponent/HomeImage/product3.png";
import sell from "../Conponent/HomeImage/selltag.png";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="container  mt-5">
          <div>
            <h6 style={{ color: "#8D5CF6" }}>For Better Future</h6>
            <h1 style={{ color: "#ffff" }}>
              HIGH QUALITY <br /> COURSES{" "}
            </h1>
            <h6 style={{ color: "#ffff" }}>
              {" "}
              Find the right instructor for you from over <br /> 10,000 teachers
            </h6>
            <button>Get Quote Now</button>
            <button>Learn More</button>
          </div>

          <div>
            <img src={read} className="rd" alt="" />
          </div>
        </div>

        {/* section two */}

        <div className="container  home mt-5">
          <div>
            {" "}
            <img src={video} className="vide" alt="" />
          </div>
          <div style={{ color: "#ffff" }}>
            <h3>Watch our Courses</h3>
            <br /> <br /> <br />
            <p>
              {" "}
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics
              <br />
              <br />
              <br />
              <button style={{ color: "#8D5CF6" }}> Learn More </button>
            </p>
          </div>
        </div>

        {/* section three */}
        <div className=" container boder boder-danger">
          <div className="row ">
            <div className="col-md-5  w-75">
              <hr />
              <h2 className="text-white">Our Popular Courses</h2>
              <p className="text-white">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
              <h6 className="text-info">Learn More</h6>
            </div>
          </div>
          {/* card sections */}
          <div className="col-md-6 text-white d-flex  p-5 gap-5 w-50  ">
            <div className="col-md-3 ">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              assumenda autem doloribus aliquam provident laboriosam, cumque
              delectus esse cum! Molestias.
            </div>
            <div className="col-md-3 ">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              assumenda autem doloribus aliquam provident laboriosam, cumque
              delectus esse cum! Molestias.
            </div>
            <div className="col-md-3 ">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              assumenda autem doloribus aliquam provident laboriosam, cumque
              delectus esse cum! Molestias.
            </div>
          </div>
        </div>

        {/* section four */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={rat}
                className="thumb2 "
                alt=""
                style={{ width: "400px", height: "500px" }}
              />
            </div>
          </div>
          <div className="col-md-5">
            <hr />
            <h2 style={{ color: "#ffffff" }}>Watch our Courses</h2>
            <br />
            <p style={{ color: "#ffffff" }}>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
            <br />
            <button className="primary-text-color">Learn More</button>
          </div>
        </div>

        {/* section five  */}

        <div
          className="container d-flex align-content-around flex-wrap"
          style={{ marginTop: "120px", color: "white" }}
        >
          <div className="row">
            <h6> Practice Advice</h6>
            <h2>Every Client Matters</h2>
            <p>
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <img src={sell} className="selltag position-absolute" alt="" />

              <div className="product">
                <img src={cat} className="product1  positon-relative " alt="" />
                <a href="#" id="log" className="fas fa-heart"></a>
                <a href="#" id="log2" className="fas fa-shopping-cart  "></a>
                <a href="#" id="log3" className="fas fa-eye "></a>

                <div className="card" style={{ with: "18%" }}>
                  <div className="card-body">
                    <a href="#"> Join Us</a>
                    <h5 className="card-title">Books Liberary </h5>
                    <p className="card-text">
                      We focus on ergonomics and meeting you where you work.
                      It's only a keystroke away.
                    </p>
                    <div className="d-flex">
                      <i className="fa fa-download" aria-hidden="true"></i>
                      <h6>15 sales</h6>
                    </div>
                    <div className="d-flex">
                      <h5>$16.48</h5>
                      <h5>$6.48</h5>
                    </div>
                    <a href="#" className="btn btn-primary fas fa-greater-than">
                      Learn More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={sell} className="selltag position-absolute" alt="" />

              <div className="product">
                <img
                  src={cat2}
                  className="product2  positon-relative "
                  alt=""
                />

                <a href="#" id="log11" className="fas fa-heart "></a>
                <a href="#" id="log21" className="fas fa-shopping-cart  "></a>
                <a href="#" id="log31" className="fas fa-eye "></a>

                <div className="card" style={{ with: "18%" }}>
                  <div className="card-body">
                    <a href="#"> Join Us</a>
                    <h5 className="card-title">Books Liberary </h5>
                    <p className="card-text">
                      We focus on ergonomics and meeting you where you work.
                      It's only a keystroke away.
                    </p>
                    <div className="d-flex">
                      <i className="fa fa-download" aria-hidden="true"></i>
                      <h6>15 sales</h6>
                    </div>
                    <div className="d-flex">
                      <h5>$16.48</h5>
                      <h5>$6.48</h5>
                    </div>
                    <a href="#" className="btn btn-primary fas fa-greater-than">
                      Learn More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={sell} className="selltag position-absolute" alt="" />

              <div className="product">
                <img
                  src={cat3}
                  className="product3  positon-relative "
                  alt=""
                />
                <a href="#" id="loga" className="fas fa-heart "></a>
                <a href="#" id="logb" className="fas fa-shopping-cart  "></a>
                <a href="#" id="logc" className="fas fa-eye "></a>

                <div className="card" style={{ with: "18%" }}>
                  <div className="card-body">
                    <a href="#"> Join Us</a>
                    <h5 className="card-title">Books Liberary </h5>
                    <p className="card-text">
                      We focus on ergonomics and meeting you where you work.
                      It's only a keystroke away.
                    </p>
                    <div className="d-flex">
                      <i className="fa fa-download" aria-hidden="true"></i>
                      <h6>15 sales</h6>
                    </div>
                    <div className="d-flex">
                      <h5>$16.48</h5>
                      <h5>$6.48</h5>
                    </div>
                    <a href="#" className="btn btn-primary fas fa-greater-than">
                      Learn More{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* four page  */}
      <div className="container-fluid mt-5 " style={{color:"#ffff"}}>
        <div className="row">
          <div>
            <h6>
            Practice Advice
            </h6>
            <h2>
            Get Quality Education
            </h2>
            <p>Problems trying to resolve the conflict between  <br />
the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">

          <figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>


</figure>

</div>
<div className="col-md-4">

<figure className="snip1192 hover">
  <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.</blockquote>
  <div className="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg" alt="sq-sample24"/>
    <h5>Max Conversion<span> LittleSnippets</span></h5>
  </div>
</figure>
</div>
<div className="col-md-4">

<figure class="snip1192">
  <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.</blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg" alt="sq-sample29"/>
    <h5>Eleanor Faint<span> LittleSnippets</span></h5>
  </div>
</figure>
</div>
         
        </div>
      </div>
    </>
  );
};

export default HomePage;

{
  /* <a href="#" className="fas fa-ad"> sell &#xf641;</a> */
}
