import { useNavigate } from "react-router-dom"

const About = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }

    return (
    <>
    <h3>INI ADALAH HALAMAN ABOUT</h3>
    <button onClick={handleClick}>Pergi ke Home</button>
    </>
    )
}

export default About