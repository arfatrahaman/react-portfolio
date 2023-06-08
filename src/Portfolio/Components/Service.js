import React from "react";

export const Service = () => {
  return (
    <section id="service-page">
      <div class="section-title">
        <h3>My Service</h3>
        <p class="deatil">This Kind Of Services I Provide To My Client</p>
      </div>
      <div class="service-page-wrapper">
        {/* <!-- Single Service Item --> */}
        <div class="single-sercice-item service-item-one">
          <div class="service-item-image">
            <img src="images/psd-file.png" alt="" class="service-img" />
          </div>
          <div class="service-item-headline">
            <h4>Psd To Html</h4>
          </div>
          <div class="service-item-deatils">
            <p>
              If you have a design in PSD i can convert this design into HTML. I
              will convert that into pixel-perfect and well documented with
              clean coding
            </p>
          </div>
        </div>
        {/* <!-- Single Service Item End --> */}
        {/* <!-- Single Service Item --> */}
        <div class="single-sercice-item service-item-two">
          <div class="service-item-image">
            <img src="images/figma.png" alt="" class="service-img" />
          </div>
          <div class="service-item-headline">
            <h4>Figma To Html</h4>
          </div>
          <div class="service-item-deatils">
            <p>
              Nowadays Figma is a top-rated design tool. If you design any
              website in Figma I can convert it into HTML. With clean coding and
              pixel perfect
            </p>
          </div>
        </div>
        {/* <!-- Single Service Item End --> */}
        {/* <!-- Single Service Item --> */}
        <div class="single-sercice-item service-item-three">
          <div class="service-item-image">
            <img src="images/wordpress.png" alt="" class="service-img" />
          </div>
          <div class="service-item-headline">
            <h4>Html To WordPress</h4>
          </div>
          <div class="service-item-deatils">
            <p>
              If you have any website in HTML and want to convert it into
              WordPress with the same design element by element. I can also help
              you with it.
            </p>
          </div>
        </div>
        {/* <!-- Single Service Item End --> */}
        {/* <!-- Single Service Item --> */}
        <div class="single-sercice-item service-item-four">
          <div class="service-item-image">
            <img src="images/wordpress.png" alt="" class="service-img" />
          </div>
          <div class="service-item-headline">
            <h4>WordPress Theme Customization</h4>
          </div>
          <div class="service-item-deatils">
            <p>
              WordPress is very popular for building websites. If you want a
              website in WordPress I can build it for you
            </p>
          </div>
        </div>
        {/* <!-- Single Service Item End --> */}
      </div>
    </section>
  );
};
