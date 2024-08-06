const Project = require('../Model/projectModel')
const User = require('../Model/User');



const getProject = async (req, res) => {
  try {
    const userId = req.user.userId; 
    
    
    const user = await User.findById(userId);

    if (!user || !user.project) {
      return res.status(404).json({ message: 'Project not found for this user' });
    }
    
    
    const projectId = user.project;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project details not found' });
    }
    
   
    if (project.pdf && project.pdf.path) {
      return res.status(200).json({ pdf: project.pdf.path });
    } else {
      return res.status(404).json({ message: 'PDF path not found for this project' });
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



const displayProject = async (req, res) => {
  try {
      const userId = req.user.userId;
    

      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      

      if (!user.batch) {
          return res.status(404).json({ message: 'Batch not found for this user' });
      }

      
      const batchName = user.batch;
      

     
      const projects = await Project.find({ batch: batchName });
    

      
      return res.status(200).json(projects);
  } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};



const selectProject = async (req, res) => {
  try {
      const studentId = req.user.userId; 
      const selectedProjectId = req.body.selectedProjectId; 
     

      // Update student's selected project
      const updatedStudent = await User.findByIdAndUpdate(
          studentId,
          {
              $set: {
                  project: selectedProjectId,
                  projectSelectionDate: Date.now()
              }
          },
          { new: true }
      );

      if (!updatedStudent) {
          return res.status(404).json({ message: 'Student not found' });
      }

      // Return updated student data with selected project
      res.status(200).json(updatedStudent);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};



const addProject = async(req,res)=>{
  try{
      const { name, batch, desc ,pdf} = req.body
  
      var newProject = new Project({projectName:name,batch,desc,pdf}) 
      await newProject.save()
      res.status(200).json('Uploaded')
  }
  catch(error){
      console.log(error)
      res.status(500).json({message:'Internal Error'})
  }
  }




module.exports = {getProject, displayProject, selectProject, addProject}

        

            




          

          