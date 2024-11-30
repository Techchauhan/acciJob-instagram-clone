import DesktopLeftNavigation from '@/components/Navigation/DesktopLeftNevigation';
import { Col, Row } from 'antd';


const DesktopScreen = () => (
    <Row>

         
    <Col span={20} push={4} className='bg-red-600'>
       <Row>

               {/* Main Content Area */}
                <Col flex="1 1 200px">Main Contnet Area</Col>
       
                 {/* Right Side Bar */}
                <Col flex="0 1 300px">Suggestoin Area</Col>
       </Row>
    </Col>


    {/* Side Left Drawer */}
    <Col span={4} pull={20} className='bg-blue-500'>
         
        <DesktopLeftNavigation/>

    </Col>
    
  </Row>
);

  export default DesktopScreen;