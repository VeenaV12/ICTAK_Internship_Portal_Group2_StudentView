import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Home1 from '../components/home1/Home1';
import Footer from '../components/common/footer/Footer';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import DiscussionForum from '../components/project dashboard/DiscussionForum';
import Reference from '../components/project dashboard/Reference';
import Wsubmit from '../components/project dashboard/Wsubmit';
import Wsubmitlink1 from '../components/project dashboard/Wsubmitlink1';
import Wsubmitlink2 from '../components/project dashboard/Wsubmitlink2';
import Wsubmitlink3 from '../components/project dashboard/Wsubmitlink3';
import Wsubmitlink4 from '../components/project dashboard/Wsubmitlink4';
import Wsubmitlink5 from '../components/project dashboard/Wsubmitlink5';
import Wsubmitlink6 from '../components/project dashboard/Wsubmitlink6';
// import Fsubmit from '../components/project dashboard/Fsubmit';
import Wsubmitform1 from '../components/project dashboard/Wsubmitform1';
// import Vivavoce from '../components/project dashboard/Vivavoce';
// import Header1 from '../components/common/header1/Header1';
import Main from '../components/main/Main';
import Main1 from '../components/main/Main1';
import Main2 from '../components/main/main2';
import OnlineCourses from '../components/allcourses/OnlineCourses';
import ProjectTopiclist from '../components/student dashboard/ProjectTopiclist';
import ProjectDescription from '../components/student dashboard/ProjectDescription';
import Topics from '../components/student dashboard/Topics';
import PrivateRoutes from '../components/PrivateRoutes';
import Wsubmitlink7 from '../components/project dashboard/Wsubmitlink7';
import Wsubmitlink8 from '../components/project dashboard/Wsubmitlink8';
import Wsubmitform2 from '../components/project dashboard/Wsubmitform2';
import Wsubmitform3 from '../components/project dashboard/Wsubmitform3';
import Wsubmitform4 from '../components/project dashboard/Wsubmitform4';
import Wsubmitform5 from '../components/project dashboard/Wsubmitform5';
import Wsubmitform6 from '../components/project dashboard/Wsubmitform6';
import Wsubmitform7 from '../components/project dashboard/Wsubmitform7';
import Wsubmitform8 from '../components/project dashboard/Wsubmitform8';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Main1 child={<Home />} />} />
        <Route path="/signup" element={<Main1 child={<Signup />} />} />
        <Route path="/login" element={<Main1 child={<Login />} />} />

        {/* Protected routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/student" element={<Main2 child={<ProjectTopiclist />} />} />
          <Route path="/description/:projectId" element={<Main2 child={<ProjectDescription />} />} />
          <Route path="/courses" element={<Main2 child={<Topics />} />} />
          <Route path="/project" element={<Main child={<Home1 />} />} />
          <Route path="/discussion" element={<Main child={<DiscussionForum />} />} />
          <Route path="/reference" element={<Main child={<Reference />} />} />
          <Route path="/wsubmit" element={<Main child={<Wsubmit />}/>} />
          <Route path="/wsubmitlink1" element={<Main child={<Wsubmitlink1 />}/>} />
          <Route path="/wsubmitlink2" element={<Main child={<Wsubmitlink2 />}/>}/>
          <Route path="/wsubmitlink3" element={<Main child={<Wsubmitlink3 />}/>} />
          <Route path="/wsubmitlink4" element={<Main child={<Wsubmitlink4 />}/>} />
          <Route path="/wsubmitlink5" element={<Main child={<Wsubmitlink5 />}/>} />
          <Route path="/wsubmitlink6" element={<Main child={<Wsubmitlink6 />}/>} />
          <Route path="/wsubmitlink7" element={<Main child={<Wsubmitlink7 />}/>} />
          <Route path="/wsubmitlink8" element={<Main child={<Wsubmitlink8 />}/>} />
          <Route path="/wsubmitform1" element={<Main child={<Wsubmitform1 />}/>} />
          <Route path="/wsubmitform2" element={<Main child={<Wsubmitform2 />}/>} />
          <Route path="/wsubmitform3" element={<Main child={<Wsubmitform3 />}/>} />
          <Route path="/wsubmitform4" element={<Main child={<Wsubmitform4 />}/>} />
          <Route path="/wsubmitform5" element={<Main child={<Wsubmitform5 />}/>} />
          <Route path="/wsubmitform6" element={<Main child={<Wsubmitform6 />}/>} />
          <Route path="/wsubmitform7" element={<Main child={<Wsubmitform7 />}/>} />
          <Route path="/wsubmitform8" element={<Main child={<Wsubmitform8 />}/>} />
          <Route path="/courses" element={<Main child={<OnlineCourses />} />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
