import React from 'react'
import InfoCard from '../infoCard'
import { useTranslation } from 'react-i18next'

function SetInfoData() {
  const {t} = useTranslation()
  const data = t("featuresPage.data", {returnObjects: true})
  return data.map(item => {
     return (<InfoCard
          title={item.name}
          desc={item.describe}
          footTitle={item.sponsor}
          item={item.items}
          icons={item.icons}
          icon={item.icon}
          id={item.id}
          />)
  })
}

export default SetInfoData