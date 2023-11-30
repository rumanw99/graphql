import React from 'react';
import {
    Dialog,
    Typography,
    DialogContent,
    TextField,
    Button,
    Card,
    Box
} from '@mui/material';
import { useFormik } from 'formik';
import * as postValidation from '../../../utils/postValidation';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { QueryKey } from 'react-query';
import Close from '@mui/icons-material/Close';

interface CreatePostDialogProps {
    open: boolean;
    onClose: () => void;
    queryKey: QueryKey;
}

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({
    open,
    onClose,
    queryKey,
}) => {
    const createPostMutation = useCreatePost({ queryKey });
    const createPostForm = useFormik({
        initialValues: {
            title: '',
            body: '',
        },
        validationSchema: postValidation.createPostSchema,
        onSubmit: (values) => {
            createPostMutation.mutate(values);
            onClose();
        },
    });

    return (
        <Dialog open={open} onClose={onClose}>
            <Close sx={{position:"absolute" , right:"2%" , top:"3%", cursor:"pointer"}} onClick={onClose} />
      <Typography textAlign={"center"} mt={5}>Create Post</Typography>
            <DialogContent>
                <form onSubmit={createPostForm.handleSubmit}>
                    <Card 
                    sx={{
                        borderRadius:"12px",
                        boxShadow: '0px 4px 4px 0px #00000040',
                padding:"20px"
                      }}
                    >
                    <TextField
                        {...createPostForm.getFieldProps('title')}
                        fullWidth
                        id="title"
                        name="title"
                        label="Title"
                        error={
                            createPostForm.touched.title &&
                            Boolean(createPostForm.errors.title)
                        }
                        helperText={
                            createPostForm.touched.title &&
                            createPostForm.errors.title
                        }
                        margin="normal"
                    />
                    <TextField
                        {...createPostForm.getFieldProps('body')}
                        fullWidth
                        id="body"
                        name="body"
                        label="Body"
                        multiline
                        rows={4}
                        error={
                            createPostForm.touched.body &&
                            Boolean(createPostForm.errors.body)
                        }
                        helperText={
                            createPostForm.touched.body &&
                            createPostForm.errors.body
                        }
                        margin="normal"
                    />
                    </Card>
                    <Box display={"flex"} justifyContent={"center"} mt={2}>
                    <Button type="submit" variant="contained" color="primary" sx={{fontWeight:400}}>
                        Create
                    </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreatePostDialog;
