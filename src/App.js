import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { } from "react-bootstrap"

function App() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">HKanime</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shonen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Senin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sport</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://fr.web.img2.acsta.net/c_310_420/pictures/22/10/07/09/03/4457121.jpg" />
        <Card.Body>
          <Card.Title>BLUELOCK</Card.Title>
          <Card.Text>
          Coupe du monde 2018, l'équipe de football du Japon est éliminée en huitièmes de finale... 
          Ce nouvel échec incite l'Union japonaise de football à fonder 
          le "Blue Lock" : un centre de formation révolutionnaire rassemblant les 300 meilleurs attaquants lycéens du pays.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0N8MXbZUNp6WQZwgkVCk2Lerg-fzUZYPy-t945IjIIC7p6uJg" />
        <Card.Body>
          <Card.Title>Bleach: Thousand-Year Blood War</Card.Title>
          <Card.Text>
          La paix est soudainement rompue lorsque des sirènes d'alerte retentissent dans la Soul Society.
          Des habitants disparaissent sans laisser de trace et personne ne sait qui est derrière tout cela.          
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpvj_6b8aAxpYiqtmE2rQN3Pn3cNKWCmpUNoRPxDne5I28co53" />
        <Card.Body>
          <Card.Title>CHAINSAW MAN</Card.Title>
          <Card.Text>
          Denji est un adolescent qui vit avec son chien-démon-tronçonneuse, Pochita. À cause d’une énorme dette que son père a laissée derrière lui, le garçon se retrouve dans la misère la plus totale, cherchant avec Pochita à rembourser l’argent en récoltant des cadavres de démons pour le compte d’une organisation.
          Un jour, Denji est trahi et tué. Encore conscient, il passe un contrat avec Pochita et renaît sous le nom de Chainsaw Man, un homme au cœur de démon… 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default App;

