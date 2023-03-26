import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Informaciondetarjeta() {
    return (
        <article className='container-card ' style={{


            display: 'flex', width: '30%', height: '70vh', alignItems: 'center', position: 'relative', perspective: '700px', backgroundColor: '', justifyContent: 'center'
        }}>
            <div className="container-effect" style={{ display: 'flex', width: '400px', height: '450px', alignItems: 'center', position: 'relative', backgroundColor: '', justifyContent: 'center', transform: 'rotateY(8deg)', transformStyle: 'preserve-3d' }}>
                <Card className='card' style={{ width: '18rem', }}>
                    <Card.Img variant="top" style={{ height: '13rem' }} src="https://media.istockphoto.com/id/1193113996/es/foto/clientes-y-qu%C3%ADmicos-en-farmacias.jpg?s=612x612&w=0&k=20&c=nizL9mgpL1cDcGlTtWFKtcPGwcvejUED3tRnfdTGuVM=" />
                    <Card.Body className='text-center'>
                        <Card.Title>La necesidad de medicación en adultos mayores</Card.Title>

                        <a href='https://www.paho.org/hq/dmdocuments/2012/Medicamentos-span.pdf'>  <Button variant="primary">Haz clic aquí</Button></a>
                    </Card.Body>
                </Card>
            </div>
        </article>
    );
}

export default Informaciondetarjeta;