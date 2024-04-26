import Image from 'next/image';

const ProjectCardOverlay = ({ projectPreview, projectTitle, tag, icon }) => {
  return (
    <div className="projectCardOverlay md:w-100% relative mb-5 aspect-[376/500] h-auto overflow-hidden rounded">
      <Image
        src={projectPreview?.secure_url}
        alt={`preview of ${projectTitle}`}
        width={376}
        height={500}
        quality={100}
        className="previewImg h-full w-full object-cover object-center"
      />
      <div className="overlay"></div>

      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <p className="tag absolute left-[15px] top-[15px] text-small font-light text-white xl:left-[20px] xl:top-[20px] xl:text-middle">
          {tag}
        </p>

        <Image
          src={icon?.secure_url}
          alt={`preview of ${projectTitle}`}
          width={200}
          height={180}
          className="projectLogo md:h-[130px] md:w-[160px]"
        />
      </div>
    </div>
  );
};

export default ProjectCardOverlay;
