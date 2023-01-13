import Select from './Select';
import TextArea from './TextArea';

const Card = () => {
  return (
    <div className='card p-0 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <Select
              label='Select Source Language...'
              options={[
                { value: 'en', label: 'English' },
                { value: 'ur', label: 'Urdu' },
              ]}
            />
            <TextArea placeholder='Write some text...' />
          </div>
          <div>
            <Select
              label='Select Target Language...'
              options={[
                { value: 'en', label: 'English' },
                { value: 'ur', label: 'Urdu' },
              ]}
            />
            <TextArea placeholder='Write some text...' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
