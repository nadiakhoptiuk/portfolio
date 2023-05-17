// import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import ProjectTypeInfo from 'components/ProjectTypeInfo/ProjectTypeInfo';
import ProjectBtnList from 'components/ProjectBtnList/ProjectBtnList';
import Image from 'next/image';

const Modal = ({
  setIsModalOpen,
  setOpenedModalId,
  isModalOpen,
  projectInfo,
}) => {
  const {
    role,
    isCommand,
    button,
    description,
    projectTitle,
    projectPreview,
    icon,
    stack,
  } = projectInfo;

  const handleClose = () => {
    setIsModalOpen(false);
    setOpenedModalId(null);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="modal with project info"
        aria-describedby="modal with project info"
        open={isModalOpen}
        transitionDuration={200}
        disableRestoreFocus
      >
        <DialogActions className="absolute right-0 top-0 h-[80px]">
          <Button autoFocus onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>

        <DialogTitle
          id="modal-title"
          className="!font-playfair !font-semibold md:text-big xl:text-[32px] xl:leading-[45px]"
        >
          {projectTitle}
        </DialogTitle>

        <DialogContent dividers className="flex">
          <div className="relative shrink-0 overflow-hidden rounded md:mr-[32px] md:h-[360px] md:w-[260px] xl:mr-9 xl:h-[420px] xl:w-[376px]">
            <Image
              src={projectPreview?.secure_url}
              alt={`preview of ${projectTitle}`}
              width={376}
              height={420}
              quality={100}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black opacity-50 "></div>

            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
              <Image
                src={icon?.secure_url}
                alt={`preview of ${projectTitle} Logo`}
                width={200}
                height={180}
                className="projectLogo"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="mb-6 text-small">{description}</p>

            <p className="mb-9 text-small text-navyBlue">{stack}</p>

            <ProjectTypeInfo role={role} isCommand={isCommand} />

            <ProjectBtnList buttonData={button} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
