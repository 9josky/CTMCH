import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const { name, email, comments } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || comments === "" || email === "") {
      toast.error("Please fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const emailData = {
        email,
        name,
        comments,
      };

      // try {
      //   await sendEmail(emailData);
      //   setFormData({
      //     name: "",
      //     email: "",
      //     comments: "",
      //   });

      //   toast.success("Message Sent !", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // } catch (error) {
      //   console.error("Error sending email:", error);
      //   toast.error("Error sending email. Please try again later.", {
      //     position: toast.POSITION.TOP_CENTER,
      //   });
      // }
    }
  };
  return (
    <div>
      <ToastContainer />
      <footer>
        <div className="block blackish">
          <div
            className="parallax"
            style={{ background: "url(images/one.jpg)" }}
          ></div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="widget">
                  <div className="about">
                    <img
                      src="images/CTM-Church-bg.png"
                      alt=""
                      height="200px"
                      width="200px"
                    />

                    <span>Christ The Truth Ministries Calvary House </span>

                    <p>Connecting People To Their Destiny In Christ</p>

                    <div className="contact">
                      <ul>
                        <li>
                          <span>
                            <i className="fa fa-phone"></i>Phone :
                          </span>{" "}
                          ( +1 301-262-2120 )
                        </li>

                        <li>
                          <span>
                            <i className="fa fa-envelope"></i>Email:
                          </span>{" "}
                          ctmcalvaryhousebowie@outlook.com
                        </li>

                        <li>
                          <span>
                            <i className="fa fa-home"></i>Address:
                          </span>{" "}
                          6900 Virginia Manor Rd. Beltville, MD 20705
                        </li>
                      </ul>
                    </div>

                    <ul className="social-media">
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" title="">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="widget">
                  <div className="widget-title">
                    <h4>Quick Message</h4>
                  </div>

                  <div className="quick-message">
                    <div id="message"></div>

                    <form onSubmit={onSubmit}>
                      <input
                        name="name"
                        className="half-field form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={onChange}
                        placeholder="Name"
                      />

                      <input
                        name="email"
                        className="half-field form-control"
                        type="text"
                        value={email}
                        onChange={onChange}
                        id="email"
                        placeholder="Email"
                      />

                      <textarea
                        name="comments"
                        className="form-control"
                        id="comments"
                        value={comments}
                        onChange={onChange}
                        placeholder="Description"
                      ></textarea>

                      <input
                        className="submit"
                        type="submit"
                        id="submit"
                        value="SUBMIT"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
