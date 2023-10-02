export default function Contact() {
  return (
    <div className="justify-content-center">
      <div className="contact card custom-bg " >
      <form className="needs-validation " noValidate>
        <div className="row g-3 text-start">
          <div className="col-sm-4">
            <label htmlFor="validationCustom01" className="form-label">First name</label>
            <input type="text" className="form-control" id="validationCustom01" required></input>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <div className="row g-3 text-start">
          <div className="col-sm-4">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input type="text" className="form-control" id="validationCustom02" required></input>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <div className="row g-3 text-start">
          <div className="col-sm-4 ">
            <label htmlFor="validationCustom03" className="form-label ">Email</label>
            <input type="email" className="form-control" id="validationCustom03" aria-describedby="emailHelp" required></input>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
          
        <div className="row g-3 text-start">
          <div className="col-sm-4">
              <label className="form-label">Tell me what is on your mind.</label>
              <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>

        <div className="row g-3 ">
          <div className="">
              <label></label>
          </div>
        </div>
        
        <div className="row g-3 ">
          <div className="col-sm-4">
            <button id="submit" className="btn btn-danger" type="submit">Submit</button>
          </div>
        </div>
      </form>
      </div>

      <script src="../assets/js/contact.js"></script>

    </div>
  );
}
