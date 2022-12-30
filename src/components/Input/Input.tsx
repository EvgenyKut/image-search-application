import { SyntheticEvent } from 'react';
import TextField from '@mui/material/TextField';
import style from './input.module.css';
import { useAppDispatch } from '../../hooks';
import { onBlur, onFocus } from '../../store/reducers/SearchFocusSlice';

interface InputProps {
  value: string;
  onChange: (e: SyntheticEvent) => void;
  label: string;
}

const Input: React.FC<InputProps> = ({ value, label, onChange }) => {
  const dispatch = useAppDispatch();
  return (
    <TextField
      label={label}
      variant="outlined"
      type="text"
      required
      value={value}
      onChange={onChange}
      className={style.wrapper}
      onFocus={() => dispatch(onFocus())}
      onBlur={() => dispatch(onBlur())}
      data-testid="input"
    />
  );
};

export default Input;
