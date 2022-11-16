import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/features/language/languageSlice";
import { useAppSelector } from "../../redux/hooks";

const Language = () => {
  const dispatch = useDispatch();

  const language: any = useAppSelector(
    (state: { language: { value: any } }) => state.language.value
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(changeLanguage(event.target.value as string));
  };

  return (
    <>
      <Box sx={{ minWidth: 100 }} className="box-header">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value="en-Us">English</MenuItem>
            <MenuItem value="hi">Hindi</MenuItem>
            <MenuItem value="ur">Urdu</MenuItem>
            <MenuItem value="te">Telagu</MenuItem>
            <MenuItem value="bn">Bengali</MenuItem>
            <MenuItem value="pa">Punjabi</MenuItem>
            <MenuItem value="gu">Gujarati</MenuItem>
            <MenuItem value="kn">Kannada</MenuItem>
            <MenuItem value="ar">Arabic</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="de">German</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
            <MenuItem value="ne">Nepali</MenuItem>
            <MenuItem value="mr">Marathi</MenuItem>
            <MenuItem value="ml">Malyalam</MenuItem>
            <MenuItem value="ko">Korean</MenuItem>
            <MenuItem value="ja">Japanese</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Language;