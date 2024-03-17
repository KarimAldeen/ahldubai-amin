import React from 'react'
import DoctorCard from '../../Components/Doctors/DoctorCard'
import { Select, Spin } from 'antd'
import { MultyPageData } from '../../Data'
import { useTranslation } from 'react-i18next'
import { useGetDoctors } from '../../api/Doctors'

const Doctors = () => {
  const [t] = useTranslation()
  const SelectOptions = [
    {
      value: '1',
      label: 'Not Identified',
    },
    {
      value: '2',
      label: 'Closed',
    },
    {
      value: '3',
      label: 'Communicated',
    },
    {
      value: '4',
      label: 'Identified',
    },
    {
      value: '5',
      label: 'Resolved',
    },
    {
      value: '6',
      label: 'Cancelled',
    },
  ]
  const {data, isLoading} = useGetDoctors()

  if(isLoading){
    return <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" }}>
    <Spin/>
  </div>
  }
  return (
    <div className='Doctors'>
      <div className='Hero_Doctors'>
        <div>
          <h1>{t("Doctors")}</h1>
          <div>
            <h6>{t("Home")} {`>`} </h6>
            <h5>{t("Doctors")}</h5>
          </div>
        </div>
      </div>
      <div className='Filter'>
        <h1>
          {t("Our Doctors")}
        </h1>
        <div>
          <Select
            showSearch
            style={{ width: 250 }}
            placeholder={t(`Search For Your Best Doctor`)}
            optionFilterProp="children"
            filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
            filterSort={(optionA: any, optionB: any) =>
              (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={SelectOptions}
          />
        </div>
      </div>
      <div className='Docor_Cards'>
        {data?.map((item: any, index: any) => {
          return (
            <DoctorCard data={item} />
          )
        })}
      </div>
    </div>

  )
}

export default Doctors