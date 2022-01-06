import { useForm } from "react-hook-form";

import Layout from "../components/Layout/Layout";
import InstagramOne from "../components/Sections/Instagram/InstagramOne";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import ContactInfoItem from "../components/Pages/Contact/ContactInfoItem";
import contactData from "../data/pages/contact.json";

export default function () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Layout title="Contact us">
      <Breadcrumb title="Contact us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Contact us" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contact info</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Get in touch</h3>
              <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className="input-error">Please provide a name</span>
                    )}
                  </div>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <span className="input-error">
                        Please provide an email
                      </span>
                    )}
                  </div>
                  <div className="input-validator">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <button className="btn -dark">SEND MESSAGE</button>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div id="map">
                <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.6379915726784!2d-105.07881048459934!3d40.5716708793474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694aff2f5ad5d7%3A0x23db953d20ca72ce!2s1200%20S%20College%20Ave%20Ste%20309%2C%20Fort%20Collins%2C%20CO%2080524!5e0!3m2!1sen!2sus!4v1641429789500!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstagramOne />
    </Layout>
  );
}
