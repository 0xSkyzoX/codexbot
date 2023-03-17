import React from 'react'
import data from './data'
import InfoCard from '../infoCard'

function SetInfoData() {
  return data.map(item => {
     return (<InfoCard
          title={item.title}
          desc={item.desc}
          footTitle={item.footTitle}
          item={item.items}
          icons={item.icons}
          icon={item.icon}
          id={item.id}
          />)
  })
}

export default SetInfoData