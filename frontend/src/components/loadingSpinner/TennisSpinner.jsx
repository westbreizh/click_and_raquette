//la balle ne s'affiche pas à revoir
import { CircularProgress } from "@mui/material";
import { SportsTennis } from "@mui/icons-material";

export default function TennisSpinner() {
  return (
    <div className="tennis-spinner">
      <CircularProgress
        size={64}
        thickness={4}
        disableShrink
        color="primary"
      />
      <SportsTennis className="tennis-ball" fontSize="large" />
    </div>
  )
}