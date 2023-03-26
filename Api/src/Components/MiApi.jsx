
import { useEffect, useState } from "react"

const TurnosFarmacias = (props) => {

    const [farmacias, setFarmacias] = useState([])
    const [filtrarFarmarcias, setFarmaciasFiltradas] = useState([])

    const [search, setSearch] = useState()

    const consultarTurnosFarmacias = async () => {
        const res = await fetch("https://midas.minsal.cl/farmacia_v2/WS/getLocales.php")
        const farmaciasdeturnos = await res.json()
        setFarmacias(farmaciasdeturnos)

    }

    useEffect(() => { consultarTurnosFarmacias(); }, [])
    useEffect(() => { buscarUsuarios(); }, [search])

    //en el condicional tengo un problema de sintaxis, intentesolucionarlo pero no pude
    const buscarUsuarios = () => {
        const filtrarFarmarcias = farmacias.filter(farmacia => {

            if (
                farmacia.comuna_nombre.toLowerCase().includes(search.toLowerCase()
                    ||
                    farmacia.local_nombre.includes())
            )
                return farmacia
        })
        setFarmaciasFiltradas(filtrarFarmarcias)
        console.log(filtrarFarmarcias)
    }

    const listItems = filtrarFarmarcias.map(farmacia => <ul><li key={farmacia.id}>"{farmacia.fecha
    }" - "{farmacia.comuna_nombre}" - "{farmacia.local_direccion
        }" - "{farmacia.local_nombre}" - "Apertura: {farmacia.funcionamiento_hora_apertura
        } - {farmacia.funcionamiento_hora_cierre
        }"</li></ul>);

    const title = props.title

    return (
        <div className="App">
            <h2 className="subtitulo">{title}</h2>
            <form className="formulario" >
                <input className="form-control" placeholder="Escribe la comuna" type="text" onChange={(e) => { setSearch(e.target.value); buscarUsuarios() }} />
            </form>
            <div>
                {listItems}
            </div>
        </div >
    )
}

export default TurnosFarmacias