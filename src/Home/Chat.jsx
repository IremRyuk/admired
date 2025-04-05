import ChatIcon from '@mui/icons-material/Chat';
import '../SCSS/Home/home.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import {SpeedDial,SpeedDialAction} from '@mui/material'

export default function Chat() {
  const actions = [
    { icon: <WhatsAppIcon />, name: 'Whatsappp' },
    { icon: <LocalPhoneIcon />, name: 'Phone' },
    { icon: <FacebookIcon />, name: 'Facebook' },
  ]
  return (
        <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'fixed', bottom:'5%', right:'5%'}}
        icon={<ChatIcon openicon={<ChatIcon sx={{bgcolor:'green',transition:'0.2s','&:hover':{scale: '1.15'}}}/>} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            name={action.name}
          />
        ))}
      </SpeedDial>
  )
}
