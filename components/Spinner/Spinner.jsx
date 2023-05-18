import { ColorRing } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="mx-auto w-[150px] pt-[25vh]">
      <ColorRing
        visible={true}
        height="150"
        width="150"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#BAA48F', '#A3724B', '#BAA48F', '#33639F', '#1a1a1a']}
      />
    </div>
  );
};

export default Spinner;
