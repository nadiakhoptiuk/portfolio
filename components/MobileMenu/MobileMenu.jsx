import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from 'components/NavBar/NavBar';
import Container from 'components/Container/Container';

const MobileMenu = ({ anchors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <IconButton
        variant="text"
        onClick={handleClickOpen}
        size="medium"
        aria-label="open menu button"
      >
        <MenuRoundedIcon color="primary" fontSize="medium" />
      </IconButton>

      <Dialog
        open={isMenuOpen}
        onClose={handleClose}
        fullScreen
        classes={{ root: 'menu' }}
      >
        <Container className="container relative flex h-full items-start justify-between pt-[70px]">
          <IconButton
            autoFocus
            onClick={handleClose}
            size="medium"
            className="!absolute right-[20px] top-[15px]"
            aria-label="close menu button"
          >
            <CloseIcon color="primary" />
          </IconButton>

          <NavBar
            anchors={anchors}
            orientation="vertical"
            menu="true"
            handleClose={handleClose}
          />
        </Container>
      </Dialog>
    </>
  );
};

export default MobileMenu;
