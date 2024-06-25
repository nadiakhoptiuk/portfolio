// import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';

import ProjectTypeInfo from 'components/ProjectTypeInfo/ProjectTypeInfo';
import ProjectBtnList from 'components/ProjectBtnList/ProjectBtnList';

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

        <DialogContent
          dividers
          className="md:grid md:auto-rows-max md:grid-cols-[280px_304px] md:gap-10 xl:grid-cols-[326px_auto]"
        >
          <div className="relative overflow-hidden rounded md:h-[380px] md:w-[280px] xl:h-[450px] xl:w-[326px] smOnly:mb-5">
            <Image
              src={projectPreview?.secure_url}
              alt={`preview of ${projectTitle}`}
              width={376}
              height={420}
              quality={100}
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black opacity-50 "></div>

            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
              <Image
                src={icon?.secure_url}
                alt={`preview of ${projectTitle} Logo`}
                width={200}
                height={180}
                className="projectLogo"
              />
            </div>
          </div>

          <div className="flex flex-col smOnly:mb-6">
            <p className="mb-4 text-small md:mb-6">{description}</p>
            <p className="mb-5 text-small text-navyBlue md:mb-9">{stack}</p>
            <ProjectTypeInfo role={role} isCommand={isCommand} />
            <ProjectBtnList
              buttonData={button}
              className="mt-10 notXl:hidden"
            />
          </div>

          <ProjectBtnList
            buttonData={button}
            className="mt-8 md:col-span-2 md:col-start-1 md:mt-4 md:w-full xl:!hidden"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
