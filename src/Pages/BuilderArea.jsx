import React, { useContext } from 'react'
// import Theme1 from '../Theme/Theme1/Theme1'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
    const { loading, handlePrint } = useContext(ResumeContext)

    return (
        <>
            {
                loading && <PropagateLoader id='spinner' color="#319795" size={30} />
            }
            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {/* <Theme1 componentRef={componentRef} themeData={themeData} /> */}
                    {props.theme}
                </div>
            </div>
            <div className="text-center">
                <Button className='m-5' onClick={handlePrint}>Print</Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea
