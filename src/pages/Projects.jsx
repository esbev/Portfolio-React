export default function Projects() {
  return (
    <div className="container">
      <div className="contact card custom-bg">
        <h2 className="project-header">Collaborative Projects</h2>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4 col-md-3 col-sm-2">
            <span className="project-name">Restaurant Express</span>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <span className="project-name">Wheels of Date Night</span>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <span className="project-name">Does not exist yet</span>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4 col-md-3 col-sm-2">
            <a href="https://restaurant-express-c9c955225096.herokuapp.com/"><img className="project-img" src="../src/assets/images/img1.jpg"></img></a>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
            <a href="https://esbev.github.io/project-1-collab/"><img className="project-img" src="../src/assets/images/img2.jpg"></img></a>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
            <a href="#"><img className="project-img" src="../src/assets/images/img3.jpg"></img></a>
          </div>
        </div>
      </div>

      <div className="contact card custom-bg">
        <h3 className="project-header">Personal Projects</h3>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4 col-md-3 col-sm-2">
            <span className="project-name">Weather Outlook</span>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <span className="project-name">Note Taker</span>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <span className="project-name">Needs a name</span>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-4 col-md-3 col-sm-2">
          <a href="https://esbev.github.io/weather-outlook/"><img className="project-img" src="../src/assets/images/img4.jpg"></img></a>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <a href="https://git.heroku.com/note-taker-esbev.git"><img className="project-img" src="../src/assets/images/img5.jpg"></img></a>
          </div>
          <div className="col-4 col-md-3 col-sm-2">
          <a href=""><img className="project-img" src="../src/assets/images/img6.jpg"></img></a>
          </div>
        </div>
      </div>



    </div>
  );
}
