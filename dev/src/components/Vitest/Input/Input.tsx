import { Dispatch, SetStateAction } from 'react';

export type InputProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export function Input({ value, setValue }: InputProps) {
  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}
