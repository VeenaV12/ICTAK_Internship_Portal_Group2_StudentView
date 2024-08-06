import React, { useEffect, useState } from 'react';
import {Box,Typography,Card,CardContent,Link,Button,TextField,List,ListItem,ListItemAvatar,Avatar,ListItemText,Dialog,DialogTitle,DialogContent,DialogActions} from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PersonIcon from '@mui/icons-material/Person'
import Breadcrumbs from '../Breadcrumbs';
import axios from "axios";

export default function DiscussionForum() {
  const [isOpenCommentsForPost, setIsOpenCommentsForPost] = useState({});
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState('');
  const [data, setData] = useState([]);
  const [loggedInStudentId, setLoggedInStudentId] = useState('');
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostContent, setEditedPostContent] = useState('');
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/api/forum/getid', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setLoggedInStudentId(res.data.userId);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/api/forum/getpost', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleToggleComments = (postId) => {
    setIsOpenCommentsForPost(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  const handlePost = () => {
    setIsPostOpen(!isPostOpen); // Toggle the state
  };

  const handleNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleNewPostSubmit = () => {
    if (editingPostId) {
      // Update existing post
      axios.put(`http://localhost:3000/api/forum/updatepost/${editingPostId}`, {
        query: editedPostContent
      })
        .then((res) => {
          console.log('Post updated successfully:', res.data);
          fetchPosts(); // Refresh posts after editing
          setEditingPostId(null); // Clear editing state
          setEditedPostContent(''); // Clear edited content
        })
        .catch((error) => {
          console.error('Error updating post:', error);
        });
    } else {
      // Create new post
      axios.post(`http://localhost:3000/api/forum/postquery/${loggedInStudentId}`, {
        query: newPost
      })
        .then((res) => {
          console.log('New post added successfully:', res.data);
          fetchPosts(); // Fetch posts again to update UI with new post
          setNewPost(''); // Clear the new post input field
          setIsPostOpen(false); // Close the new post form
        })
        .catch((error) => {
          console.error('Error adding new post:', error);
        });
    }
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleNewCommentSubmit = (postId) => {
    const token = localStorage.getItem('token');
    const commentToSend = newComment;
    
    axios.post(`http://localhost:3000/api/forum/postreply/${postId}`, {
      reply: commentToSend
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log('New comment added successfully:', res.data);
      fetchPosts(); // Refresh posts after adding a reply
      setNewComment(''); // Clear the new comment field
    })
    .catch((error) => {
      console.error('Error adding new comment:', error);
    });
  };

  const canEditOrDeletePost = (postOwnerId) => {
    return loggedInStudentId === postOwnerId;
  };

  const handleEditPost = (post) => {
    setEditingPostId(post._id);
    setEditedPostContent(post.query);
  };

  const handleEditPostSubmit = (post) => {
    axios.patch(`http://localhost:3000/api/forum/updatepost/${post._id}`, {
      query: editedPostContent
    })
      .then((res) => {
        console.log('Post updated successfully:', res.data);
        fetchPosts(); // Refresh posts after editing
        setEditingPostId(null); // Clear editing state
        setEditedPostContent(''); // Clear edited content
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  };

  const handleDeleteConfirmationOpen = (post) => {
    setPostToDelete(post);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
    setPostToDelete(null);
  };

  const handleDeletePost = () => {
    if (postToDelete) {
      axios.delete(`http://localhost:3000/api/forum/deletepost/${postToDelete._id}`)
        .then((res) => {
          console.log('Post deleted successfully:', res.data);
          fetchPosts(); // Refresh posts after deletion
          setDeleteConfirmationOpen(false); // Close the confirmation dialog
          setPostToDelete(null); // Clear the post to delete
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  };

  return (
    <>
      <Breadcrumbs />
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

          <Box gridColumn="span 12">
            <Typography style={{ marginTop: "10%", textAlign: "center" ,color:"#00a6bb"}}variant="h4" gutterBottom>
              Ask.Discuss.Find
              <br /><hr />
            </Typography>
          </Box>

          <Box gridColumn="span 12">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link href="#" underline="none" color={'orange'}style={{ fontSize: '20px' }} onClick={handlePost}>Add New Post Here!</Link>
            </Box>
            <Box marginTop="1%" sx={{ width: "80%", marginLeft: "10%" }}>
              {isPostOpen && (
                <div style={{ background: "white" }}>
                  <TextField
                    fullWidth
                    id="new-post"
                    label="Add a Post"
                    multiline
                    rows={2}
                    variant="outlined"
                    value={newPost}
                    onChange={handleNewPostChange}
                  />
                </div>
              )}
            </Box>
          </Box>

          <Box gridColumn="span 12" sx={{ marginLeft: "10%" }}>
          {isPostOpen && (
          <Button onClick={handleNewPostSubmit} variant="contained" disabled={!newPost.trim()}>
                    Submit
                  </Button>)}
          </Box>

          <Box gridColumn="span 12" sx={{ marginLeft: "10%" }}>
            <Typography align='left'fontSize="25px">
              Posts
            </Typography>
          </Box>

          <Box gridColumn="span 12" sx={{ width: "80%", marginLeft: "10%" }}>
            {data.map((post) => (
              <Box key={post._id} mb={2}>
                <Card>
                  <CardContent>
                    {editingPostId === post._id ? (
                      <>
                        <TextField
                          fullWidth
                          id={`edit-post-${post._id}`}
                          label="Edit Post"
                          multiline
                          rows={2}
                          variant="outlined"
                          value={editedPostContent}
                          onChange={(e) => setEditedPostContent(e.target.value)}
                        />

                        <Button onClick={() => handleEditPostSubmit(post)} variant="contained">
                          Submit
                        </Button>
                      </>
                    ) : (
                      <>
                        <Typography align='start' color="#00a6bb">
                          {post.student.name}
                        </Typography>
                        <Typography variant='p' align='start'>
                          <br />
                          {post.query}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align='start'>
                          {new Date(post.postedAt).toLocaleDateString()}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      p: 2,
                      justifyContent: 'start',
                      typography: 'body1',
                      '& > :not(style) ~ :not(style)': {
                        ml: 2,
                      },
                    }}
                  >
                    <Link
                      href="#"
                      underline="none"
                      color={'gray'}
                      onClick={() => handleToggleComments(post._id)}
                    >
                      {isOpenCommentsForPost[post._id] ? 'Hide Comments' : 'Comments'}
                    </Link>
                    {canEditOrDeletePost(post.student._id) && (
                      <>
                        <Link href="#" underline="none" color={'gray'} onClick={() => handleEditPost(post)}>
                          Edit
                        </Link>
                        <Link href="#" underline="none" color={'gray'} onClick={() => handleDeleteConfirmationOpen(post)}>
                          Delete
                        </Link>
                      </>
                    )}
                  </Box>
                  {isOpenCommentsForPost[post._id] && (
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                      {post.replies.map((reply) => (
                        <ListItem key={reply._id} alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar>
                            <PersonIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={<>
                            <Typography variant="body1" component="span">
                            {reply.reply}
                            </Typography>
                            <div style={{ marginTop: '8px' }}>
                            {reply.student.name}
                            </div>
                            </>
                            }
                            secondary={
                            <Typography
                            variant="body2"
                            color="text.secondary"
                            >
                            {new Date(reply.repliedAt).toLocaleDateString()}
                            </Typography>}
                            />
                        </ListItem>
                      ))}
                      <ListItem>
                        <TextField
                          fullWidth
                          id="new-comment"
                          label="Add a Comment"
                          multiline
                          rows={2}
                          variant="outlined"
                          value={newComment}
                          onChange={handleNewCommentChange}
                        />
                      </ListItem>
                      <ListItem>
                        <Button
                          type="submit"
                          variant="contained"
                          onClick={() => handleNewCommentSubmit(post._id)}
                          disabled={!newComment.trim()}
                        >
                          Submit
                        </Button>
                      </ListItem>
                    </List>
                  )}
                </Card>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleDeleteConfirmationClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="text.primary">
            Are you sure you want to delete this post?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmationClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeletePost} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
