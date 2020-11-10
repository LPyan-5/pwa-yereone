import React from 'react';
import { useQuery } from '@apollo/client';
import GetServicesOperation from './getServices.gql';
import classes from './mainServices.css';
import { Link } from 'react-router-dom';


const paths = {
    0: "/magento-online-store-design-development"
}
const MainServices = () => {
    const { queries: { getServices} } = GetServicesOperation
    const { data } = useQuery(getServices);
    if(data) {
        console.log('data', data)
    }
    return (
        <div className={classes.mainServices}>
            <h3>
                <Link to="" className={classes.mainServicesLink} >Main Services</Link>
            </h3>
            <div className={classes.services}>
                {
                    data && data.services.items.map((service, index) => {
                        if(service.id === 1 || service.id === 3 || service.id ===5 || service.id === 10) {
                            return (
                                <Link to={paths[index]} key={index} className={classes.service}>
                                    <div >
                                        <img src={service.iconUrl} />
                                        <p>{service.title}</p>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
};

export default MainServices;