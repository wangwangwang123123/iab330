import React from 'react'
import { NavBar,Card, Divider, List, Tag, Collapse } from 'antd-mobile'
import ReactEcharts from "echarts-for-react"

import { useNavigate, } from 'react-router-dom';
function TotalAmount() {
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
      text: 'hospital visitors in the latest week',
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
        data: [23, 24, 18, 25, 27, 28, 25]
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
            value: 123,
          },
          {
            value: 123,
          },
          {
            value: 123,
          }, {
            value: 123,
          }, {
            value: 123,
          }
        ]
      }
    ]
  };


  const Navigation = useNavigate();

  const back = () => {
    Navigation("/home")
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
         123123123
        </Tag>
        </Card>

    </div>
  )
}

export default TotalAmount