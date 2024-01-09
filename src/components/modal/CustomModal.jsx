// import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const CustomModal = ({ open, onClose, title, children, width, height }) => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust the max-width value as needed

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "10px", // Adding border radius to the modal
          position: "relative", // Add position relative to allow absolute positioning of close icon
        },
      }}
      maxWidth={false}
      fullWidth={false}
    >
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: "absolute",
            right: isMobile ? "14px" : "20px",
            top: isMobile ? `calc(-8px + 2%)` : "6px",
            zIndex: 1300,
            backgroundColor: "#D27561",
            color: "#fff",
            borderRadius: "30%", // Circular box for the close icon
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              backgroundColor: "#D27561",
              color: "#d1fae5",
            },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          width,
          height,
          overflow: "auto",
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar
          },
        }}
      >
        <div>
          <p className="text-xl font-bold text-dark">{title}</p>
        </div>
        {children}
      </DialogContent>
    </Dialog>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CustomModal.defaultProps = {
  width: "auto", // Default width
  height: "auto", // Default height
};

export default CustomModal;
