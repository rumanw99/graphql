// components/DeletePostDialog.tsx
import React from 'react';
import { Dialog, DialogContent, Typography, Button ,Box} from '@mui/material';
import Close from '@mui/icons-material/Close';

interface DeletePostDialogProps {
  onClose: () => void;
  onDelete: () => void;
}

const DeletePostDialog: React.FC<DeletePostDialogProps> = ({ onClose, onDelete }) => {
  return (
    <Dialog open={true} onClose={onClose} sx={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
      <Close sx={{position:"absolute" , right:"2%" , top:"3%", cursor:"pointer"}} onClick={onClose} />
      <DialogContent>
        <Typography variant="body1" paragraph>
          Are you sure you want to delete this post?
        </Typography>
       <Box display={"flex"} gap={3} justifyContent={"center"}>
       <Button variant="outlined" color="primary" onClick={onClose} sx={{fontWeight:400}}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={onDelete} sx={{fontWeight:400}}>
          Delete
        </Button>
       </Box>
        
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
