import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box} from "@mui/material";
import { rows,columns } from "./data";


export default function Contacts() {
  return (
    <Box style={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
      slots={{
        toolbar: GridToolbar,
      }}
        rows={rows}
        // @ts-ignore
        columns={columns}
        
      />
    </Box>
  )
}
