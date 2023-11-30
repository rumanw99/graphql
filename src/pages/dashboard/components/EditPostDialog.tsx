// components/EditPostDialog.tsx

import React from 'react';
import {
    Dialog,
    DialogContent,
    TextField,
    Button,
    Typography,
    Box,
    Card,
} from '@mui/material';
import { useFormik } from 'formik';
import { Post } from '../../../core/models/post.type';
import { useUpdatePost } from '../../../hooks/useUpdatePost';
import { QueryKey } from 'react-query';
import Close from '@mui/icons-material/Close';


interface EditPostDialogProps {
    open: boolean;
    onClose: () => void;
    post: Post | null;
    queryKey: QueryKey;
}


const EditPostDialog: React.FC<EditPostDialogProps> = ({
    open,
    onClose,
    post,
    queryKey,
}) => {
    const updatePostMutation = useUpdatePost({ queryKey });

    const editPostForm = useFormik({
        initialValues: {
            title: post?.title || '',
            body: post?.body || '',
        },
        onSubmit: (values) => {
            if (post) {
                updatePostMutation.mutate({
                    postId: post.id,
                    updatedPost: values,
                });
            }
            onClose();
        },
    });

    return (
        <Dialog open={open} onClose={onClose}>
            <Close sx={{position:"absolute" , right:"2%" , top:"3%", cursor:"pointer"}} onClick={onClose} />
      <Typography textAlign={"center"} mt={5}>Edit Post</Typography>
            <DialogContent>
                <form onSubmit={editPostForm.handleSubmit}>
                   <Card
                   sx={{
                    borderRadius:"12px",
                    boxShadow: '0px 4px 4px 0px #00000040',
            padding:"20px"
                  }}
                   >
                   <TextField
                        {...editPostForm.getFieldProps('title')}
                        fullWidth
                        id="title"
                       
                        margin="normal"
                        
                    />
                    <TextField
                        {...editPostForm.getFieldProps('body')}
                        fullWidth
                        id="body"
                        
                        multiline
                        rows={4}
                        margin="normal"
                    />
                   </Card>
                    <Box display={"flex"} justifyContent={"center"} mt={2} gap={3}>
        <Button  variant="outlined" color="primary" onClick={onClose} sx={{fontWeight:400}}>
        Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" sx={{fontWeight:400}}>
                        Edit
                    </Button>
        </Box>
                    
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditPostDialog;
