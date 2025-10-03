import CloseIcon from "@mui/icons-material/Close"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap"
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Link,
  Modal,
  Typography,
  useTheme,
} from "@mui/material"
import { useState } from "react"
import { ICertification } from "./types"

interface ICertificationCardProps {
  certification: ICertification
}

const CertificationCard = ({ certification }: ICertificationCardProps) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const issuerLogo =
    theme.palette.mode === "dark" && certification.issuerLogoDark
      ? certification.issuerLogoDark
      : certification.issuerLogo

  return (
    <Box
      sx={{
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Card
        elevation={6}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box
          sx={{
            height: 220,
            width: "100%",
            overflow: "hidden",
            position: "relative",
            "&:hover .zoom-icon": {
              opacity: 1,
            },
            "&:hover img": {
              opacity: 0.5,
            },
            cursor: "pointer",
          }}
          onClick={handleOpen}
        >
          <img
            src={process.env.PUBLIC_URL + certification.certificateImage}
            alt={certification.courseName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
          <IconButton
            className="zoom-icon"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <ZoomOutMapIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Avatar
              sx={{
                mr: 2,
                width: 40,
                height: 40,
                "& .MuiAvatar-img": {
                  objectFit: "contain",
                  transform:
                    certification.issuer === "Coursera" ? "scale(2)" : "none",
                },
              }}
              src={issuerLogo ? process.env.PUBLIC_URL + issuerLogo : undefined}
              alt={certification.issuer}
              variant="rounded"
            >
              {certification.issuer?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight="bold" component="div">
                {certification.courseName}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                {certification.issuer || "HackerRank"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Button
              variant="text"
              color="primary"
              endIcon={<OpenInNewIcon fontSize={"small"} />}
              component={Link}
              href={certification.validationLink}
              target="_blank"
              rel="noopener"
              sx={{
                textTransform: "none",
                padding: { xs: 0, md: 0.5 },
                fontSize: "0.875rem",
              }}
            >
              View Credential
            </Button>
            <Typography variant="body2" color="text.secondary">
              {certification.year || "2024"}
            </Typography>
          </Box>
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal-title"
        aria-describedby="image-modal-description"
        disableScrollLock={true}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={process.env.PUBLIC_URL + certification.certificateImage}
            alt={certification.courseName}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  )
}

export default CertificationCard
