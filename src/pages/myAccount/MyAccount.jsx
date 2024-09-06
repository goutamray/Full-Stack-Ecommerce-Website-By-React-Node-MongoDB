


import { Link, useNavigate } from "react-router-dom";
import "./MyAccount.css"; 
import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TextField from '@mui/material/TextField';

import { FaCloudUploadAlt } from "react-icons/fa";

const MyAccount = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);

    const token = localStorage.getItem("token");

    if (token !== null && token !== undefined && token !== "") {
      setIsLogin(true);
    }else{
      navigate("/signIn"); 
    }

  }, []);

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <>
      <div className="account">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb">
                <h2 className="text-white"> MY ACCOUNT </h2>
              </div>
            </div>
          </div>
          </div>
      </div>

      <div className="account-dashboard">
        <div className="container">
         <div className="row">
               <div className="col">
                  <Box sx={{ width: '100%', typography: 'body1' }} className="custom-bg">
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="Edit Profile" value="1" />
                          <Tab label="Change Password" value="2" />
                        </TabList>
                      </Box>                     
                     <TabPanel value="1">
                        <form action="">
                          <div className="row mt-3">
                            <div className="col-md-3">  
                                    <div className="user-data">
                                      <div className="user-photo">
                                          <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2216" alt="" />
                                          <div className="overlay">
                                            <FaCloudUploadAlt />
                                            <input type="file" />
                                          </div>
                                      </div>
                                    </div>
                              </div>
                             <div className="col-md-7">
                                <div className="row">
                                <div className="col-md-6">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Name" 
                                            variant="outlined" 
                                          />
                                     </div>
                                    </div>
                                   <div className="col-md-6">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth  
                                            id="outlined-basic" 
                                            label="Email" 
                                            variant="outlined" 
                                          />
                                     </div>
                                   </div>
                                  </div>
                                <div className="row">
                                   <div className="col-md-12">
                                     <div className="form-group mt-2">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Phone" 
                                            variant="outlined" 
                                          />
                                     </div>
                                   </div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="save-btn"> Save </button>
                                 </div>
                             </div>
                            </div>
                        
                        </form>
                      </TabPanel>
                      <TabPanel value="2">
                      <form action="">
                          <div className="row mt-3">
                             <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-4">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Old Password" 
                                            variant="outlined" 
                                          />
                                     </div>
                                    </div>
                                   <div className="col-md-4">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth  
                                            id="outlined-basic" 
                                            label="Password" 
                                            variant="outlined" 
                                          />
                                     </div>
                                   </div>
                                   <div className="col-md-4">
                                     <div className="form-group mt-2">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Confirm Password" 
                                            variant="outlined" 
                                          />
                                     </div>
                                   </div>
                                  </div>
                                <div className="row">
                                    <button type="submit" className="save-btn"> Save </button>
                                 </div>
                             </div>
                            </div>
                        
                        </form>
                      </TabPanel>
                    </TabContext>
                  </Box>
               </div>
            </div>
     
        </div>
      </div>
    </>
  )
}

export default MyAccount
