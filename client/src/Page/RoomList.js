import React from 'react'
import { NavBar, List, Tag, Collapse } from 'antd-mobile'
import { useNavigate, useLocation, } from 'react-router-dom';
function RoomList() {


  const Navigation = useNavigate();

  const back = () => {
    Navigation("/home")
  }
  return (
    <div>
      <NavBar
        onBack={back}
      >
        RoomList
      </NavBar>
      <Collapse accordion>
        <Collapse.Panel key='1' title='Internal Medicine'>

          {/*    <Collapse.Panel key='10' title='Pulmonology'> */}
          <div className='room'>
            <List.Item >Room1
              <Tag className='MyTag' color='success'>Success</Tag>
            </List.Item>

          </div>

          <div className='room'>
            <List.Item >Room2
              <Tag className='MyTag' color='success'>Empty</Tag>
            </List.Item>

          </div>

          <div className='room'>
            <List.Item >Room3
              <Tag className='MyTag' color='danger'>Full</Tag>
            </List.Item>

          </div>
          {/*     </Collapse.Panel> */}





          <div className='room'>
            <List.Item >Room4
              <Tag className='MyTag' color='success'>Success</Tag>
            </List.Item>

          </div>

          <div className='room'>
            <List.Item >Room5
              <Tag className='MyTag' color='success'>Empty</Tag>
            </List.Item>

          </div>

          <div className='room'>
            <List.Item >Room6
              <Tag className='MyTag' color='danger'>Full</Tag>
            </List.Item>

          </div>





        </Collapse.Panel>




        <Collapse.Panel key='2' title='Surgical'>




          <div className='room'>
            <List.Item >Room1
              <Tag className='MyTag' color='success'>Success</Tag>
            </List.Item>

          </div>

          <div className='room'>
            <List.Item >Room2
              <Tag className='MyTag' color='success'>Success</Tag>
            </List.Item>
          </div>

          <div className='room'>
            <List.Item >Room3
              <Tag className='MyTag' color='danger'>Empty</Tag>
            </List.Item>
          </div>
        </Collapse.Panel>

        <Collapse.Panel key='3' title='Pediatrics'>
        </Collapse.Panel>

        <Collapse.Panel key='4' title='Emergency'>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default RoomList