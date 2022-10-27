import React, { useEffect, useState } from 'react'
import { NavBar,Card,Tag } from 'antd-mobile'
import ReactEcharts from "echarts-for-react"
import { useNavigate, } from 'react-router-dom';
function TotalAmount() {
  let local = window.location.host
  const [InternalNum ,setInternalNum] = useState(10)
  const [SurgicalNum ,setSurgicalNum] = useState(10)
  const [PediatricsNum ,setPediatricsNum] = useState(10)
  const [EmergencyNum ,setEmergencyNum] = useState(10)
  const [totalNum ,setTotalNum] = useState(10)
  useEffect(() => {
    fetch(`http://${local}/departmentTotal`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
         setEmergencyNum(res[0].Emergency)
         setSurgicalNum(res[0].Surgical)
         setPediatricsNum(res[0].Pediatrics)
         setInternalNum(res[0].Internal)
      })
  }, [])

  useEffect(() => {
    fetch(`http://${local}/hospitalTotal`)
      .then(res => res.json())
      .then(res => {
        console.log(res[0].number)
        setTotalNum(res[0].number)
      })
  }, [])


  const option = {
    title: {
      text: 'hospital visitors in the latest week',
      left: 'center',
      align: 'right'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    },
    yAxis: {
      type: 'value'
    },
    color: ['#4ecb73', '#28a6ff', '#cccccc', '#FF3333'],
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }

  const option2 = {
    title: {
      text: 'department visitors in the latest week',
      left: 'center',
      align: 'right'
    },
    xAxis: {
      data: ["Emergecy", "Surgical", "Internal", "Pediatrics"]
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [EmergencyNum,SurgicalNum,InternalNum,PediatricsNum]
      }
    ]
  };


  const option3 = {
    title: {
      text: 'Real-time visitors on the floor',
      left: 'center',
      align: 'right',
      stillShowZeroSum: false,
      label: {
        show: false
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: EmergencyNum,
          },
          {
            value: SurgicalNum,
          },
          {
            value: InternalNum,
          }, {
            value: PediatricsNum,
          }
        ]
      }
    ]
  };


  const Navigation = useNavigate();

  const back = () => {
    Navigation("/RoomList")
  }
  return (
    <div>
      <NavBar
        onBack={back}
      >TotalAmount</NavBar>

      <ReactEcharts
        className='ReactEcharts'
        option={option}
        style={{ height: '200px', width: '88%', margin: '0 auto'}}

      />



      <ReactEcharts
        className='ReactEcharts'
        option={option2}
        style={{ height: '200px', width: '88%', margin: '0 auto'}}

      />


      <ReactEcharts
        className='ReactEcharts'
        option={option3}
        style={{ height: '180px', width: '88%', margin: '0 auto'}}
      />
       <Card title='Real-time people in whole hospital:'>
       <Tag color='#87d068' fill='outline'>
        {totalNum}
        </Tag>
        </Card>

    </div>
  )
}

export default TotalAmount