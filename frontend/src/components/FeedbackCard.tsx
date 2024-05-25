import Image, { StaticImageData } from 'next/image';

interface FeedbackCardProps {
  name: string;
  text: string;
  picture: StaticImageData;
}

const FeedbackCard = ({ name, picture, text }: FeedbackCardProps) => {
  return (
    <div className='relative'>
      <Image className='rounded-xl' src={picture} alt='' />
      <div className='absolute bottom-4 bg-land px-2 py-3 border-4 border-sand border-opacity-40 rounded-xl'>
        <h3 className='font-semibold text-lg'>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
