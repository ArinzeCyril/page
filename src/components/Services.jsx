import { serviceList } from '../data/serviceList'
import MyService from './MyServices'

export default function Services() {
  const allServices = serviceList.map((Service, i) => {
    return(
      <MyService 
        key={serviceList[i].id}
        name={serviceList[i].name}
        description={serviceList[i].description}
        availability={serviceList[i].availability}
      />
    )
  })

  return (
    <div className='main'>
      <h1>My Services</h1>
      <div className='cards'>
        {allServices}
      </div>
    </div>
  )
}
