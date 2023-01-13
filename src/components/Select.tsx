type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
};
const Select = ({ label, options }: SelectProps) => {
  return (
    <select className='select select-bordered w-full'>
      <option value='' disabled selected>
        {label}
      </option>
      {options?.map((option) => (
        <option key={option?.label} value={option?.value}>
          {option?.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
