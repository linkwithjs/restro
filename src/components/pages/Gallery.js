import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Gdata from "../GalleryData";
import BreadCrumb from "../common/BreadCrumb";

function Gallery() {
  return (
    <>
      <BreadCrumb name="Gallery" description="Gallery Page" />
      <SRLWrapper>
        <div className="my-5">
          <h2 className="text-center">Our Gallery</h2>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Gdata.map((curElem) => {
                  return (
                    <div className="col-md-4 col-10 mx-auto">
                      <div className="card">
                        <a href={curElem.imgsrc}>
                          <img
                            src={curElem.imgsrc}
                            className="card-img-top"
                            alt={curElem.title}
                            srl_gallery_image="true"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default Gallery;
