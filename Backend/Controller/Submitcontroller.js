
const Wsubmitdata = require('../Model/Wsubmitdata');
const Submitdata = require('../Model/Submitdata');

const User = require('../Model/User')




const getsubmission = async (req, res) => {
    try {
        // Access projectId from the token payload
        const studentId  = req.user.userId; 
        // console.log(projectId)

        const student = await User.findById(studentId)
        const projectId = student.project

        if (!projectId) {
            return res.status(400).json({ error: 'Project ID is required' });
        }

        // Query the database
        const data = await Wsubmitdata.find({
            $or: [
                { project1: projectId },
                { project2: projectId },
                { project3: projectId }
            ]
        });

        // Check if data is found
        if (!data.length) {
            return res.status(404).json({ error: 'No submissions found for this project' });
        }

        // Log and return data
        // console.log('Fetched data:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
    
};


const getsubmissiondata = async (req, res) => {
    try {
        // Access studentId from the token payload
        const studentId = req.user.userId;

        // Ensure studentId is available
        if (!studentId) {
            return res.status(400).json({ error: 'Student ID is required' });
        }

        // Query the database for submissions by studentId
        const data = await Submitdata.find({ student: studentId });

        // Check if data is found
        if (!data.length) {
            return res.status(404).json({ error: 'No submissions found for this student' });
        }

        // Log and return data
        // console.log('Fetched data:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({ error: 'Error fetching data' });
    }
};

const postsubmission = async (req, res) => {
    try {
        // Extract studentId and projectId from the token
       // Access projectId from the token payload
       const studentId  = req.user.userId; 
       console.log(studentId)

       const student = await User.findById(studentId)
       const projectId = student.project
        // Extract other fields from the request body
        const { online_text, submission_comments, submission_status, grading_status, week_name, grade, graded_by } = req.body;
  
        // Validate required fields
        if (!studentId || !projectId) {
            return res.status(400).json({ error: 'Student ID and Project ID are required from the token' });
        }
  
        // Create a new submission object
        const newSubmission = new Submitdata({
            week_name,
            submission_status,
            grading_status,
            online_text,
            submission_comments,
            grade,
            graded_by,
            project: projectId, // Using projectId from the token
            student: studentId   // Using studentId from the token
        });
  
        // Save the submission to the database
        const result = await newSubmission.save();
  
        // Send success response
        res.status(201).json({ message: 'Submission created successfully', data: result });
    } catch (error) {
        console.error('Error creating submission:', error);
        res.status(500).json({ error: 'Error creating submission' });
    }
};


// const postQuery = async (req, res) => {
//     try {
//         const studentId = req.params.student_id
//         const { query } = req.body
        
//         const student = await User.findById(studentId)

//         const projectId = student.project
      
//         const newPost = new Post({
//             student: studentId,
//             project: projectId,
//             query: query
//         })

//         await newPost.save()

//         res.status(201).json({ message: 'Query posted successfully', post: newPost })
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal Server Error' })
//     }
// }

module.exports = {getsubmission,postsubmission,getsubmissiondata};

