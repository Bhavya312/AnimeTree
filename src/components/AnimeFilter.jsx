import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material"
import propTypes from 'prop-types';
import Title from "./Title";

const AnimeFilter = ({handleCategory, handleSearch, category}) => {
  return(
  <>
    <div className="filter-container">
      <Title title="search animes"/>
      <form className="filter-form">
        <div className="form-group">
          <TextField id="anime-search" label="Search" variant="standard" onChange={e => handleSearch(e.target.value)}/>
        </div>

        <div className="">

          <Box>
            <FormControl sx={{minWidth:150}}>
              <Select
                id="genera-select"
                value={category}
                displayEmpty
                onChange={handleCategory}
              >
                 <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                <MenuItem value="action">Action</MenuItem>
                <MenuItem value="romance">Romance</MenuItem>
                <MenuItem value="adventure">Adventure</MenuItem>
                <MenuItem value="isekai">Isekai</MenuItem>
                <MenuItem value="crime">Crime</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </form>
    </div>
  </>
)}

AnimeFilter.propTypes = {
    handleCategory:propTypes.func,
    handleSearch:propTypes.func,
    category:propTypes.string
}
export default AnimeFilter