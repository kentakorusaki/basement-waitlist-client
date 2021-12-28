import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StorageIcon from '@mui/icons-material/Storage';

export const SidebarData = [
    {
        title: "Waitlist",
        icon: <AccessTimeIcon />,
        link: "/waitlist"
    },
    {
        title: "Serving",
        icon: <AssignmentIndIcon />,
        link: "/serving"
    },
    {
        title: "Log",
        icon: <StorageIcon />,
        link: "/directory"
    },

]

