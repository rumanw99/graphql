// components/ViewDetailsDialog.tsx
import React from 'react';
import { Dialog, DialogContent, Typography, Button,Box,Avatar,Card } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { User } from '../../../core/models/user.type';

interface ViewDetailsDialogProps {
  post: {
    id: number;
    title: string;
    body: string;
    user: User;
  };
  onClose: () => void;
}

const ViewDetailsDialog: React.FC<ViewDetailsDialogProps> = ({ post, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <Close sx={{position:"absolute" , right:"2%" , top:"3%", cursor:"pointer"}} onClick={onClose} />
      <Typography textAlign={"center"} mt={5}>View Post</Typography>
      <DialogContent>
      <Card sx={{
        borderRadius:"12px",
        boxShadow: '0px 4px 4px 0px #00000040',
padding:"20px"
      }}>
      <Box display="flex" alignItems="center" columnGap={1}>
                        <Avatar
                            src="https://i.pravatar.cc/150?img=4"
                            sx={{
                                width: '36px',
                                height: '36px',
                                borderColor: ({ palette }) =>
                                    palette.primary.light,
                            }}
                        />

                        <Typography
                            sx={{
                                color: '#121212',
                                fontSize: 14,
                                fontWeight: '400',
                            }}
                        >
                            {post.user?.name || "No name"}
                        </Typography>
                        
                    </Box>
        
        <Typography fontWeight={400} variant="body1" paragraph>
          {post.title}
        </Typography>

        
        <Typography fontWeight={400} variant="body1" paragraph>
          {post.body}
        </Typography>
      </Card>

        <Box display={"flex"} justifyContent={"center"} mt={2}>
        <Button  variant="outlined" color="primary" onClick={onClose} sx={{fontWeight:400}}>
        Cancel
        </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewDetailsDialog;
