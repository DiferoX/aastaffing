
import { v4 as uuidv4 } from 'uuid';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


export const ourTeam =
[
  {
    id: uuidv4(), 
    name: "Peter Parker",
    title: 'FOUNDER',
    image: 'https://i.pravatar.cc/450?img=12',
    code: '12',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium molestias in alias hic quaerat dignissimos aliquid consectetur unde, quibusdam quasi.',
    networks: 
    [
      { id: uuidv4(), name: <FaTwitter className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaLinkedinIn className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Natasha Romanoff",
    title: 'FOUNDER',
    image: 'https://i.pravatar.cc/450?img=5',
    code: '5',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita eveniet omnis a saepe unde architecto, nisi aliquam?',
    networks: 
    [
      { id: uuidv4(), name: <FaTwitter className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Barry Allen",
    title: 'SENIOR PARTNER',
    image: 'https://i.pravatar.cc/450?img=11',
    code: '11',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat earum exercitationem in possimus voluptatibus eaque ducimus asperiores, deleniti delectus quod.',
    networks: 
    [
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaLinkedinIn className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Peter Parker",
    title: 'FOUNDER',
    image: 'https://i.pravatar.cc/450?img=9',
    code: '12',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium molestias in alias hic quaerat dignissimos aliquid consectetur unde, quibusdam quasi.',
    networks: 
    [
      { id: uuidv4(), name: <FaTwitter className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaLinkedinIn className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Natasha Romanoff",
    title: 'FOUNDER',
    image: 'https://i.pravatar.cc/450?img=13',
    code: '5',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque expedita eveniet omnis a saepe unde architecto, nisi aliquam?',
    networks: 
    [
      { id: uuidv4(), name: <FaTwitter className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
  {
    id: uuidv4(), 
    name: "Barry Allen",
    title: 'SENIOR PARTNER',
    image: 'https://i.pravatar.cc/450?img=26',
    code: '11',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat earum exercitationem in possimus voluptatibus eaque ducimus asperiores, deleniti delectus quod.',
    networks: 
    [
      { id: uuidv4(), name: <FaFacebookF className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FaLinkedinIn className='ourTeamIconInfo' /> },
      { id: uuidv4(), name: <FiMail className='ourTeamIconInfo' /> },
    ]
  },
]
