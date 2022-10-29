import React, { useState } from 'react'
import { NavBar, List, Tag, Collapse } from 'antd-mobile'
import { useNavigate,} from 'react-router-dom';

function RoomList() {

  const navigate = useNavigate();
  let local = window.location.hostname
  //四个个部门
  const [InternalMedicineRoom, setInternalMedicineRoom] = useState([

    {
      "ID": null,
      "Room_ID": 1,
      "Category": "B",
      "visitor_number": "1",
      "patient_number": "2",
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 2,
      "Category": "B",
      "visitor_number": "2",
      "patient_number": "2",
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 3,
      "Category": "B",
      "visitor_number": "2",
      "patient_number": "3",
      "timestamp": null
    }

  ])

  const [SurgicalRoom, setSurgicalRoom] = useState([

    {
      "ID": null,
      "Room_ID": 1,
      "Category": "A",
      "visitor_number": 6,
      "patient_number": 1,
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 2,
      "Category": "Internal",
      "visitor_number": 2,
      "patient_number":3,
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 3,
      "Category": "Surgical",
      "visitor_number": 4,
      "patient_number": 5,
      "timestamp": null
    }

  ])
  const [PediatricsRoom,setPediatricsRoom]=useState([

    {
      "ID": null,
      "Room_ID": 1,
      "Category": "B",
      "visitor_number": 3,
      "patient_number": 4,
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 2,
      "Category": "B",
      "visitor_number": 2,
      "patient_number": 1,
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 3,
      "Category": "B",
      "visitor_number": 5,
      "patient_number": 2,
      "timestamp": null
    }

  ])

  const [EmergencyRoom,setEmergencyRoom]=useState([

    {
      "ID": null,
      "Room_ID": 1,
      "Category": "B",
      "visitor_number": 2,
      "patient_number": 1,
      "timestamp": null
    },
    {
      "ID": null,
      "Room_ID": 2,
      "Category": "B",
      "visitor_number": 4,
      "patient_number": 5,
      "timestamp": null
    }
  ])



  const findInternalMedicineRoom = () => {
    console.log("InternalMedicine")
    fetch(`http://${local}/departmentRoom/InternalMedicine`)
    .then(res => res.json())
      .then(res => {
        //返回包含每个row对象的数组
        console.log(res)
        setInternalMedicineRoom(res)

      })
  }

  const findSurgicalRoom = () => {
    console.log("Surgical")
    fetch(`http://${local}/departmentRoom/Surgical`)
    .then(res => res.json())
      .then(res => {
        //返回包含每个row对象的数组
        console.log(res)
        setSurgicalRoom(res)

      })
  }

  //拿到部门数据，渲染出列表，点击单个room，带着room id跳转到单个room

  const findPediatricsRoom= () => {
    console.log("Pediatrics")
    fetch(`http://${local}/departmentRoom/Pediatrics`)
    .then(res => res.json())
      .then(res => {
        //返回包含每个row对象的数组
        console.log(res)
        setPediatricsRoom(res)

      })
  }

  const findEmergencyRoom= () => {
    console.log("Emergency")
    fetch(`http://${local}/departmentRoom/Emergency`)
    .then(res => res.json())
      .then(res => {
        //返回包含每个row对象的数组
        console.log(res)
        setEmergencyRoom(res)

      })
  }

  return (
    <div>
      <NavBar
        backArrow={false}
      >
        RoomList
      </NavBar>
      <Collapse accordion>
        <Collapse.Panel key='1' title={'Internal Medicine'}
          onClick={findInternalMedicineRoom}
        >
          <List>
            {InternalMedicineRoom.map(room => (
              <List.Item
                key={room.ID}
                onClick={() => {
                  console.log(room.Room_ID)

                  navigate(`/room?id=${room.Room_ID}&department=${room.Category}`)
                }}

              >
                Room: {room.Room_ID}
                {room.patient_number + room.visitor_number <= 8 ? <Tag className='MyTag' color='success'>Empty</Tag>
                  :
                  <Tag className='MyTag' color='danger'>Full</Tag>}

              </List.Item>
            ))}
          </List>

        </Collapse.Panel>








        <Collapse.Panel key='2' title='Surgical'
          onClick={findSurgicalRoom}
        >

          <List>
            {SurgicalRoom.map(room => (
              <List.Item
                key={room.ID}
                onClick={() => {
                  console.log(room.Room_ID)

                  navigate(`/room?id=${room.Room_ID}&department=${room.Category}`)
                }}

              >
                Room: {room.Room_ID}
                {room.patient_number + room.visitor_number <= 8 ? <Tag className='MyTag' color='success'>Empty</Tag>
                  :
                  <Tag className='MyTag' color='danger'>Full</Tag>}

              </List.Item>
            ))}
          </List>


        </Collapse.Panel>

        <Collapse.Panel key='3' title='Pediatrics'
          onClick={findPediatricsRoom}
        >

        <List>
            {PediatricsRoom.map(room => (
              <List.Item
                key={room.ID}
                onClick={() => {
                  console.log(room.Room_ID)

                  navigate(`/room?id=${room.Room_ID}&department=${room.Category}`)
                }}

              >
                Room: {room.Room_ID}
                {room.patient_number + room.visitor_number <= 8 ? <Tag className='MyTag' color='success'>Empty</Tag>
                  :
                  <Tag className='MyTag' color='danger'>Full</Tag>}

              </List.Item>
            ))}
          </List>

        </Collapse.Panel>

        <Collapse.Panel key='4' title='Emergency'
        onClick={findEmergencyRoom}>
        <List>
            {EmergencyRoom.map(room => (
              <List.Item
                key={room.ID}
                onClick={() => {
                  console.log(room.Room_ID)

                  navigate(`/room?id=${room.Room_ID}&department=${room.Category}`)
                }}

              >
                Room: {room.Room_ID}
                {room.patient_number + room.visitor_number <= 8 ? <Tag className='MyTag' color='success'>Empty</Tag>
                  :
                  <Tag className='MyTag' color='danger'>Full</Tag>}

              </List.Item>
            ))}
          </List>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default RoomList