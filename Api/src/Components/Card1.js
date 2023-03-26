

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {

    return (
        <article className='container-card ' style={{


            display: 'flex', width: '30%', height: '70vh', alignItems: 'center', position: 'relative', perspective: '700px', justifyContent: 'center'
        }}>
            <div className="container-effect-card" style={{ display: 'flex', width: '400px', height: '450px', alignItems: 'center', position: 'relative', justifyContent: 'center', transform: 'rotateY(8deg)', transformStyle: 'preserve-3d' }}>
                <Card className='card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '13rem' }} src="https://media.istockphoto.com/id/1307436710/es/vector/ilustraci%C3%B3n-de-medicinas-y-farmacias.jpg?s=612x612&w=0&k=20&c=hOaQMO69fOrw4U0jDRmc0EEqqid-nqqjpB8cw2Kq6C8=" />
                    <Card.Body className='text-center'>
                        <Card.Title>Uso racional de los medicamentos</Card.Title>
                        <a href='https://www.minsal.cl/medicamentos/#:~:text=El%20acceso%20a%20medicamentos%2C%20de,las%20enfermedades%20y%20sus%20s%C3%ADntomas.' > <Button variant="primary">Haz clic aquí</Button></a>
                    </Card.Body>
                </Card>
            </div>
        </article>
    );
}

export default Tarjeta;