import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
function HoverDropdown({ label, items }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (

    <Box
      onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
      onMouseLeave={() => setAnchorEl(null)}
      sx={{ position: 'relative', ml: 3 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',

        }}
      >
        <Typography sx={{ fontSize: '13px' }}>
          {label}
        </Typography>
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          onMouseEnter: () => setAnchorEl(anchorEl),
          onMouseLeave: () => setAnchorEl(null),
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item}
            sx={{ fontSize: '12px' }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <AppBar position="static" sx={{
          backgroundColor: 'black', height: 35,
          justifyContent: 'center',
          boxShadow: 'none',
        }}>
          <Toolbar>

            <Typography component="div" sx={{ flexGrow: 1, fontSize: '13px', ml: 7 }}>
              Additional 20% Off Sale Items – Please See Details
            </Typography>

            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              <HoverDropdown
                label="Setting"
                items={['My account', 'Checkout', 'Sign out']}
              />
              <HoverDropdown
                label="EUR €"
                items={['EUR €', 'USD $']}
              />
              <HoverDropdown
                label="English"
                items={['English', 'ItaLiano']}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {/* navbar2 */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'inherit', boxShadow: 'none', }}>
          <Toolbar >
            <Box sx={{ ml: 7, pt: 2 }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: 160 }}
              />
            </Box>

            <Box sx={{
              display: { xs: 'none', sm: 'flex' }, gap: 4,
              alignItems: 'center', justifyContent: 'center', ml: 7,
            }}>

              <Link component={RouterLink} to={'/'} sx={{ color: '#ec6b81' }} fontWeight="bold" underline='none' >Home</Link>
              <Link component={RouterLink} to={'/'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', }, }} fontWeight="bold" underline='none'>About Us</Link>
              <Link component={RouterLink} to={'/'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', }, }} fontWeight="bold" underline='none' >Shop</Link>
              <Link component={RouterLink} to={'/'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', }, }} fontWeight="bold" underline='none'>Blog</Link>
              <Link component={RouterLink} to={'/'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', }, }} fontWeight="bold" underline='none'>Contact Us</Link>
            </Box>
            <IconButton sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <MenuIcon></MenuIcon>
            </IconButton>

            <Box sx={{ display: 'flex', ml: 36, gap: 0.5 }}>
              <Typography component="span" sx={{ flexGrow: 1, fontSize: '16px', color: 'black', fontWeight: 300, }}>
                Call Us:
              </Typography>
              <Link component={RouterLink} to={'/'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', }, }} fontWeight="bold" underline='none'>(+123)4567890</Link>
            </Box>

            <Box sx={{ display: 'flex', gap: 2,ml:5 }}>
              <IconButton aria-label="search" sx={{ color: 'black', '&:hover': { backgroundColor: 'transparent', }, }}>
                <SearchOutlinedIcon fontSize="medium" />
              </IconButton>


              <IconButton sx={{ color: 'black', '&:hover': { backgroundColor: 'transparent',transition: '0.3s', '&:hover': { color: '#ec6b81', }, }, }}>
                <Badge
                  badgeContent={5}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#ec6b81',
                      color: 'white',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      fontSize: 12,
                    },
                  }}
                >    <ShuffleIcon fontSize="medium" />
                </Badge>
                
              </IconButton>

               <IconButton sx={{ color: 'black', '&:hover': { backgroundColor: 'transparent',transition: '0.3s', '&:hover': { color: '#ec6b81', },}, }}>
                <Badge
                  badgeContent={2}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#ec6b81',
                      color: 'white',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      fontSize: 12,
                    },
                  }}
                >    <FavoriteBorderIcon fontSize="medium" />
                </Badge>
                
              </IconButton>
              

              
               <IconButton sx={{display:'flex',gap:1, color: 'black', '&:hover': { backgroundColor: 'transparent',transition: '0.3s', '&:hover': { color: '#ec6b81', },}, }}>
                <Badge
                  badgeContent={2}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#ec6b81',
                      color: 'white',
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      fontSize: 12,
                    },
                  }}
                >    <ShoppingCartOutlinedIcon fontSize="medium" /> 

                </Badge>
               <Typography sx={{fontWeight:'bold'}}> €58.32</Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  );
}
