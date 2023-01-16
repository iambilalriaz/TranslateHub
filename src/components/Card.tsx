import Select from './Select';
import TextArea from './TextArea';

const Card = () => {
  return (
    <div className='mt-8 card w-[90%] md:w-[70%] md:max-w-[50rem] p-0 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div>
            <Select
              label='Translate from'
              options={[
                { value: 'en', label: 'English' },
                { value: 'ur', label: 'Urdu' },
              ]}
            />
            <div className='mt-4'>
              <TextArea placeholder='Write some text...' />
            </div>
          </div>
          <div>
            <Select
              label='Translate to'
              options={[
                { value: 'en', label: 'English' },
                { value: 'ur', label: 'Urdu' },
              ]}
            />
            <div className='mt-4'>
              <TextArea placeholder='Write some text...' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
