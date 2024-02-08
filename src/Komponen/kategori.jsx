import { useParams } from "react-router-dom"

const Kategori = () => {
    const params = useParams();
    return <h3>INI Kategori {params.name}</h3>
}

export default Kategori