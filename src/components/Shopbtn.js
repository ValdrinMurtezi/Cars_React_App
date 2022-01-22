import react, { useState } from "react";
// import Modal from "./Modal";
import "../styles/modal.css";

const Shopbtn = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="shopbtn">
        <button className="shop" onClick={toggleModal}>
          SHOP NOW
        </button>
      </div>

      {modal && (
        <div className="openmodal">
          <div className="overlay" onClick={toggleModal}></div>
          {/* <div className="modalcontent"> */}
          <section class="order-form my-4 mx-4">
            <div class="container pt-4">
              <div class="row ">
                <div class="col-12">
                  <h1>Fast & safely </h1>
                </div>
                <div class="col-12 inputs">
                  <div class="row mx-4">
                    <div class="col-12 mb-2">
                      <label class="order-form-label">Name</label>
                    </div>
                    <div class="col-12 col-sm-6">
                      <input class="order-form-input" placeholder="First" />
                    </div>
                    <div class="col-12 col-sm-6 mt-2 mt-sm-0">
                      <input class="order-form-input" placeholder="Last" />
                    </div>
                  </div>

                  <div class="row mt-3 mx-4">
                    <div class="col-12">
                      <label class="order-form-label">E-Mail</label>
                    </div>
                    <div class="col-12">
                      <input
                        class="order-form-email"
                        placeholder="example@hotmail.com"
                      />
                    </div>
                  </div>

                  <div class="row mt-3 mx-4">
                    <div class="col-12">
                      <label class="order-form-label">Adress</label>
                    </div>
                    <div class="col-12">
                      <input
                        class="order-form-input"
                        placeholder="Street Address"
                      />
                    </div>

                    <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                      <input class="order-form-input" placeholder="City" />
                    </div>
                    <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                      <input class="order-form-input" placeholder="Region" />
                    </div>
                    <div class="col-12 col-sm-6 mt-2 pr-sm-2">
                      <input
                        class="order-form-input"
                        placeholder="Postal / Zip Code"
                      />
                    </div>
                    <div class="col-12 col-sm-6 mt-2 pl-sm-0">
                      <input class="order-form-input" placeholder="Country" />
                    </div>
                  </div>

                  <div class="row paymentform mt-3 mx-4">
                    <div class="col-12 payment">
                      <span>Choose payment method</span>
                      <div className="method">
                        <div class="form-check radio">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            <img
                              src={require("../imgs/visa.png")}
                              alt=""
                              width={"75px"}
                              height={"30px"}
                            />
                          </label>
                        </div>
                        <div class="form-check radio">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            <img
                              src={require("../imgs/mastercard.png")}
                              alt=""
                              width={"75px"}
                              height={"30px"}
                            />
                          </label>
                        </div>
                        <div class="form-check radio">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault3"
                          >
                            <img
                              src={require("../imgs/maestro.png")}
                              alt=""
                              width={"75px"}
                              height={"30px"}
                            />
                          </label>
                        </div>
                        <div class="form-check radio">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault4"
                          >
                            <img
                              src={require("../imgs/paypal.png")}
                              alt=""
                              width={"75px"}
                              height={"30px"}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3 mx-4">
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="validation"
                          id="validation"
                          value="1"
                        />
                        <label for="validation" class="form-check-label">
                          I know what I need to know
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-3">
                    <div class="col-12">
                      <button
                        type="button"
                        id="btnSubmit"
                        class="btn btn-dark d-block mx-auto btn-submit"
                      >
                        BUY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button className="closebtn" onClick={toggleModal}>
            X
          </button>
          {/* </div> */}
        </div>
      )}
    </>
  );
};
//   return (

//     // <div className="shopbtn">
//     //   <button className="shop">SHOP NOW</button>
//     //   <Modal />
//     // </div>
//   );
// };

export default Shopbtn;
