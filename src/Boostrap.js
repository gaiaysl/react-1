import { Button,Tab,Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Boostrap(){
    return(
    <div>
    <h3>boostrap komponenti</h3>
    <Button>Button</Button>
    <Button variant="success">Button</Button>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
     home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
       contect
      </Tab>
    </Tabs>
  </div>
  )
}