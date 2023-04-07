import Image from 'next/image';

const ProjectCardOverlay = ({ projectPreview, projectTitle, tag, icon }) => {
  return (
    <div className="projectCardOverlay relative mb-9 h-[500px] overflow-hidden rounded">
      <Image
        src={projectPreview?.secure_url}
        alt={`preview of ${projectTitle}`}
        width={376}
        height={500}
        quality={100}
        className="previewImg h-full w-full object-cover object-center"
      />
      <div className="overlay"></div>

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <p className="tag absolute top-[20px] left-[20px] text-middle font-medium text-white">
          {tag}
        </p>
        <Image
          src={icon?.secure_url}
          alt={`preview of ${projectTitle}`}
          width={200}
          height={180}
          className="projectLogo"
        />
      </div>
    </div>
  );
};

export default ProjectCardOverlay;
