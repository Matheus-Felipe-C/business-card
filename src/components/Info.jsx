import profile from "../../img/profile-picture.png";

export default function Info() {
  return (
    <div>
      <img className="img" src={profile} />
      <h1 className="name text">Matheus Felipe</h1>
      <h3 className="position text">Developer</h3>
      <a className="website text" href="https://www.google.com" target="blank">
        Random link
      </a>
      <div className="btn-container">
        <button className="email btn">
          <i class="fa-solid fa-envelope"></i> E-mail
        </button>
        <button className="linkedin btn">
        <i class="fa-brands fa-linkedin"></i> LinkedIn</button>
      </div>
    </div>
  );
}
