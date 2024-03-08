import { DatabaseFilled } from '@ant-design/icons'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const First = () => {
  const [t] = useTranslation()

  return (
    <div className='First'>
      <h5>{t("Oral Health")}</h5>
      <h1>{t("Shed light on prevalent heart conditions, such as hypertension and cholesterol issues")}</h1>
      <h6><FaCalendarAlt /> {t("December 2, | 2023 Aurora Health")}</h6>
      <img src="../Blog/First.png" alt="" />
      <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make passages type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Letraset sheets containing Lorem Ipsum passages,")}</p>
    </div>
  )
}

export default First
