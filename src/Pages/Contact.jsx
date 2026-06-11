import React from 'react'

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault()
    alert("Message Sent Successfully")
  }

  return (
    <>
      <h1 className="text-center fw-bold my-3">Contact ShopSphere</h1>
      <p className="text-center text-secondary mb-5">We'd love to hear from you.</p>

      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="card shadow p-4 h-100">
              <h2 className="mb-4">Get In Touch</h2>
              <p>📞 +91 8977696987</p>
              <p>📧 support@ShopSphere.com</p>
              <p>📍Hyderabad, India</p>
              <p className="text-secondary mt-4">Our team is available from Monday to Saturday.</p>
              <div className="rounded mt-4 overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.2258487109!2d78.07837740756365!3d17.41207789404689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1780992149381!5m2!1sen!2sin" width="100%" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card shadow p-4 h-100">
              <h2 className="mb-4">Send Message</h2>

              <form onSubmit={handleSubmit} action="">
                <div className="mb-3">
                  <label className='fw-bold' htmlFor="">Name</label>
                  <input type="text" name="" id="" className='form-control' required />
                </div>

                <div className="mb-3">
                  <label className='fw-bold' htmlFor="">Email</label>
                  <input type="email" name="" id="" className='form-control' required />
                </div>

                <div className="mb-3">
                  <label className='fw-bold' htmlFor="">Subject</label>
                  <input type="text" name="" id="" className='form-control' required />
                </div>

                <div className="mb-3">
                  <label className='fw-bold' htmlFor="">Message</label>
                  <textarea name="" id="" className='form-control' rows="5" required></textarea>
                </div>

                <button type='submit' className="btn btn-success mt-3 w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
