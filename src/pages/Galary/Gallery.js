import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import Files from "../../modules/Files";
import Loader from '../../assets/Loader/loader'
import NoResult from '../../assets/Illustrations/Empty Box.svg'
import { Helmet } from "react-helmet-async";

export default function MasonryImageList() {
  const [itemData, setItemData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = () => {
    setLoader(true)
    Files.getFiles((respone) => {
      if (respone.status === "success") {
        setLoader(false)
        setItemData(respone.data.files);
      } else {
        setLoader(false)
        console.log(respone.data);
      }
    });
  };

  const handleImageClick = (item) => {
    setSelectedImage(item.filePath);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const loader_styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }

  return (
    <>
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Gallery Of Caset College of Computer Science" />
        <link rel="canonical" href="/Gallery" />
      </Helmet>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        {
          loader ? <Box sx={loader_styles}><Loader /></Box> : <Box sx={{ width: { xs: 350, md: 1000 }, height: 600, overflowY: "scroll" }}>
            {
              itemData?.length > 0 ? (
                <>
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.length &&
                      itemData?.map((item) => {
                        return (
                          <ImageListItem key={item._id}>
                            <img
                              src={`${item.filePath}?w=248&fit=crop&auto=format`}
                              srcSet={`${item.filePath}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={item.fileName}
                              loading="lazy"
                              onClick={() => handleImageClick(item)}
                              style={{ cursor: "pointer" }}
                            />
                          </ImageListItem>
                        )
                      })}
                  </ImageList>
                  <Modal sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} open={selectedImage !== null} onClose={handleCloseModal}>
                    <img
                      src={selectedImage}
                      alt="sle"
                      style={{ maxWidth: "80%", maxHeight: "90vh" }}
                    />
                  </Modal>
                </>
              ) : (
                <Box sx={{ width: '100%', height: "auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={NoResult} width="400px" alt="No result" />
                </Box>
              )
            }
          </Box>
        }
      </Box >
    </>
  );
}
