import React, { useEffect, useState } from 'react'
import { NavBar, Tag, Space, DatePicker, Button, Divider, List, Image, Card } from 'antd-mobile'

import "./Home.css"
import ReactEcharts from "echarts-for-react"

import { List as VirtualizedList, AutoSizer } from 'react-virtualized';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Room() {
  const Navigation = useNavigate();

  const back = () => {
    Navigation("/RoomList")
  }

  const now = new Date();
  //every two hours chart
 
  let localhost = window.location.hostname
  console.log(localhost)
  const [SearchParams] = useSearchParams();
  const id = SearchParams.get("id")===null? 1 : SearchParams.get("id") ;
  const department = SearchParams.get("department")===null? "Surgical" : SearchParams.get("department") ;
  console.log(id)
  console.log(department)


  const [visitorNum, setVisitorNum] = useState(0)

  const [patientNum, setpatientNum] = useState(0)

  useEffect(() => {

    fetch(`http://${localhost}:9000/getSingleRoom/${department}/${id}`)
      .then(res => res.json())
      .then(res => {
        //返回包含每个row对象的数组
        setpatientNum(res[0].patient_number)
        setVisitorNum(res[0].visitor_number)

      })
  }, [])


  const option = {
    title: {
      text: ``,
      left: 'center',
      align: 'right'
    },
    xAxis: {
      type: 'category',
      data: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24"],

    },
    yAxis: {
      type: 'value'
    },
    color: ['#4ecb73', '#28a6ff', '#cccccc', '#FF3333'],
    series: [
      {
        data: [3, 1, 4, 6, 1, 2, 8, 1, 2, 3, 5, 1],
        type: 'line'
      }
    ]
  }

  //date
  const [visible, setVisible] = useState(false);



  //user
  const users = [
    {
      id: '1',
      avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "JunHao Li",


    },
    {
      id: '2',
      avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "JunHao Li",
    

    },
    {
      id: '3',
      avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "JunHao Li",
   

    },
    {
      id: '1',
      avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "JunHao Li",
 

    }, {
      id: '1',
      avatar: "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "JunHao Li",
  

    },

  ]

  function rowRenderer({ index, key, style, }) {
    const item = users[index];
    return (<List.Item key={key} style={style} prefix={<Image src={item.avatar} style={{ borderRadius: 20 }} fit='cover' width={40} height={40} />} description={item.description}>
      {item.name}
    </List.Item>);

  }
  return (
    <div className='Home'>
      <NavBar
        onBack={back}
      >Number of room visits
      </NavBar>

      <div>
        <Tag color='primary' fill='outline'>
          Every two hours
        </Tag>
        <ReactEcharts
          className='ReactEcharts'
          option={option}
          style={{ height: '220px', width: '88%', margin: '0 auto', paddingBottom: '100' }}

        />
        <Space wrap>
          <>
            <Button onClick={() => {
              setVisible(true);
            }}>
              Choose the date
            </Button>
            <DatePicker visible={visible} onClose={() => {
              setVisible(false);
            }} defaultValue={now} max={now}

              onConfirm={(value) => {
                console.log(value)
              }}

            >
              {value => value === null || value === void 0 ? void 0 : value.toDateString()
              }

            </DatePicker>
          </>
        </Space>
      </div>


      <div>
        <List
          className='MyPatientList'
          header='Patients List'>
          <AutoSizer disableHeight>
            {({ width }) => (<VirtualizedList rowCount={users.length - 1} rowRenderer={rowRenderer} width={width} height={100} rowHeight={60} overscanRowCount={10} />)}
          </AutoSizer>

        </List>

      </div>
      <Divider />


      <div className='RealTime'>
        <Card title='Real-time number of people in the room:'>
          {patientNum+visitorNum}
        </Card>
        <Card title='Real-time patient count in the room:' >
          {patientNum}
        </Card>
        <Card title='Real-time number of visitors in the room:' >
         {visitorNum}
        </Card>

      </div>


    </div>
  )
}

export default Room