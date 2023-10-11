import React from 'react'

import { VerticalTimeline, 
  VerticalTimelineElement } from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"
import { School } from '@mui/icons-material'
import { Work } from '@mui/icons-material'

function Timeline() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#474c55'>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
         date='2013-2014'
         iconStyle={{background: "#474c55", color: "#fff"}}
         icon={<School/>}>
          <h3 className='vertical-timeline-element-title'>Bulacan Central Christian School - Bulakan, Bulacan</h3>
          <p>Elementary Diploma</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
        className='vertical-timeline-element--education'
         date='2015-2016'
         iconStyle={{background: "#474c55", color: "#fff"}}
         icon={<School/>}>
          <h3 className='vertical-timeline-element-title'>Alternative Learning System - Bulakan, Bulacan</h3>
          <p>High School Diploma</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
        className='vertical-timeline-element--education'
         date='2017-2021'
         iconStyle={{background: "#474c55", color: "#fff"}}
         icon={<School/>}>
          <h3 className='vertical-timeline-element-title'>Bulacan State University</h3>
          <p>Associate in Computer Technology (2017-2019)</p>
          <p>Bachelor of Science in Information Technology (2019-2021)</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement 
        className='vertical-timeline-element--work'
         date='2017-2021'
         iconStyle={{background: "#474c55", color: "#fff"}}
         icon={<Work/>}>
          <h3 className='vertical-timeline-element-title'>Tsukiden Global Solutions Inc.</h3>
          <p>Software Design Engineer (2021-Present)</p>
         </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Timeline