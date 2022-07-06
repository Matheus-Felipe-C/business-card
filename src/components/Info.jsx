import profile from '../../img/profile-picture.png'

export default function Info() {
    return (
        <div>
            <img className='img' src={profile} />
            <h1 className='name'>Matheus Felipe</h1>
            <h3 className='position'>Developer</h3>
            <a className='website' href='https://www.google.com' target='blank'>Random link</a>
            <button className='email'>E-mail</button>
            <button className='linkedIn'>LinkedIn</button>
        </div>
    )
}