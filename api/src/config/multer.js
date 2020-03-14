import Multer from 'multer';

const multerConfig = {
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
};

export default multerConfig;
